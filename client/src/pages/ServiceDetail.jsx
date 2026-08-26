import { useEffect, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { services, contact, faqs } from '../store/site'

const GLOBAL_FAQS = faqs.slice(0, 4)

// Self-contained FAQ accordion — React state, no dependence on template JS
function FaqSection({ serviceFaqs, faqsHeading, service }) {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section className="faq-section-5 section-padding section-bg fix">
      <div className="container container-1680">
        <div className="faq-wrapper-5">
          <div className="section-title-area">
            <div className="section-title section-title-4 mb-0">
              <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                <img src="/assets/img/home-1/01.png" alt="" /> COMMON QUESTIONS
              </span>
            </div>
            <div className="section-title-4 mb-0">
              <h2 className="title wa_title_spilt_1">{faqsHeading}</h2>
            </div>
          </div>
          <div className="row g-4 align-items-end mt-2">
            <div className="col-lg-5">
              <div className="faq-image">
                <img
                  src={service.faqImage || '/assets/img/inner-page/faq.jpg'}
                  alt={service.title}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="grt-faq-content-1 mt-0">
                <ul className="accordion-box style-4 style-5 wow fadeInUp" data-wow-delay=".3s">
                  {serviceFaqs.map((faq, i) => (
                    <li
                      key={i}
                      className={`accordion block${openFaq === i ? ' active-block' : ''}`}
                    >
                      <div
                        className={`acc-btn${openFaq === i ? ' active' : ''}`}
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        style={{ cursor: 'pointer' }}
                      >
                        {faq.question}
                        <div className="icon fa-regular fa-plus"></div>
                      </div>
                      <div className={`acc-content${openFaq === i ? ' current' : ''}`}>
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
  )
}

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

  // Use per-service FAQs if defined, otherwise fall back to global
  const serviceFaqs = service.faqs || GLOBAL_FAQS
  const faqsHeading = service.faqsHeading || 'Quick answers to what clients ask most.'

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

            {/* Hero image — use service-specific image if defined, fall back to generic */}
            <div className="mt-4">
              <div className="service-details-image">
                <img
                  data-speed=".8"
                  src={service.detailImage || '/assets/img/inner-page/service-details1.jpg'}
                  alt={service.title}
                />
              </div>
            </div>

            {/* Detail body — left image fills full height, right heading + body from site.js */}
            <div className="service-concept-item mt-5">
              <div className="row g-4 align-items-stretch">
                <div className="col-lg-6 col-md-6">
                  <div className="service-concept-left">
                    <div className="service-concept-meta">
                      <span className="service-concept-number">{service.number}</span>
                      <p>Our approach to {service.shortTitle.toLowerCase()}</p>
                    </div>
                    <div className="service-concept-img">
                      <img
                        src={service.conceptImage || '/assets/img/inner-page/service-details-2.jpg'}
                        alt={service.title}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center">
                  <h2 className="service-concept-heading">{service.approachHeading}</h2>
                  <div className="service-concept-box mt-4">
                    <p>{service.approachBody}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Lida — 4 icon boxes, full width 4-col grid */}
            <div className="service-icon-details-section mt-5 pb-0">
              <div className="row g-4">
                {[
                  { icon: 'fa-solid fa-chess', title: 'Start with the real problem', body: 'We look beyond surface issues to identify what is truly limiting growth.' },
                  { icon: 'fa-solid fa-sliders', title: 'Define clear priorities', body: 'We help you focus time, money and effort on the actions that matter most.' },
                  { icon: 'fa-solid fa-arrow-right-arrow-left', title: 'Build a practical roadmap', body: 'You receive a clear plan for positioning, marketing, customer growth and execution.' },
                  { icon: 'fa-solid fa-chart-line', title: 'Track what matters', body: 'We define useful measures that help you see progress and improve decisions.' },
                ].map(item => (
                  <div className="col-xl-3 col-lg-6 col-md-6" key={item.title}>
                    <div className="details-icon-box-item">
                      <div className="icon service-icon-fa">
                        <i className={item.icon}></i>
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
      <FaqSection serviceFaqs={serviceFaqs} faqsHeading={faqsHeading} service={service} />

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
