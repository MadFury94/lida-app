import { createContext, useContext } from 'react'

export const SiteContentContext = createContext(null)

export function useSiteContent() {
  const content = useContext(SiteContentContext)
  if (!content) throw new Error('SiteContentProvider is required.')
  return content
}
