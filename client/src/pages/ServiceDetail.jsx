import { useEffect } from 'react'


export default function ServiceDetail() {
  useEffect(() => {
    if (typeof window.WOW !== 'undefined') new window.WOW({ live: false }).init()
    if (window.$ && window.$.fn.counterUp) window.$('.count').counterUp({ delay: 10, time: 1000 })
    
  }, [])

  return (
    <div dangerouslySetInnerHTML={{__html: `                   <!-- Service Section Start -->
                    <section class="services-details-section section-padding">
                         <div class="light-bg">
                            <img src="/assets/img/inner-page/light.png" alt="img">
                        </div>
                        <div class="bg-line">
                            <img src="/assets/img/inner-page/bread-line.png" alt="img">
                        </div>
                        <div class="title-area">
                            <div class="container">
                                <h1 class="text-white rr_title_anim"><span>Web Development </span> And UX/UI Design Services
                                </h1>
                            </div>
                        </div>
                        <div class="container container-1680">
                            <div class="service-details-wrapper">
                                <div class="row g-4">
                                    <div class="details-top-item">
                                        <div class="left-content">
                                            <h2>
                                                Design Solutions For <br> Every Brand
                                            </h2>
                                            <p>
                                                Design is at the heart of everything we create. From the first spark of an idea to the final polished piece, our design approach blends creativity, strategy, and functionality to deliver experiences that resonate with for our creative audiences.
                                            </p>
                                        </div>
                                        <ul class="details-list">
                                            <li>
                                                <i class="fa-solid fa-check"></i>
                                                Strategy-Driven Creativity
                                            </li>
                                            <li>
                                                <i class="fa-solid fa-check"></i>
                                                User-Centered Design
                                            </li>
                                            <li>
                                                <i class="fa-solid fa-check"></i>
                                               Innovative Digital Solutions
                                            </li>
                                            <li>
                                                <i class="fa-solid fa-check"></i>
                                               Innovative Digital Solutions
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="service-details-image">
                                            <img data-speed=".8" src="/assets/img/inner-page/service-details1.jpg" alt="img">
                                        </div>
                                    </div>
                                    <div class="service-concept-item">
                                        <div class="number-list">
                                            <span class="number">01</span>
                                            <span class="number">02</span>
                                            <span class="number">03</span>
                                        </div>
                                        <div class="row g-4">
                                            <div class="col-lg-6 col-md-6">
                                            <div class="service-count-left">
                                                <h2>0<span class="count">3</span></h2>
                                                <p>Our simple comprehensive design process</p>
                                                <div class="details-thumb">
                                                    <img src="/assets/img/inner-page/service-details-2.jpg" alt="img">
                                                </div>
                                            </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <h2>
                                                    From Concept To <br> Completion
                                                </h2>
                                                <div class="service-concept-box">
                                                    <h3>Discover & research</h3>
                                                    <p>
                                                        We begin by understanding your brand, goals, and audience. Through in-depth research, competitor analysis.
                                                    </p>
                                                </div>
                                                <div class="service-concept-box">
                                                    <h3>Design & developmenth</h3>
                                                    <p>
                                                        We begin by understanding your brand, goals, and audience. Through in-depth research, competitor analysis.
                                                    </p>
                                                </div>
                                                <div class="service-concept-box mb-0">
                                                    <h3>Deliver & launch</h3>
                                                    <p>
                                                        We begin by understanding your brand, goals, and audience. Through in-depth research, competitor analysis.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                     <!-- Service-Visual-Section Start -->
                    <section class="service-visual-section section-padding fix">
                        <div class="container container-1680">
                            <div class="section-title-4 mb-4">
                                <h2>
                                    TURNING CONCEP INTO <br> VISUAL STORIES
                                </h2>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="service-visual-item">
                                        <p>
                                            Collaboration is key to our process. We work closely with clients, understanding their feedback and iterating rapidly to ensure the outcome aligns perfectly with their vision. Every design decision is deliberate, backed by research, creativity, and a deep understanding of human behavior. This approach allows us to craft solutions.
                                        </p>
                                        <div class="service-visual-image">
                                            <img data-speed=".8" src="/assets/img/inner-page/service-details-3.jpg" alt="img">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="service-visual-item">
                                        <p>
                                            Collaboration is key to our process. We work closely with clients, understanding their feedback and iterating rapidly to ensure the outcome aligns perfectly with their vision. Every design decision is deliberate, backed by research, creativity, and a deep understanding of human behavior. This approach allows us to craft solutions.
                                        </p>
                                        <div class="service-visual-image">
                                            <img data-speed=".8" src="/assets/img/inner-page/service-details-4.jpg" alt="img">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Faq Section Start -->
                    <section class="faq-section-5 section-padding section-bg fix">
                        <div class="container container-1680">
                           <div class="faq-wrapper-5">
                             <div class="section-title-area align-items-start">
                                <div class="section-title-4 mb-0">
                                    <span class="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                                         READ COMMON QUESTIONS
                                    </span>
                                </div>
                                <div class="section-title-4 mb-0">
                                    <h2 class="title wa_title_spilt_1">
                                        Quick Solution For Your Top <br> Questions.
                                    </h2>
                                </div>
                            </div>
                                 <div class="row g-4 align-items-end">
                                <div class="col-lg-5">
                                    <div class="faq-image-5">
                                        <img src="/assets/img/inner-page/faq.jpg" alt="img">
                                    </div>
                                </div>
                                <div class="col-lg-7">
                                    <div class="grt-faq-content-1 mt-0">
                                        <ul class="accordion-box style-4 style-5 wow fadeInUp" data-wow-delay=".3s">
                                            <li class="accordion block active-block acc-bg-2">
                                                <div class="acc-btn active">
                                                  What services does your creative agency offer?
                                                    <div class="icon fa-regular fa-plus"></div>
                                                </div>
                                                <div class="acc-content current">
                                                    <div class="content">
                                                        <div class="text">
                                                           We offer a complete range of digital services including UI/UX design, website development, branding, product design, and digital marketing. Our team focuses on delivering visually appealing and performance-driven solutions that help brands grow and stand out in competitive markets.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="accordion block acc-bg-2">
                                                <div class="acc-btn active">
                                                    Do you offer custom website design?
                                                    <div class="icon fa-regular fa-plus"></div>
                                                </div>
                                                <div class="acc-content">
                                                    <div class="content">
                                                        <div class="text">
                                                           We offer a complete range of digital services including UI/UX design, website development, branding, product design, and digital marketing. Our team focuses on delivering visually appealing and performance-driven solutions that help brands grow and stand out in competitive markets.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="accordion block acc-bg-2">
                                                <div class="acc-btn active">
                                                   How long does a typical project take?
                                                    <div class="icon fa-regular fa-plus"></div>
                                                </div>
                                                <div class="acc-content">
                                                    <div class="content">
                                                        <div class="text">
                                                           We offer a complete range of digital services including UI/UX design, website development, branding, product design, and digital marketing. Our team focuses on delivering visually appealing and performance-driven solutions that help brands grow and stand out in competitive markets.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="accordion block acc-bg-2">
                                                <div class="acc-btn active">
                                                   Do you provide ThemeForest-ready templates?
                                                    <div class="icon fa-regular fa-plus"></div>
                                                </div>
                                                <div class="acc-content">
                                                    <div class="content">
                                                        <div class="text">
                                                           We offer a complete range of digital services including UI/UX design, website development, branding, product design, and digital marketing. Our team focuses on delivering visually appealing and performance-driven solutions that help brands grow and stand out in competitive markets.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="accordion block acc-bg-2">
                                                <div class="acc-btn active">
                                                    Is your design process client-focused?
                                                    <div class="icon fa-regular fa-plus"></div>
                                                </div>
                                                <div class="acc-content">
                                                    <div class="content">
                                                        <div class="text">
                                                           We offer a complete range of digital services including UI/UX design, website development, branding, product design, and digital marketing. Our team focuses on delivering visually appealing and performance-driven solutions that help brands grow and stand out in competitive markets.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>

                    <!-- Service Details Icon Section Start -->
                    <section class="service-icon-details-section pb-0 fix section-padding">
                        <div class="container container-1680">
                            <div class="row g-4">
                                <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                                    <div class="details-icon-box-item">
                                        <div class="icon">
                                            <img src="/assets/img/inner-page/icon1.png" alt="img">
                                        </div>
                                        <div class="content">
                                            <h2 class="title">Expertise</h2>
                                            <p>
                                                Our team is composed of experienced professionals in design, development, branding, and digital marketing.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                                    <div class="details-icon-box-item">
                                        <div class="icon">
                                            <img src="/assets/img/inner-page/icon2.png" alt="img">
                                        </div>
                                        <div class="content">
                                            <h2 class="title">Tailored solutions</h2>
                                            <p>
                                                Our team is composed of experienced professionals in design, development, branding, and digital marketing.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                                    <div class="details-icon-box-item">
                                        <div class="icon">
                                            <img src="/assets/img/inner-page/icon3.png" alt="img">
                                        </div>
                                        <div class="content">
                                            <h2 class="title">End-to-End service</h2>
                                            <p>
                                                Our team is composed of experienced professionals in design, development, branding, and digital marketing.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                                    <div class="details-icon-box-item">
                                        <div class="icon">
                                            <img src="/assets/img/inner-page/icon4.png" alt="img">
                                        </div>
                                        <div class="content">
                                            <h2 class="title">Proven results</h2>
                                            <p>
                                                Our team is composed of experienced professionals in design, development, branding, and digital marketing.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

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
