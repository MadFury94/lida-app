import { useEffect } from 'react'


export default function NotFound() {
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
                                    <h1 class="text-white rr_title_anim"><span>We’re Sorry</span> This Page Could Not Be Found
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
                                       Error 404
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                  <!-- Error Section Start -->
                    <section class="error-section-4 section-padding fix">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-6">
                                    <div class="error-items">
                                        <div class="error-image">
                                            <img src="/assets/img/inner-page/404.png" alt="img">
                                        </div>
                                        <h2>Page not found</h2>
                                        <p>
                                            The resource you are looking for doesn't exist or might have been removed.
                                        </p>
                                        <a class="theme-btn-main style-2 mt-4 wow fadeInUp" data-wow-delay=".3s" href="index.html">
                                            <span class="theme-btn-arrow-left"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                            <span class="theme-btn">Back to home page</span>
                                            <span class="theme-btn-arrow-right"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Footer Section Start -->
                    <footer class="footer-section-3">
                        <div class="footer-area-3 mt-0 bg-cover fix" style="background-image: url('/assets/img/home-3/footer-bg.jpg');">
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
