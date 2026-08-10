import { useEffect } from 'react'


export default function WorkDetail() {
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
                                    <h1 class="text-white rr_title_anim"><span>Tasked With Revamping  </span> 
                                        The Branding Design
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
                                       Overview
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Project Section Start -->
                    <section class="project-details-section fix section-padding">
                        <div class="container">
                            <div class="details-thumbs fix">
                                <img data-speed=".8" src="/assets/img/inner-page/project-details-4.jpg" alt="img">
                            </div>
                        </div>
                        <div class="container container-1680">
                            <div class="project-details-wrapper">
                                <div class="project-details-top-item">
                                    <div class="top-content">
                                        <h2>
                                            Mobile app <br> design
                                        </h2>
                                        <p>
                                            This mobile app design project focuses on creating a seamless, user-centric experience that balances visual clarity with functional simplicity that helps users.
                                        </p>
                                    </div>
                                    <div class="project-details-info-item">
                                        <div class="content">
                                            <span>Client:</span>
                                            <p>NovaTech Solutions</p>
                                        </div>
                                        <div class="content">
                                            <span>Services:</span>
                                            <p>UI/UX design</p>
                                        </div>
                                        <div class="content">
                                            <span>Platform:</span>
                                            <p>iOS & android</p>
                                        </div>
                                        <div class="content style-2">
                                            <span>Date:</span>
                                            <p>December 2026</p>
                                        </div>
                                    </div>
                                    <div class="project-details-image">
                                        <img data-speed=".8" src="/assets/img/inner-page/project-details.jpg" alt="img">
                                    </div>
                                    <div class="row g-4">
                                        <div class="col-lg-7">
                                            <div class="left-text">
                                                <h2>
                                                    Designing a Seamless Mobile Experience for Users
                                                </h2>
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="details-content">
                                                <p>
                                                    This mobile app design project was created to deliver an seamless and for engaging digital experience throughs thoughtful user-centered design. The focus was on the transforming complex functionality a simple intuitive interface that feel natural and effortless for users. Every screen was carefully designed to guide use clear through the app while maintaining visual and brand alignment.
                                                </p>
                                                <p>
                                                    This mobile app designed project was created to deliver for seamless and engaging digital experience through thoughtful user centered design. The focus design was transforming complex functionality into a simple.
                                                </p>
                                                <ul class="details-list">
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        Intuitive user experience
                                                    </li>
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        Clean and modern UI design
                                                    </li>
                                                    <li class="border-bottom-0 pb-0">
                                                        <i class="fa-solid fa-check"></i>
                                                        Consistent design system
                                                    </li>
                                                    <li>
                                                        <i class="fa-solid fa-check"></i>
                                                        Smooth navigation flow
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="details-image-item">
                                        <div class="row g-4">
                                            <div class="col-lg-6 col-md-6">
                                                <div class="thumb">
                                                    <img data-speed=".8" src="/assets/img/inner-page/project-details-2.jpg" alt="img">
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6">
                                                <div class="thumb">
                                                    <img data-speed=".8" src="/assets/img/inner-page/project-details-3.jpg" alt="img">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="left-text mb-4">
                                        <h2>
                                            From Research to <br> Final Design.
                                        </h2>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">01</span>
                                                <h3>Research insights</h3>
                                                <p>
                                                    We begin by understanding user needs, behaviors, and pain points through research and analysis.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">02</span>
                                                <h3>Experience mapping</h3>
                                                <p>
                                                    Clear user flows are created to map how users move through the app. This step focuses on simplifying.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">03</span>
                                                <h3>Interface design</h3>
                                                <p>
                                                   The visual interface brings the product to life with clean layouts, strong hierarchy, and consistent design.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-4 col-md-6">
                                            <div class="details-box">
                                                <span class="number">04</span>
                                                <h3>Design testing</h3>
                                                <p>
                                                   The visual interface brings the product to life with clean layouts, strong hierarchy, and consistent design.
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
                                                The final mobile app design delivers a modern, responsive, and visually appealing interface that enhances user engagement and improves overall usability. The design is flexible, scalable, and ready for development implementation. This mobile app design project was created to deliver an seamless.
                                            </p>
                                            <p class="mb-0">
                                                The final mobile app design delivers a modern, responsive, and visually appealing interface that enhances user engagement and improves.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="slider-button d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center gap-xxl-4 gap-3 gap-2">
                                                <button class="cmn-prev cmn-border d-center">
                                                <i class="fas fa-chevron-left"></i>
                                                </button>
                                                <span class="previus-text text-capitalize">
                                                Preview
                                                </span>
                                            </div>
                                            <div class="icon-gird">
                                                <img src="/assets/img/inner-page/icon/grid.svg" alt="img">
                                            </div>
                                            <div class="d-flex align-items-center gap-xxl-4 gap-3 gap-2">
                                                <span class="previus-text text-capitalize">
                                                Next
                                                </span>
                                                <button class="cmn-next cmn-border d-center">
                                                <i class="fas fa-chevron-right"></i>
                                                </button>
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
