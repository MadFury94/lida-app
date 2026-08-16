import { Link } from 'react-router-dom'
import { brand, services, contact } from '../store/site'

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-widget-wrapper">
          <div className="row justify-content-between">

            {/* Col 1 — Logo + description + social */}
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".2s">
              <div className="footer-widget-items">
                <div className="widget-head">
                  <Link to="/" className="footer-logo">
                    <img className="brand-logo" src={brand.logo} alt="Lida Nigeria" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p style={{marginBottom:'8px'}}>LIDA partners with ambitious organizations to solve growth challenges through commercial strategy, brand positioning, customer acquisition, strategic communications, AI enabled solutions, and measurable execution.</p>
                  <div className="social-icon d-flex align-items-center">
                    <a href={contact.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href={contact.social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter/X"><i className="fab fa-twitter"></i></a>
                    <a href={contact.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    <a href={contact.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 2 — Quick links */}
            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="footer-widget-items">
                <div className="widget-head"><span>Quick links</span></div>
                <ul className="gt-list-area">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/work">Case Studies</Link></li>
                  <li><Link to="/team">Our Team</Link></li>
                  <li><Link to="/careers">Careers</Link></li>
                  <li><Link to="/faq">FAQ</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>

            {/* Col 3 — Services */}
            <div className="col-xl-3 ps-lg-0 col-lg-4 col-md-6 col-sm-6 col-6 wow fadeInUp" data-wow-delay=".6s">
              <div className="footer-widget-items">
                <div className="widget-head"><span>Our services</span></div>
                <ul className="gt-list-area">
                  {services.map(s => (
                    <li key={s.slug}>
                      <Link to={`/services/${s.slug}`}>{s.shortTitle}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Col 4 — Newsletter */}
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".8s">
              <div className="footer-widget-items">
                <div className="footer-form-3">
                  <span className="subscribe-text">
                    <span>Subscribe</span> to our <br /> newsletter.
                  </span>
                  <form action="#" onSubmit={e => e.preventDefault()}>
                    <input type="email" placeholder="Enter Email*" />
                    <button className="email-btn" type="submit">
                      <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </form>
                  <label className="sq-checkbox">
                    <input type="checkbox" />
                    <span className="box" aria-hidden="true">
                      <svg viewBox="0 0 24 24" className="check" focusable="false" aria-hidden="true">
                        <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="label-text">Agree our Terms &amp; Condition</span>
                  </label>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom style-bottom-4">
        <div className="container">
          <div className="footer-bottom-wrapper" style={{ justifyContent: 'center' }}>
            <p className="wow fadeInUp text-center" data-wow-delay=".3s">
              © {new Date().getFullYear()} <b>Lida Nigeria.</b> All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
