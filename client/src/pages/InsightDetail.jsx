import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { insights } from '../store/site'

export default function InsightDetail() {
  const { slug } = useParams()
  const post = insights.find(p => p.slug === slug)

  useEffect(() => {
    if (typeof window.WOW !== 'undefined') new window.WOW({ live: false }).init()
    window.scrollTo(0, 0)
  }, [slug])

  if (!post) return <Navigate to="/insights" replace />

  const others = insights.filter(p => p.slug !== slug).slice(0, 2)

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
                <span>Insights &amp;</span> Perspectives
              </h1>
            </div>
            <div className="breadcrumb-items">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/insights">Insights</Link></li>
                <li>{post.category}</li>
              </ul>
              <h2 className="title wa_title_spilt_1">{post.category}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* ── ARTICLE ──────────────────────────────────────── */}
      <section className="blog-details-section section-padding">
        <div className="container">
          <div className="row g-5">

            {/* Main content */}
            <div className="col-lg-8">
              <div className="insight-article">
                <div className="insight-article__hero">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="insight-article__meta">
                  <span className="cat">{post.category}</span>
                  <span className="dot">·</span>
                  <span>{post.date}</span>
                  <span className="dot">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h1 className="insight-article__title">{post.title}</h1>
                <div className="insight-article__author">
                  <div>
                    <strong>{post.author}</strong>
                    <span>{post.authorRole}</span>
                  </div>
                </div>
                <div className="insight-article__body">
                  {post.body.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="insight-sidebar">

                <div className="insight-sidebar__block">
                  <h4>More Insights</h4>
                  <div className="insight-sidebar__posts">
                    {others.map(p => (
                      <Link key={p.slug} to={`/insights/${p.slug}`} className="insight-sidebar__post">
                        <img src={p.image} alt={p.title} />
                        <div>
                          <span className="cat">{p.category}</span>
                          <p>{p.title}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="insight-sidebar__block insight-sidebar__cta">
                  <h4>Ready to grow?</h4>
                  <p>Let's talk about your market position and how we can help you move forward.</p>
                  <a
                    href="https://calendly.com/lida_nigeria"
                    target="_blank"
                    rel="noreferrer"
                    className="theme-btn-main style-2 mt-3"
                  >
                    <span className="theme-btn-arrow-left"><i className="fa-solid fa-arrow-up-right"></i></span>
                    <span className="theme-btn">Schedule a Meeting</span>
                    <span className="theme-btn-arrow-right"><i className="fa-solid fa-arrow-up-right"></i></span>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
