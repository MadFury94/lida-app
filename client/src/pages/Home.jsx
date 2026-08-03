import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { brand, contact, stats, services, caseStudies } from '../store/site'

const HERO_BALL = 'https://res.cloudinary.com/dqwfjxn8g/image/upload/w_0.56/v1785225527/ChatGPT_Image_Jul_28_2026_08_32_53_AM_2_wk2ehi.png'
const marqueeItems = ['Brand Strategy', 'Market Entry', 'Communications', 'Digital Growth', 'Africa', 'Consulting']

export default function Home() {
  useEffect(() => {
    if (window.$ && window.$.fn.counterUp) {
      window.$('.count').counterUp({ delay: 10, time: 1000 })
    }
    if (typeof window.WOW !== 'undefined') {
      new window.WOW({ live: false }).init()
    }

    // Service accordion
    const serviceBtns = document.querySelectorAll('.service-acc-btn')
    serviceBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const wrap = btn.closest('.service-list-wrap')
        const isActive = wrap.classList.contains('active-block')
        document.querySelectorAll('.service-list-wrap').forEach(w => {
          w.classList.remove('active-block')
          w.querySelector('.service-acc-content')?.classList.remove('current')
          w.querySelector('.service-acc-btn')?.classList.remove('active')
        })
        if (!isActive) {
          wrap.classList.add('active-block')
          wrap.querySelector('.service-acc-content')?.classList.add('current')
          btn.classList.add('active')
        }
      })
    })

    // FAQ accordion
    const accBtns = document.querySelectorAll('.accordion-box .acc-btn')
    accBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const block = btn.closest('.accordion')
        const isActive = block.classList.contains('active-block')
        block.closest('.accordion-box')?.querySelectorAll('.accordion').forEach(b => {
          b.classList.remove('active-block')
          b.querySelector('.acc-content')?.classList.remove('current')
          b.querySelector('.acc-btn')?.classList.remove('active')
        })
        if (!isActive) {
          block.classList.add('active-block')
          block.querySelector('.acc-content')?.classList.add('current')
          btn.classList.add('active')
        }
      })
    })
  }, [])

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-section-1 hero-1">
        <div className="hero-line">
          <img src="/assets/img/home-1/hero-line.png" alt="" />
        </div>
        <div className="row g-4 align-items-end">
          <div className="col-xl-8">
            <div className="hero-content">
              <p className="split-title">YOUR GROWTH PARTNER</p>
              <h1 className="split-title">
                We Help <span>{brand.subTagline}</span>
                You Earn Trust, Win<br />Customers, and Grow.
              </h1>
              <div className="hero-button wow fadeInUp" data-wow-delay=".3s">
                <Link className="theme-btn-main style-2 bg-white-style" to="/contact">
                  <span className="theme-btn-arrow-left"><i className="fa-solid fa-arrow-up-right"></i></span>
                  <span className="theme-btn">Let's Talk</span>
                  <span className="theme-btn-arrow-right"><i className="fa-solid fa-arrow-up-right"></i></span>
                </Link>
                <Link className="theme-btn-main style-2 border-style" to="/work">
                  <span className="theme-btn-arrow-left"><i className="fa-solid fa-arrow-up-right"></i></span>
                  <span className="theme-btn">View Work</span>
                  <span className="theme-btn-arrow-right"><i className="fa-solid fa-arrow-up-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="hero-right-items">
              <div className="hero-small-slider wow fadeInUp" data-wow-delay=".3s">
                <div className="small-thumb"><img src="/assets/img/home-1/hero-small-1.jpg" alt="" /></div>
                <div className="small-thumb active"><img src="/assets/img/home-1/hero-small-2.jpg" alt="" /></div>
                <div className="small-thumb"><img src="/assets/img/home-1/hero-small-3.jpg" alt="" /></div>
              </div>
              <p className="text wow fadeInUp" data-wow-delay=".5s">
                <b>{brand.name}</b> — {brand.description}
              </p>
              <div className="sign wow fadeInUp" data-wow-delay=".7s">
                <img src="/assets/img/home-1/sign.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-list wow fadeInUp" data-wow-delay=".4s">
          <ul>
            {services.slice(0, 4).map(s => (
              <li key={s.slug}>+ {s.shortTitle}</li>
            ))}
          </ul>
          <ul>
            <li><a href={contact.social.facebook}>+ facebook</a></li>
            <li><a href={contact.social.linkedin}>+ linkedin</a></li>
            <li><a href={contact.social.instagram}>+ instagram</a></li>
          </ul>
        </div>
        <div className="hero-circle">
          <img src={HERO_BALL} alt="Rotating abstract sphere" fetchPriority="high" />
        </div>
      </section>

      {/* ── BRAND LOGOS ──────────────────────────────────── */}
      <div className="brand-section">
        <div className="container">
          <h2 className="title wa_title_spilt_1">
            The Visionaries and <span><span className="font-style">Industry Leaders</span> We've</span> <br /> Proudly Partnered.
          </h2>
        </div>
        <div className="swiper brand-slider wow fadeInUp" data-wow-delay=".3s">
          <div className="swiper-wrapper">
            {[1,2,3,4,5,6,7,8].map(n => (
              <div className="swiper-slide" key={n}>
                <div className="brand-box-1">
                  <span className="brand-img-1"><img src={`/assets/img/home-1/brand-${n}.png`} alt="" /></span>
                  <span className="brand-img-1"><img src={`/assets/img/home-1/brand-${n}${n}.png`} alt="" /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section className="about-section section-padding pt-0">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="about-image wow fadeInUp">
                  <div className="about-circle">
                    <img src="/assets/img/home-1/about-circle.png" alt="" />
                  </div>
                  <img src="/assets/img/home-1/about-image.png" alt="About Lida Digital" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title mb-0">
                    <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                      <img src="/assets/img/home-1/01.png" alt="" /> About us
                    </span>
                    <h2 className="wa_title_spilt_1">
                      <span className="style-font">Positioning Global Brands</span> for Success in Africa
                    </h2>
                  </div>
                  <p className="text wow fadeInUp" data-wow-delay=".3s">{brand.descriptionLong}</p>
                  <Link className="theme-btn-main style-2 bg-white-style wow fadeInUp" data-wow-delay=".5s" to="/about">
                    <span className="theme-btn-arrow-left"><i className="fa-solid fa-arrow-up-right"></i></span>
                    <span className="theme-btn">Know more about us</span>
                    <span className="theme-btn-arrow-right"><i className="fa-solid fa-arrow-up-right"></i></span>
                  </Link>
                  <div className="about-counter-items">
                    <div className="content wow fadeInUp" data-wow-delay=".3s">
                      <h2><span className="count">{stats[0].value}</span><span className="plus">{stats[0].suffix}</span></h2>
                      <p>{stats[0].desc}</p>
                    </div>
                    <div className="about-small wow fadeInUp" data-wow-delay=".5s">
                      <img src="/assets/img/home-1/about-small.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────── */}
      <div className="marque-section">
        <div className="marquee">
          {[0,1,2,3,4].map(g => (
            <div className="marquee-group" key={g}>
              {marqueeItems.map(item => (
                <div className="text" key={item}>
                  <img src="/assets/img/home-1/star.png" alt="" /> {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section className="service-section section-padding">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title mb-0">
              <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                <img src="/assets/img/home-1/01.png" alt="" /> Our services
              </span>
              <h2 className="wa_title_spilt_1">
                <span className="style-font">Our Core Services</span> That Deliver <br className="d-none d-lg-block" />
                Strategic Insight, <span className="style-color">And Measurable Results</span>
              </h2>
            </div>
            <div className="client-info wow fadeInUp" data-wow-delay=".3s">
              <img src="/assets/img/home-1/client-info.png" alt="" />
              <div className="content">
                <h2><span className="count">2500</span>+</h2>
                <p>Campaigns Managed</p>
              </div>
            </div>
          </div>
          <div className="service-box-style">
            {services.map((s, i) => (
              <div className={`service-list-wrap accordion block${i === 0 ? ' active-block' : ''} wow fadeInUp`} data-wow-delay={`.${(i+2)*2}s`} key={s.slug}>
                <div className={`service-acc-btn${i === 0 ? ' active' : ''}`}>
                  <span className="number">{s.number}</span>
                  <h3>{s.title}</h3>
                  <div className="icon fa-solid fa-plus"></div>
                </div>
                <div className={`service-acc-content${i === 0 ? ' current' : ''}`}>
                  <div className="service-wrap">
                    <div className="service-box">
                      <img src="/assets/img/home-1/service-box.png" alt="" />
                    </div>
                    <div className="item-text">
                      <h4>Overview:</h4>
                      <div className="text"><p>{s.summary}</p></div>
                      <Link className="theme-btn-main style-2 bg-black-style mt-4" to={`/services/${s.slug}`}>
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

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="choose-us-section section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
              <img src="/assets/img/home-1/01.png" alt="" /> Why choose us
            </span>
            <h2 className="rr_title_anim">
              <span className="style-font">Transforming African Market Entry Into</span> Lasting Business Success Through{' '}
              <span className="style-color">Strategic Insight &amp; Measurable Outcomes.</span>
            </h2>
          </div>
          <div className="counter-wrapper">
            {stats.slice(0, 4).map((s, i) => (
              <div className="counter-box service-box-1 wow fadeInUp" data-wow-delay={`.${(i+2)*2}s`} key={s.label}>
                <span className="text">{s.label}</span>
                <h2><span className="count">{s.value}</span>{s.suffix}</h2>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="video-banner fix">
            <img data-speed=".8" src="/assets/img/home-1/video-banner.jpg" alt="" />
            <div className="video-circle">
              <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                <i className="fa-solid fa-play"></i>
              </a>
              <div className="text-circle">
                <img src="/assets/img/home-1/text-circle.png" alt="" />
              </div>
            </div>
          </div>
          <p className="about-text">
            We Create Brands That Attract Clients &amp; Deliver Results{' '}
            <Link to="/about">Know more about us</Link>
          </p>
        </div>
      </section>

      {/* ── CASE STUDIES ─────────────────────────────────── */}
      <section className="project-section fix section-padding hero-new">
        <div className="container">
          <div className="section-title work-title scroll-anim">
            <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
              <img src="/assets/img/home-1/01.png" alt="" /> Completed projects
            </span>
            <h2 className="work-title">
              <span className="jump-anim">Case Study</span>{' '}
              <span className="last style-font studio-text">Showcase</span>
            </h2>
          </div>
        </div>
        <div className="project-wrapper">
          <div className="row">
            <div className="col-lg-5 col-md-5">
              <div className="text-items">
                <p>Strategic brand communications and market entry that deliver real, measurable outcomes across Africa.</p>
                <Link to="/work" className="news-btn">
                  <span className="text">
                    <span className="text-default">Explore More <i className="fa-regular fa-arrow-up-right"></i></span>
                    <span className="text-hover">Explore More <i className="fa-regular fa-arrow-up-right"></i></span>
                  </span>
                </Link>
              </div>
              <div className="project-box-items style-max-width">
                <div className="thumb tp-clip-anim p-relative">
                  <img src={caseStudies[0].image} alt={caseStudies[0].client} className="tp-anim-img" data-animate="true" />
                </div>
                <div className="content">
                  <h3 className="title"><Link to={`/work/${caseStudies[0].slug}`}>{caseStudies[0].client}</Link></h3>
                  <ul>{caseStudies[0].tags.map(t => <li key={t}><Link to="/work">{t}</Link></li>)}</ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="project-box-items">
                <div className="thumb tp-clip-anim p-relative">
                  <img src={caseStudies[1].image} alt={caseStudies[1].client} className="tp-anim-img" data-animate="true" />
                </div>
                <div className="content">
                  <h3 className="title"><Link to={`/work/${caseStudies[1].slug}`}>{caseStudies[1].client}</Link></h3>
                  <ul>{caseStudies[1].tags.map(t => <li key={t}><Link to="/work">{t}</Link></li>)}</ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 col-md-7">
              <div className="project-box-items style-height-one">
                <div className="thumb tp-clip-anim p-relative">
                  <img src={caseStudies[2].image} alt={caseStudies[2].client} className="tp-anim-img" data-animate="true" />
                </div>
                <div className="content">
                  <h3 className="title"><Link to={`/work/${caseStudies[2].slug}`}>{caseStudies[2].client}</Link></h3>
                  <ul>{caseStudies[2].tags.map(t => <li key={t}><Link to="/work">{t}</Link></li>)}</ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="project-box-items style-max-width style-left-auto style-height-two">
                <div className="thumb tp-clip-anim p-relative">
                  <img src={caseStudies[3].image} alt={caseStudies[3].client} className="tp-anim-img" data-animate="true" />
                </div>
                <div className="content">
                  <h3 className="title"><Link to={`/work/${caseStudies[3].slug}`}>{caseStudies[3].client}</Link></h3>
                  <ul>{caseStudies[3].tags.map(t => <li key={t}><Link to="/work">{t}</Link></li>)}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ / PROCESS ────────────────────────────────── */}
      <section className="faq-section fix section-padding section-bg">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="faq-image-1 fix wow fadeInUp" data-wow-delay=".3s">
                <img data-speed=".8" src="/assets/img/home-1/faq-image.jpg" alt="" />
                <div className="incrase-box float-bob-y">
                  <span>Business Growth</span>
                  <p>3X</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-content-1 section-padding">
                <div className="section-title mb-0">
                  <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                    <img src="/assets/img/home-1/01.png" alt="" /> Our working process
                  </span>
                  <h2 className="wa_title_spilt_1">
                    <span className="style-font">Our Streamlined</span> Process <span className="style-color">For Success.</span>
                  </h2>
                </div>
                <ul className="accordion-box">
                  {[
                    { num: '01.', title: 'Understand Your Market', body: 'We start by deeply understanding your target market — local business environment, consumer behavior, stakeholder expectations, and competitive landscape in Nigeria and Africa.' },
                    { num: '02.', title: 'Build Your Strategy', body: 'We develop tailored brand positioning, market entry, and communications strategies designed to resonate with your target audiences and build lasting credibility.' },
                    { num: '03.', title: 'Execute & Deliver Results', body: 'We execute with precision — managing campaigns, stakeholder engagement, and brand communications — tracking measurable outcomes that support your long-term business growth.' },
                  ].map((item, i) => (
                    <li className={`accordion block${i === 0 ? ' active-block' : ''} wow fadeInUp`} data-wow-delay={`.${i * 2}s`} key={item.num}>
                      <div className={`acc-btn${i === 0 ? ' active' : ''}`}>
                        <span className="number">{item.num}</span>
                        {item.title}
                        <div className="icon fa-solid fa-arrow-down"></div>
                      </div>
                      <div className={`acc-content${i === 0 ? ' current' : ''}`}>
                        <div className="content"><div className="text">{item.body}</div></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE 2 ────────────────────────────────────── */}
      <div className="marque-section-2 section-bg section-padding pt-0">
        <div className="marquee">
          {[0,1,2,3].map(g => (
            <div className="marquee-group" key={g}>
              {marqueeItems.map(item => (
                <div className="text-2" key={item}>
                  <img src="/assets/img/home-1/star2.png" alt="" /> {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="testimonial-section client-testimonial fix section-padding">
        <div className="light-bg"><img src="/assets/img/home-1/light.png" alt="" /></div>
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
              <img src="/assets/img/home-1/01.png" alt="" /> Our testimonials
            </span>
            <h2 className="wa_title_spilt_1">
              <span className="style-font">Our Valued Clients Trust Us</span> To Deliver{' '}
              <span className="style-color">Outstanding Results.</span>
            </h2>
          </div>
        </div>
        <div className="client-testimonial__warpper">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.slug}
              className={`client-testimonial__item testimonial-box-style-1${i % 2 === 1 ? ' style-2' : ''} bg-cover`}
              style={{ backgroundImage: "url('/assets/img/home-1/process-shape.png')" }}
            >
              <div className="quote-icon"><img src="/assets/img/home-1/quote.png" alt="" /></div>
              <h3>"{cs.impact}"</h3>
              <div className="client-info-item">
                <div className="client-info">
                  <h4>{cs.client}</h4>
                  <span>{cs.sector}</span>
                </div>
                <div className="star">
                  {[1,2,3,4,5].map(s => <i key={s} className="fa-solid fa-star"></i>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section
        className="lets-talk-section fix hero-ptb image-distortion p-relative z-index-1 bg-cover"
        data-background="/assets/img/bg-wrap-3.jpg"
        style={{ backgroundImage: "url('/assets/img/bg-wrap-3.jpg')" }}
      >
        <div className="container">
          <div className="lets-talk-content text-center">
            <div className="as-partner-3-big-title">
              <h2 className="title"><span>Let's</span> Talk Now</h2>
            </div>
            <Link className="theme-btn-main style-2 wow fadeInUp" data-wow-delay=".3s" to="/contact">
              <span className="theme-btn-arrow-left"><i className="fa-solid fa-arrow-up-right"></i></span>
              <span className="theme-btn">Book a Free Consultation</span>
              <span className="theme-btn-arrow-right"><i className="fa-solid fa-arrow-up-right"></i></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
