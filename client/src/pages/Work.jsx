import { useSiteContent } from '../store/useSiteContent'
import { faqs } from '../store/site'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function Work() {
  const { caseStudies } = useSiteContent()
  
  useEffect(() => {
    // Set page title
    document.title = 'Solutions Media | Projects and Case Studies | Strategy, Creative and Growth'
    
    if (window.$ && window.$.fn.counterUp) window.$('.count').counterUp({ delay: 10, time: 1000 })
  }, [])

  // Split projects into two columns for the layout
  const leftColumnProjects = caseStudies.filter((_, index) => index % 2 === 0)
  const rightColumnProjects = caseStudies.filter((_, index) => index % 2 === 1)

  return (
    <>
      {/* Breadcrumb Section Start */}
      <div className="breadcrumb-wrapper bg-cover" style={{backgroundImage: "url('/assets/img/inner-page/bread-line.png')"}}>
        <div className="light-bg">
          <img src="/assets/img/inner-page/light.png" alt="img" />
        </div>
        <div className="container">
          <div className="page-heading mb-0">
            <div className="breadcrumb-sub-title">
              <h1 className="text-white rr_title_anim">
                <span style={{ fontStyle: 'italic' }}>More Than Beautiful Work</span>{' '}
                <strong>Built to Move Businesses Forward.</strong>
              </h1>
            </div>
            <div className="breadcrumb-items">
              <ul>
                <li>Strategy. Creative. Growth.</li>
              </ul>
              <h2 className="title wa_title_spilt_1">
                Projects and Case Studies
              </h2>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Section Start */}
      <section className="project-section-5 fix section-padding pt-0">
        <div className="container container-1680">
          <div className="row">
            {caseStudies.length === 0 && <p role="status" className="py-5 text-center">New projects are coming soon.</p>}
            {/* Left Column */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              {leftColumnProjects.map(project => (
                <div key={project.slug} className="project-box-items-5">
                  <div className="thumb">
                    <img src={project.thumb} alt={project.client} />
                    <img src={project.thumb} alt={project.client} />
                    <Link to={`/work/${project.slug}`} className="arrow-icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                  <div className="content-items">
                    <div className="content">
                      <h2 className="title">
                        <Link to={`/work/${project.slug}`}>{project.client}</Link>
                      </h2>
                      <div className="tag-items">
                        {project.tags.map((tag, tagIndex) => (
                          <Link key={tagIndex} to="/work">{tag}</Link>
                        ))}
                      </div>
                    </div>
                    <span className="year-text">[ {project.year} ]</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Right Column */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              {rightColumnProjects.map(project => (
                <div key={project.slug} className="project-box-items-5 style-auto">
                  <div className="thumb">
                    <img src={project.thumb} alt={project.client} />
                    <img src={project.thumb} alt={project.client} />
                    <Link to={`/work/${project.slug}`} className="arrow-icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                  <div className="content-items">
                    <div className="content">
                      <h2 className="title">
                        <Link to={`/work/${project.slug}`}>{project.client}</Link>
                      </h2>
                      <div className="tag-items">
                        {project.tags.map((tag, tagIndex) => (
                          <Link key={tagIndex} to="/work">{tag}</Link>
                        ))}
                      </div>
                    </div>
                    <span className="year-text">[ {project.year} ]</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Powerful Feature Section Start */}
      <section className="powerful-feature-section section-bg fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
              <img src="/assets/img/home-1/01.png" alt="img" /> Our Approach
            </span>
            <h2 className="wa_title_spilt_1">
              <span className="style-font">Strategy-Led </span> 
              Solutions That Drive
              <span className="style-color"> Measurable Business Growth</span>
            </h2>
          </div>
        </div>
      </section>

      {/* FAQ Section Start */}
      <section className="faq-section-2 fix section-padding">
        <div className="container">
          <div className="faq-wrapper-2">
            <div className="row g-4">
              <div className="col-xl-4 col-lg-4">
                <div className="faq-content">
                  <div className="section-title mb-0">
                    <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                      <img src="/assets/img/home-1/01.png" alt="img" />FAQ
                    </span>
                    <h2 className="rr_title_anim">
                      <span className="style-font">Frequently</span> Asked Questions
                    </h2>
                  </div>   
                  <p className="text wow fadeInUp" data-wow-delay=".3s">
                    Common questions about our work, process, and how we help businesses grow.
                  </p>
                  <Link to="/contact" className="news-btn wow fadeInUp" data-wow-delay=".5s">
                    <span className="text">
                      <span className="text-default">Contact us <i className="fa-regular fa-arrow-up-right"></i></span>
                      <span className="text-hover">Contact us <i className="fa-regular fa-arrow-up-right"></i></span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <ul className="accordion-box wow fadeInUp" data-wow-delay=".3s">
                  {faqs.slice(0, 5).map((item, index) => <li className={`accordion block${index === 0 ? ' active-block' : ''}`} key={item.question}>
                    <div className={`acc-btn${index === 0 ? ' active' : ''}`}>
                      {index + 1}. {item.question}
                      <div className="icon fa-regular fa-plus"></div>
                    </div>
                    <div className={`acc-content${index === 0 ? ' current' : ''}`}><div className="content"><div className="text">{item.answer}</div></div></div>
                  </li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
