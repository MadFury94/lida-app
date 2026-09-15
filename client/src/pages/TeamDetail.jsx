import { DetailSkeleton } from '../components/ContentBoundary'
import { Link, useParams } from 'react-router-dom'
import { useSiteContent } from '../store/SiteContent'
import NotFound from './NotFound'

export default function TeamDetail() {
  const { slug } = useParams()
  const { team, loading, unavailable } = useSiteContent()
  const member = team.find(item => item.slug === slug)
  if (loading || unavailable) return <DetailSkeleton />
  if (!member) return <NotFound />
  return <section className="section-padding"><div className="container"><Link to="/team">← All team members</Link><div className="row g-5 align-items-center mt-4"><div className="col-lg-5"><img src={member.image} alt={member.name} style={{ width: '100%', borderRadius: 16 }} /></div><div className="col-lg-7"><p>{member.role}</p><h1>{member.name}</h1><p style={{ whiteSpace: 'pre-line', marginTop: 24 }}>{member.bio}</p><div className="d-flex gap-4 mt-4">{Object.entries(member.social || {}).filter(([, url]) => url && url !== '#').map(([name, url]) => <a key={name} href={url} target="_blank" rel="noreferrer">{name === 'linkedin' ? 'LinkedIn' : 'Twitter / X'}</a>)}</div></div></div></div></section>
}
