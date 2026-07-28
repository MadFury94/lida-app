import { useEffect } from 'react'


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
                                            Based in texus, USA
                                        </li>
                                        <li>
                                            (©2015 — 2026)
                                        </li>
                                    </ul>
                                    <h2 class="title wa_title_spilt_1">
                                        About orixo
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
                                            <b>Join 5,000+ </b>
                                            satisfied members
                                        </p>
                                    </div>
                                    <div class="section-title mb-0">
                                        <h2 class="split-title">
                                            <span class="style-font">Orixo is a creative studio based </span> In Texus We Think Like <span class="style-color"> An Agency And Produce Like A Visuals For</span> Vrands & Agencies.
                                        </h2>
                                        <div class="sec-content">
                                            <a class="theme-btn-main style-2 bg-white-style" href="contact.html">
                                                <span class="theme-btn-arrow-left"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                                <span class="theme-btn">Get In Touch</span>
                                                <span class="theme-btn-arrow-right"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                            </a>
                                            <p>
                                                We help ambitious brands break boundaries with bold design and smart strategies. Our creative team is driven by innovation and fueled by passion, delivering solutions that capture attention and drive growth. Whether you're a startup or an established business, we bring your vision to life.
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
                                        <h3 class="title">Discover</h3>
                                        <p>Understand your business, <br>
                                        users, & goals </p>
                                    </div>
                                </div>
                                <div class="work-process-items-3 wow fadeInUp" data-wow-delay=".2s">
                                    <div class="icon">
                                        <img src="/assets/img/home-3/icon2.svg" alt="img">
                                    </div>
                                    <div class="content">
                                        <h3 class="title">Define</h3>
                                        <p>
                                            Align on strategy, structure, <br>
                                            and scope
                                        </p>
                                    </div>
                                </div>
                                <div class="work-process-items-3 wow fadeInUp" data-wow-delay=".4s">
                                    <div class="icon">
                                        <img src="/assets/img/home-3/icon3.svg" alt="img">
                                    </div>
                                    <div class="content">
                                        <h3 class="title">Design</h3>
                                        <p>
                                            Visualize the solution and bring <br>
                                            ideas to life
                                        </p>
                                    </div>
                                </div>
                                <div class="work-process-items-3 wow fadeInUp" data-wow-delay=".6s">
                                    <div class="icon">
                                        <img src="/assets/img/home-3/icon4.svg" alt="img">
                                    </div>
                                    <div class="content">
                                        <h3 class="title">Develop</h3>
                                        <p>
                                            Build high-performing <br>
                                            digital products
                                        </p>
                                    </div>
                                </div>
                                <div class="work-process-items-3 wow fadeInUp" data-wow-delay=".8s">
                                    <div class="icon">
                                        <img src="/assets/img/home-3/icon5.svg" alt="img">
                                    </div>
                                    <div class="content">
                                        <h3 class="title">Deploy & Market</h3>
                                        <p>
                                            Launch, optimize, <br>
                                            and scale
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
                                        <span class="style-font">Transforming Modern Business </span> Ideas Into Innovative Global <br>  Solutions That Inspire Long-Term Success Through <br> Business Collaboration.
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
                                                We help ambitious brands break boundaries with bold design and smart strategies. Our creative team is driven by innovation and fueled by passion, delivering solutions that capture attention and drive growth. Whether you're a startup or an established business, we bring your vision to life.
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
