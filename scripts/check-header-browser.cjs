// Run after building and serving client/dist on port 4173.
const { spawn } = require('node:child_process')
const { mkdtempSync, writeFileSync } = require('node:fs')
const { tmpdir } = require('node:os')
const { join } = require('node:path')
const assert = require('node:assert/strict')
const pause = ms => new Promise(resolve => setTimeout(resolve, ms))
const profile = mkdtempSync(join(tmpdir(), 'sm-home-browser-'))
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', '--disable-gpu', '--no-first-run', '--remote-debugging-port=9226', `--user-data-dir=${profile}`, 'about:blank'], { windowsHide: true, stdio: 'ignore' })
let socket
const deadline = setTimeout(() => { console.error('Browser check timed out'); socket?.close(); chrome.kill(); process.exit(1) }, 60000)
async function main() {
  const site = await import(require('node:url').pathToFileURL(join(__dirname, '../client/src/store/site.js')))
  const fixture = Buffer.from(JSON.stringify({ services: site.services, caseStudies: site.caseStudies, team: site.team, insights: site.insights })).toString('base64')
  let targets
  for (let i = 0; i < 40; i++) {
    try { targets = await (await fetch('http://localhost:9226/json')).json(); break } catch { await pause(250) }
  }
  assert.ok(targets, 'Chrome debugging endpoint starts')
  socket = new WebSocket(targets.find(target => target.type === 'page').webSocketDebuggerUrl)
  await new Promise((resolve, reject) => {
    socket.addEventListener('open', resolve, { once: true })
    socket.addEventListener('error', reject, { once: true })
  })
  let id = 0
  const pending = new Map(), errors = []
  socket.addEventListener('message', event => {
    const message = JSON.parse(event.data)
    if (message.id) {
      const callback = pending.get(message.id)
      pending.delete(message.id)
      callback?.(message)
    } else if (message.method === 'Runtime.exceptionThrown') errors.push(message.params.exceptionDetails.text + ': ' + message.params.exceptionDetails.exception?.description)
    else if (message.method === 'Fetch.requestPaused') send('Fetch.fulfillRequest', { requestId: message.params.requestId, responseCode: 200, responseHeaders: [{ name: 'Content-Type', value: 'application/json' }, { name: 'Access-Control-Allow-Origin', value: '*' }], body: fixture })
  })
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const requestId = ++id
    pending.set(requestId, message => message.error ? reject(message.error) : resolve(message.result))
    socket.send(JSON.stringify({ id: requestId, method, params }))
  })
  const evaluate = async expression => {
    const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })
    if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails))
    return result.result.value
  }
  await send('Runtime.enable')
  await send('Page.enable')
  // Local preview has no CMS server; exercise the real async content path with
  // the site's checked-in content, without changing production configuration.
  await send('Fetch.enable', { patterns: [{ urlPattern: '*api/site-data*' }] })
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false })
  await send('Page.navigate', { url: 'http://127.0.0.1:4173/' })
  for (let attempt = 0; attempt < 40; attempt++) {
    if (await evaluate(`!!document.querySelector('.service-slider-3')?.swiper`)) break
    await pause(250)
  }
  await pause(1000)
  await pause(3000)
  for (const width of [1920, 1440, 1200]) {
    await send('Emulation.setDeviceMetricsOverride', { width, height: 1000, deviceScaleFactor: 1, mobile: false })
    await pause(500)
    const geometry = await evaluate(`(() => {
      const rect = e => { const r=e.getBoundingClientRect(); return {left:r.left,right:r.right,top:r.top,bottom:r.bottom,height:r.height,center:r.top+r.height/2} }
      const header=document.querySelector('.solution-header'), nav=header.querySelector('.site-header-nav')
      return {header:rect(header), logo:rect(nav.querySelector('.site-logo')), links:[...nav.querySelectorAll('.nav-links > li > .nav-link')].map(rect), action:rect(nav.querySelector('.header-right')), overflow:document.documentElement.scrollWidth>innerWidth}
    })()`)
    console.log(width, JSON.stringify(geometry))
    assert.equal(geometry.overflow, false)
    assert.ok(geometry.header.height <= 100)
    assert.ok(geometry.action.right <= width)
    assert.ok(geometry.logo.right < geometry.links[0].left)
    assert.ok(geometry.links.at(-1).right < geometry.action.left)
    assert.ok(geometry.links.every(link => Math.abs(link.center - geometry.logo.center) < 2))
  }
  await evaluate(`document.querySelector('.has-megamenu > a').focus()`)
  await pause(350)
  assert.equal(await evaluate(`getComputedStyle(document.querySelector('.services-mega-menu')).visibility`), 'visible')
  await evaluate(`document.activeElement.blur(); document.querySelector('.offcanvas-btn').click()`)
  await pause(450)
  assert.ok(await evaluate(`document.querySelector('.offcanvas-menu').classList.contains('active')`))
  await evaluate(`document.querySelector('.offcasvas-close').click()`)
  assert.equal(await evaluate(`document.querySelector('.offcanvas-menu').classList.contains('active')`), false)
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false })
  await pause(500)
  const desktop = await send('Page.captureScreenshot', { format: 'png' })
  writeFileSync(join(profile, 'header-desktop.png'), Buffer.from(desktop.data, 'base64'))
  await evaluate(`(() => { const smoother = window.ScrollSmoother?.get(); if (smoother) smoother.scrollTo(400, false); else window.scrollTo(0, 400) })()`)
  await pause(2500)
  const sticky = await evaluate(`(() => { const header=document.querySelector('.solution-header'), r=header.getBoundingClientRect(); return {active:header.classList.contains('sticky-menu'), top:r.top, height:r.height} })()`)
  console.log('Sticky:', JSON.stringify(sticky))
  assert.ok(sticky.active && sticky.top === 0 && sticky.height === 90)
  await evaluate(`(() => { const smoother = window.ScrollSmoother?.get(); if (smoother) smoother.scrollTo(0, false); else window.scrollTo(0, 0) })()`)
  await pause(2500)
  for (const width of [1024, 390, 320]) {
    await send('Emulation.setDeviceMetricsOverride', { width, height: 844, deviceScaleFactor: 1, mobile: true })
    await pause(500)
    const geometry = await evaluate(`(() => { const header=document.querySelector('.solution-header'), logo=header.querySelector('.mobile-topbar .site-logo').getBoundingClientRect(), toggle=header.querySelector('.bars').getBoundingClientRect(); return {height:header.getBoundingClientRect().height, delta:Math.abs(logo.top+logo.height/2-toggle.top-toggle.height/2), right:toggle.right, desktop:getComputedStyle(header.querySelector('.header-main')).display, overflow:document.documentElement.scrollWidth>innerWidth} })()`)
    console.log(width, JSON.stringify(geometry))
    assert.ok(geometry.height <= 80 && geometry.delta < 2 && geometry.right <= width)
    assert.equal(geometry.desktop, 'none')
    assert.equal(geometry.overflow, false)
    await evaluate(`document.querySelector('.bars').click()`)
    await pause(350)
    assert.equal(await evaluate(`document.querySelector('.bars').getAttribute('aria-expanded')`), 'true')
    await evaluate(`document.querySelector('.sub-mobile-menu > a').click()`)
    await pause(300)
    assert.equal(await evaluate(`getComputedStyle(document.querySelector('.sub-mobile-menu > ul')).display`), 'block')
    await evaluate(`document.querySelector('.sub-mobile-menu > a').click()`)
    await pause(300)
    assert.equal(await evaluate(`getComputedStyle(document.querySelector('.sub-mobile-menu > ul')).display`), 'none')
    await evaluate(`document.querySelector('.close-mobile-menu').click()`)
    assert.equal(await evaluate(`document.querySelector('.mobile-menu-main').classList.contains('active')`), false)
    assert.equal(await evaluate(`document.body.classList.contains('no-scroll')`), false)
    if (width === 390) { const shot=await send('Page.captureScreenshot',{format:'png'}); writeFileSync(join(profile,'header-mobile.png'),Buffer.from(shot.data,'base64')) }
  }
  await evaluate(`document.querySelector('.bars').click(); document.querySelector('.mobile-menu-main a[href="/about"]').click()`)
  await pause(800)
  assert.equal(await evaluate(`document.querySelector('.mobile-menu-main').classList.contains('active')`), false)
  assert.equal(await evaluate(`document.body.classList.contains('no-scroll')`), false)
  console.log('Screenshots:', profile)
  console.log('Browser errors:', JSON.stringify(errors))
  assert.deepEqual(errors, [])
  await send('Browser.close')
}
main().catch(error => { console.error(error); process.exitCode = 1 }).finally(() => { clearTimeout(deadline); socket?.close(); chrome.kill() })
