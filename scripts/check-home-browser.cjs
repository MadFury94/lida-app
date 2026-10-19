// Run after building and serving client/dist on port 4173.
const { spawn } = require('node:child_process')
const { mkdtempSync, writeFileSync } = require('node:fs')
const { tmpdir } = require('node:os')
const { join } = require('node:path')
const assert = require('node:assert/strict')
const pause = ms => new Promise(resolve => setTimeout(resolve, ms))
const profile = mkdtempSync(join(tmpdir(), 'sm-home-browser-'))
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', '--disable-gpu', '--no-first-run', '--remote-debugging-port=9225', `--user-data-dir=${profile}`, 'about:blank'], { windowsHide: true, stdio: 'ignore' })
let socket
const deadline = setTimeout(() => { console.error('Browser check timed out'); socket?.close(); chrome.kill(); process.exit(1) }, 45000)
async function main() {
  const site = await import(require('node:url').pathToFileURL(join(__dirname, '../client/src/store/site.js')))
  const fixture = Buffer.from(JSON.stringify({ services: site.services, caseStudies: site.caseStudies, team: site.team, insights: site.insights })).toString('base64')
  let targets
  for (let i = 0; i < 40; i++) {
    try { targets = await (await fetch('http://localhost:9225/json')).json(); break } catch { await pause(250) }
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
  const state = await evaluate(`({ title: document.title, hero: !!document.querySelector('.hero-3'), services: !!document.querySelector('.service-slider-3')?.swiper, testimonials: !!document.querySelector('.testimonial-slider-3')?.swiper, pins: window.ScrollTrigger.getAll().filter(t => t.pin && document.querySelector('.sm-home-3')?.contains(t.pin)).length, overflow: document.documentElement.scrollWidth > innerWidth, broken: [...document.querySelectorAll('.sm-home-3 img')].filter(i => i.complete && !i.naturalWidth).map(i => i.src) })`)
  console.log('Desktop:', JSON.stringify(state))
  console.log('Browser errors:', JSON.stringify(errors))
  assert.ok(state.hero && state.services && state.testimonials && state.pins > 0)
  assert.equal(state.overflow, false)
  assert.deepEqual(state.broken, [])
  assert.equal(await evaluate(`document.querySelectorAll('.powerful-feature-section .marquee').length`), 2)
  assert.equal(await evaluate(`document.querySelectorAll('.powerful-feature-section .icon-box').length`), 72)
  assert.equal(await evaluate(`document.querySelectorAll('.news-left-items').length`), 1)
  assert.equal(await evaluate(`document.querySelectorAll('.news-right-list > li').length`), 2)
  await evaluate(`window.ScrollTrigger.refresh(); const smooth = window.ScrollSmoother?.get(); if (smooth) smooth.scrollTo(document.querySelector('footer'), false, 'bottom bottom'); else window.scrollTo(0, document.body.scrollHeight)`)
  await pause(3500)
  const scrollBefore = await evaluate('window.scrollY')
  await evaluate(`document.querySelector('.sm-home-3 img').dispatchEvent(new Event('load')); window.dispatchEvent(new Event('resize'))`)
  await pause(3500)
  const footer = await evaluate(`({ scroll: window.scrollY, top: document.querySelector('footer').getBoundingClientRect().top, height: innerHeight, body: document.body.scrollHeight, content: document.querySelector('#smooth-content').scrollHeight, smooth: window.ScrollSmoother?.get()?.scrollTop() })`)
  console.log('Footer:', JSON.stringify(footer))
  assert.ok(scrollBefore > 1000 && footer.scroll > 1000 && footer.top < footer.height)
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true })
  await evaluate('window.ScrollSmoother?.get()?.scrollTo(0, false); window.scrollTo(0, 0)')
  await pause(3500)
  assert.equal(await evaluate('document.documentElement.scrollWidth > innerWidth'), false)
  assert.ok(await evaluate('document.querySelector(".hero-3").getBoundingClientRect().top < innerHeight'))
  const shot = await send('Page.captureScreenshot', { format: 'png' })
  const screenshot = join(profile, 'mobile.png')
  writeFileSync(screenshot, Buffer.from(shot.data, 'base64'))
  console.log('Mobile screenshot:', screenshot)
  await evaluate(`document.querySelector('a[href="/about"]').click()`)
  await pause(1000)
  await evaluate(`document.querySelector('a[href="/"]').click()`)
  await pause(3500)
  assert.ok(await evaluate(`!!document.querySelector('.service-slider-3')?.swiper && !!document.querySelector('.hero-3')`))
  console.log('Browser errors:', JSON.stringify(errors))
  assert.deepEqual(errors, [])
  await send('Browser.close')
}
main().catch(error => { console.error(error); process.exitCode = 1 }).finally(() => { clearTimeout(deadline); socket?.close(); chrome.kill() })
