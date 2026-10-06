import { useSiteContent } from '../store/useSiteContent'

export default function ContentBoundary({ children }) {
  const { loading, unavailable, error, retry } = useSiteContent()
  if (loading) return <div role="status" className="container section-padding">Loading content…</div>
  if (unavailable) return <div role="alert" className="container section-padding"><p>{error}</p><button onClick={retry}>Try again</button></div>
  return children
}

export function DetailSkeleton() {
  return <ContentBoundary><div role="status" className="container section-padding">Loading content…</div></ContentBoundary>
}
