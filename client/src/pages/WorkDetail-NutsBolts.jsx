import { useEffect } from 'react'

export default function WorkDetailNutsBolts() {
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
                                    <h1 class="text-white rr_title_anim"><span>Transforming Workshop Perception</span> 
                                        Into Premium Automotive Service
                                    </h1>
                                </div>
                                <div class="breadcrumb-items">
                                    <ul>
                                        <li>
                                          Brand Repositioning & Premium Transformation
                                        </li>
                                        <li>
                                            (Automotive | 2024)
                                        </li>
                                    </ul>
                                    <h2 class="title wa_title_spilt_1">
                                       Nuts & Bolts Automotive
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Project Section Start -->
                    <section class="project-details-section fix section-padding">
                        <div class="container">
                            <div class="details-thumbs fix">
                                <img data-speed=".8" src="/assets/img/inner-page/Nuts and Bolts - Lida Nigeria Brand Repositioning Service.jpeg" alt="img">
                            </div>
                        </div>
                        <div class="container container-1680">
                            <div class="project-details-wrapper">
                                <div class="project-details-top-item">
                                    <div class="top-content">
                                        <h2>
                                           From Typical Workshop To Premium Automotive Brand
                                        </h2>
                                        <p>
                                           Nuts & Bolts Automotive needed to move beyond the perception of a typical automotive workshop and establish itself as a premium maintenance and vehicle care brand that could command greater trust, attract discerning customers, and justify premium pricing.</p>
                                    </div>
                                    <div class="project-details-info-item">
                                        <div class="content">
                                            <span>Client:</span>
                                            <p>Nuts & Bolts Automotive</p>
                                        </div>
                                        <div class="content">
                                            <span>Services:</span>
                                            <p>Brand Repositioning, Photography, Marketing Materials</p>
                                        </div>
                                        <div class="content">
                                            <span>Industry:
</span>
                                            <p> Automotive Services</p>
                                        </div>
                                        <div class="content style-2">
                                            <span>Date:</span>
                                            <p>2024</p>
                                        </div>
                                    </div>
                                    <div class="project-details-image">
                                        <img data-speed=".8" src="/assets/img/inner-page/Nuts and Bolts - Lida Nigeria Brand Repositioning Service-15.jpeg" alt="img">
                                    </div>
                                    <div class="row g-4">
                                        <div class="col-lg-7">
                                            <div class="left-text">
                                                <h2>
                                                    Building Premium Positioning In Automotive Services
                                                </h2>
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="details-content">
                                                <p>
The automotive service industry in Nigeria is crowded with workshops that compete primarily on price. Nuts & Bolts had the expertise and quality to differentiate itself, but their brand presentation did not reflect the premium service they provided.
                                                </p>
                                                <p>
                                              Lida developed a comprehensive repositioning strategy that included new brand identity, professional industrial photography, premium marketing materials, and customer-facing assets that communicated quality, expertise, and professionalism at every touchpoint.
                                                </p>
                                                <ul class="details-list">
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        Premium brand repositioning strategy
                                                    </li>
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        Professional industrial photography
                                                    </li>
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        High-quality marketing materials
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-check"></i>
                                                        Staff branding and uniforms
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="details-image-item">
                                        <div class="row g-4">
                                            <div class="col-lg-6 col-md-6">
                                                <div class="thumb">
                                                    <img data-speed=".8" src="/assets/img/inner-page/nutsbolts1.jpeg" alt="img">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="thumb">
                                                    <img data-speed=".8" src="/assets/img/inner-page/nutsbolts2.jpeg" alt="img">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="left-text mb-4">
                                        <h2>
                                           From Market Analysis To Premium Brand Transformation
                                        </h2>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">01</span>
                                                <h3>Market positioning</h3>
                                                <p>
                                                    We analyzed the automotive service market to identify premium positioning opportunities and differentiation strategies.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">02</span>
                                                <h3>Brand transformation</h3>
                                                <p>
                                                    We developed new brand identity and messaging that communicates premium service quality and professional expertise.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">03</span>
                                                <h3>Visual assets</h3>
                                                <p>
                                                   We created professional photography and marketing materials that showcase the quality and professionalism of the service.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">04</span>
                                                <h3>Implementation</h3>
                                                <p>
                                                   We implemented the new brand across all touchpoints including signage, uniforms, and customer communication materials.
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
                                                The repositioning successfully transformed Nuts & Bolts Automotive from a typical workshop into a premium automotive service provider, enabling the business to attract quality-focused customers and command premium pricing.
                                            <p class="mb-0">
                                                <strong>Key Achievements:</strong> Established premium market position, improved customer perception, and created strong visual foundation for sustained business growth.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <!-- Client Testimonial -->
                                    <div class="client-testimonial mt-5 p-4" style="background: #f8f9fa; border-radius: 8px;">
                                        <blockquote class="mb-3">
                                            <p style="font-style: italic; font-size: 18px; line-height: 1.6; margin: 0;">"Our engagement with LIDA transformed the way our business is perceived. They helped us build a stronger brand identity, improve how we communicate our value, and position the business with greater credibility. Their strategic thinking and attention to detail made a measurable difference in how we present ourselves to customers and partners."</p>
                                        </blockquote>
                                        <cite style="display: block; margin-top: 15px;">
                                            <strong>M. Bari</strong><br>
                                            <span style="color: #666;">Managing Director, Nuts & Bolts Automotive</span>
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