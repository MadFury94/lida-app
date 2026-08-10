import { useEffect } from 'react'


export default function NotFound() {
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
                                    <h1 class="text-white rr_title_anim"><span>We’re Sorry</span> This Page Could Not Be Found
                                    </h1>
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
                                       Error 404
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                  <!-- Error Section Start -->
                    <section class="error-section-4 section-padding fix">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-6">
                                    <div class="error-items">
                                        <div class="error-image">
                                            <img src="/assets/img/inner-page/404.png" alt="img">
                                        </div>
                                        <h2>Page not found</h2>
                                        <p>
                                            The resource you are looking for doesn't exist or might have been removed.
                                        </p>
                                        <a class="theme-btn-main style-2 mt-4 wow fadeInUp" data-wow-delay=".3s" href="index.html">
                                            <span class="theme-btn-arrow-left"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                            <span class="theme-btn">Back to home page</span>
                                            <span class="theme-btn-arrow-right"> <i class="fa-solid fa-arrow-up-right"></i> </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Footer Section Start -->
`}} />
  )
}
