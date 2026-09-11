import { useEffect } from 'react'

export default function WorkDetail() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
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
                                    <h1 class="text-white rr_title_anim"><span>Positioning A New Banking Brand</span> 
                                        For A Confident Market Entry
                                    </h1>
                                </div>
                                <div class="breadcrumb-items">
                                    <ul>
                                        <li>
                                          Brand Identity & Campaign Creative
                                        </li>
                                        <li>
                                            (Financial Services | 2024)
                                        </li>
                                    </ul>
                                    <h2 class="title wa_title_spilt_1">
                                       Duxbank
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Project Section Start -->
                    <section class="project-details-section fix section-padding">
                        <div class="container">
                            <div class="details-thumbs fix">
                                <img data-speed=".8" src="/assets/img/inner-page/Duxbank - Lida Nigeria Brand Identity design and AD campaign Service.jpeg" alt="img">
                            </div>
                        </div>
                        <div class="container container-1680">
                            <div class="project-details-wrapper">
                                <div class="project-details-top-item">
                                    <div class="top-content">
                                        <h2>
                                           Building A Market-Ready Banking Brand
                                        </h2>
                                        <p>
                                           Duxbank Microfinance Bank was preparing to enter Nigeria’s competitive financial services market. The brand needed a credible, modern and consistent visual presence that could support awareness, build early trust and create distinction from day one.  </p>
                                    </div>
                                    <div class="project-details-info-item">
                                        <div class="content">
                                            <span>Client:</span>
                                            <p>Duxbank Microfinance Bank</p>
                                        </div>
                                        <div class="content">
                                            <span>Services:</span>
                                            <p>Brand Identity Refinement, Logo System, Outdoor Campaign Creative</p>
                                        </div>
                                        <div class="content">
                                            <span>Industry:
</span>
                                            <p> Financial Services</p>
                                        </div>
                                        <div class="content style-2">
                                            <span>Date:</span>
                                            <p>2024</p>
                                        </div>
                                    </div>
                                    <div class="project-details-image">
                                        <img data-speed=".8" src="/assets/img/inner-page/Duxbank - Lida Nigeria Brand Identity design and AD campaign Service-15.jpeg" alt="img">
                                    </div>
                                    <div class="row g-4">
                                        <div class="col-lg-7">
                                            <div class="left-text">
                                                <h2>
                                                    Creating A More Credible First Impression
                                                </h2>
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="details-content">
                                                <p>
Launching a new financial institution in a competitive market required more than a recognisable logo. Duxbank needed a visual identity that could feel credible and established, while still presenting the business as forward-looking and innovative.
                                                </p>
                                                <p>
                                              Lida refined Duxbank’s brand identity and enhanced its logo system to create greater consistency across public-facing materials. We then developed outdoor advertising creative designed to introduce the brand, build early awareness and support its market-entry ambition.
                                                </p>
                                                <ul class="details-list">
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        Refined visual identity
                                                    </li>
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        Enhanced logo system
                                                    </li>
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        Outdoor advertising creative
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-check"></i>
                                                        Market-entry brand assets
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="details-image-item">
                                        <div class="row g-4">
                                            <div class="col-lg-6 col-md-6">
                                                <div class="thumb">
                                                    <img data-speed=".8" src="/assets/img/inner-page/duxbank.jpeg" alt="img">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="thumb">
                                                    <img data-speed=".8" src="/assets/img/inner-page/duxbank2.jpeg" alt="img">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="left-text mb-4">
                                        <h2>
                                           From Brand Review To Market-Ready Creative
                                        </h2>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">01</span>
                                                <h3>Brand review</h3>
                                                <p>
                                                    We assessed the existing brand assets and clarified the visual direction needed for a credible market entry.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">02</span>
                                                <h3>Identity refinement</h3>
                                                <p>
                                                    We refined key visual elements and strengthened the logo system for clearer, more consistent use.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">03</span>
                                                <h3>Campaign development</h3>
                                                <p>
                                                   We developed outdoor advertising creative to introduce the brand and build market awareness.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">04</span>
                                                <h3>Launch-ready assets</h3>
                                                <p>
                                                   We prepared the visual assets needed to support Duxbank's public-facing market introduction.
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
                                                The project equipped Duxbank with a more coherent brand identity, an enhanced logo system and distinctive outdoor campaign creative for its market introduction. Together, these assets created a clearer foundation for presenting Duxbank as a modern and innovative financial institution.
                                            <p class="mb-0">
                                                <strong>Key Achievements:</strong> Delivered complete brand identity system, enhanced market credibility, and established strong visual foundation for business growth.
                                            </p>
                                        </div>
                                    </div>

                                    
                                    <div class="slider-button d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center gap-xxl-4 gap-3 gap-2">
                                                <button class="cmn-prev cmn-border d-center" onclick="window.history.back()">
                                                <i class="fas fa-chevron-left"></i>
                                                </button>
                                                <span class="previus-text text-capitalize">
                                                Previous
                                                </span>
                                            </div>
                                            <div class="icon-gird">
                                                <a href="/work">
                                                    <img src="/assets/img/inner-page/icon/grid.svg" alt="img">
                                                </a>
                                            </div>
                                            <div class="d-flex align-items-center gap-xxl-4 gap-3 gap-2">
                                                <span class="previus-text text-capitalize">
                                                <a href="/contact" style="text-decoration: none; color: inherit;">Get In Touch</a>
                                                </span>
                                                <a href="/contact" class="cmn-next cmn-border d-center">
                                                <i class="fas fa-chevron-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Footer Section Start -->
`}} />
  )
}
