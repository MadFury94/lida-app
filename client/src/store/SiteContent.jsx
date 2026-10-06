import { useEffect, useState } from 'react'
import { SiteContentContext as Context } from './useSiteContent'
import { useLocation } from 'react-router-dom'
import { team, services, caseStudies, insights } from './site'

const DEFAULTS = { team, services, caseStudies, insights }
const EMPTY = { team: [], services: [], caseStudies: [], insights: [] }
const API_BASE = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')
const source = import.meta.env.VITE_CONTENT_SOURCE || (import.meta.env.DEV || API_BASE ? 'admin' : 'static')

export function SiteContentProvider({ children }) {
  const { pathname } = useLocation()
  const [data, setData] = useState(source === 'static' ? DEFAULTS : null)
  const [error, setError] = useState('')
  const [attempt, setAttempt] = useState(0)
  useEffect(() => {
    if (source === 'static') return
    let controller
    let disposed = false
    async function refresh() {
      controller?.abort()
      controller = new AbortController()
      try {
        const response = await fetch(`${API_BASE}/api/site-data`, { signal: controller.signal, cache: 'no-store' })
        if (!response.ok) throw new Error('Content unavailable')
        const content = await response.json()
        if (!Object.keys(EMPTY).every(key => Array.isArray(content[key]))) throw new Error('Invalid content response')
        function resolve(value) {
          if (typeof value === 'string' && value.startsWith('/api/media/')) return `${API_BASE}${value}`
          if (Array.isArray(value)) return value.map(resolve)
          if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, resolve(item)]))
          return value
        }
        if (!disposed) { setData(resolve(content)); setError('') }
      } catch (err) {
        if (!disposed && err.name !== 'AbortError') setError('We couldn’t load the latest website content. Please try again.')
      }
    }
    refresh()
    const onFocus = () => refresh()
    window.addEventListener('focus', onFocus)
    const timer = setInterval(() => { if (!document.hidden) refresh() }, 60000)
    return () => { disposed = true; controller?.abort(); clearInterval(timer); window.removeEventListener('focus', onFocus) }
  }, [pathname, attempt])
  return <Context.Provider value={{ ...(data || EMPTY), loading: !data && !error, unavailable: !data && !!error, error, retry: () => setAttempt(n => n + 1) }}>{children}</Context.Provider>
}
