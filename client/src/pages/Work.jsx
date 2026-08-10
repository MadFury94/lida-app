import { useEffect } from 'react'


export default function Work() {
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
                                    <h1 class="text-white rr_title_anim"><span>Our Creative Works </span> That <br> Makes You Happy</h1>
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
                                        Our works
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Projetct Section Start -->
                    <section class="project-section-5 fix section-padding pt-0">
                      <div class="container container-1680">
                         <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6">
                                <div class="project-box-items-5">
                                    <div class="thumb">
                                        <img src="/assets/img/home-1/projecr-01.jpg" alt="img">
                                        <img src="/assets/img/home-1/projecr-01.jpg" alt="img">
                                        <a href="project-details.html" class="arrow-icon">
                                            <i class="fa-solid fa-arrow-up-right"></i>
                                        </a>
                                    </div>
                                    <div class="content-items">
                                        <div class="content">
                                            <h2 class="title">
                                                <a href="project-details.html">Market Expansion</a>
                                            </h2>
                                            <div class="tag-items">
                                                <a href="project.html">Consulting</a>
                                                <a href="project.html">Business</a>
                                            </div>
                                        </div>
                                        <span class="year-text">[ 2026 ]</span>
                                    </div>
                                </div>
                                <div class="project-box-items-5">
                                    <div class="thumb">
                                        <img src="/assets/img/home-1/projecr-03.jpg" alt="img">
                                        <img src="/assets/img/home-1/projecr-03.jpg" alt="img">
                                        <a href="project-details.html" class="arrow-icon">
                                            <i class="fa-solid fa-arrow-up-right"></i>
                                        </a>
                                    </div>
                                    <div class="content-items">
                                        <div class="content">
                                            <h2 class="title">
                                                <a href="project-details.html">Product Innovatio</a>
                                            </h2>
                                            <div class="tag-items">
                                                <a href="project.html">Consulting</a>
                                                <a href="project.html">Business</a>
                                            </div>
                                        </div>
                                        <span class="year-text">[ 2026 ]</span>
                                    </div>
                                </div>
                                <div class="project-box-items-5">
                                    <div class="thumb">
                                        <img src="/assets/img/home-1/projecr-02.jpg" alt="img">
                                        <img src="/assets/img/home-1/projecr-02.jpg" alt="img">
                                        <a href="project-details.html" class="arrow-icon">
                                            <i class="fa-solid fa-arrow-up-right"></i>
                                        </a>
                                    </div>
                                    <div class="content-items">
                                        <div class="content">
                                            <h2 class="title">
                                                <a href="project-details.html">Market Expansion</a>
                                            </h2>
                                            <div class="tag-items">
                                                <a href="project.html">Consulting</a>
                                                <a href="project.html">Business</a>
                                            </div>
                                        </div>
                                        <span class="year-text">[ 2026 ]</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                                <div class="project-box-items-5 style-auto">
                                    <div class="thumb">
                                        <img src="/assets/img/home-1/projecr-02.jpg" alt="img">
                                        <img src="/assets/img/home-1/projecr-02.jpg" alt="img">
                                        <a href="project-details.html" class="arrow-icon">
                                            <i class="fa-solid fa-arrow-up-right"></i>
                                        </a>
                                    </div>
                                    <div class="content-items">
                                        <div class="content">
                                            <h2 class="title">
                                                <a href="project-details.html">Creative Campaign</a>
                                            </h2>
                                            <div class="tag-items">
                                                <a href="project.html">Consulting</a>
                                                <a href="project.html">Business</a>
                                            </div>
                                        </div>
                                        <span class="year-text">[ 2026 ]</span>
                                    </div>
                                </div>
                                <div class="project-box-items-5 style-auto">
                                    <div class="thumb">
                                        <img src="/assets/img/home-1/projecr-04.jpg" alt="img">
                                        <img src="/assets/img/home-1/projecr-04.jpg" alt="img">
                                        <a href="project-details.html" class="arrow-icon">
                                            <i class="fa-solid fa-arrow-up-right"></i>
                                        </a>
                                    </div>
                                    <div class="content-items">
                                        <div class="content">
                                            <h2 class="title">
                                                <a href="project-details.html">Brand Strategy </a>
                                            </h2>
                                            <div class="tag-items">
                                                <a href="project.html">Consulting</a>
                                                <a href="project.html">Business</a>
                                            </div>
                                        </div>
                                        <span class="year-text">[ 2026 ]</span>
                                    </div>
                                </div>
                                <div class="project-box-items-5 style-auto">
                                    <div class="thumb">
                                        <img src="/assets/img/home-1/projecr-03.jpg" alt="img">
                                        <img src="/assets/img/home-1/projecr-03.jpg" alt="img">
                                        <a href="project-details.html" class="arrow-icon">
                                            <i class="fa-solid fa-arrow-up-right"></i>
                                        </a>
                                    </div>
                                    <div class="content-items">
                                        <div class="content">
                                            <h2 class="title">
                                                <a href="project-details.html">Product Innovatio</a>
                                            </h2>
                                            <div class="tag-items">
                                                <a href="project.html">Consulting</a>
                                                <a href="project.html">Business</a>
                                            </div>
                                        </div>
                                        <span class="year-text">[ 2026 ]</span>
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

                    <!-- Footer Section Start -->
`}} />
  )
}
