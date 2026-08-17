import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { insights } from '../store/site'

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
          <div className="page-heading mb-0">
            <div className="breadcrumb-sub-title">
              <h1 className="text-white rr_title_anim">
                <span>Insights &amp; Perspectives</span> From the Lida Team
              </h1>
            </div>
            <div className="breadcrumb-items">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li>Insights</li>
              </ul>
              <h2 className="title wa_title_spilt_1">Our Thinking</h2>
            </div>
          </div>
        </div>
      </div>

      {/* ── NEWS GRID ────────────────────────────────────── */}
      <section className="news-section-5 fix section-padding">
        <div className="container">
          <div className="row g-4">
            {insights.map((post, i) => (
              <div
                key={post.slug}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`.${(i % 3) * 2 + 3}s`}
              >
                <div className="news-box-items-2 mt-0">
                  <div className="thumb">
                    <img src={post.image} alt={post.title} />
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        <Link to={`/insights?category=${encodeURIComponent(post.category)}`}>
                          {post.category}
                        </Link>
                      </li>
                      <li>
                        <p><span>By</span> {post.author}</p>
                      </li>
                    </ul>
                    <h3 className="title">
                      <Link to={`/insights/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <Link to={`/insights/${post.slug}`} className="news-btn">
                      <span className="text">
                        <span className="text-default">Read More <i className="fa-regular fa-arrow-up-right"></i></span>
                        <span className="text-hover">Read More <i className="fa-regular fa-arrow-up-right"></i></span>
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
