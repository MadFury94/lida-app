import Cookies from 'js-cookie'

const DEFAULT_PRODUCTION_API = 'https://lida-backend.onochieazukaeme.workers.dev'
export const API_BASE = (import.meta.env.VITE_API_BASE_URL || (import.meta.env.PROD ? DEFAULT_PRODUCTION_API : '')).replace(/\/$/, '')
export const SITE_BASE = (import.meta.env.VITE_SITE_URL || (import.meta.env.DEV ? 'http://localhost:3000' : 'https://lida.ng')).replace(/\/$/, '')

export async function adminApi(path, options = {}) {
  const response = await fetch(`${API_BASE}/api/admin${path}`, {
    ...options,
    headers: { Authorization: `Bearer ${Cookies.get('admin-token')}`, ...(options.body && !(options.body instanceof FormData) ? { 'Content-Type': 'application/json' } : {}), ...options.headers },
  })
  const data = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(response.status === 401 ? 'Your session expired. Sign out and sign in again.' : data.error || 'Request failed. Please try again.')
  return data
}

export function imageUrl(path) {
  if (!path) return ''
  if (path.startsWith('/assets/')) return `${SITE_BASE}${path}`
  if (path.startsWith('/api/')) return `${API_BASE}${path}`
  return path
}
