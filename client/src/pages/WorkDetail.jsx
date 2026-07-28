import { useEffect } from 'react'


export default function WorkDetail() {
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
                            <div class="page-heading mb-0">
                                <div class="breadcrumb-sub-title">
                                    <h1 class="text-white rr_title_anim"><span>Tasked With Revamping  </span> 
                                        The Branding Design
                                    </h1>
                                </div>
                                <div class="breadcrumb-items">
                                    <ul>
                                        <li>
                                           12+ years of experience
                                        </li>
                                        <li>
                                            (©2015 — 2026)
                                        </li>
                                    </ul>
                                    <h2 class="title wa_title_spilt_1">
                                       Overview
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Project Section Start -->
                    <section class="project-details-section fix section-padding">
                        <div class="container">
                            <div class="details-thumbs fix">
                                <img data-speed=".8" src="/assets/img/inner-page/project-details-4.jpg" alt="img">
                            </div>
                        </div>
                        <div class="container container-1680">
                            <div class="project-details-wrapper">
                                <div class="project-details-top-item">
                                    <div class="top-content">
                                        <h2>
                                            Mobile app <br> design
                                        </h2>
                                        <p>
                                            This mobile app design project focuses on creating a seamless, user-centric experience that balances visual clarity with functional simplicity that helps users.
                                        </p>
                                    </div>
                                    <div class="project-details-info-item">
                                        <div class="content">
                                            <span>Client:</span>
                                            <p>NovaTech Solutions</p>
                                        </div>
                                        <div class="content">
                                            <span>Services:</span>
                                            <p>UI/UX design</p>
                                        </div>
                                        <div class="content">
                                            <span>Platform:</span>
                                            <p>iOS & android</p>
                                        </div>
                                        <div class="content style-2">
                                            <span>Date:</span>
                                            <p>December 2026</p>
                                        </div>
                                    </div>
                                    <div class="project-details-image">
                                        <img data-speed=".8" src="/assets/img/inner-page/project-details.jpg" alt="img">
                                    </div>
                                    <div class="row g-4">
                                        <div class="col-lg-7">
                                            <div class="left-text">
                                                <h2>
                                                    Designing a Seamless Mobile Experience for Users
                                                </h2>
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="details-content">
                                                <p>
                                                    This mobile app design project was created to deliver an seamless and for engaging digital experience throughs thoughtful user-centered design. The focus was on the transforming complex functionality a simple intuitive interface that feel natural and effortless for users. Every screen was carefully designed to guide use clear through the app while maintaining visual and brand alignment.
                                                </p>
                                                <p>
                                                    This mobile app designed project was created to deliver for seamless and engaging digital experience through thoughtful user centered design. The focus design was transforming complex functionality into a simple.
                                                </p>
                                                <ul class="details-list">
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        Intuitive user experience
                                                    </li>
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        Clean and modern UI design
                                                    </li>
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        Consistent design system
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-check"></i>
                                                        Smooth navigation flow
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="details-image-item">
                                        <div class="row g-4">
                                            <div class="col-lg-6 col-md-6">
                                                <div class="thumb">
                                                    <img data-speed=".8" src="/assets/img/inner-page/project-details-2.jpg" alt="img">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="thumb">
                                                    <img data-speed=".8" src="/assets/img/inner-page/project-details-3.jpg" alt="img">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="left-text mb-4">
                                        <h2>
                                            From Research to <br> Final Design.
                                        </h2>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">01</span>
                                                <h3>Research insights</h3>
                                                <p>
                                                    We begin by understanding user needs, behaviors, and pain points through research and analysis.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">02</span>
                                                <h3>Experience mapping</h3>
                                                <p>
                                                    Clear user flows are created to map how users move through the app. This step focuses on simplifying.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">03</span>
                                                <h3>Interface design</h3>
                                                <p>
                                                   The visual interface brings the product to life with clean layouts, strong hierarchy, and consistent design.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">04</span>
                                                <h3>Design testing</h3>
                                                <p>
                                                   The visual interface brings the product to life with clean layouts, strong hierarchy, and consistent design.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="details-bottom-content">
                                        <div class="left-text">
                                            <h2>Final Result</h2>
                                        </div>
                                        <div class="right-content">
                                            <p>
                                                The final mobile app design delivers a modern, responsive, and visually appealing interface that enhances user engagement and improves overall usability. The design is flexible, scalable, and ready for development implementation. This mobile app design project was created to deliver an seamless.
                                            </p>
                                            <p class="mb-0">
                                                The final mobile app design delivers a modern, responsive, and visually appealing interface that enhances user engagement and improves.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="slider-button d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center gap-xxl-4 gap-3 gap-2">
                                                <button class="cmn-prev cmn-border d-center">
                                                <i class="fas fa-chevron-left"></i>
                                                </button>
                                                <span class="previus-text text-capitalize">
                                                Preview
                                                </span>
                                            </div>
                                            <div class="icon-gird">
                                                <img src="/assets/img/inner-page/icon/grid.svg" alt="img">
                                            </div>
                                            <div class="d-flex align-items-center gap-xxl-4 gap-3 gap-2">
                                                <span class="previus-text text-capitalize">
                                                Next
                                                </span>
                                                <button class="cmn-next cmn-border d-center">
                                                <i class="fas fa-chevron-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Footer Section Start -->
                    <footer class="footer-section-3">
                        <div class="footer-area-3 bg-cover fix" style="background-image: url('/assets/img/home-3/footer-bg.jpg');">
                            <div class="footer-widget-wrapper-5">
                                <div class="container">
                                <div class="row">
                                        <div class="col-lg-6">
                                            <div class="footer-left-item">
                                                <h2 class="split-title">
                                                    <span>Fresh Strategies, Trends</span>, & Tips Are Delivered To Your Inbox Regular!
                                                </h2>
                                                <form action="#" class="wow fadeInUp" data-wow-delay=".3s">
                                                    <input type="text" placeholder="Enter your email...">
                                                    <button class="email-btn" type="submit">
                                                        <i class="fa-solid fa-envelope"></i>
                                                    </button>
                                                </form>
                                                <ul class="wow fadeInUp" data-wow-delay=".5s">
                                                    <li>
                                                        Call: <a href="tel:+1234567890">+(123) 456-7890</a>
                                                    </li>
                                                    <li>
                                                        /
                                                    </li>
                                                    <li>
                                                        Mail:<a href="mailto:info@orixo.com">info@orixo.com</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="footer-right-item">
                                                <div class="footer-header-item">
                                                    <a href="index.html" class="footer-logo wow fadeInUp" data-wow-delay=".3s">
                                                        <img src="/assets/img/home-3/black-logo.png" alt="img">
                                                    </a>
                                                    <p class="wow fadeInUp" data-wow-delay=".5s">Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde.</p>
                                                </div>
                                                <div class="row g-4 justify-content-between">
                                                    <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
                                                        <div class="footer-widget-items">
                                                            <div class="widget-head">
                                                                <h3>Resourses</h3>
                                                            </div>
                                                            <ul class="gt-list-area">
                                                                <li>
                                                                    <a href="contact.html">
                                                                        Contact us
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="team.html">
                                                                        Our teams
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="contact.html">
                                                                    Careers
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="contact.html">
                                                                    Feedback
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="404.html">
                                                                    Error 404
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-5 col-lg-6 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
                                                        <div class="footer-widget-items">
                                                            <div class="widget-head">
                                                                <h3>Services</h3>
                                                            </div>
                                                            <ul class="gt-list-area">
                                                                <li>
                                                                    <a href="service-details.html">
                                                                        Leadership coaching
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="service-details.html">
                                                                        Business strategy
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="service-details.html">
                                                                        Risk & compliance
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="service-details.html">
                                                                        Market research
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="service-details.html">
                                                                        Management
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-2 col-lg-6 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".7s">
                                                        <div class="social-icon d-grid align-items-center">
                                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                                            <a href="#"><i class="fab fa-vimeo-v"></i></a>
                                                            <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                </div> 
                            </div>
                            <div class="footer-bottom-5">
                                <div class="container">
                                    <div class="footer-bottom-wrapper-5">
                                        <p class="wow fadeInUp" data-wow-delay=".3s">
                                           © 2026 <b>Orixo.</b> All rights reserved.
                                        </p>
                                        <ul class="footer-list wow fadeInUp" data-wow-delay=".5s">
                                            <li>
                                                <a href="contact.html">Privacy policy</a>
                                            </li>
                                            <li><span class="dots"></span></li>
                                            <li>
                                                <a href="contact.html">Terms &amp; conditions</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>`}} />
  )
}
