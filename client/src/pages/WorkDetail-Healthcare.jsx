import { useEffect } from 'react'

export default function WorkDetailHealthcare() {
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
                                    <h1 class="text-white rr_title_anim"><span>Positioning Private Healthcare Excellence</span> 
                                        In Nigeria's Growing Market
                                    </h1>
                                </div>
                                <div class="breadcrumb-items">
                                    <ul>
                                        <li>
                                          Brand Strategy, Trust Building & Patient Acquisition
                                        </li>
                                        <li>
                                            (Healthcare | 2024)
                                        </li>
                                    </ul>
                                    <h2 class="title wa_title_spilt_1">
                                       MedFirst Healthcare
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Project Section Start -->
                    <section class="project-details-section fix section-padding">
                        <div class="container">
                            <div class="details-thumbs fix">
                                <img data-speed=".8" src="/assets/img/inner-page/MedFirst Healthcare - Lida Healthcare Marketing Service.jpeg" alt="img">
                            </div>
                        </div>
                        <div class="container container-1680">
                            <div class="project-details-wrapper">
                                <div class="project-details-top-item">
                                    <div class="top-content">
                                        <h2>
                                           Building Trust For Premium Healthcare Services
                                        </h2>
                                        <p>
                                           MedFirst Healthcare needed to establish credibility and patient confidence for their premium private healthcare services in Nigeria's competitive medical market. The challenge was communicating medical excellence, building trust with potential patients, and differentiating from established healthcare providers.</p>
                                    </div>
                                    <div class="project-details-info-item">
                                        <div class="content">
                                            <span>Client:</span>
                                            <p>MedFirst Healthcare</p>
                                        </div>
                                        <div class="content">
                                            <span>Services:</span>
                                            <p>Healthcare Brand Strategy, Trust Building, Patient Communications</p>
                                        </div>
                                        <div class="content">
                                            <span>Industry:
</span>
                                            <p> Private Healthcare</p>
                                        </div>
                                        <div class="content style-2">
                                            <span>Date:</span>
                                            <p>2024</p>
                                        </div>
                                    </div>
                                    <div class="project-details-image">
                                        <img data-speed=".8" src="/assets/img/inner-page/MedFirst Healthcare - Lida Healthcare Marketing Service-15.jpeg" alt="img">
                                    </div>
                                    <div class="row g-4">
                                        <div class="col-lg-7">
                                            <div class="left-text">
                                                <h2>
                                                    From Medical Excellence To Patient Trust
                                                </h2>
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="details-content">
                                                <p>
Healthcare is the ultimate trust-based industry. Patients need confidence in medical expertise, facility quality, and care standards before choosing a healthcare provider. This is especially critical for premium private healthcare services competing with established hospitals.
                                                </p>
                                                <p>
                                              Lida developed comprehensive brand strategy and communications that positioned MedFirst Healthcare as the premier choice for discerning patients, built credible visibility through strategic channels, and created patient acquisition systems that generated measurable growth.
                                                </p>
                                                <ul class="details-list">
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        Healthcare brand strategy and positioning
                                                    </li>
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        Medical expertise and trust communication
                                                    </li>
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        Patient acquisition and engagement
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-check"></i>
                                                        Reputation management and credibility
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="details-image-item">
                                        <div class="row g-4">
                                            <div class="col-lg-6 col-md-6">
                                                <div class="thumb">
                                                    <img data-speed=".8" src="/assets/img/inner-page/medfirst1.jpeg" alt="img">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="thumb">
                                                    <img data-speed=".8" src="/assets/img/inner-page/medfirst2.jpeg" alt="img">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="left-text mb-4">
                                        <h2>
                                           From Healthcare Strategy To Patient Confidence
                                        </h2>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">01</span>
                                                <h3>Healthcare positioning</h3>
                                                <p>
                                                    We analyzed Nigeria's healthcare market to identify positioning opportunities and develop trust-based messaging strategies.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">02</span>
                                                <h3>Brand development</h3>
                                                <p>
                                                    We created brand identity and communications that communicated medical excellence, care quality, and patient-centered approach.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">03</span>
                                                <h3>Trust building</h3>
                                                <p>
                                                   We developed physician profiles, patient testimonials, and facility showcases that built credibility and confidence.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">04</span>
                                                <h3>Patient acquisition</h3>
                                                <p>
                                                   We executed targeted campaigns that reached potential patients and generated appointment bookings and service inquiries.
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
                                                MedFirst Healthcare successfully established itself as a trusted premium healthcare provider, built strong patient confidence, and achieved measurable growth in patient acquisition and service utilization across multiple medical specialties.
                                            <p class="mb-0">
                                                <strong>Key Achievements:</strong> Achieved 40% increase in patient registrations, established strong healthcare brand recognition, and built trusted reputation among target patient demographics.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <!-- Client Testimonial -->
                                    <div class="client-testimonial mt-5 p-4" style="background: #f8f9fa; border-radius: 8px;">
                                        <blockquote class="mb-3">
                                            <p style="font-style: italic; font-size: 18px; line-height: 1.6; margin: 0;">"LIDA understood that healthcare is fundamentally about trust. They developed brand positioning and communications that properly communicated our medical expertise while building the patient confidence we needed. Their strategic approach delivered measurable patient acquisition and established our reputation in the market."</p>
                                        </blockquote>
                                        <cite style="display: block; margin-top: 15px;">
                                            <strong>Dr. Adaora N.</strong><br>
                                            <span style="color: #666;">Chief Medical Director, MedFirst Healthcare</span>
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