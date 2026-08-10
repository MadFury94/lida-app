import { useEffect } from 'react'


export default function Contact() {
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
                                    <h1 class="text-white rr_title_anim"><span>Get In Touch  </span> 
                                        With Us For Creative Solutions And Expert Support
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
                                       Contact Us
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Contact Section Start -->
                    <section class="contact-section section-padding fix">
                        <div class="container">
                            <div class="contac-us-wrapper">
                                <div class="row g-4">
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="contact-us-card-item">
                                            <div class="contact-image">
                                                <img src="/assets/img/inner-page/contact-1.jpg" alt="img">
                                            </div>
                                            <div class="contact-content">
                                                <h2>United State</h2>
                                                <span>Phone number:</span>
                                                <h3>
                                                    <a href="tel:+13025550198">+1 302 555-0198</a>
                                                </h3>
                                                <span>Email address:</span>
                                                <h3>
                                                    <a href="mailto:hello.123@orixo.com">hello.123@orixo.com</a>
                                                </h3>
                                                <a href="contact.html" class="thems-btn w-100">Visit site <i class="fa-solid fa-arrow-up-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="contact-us-card-item">
                                            <div class="contact-image">
                                                <img src="/assets/img/inner-page/contact-2.jpg" alt="img">
                                            </div>
                                            <div class="contact-content">
                                                <h2>United Kingdom</h2>
                                                <span>Phone number:</span>
                                                <h3>
                                                    <a href="tel:+442079460958">+44 20 7946 0958</a>
                                                </h3>
                                                <span>Email address:</span>
                                                <h3>
                                                    <a href="mailto:hello.123@orixo.com">hello.456@orixo.com</a>
                                                </h3>
                                                <a href="contact.html" class="thems-btn w-100">Visit site <i class="fa-solid fa-arrow-up-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="contact-us-card-item">
                                            <div class="contact-image">
                                                <img src="/assets/img/inner-page/contact-3.jpg" alt="img">
                                            </div>
                                            <div class="contact-content">
                                                <h2>Denmark</h2>
                                                <span>Phone number:</span>
                                                <h3>
                                                    <a href="tel:+4566132455">+45 66 13 24 55</a>
                                                </h3>
                                                <span>Email address:</span>
                                                <h3>
                                                    <a href="mailto:hello.123@orixo.com">hello.789@orixo.com</a>
                                                </h3>
                                                <a href="contact.html" class="thems-btn w-100">Visit site <i class="fa-solid fa-arrow-up-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Contact-Map Section Start -->
                    <div class="contact-map-section section-padding fix pt-0">
                        <div class="container">
                            <div class="contact-map-wrapper">
                                <div class="row g-4">
                                    <div class="col-lg-6">
                                        <div class="contact-map">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29332256.25226939!2d133.41701195!3d-26.1772288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sbd!4v1775899425045!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                       </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="contact-from-box">
                                            <h2>Contact us</h2>
                                            <form action="contact.php" id="contact-form" class="contact-form-box">
                                                <div class="row g-4 align-items-center">
                                                    <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                                        <div class="form-clt">
                                                            <input type="text" placeholder="Full name *">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                                        <div class="form-clt">
                                                            <input type="text" placeholder="Email address *">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                                        <div class="form-clt">
                                                            <input type="text" placeholder="Phone number *">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                                        <div class="form-clt">
                                                            <div class="form">
                                                                <select class="single-select w-100">
                                                                    <option>Chose a option</option>
                                                                    <option>Digital Marketing</option>
                                                                    <option>Software & IT Service</option>
                                                                    <option>Finance & Investment</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                                                        <div class="form-clt">
                                                            <textarea name="message" placeholder="Type your message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                                                        <button type="submit" class="thems-btn w-100 wow fadeInUp" data-wow-delay=".5s">
                                                            Send message <i class="fa-solid fa-arrow-up-right"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Footer Section Start -->
`}} />
  )
}
