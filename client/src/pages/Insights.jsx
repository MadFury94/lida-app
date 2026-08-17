import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { insights, brand } from '../store/site'

export default function Insights() {
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
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <h1 className="text-white rr_title_anim">
                <span>Insights &amp; </span> Perspectives
              </h1>
            </div>
            <div className="breadcrumb-items">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li>Insights</li>
              </ul>
              <h2 className="title wa_title_spilt_1">Our thinking</h2>
            </div>
          </div>
        </div>
      </div>

      {/* ── POSTS GRID ───────────────────────────────────── */}
      <section className="blog-section section-padding">
        <div className="container">
          <div className="section-title text-center mb-5">
            <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
              <img src="/assets/img/home-1/01.png" alt="" /> {brand.name} Insights
            </span>
            <h2 className="wa_title_spilt_1">
              <span className="style-font">Strategy. Communications.</span>{' '}
              <span className="style-color">Growth Thinking.</span>
            </h2>
          </div>

          <div className="row g-4">
            {insights.map((post, i) => (
              <div
                key={post.slug}
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={`.${(i + 2) * 2}s`}
              >
                <div className="insights-card">
                  <div className="insights-card__thumb">
                    <img src={post.image} alt={post.title} />
                    <span className="insights-card__cat">{post.category}</span>
                  </div>
                  <div className="insights-card__body">
                    <div className="insights-card__meta">
                      <span>{post.date}</span>
                      <span className="dot">·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="insights-card__title">
                      <Link to={`/insights/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="insights-card__excerpt">{post.excerpt}</p>
                    <Link to={`/insights/${post.slug}`} className="news-btn mt-3">
                      <span className="text">
                        <span className="text-default">Read Article <i className="fa-regular fa-arrow-up-right"></i></span>
                        <span className="text-hover">Read Article <i className="fa-regular fa-arrow-up-right"></i></span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
