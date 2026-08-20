import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { team, contact } from '../store/site'

export default function Team() {
  useEffect(() => {
    if (typeof window.WOW !== 'undefined') new window.WOW({ live: false }).init()
  }, [])

  return (
    <>
      {/* ── BREADCRUMB ───────────────────────────────────── */}
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/inner-page/bread-line.png')" }}
      >
        <div className="light-bg">
          <img src="/assets/img/inner-page/light.png" alt="" />
        </div>
        <div className="container">
          <div className="page-heading mb-0">
            <div className="breadcrumb-sub-title">
              <h1 className="text-white rr_title_anim">
                <span>The People Behind The Work</span> That Moves Business Forward.
              </h1>
            </div>
            <div className="breadcrumb-items">
              <ul>
                <li>Lida Nigeria</li>
                <li>(©2022 — 2026)</li>
              </ul>
              <h2 className="title wa_title_spilt_1">Our team</h2>
            </div>
          </div>
        </div>
      </div>

      {/* ── TEAM GRID ────────────────────────────────────── */}
      <section className="team-section-5 fix section-padding">
        <div className="container">
          <div className="row g-4 design-choose-item-wrap">
            {team.map((member, i) => (
              <div key={member.slug} className="col-lg-6 col-md-6">
                <div className={`team-image-items-5 ${i % 2 === 0 ? 'design-choose-item-1' : 'design-choose-item-2'} mt-0 wow fadeInUp`} data-wow-delay={`.${(i + 2) * 2}s`}>
                  <img src={member.image} alt={member.name} />
                  <img src={member.image} alt={member.name} />
                  <div className="team-content">
                    <div className="content">
                      <p>{member.role}</p>
                      <h3 className="title">
                        <Link to={`/team/${member.slug}`}>{member.name}</Link>
                      </h3>
                    </div>
                    <div className="left-items">
                      <div className="social-icon d-flex align-items-center">
                        {member.social.linkedin !== '#' && (
                          <a href={member.social.linkedin} target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        )}
                        {member.social.twitter !== '#' && (
                          <a href={member.social.twitter} target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter"></i>
                          </a>
                        )}
                      </div>
                      <Link to={`/team/${member.slug}`} className="icon">
                        <i className="fa-regular fa-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────── */}
      <div className="marque-section">
        <div className="marquee">
          {[0, 1, 2, 3].map(g => (
            <div className="marquee-group" key={g}>
              {['Strategy', 'Brand', 'Growth', 'Execution', 'Trust', 'Results'].map(item => (
                <div className="text-4" key={item}>
                  <img src="/assets/img/home-3/star.png" alt="" /> {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="lets-deal-section fix section-padding">
        <div className="container">
          <div className="lets-deal-wrapper">
            <div className="section-title text-center mb-0">
              <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                <img src="/assets/img/home-1/01.png" alt="" /> Work with Lida
              </span>
              <h2 className="wa_title_spilt_1">
                <span className="style-font">Your Next Big Move</span> Needs the Right Team  <br />  Behind It.
              </h2>
            </div>
            <Link
              className="theme-btn-main style-2 mt-4 wow fadeInUp"
              data-wow-delay=".3s"
              to="/contact"
            >
              <span className="theme-btn-arrow-left"><i className="fa-solid fa-arrow-up-right"></i></span>
              <span className="theme-btn">Get In Touch</span>
              <span className="theme-btn-arrow-right"><i className="fa-solid fa-arrow-up-right"></i></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
