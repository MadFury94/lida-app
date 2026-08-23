import { useState, useEffect } from 'react'
import { brand, contact } from '../store/site'

const SERVICES_OPTIONS = [
  'Growth Strategy',
  'Brand Strategy & Identity',
  'Customer Acquisition & Performance Marketing',
  'Customer Adoption & Experience',
  'Reputation & Strategic Communications',
  'Executive & Corporate Positioning',
  'Content & Creative Production',
  'Digital Presence & Experience',
  'Events & Brand Experiences',
  'Market Entry & Expansion',
  'General Enquiry',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  useEffect(() => {
    if (typeof window.WOW !== 'undefined') new window.WOW({ live: false }).init()
  }, [])

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Breadcrumb */}
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/inner-page/bread-line.png')" }}
      >
        <div className="light-bg">
          <img src="/assets/img/inner-page/light.png" alt="" />
        </div>
        <div className="container">
          <div className="page-heading mb-0">
            <div className="breadcrumb-sub-title">
              <h1 className="text-white rr_title_anim">
                <span>Let's Start a Conversation</span> About Your Growth.
              </h1>
            </div>
            <div className="breadcrumb-items">
              <ul>
                <li>{contact.address}</li>
                <li>{contact.email}</li>
              </ul>
              <h2 className="title wa_title_spilt_1">Contact Us</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Contact info cards */}
      <section className="contact-section section-padding fix">
        <div className="container">
          <div className="contac-us-wrapper">
            <div className="row g-4 justify-content-center">

              <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="contact-us-card-item">
                  <div className="contact-image">
                    <img src="/assets/img/inner-page/contact-1.jpg" alt="Talk to us" />
                  </div>
                  <div className="contact-content">
                    <h2>Talk to Us</h2>
                    <span>Phone number:</span>
                    <h3><a href={contact.phoneHref}>{contact.phone}</a></h3>
                    <span>Email address:</span>
                    <h3><a href={`mailto:${contact.email}`}>{contact.email}</a></h3>
                    <a href={contact.calendly} target="_blank" rel="noreferrer" className="thems-btn w-100">
                      Book a Call <i className="fa-solid fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="contact-us-card-item">
                  <div className="contact-image">
                    <img src="/assets/img/inner-page/contact-2.jpg" alt="Visit us" />
                  </div>
                  <div className="contact-content">
                    <h2>Our Location</h2>
                    <span>Address:</span>
                    <h3>{contact.addressFull}</h3>
                    <span>Office hours:</span>
                    <h3>{contact.officeHours}</h3>
                    <a
                      href={contact.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="thems-btn w-100"
                    >
                      Get Directions <i className="fa-solid fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                <div className="contact-us-card-item">
                  <div className="contact-image">
                    <img src="/assets/img/inner-page/contact-3.jpg" alt="Schedule a meeting" />
                  </div>
                  <div className="contact-content">
                    <h2>Schedule a Meeting</h2>
                    <span>Book directly:</span>
                    <h3>
                      <a href={contact.calendly} target="_blank" rel="noreferrer">
                        {contact.calendlyDisplay}
                      </a>
                    </h3>
                    <span>General enquiries:</span>
                    <h3><a href={`mailto:${contact.email}`}>{contact.email}</a></h3>
                    <a
                      href={contact.calendly}
                      target="_blank"
                      rel="noreferrer"
                      className="thems-btn w-100"
                    >
                      Schedule Now <i className="fa-solid fa-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <div className="contact-map-section section-padding fix pt-0">
        <div className="container">
          <div className="contact-map-wrapper">
            <div className="row g-4">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="contact-map">
                  <iframe
                    src={contact.mapEmbed}
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lida Digital location — Abuja, Nigeria"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                <div className="contact-from-box">
                  <h2>Send us a message</h2>
                  <form className="contact-form-box" onSubmit={handleSubmit} noValidate>
                    <div className="row g-4 align-items-center">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            placeholder="Full name *"
                            value={form.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-clt">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email address *"
                            value={form.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-clt">
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone number"
                            value={form.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-clt">
                          <select
                            name="service"
                            className="single-select w-100"
                            value={form.service}
                            onChange={handleChange}
                          >
                            <option value="">I'm interested in…</option>
                            {SERVICES_OPTIONS.map(s => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <textarea
                            name="message"
                            placeholder="Tell us about your project or challenge *"
                            value={form.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        {status === 'success' && (
                          <p className="form-success-msg" style={{ color: 'var(--theme)', marginBottom: '1rem' }}>
                            Message sent. We'll be in touch shortly.
                          </p>
                        )}
                        {status === 'error' && (
                          <p className="form-error-msg" style={{ color: '#ff4444', marginBottom: '1rem' }}>
                            Something went wrong. Please email us directly at{' '}
                            <a href={`mailto:${contact.email}`}>{contact.email}</a>.
                          </p>
                        )}
                        <button
                          type="submit"
                          className="thems-btn w-100"
                          disabled={status === 'sending'}
                        >
                          {status === 'sending' ? 'Sending…' : 'Send message'}{' '}
                          <i className="fa-solid fa-arrow-up-right"></i>
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
    </>
  )
}
