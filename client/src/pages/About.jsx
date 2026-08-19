import { useEffect } from 'react'
import { brand, testimonials } from '../store/site'
import VideoBanner from '../components/VideoBanner'


export default function About() {
  useEffect(() => {
    if (typeof window.WOW !== 'undefined') new window.WOW({ live: false }).init()
    if (window.$ && window.$.fn.counterUp) window.$('.count').counterUp({ delay: 10, time: 1000 })
    
  }, [])

  return (
    <>
      <div dangerouslySetInnerHTML={{__html: `
                    <!-- Breadcrumb Section Start -->
                    <div class="breadcrumb-wrapper bg-cover" style="background-image: url('/assets/img/inner-page/bread-line.png');">
                        <div class="light-bg">
                            <img src="/assets/img/inner-page/light.png" alt="img">
                        </div>
                        <div class="container">
                            <div class="page-heading">
                                <div class="breadcrumb-sub-title">
                                    <h1 class="text-white rr_title_anim"><span>Helping Businesses and Leaders</span>  Grow With Clarity.
                                    </h1>
                                </div>
                                <div class="breadcrumb-items">
                                    <ul>
                                        <li>
                                            Abuja, Nigeria
                                        </li>
                                        <li>
                                            (©2022 — 2026)
                                        </li>
                                    </ul>
                                    <h2 class="title wa_title_spilt_1">
                                        About ${brand.name}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
      `}} />

      {/* ── VIDEO BANNER ─────────────────────────────────── */}
      <VideoBanner
        className="about-video-banner-about-page"
        textCircle="/assets/img/home-2/video-text.png"
        thumbnail="/assets/img/home-1/Lida%20Exec%20Team-59.jpeg"
      />

      <div dangerouslySetInnerHTML={{__html: `

                    <!-- Work Process Section Start -->
                    <section class="work-process-section-3 fix section-padding">
                        <div class="container">
                            <div class="about-wrapper-2 about-page-style-3">
                                <div class="section-title-area">
                                    <div class="about-info wow fadeInUp" data-wow-delay=".3s">
                                        <img src="/assets/img/home-1/Lida1.png" alt="img">
                                        <p>
                                            <b>150+ </b>
                                            satisfied clients
                                        </p>
                                    </div>
                                    <div class="section-title mb-0">
                                        <h2 class="split-title">
                                            <span class="style-font"> We Think Like a Growth Partner. </span> We Deliver Like an Agency.</span>
                                        </h2>
                                        <div class="sec-content">
                                            <p>
                                               Lida is a brand, marketing and communications agency based in Abuja, Nigeria. We help businesses, founders and leaders build stronger brands, reach the right people and create more opportunities for growth. Our work begins with understanding the challenge. From there, we combine strategy with creative thinking, content, campaigns, media and digital experiences to deliver work that is clear, relevant and built to move the business forward.
                                            </p>
                                            <a class="theme-btn-main style-2 bg-white-style mt-3" href="https://calendly.com/lida_nigeria">
                                                <span class="theme-btn-arrow-left"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                                <span class="theme-btn">Book a Growth Audit</span>
                                                <span class="theme-btn-arrow-right"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="work-process-wrapper-3">
                                <div class="line-1">
                                    <img src="/assets/img/home-3/line.png" alt="img">
                                </div>
                                <div class="work-process-items-3 active wow fadeInUp">
                                    <div class="icon">
                                        <img src="/assets/img/home-3/icon1.svg" alt="Understand">
                                    </div>
                                    <div class="content">
                                        <h3 class="title">Understand</h3>
                                        <p>We learn about your business, audience, goals and the problem getting in the way of growth.</p>
                                    </div>
                                </div>
                                <div class="work-process-items-3 wow fadeInUp" data-wow-delay=".2s">
                                    <div class="icon">
                                        <img src="/assets/img/home-3/icon2.svg" alt="Plan">
                                    </div>
                                    <div class="content">
                                        <h3 class="title">Plan</h3>
                                        <p>We build a focused strategy for your positioning, message, marketing and visibility.</p>
                                    </div>
                                </div>
                                <div class="work-process-items-3 wow fadeInUp" data-wow-delay=".4s">
                                    <div class="icon">
                                        <img src="/assets/img/home-3/icon3.svg" alt="Create">
                                    </div>
                                    <div class="content">
                                        <h3 class="title">Create</h3>
                                        <p>We develop the brand identity, content, campaigns, media assets and digital tools the strategy requires.</p>
                                    </div>
                                </div>
                                <div class="work-process-items-3 wow fadeInUp" data-wow-delay=".6s">
                                    <div class="icon">
                                        <img src="/assets/img/home-3/icon5.svg" alt="Launch">
                                    </div>
                                    <div class="content">
                                        <h3 class="title">Launch</h3>
                                        <p>We put the work into the market through marketing campaigns, communications, media and customer touchpoints.</p>
                                    </div>
                                </div>
                                <div class="work-process-items-3 wow fadeInUp" data-wow-delay=".8s">
                                    <div class="icon">
                                        <img src="/assets/img/home-3/icon6.svg" alt="Measure">
                                    </div>
                                    <div class="content">
                                        <h3 class="title">Measure &amp; Improve</h3>
                                        <p>We track performance, learn from the response and improve the work to deliver better results.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

      `}} />

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="testimonial-section-about section-padding tp-project-5-2-area bg-cover" style={{ backgroundImage: "url('/assets/img/inner-page/testimonial-bg.jpeg')" }}>
        <div className="container">
          <div className="section-title text-center tp-project-5-2-title">
            <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
              <img src="/assets/img/home-1/01.png" alt="" /> Client Voices
            </span>
            <h2 className="wa_title_spilt_1">
              <span className="style-font">What Our Clients Say</span> About <br />
              Working <span className="testi-iimg"><img className="img-custom-anim-left" src="/assets/img/home-1/Lida 100+ clients.png" alt="" /></span> <span className="style-color">With Lida.</span>
            </h2>
          </div>
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-6 col-md-6">
              {testimonials.slice(0, 2).map((t, i) => (
                <div key={t.slug} className={`testimonial-box-style-5${i === 1 ? ' style-2' : ''} bg-cover`} style={{ backgroundImage: "url('/assets/img/home-1/process-shape.png')" }}>
                  <div className="quote-icon"><img src="/assets/img/home-1/quote.png" alt="" /></div>
                  <h3>"{t.quote}"</h3>
                  <div className="client-info-item">
                    <div className="client-info">
                      <h4>{t.name}</h4>
                      <span>{t.role}</span>
                    </div>
                    <div className="star">
                      {[1,2,3,4,5].map(s => <i key={s} className="fa-solid fa-star"></i>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              {testimonials.slice(2, 4).map((t, i) => (
                <div key={t.slug} className={`testimonial-box-style-5${i === 0 ? ' style-2' : ' style-3'} bg-cover`} style={{ backgroundImage: "url('/assets/img/home-1/process-shape.png')" }}>
                  <div className="quote-icon"><img src="/assets/img/home-1/quote.png" alt="" /></div>
                  <h3>"{t.quote}"</h3>
                  <div className="client-info-item">
                    <div className="client-info">
                      <h4>{t.name}</h4>
                      <span>{t.role}</span>
                    </div>
                    <div className="star">
                      {[1,2,3,4,5].map(s => <i key={s} className="fa-solid fa-star"></i>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div dangerouslySetInnerHTML={{__html: `
                    <!-- Why Choose Us Section Start -->
                    <section class="why-choose-us-section-5 fix section-padding">
                        <div class="container">
                            <div class="why-choose-us-wrapper-5">
                                <div class="section-title">
                                    <span class="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                                        <img src="/assets/img/home-1/01.png" alt="img"> Why choose Lida.
                                    </span>
                                    <h2 class="rr_title_anim">
                                        <span class="style-font">Strategy That Moves </span> the Business. <br> Creative That Moves <br> <span class="style-color">the Market.</span>
                                    </h2>
                                </div>
                                <div class="row g-4">
                                    <div class="col-xl-5 col-lg-6">
                                        <div class="thumb wow fadeInUp" data-wow-delay=".3s">
                                            <img src="/assets/img/inner-page/choose-us.jpeg" alt="img">
                                        </div>
                                    </div>
                                    <div class="col-xl-7 col-lg-6">
                                        <div class="choose-us-content">
                                            <p class="text wow fadeInUp" data-wow-delay=".3s">
                                                Lida combines the commercial thinking of a growth partner with the delivery strength of a brand, marketing and communications agency. We do not stop at recommendations. We shape the strategy, build the brand, create the content, develop the campaign and help you see what is working, so your business can earn attention, build trust and create real opportunities for growth.
                                            </p>
                                            <a class="theme-btn-main style-2 wow fadeInUp" data-wow-delay=".5s" href="http://calendly.com/lida_nigeria">
                                                <span class="theme-btn-arrow-left"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                                <span class="theme-btn">let’s talk</span>
                                                <span class="theme-btn-arrow-right"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                            </a>
                                            <div class="about-conter-items">
                                            <div class="counter-box wow fadeInUp active" data-wow-delay=".3s">
                                                <span class="sub-text">Growth Strategy</span>
                                                <h2>01</h2>
                                                <p>
                                                    We start with your business goal, audience and market position, then build the right plan for growth.
                                                </p>
                                            </div>
                                            <div class="counter-box wow fadeInUp" data-wow-delay=".5s">
                                                <span class="sub-text">Creative &amp; Media Delivery</span>
                                                <h2>02</h2>
                                                <p>
                                                    We bring the plan to life through branding, content, campaigns, media and digital experiences that move people to act.
                                                </p>
                                            </div>
                                            <div class="about-vide-bg wow fadeInUp" data-wow-delay=".7s">
                                                <img src="/assets/img/home-1/Lida-about.jpeg" alt="img">
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <!-- Footer Section Start -->
`}} />
    </>
  )
}
