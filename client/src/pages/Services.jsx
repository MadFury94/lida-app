import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { services, stats, contact, brand, copyrightYear } from '../store/site'

export default function Services() {
  const [openService, setOpenService] = useState(0)

  useEffect(() => {
    if (typeof window.WOW !== 'undefined') new window.WOW({ live: false }).init()
  }, [])

  return (
    <>
      {/* ── BREADCRUMB — T5 gradient + T6 animation + T7 copy ── */}
      <div
        className="breadcrumb-wrapper services-hero-gradient bg-cover"
        style={{ backgroundImage: "url('/assets/img/inner-page/bread-line.png')" }}
      >
        <div className="light-bg">
          <img src="/assets/img/inner-page/light.png" alt="" />
        </div>
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              {/* T6: rr_title_anim — T7: updated copy */}
              <h1 className="text-white rr_title_anim">
                <span>Brand, Marketing, and Creative Services</span> That Drive Business Growth.
              </h1>
            </div>
            <div className="breadcrumb-items">
              <ul>
                <li>{brand.location}</li>
                <li>(©{copyrightYear} — 2026)</li>
              </ul>
              {/* T6: wa_title_spilt_1 on the h2 */}
              <h2 className="title wa_title_spilt_1">Our Services</h2>
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS — T4: number-only inside .count span, suffix outside ── */}
      <section className="about-section-2 fix section-padding pt-0">
        <div className="container">
          <div className="counter-wrapper section-padding pb-0">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="counter-box service-box-1 mt-0 wow fadeInUp"
                data-wow-delay={`.${(i + 2) * 2}s`}
              >
                <span className="text">{s.label}</span>
                <h2>{s.value}{s.suffix}</h2>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="sec-line-shape">
        <img src="/assets/img/home-1/line-shape.png" alt="" />
      </div>

      {/* ── SERVICES LIST ────────────────────────────────── */}
      <section className="service-section section-padding fix">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title mb-0">
              <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                <img src="/assets/img/home-1/01.png" alt="" /> What we do
              </span>
              <h2 className="wa_title_spilt_1">
                <span className="style-font">More Than Services.</span>{' '}
                <br className="d-none d-lg-block" />
                A Better Way <span className="style-color"> to Grow.</span>
              </h2>
            </div>
            <div className="client-info wow fadeInUp" data-wow-delay=".3s">
              <img src="/assets/img/home-1/Lida1.png" alt="" />
              <div className="content">
                <h2>100+</h2>
                <p>Clients trusted us to facilitate growth</p>
              </div>
            </div>
          </div>

          <div className="service-box-style">
            {services.map((s, i) => (
              <div
                key={s.slug}
                className={`service-list-wrap accordion block${openService === i ? ' active-block' : ''} wow fadeInUp`}
                data-wow-delay={`.${(i + 2) * 2}s`}
              >
                {/* Same pattern as Home — toggle on same click, fa-plus always, CSS handles active state */}
                <div
                  className={`service-acc-btn${openService === i ? ' active' : ''}`}
                  onClick={() => setOpenService(openService === i ? null : i)}
                >
                  <span className="number">{s.number}</span>
                  <h3>{s.title}</h3>
                  <div className="icon fa-solid fa-plus"></div>
                </div>
                <div className={`service-acc-content${openService === i ? ' current' : ''}`}>
                  <div className="service-wrap">
                    <div className="service-box">
                      <img src="/assets/img/home-1/Lida Mascot.png" alt="" />
                    </div>
                    <div className="item-text">
                      <h4>Overview:</h4>
                      <div className="text"><p>{s.summary}</p></div>
                      <Link
                        className="theme-btn-main style-2 bg-black-style mt-4"
                        to={`/services/${s.slug}`}
                      >
                        <span className="theme-btn-arrow-left"><i className="fa-solid fa-arrow-up-right"></i></span>
                        <span className="theme-btn">View Details</span>
                        <span className="theme-btn-arrow-right"><i className="fa-solid fa-arrow-up-right"></i></span>
                      </Link>
                    </div>
                    <div className="item-text">
                      <h4>Includes:</h4>
                      <ul>
                        {s.includes.map(inc => (
                          <li key={inc}><i className="fa-solid fa-circle-check"></i> {inc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
