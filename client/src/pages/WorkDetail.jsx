import { DetailSkeleton } from '../components/ContentBoundary'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSiteContent } from '../store/SiteContent'
import NotFound from './NotFound'

export default function WorkDetail() {
  const { slug } = useParams()
  const { caseStudies, loading, unavailable } = useSiteContent()
  const project = caseStudies.find(item => item.slug === slug)
  useEffect(() => {}, [slug])
  if (loading || unavailable) return <DetailSkeleton />
  if (!project) return <NotFound />
  const story = project.detailDescription
  const photos = project.detailImages
  const info = project.projectInfo
  const index = caseStudies.indexOf(project)
  const previous = caseStudies[index - 1]
  const next = caseStudies[index + 1]
  const title = story.title || `${project.client} Project Overview`
  const emphasis = title.startsWith('Positioning A New Banking Brand')
    ? 'Positioning A New Banking Brand'
    : 'Tasked With Building Credibility'
  const splitAt = title.indexOf(emphasis)
  const titleMarkup = splitAt < 0 ? <span className="hero-title-normal">{title}</span> : <><span className="hero-title-emphasis">{emphasis}</span><span className="hero-title-normal">{title.slice(splitAt + emphasis.length)}</span></>
  return <>
    <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('/assets/img/inner-page/bread-line.png')" }}><div className="light-bg"><img src="/assets/img/inner-page/light.png" alt="" /></div><div className="container"><div className="page-heading mb-0"><div className="breadcrumb-sub-title"><h1 className="text-white rr_title_anim">{titleMarkup}</h1></div><div className="breadcrumb-items"><ul><li>12+ years of experience</li><li>(2015 - 2026)</li></ul><h2 className="title wa_title_spilt_1">{project.client.split(' ')[0]}</h2></div></div></div></div>
    <section className="project-details-section fix section-padding"><div className="container"><div className="details-thumbs fix"><img src={photos.hero || project.image} alt={project.client} /></div></div><div className="container container-1680"><div className="project-details-wrapper"><div className="project-details-top-item">
      <div className="top-content"><h2>{story.subtitle || story.title}</h2><p style={{ whiteSpace: 'pre-line' }}>{story.content}</p></div>
      <div className="project-details-info-item">{[['Client', info.client || project.client], ['Services', info.services], ['Industry', project.sector], ['Platform', info.platform], ['Date', info.date || project.year]].filter(([, value]) => value).map(([label, value]) => <div key={label} className="content"><span>{label}:</span><p>{value}</p></div>)}</div>
      {photos.main && <div className="project-details-image"><img src={photos.main} alt={`${project.client} project`} /></div>}
      <div className="row g-4"><div className="col-lg-7"><div className="left-text"><h2>The challenge</h2><p style={{ whiteSpace: 'pre-line' }}>{project.challenge}</p></div></div><div className="col-lg-5"><div className="details-content"><h2>Our solution</h2><p style={{ whiteSpace: 'pre-line' }}>{project.solution}</p><ul className="details-list">{story.features.map((feature, i) => <li key={i}><i className="fa-solid fa-check" /> {feature}</li>)}</ul></div></div></div>
      {photos.gallery.length > 0 && <div className="details-image-item"><div className="row g-4">{photos.gallery.map((src, i) => <div className="col-lg-6 col-md-6" key={i}><div className="thumb"><img src={src} alt={`${project.client} gallery ${i + 1}`} /></div></div>)}</div></div>}
      {project.methodology.length > 0 && <><div className="left-text mb-4"><h2>Our approach</h2></div><div className="row">{project.methodology.map((step, i) => <div className="col-xl-3 col-lg-4 col-md-6" key={i}><div className="details-box"><span className="number">{step.step || String(i + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.description}</p></div></div>)}</div></>}
      <div className="details-bottom-content"><div className="left-text"><h2>{project.finalResult.title || 'Final result'}</h2></div><div className="right-content"><p style={{ whiteSpace: 'pre-line' }}>{project.finalResult.description}</p><p>{project.impact}</p>{project.finalResult.keyAchievements && <p><strong>Key achievements: </strong>{project.finalResult.keyAchievements}</p>}{project.clientName && <p>{project.clientName}{project.clientRole && ` · ${project.clientRole}`}</p>}</div></div>
      <div className="row g-4">{project.stats.map((stat, i) => <div className="col-md-4" key={i}><div className="details-box"><h3>{stat.value}</h3><p>{stat.label}</p></div></div>)}</div><div className="slider-button d-flex align-items-center justify-content-between">{previous ? <Link to={`/work/${previous.slug}`}>← {previous.client}</Link> : <span />}<Link to="/work">All projects</Link>{next ? <Link to={`/work/${next.slug}`}>{next.client} →</Link> : <Link to="/contact">Get in touch →</Link>}</div>
    </div></div></div></section>
  </>
}
