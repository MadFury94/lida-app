import { useSiteContent } from '../store/useSiteContent'
import usePageTitle from '../hooks/usePageTitle'
import { Link, useParams } from 'react-router-dom'

import NotFound from './NotFound'

const seoTitles = {
  'calpak-nigeria': 'Calpak Nigeria Case Study | Energy Market Entry Strategy | Solutions Media',
  'nuts-and-bolts': 'Nuts & Bolts Case Study | Automotive Brand Repositioning | Solutions Media',
  'duxbank': 'Duxbank Case Study | Financial Brand Identity and Market Entry | Solutions Media',
  'manitowoc-savvytech': 'Savvytech / Manitowoc Case Study | B2B Digital Strategy | Solutions Media',
}

export default function WorkDetail() {
  const { caseStudies } = useSiteContent()
  const { slug } = useParams()
  const project = caseStudies.find(item => item.slug === slug)
  usePageTitle(project ? (seoTitles[slug] || `${project.client} Case Study | Solutions Media`) : undefined)

  if (!project) return <NotFound />

  const index = caseStudies.indexOf(project)
  const previous = caseStudies[index - 1]
  const next = caseStudies[index + 1]

  return (
    <>
      <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('/assets/img/inner-page/bread-line.png')" }}>
        <div className="light-bg"><img src="/assets/img/inner-page/light.png" alt="" /></div>
        <div className="container">
          <div className="page-heading mb-0">
            <div className="breadcrumb-sub-title">
              <h1 className="text-white rr_title_anim">{project.detailDescription?.title || <><span>{project.client}</span> Case Study</>}</h1>
            </div>
            <div className="breadcrumb-items">
              <ul><li>{project.sector}</li><li>Solutions Media</li></ul>
              <h2 className="title wa_title_spilt_1">Our Work</h2>
            </div>
          </div>
        </div>
      </div>
      <section className="project-details-section fix section-padding">
        <div className="container">
          <div className="details-thumbs fix"><img src={project.detailImages?.hero || project.image} alt={project.client} /></div>
        </div>
        <div className="container container-1680">
          <div className="project-details-wrapper">
            <div className="project-details-top-item">
              <div className="top-content"><h2>{project.detailDescription?.subtitle || project.client}</h2><p style={{ whiteSpace: 'pre-line' }}>{project.detailDescription?.content || project.tags.join(', ')}</p></div>
              <div className="project-details-info-item">
                <div className="content"><span>Client:</span><p>{project.projectInfo?.client || project.client}</p></div>
                <div className="content"><span>Industry:</span><p>{project.sector}</p></div>
                <div className="content"><span>Focus:</span><p>{project.projectInfo?.services || project.tags.join(', ')}</p></div>
              </div>
              {project.projectInfo?.platform && <p>Platform: {project.projectInfo.platform}</p>}
              {(project.projectInfo?.date || project.year) && <p>Date: {project.projectInfo?.date || project.year}</p>}
              {project.detailImages?.main && <div className="project-details-image"><img src={project.detailImages.main} alt={`${project.client} project`} /></div>}
              <div className="row g-4">
                <div className="col-lg-7"><div className="left-text"><h2>The challenge</h2><p>{project.challenge}</p></div></div>
                <div className="col-lg-5"><div className="details-content"><h2>Our solution</h2><p>{project.solution}</p></div></div>
              </div>
              {project.detailDescription?.features?.length > 0 && <ul className="details-list">{project.detailDescription.features.map(feature => <li key={feature}>{feature}</li>)}</ul>}
              {project.detailImages?.gallery?.length > 0 && <div className="details-image-item"><div className="row g-4">{project.detailImages.gallery.map((src, i) => <div className="col-md-6" key={src}><div className="thumb"><img src={src} alt={`${project.client} gallery ${i + 1}`} /></div></div>)}</div></div>}
              {project.methodology?.length > 0 && <div className="row">{project.methodology.map((step, i) => <div className="col-md-4" key={i}><div className="details-box"><span>{step.step}</span><h3>{step.title}</h3><p>{step.description}</p></div></div>)}</div>}
              <div className="details-bottom-content">
                <div className="left-text"><h2>{project.finalResult?.title || (project.clientName ? 'Client perspective' : 'The results')}</h2></div>
                <div className="right-content">
                  <p>{project.finalResult?.description}</p><p>{project.impact}</p>{project.finalResult?.keyAchievements && <p>{project.finalResult.keyAchievements}</p>}
                  {project.clientName && <p>{project.clientName} &middot; {project.clientRole}</p>}
                </div>
              </div>
              <div className="row g-4">
                {project.stats.map(stat => <div className="col-md-4" key={stat.label}><div className="details-box"><h3>{stat.value}</h3><p>{stat.label}</p></div></div>)}
              </div>
              <div className="slider-button d-flex flex-wrap gap-3 align-items-center justify-content-between">
                {previous ? <Link to={`/work/${previous.slug}`}>&larr; {previous.client}</Link> : <span />}
                <Link to="/work">All projects</Link>
                {next ? <Link to={`/work/${next.slug}`}>{next.client} &rarr;</Link> : <Link to="/contact">Get in touch &rarr;</Link>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
