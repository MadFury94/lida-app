import { useEffect } from 'react'

export default function WorkDetailTechStartup() {
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
                                    <h1 class="text-white rr_title_anim"><span>Launching A Fintech Startup</span> 
                                        In Nigeria's Competitive Market
                                    </h1>
                                </div>
                                <div class="breadcrumb-items">
                                    <ul>
                                        <li>
                                          Brand Strategy, Digital Launch & Customer Acquisition
                                        </li>
                                        <li>
                                            (Fintech/Technology | 2024)
                                        </li>
                                    </ul>
                                    <h2 class="title wa_title_spilt_1">
                                       PayConnect Nigeria
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Project Section Start -->
                    <section class="project-details-section fix section-padding">
                        <div class="container">
                            <div class="details-thumbs fix">
                                <img data-speed=".8" src="/assets/img/inner-page/PayConnect - Lida Fintech Launch Service.jpeg" alt="img">
                            </div>
                        </div>
                        <div class="container container-1680">
                            <div class="project-details-wrapper">
                                <div class="project-details-top-item">
                                    <div class="top-content">
                                        <h2>
                                           Building Trust For A New Fintech In Nigeria
                                        </h2>
                                        <p>
                                           PayConnect Nigeria needed to launch their innovative payment solution in Nigeria's competitive fintech market. The challenge was building immediate credibility, communicating complex technology simply, and acquiring early customers while competing with established payment providers.</p>
                                    </div>
                                    <div class="project-details-info-item">
                                        <div class="content">
                                            <span>Client:</span>
                                            <p>PayConnect Nigeria</p>
                                        </div>
                                        <div class="content">
                                            <span>Services:</span>
                                            <p>Brand Strategy, Digital Launch, Customer Acquisition</p>
                                        </div>
                                        <div class="content">
                                            <span>Industry:
</span>
                                            <p> Fintech/Technology</p>
                                        </div>
                                        <div class="content style-2">
                                            <span>Date:</span>
                                            <p>2024</p>
                                        </div>
                                    </div>
                                    <div class="project-details-image">
                                        <img data-speed=".8" src="/assets/img/inner-page/PayConnect - Lida Fintech Launch Service-15.jpeg" alt="img">
                                    </div>
                                    <div class="row g-4">
                                        <div class="col-lg-7">
                                            <div class="left-text">
                                                <h2>
                                                    From Startup Vision To Market Reality
                                                </h2>
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="details-content">
                                                <p>
Nigeria's fintech sector is one of the most competitive in Africa. New payment solutions must not only demonstrate technical capability but also earn trust quickly, communicate benefits clearly, and acquire customers who already have multiple payment options.
                                                </p>
                                                <p>
                                              Lida developed PayConnect's complete brand strategy, managed their digital launch, and executed customer acquisition campaigns that positioned them as a credible alternative to established providers while building early market traction.
                                                </p>
                                                <ul class="details-list">
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        Complete brand strategy and identity
                                                    </li>
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        Digital launch campaign management
                                                    </li>
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        Customer acquisition and onboarding
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
                                                    <img data-speed=".8" src="/assets/img/inner-page/payconnect1.jpeg" alt="img">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="thumb">
                                                    <img data-speed=".8" src="/assets/img/inner-page/payconnect2.jpeg" alt="img">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="left-text mb-4">
                                        <h2>
                                           From Market Strategy To Customer Acquisition
                                        </h2>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">01</span>
                                                <h3>Brand strategy</h3>
                                                <p>
                                                    We developed positioning, messaging, and visual identity that differentiated PayConnect in the competitive fintech landscape.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">02</span>
                                                <h3>Launch preparation</h3>
                                                <p>
                                                    We created launch campaigns, digital assets, and communication strategies that built early awareness and credibility.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">03</span>
                                                <h3>Customer acquisition</h3>
                                                <p>
                                                   We executed targeted campaigns to drive app downloads, user registrations, and early transaction volume.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">04</span>
                                                <h3>Growth optimization</h3>
                                                <p>
                                                   We tracked performance metrics, optimized campaigns, and scaled successful customer acquisition channels.
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
                                                PayConnect successfully launched in the Nigerian market with strong brand recognition, credible positioning, and measurable customer adoption. The launch campaign established them as a viable alternative to established payment providers.
                                            <p class="mb-0">
                                                <strong>Key Achievements:</strong> Achieved 50,000+ app downloads in first 3 months, generated 15,000+ registered users, and established strong brand presence in the competitive fintech sector.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <!-- Client Testimonial -->
                                    <div class="client-testimonial mt-5 p-4" style="background: #f8f9fa; border-radius: 8px;">
                                        <blockquote class="mb-3">
                                            <p style="font-style: italic; font-size: 18px; line-height: 1.6; margin: 0;">"LIDA helped us turn our fintech vision into market reality. They understood the competitive landscape, developed positioning that differentiated us, and executed campaigns that delivered real user acquisition. Their strategic approach was exactly what we needed for a successful launch."</p>
                                        </blockquote>
                                        <cite style="display: block; margin-top: 15px;">
                                            <strong>Sarah O.</strong><br>
                                            <span style="color: #666;">Co-Founder & CEO, PayConnect Nigeria</span>
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