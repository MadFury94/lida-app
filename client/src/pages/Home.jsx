import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Re-init all template JS after React mounts
    if (window.$ && window.$.fn.counterUp) {
      window.$('.count').counterUp({ delay: 10, time: 1000 })
    }
    if (typeof window.WOW !== 'undefined') {
      new window.WOW({ live: false }).init()
    }
  }, [])

  return (
    <div dangerouslySetInnerHTML={{__html: `                    <!-- Hero Section Start -->
                    <section class="hero-section-1 hero-1">
                        <div class="hero-line">
                            <img src="/assets/img/home-1/hero-line.png" alt="">
                        </div>
                        <div class="row g-4 align-items-end">
                            <div class="col-xl-8">
                                <div class="hero-content">
                                    <p class="split-title">
                                        ©2026 Modern agency
                                    </p>
                                    <h1 class="split-title">
                                        We Build <span>Designing with imagination.</span>
                                        Creative Digital Experiences
                                    </h1>
                                    <div class="hero-button wow fadeInUp" data-wow-delay=".3s">
                                        <a class="theme-btn-main style-2 bg-white-style" href="contact.html">
                                            <span class="theme-btn-arrow-left"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                            <span class="theme-btn">let’s talk</span>
                                            <span class="theme-btn-arrow-right"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                        </a>
                                        <a class="theme-btn-main style-2 border-style" href="project.html">
                                            <span class="theme-btn-arrow-left"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                            <span class="theme-btn">view work</span>
                                            <span class="theme-btn-arrow-right"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="hero-right-items">
                                    <div class="hero-small-slider wow fadeInUp" data-wow-delay=".3s">
                                        <div class="small-thumb">
                                            <img src="/assets/img/home-1/hero-small-1.jpg" alt="img">
                                        </div>
                                        <div class="small-thumb active">
                                            <img src="/assets/img/home-1/hero-small-2.jpg" alt="img">
                                        </div>
                                        <div class="small-thumb">
                                            <img src="/assets/img/home-1/hero-small-3.jpg" alt="img">
                                        </div>
                                    </div>
                                    <p class="text wow fadeInUp" data-wow-delay=".5s">
                                       <b> Orixo is a creative studio based in London. We think like</b> an agency and produce like a visuals for brands & agencies.
                                    </p>
                                    <div class="sign wow fadeInUp" data-wow-delay=".7s">
                                        <img src="/assets/img/home-1/sign.png" alt="img">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hero-list wow fadeInUp" data-wow-delay=".4s">
                            <ul>
                                <li>
                                    + product design
                                </li>
                                <li>
                                    + product design
                                </li>
                                <li>
                                    + product design
                                </li>
                                <li>
                                    + brand design
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="#">+ facebook</a>
                                </li>
                                <li>
                                    <a href="#">+ instagram</a>
                                </li>
                                <li>
                                    <a href="#">+ linked in</a>
                                </li>
                            </ul>
                        </div>
                        <div class="hero-circle">
                            <img src="https://res.cloudinary.com/dqwfjxn8g/image/upload/w_0.7/v1785225527/ChatGPT_Image_Jul_28_2026_08_32_53_AM_2_wk2ehi.png" alt="Rotating abstract sphere" fetchpriority="high">
                        </div>
                    </section>
                    

                    <!-- Brand Section Start -->
                    <div class="brand-section">
                        <div class="container">
                            <h2 class="title wa_title_spilt_1">
                                The Visionaries and  <span><span class="font-style">Industry Leaders</span> We’ve</span>   <br> Proudly Partnered.
                            </h2>
                        </div>
                        <div class="swiper brand-slider wow fadeInUp" data-wow-delay=".3s">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="brand-box-1">
                                    <span class="brand-img-1">
                                        <img src="/assets/img/home-1/brand-1.png" alt="img">
                                    </span>
                                    <span class="brand-img-1">
                                       <img src="/assets/img/home-1/brand-11.png" alt="img">
                                    </span>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="brand-box-1">
                                    <span class="brand-img-1">
                                        <img src="/assets/img/home-1/brand-2.png" alt="img">
                                    </span>
                                    <span class="brand-img-1">
                                        <img src="/assets/img/home-1/brand-22.png" alt="img">
                                    </span>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="brand-box-1">
                                    <span class="brand-img-1">
                                       <img src="/assets/img/home-1/brand-3.png" alt="img">
                                    </span>
                                    <span class="brand-img-1">
                                       <img src="/assets/img/home-1/brand-33.png" alt="img">
                                    </span>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="brand-box-1">
                                    <span class="brand-img-1">
                                       <img src="/assets/img/home-1/brand-4.png" alt="img">
                                    </span>
                                    <span class="brand-img-1">
                                       <img src="/assets/img/home-1/brand-44.png" alt="img">
                                    </span>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="brand-box-1">
                                    <span class="brand-img-1">
                                        <img src="/assets/img/home-1/brand-5.png" alt="img">
                                    </span>
                                    <span class="brand-img-1">
                                      <img src="/assets/img/home-1/brand-55.png" alt="img">
                                    </span>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="brand-box-1">
                                    <span class="brand-img-1">
                                        <img src="/assets/img/home-1/brand-6.png" alt="img">
                                    </span>
                                    <span class="brand-img-1">
                                       <img src="/assets/img/home-1/brand-66.png" alt="img">
                                    </span>
                                    </div>
                                </div>
                                 <div class="swiper-slide">
                                    <div class="brand-box-1">
                                    <span class="brand-img-1">
                                        <img src="/assets/img/home-1/brand-7.png" alt="img">
                                    </span>
                                    <span class="brand-img-1">
                                       <img src="/assets/img/home-1/brand-77.png" alt="img">
                                    </span>
                                    </div>
                                </div>
                                 <div class="swiper-slide">
                                    <div class="brand-box-1">
                                    <span class="brand-img-1">
                                        <img src="/assets/img/home-1/brand-8.png" alt="img">
                                    </span>
                                    <span class="brand-img-1">
                                       <img src="/assets/img/home-1/brand-88.png" alt="img">
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- About Section Start -->
                    <section class="about-section section-padding pt-0">
                        <div class="container">
                            <div class="about-wrapper">
                                <div class="row g-4">
                                    <div class="col-lg-6">
                                        <div class="about-image wow fadeInUp">
                                            <div class="about-circle">
                                                <img src="/assets/img/home-1/about-circle.png" alt="img">
                                            </div>
                                            <img src="/assets/img/home-1/about-image.png" alt="img">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="about-content">
                                            <div class="section-title mb-0">
                                                <span class="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                                                    <img src="/assets/img/home-1/01.png" alt="img"> About us
                                                </span>
                                                 <h2 class="wa_title_spilt_1">
                                                   <span class="style-font">Crafting Powerful </span> Brands Through Creativity
                                                </h2>
                                            </div>
                                            <p class="text wow fadeInUp" data-wow-delay=".3s">
                                                We help ambitious brands break boundaries with bold design and smart strategies. Our creative team is driven by innovation and fueled by passion, delivering solutions that capture attention and drive growth. Whether you're a startup or an established business, we bring your vision to life.
                                            </p>
                                            <a class="theme-btn-main style-2 bg-white-style wow fadeInUp" data-wow-delay=".5s" href="about.html">
                                                <span class="theme-btn-arrow-left"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                                <span class="theme-btn">Know more us</span>
                                                <span class="theme-btn-arrow-right"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                            </a>
                                            <div class="about-counter-items">
                                                <div class="content wow fadeInUp" data-wow-delay=".3s">
                                                    <h2>
                                                        <span class="count">10</span><span class="plus">+</span>
                                                    </h2>
                                                    <p>
                                                        Trusted Experience Built on <br class="d-block"> Successful Projects.
                                                    </p>
                                                </div>
                                                <div class="about-small wow fadeInUp" data-wow-delay=".5s">
                                                    <img src="/assets/img/home-1/about-small.jpg" alt="img">
                                                </div>
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
                                <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img"> Innovation
                                </div>
                                 <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img"> Transform
                                </div>
                                 <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img"> Design
                                </div>
                                 <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img"> Create
                                </div>
                                <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img">Empower
                                </div>
                                <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img">Build
                                </div>
                            </div>
                            <div class="marquee-group">
                                <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img"> Innovation
                                </div>
                                 <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img"> Transform
                                </div>
                                 <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img"> Design
                                </div>
                                 <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img"> Create
                                </div>
                                <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img">Empower
                                </div>
                                <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img">Build
                                </div>
                            </div>
                            <div class="marquee-group">
                                <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img"> Innovation
                                </div>
                                 <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img"> Transform
                                </div>
                                 <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img"> Design
                                </div>
                                 <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img"> Create
                                </div>
                                <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img">Empower
                                </div>
                                <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img">Build
                                </div>
                            </div>
                            <div class="marquee-group">
                                <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img"> Innovation
                                </div>
                                 <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img"> Transform
                                </div>
                                 <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img"> Design
                                </div>
                                 <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img"> Create
                                </div>
                                <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img">Empower
                                </div>
                                <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img">Build
                                </div>
                            </div>
                            <div class="marquee-group">
                                <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img"> Innovation
                                </div>
                                 <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img"> Transform
                                </div>
                                 <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img"> Design
                                </div>
                                 <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img"> Create
                                </div>
                                <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img">Empower
                                </div>
                                <div class="text">
                                    <img src="/assets/img/home-1/star.png" alt="img">Build
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Service Section Start -->
                    <section class="service-section section-padding">
                        <div class="container">
                            <div class="section-title-area">
                                <div class="section-title mb-0">
                                    <span class="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                                        <img src="/assets/img/home-1/01.png" alt="img"> Our services
                                    </span>
                                    <h2 class="wa_title_spilt_1">
                                        <span class="style-font">Our Creative Services</span> That Deliver <br class="de-none d-lg-block"> Innovation, <span class="style-color">And Measurable <br class="de-none d-lg-block"> Results</span>
                                    </h2>
                                </div>
                                <div class="client-info wow fadeInUp" data-wow-delay=".3s">
                                    <img src="/assets/img/home-1/client-info.png" alt="img">
                                    <div class="content">
                                        <h2>
                                            <span class="count">2</span>M+ 
                                        </h2>
                                        <p>
                                            Real result clients.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="service-box-style">
                            <div class="service-list-wrap accordion block active-block wow fadeInUp" data-wow-delay=".2s">
                                <div class="service-acc-btn active">
                                    <span class="number">001.</span>
                                    <h3>
                                      Brand strategy
                                    </h3>
                                    <div class="icon fa-solid fa-plus"></div>
                                </div>
                                <div class="service-acc-content current">
                                    <div class="service-wrap">
                                        <div class="service-box">
                                            <img src="/assets/img/home-1/service-box.png" alt="img">
                                        </div>
                                        <div class="item-text">
                                            <h4>Define identity:</h4>
                                            <div class="text">
                                                <p>
                                                    Provide data-driven stratege help companies identifies opportunities, reduce risk and achieve long term of our growth. Provide driven on strategie.
                                                </p>
                                            </div>
                                            <a class="theme-btn-main style-2 bg-black-style mt-4" href="service-details.html">
                                                <span class="theme-btn-arrow-left"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                                <span class="theme-btn">View Details</span>
                                                <span class="theme-btn-arrow-right"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                            </a>
                                        </div>
                                        <div class="item-text">
                                            <h4>Includes:</h4>
                                            <ul>
                                                <li>
                                                    <i class="fa-solid fa-circle-check"></i>
                                                    Personalization at scale
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-circle-check"></i>
                                                    Improved Customer retention
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-circle-check"></i>
                                                    Data-Driven insights
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="service-list-wrap accordion block wow fadeInUp" data-wow-delay=".4s">
                                <div class="service-acc-btn">
                                    <span class="number">002.</span>
                                    <h3>
                                        Leadership Training
                                    </h3>
                                    <div class="icon fa-solid fa-plus"></div>
                                </div>
                                <div class="service-acc-content">
                                    <div class="service-wrap">
                                        <div class="service-box">
                                            <img src="/assets/img/home-1/service-box.png" alt="img">
                                        </div>
                                        <div class="item-text">
                                            <h4>Define identity:</h4>
                                            <div class="text">
                                                <p>
                                                    Provide data-driven stratege help companies identifies opportunities, reduce risk and achieve long term of our growth. Provide driven on strategie.
                                                </p>
                                            </div>
                                            <a class="theme-btn-main style-2 bg-black-style mt-4" href="service-details.html">
                                                <span class="theme-btn-arrow-left"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                                <span class="theme-btn">View Details</span>
                                                <span class="theme-btn-arrow-right"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                            </a>
                                        </div>
                                        <div class="item-text">
                                            <h4>Includes:</h4>
                                            <ul>
                                                <li>
                                                    <i class="fa-solid fa-circle-check"></i>
                                                    Personalization at scale
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-circle-check"></i>
                                                    Improved Customer retention
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-circle-check"></i>
                                                    Data-Driven insights
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="service-list-wrap accordion block wow fadeInUp" data-wow-delay=".6s">
                                <div class="service-acc-btn">
                                    <span class="number">003.</span>
                                    <h3>
                                        Digital marketing
                                    </h3>
                                    <div class="icon fa-solid fa-plus"></div>
                                </div>
                                <div class="service-acc-content">
                                    <div class="service-wrap">
                                        <div class="service-box">
                                            <img src="/assets/img/home-1/service-box.png" alt="img">
                                        </div>
                                        <div class="item-text">
                                            <h4>Define identity:</h4>
                                            <div class="text">
                                                <p>
                                                    Provide data-driven stratege help companies identifies opportunities, reduce risk and achieve long term of our growth. Provide driven on strategie.
                                                </p>
                                            </div>
                                            <a class="theme-btn-main style-2 bg-black-style mt-4" href="service-details.html">
                                                <span class="theme-btn-arrow-left"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                                <span class="theme-btn">View Details</span>
                                                <span class="theme-btn-arrow-right"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                            </a>
                                        </div>
                                        <div class="item-text">
                                            <h4>Includes:</h4>
                                            <ul>
                                                <li>
                                                    <i class="fa-solid fa-circle-check"></i>
                                                    Personalization at scale
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-circle-check"></i>
                                                    Improved Customer retention
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-circle-check"></i>
                                                    Data-Driven insights
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="service-list-wrap accordion block wow fadeInUp" data-wow-delay=".8s">
                                <div class="service-acc-btn">
                                    <span class="number">004.</span>
                                    <h3>
                                       Web development
                                    </h3>
                                    <div class="icon fa-solid fa-plus"></div>
                                </div>
                                <div class="service-acc-content">
                                    <div class="service-wrap">
                                        <div class="service-box">
                                            <img src="/assets/img/home-1/service-box.png" alt="img">
                                        </div>
                                        <div class="item-text">
                                            <h4>Define identity:</h4>
                                            <div class="text">
                                                <p>
                                                    Provide data-driven stratege help companies identifies opportunities, reduce risk and achieve long term of our growth. Provide driven on strategie.
                                                </p>
                                            </div>
                                            <a class="theme-btn-main style-2 bg-black-style mt-4" href="service-details.html">
                                                <span class="theme-btn-arrow-left"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                                <span class="theme-btn">View Details</span>
                                                <span class="theme-btn-arrow-right"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                            </a>
                                        </div>
                                        <div class="item-text">
                                            <h4>Includes:</h4>
                                            <ul>
                                                <li>
                                                    <i class="fa-solid fa-circle-check"></i>
                                                    Personalization at scale
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-circle-check"></i>
                                                    Improved Customer retention
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-circle-check"></i>
                                                    Data-Driven insights
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>

                    <!-- Choose Us Section Start -->
                    <section class="choose-us-section section-padding">
                        <div class="container">
                            <div class="section-title text-center">
                                <span class="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                                    <img src="/assets/img/home-1/01.png" alt="img"> Why choose us
                                </span>
                                <h2 class="rr_title_anim">
                                    <span class="style-font">Transforming Modern Business Ideas Into</span> Innovative Global Solutions That Inspire <span class="style-color">Long-Term <br> Success Through Business Collaboration.</span>
                                </h2>
                            </div>
                            <div class="counter-wrapper">
    
                                <div class="counter-box service-box-1 wow fadeInUp" data-wow-delay=".2s">
                                    <span class="text">Happy Clients</span>
                                    <h2><span class="count">150</span>+</h2>
                                    <p>
                                        Trusted by clients worldwide <br> for quality service.
                                    </p>
                                </div>

                                <div class="counter-box service-box-1 wow fadeInUp" data-wow-delay=".4s">
                                    <span class="text">Projects Done</span>
                                    <h2><span class="count">320</span>+</h2>
                                    <p>
                                        Successfully completed projects <br> with excellence.
                                    </p>
                                </div>

                                <div class="counter-box service-box-1 wow fadeInUp" data-wow-delay=".6s">
                                    <span class="text">Team Members</span>
                                    <h2><span class="count">25</span>+</h2>
                                    <p>
                                        Skilled and dedicated team <br> delivering results.
                                    </p>
                                </div>

                                <div class="counter-box service-box-1 wow fadeInUp" data-wow-delay=".8s">
                                    <span class="text">Years Experience</span>
                                    <h2><span class="count">10</span>+</h2>
                                    <p>
                                        Decade of experience in <br> industry leadership.
                                    </p>
                                </div>

                            </div>
                            <div class="video-banner fix">
                                <img data-speed=".8s" src="/assets/img/home-1/video-banner.jpg" alt="img">
                                <div class="video-circle">
                                        <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" class="video-btn ripple video-popup">
                                            <i class="fa-solid fa-play"></i>
                                        </a>
                                        <div class="text-circle">
                                            <img src="/assets/img/home-1/text-circle.png" alt="img">
                                        </div>
                                   </div>
                            </div>
                            <p class="about-text">
                                We Create Ideas That Inspire & Deliver Results <a href="about.html">Know more about us</a>
                            </p>
                        </div>
                    </section>

                    <!-- Project Section Start -->
                    <section class="project-section fix section-padding hero-new">
                        <div class="container">
                            <div class="section-title work-title scroll-anim">
                                 <span class="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                                    <img src="/assets/img/home-1/01.png" alt="img"> Completed projects
                                </span>
                                <h2 class="work-title">
                                    <span class="jump-anim">Project</span>
                                    <span class="last style-font studio-text">Showcase</span>
                                </h2>
                            </div>
                        </div>
                        <div class="project-wrapper">
                            <div class="row">
                                <div class="col-lg-5 col-md-5">
                                    <div class="text-items">
                                        <p>
                                            We are a results-driven IT consulting team helping businesses unlock efficiency, scale operations.
                                        </p>
                                        <a href="project.html" class="news-btn">
                                            <span class="text">
                                                <span class="text-default">Explore More  <i class="fa-regular fa-arrow-up-right"></i></span>
                                                <span class="text-hover">Explore More  <i class="fa-regular fa-arrow-up-right"></i></span>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="project-box-items style-max-width">
                                        <div class="thumb tp-clip-anim p-relative">
                                            <img src="/assets/img/home-1/project-01.jpg" alt="img" class="tp-anim-img" data-animate="true">
                                        </div>
                                        <div class="content">
                                            <h3 class="title"><a href="project-details.html">Digital desk</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="project.html">Mobile</a>
                                                </li>
                                                <li>
                                                    <a href="project.html">Cloud</a>
                                                </li>
                                                <li>
                                                    <a href="project.html">Network</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-7 col-md-7">
                                    <div class="project-box-items">
                                        <div class="thumb tp-clip-anim p-relative">
                                           <img src="/assets/img/home-1/project-02.jpg" alt="img" class="tp-anim-img" data-animate="true">
                                        </div>
                                        <div class="content">
                                            <h3 class="title"><a href="project-details.html">Smart connect</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="project.html">Mobile</a>
                                                </li>
                                                <li>
                                                    <a href="project.html">Cloud</a>
                                                </li>
                                                <li>
                                                    <a href="project.html">Network</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-7 col-md-7">
                                    <div class="project-box-items style-height-one">
                                        <div class="thumb tp-clip-anim p-relative">
                                           <img src="/assets/img/home-1/project-03.jpg" alt="img" class="tp-anim-img" data-animate="true">
                                        </div>
                                        <div class="content">
                                            <h3 class="title"><a href="project-details.html">Smart connect</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="project.html">Mobile</a>
                                                </li>
                                                <li>
                                                    <a href="project.html">Cloud</a>
                                                </li>
                                                <li>
                                                    <a href="project.html">Network</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-5 col-md-5">
                                    <div class="project-box-items style-max-width style-left-auto style-height-two ">
                                        <div class="thumb tp-clip-anim p-relative">
                                           <img src="/assets/img/home-1/project-04.jpg" alt="img" class="tp-anim-img" data-animate="true">
                                        </div>
                                        <div class="content">
                                            <h3 class="title"><a href="project-details.html">Modern route</a></h3>
                                            <ul>
                                                <li>
                                                    <a href="project.html">Mobile</a>
                                                </li>
                                                <li>
                                                    <a href="project.html">Cloud</a>
                                                </li>
                                                <li>
                                                    <a href="project.html">Network</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Faq Section Start -->
                    <section class="faq-section fix section-padding section-bg">
                        <div class="container">
                            <div class="row g-4">
                                <div class="col-lg-6">
                                    <div class="faq-image-1 fix wow fadeInUp" data-wow-delay=".3s">
                                        <img data-speed=".8" src="/assets/img/home-1/faq-image.jpg" alt="img">
                                        <div class="incrase-box float-bob-y">
                                            <span>Business Increase</span>
                                            <p>3X</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="faq-content-1 section-padding">
                                         <div class="section-title mb-0">
                                            <span class="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                                                <img src="/assets/img/home-1/01.png" alt="img"> Our working process
                                            </span>
                                            <h2 class="wa_title_spilt_1">
                                                <span class="style-font">Our Stream</span> Process <span class="style-color">For Success.</span>
                                            </h2>
                                        </div>
                                        <ul class="accordion-box">
                                            <!--Block-->
                                            <li class="accordion block active-block wow fadeInUp">
                                                <div class="acc-btn active">
                                                    <span class="number">01.</span>
                                                    Understand clients
                                                    <div class="icon fa-solid fa-arrow-down"></div>
                                                </div>
                                                <div class="acc-content current">
                                                    <div class="content">
                                                        <div class="text">
                                                            Provide data-driven strategie to help companies identify opportunities, reduce risks, and achieve long-term of our growth. Provide data-driven strategies
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <!--Block-->
                                            <li class="accordion block wow fadeInUp" data-wow-delay=".2s">
                                                <div class="acc-btn">
                                            <span class="number">02.</span>
                                                Create strategies
                                                    <div class="icon fa-solid fa-arrow-down"></div>
                                                </div>
                                                <div class="acc-content">
                                                    <div class="content">
                                                    <div class="text">
                                                            Provide data-driven strategie to help companies identify opportunities, reduce risks, and achieve long-term of our growth. Provide data-driven strategies
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <!--Block-->
                                            <li class="accordion block wow fadeInUp" data-wow-delay=".4s">
                                                <div class="acc-btn">
                                                <span class="number">03.</span>
                                                    Deliver results
                                                    <div class="icon fa-solid fa-arrow-down"></div>
                                                </div>
                                                <div class="acc-content">
                                                    <div class="content">
                                                        <div class="text">
                                                            Provide data-driven strategie to help companies identify opportunities, reduce risks, and achieve long-term of our growth. Provide data-driven strategies
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

                    <!-- Marque Section Start -->
                    <div class="marque-section-2 section-bg section-padding pt-0">
                        <div class="marquee">
                            <div class="marquee-group">
                                <div class="text-2">
                                    <img src="/assets/img/home-1/star2.png" alt="img"> Support
                                </div>
                                <div class="text-2">
                                    <img src="/assets/img/home-1/star2.png" alt="img"> Consulting
                                </div>
                                <div class="text-2">
                                    <img src="/assets/img/home-1/star2.png" alt="img"> Technology
                                </div>
                            </div>
                            <div class="marquee-group">
                                <div class="text-2">
                                    <img src="/assets/img/home-1/star2.png" alt="img"> Support
                                </div>
                                <div class="text-2">
                                    <img src="/assets/img/home-1/star2.png" alt="img"> Consulting
                                </div>
                                <div class="text-2">
                                    <img src="/assets/img/home-1/star2.png" alt="img"> Technology
                                </div>
                            </div>
                            <div class="marquee-group">
                                <div class="text-2">
                                    <img src="/assets/img/home-1/star2.png" alt="img"> Support
                                </div>
                                <div class="text-2">
                                    <img src="/assets/img/home-1/star2.png" alt="img"> Consulting
                                </div>
                                <div class="text-2">
                                    <img src="/assets/img/home-1/star2.png" alt="img"> Technology
                                </div>
                            </div>
                            <div class="marquee-group">
                                <div class="text-2">
                                    <img src="/assets/img/home-1/star2.png" alt="img"> Support
                                </div>
                                <div class="text-2">
                                    <img src="/assets/img/home-1/star2.png" alt="img"> Consulting
                                </div>
                                <div class="text-2">
                                    <img src="/assets/img/home-1/star2.png" alt="img"> Technology
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Pricing Section Start -->
                    <section class="pricing-section fix section-padding">
                        <div class="container">
                            <div class="row g-4">
                                <div class="col-xl-5">
                                    <div class="pricing-content-one">
                                        <div class="section-title mb-0">
                                            <span class="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                                                <img src="/assets/img/home-1/01.png" alt="img">
                                                Our pricing plan
                                            </span>
                                            <h2 class="wa_title_spilt_1">
                                                <span class="style-font">Explore Our Business</span> Pricing Options
                                            </h2>
                                        </div>
                                        <div class="pricing-toggle-wrapper text-center wow fadeInUp" data-wow-delay=".3s">
                                            <span class="toggle-label monthly-label active">Monthly</span>
                                            <span class="toggle-label yearly-label">Yearly</span>
                                        </div>
                                        <div class="pricing-shape">
                                            <img src="/assets/img/home-1/pricing-shape.png" alt="img">
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-7">
                                    <div class="pricing-wrap">
                                        <div class="row g-4">

                                            <!-- CARD 1 -->
                                            <div class="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                                <div class="pricing-box-items active">
                                                    <div class="pricing-header">
                                                        <span>Standard Plan</span>

                                                        <h3 class="price"
                                                            data-monthly="59"
                                                            data-yearly="159">
                                                            $59<sub>/ month</sub>
                                                        </h3>
                                                        <p>Perfect for Small Teams, Startups, and Growing Corporate of Businesses</p>
                                                    </div>
                                                    <a href="contact.html" class="pricing-btn">
                                                        <span class="content-wrap">
                                                            <span class="default-content">
                                                                <i class="fa-solid fa-arrow-up-right"></i>
                                                                <span>Chose package</span>
                                                            </span>

                                                            <span class="hover-content">
                                                                <i class="fa-solid fa-arrow-up-right"></i>
                                                                <span>Chose package</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                     <div class="pricing-list">
                                                        <h4>Features:</h4>
                                                        <ul>
                                                            <li>
                                                                <i class="fa-solid fa-circle-check"></i>
                                                                All standard plan features
                                                            </li>
                                                            <li>
                                                                <i class="fa-solid fa-circle-check"></i>
                                                                Up to 100 projects
                                                            </li>
                                                            <li>
                                                                <i class="fa-solid fa-circle-check"></i>
                                                                Integrations & automation
                                                            </li>
                                                            <li>
                                                                <i class="fa-solid fa-circle-check"></i>
                                                                Monthly financial reports
                                                            </li>
                                                            <li>
                                                                <i class="fa-solid fa-circle-check"></i>
                                                                Up to 20 user accounts
                                                            </li>
                                                            <li>
                                                                <i class="fa-solid fa-circle-check"></i>
                                                                Email support
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- CARD 2 -->
                                            <div class="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                                                <div class="pricing-box-items">
                                                    <div class="pricing-header">
                                                        <span>Premium Plan</span>

                                                        <h3 class="price"
                                                            data-monthly="99"
                                                            data-yearly="199">
                                                            $99<sub>/ month</sub>
                                                        </h3>
                                                        
                                                       <p>Perfect for Small Teams, Startups, and Growing Corporate of Businesses</p>
                                                    </div>
                                                    <a href="contact.html" class="pricing-btn">
                                                        <span class="content-wrap">
                                                            <span class="default-content">
                                                                <i class="fa-solid fa-arrow-up-right"></i>
                                                                <span>Chose package</span>
                                                            </span>

                                                            <span class="hover-content">
                                                                <i class="fa-solid fa-arrow-up-right"></i>
                                                                <span>Chose package</span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                     <div class="pricing-list">
                                                        <h4>Features:</h4>
                                                        <ul>
                                                            <li>
                                                                <i class="fa-solid fa-circle-check"></i>
                                                                All standard plan features
                                                            </li>
                                                            <li>
                                                                <i class="fa-solid fa-circle-check"></i>
                                                                Up to 100 projects
                                                            </li>
                                                            <li>
                                                                <i class="fa-solid fa-circle-check"></i>
                                                                Integrations & automation
                                                            </li>
                                                            <li>
                                                                <i class="fa-solid fa-circle-check"></i>
                                                                Monthly financial reports
                                                            </li>
                                                            <li>
                                                                <i class="fa-solid fa-circle-check"></i>
                                                                Up to 20 user accounts
                                                            </li>
                                                            <li>
                                                                <i class="fa-solid fa-circle-check"></i>
                                                                Email support
                                                            </li>
                                                        </ul>
                                                    </div>
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

                    <!-- Testimonial Section Start -->
                    <section class="testimonial-section client-testimonial fix section-padding">
                        <div class="light-bg">
                            <img src="/assets/img/home-1/light.png" alt="">
                        </div>
                        <div class="container">
                            <div class="section-title text-center">
                                <span class="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                                    <img src="/assets/img/home-1/01.png" alt="img"> Our testimonials
                                </span>
                                <h2 class="wa_title_spilt_1">
                                    <span class="style-font">Our Valued Clients Trust Us</span> To <br>
                                    Innovative <span class="testi-iimg"><img class="img-custom-anim-left" src="/assets/img/home-1/client-info-2.png" alt="img"></span> <span class="style-color">Solutions And <br> Outstanding Results.</span>
                                </h2>
                            </div>
                        </div>
                        <div class="client-testimonial__warpper">
                            <div class="client-testimonial__item testimonial-box-style-1 bg-cover" style="background-image: url('/assets/img/home-1/process-shape.png');">
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
                            <div class="client-testimonial__item testimonial-box-style-1 style-2 bg-cover" style="background-image: url('/assets/img/home-1/process-shape.png');">
                                <div class="quote-icon">
                                    <img src="/assets/img/home-1/quote.png" alt="img">
                                </div>
                                <h3>
                                    “From the outset, we provid expectations and regular updates our progress. You’ll receive comprehensive reports outline. From the outset, we pro expectations and regular updates our progress.
                                </h3>
                                <div class="client-info-item">
                                <div class="client-info">
                                    <h4>James Anderson </h4>
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
                            <div class="client-testimonial__item testimonial-box-style-1 bg-cover" style="background-image: url('/assets/img/home-1/process-shape.png');">
                                <div class="quote-icon">
                                    <img src="/assets/img/home-1/quote.png" alt="img">
                                </div>
                                <h3>
                                    “From the outset, we provid expectations and regular updates our progress. You’ll receive comprehensive reports outline. From the outset, we pro expectations and regular updates our progress.
                                </h3>
                                <div class="client-info-item">
                                <div class="client-info">
                                    <h4>Daniel Taeloor </h4>
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
                            <div class="client-testimonial__item testimonial-box-style-1 style-2 bg-cover" style="background-image: url('/assets/img/home-1/process-shape.png');">
                                            <div class="quote-icon">
                                                <img src="/assets/img/home-1/quote.png" alt="img">
                                            </div>
                                            <h3>
                                                “From the outset, we provid expectations and regular updates our progress. You’ll receive comprehensive reports outline. From the outset, we pro expectations and regular updates our progress.
                                            </h3>
                                            <div class="client-info-item">
                                            <div class="client-info">
                                                <h4>Kevin Harriees </h4>
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
                 
                    </section>

                    <!-- News Section Start -->
                    <section class="news-section fix section-padding section-bg oit-panel-pin-area">
                        <div class="container">
                            <div class="section-title-area mb-0">
                                <div class="text-items wow fadeInUp" data-wow-delay=".3s">
                                    <p>
                                       See what media outlets are saying about ouZr work <br> and impact platforms that featured us.
                                    </p>
                                    <a href="news.html" class="news-btn">
                                        <span class="text">
                                            <span class="text-default">Explore More  <i class="fa-regular fa-arrow-up-right"></i></span>
                                            <span class="text-hover">Explore More  <i class="fa-regular fa-arrow-up-right"></i></span>
                                        </span>
                                    </a>
                                </div>
                                <div class="section-title">
                                    <span class="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                                        <img src="/assets/img/home-1/01.png" alt="img"> Our press
                                    </span>
                                    <h2 class="wa_title_spilt_1">
                                        <span class="style-font">Highlights</span> From News
                                    </h2>
                                </div>
                            </div>
                            <div class="news-box-items oit-panel-pin">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="thumb">
                                            <img src="/assets/img/home-1/news-01.jpg" alt="img">
                                            <img src="/assets/img/home-1/news-01.jpg" alt="img">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="content">
                                            <h3 class="title">
                                                <a href="news-details.html">Unlocking the future of business how smart innovation creates lasting impact</a>
                                            </h3>
                                            <ul>
                                                <li>
                                                    <div class="client-info">
                                                        <div class="client-image">
                                                            <img src="/assets/img/home-1/news-client-1.png" alt="img">
                                                        </div>
                                                        <div class="client-content">
                                                            <p class="name">Pixelone</p>
                                                            <p>Composed by</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="news-line"></div>
                                                </li>
                                                <li>
                                                    <span>web design</span>
                                                    <span class="color-2">Aug 27, 2026</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="news-box-items oit-panel-pin">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="thumb">
                                            <img src="/assets/img/home-1/news-02.jpg" alt="img">
                                            <img src="/assets/img/home-1/news-02.jpg" alt="img">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="content">
                                            <h3 class="title">
                                                <a href="news-details.html">Unlocking the future of business how smart innovation creates lasting impact</a>
                                            </h3>
                                            <ul>
                                                <li>
                                                    <div class="client-info">
                                                        <div class="client-image">
                                                            <img src="/assets/img/home-1/news-client-2.png" alt="img">
                                                        </div>
                                                        <div class="client-content">
                                                            <p class="name">Pixelone</p>
                                                            <p>Composed by</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="news-line"></div>
                                                </li>
                                                <li>
                                                    <span>web design</span>
                                                    <span class="color-2">Aug 27, 2026</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="news-box-items oit-panel-pin">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="thumb">
                                            <img src="/assets/img/home-1/news-03.jpg" alt="img">
                                            <img src="/assets/img/home-1/news-03.jpg" alt="img">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="content">
                                            <h3 class="title">
                                                <a href="news-details.html">Unlocking the future of business how smart innovation creates lasting impact</a>
                                            </h3>
                                            <ul>
                                                <li>
                                                    <div class="client-info">
                                                        <div class="client-image">
                                                            <img src="/assets/img/home-1/news-client-3.png" alt="img">
                                                        </div>
                                                        <div class="client-content">
                                                            <p class="name">Pixelone</p>
                                                            <p>Composed by</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="news-line"></div>
                                                </li>
                                                <li>
                                                    <span>web design</span>
                                                    <span class="color-2">Aug 27, 2026</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Lets Talk Section Start -->
                    <section class="lets-talk-section fix hero-ptb image-distortion p-relative z-index-1 bg-cover" data-background="/assets/img/bg-wrap-3.jpg">
                        <div class="container">
                            <div class="lets-talk-content text-center">
                                <div class="as-partner-3-big-title">
                                    <h2 class="title">
                                        <span>Let’s</span> talk Now
                                    </h2>
                                </div>
                                <a class="theme-btn-main style-2 wow fadeInUp" data-wow-delay=".3s" href="contact.html">
                                        <span class="theme-btn-arrow-left"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                        <span class="theme-btn">Free call here!</span>
                                        <span class="theme-btn-arrow-right"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                    </a>
                            </div>
                        </div>
                    </section>

                    <!-- Footer Section Start -->`}} />
  )
}
