import { useEffect } from 'react'

export default function WorkDetailFMCG() {
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
                                    <h1 class="text-white rr_title_anim"><span>Launching Consumer Brand</span> 
                                        In Nigeria's Competitive FMCG Market
                                    </h1>
                                </div>
                                <div class="breadcrumb-items">
                                    <ul>
                                        <li>
                                          Brand Launch, Consumer Engagement & Retail Strategy
                                        </li>
                                        <li>
                                            (FMCG/Consumer Goods | 2024)
                                        </li>
                                    </ul>
                                    <h2 class="title wa_title_spilt_1">
                                       FreshBest Foods
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Project Section Start -->
                    <section class="project-details-section fix section-padding">
                        <div class="container">
                            <div class="details-thumbs fix">
                                <img data-speed=".8" src="/assets/img/inner-page/FreshBest Foods - Lida FMCG Launch Service.jpeg" alt="img">
                            </div>
                        </div>
                        <div class="container container-1680">
                            <div class="project-details-wrapper">
                                <div class="project-details-top-item">
                                    <div class="top-content">
                                        <h2>
                                           Building Consumer Brand Recognition In Nigeria's FMCG Market
                                        </h2>
                                        <p>
                                           FreshBest Foods needed to launch their premium food products in Nigeria's highly competitive FMCG market. The challenge was building brand awareness, establishing retail presence, and generating consumer trial and repeat purchase in a market dominated by established brands.</p>
                                    </div>
                                    <div class="project-details-info-item">
                                        <div class="content">
                                            <span>Client:</span>
                                            <p>FreshBest Foods</p>
                                        </div>
                                        <div class="content">
                                            <span>Services:</span>
                                            <p>Brand Launch, Consumer Marketing, Retail Strategy</p>
                                        </div>
                                        <div class="content">
                                            <span>Industry:
</span>
                                            <p> FMCG/Consumer Goods</p>
                                        </div>
                                        <div class="content style-2">
                                            <span>Date:</span>
                                            <p>2024</p>
                                        </div>
                                    </div>
                                    <div class="project-details-image">
                                        <img data-speed=".8" src="/assets/img/inner-page/FreshBest Foods - Lida FMCG Launch Service-15.jpeg" alt="img">
                                    </div>
                                    <div class="row g-4">
                                        <div class="col-lg-7">
                                            <div class="left-text">
                                                <h2>
                                                    From Product Quality To Market Success
                                                </h2>
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="details-content">
                                                <p>
Nigeria's FMCG market is one of Africa's most competitive, with consumers who have strong brand loyalties and retailers who demand proven sales performance. New brands must build awareness quickly while demonstrating consumer appeal and commercial viability.
                                                </p>
                                                <p>
                                              Lida developed comprehensive launch strategy that included brand positioning, consumer marketing campaigns, retail engagement, and trade support that established FreshBest Foods as a credible alternative to established brands while generating measurable market traction.
                                                </p>
                                                <ul class="details-list">
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        Consumer brand launch strategy
                                                    </li>
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        Retail engagement and trade support
                                                    </li>
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        Consumer marketing and trial campaigns
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-check"></i>
                                                        Sales performance and market tracking
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="details-image-item">
                                        <div class="row g-4">
                                            <div class="col-lg-6 col-md-6">
                                                <div class="thumb">
                                                    <img data-speed=".8" src="/assets/img/inner-page/freshbest1.jpeg" alt="img">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="thumb">
                                                    <img data-speed=".8" src="/assets/img/inner-page/freshbest2.jpeg" alt="img">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="left-text mb-4">
                                        <h2>
                                           From Market Entry To Consumer Recognition
                                        </h2>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">01</span>
                                                <h3>Market strategy</h3>
                                                <p>
                                                    We analyzed Nigeria's FMCG market to identify positioning opportunities and develop consumer-focused launch strategies.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">02</span>
                                                <h3>Brand development</h3>
                                                <p>
                                                    We created brand identity, packaging, and messaging that appealed to target consumers and differentiated from competitors.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">03</span>
                                                <h3>Launch execution</h3>
                                                <p>
                                                   We executed integrated launch campaigns including consumer marketing, retail support, and trade engagement across key markets.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">04</span>
                                                <h3>Performance tracking</h3>
                                                <p>
                                                   We monitored sales performance, consumer response, and market penetration to optimize campaigns and scale successful approaches.
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
                                                FreshBest Foods successfully launched in Nigeria's competitive FMCG market, achieved strong retail adoption, built consumer brand recognition, and generated measurable sales growth across multiple product categories and geographic markets.
                                            <p class="mb-0">
                                                <strong>Key Achievements:</strong> Achieved 60% retail listing success in target markets, generated 25% consumer trial rate, and established strong brand presence in competitive FMCG sector.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <!-- Client Testimonial -->
                                    <div class="client-testimonial mt-5 p-4" style="background: #f8f9fa; border-radius: 8px;">
                                        <blockquote class="mb-3">
                                            <p style="font-style: italic; font-size: 18px; line-height: 1.6; margin: 0;">"LIDA understood both the consumer and trade sides of Nigeria's FMCG market. They developed launch strategies that generated retail support while building consumer awareness and trial. Their integrated approach delivered measurable results in our first year and established the foundation for sustained growth."</p>
                                        </blockquote>
                                        <cite style="display: block; margin-top: 15px;">
                                            <strong>Mrs. Kemi Adebayo</strong><br>
                                            <span style="color: #666;">Brand Manager, FreshBest Foods</span>
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