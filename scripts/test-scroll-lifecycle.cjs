const assert = require('node:assert/strict')
const { readFileSync } = require('node:fs')
const { runInNewContext } = require('node:vm')
const { test } = require('node:test')

const source = readFileSync(require('node:path').join(__dirname, '../client/src/hooks/usePageLifecycle.js'), 'utf8')
  .replace(/^import .*$/gm, '')
  .replace('export default function', 'function')

for (const smooth of [false, true]) {
  for (const navigation of ['PUSH', 'POP']) {
    test(`${navigation}, ${smooth ? 'smooth' : 'native'}: layout updates never reset user scroll`, () => {
      const effects = []
      const timers = new Map()
      const rootEvents = {}
      const windowEvents = {}
      let resize, fontsReady, position = 0, scrollCalls = 0, refreshes = 0
      const move = value => { position = value; scrollCalls++ }
      const root = {
        addEventListener: (name, fn) => { rootEvents[name] = fn },
        removeEventListener: name => { delete rootEvents[name] },
      }
      const smoother = { scrollTo: move, scrollTop: () => position }
      const context = {
        useLayoutEffect: fn => effects.push(fn),
        useRef: value => ({ current: value }),
        useLocation: () => ({ key: 'page', pathname: '/', hash: '' }),
        useNavigationType: () => navigation,
        sessionStorage: { getItem: () => JSON.stringify([['page', 700]]), setItem() {} },
        history: { scrollRestoration: 'auto' },
        document: {
          getElementById: () => root,
          fonts: { ready: { then: fn => { fontsReady = fn } } },
          addEventListener() {}, removeEventListener() {},
        },
        window: {
          ScrollSmoother: { get: () => smooth ? smoother : null },
          ScrollTrigger: { refresh: () => refreshes++ },
          scrollTo: ({ top }) => move(top),
          get scrollY() { return position },
          addEventListener: (name, fn) => { windowEvents[name] = fn },
          removeEventListener: name => { delete windowEvents[name] },
        },
        ResizeObserver: class {
          constructor(fn) { resize = fn }
          observe() {}
          disconnect() {}
        },
        setTimeout: fn => { const id = Symbol(); timers.set(id, fn); return id },
        clearTimeout: id => timers.delete(id),
      }
      runInNewContext(`${source}\nusePageLifecycle(true)`, context)
      const cleanup = effects.map(fn => fn())
      assert.equal(position, navigation === 'POP' ? 700 : 0)
      assert.equal(scrollCalls, 1)
      position = 3500
      windowEvents.scroll()
      for (const update of [rootEvents.load, rootEvents.error, windowEvents.resize, resize, fontsReady]) {
        update()
        for (const [id, callback] of timers) { timers.delete(id); callback() }
        assert.equal(position, 3500)
        assert.equal(scrollCalls, 1)
      }
      assert.equal(refreshes, 6)
      rootEvents.load()
      cleanup.reverse().forEach(fn => fn?.())
      assert.equal(timers.size, 0)
    })
  }
}
