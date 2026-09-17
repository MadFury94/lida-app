import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSiteContent } from '../store/SiteContent'

export default function Work() {
  const { caseStudies } = useSiteContent()

  useEffect(() => {
    if (window.$ && window.$.fn.counterUp) window.$('.count').counterUp({ delay: 10, time: 1000 })
    if (typeof window.WOW !== 'undefined') {
      new window.WOW({ live: false }).init()
    }
  }, [])

  return (
    <>
      {/* Breadcrumb Section */}
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/inner-page/bread-line.png')" }}
      >
        <div className="light-bg">
          <img src="/assets/img/inner-page/light.png" alt="" />
        </div>
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <h1 className="text-white rr_title_anim">
                <span>Our Creative Works</span> That <br /> Makes You Happy
              </h1>
            </div>
            <div className="breadcrumb-items">
              <ul>
                <li>12+ years of experience</li>
                <li>(©2015 — 2026)</li>
              </ul>
              <h2 className="title wa_title_spilt_1">Our Works</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Project Section */}
      <section className="project-section-5 fix section-padding pt-0">
        <div className="container container-1680">
          <div className="row">
            {caseStudies.map((project, index) => (
              <div 
                key={project.slug} 
                className={`col-xl-6 col-lg-6 col-md-6 wow fadeInUp`} 
                data-wow-delay={`${0.2 * (index + 1)}s`}
              >
                <div className="project-box-items-5">
                  <div className="thumb">
                    <img src={project.image || '/assets/img/inner-page/project-details.jpg'} alt={project.client} />
                    <img src={project.image || '/assets/img/inner-page/project-details.jpg'} alt={project.client} />
                    <Link to={`/work/${project.slug}`} className="arrow-icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                  <div className="content-items">
                    <div className="content">
                      <h2 className="title">
                        <Link to={`/work/${project.slug}`}>{project.client}</Link>
                      </h2>
                      <div className="tag-items">
                        {project.tags && project.tags.slice(0, 2).map((tag, i) => (
                          <Link key={i} to="/work">{tag}</Link>
                        ))}
                      </div>
                    </div>
                    <span className="year-text">[ {project.year || '2026'} ]</span>
                  </div>
                </div>
              </div>
            ))}
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
