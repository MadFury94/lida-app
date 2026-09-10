import { useEffect } from 'react'

export default function WorkDetailCalpak() {
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
                                    <h1 class="text-white rr_title_anim"><span>Introducing International Energy Brand</span> 
                                        To Nigerian Market
                                    </h1>
                                </div>
                                <div class="breadcrumb-items">
                                    <ul>
                                        <li>
                                          Digital Marketing & Market Entry Strategy
                                        </li>
                                        <li>
                                            (Energy | 2024)
                                        </li>
                                    </ul>
                                    <h2 class="title wa_title_spilt_1">
                                       Calpak Nigeria
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Project Section Start -->
                    <section class="project-details-section fix section-padding">
                        <div class="container">
                            <div class="details-thumbs fix">
                                <img data-speed=".8" src="/assets/img/inner-page/Calpak Nigeria - Lida Digital Marketing Campaign Service.jpeg" alt="img">
                            </div>
                        </div>
                        <div class="container container-1680">
                            <div class="project-details-wrapper">
                                <div class="project-details-top-item">
                                    <div class="top-content">
                                        <h2>
                                           Building Trust For Energy Solutions In Nigeria
                                        </h2>
                                        <p>
                                           Calpak Nigeria needed to establish credibility and awareness for their international energy solutions in Nigeria's competitive market. The challenge was building local trust for an international brand while generating measurable commercial results from the first campaign.</p>
                                    </div>
                                    <div class="project-details-info-item">
                                        <div class="content">
                                            <span>Client:</span>
                                            <p>Calpak Nigeria</p>
                                        </div>
                                        <div class="content">
                                            <span>Services:</span>
                                            <p>Digital Marketing, Market Entry Strategy, Campaign Management</p>
                                        </div>
                                        <div class="content">
                                            <span>Industry:
</span>
                                            <p> Energy Solutions</p>
                                        </div>
                                        <div class="content style-2">
                                            <span>Date:</span>
                                            <p>2024</p>
                                        </div>
                                    </div>
                                    <div class="project-details-image">
                                        <img data-speed=".8" src="/assets/img/inner-page/Calpak Nigeria - Lida Digital Marketing Campaign Service-15.jpeg" alt="img">
                                    </div>
                                    <div class="row g-4">
                                        <div class="col-lg-7">
                                            <div class="left-text">
                                                <h2>
                                                    From International Brand To Local Market Leader
                                                </h2>
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="details-content">
                                                <p>
Introducing an established international energy brand to the Nigerian market required more than translation. It needed local understanding, trusted positioning, and campaigns that could build credibility while generating immediate commercial impact.
                                                </p>
                                                <p>
                                              Lida developed Calpak Nigeria's market entry strategy, managed their complete digital presence, and executed targeted campaigns that reached decision-makers across key market segments. The result was rapid sales growth and strong market recognition.
                                                </p>
                                                <ul class="details-list">
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        Market research and positioning
                                                    </li>
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        Multi-channel digital campaigns
                                                    </li>
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        Local partnership development
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-check"></i>
                                                        Performance tracking and optimization
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="details-image-item">
                                        <div class="row g-4">
                                            <div class="col-lg-6 col-md-6">
                                                <div class="thumb">
                                                    <img data-speed=".8" src="/assets/img/inner-page/calpak1.jpeg" alt="img">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="thumb">
                                                    <img data-speed=".8" src="/assets/img/inner-page/calpak2.jpeg" alt="img">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="left-text mb-4">
                                        <h2>
                                           From Market Research To Commercial Success
                                        </h2>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">01</span>
                                                <h3>Market analysis</h3>
                                                <p>
                                                    We conducted comprehensive research to understand the Nigerian energy sector, identifying key opportunities and market positioning strategies.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">02</span>
                                                <h3>Campaign development</h3>
                                                <p>
                                                    We developed targeted campaigns focused on building trust, demonstrating value, and reaching decision-makers across key market segments.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">03</span>
                                                <h3>Digital execution</h3>
                                                <p>
                                                   We launched multi-platform digital campaigns with localized messaging, strategic media placement, and performance optimization.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">04</span>
                                                <h3>Results tracking</h3>
                                                <p>
                                                   We implemented comprehensive tracking to measure brand awareness, engagement, and commercial impact across all campaign elements.
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
                                                The campaign successfully established Calpak Nigeria as a credible energy solutions provider, achieving significant sales growth and market recognition within the first quarter of launch.
                                            <p class="mb-0">
                                                <strong>Key Achievements:</strong> Generated 25.9 million impressions, increased sales by 35x, and established strong brand presence in the Nigerian energy sector.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <!-- Client Testimonial -->
                                    <div class="client-testimonial mt-5 p-4" style="background: #f8f9fa; border-radius: 8px;">
                                        <blockquote class="mb-3">
                                            <p style="font-style: italic; font-size: 18px; line-height: 1.6; margin: 0;">"LIDA's market entry strategy was precisely what we needed. They understood both our international standards and the local market dynamics. The campaign results exceeded our expectations, delivering measurable commercial impact while building the brand credibility we needed for long-term success."</p>
                                        </blockquote>
                                        <cite style="display: block; margin-top: 15px;">
                                            <strong>James M.</strong><br>
                                            <span style="color: #666;">Managing Director, Calpak Nigeria</span>
                                        </cite>
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