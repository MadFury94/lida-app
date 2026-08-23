import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { services, contact, faqs } from '../store/site'

const SERVICE_FAQS = faqs.slice(0, 4)

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)

  useEffect(() => {
    if (typeof window.WOW !== 'undefined') new window.WOW({ live: false }).init()
    window.scrollTo(0, 0)
  }, [slug])

  if (!service) return <Navigate to="/services" replace />

  const currentIndex = services.findIndex(s => s.slug === slug)
  const prev = services[currentIndex - 1] || null
  const next = services[currentIndex + 1] || null

  return (
    <>
      {/* ── HERO — T1 full-width, T2 breadcrumb, T5 gradient ── */}
      <section className="services-details-section section-padding services-hero-gradient">
        <div className="light-bg">
          <img src="/assets/img/inner-page/light.png" alt="" />
        </div>
        <div className="bg-line">
          <img src="/assets/img/inner-page/bread-line.png" alt="" />
        </div>
        <div className="title-area">
          <div className="container">
            {/* T2: breadcrumb trail above the h1, inside the blue hero */}
            <div className="breadcrumb-items mb-3">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li>{service.shortTitle}</li>
              </ul>
            </div>
            <h1 className="text-white rr_title_anim">
              <span>{service.number}</span> {service.title}
            </h1>
          </div>
        </div>

        {/* T1: full-width — no col-lg-8 / col-lg-4 split */}
        <div className="container mt-5">
          <div className="service-details-wrapper">

            {/* Overview */}
            <div className="details-top-item">
              <div className="left-content">
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
              </div>
              <ul className="details-list">
                {service.includes.map(inc => (
                  <li key={inc}>
                    <i className="fa-solid fa-check"></i> {inc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hero image */}
            <div className="mt-4">
              <div className="service-details-image">
                <img
                  data-speed=".8"
                  src="/assets/img/inner-page/service-details1.jpg"
                  alt={service.title}
                />
              </div>
            </div>

            {/* Detail body */}
            <div className="service-concept-item mt-5">
              <div className="row g-4">
                <div className="col-lg-6 col-md-6">
                  <div className="service-count-left">
                    <h2 style={{ fontSize: '3rem', fontWeight: 600 }}>{service.number}</h2>
                    <p>Our approach to {service.shortTitle.toLowerCase()}</p>
                    <div className="details-thumb mt-4">
                      <img src="/assets/img/inner-page/service-details-2.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <h2>From Strategy<br />to Results</h2>
                  {service.detail.split('. ').reduce((acc, sentence, i, arr) => {
                    if (i % 2 === 0) {
                      const pair = [sentence, arr[i + 1]].filter(Boolean).join('. ') + (arr[i + 1] ? '.' : '')
                      acc.push(
                        <div className="service-concept-box" key={i}>
                          <p>{pair}</p>
                        </div>
                      )
                    }
                    return acc
                  }, [])}
                </div>
              </div>
            </div>

            {/* Why Lida — 4 icon boxes, full width 4-col grid */}
            <div className="service-icon-details-section mt-5 pb-0">
              <div className="row g-4">
                {[
                  { icon: '/assets/img/inner-page/icon1.png', title: 'Strategy-led', body: 'Every engagement starts with a clear understanding of your business goal, audience and market position.' },
                  { icon: '/assets/img/inner-page/icon2.png', title: 'Tailored to you', body: 'No standard packages. We build the right approach around your challenge and what the market requires.' },
                  { icon: '/assets/img/inner-page/icon3.png', title: 'End-to-end delivery', body: 'We develop the strategy and execute it — from creative and content to campaigns and measurement.' },
                  { icon: '/assets/img/inner-page/icon4.png', title: 'Measurable outcomes', body: 'We track what matters, report clearly and continuously improve the work based on real results.' },
                ].map(item => (
                  <div className="col-xl-3 col-lg-6 col-md-6" key={item.title}>
                    <div className="details-icon-box-item">
                      <div className="icon">
                        <img src={item.icon} alt={item.title} />
                      </div>
                      <div className="content">
                        <h2 className="title">{item.title}</h2>
                        <p>{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev / Next */}
            <div className="slider-button d-flex align-items-center justify-content-between mt-5">
              <div className="d-flex align-items-center gap-3">
                {prev ? (
                  <>
                    <Link to={`/services/${prev.slug}`} className="cmn-prev cmn-border d-center">
                      <i className="fas fa-chevron-left"></i>
                    </Link>
                    <span className="previus-text text-capitalize">{prev.shortTitle}</span>
                  </>
                ) : <span />}
              </div>
              <Link to="/services" className="icon-gird" title="All services">
                <i className="fa-solid fa-grid-2" style={{ fontSize: '1.4rem', color: 'var(--header)' }}></i>
              </Link>
              <div className="d-flex align-items-center gap-3">
                {next ? (
                  <>
                    <span className="previus-text text-capitalize">{next.shortTitle}</span>
                    <Link to={`/services/${next.slug}`} className="cmn-next cmn-border d-center">
                      <i className="fas fa-chevron-right"></i>
                    </Link>
                  </>
                ) : <span />}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="faq-section-5 section-padding section-bg fix">
        <div className="container container-1680">
          <div className="faq-wrapper-5">
            <div className="section-title-area align-items-start">
              <div className="section-title-4 mb-0">
                <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                  Common questions
                </span>
              </div>
              <div className="section-title-4 mb-0">
                <h2 className="title wa_title_spilt_1">
                  Quick answers to<br />what clients ask most.
                </h2>
              </div>
            </div>
            <div className="row g-4 align-items-end">
              <div className="col-lg-5">
                <div className="faq-image-5">
                  <img src="/assets/img/inner-page/faq.jpg" alt="FAQ" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="grt-faq-content-1 mt-0">
                  <ul className="accordion-box style-4 style-5 wow fadeInUp" data-wow-delay=".3s">
                    {SERVICE_FAQS.map((faq, i) => (
                      <li key={i} className={`accordion block acc-bg-2${i === 0 ? ' active-block' : ''}`}>
                        <div className={`acc-btn${i === 0 ? ' active' : ''}`}>
                          {faq.question}
                          <div className="icon fa-regular fa-plus"></div>
                        </div>
                        <div className={`acc-content${i === 0 ? ' current' : ''}`}>
                          <div className="content">
                            <div className="text">{faq.answer}</div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section
        className="lets-talk-section fix hero-ptb image-distortion p-relative z-index-1 bg-cover"
        style={{ backgroundImage: "url('/assets/img/bg-wrap-3.png')" }}
      >
        <div className="container">
          <div className="lets-talk-content text-center">
            <div className="as-partner-3-big-title">
              <h2 className="title"><span>Let's</span> Talk Now</h2>
            </div>
            <a
              className="theme-btn-main style-2 wow fadeInUp"
              data-wow-delay=".3s"
              href={contact.calendly}
              target="_blank"
              rel="noreferrer"
            >
              <span className="theme-btn-arrow-left"><i className="fa-solid fa-arrow-up-right"></i></span>
              <span className="theme-btn">Schedule a Quick Meeting</span>
              <span className="theme-btn-arrow-right"><i className="fa-solid fa-arrow-up-right"></i></span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
