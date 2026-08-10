import { useEffect } from 'react'


export default function Services() {
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
                                    <h1 class="text-white rr_title_anim"><span>Our Creative Services </span> That Deliver Innovation Results
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
                                        Our service
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- About Section Start -->
                    <section class="about-section-2 fix section-padding pt-0">
                        <div class="container">
                            <div class="about-wrapper-2">
                                <div class="about-video-banner mt-0 fix wow fadeInUp" data-wow-delay=".7s">
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
                            </div>
                            <div class="counter-wrapper section-padding pb-0">
    
                                <div class="counter-box service-box-1 mt-0 wow fadeInUp" data-wow-delay=".2s">
                                    <span class="text">Complete Projects</span>
                                    <h2><span class="count">1.5</span>k+</h2>
                                    <p>
                                        We provide innovative and reliable solutions.
                                    </p>
                                </div>

                                <div class="counter-box service-box-1 mt-0 wow fadeInUp" data-wow-delay=".4s">
                                    <span class="text">Total Team Members</span>
                                    <h2><span class="count">300</span>+</h2>
                                    <p>
                                       We provide innovative and reliable solutions.
                                    </p>
                                </div>

                                <div class="counter-box service-box-1 mt-0 wow fadeInUp" data-wow-delay=".6s">
                                    <span class="text">Success Ratio</span>
                                    <h2><span class="count">99</span>%</h2>
                                    <p>
                                        We provide innovative and reliable solutions.
                                    </p>
                                </div>

                                <div class="counter-box service-box-1 mt-0 wow fadeInUp" data-wow-delay=".8s">
                                    <span class="text">Awards Winning</span>
                                    <h2><span class="count">29</span>+</h2>
                                    <p>
                                       We provide innovative and reliable solutions.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </section>

                    <div class="sec-line-shape">
                        <img src="/assets/img/home-1/line-shape.png" alt="img">
                    </div>

                    <!-- Service Section Start -->
                    <section class="service-section-2 pt-5 mt-3 section-padding fix">
                        <div class="container">
                            <div class="des-portfolio-wrap">
                                <div class="service-box-items-2 pt-0 des-portfolio-panel">
                                    <div class="row g-4 align-items-center">
                                        <div class="col-xl-6 col-lg-6">
                                            <div class="service-content">
                                                <p>001.  /  service</p>
                                                <h3 class="title"><a href="service-details.html">Strategic business
                                                planning</a></h3>
                                                <div class="service-list">
                                                    <ul>
                                                        <li>
                                                            + product design
                                                        </li>
                                                        <li>
                                                            + Motion Graphics
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            + brand design
                                                        </li>
                                                        <li>
                                                            + Web Development
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h4 class="title-2">
                                                    Provide data-driven stratege help companies identifies opportunities, reduce risk and achieve long term of our growth. Provide driven on strategie.
                                                </h4>
                                                <ul class="list-items">
                                                    <li>
                                                        <a href="service.html">Plan</a>
                                                    </li>
                                                    <li>
                                                        <a href="service.html">Execute</a>
                                                    </li>
                                                    <li>
                                                        <a href="service.html">Succeed</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6">
                                            <div class="service-thumb">
                                                <img src="/assets/img/home-2/service-01.jpg" alt="img">
                                                <img src="/assets/img/home-2/service-01.jpg" alt="img">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="service-box-items-2 des-portfolio-panel">
                                    <div class="row g-4 align-items-center">
                                        <div class="col-xl-6 col-lg-6">
                                            <div class="service-content">
                                                <p>002.  /  service</p>
                                                <h3 class="title"><a href="service-details.html">Digital Marketing & Brand Strategy</a></h3>
                                                <div class="service-list">
                                                    <ul>
                                                        <li>
                                                            + product design
                                                        </li>
                                                        <li>
                                                            + Motion Graphics
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            + brand design
                                                        </li>
                                                        <li>
                                                            + Web Development
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h4 class="title-2">
                                                    Provide data-driven stratege help companies identifies opportunities, reduce risk and achieve long term of our growth. Provide driven on strategie.
                                                </h4>
                                                <ul class="list-items">
                                                    <li>
                                                        <a href="service.html">Plan</a>
                                                    </li>
                                                    <li>
                                                        <a href="service.html">Execute</a>
                                                    </li>
                                                    <li>
                                                        <a href="service.html">Succeed</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6">
                                            <div class="service-thumb">
                                                <img src="/assets/img/home-2/service-02.jpg" alt="img">
                                                <img src="/assets/img/home-2/service-02.jpg" alt="img">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="service-box-items-2 des-portfolio-panel">
                                    <div class="row g-4 align-items-center">
                                        <div class="col-xl-6 col-lg-6">
                                            <div class="service-content">
                                                <p>003.  /  service</p>
                                                <h3 class="title"><a href="service-details.html">Web Development & UI/UX Design</a></h3>
                                                <div class="service-list">
                                                    <ul>
                                                        <li>
                                                            + product design
                                                        </li>
                                                        <li>
                                                            + Motion Graphics
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            + brand design
                                                        </li>
                                                        <li>
                                                            + Web Development
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h4 class="title-2">
                                                    Provide data-driven stratege help companies identifies opportunities, reduce risk and achieve long term of our growth. Provide driven on strategie.
                                                </h4>
                                                <ul class="list-items">
                                                    <li>
                                                        <a href="service.html">Plan</a>
                                                    </li>
                                                    <li>
                                                        <a href="service.html">Execute</a>
                                                    </li>
                                                    <li>
                                                        <a href="service.html">Succeed</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6">
                                            <div class="service-thumb">
                                                <img src="/assets/img/home-2/service-03.jpg" alt="img">
                                                <img src="/assets/img/home-2/service-03.jpg" alt="img">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Powerful Feature Section Start -->
                    <section class="powerful-feature-section section-bg fix section-padding">
                        <div class="container">
                            <div class="section-title text-center">
                                <span class="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                                    <img src="/assets/img/home-1/01.png" alt="img"> Powerful features integrations
                                </span>
                                    <h2 class="wa_title_spilt_1">
                                    <span class="style-font">Delivering Innovative </span> IT Solutions That Empower In Businesses To
                                    <span class="style-color">Grow For Connect And Succeed In The Digital Era And Unwavering.</span>
                                </h2>
                            </div>
                        </div>
                        <div class="powerful-marque-section">
                            <div class="marquee">
                                <div class="marquee-group">
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature1.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature2.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature3.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature4.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature5.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature6.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature7.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature8.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature9.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature10.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature11.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature12.png" alt="">
                                    </div>
                                </div>
                                 <div class="marquee-group">
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature1.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature2.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature3.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature4.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature5.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature6.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature7.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature8.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature9.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature10.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature11.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature12.png" alt="">
                                    </div>
                                </div>
                                 <div class="marquee-group">
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature1.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature2.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature3.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature4.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature5.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature6.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature7.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature8.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature9.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature10.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature11.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature12.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="marquee marquee-2">
                                <div class="marquee-group">
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature1.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature2.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature3.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature4.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature5.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature6.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature7.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature8.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature9.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature10.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature11.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature12.png" alt="">
                                    </div>
                                </div>
                                 <div class="marquee-group">
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature1.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature2.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature3.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature4.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature5.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature6.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature7.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature8.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature9.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature10.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature11.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature12.png" alt="">
                                    </div>
                                </div>
                                 <div class="marquee-group">
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature1.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature2.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature3.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature4.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature5.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature6.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature7.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature8.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature9.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature10.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature11.png" alt="">
                                    </div>
                                    <div class="icon-box">
                                        <img src="/assets/img/home-3/feature12.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Faq Section Start -->
                    <section class="faq-section-2 fix section-padding">
                        <div class="container">
                            <div class="faq-wrapper-2">
                                <div class="row g-4">
                                    <div class="col-xl-4 col-lg-4">
                                        <div class="faq-content">
                                            <div class="section-title mb-0">
                                                <span class="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                                                    <img src="/assets/img/home-1/01.png" alt="img">Faq
                                                </span>
                                                <h2 class="rr_title_anim">
                                                    <span class="style-font">Frequently</span> Ask Questions
                                                </h2>
                                            </div>   
                                            <p class="text wow fadeInUp" data-wow-delay=".3s">
                                                We are a results-driven IT consulting team helping businesses unlock efficiency.
                                            </p>
                                            <a href="contact.html" class="news-btn wow fadeInUp" data-wow-delay=".5s">
                                            <span class="text">
                                                <span class="text-default">Contact us  <i class="fa-regular fa-arrow-up-right"></i></span>
                                                <span class="text-hover">Contact us  <i class="fa-regular fa-arrow-up-right"></i></span>
                                            </span>
                                        </a>
                                        </div>
                                    </div>
                                    <div class="col-xl-8 col-lg-8">
                                        <ul class="accordion-box wow fadeInUp" data-wow-delay=".3s">
                                            <!--Block-->
                                            <li class="accordion block active-block">
                                                <div class="acc-btn active">
                                                   1.  What services does an IT solutions company provide?
                                                    <div class="icon fa-regular fa-plus"></div>
                                                </div>
                                                <div class="acc-content current">
                                                    <div class="content">
                                                        <div class="text">
                                                            IT solution companies offer services like software development, website design, cloud solutions, cybersecurity, IT consulting, network setup, server management, and ongoing technical support. IT solution companies offer services like software development, website design, cloud solutions, cybersecurity.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <!--Block-->
                                            <li class="accordion block">
                                                <div class="acc-btn active">
                                                   2. Why does my business need IT support?
                                                    <div class="icon fa-regular fa-plus"></div>
                                                </div>
                                                <div class="acc-content">
                                                    <div class="content">
                                                        <div class="text">
                                                           IT solution companies offer services like software development, website design, cloud solutions, cybersecurity, IT consulting, network setup, server management, and ongoing technical support. IT solution companies offer services like software development, website design, cloud solutions, cybersecurity.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                             <!--Block-->
                                            <li class="accordion block">
                                                <div class="acc-btn active">
                                                   3. How can IT solutions improve my business productivity?
                                                    <div class="icon fa-regular fa-plus"></div>
                                                </div>
                                                <div class="acc-content">
                                                    <div class="content">
                                                        <div class="text">
                                                           IT solution companies offer services like software development, website design, cloud solutions, cybersecurity, IT consulting, network setup, server management, and ongoing technical support. IT solution companies offer services like software development, website design, cloud solutions, cybersecurity.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <!--Block-->
                                            <li class="accordion block">
                                                <div class="acc-btn active">
                                                   4. What is cloud computing, and how can it help my business?
                                                    <div class="icon fa-regular fa-plus"></div>
                                                </div>
                                                <div class="acc-content">
                                                    <div class="content">
                                                        <div class="text">
                                                            IT solution companies offer services like software development, website design, cloud solutions, cybersecurity, IT consulting, network setup, server management, and ongoing technical support. IT solution companies offer services like software development, website design, cloud solutions, cybersecurity.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <!--Block-->
                                            <li class="accordion block">
                                                <div class="acc-btn active">
                                                   5. How do you protect my business from cyber threats?
                                                    <div class="icon fa-regular fa-plus"></div>
                                                </div>
                                                <div class="acc-content">
                                                    <div class="content">
                                                        <div class="text">
                                                            IT solution companies offer services like software development, website design, cloud solutions, cybersecurity, IT consulting, network setup, server management, and ongoing technical support. IT solution companies offer services like software development, website design, cloud solutions, cybersecurity.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class="sec-line-shape">
                        <img src="/assets/img/home-1/line-shape.png" alt="img">
                    </div>

                     <!-- Cta Section Start -->
                    <section class="cta-section-3 section-padding pb-0 fix">
                        <div class="container">
                            <div class="cta-wrapper-3">
                                <div class="section-title mb-0">
                                    <span class="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                                        <img src="/assets/img/home-1/01.png" alt="img"> Let’s make a call
                                    </span>
                                    <h2 class="wa_title_spilt_1">
                                        <span class="style-font">Let’s </span>  <span class="img-1"><img src="/assets/img/home-3/cta-image.jpg" alt=""></span> talk Now.
                                    </h2>
                                    <a class="theme-btn-main style-2 mt-4 wow fadeInUp" data-wow-delay=".3s" href="contact.html">
                                        <span class="theme-btn-arrow-left"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                        <span class="theme-btn">Free call here!</span>
                                        <span class="theme-btn-arrow-right"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Footer Section Start -->
`}} />
  )
}
