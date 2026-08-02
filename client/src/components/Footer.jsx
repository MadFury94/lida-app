import { Link } from 'react-router-dom'
import { brand, contact, services } from '../store/site'

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
                    <img className="brand-logo" src={brand.logo} alt={brand.name} />
                  </Link>
                </div>
                <div className="footer-content">
                  <p style={{fontWeight:600, color:'#fff', marginBottom:'8px'}}>{brand.description}</p>
                  <p style={{marginBottom:'8px'}}>{brand.descriptionLong}</p>
                  <p style={{fontStyle:'italic', color:'var(--theme)', marginBottom:'16px'}}>{brand.descriptionTag}</p>
                  <div className="social-icon d-flex align-items-center">
                    <a href={contact.social.facebook} aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href={contact.social.twitter} aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                    <a href={contact.social.linkedin} aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    <a href={contact.social.instagram} aria-label="Instagram"><i className="fab fa-instagram"></i></a>
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

            {/* Col 3 — Services from store */}
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
          <div className="footer-bottom-wrapper">
            <p className="wow fadeInUp" data-wow-delay=".3s">
              © {new Date().getFullYear()} <b>{brand.name}.</b> All rights reserved.
            </p>
            <ul className="footer-list wow fadeInUp" data-wow-delay=".5s">
              <li><Link to="/privacy-policy">Privacy policy</Link></li>
              <li><span className="dots"></span></li>
              <li><Link to="/terms">Terms &amp; conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
