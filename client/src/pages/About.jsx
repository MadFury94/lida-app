import { useEffect } from 'react'
import { brand } from '../store/site'


export default function About() {
  useEffect(() => {
    if (typeof window.WOW !== 'undefined') new window.WOW({ live: false }).init()
    if (window.$ && window.$.fn.counterUp) window.$('.count').counterUp({ delay: 10, time: 1000 })
    
  }, [])

  return (
    <div dangerouslySetInnerHTML={{__html: `
                    <!-- Breadcrumb Section Start -->
                    <div class="breadcrumb-wrapper bg-cover" style="background-image: url('/assets/img/inner-page/bread-line.png');">
                        <div class="light-bg">
                            <img src="/assets/img/inner-page/light.png" alt="img">
                        </div>
                        <div class="container">
                            <div class="page-heading">
                                <div class="breadcrumb-sub-title">
                                    <h1 class="text-white rr_title_anim"><span>Empowering</span> Your Business With Smart         Solutions
                                    </h1>
                                </div>
                                <div class="breadcrumb-items">
                                    <ul>
                                        <li>
                                            Abuja, Nigeria
                                        </li>
                                        <li>
                                            (©2020 — 2026)
                                        </li>
                                    </ul>
                                    <h2 class="title wa_title_spilt_1">
                                        About ${brand.name}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- About Video Section Start -->
                    <div class="about-video-banner-about-page fix wow fadeInUp" data-wow-delay=".7s">
                        <img data-speed=".8" src="/assets/img/home-2/about-video-banner.jpg" alt="img">
                        <div class="video-circle">
                                <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" class="video-btn ripple video-popup">
                                    <i class="fa-solid fa-play"></i>
                                </a>
                                <div class="text-circle">
                                    <img src="/assets/img/home-2/video-text.png" alt="img">
                                </div>
                        </div>
                        <div class="incrase-box float-bob-y">
                            <span>Business Increase</span>
                            <p>3X</p>
                        </div>
                    </div>

                    <!-- Work Process Section Start -->
                    <section class="work-process-section-3 fix section-padding">
                        <div class="container">
                            <div class="about-wrapper-2 about-page-style-3">
                                <div class="section-title-area">
                                    <div class="about-info wow fadeInUp" data-wow-delay=".3s">
                                        <img src="/assets/img/home-2/about-info.png" alt="img">
                                        <p>
                                            <b>150+ </b>
                                            satisfied clients
                                        </p>
                                    </div>
                                    <div class="section-title mb-0">
                                        <h2 class="split-title">
                                            <span class="style-font">${brand.name} is a strategic brand, marketing </span> and communications consultancy. <span class="style-color"> Helping organizations build visibility, credibility and sustainable growth.</span>
                                        </h2>
                                        <div class="sec-content">
                                            <a class="theme-btn-main style-2 bg-white-style" href="contact.html">
                                                <span class="theme-btn-arrow-left"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                                <span class="theme-btn">Get In Touch</span>
                                                <span class="theme-btn-arrow-right"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                            </a>
                                            <p>
                                                We work with local and international businesses, investors, development organizations, and growth-focused enterprises to navigate market entry, strengthen brand positioning, improve stakeholder engagement, and develop communication strategies that support long-term business objectives.
                                            </p>
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
                                        <img src="/assets/img/home-3/icon1.svg" alt="img">
                                    </div>
                                    <div class="content">
                                        <h3 class="title">Understand</h3>
                                        <p>Deep dive into your market,<br>
                                        audiences &amp; objectives</p>
                                    </div>
                                </div>
                                <div class="work-process-items-3 wow fadeInUp" data-wow-delay=".2s">
                                    <div class="icon">
                                        <img src="/assets/img/home-3/icon2.svg" alt="img">
                                    </div>
                                    <div class="content">
                                        <h3 class="title">Strategise</h3>
                                        <p>
                                            Build your brand positioning,<br>
                                            messaging &amp; market entry plan
                                        </p>
                                    </div>
                                </div>
                                <div class="work-process-items-3 wow fadeInUp" data-wow-delay=".4s">
                                    <div class="icon">
                                        <img src="/assets/img/home-3/icon3.svg" alt="img">
                                    </div>
                                    <div class="content">
                                        <h3 class="title">Create</h3>
                                        <p>
                                            Develop identity systems,<br>
                                            campaigns &amp; communications
                                        </p>
                                    </div>
                                </div>
                                <div class="work-process-items-3 wow fadeInUp" data-wow-delay=".6s">
                                    <div class="icon">
                                        <img src="/assets/img/home-3/icon4.svg" alt="img">
                                    </div>
                                    <div class="content">
                                        <h3 class="title">Execute</h3>
                                        <p>
                                            Launch campaigns, PR<br>
                                            and stakeholder engagement
                                        </p>
                                    </div>
                                </div>
                                <div class="work-process-items-3 wow fadeInUp" data-wow-delay=".8s">
                                    <div class="icon">
                                        <img src="/assets/img/home-3/icon5.svg" alt="img">
                                    </div>
                                    <div class="content">
                                        <h3 class="title">Measure</h3>
                                        <p>
                                            Track outcomes, optimise<br>
                                            and deliver results
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="testimonial-section-about section-padding tp-project-5-2-area bg-cover" style="background-image: url('/assets/img/inner-page/testimonial-bg2.jpg');">
                        <div class="container">
                            <div class="section-title text-center tp-project-5-2-title">
                                <span class="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                                    <img src="/assets/img/home-1/01.png" alt="img"> Our testimonials
                                </span>
                                <h2 class="wa_title_spilt_1">
                                    <span class="style-font">Our Valued Clients Trust Us</span> To <br>
                                    Innovative <span class="testi-iimg"><img class="img-custom-anim-left" src="/assets/img/home-1/client-info-2.png" alt="img"></span> <span class="style-color">Solutions And <br> Outstanding Results.</span>
                                </h2>
                            </div>
                            <div class="row justify-content-between">
                                <div class="col-xl-4 col-lg-6 col-md-6">
                                    <div class="testimonial-box-style-5 bg-cover" style="background-image: url('/assets/img/home-1/process-shape.png');">
                                        <div class="quote-icon">
                                            <img src="/assets/img/home-1/quote.png" alt="img">
                                        </div>
                                        <h3>
                                            “From the outset, we provid expectations and regular updates our progress. You’ll receive comprehensive reports outline. From the outset, we pro expectations and regular updates our progress.
                                        </h3>
                                        <div class="client-info-item">
                                        <div class="client-info">
                                                <h4>Robert Allison</h4>
                                                <span>Sales manager</span>
                                        </div>
                                        <div class="star">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-regular fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="testimonial-box-style-5 style-2 bg-cover" style="background-image: url('/assets/img/home-1/process-shape.png');">
                                        <div class="quote-icon">
                                            <img src="/assets/img/home-1/quote.png" alt="img">
                                        </div>
                                        <h3>
                                            “From the outset, we provid expectations and regular updates our progress. You’ll receive comprehensive reports outline. From the outset, we pro expectations and regular updates our progress.
                                        </h3>
                                        <div class="client-info-item">
                                        <div class="client-info">
                                                <h4>Robert Allison</h4>
                                                <span>Sales manager</span>
                                        </div>
                                        <div class="star">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-regular fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6">
                                    <div class="testimonial-box-style-5 style-2 bg-cover" style="background-image: url('/assets/img/home-1/process-shape.png');">
                                        <div class="quote-icon">
                                            <img src="/assets/img/home-1/quote.png" alt="img">
                                        </div>
                                        <h3>
                                            “From the outset, we provid expectations and regular updates our progress. You’ll receive comprehensive reports outline. From the outset, we pro expectations and regular updates our progress.
                                        </h3>
                                        <div class="client-info-item">
                                        <div class="client-info">
                                                <h4>Robert Allison</h4>
                                                <span>Sales manager</span>
                                        </div>
                                        <div class="star">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-regular fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="testimonial-box-style-5 style-3 bg-cover" style="background-image: url('/assets/img/home-1/process-shape.png');">
                                        <div class="quote-icon">
                                            <img src="/assets/img/home-1/quote.png" alt="img">
                                        </div>
                                        <h3>
                                            “From the outset, we provid expectations and regular updates our progress. You’ll receive comprehensive reports outline. From the outset, we pro expectations and regular updates our progress.
                                        </h3>
                                        <div class="client-info-item">
                                        <div class="client-info">
                                                <h4>Robert Allison</h4>
                                                <span>Sales manager</span>
                                        </div>
                                        <div class="star">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-regular fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                 
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
  )
}
