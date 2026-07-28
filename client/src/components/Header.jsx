import { Link, NavLink } from 'react-router-dom'
import { services } from '../store/site'

export default function Header() {
  return (
    <>
      <header className="header-section header-1" id="sticky-header">
        <div className="header-main">
          {/* DESKTOP NAVBAR */}
          <nav className="navbar p-0 navbar-expand-xl d-none d-xl-flex">
            <Link className="navbar-brand" to="/">
              <img src="/assets/img/logo/white-logo.svg" alt="Lida Digital" />
            </Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About Us</NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="sub-menu list-unstyled">
                    <li><Link to="/services">All Services</Link></li>
                    {services.map(s => (
                      <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.shortTitle}</Link></li>
                    ))}
                  </ul>
                </li>
                <li className="has-dropdown nav-item">
                  <a className="nav-link" href="#">
                    Work <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="sub-menu list-unstyled">
                    <li><Link to="/work">Case Studies</Link></li>
                    <li><Link to="/team">Our Team</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/faq">FAQ</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
              </ul>

              <div className="menu-right-info">
                <a href="#" className="main-header__search search-toggler">
                  <i className="fa-regular fa-magnifying-glass"></i>
                </a>
                <div className="sidebar__toggle offcanvas-btn">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* OFFCANVAS SIDEBAR */}
        <div className="offcanvas-overlay position-fixed top-0 start-0 w-100 h-100"></div>
        <div className="offcanvas-menu position-fixed">
          <div className="header-top d-flex align-items-center justify-content-between gap-4">
            <div className="logo">
              <Link to="/">
                <img src="/assets/img/logo/white-logo.svg" alt="Lida Digital" />
              </Link>
            </div>
            <button className="offcasvas-close black-bg border-0 text-white d-flex align-items-center justify-content-center rounded-pill">
              <i className="fa-regular fa-xmark"></i>
            </button>
          </div>
          <span className="action-title">Happy You're Here</span>
          <Link to="/contact" className="news-btn">
            <span className="text">
              <span className="text-default">Know more about us <i className="fa-regular fa-arrow-up-right"></i></span>
              <span className="text-hover">Know more about us <i className="fa-regular fa-arrow-up-right"></i></span>
            </span>
          </Link>
          <div className="offcanvas_gallery d-none d-lg-block">
            <img className="gallery_img" src="/assets/img/header/offcanvas1.jpg" alt="gallery" />
            <img className="gallery_img" src="/assets/img/header/offcanvas2.jpg" alt="gallery" />
            <img className="gallery_img" src="/assets/img/header/offcanvas3.jpg" alt="gallery" />
            <img className="gallery_img" src="/assets/img/header/offcanvas4.jpg" alt="gallery" />
          </div>
          <div className="off-contact-info">
            <span className="info-title">Contact Info</span>
            <div className="contact-details">
              <span className="sub-info">Phone</span>
              <p><a href="tel:+2348074363918">+234-807-436-3918</a></p>
            </div>
            <div className="contact-details">
              <span className="sub-info">Email</span>
              <p><a href="mailto:hello@lidadigital.com.ng">hello@lidadigital.com.ng</a></p>
            </div>
            <div className="contact-details">
              <span className="sub-info">Location</span>
              <p>Abuja, Nigeria</p>
            </div>
          </div>
          <div className="social-icon-list">
            <span className="follow-title">Follow us:</span>
            <div className="social-icon d-flex align-items-center">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className="mobile-menu-area d-block d-xl-none">
          <div className="container">
            <div className="mobile-topbar">
              <div className="d-flex justify-content-between align-items-center">
                <div className="logo">
                  <Link to="/">
                    <img src="/assets/img/logo/white-logo.svg" alt="Lida Digital" />
                  </Link>
                </div>
                <div className="menu-search d-flex align-items-center gap-4">
                  <a href="#" className="main-header__search search-toggler">
                    <i className="fa-regular fa-magnifying-glass"></i>
                  </a>
                  <div className="bars">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-menu-overlay"></div>

          <div className="mobile-menu-main">
            <div className="logo">
              <Link to="/">
                <img src="/assets/img/logo/white-logo.svg" alt="Lida Digital" />
              </Link>
            </div>
            <div className="close-mobile-menu">
              <i className="fas fa-times"></i>
            </div>
            <div className="menu-body">
              <div className="menu-list">
                <ul className="list-unstyled">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li className="sub-mobile-menu">
                    <a href="#">Services <i className="fas fa-chevron-down float-end"></i></a>
                    <ul className="list-unstyled">
                      <li><Link to="/services">All Services</Link></li>
                      {services.map(s => (
                        <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.shortTitle}</Link></li>
                      ))}
                    </ul>
                  </li>
                  <li className="sub-mobile-menu">
                    <a href="#">Work <i className="fas fa-chevron-down float-end"></i></a>
                    <ul className="list-unstyled">
                      <li><Link to="/work">Case Studies</Link></li>
                      <li><Link to="/team">Our Team</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/faq">FAQ</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="off-contact-area">
              <div className="off-contact-info">
                <span className="info-title">Contact Info</span>
                <div className="contact-details">
                  <span className="sub-info">Phone</span>
                  <p><a href="tel:+2348074363918">+234-807-436-3918</a></p>
                </div>
                <div className="contact-details">
                  <span className="sub-info">Email</span>
                  <p><a href="mailto:hello@lidadigital.com.ng">hello@lidadigital.com.ng</a></p>
                </div>
                <div className="contact-details">
                  <span className="sub-info">Location</span>
                  <p>Abuja, Nigeria</p>
                </div>
              </div>
              <div className="social-icon-list">
                <span className="follow-title">Follow us:</span>
                <div className="social-icon d-flex align-items-center">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Popup */}
      <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>
        <div className="search-popup__content">
          <form role="search" className="search-popup__form">
            <input type="text" name="search" placeholder="Search Here..." />
            <button type="submit" aria-label="search submit" className="search-btn">
              <span><i className="fa-regular fa-magnifying-glass"></i></span>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
