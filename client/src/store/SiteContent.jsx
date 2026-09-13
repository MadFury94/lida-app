import { createContext, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Context = createContext(null)
const API_BASE = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')

export function SiteContentProvider({ children }) {
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [attempt, setAttempt] = useState(0)
  const location = useLocation()
  useEffect(() => {
    let controller
    async function refresh() {
      controller?.abort()
      controller = new AbortController()
      const signal = controller.signal
      try {
        const response = await fetch(`${API_BASE}/api/site-data`, { signal, cache: 'no-store' })
        if (!response.ok) throw new Error('Content unavailable')
        const content = await response.json()
        if (!['team', 'caseStudies', 'services', 'insights'].every(key => Array.isArray(content[key]))) throw new Error('Invalid content response')
        // Media uploaded by the admin is served by the backend, even on separate origins.
        function resolve(value) {
          if (typeof value === 'string' && value.startsWith('/api/')) return `${API_BASE}${value}`
          if (Array.isArray(value)) return value.map(resolve)
          if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, resolve(item)]))
          return value
        }
        setData(resolve(content)); setError('')
      } catch (err) { if (err.name !== 'AbortError') setError('We couldn’t load the website content. Please try again.') }
    }
    refresh()
    const onFocus = () => refresh()
    window.addEventListener('focus', onFocus)
    const timer = window.setInterval(() => { if (!document.hidden) refresh() }, 60000)
    return () => { controller?.abort(); window.removeEventListener('focus', onFocus); window.clearInterval(timer) }
  }, [attempt, location.pathname])
  if (error || !data) return <div className="container section-padding" style={{ minHeight: '70vh', display: 'grid', placeContent: 'center', textAlign: 'center' }}><h1>{error ? 'Content unavailable' : 'Loading…'}</h1><p role={error ? 'alert' : 'status'}>{error || 'Preparing the latest content from Lida.'}</p>{error && <button className="theme-btn" onClick={() => { setError(''); setAttempt(value => value + 1) }}>Try again</button>}</div>
  return <Context.Provider value={data}>{children}</Context.Provider>
}

export function useSiteContent() {
  const data = useContext(Context)
  if (!data) throw new Error('useSiteContent requires SiteContentProvider')
  return data
}
