import { useSiteContent } from '../store/SiteContent'

export default function ContentBoundary({ children, variant = 'cards', count = 3, label = 'content' }) {
  const { loading, unavailable, retry } = useSiteContent()
  if (unavailable) return (
    <div className="content-unavailable" role="alert">
      <span className="content-unavailable-mark" aria-hidden="true">&#8599;</span>
      <p>We couldn’t load {label}.</p>
      <button type="button" onClick={retry}>Try again <span aria-hidden="true">&#8599;</span></button>
    </div>
  )
  if (!loading) return children
  return (
    <div className={`content-skeleton content-skeleton--${variant}`} role="status" aria-busy="true">
      <span className="skeleton-sr-only">Loading {label}</span>
      <div className="skeleton-grid" aria-hidden="true">
        {Array.from({ length: count }, (_, index) => (
          <div className="skeleton-card" key={index}>
            <div className="skeleton-surface skeleton-image" />
            <div className="skeleton-copy">
              <div className="skeleton-surface skeleton-eyebrow" />
              <div className="skeleton-surface skeleton-title" />
              <div className="skeleton-surface skeleton-line" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function DetailSkeleton() {
  return <section className="section-padding"><div className="container"><ContentBoundary variant="detail" count={1} label="page details" /></div></section>
}
