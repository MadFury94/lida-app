import { useEffect } from 'react'


export default function Team() {
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
                                    <h1 class="text-white rr_title_anim"><span>Our Creative  </span> Minds Behind <br> Our Bold Idea’s</h1>
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
                                        Our teams
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Team Section Start -->
                    <section class="team-section-5 fix section-padding">
                        <div class="container">
                            <div class="row g-4 design-choose-item-wrap">
                                <div class="col-lg-6 col-md-6">
                                    <div class="team-image-items-5 design-choose-item-1 mt-0">
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
                                    <div class="team-image-items-5 design-choose-item-2 mt-0">
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
                                    <div class="team-image-items-5 design-choose-item-1 mt-0">
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
                                    <div class="team-image-items-5 design-choose-item-2 mt-0">
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
