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
      <section className="testimonial-section-about section-padding tp-project-5-2-area bg-cover" style={{ backgroundImage: "url('/assets/img/inner-page/testimonial-bg2.jpg')" }}>
        <div className="container">
          <div className="section-title text-center tp-project-5-2-title">
            <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
              <img src="/assets/img/home-1/01.png" alt="" /> Client Voices
            </span>
            <h2 className="wa_title_spilt_1">
              <span className="style-font">What Our Clients Say</span> About <br />
              Working <span className="testi-iimg"><img className="img-custom-anim-left" src="/assets/img/home-1/client-info-2.png" alt="" /></span> <span className="style-color">With Lida.</span>
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
                                        <img src="/assets/img/home-1/01.png" alt="img"> Why choose us
                                    </span>
                                    <h2 class="rr_title_anim">
                                        <span class="style-font">Positioning Global Brands </span> for Success in Africa. <br> Local Insight. Strategic Execution. <br> <span class="style-color">Measurable Impact.</span>
                                    </h2>
                                </div>
                                <div class="row g-4">
                                    <div class="col-xl-5 col-lg-6">
                                        <div class="thumb wow fadeInUp" data-wow-delay=".3s">
                                            <img src="/assets/img/inner-page/choose-us.jpg" alt="img">
                                        </div>
                                    </div>
                                    <div class="col-xl-7 col-lg-6">
                                        <div class="choose-us-content">
                                            <p class="text wow fadeInUp" data-wow-delay=".3s">
                                                We work with local and international businesses, investors, development organizations, and growth-focused enterprises to navigate market entry, strengthen brand positioning, improve stakeholder engagement, and develop communication strategies that support long-term business objectives.
                                            </p>
                                            <a class="theme-btn-main style-2 wow fadeInUp" data-wow-delay=".5s" href="contact.html">
                                                <span class="theme-btn-arrow-left"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                                <span class="theme-btn">let’s talk</span>
                                                <span class="theme-btn-arrow-right"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                            </a>
                                            <div class="about-conter-items">
                                            <div class="counter-box wow fadeInUp active" data-wow-delay=".3s">
                                                <span class="sub-text">Corporate</span>
                                                <h2><span class="count">80</span>+</h2>
                                                <p>
                                                    We provide innovative and reliable solutions.
                                                </p>
                                            </div>
                                            <div class="counter-box wow fadeInUp" data-wow-delay=".5s">
                                                <span class="sub-text">Business</span>
                                                <h2><span class="count">100</span>%</h2>
                                                <p>
                                                    We provide innovative and reliable solutions.
                                                </p>
                                            </div>
                                            <div class="about-vide-bg wow fadeInUp" data-wow-delay=".7s">
                                                <img src="/assets/img/home-2/choose-us-small.jpg" alt="img">
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                     <div class="sec-line-shape">
                        <img src="/assets/img/home-1/line-shape.png" alt="img">
                    </div>

                    <!-- Team Section Start -->
                    <section class="team-section-5 fix section-padding">
                        <div class="container">
                            <div class="section-title-area">
                                <div class="section-title mb-0">
                                    <span class="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                                        <img src="/assets/img/home-1/01.png" alt="img"> Our best teams
                                    </span>
                                    <h2 class="wa_title_spilt_1">
                                        <span class="style-font">Our Creative</span> Minds <br> Behind Our Bold Ideas
                                    </h2>
                                </div>
                                <div class="content wow fadeInUp" data-wow-delay=".3s">
                                    <p>
                                        See what media outlets are saying about our work and impact platforms that featured us.
                                    </p>
                                    <a href="team.html" class="news-btn">
                                        <span class="text">
                                            <span class="text-default">Join Our Team  <i class="fa-regular fa-arrow-up-right"></i></span>
                                            <span class="text-hover">Join Our Team  <i class="fa-regular fa-arrow-up-right"></i></span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div class="row design-choose-item-wrap">
                                <div class="col-lg-6 col-md-6">
                                    <div class="team-image-items-5 design-choose-item-1">
                                        <img src="/assets/img/inner-page/team-1.jpg" alt="img">
                                        <img src="/assets/img/inner-page/team-1.jpg" alt="img">
                                        <div class="team-content">
                                            <div class="content">
                                                <p>
                                                    Creative Director
                                                </p>
                                                <h3 class="title">
                                                    <a href="team-details.html">Helena Jhon son</a>
                                                </h3>
                                            </div>
                                            <div class="left-items">
                                                <div class="social-icon d-flex align-items-center">
                                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                                    <a href="#"><i class="fab fa-vimeo-v"></i></a>
                                                    <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                                </div>
                                                <a href="team-details.html" class="icon">
                                                    <i class="fa-regular fa-arrow-up-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="team-image-items-5 design-choose-item-2">
                                        <img src="/assets/img/inner-page/team-2.jpg" alt="img">
                                        <img src="/assets/img/inner-page/team-2.jpg" alt="img">
                                        <div class="team-content">
                                            <div class="content">
                                                <p>
                                                    Creative Director
                                                </p>
                                                <h3 class="title">
                                                    <a href="team-details.html">Helena Jhon son</a>
                                                </h3>
                                            </div>
                                            <div class="left-items">
                                                <div class="social-icon d-flex align-items-center">
                                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                                    <a href="#"><i class="fab fa-vimeo-v"></i></a>
                                                    <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                                </div>
                                                <a href="team-details.html" class="icon">
                                                    <i class="fa-regular fa-arrow-up-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="team-image-items-5 design-choose-item-1">
                                        <img src="/assets/img/inner-page/team-3.jpg" alt="img">
                                        <img src="/assets/img/inner-page/team-3.jpg" alt="img">
                                        <div class="team-content">
                                            <div class="content">
                                                <p>
                                                    Creative Director
                                                </p>
                                                <h3 class="title">
                                                    <a href="team-details.html">Helena Jhon son</a>
                                                </h3>
                                            </div>
                                            <div class="left-items">
                                                <div class="social-icon d-flex align-items-center">
                                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                                    <a href="#"><i class="fab fa-vimeo-v"></i></a>
                                                    <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                                </div>
                                                <a href="team-details.html" class="icon">
                                                    <i class="fa-regular fa-arrow-up-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="team-image-items-5 design-choose-item-2">
                                        <img src="/assets/img/inner-page/team-4.jpg" alt="img">
                                        <img src="/assets/img/inner-page/team-4.jpg" alt="img">
                                        <div class="team-content">
                                            <div class="content">
                                                <p>
                                                    Creative Director
                                                </p>
                                                <h3 class="title">
                                                    <a href="team-details.html">Helena Jhon son</a>
                                                </h3>
                                            </div>
                                            <div class="left-items">
                                                <div class="social-icon d-flex align-items-center">
                                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                                    <a href="#"><i class="fab fa-vimeo-v"></i></a>
                                                    <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                                </div>
                                                <a href="team-details.html" class="icon">
                                                    <i class="fa-regular fa-arrow-up-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Marque Section Start -->
                    <div class="marque-section">
                        <div class="marquee">
                            <div class="marquee-group">
                                <div class="text-4">
                                    <img src="/assets/img/home-3/star.png" alt="img"> Growth
                                </div>
                                <div class="text-4">
                                    <img src="/assets/img/home-3/star.png" alt="img"> Success
                                </div>
                                <div class="text-4">
                                    <img src="/assets/img/home-3/star.png" alt="img"> Leadership
                                </div>
                                <div class="text-4">
                                    <img src="/assets/img/home-3/star.png" alt="img"> Trust
                                </div>
                            </div>
                            <div class="marquee-group">
                                <div class="text-4">
                                    <img src="/assets/img/home-3/star.png" alt="img"> Growth
                                </div>
                                <div class="text-4">
                                    <img src="/assets/img/home-3/star.png" alt="img"> Success
                                </div>
                                <div class="text-4">
                                    <img src="/assets/img/home-3/star.png" alt="img"> Leadership
                                </div>
                                <div class="text-4">
                                    <img src="/assets/img/home-3/star.png" alt="img"> Trust
                                </div>
                            </div>
                            <div class="marquee-group">
                                <div class="text-4">
                                    <img src="/assets/img/home-3/star.png" alt="img"> Growth
                                </div>
                                <div class="text-4">
                                    <img src="/assets/img/home-3/star.png" alt="img"> Success
                                </div>
                                <div class="text-4">
                                    <img src="/assets/img/home-3/star.png" alt="img"> Leadership
                                </div>
                                <div class="text-4">
                                    <img src="/assets/img/home-3/star.png" alt="img"> Trust
                                </div>
                            </div>
                            <div class="marquee-group">
                                <div class="text-4">
                                    <img src="/assets/img/home-3/star.png" alt="img"> Growth
                                </div>
                                <div class="text-4">
                                    <img src="/assets/img/home-3/star.png" alt="img"> Success
                                </div>
                                <div class="text-4">
                                    <img src="/assets/img/home-3/star.png" alt="img"> Leadership
                                </div>
                                <div class="text-4">
                                    <img src="/assets/img/home-3/star.png" alt="img"> Trust
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lets Deal Section Start -->
                    <section class="lets-deal-section fix section-padding fix section-padding">
                        <div class="container">
                            <div class="lets-deal-wrapper">
                                 <div class="section-title text-center mb-0">
                                    <span class="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                                        <img src="/assets/img/home-1/01.png" alt="img"> Let’s make a deal
                                    </span>
                                    <h2 class="wa_title_spilt_1">
                                        <span class="style-font">Let's Create The</span> Best Product <br> Experience For Your Next Project
                                    </h2>
                                </div>
                                <a class="theme-btn-main style-2 mt-4 wow fadeInUp" data-wow-delay=".3s" href="contact.html">
                                    <span class="theme-btn-arrow-left"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                    <span class="theme-btn">Get In Touch</span>
                                    <span class="theme-btn-arrow-right"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                </a>
                            </div>
                        </div>
                    </section>

                    <!-- Footer Section Start -->
`}} />
    </>
  )
}
