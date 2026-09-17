import { useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

const STORAGE_KEY = 'site-scroll-positions'

export default function usePageLifecycle() {
  const location = useLocation()
  const navigation = useNavigationType()
  const positions = useRef(new Map())

  useLayoutEffect(() => {
    try { positions.current = new Map(JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '[]')) } catch { /* optional */ }
    const original = history.scrollRestoration
    history.scrollRestoration = 'manual'
    return () => { history.scrollRestoration = original }
  }, [])

  useLayoutEffect(() => {
    const root = document.getElementById('smooth-content')
    if (!root) return undefined
    let timer; let restoreTimer; let disposed = false
    const saved = navigation === 'POP' ? (positions.current.get(location.key) || 0) : 0
    const smoother = window.ScrollSmoother?.get?.()
    let wow
    const restore = () => {
      if (disposed) return
      const anchor = location.hash ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null
      if (anchor) { smoother?.scrollTo(anchor, false, 'top top'); if (!smoother) anchor.scrollIntoView({ behavior: 'instant' }) }
      else if (smoother) smoother.scrollTo(saved, false)
      else window.scrollTo({ top: saved, left: 0, behavior: 'instant' })
    }
    const refresh = () => { clearTimeout(timer); timer = setTimeout(() => { if (!disposed) { window.ScrollTrigger?.refresh(); restore() } }, 100) }
    const record = () => {
      positions.current.set(location.key, smoother?.scrollTop?.() ?? window.scrollY)
      if (positions.current.size > 100) positions.current.delete(positions.current.keys().next().value)
    }
    const persist = () => { record(); try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify([...positions.current])) } catch { /* optional */ } }
    const beforeClick = event => {
      const link = event.target.closest?.('a[href]')
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      if (link.target && link.target !== '_self') return
      const destination = new URL(link.href, window.location.href)
      if (destination.origin === window.location.origin && destination.href !== window.location.href) persist()
    }
    restore()
    if (window.WOW) { wow = new window.WOW({ live: false }); wow.init() }
    window.ScrollTrigger?.refresh(); restoreTimer = setTimeout(restore, 280)
    root.addEventListener('load', refresh, true); root.addEventListener('error', refresh, true)
    window.addEventListener('resize', refresh); window.addEventListener('scroll', record, { passive: true }); window.addEventListener('pagehide', persist)
    document.addEventListener('click', beforeClick, true)
    const observer = new ResizeObserver(refresh); observer.observe(root); document.fonts?.ready.then(refresh)
    return () => {
      disposed = true; persist(); clearTimeout(timer); clearTimeout(restoreTimer); observer.disconnect()
      wow?.stop()
      root.removeEventListener('load', refresh, true); root.removeEventListener('error', refresh, true); window.removeEventListener('resize', refresh); window.removeEventListener('scroll', record); window.removeEventListener('pagehide', persist); document.removeEventListener('click', beforeClick, true)
    }
  }, [location.key, location.pathname, location.hash, navigation])
}
