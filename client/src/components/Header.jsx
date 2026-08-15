import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { brand } from '../store/site'

const services = [
  ['market-entry', 'Market Entry'],
  ['corporate-positioning', 'Corporate Positioning'],
  ['brand-strategy', 'Brand Strategy'],
  ['marketing-growth', 'Marketing & Growth'],
  ['public-relations', 'Public Relations'],
  ['digital-presence', 'Digital Presence'],
].map(([slug, shortTitle]) => ({ slug, shortTitle }))

const contact = {
  email: 'hello@lidadigital.com.ng',
  phone: '+234-807-436-3918',
  phoneHref: 'tel:+2348074363918',
  social: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' },
}

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const $ = window.$
    if (!$) return

    // Sticky header
    const onScroll = () => {
      const h = document.getElementById('sticky-header')
      if (h) h.classList.toggle('sticky-menu', window.scrollY > 100)
    }
    window.addEventListener('scroll', onScroll)

    // Offcanvas
    const offBtn     = document.querySelector('.offcanvas-btn')
    const offMenu    = document.querySelector('.offcanvas-menu')
    const offOverlay = document.querySelector('.offcanvas-overlay')
    const offClose   = document.querySelector('.offcasvas-close')
    const openOff  = () => { offMenu?.classList.add('active');    offOverlay?.classList.add('active') }
    const closeOff = () => { offMenu?.classList.remove('active'); offOverlay?.classList.remove('active') }
    offBtn?.addEventListener('click', openOff)
    offClose?.addEventListener('click', closeOff)
    offOverlay?.addEventListener('click', closeOff)

    // Mobile menu
    const bars       = document.querySelector('.bars')
    const mobileMain = document.querySelector('.mobile-menu-main')
    const mobileOver = document.querySelector('.mobile-menu-overlay')
    const mobileClose = document.querySelector('.close-mobile-menu')
    const openMob  = () => { mobileMain?.classList.add('active');    mobileOver?.classList.add('active') }
    const closeMob = () => { mobileMain?.classList.remove('active'); mobileOver?.classList.remove('active') }
    bars?.addEventListener('click', openMob)
    mobileClose?.addEventListener('click', closeMob)
    mobileOver?.addEventListener('click', closeMob)

    // Mobile sub-menu accordion
    document.querySelectorAll('.sub-mobile-menu > a').forEach(a => {
      a.addEventListener('click', e => { e.preventDefault(); a.closest('li').classList.toggle('open') })
    })

    // Search popup
    const searchPopup = document.querySelector('.search-popup')
    document.querySelectorAll('.search-toggler').forEach(btn => {
      btn.addEventListener('click', e => { e.preventDefault(); searchPopup?.classList.toggle('active') })
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      offBtn?.removeEventListener('click', openOff)
      offClose?.removeEventListener('click', closeOff)
      offOverlay?.removeEventListener('click', closeOff)
      bars?.removeEventListener('click', openMob)
      mobileClose?.removeEventListener('click', closeMob)
      mobileOver?.removeEventListener('click', closeMob)
    }
  }, [location.pathname])

  const navCls = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`

  return (
    <>
      <style>{`
        .site-nav-desktop { display: flex !important; }
        .site-nav-desktop .navbar-collapse { display: flex !important; flex: 1; align-items: center; }
        .brand-logo { display: block; width: 164px; height: auto; }
        .brand-logo--dark { filter: brightness(0); }
        .offcanvas-menu .brand-logo,
        .mobile-menu-main .brand-logo { width: 150px; }
        @media (max-width: 1199px) { .site-nav-desktop { display: none !important; } #mobile-menu-area { display: block !important; } }
        @media (max-width: 575px) { .brand-logo { width: 138px; } }
      `}</style>
      <header
        className={`header-section ${isHome ? 'header-1' : 'header-3'}`}
        id="sticky-header"
      >
        <div className="header-main">
          {/* â”€â”€ DESKTOP NAV â”€â”€ */}
          <nav className="navbar p-0 navbar-expand-xl site-nav-desktop" style={{display:'flex'}}>
            <Link className="navbar-brand" to="/">
              <img className="brand-logo" src={brand.logo} alt="Lida Digital" />
            </Link>

            <div style={{display:'flex', flex:1, alignItems:'center'}} id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-lg-0">

                <li className="nav-item">
                  <NavLink className={navCls} to="/">Home</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className={navCls} to="/about">About Us</NavLink>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={e => e.preventDefault()}>
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
                  <a className="nav-link" href="#" onClick={e => e.preventDefault()}>
                    Work <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="sub-menu list-unstyled">
                    <li><Link to="/work">Case Studies</Link></li>
                    <li><Link to="/team">Our Team</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <NavLink className={navCls} to="/faq">FAQ</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className={navCls} to="/contact">Contact</NavLink>
                </li>

              </ul>

              <div className={isHome ? 'menu-right-info' : 'header-right'}>
                <a href="#" className="main-header__search search-toggler">
                  <i className="fa-regular fa-magnifying-glass"></i>
                </a>
                {!isHome && (
                  <Link className="theme-btn-main style-2 bg-white-style" to="/contact">
                    <span className="theme-btn-arrow-left"><i className="fa-solid fa-arrow-up-right"></i></span>
                    <span className="theme-btn">Let's Talk</span>
                    <span className="theme-btn-arrow-right"><i className="fa-solid fa-arrow-up-right"></i></span>
                  </Link>
                )}
                <div className="sidebar__toggle offcanvas-btn">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* â”€â”€ OFFCANVAS â”€â”€ */}
        <div className="offcanvas-overlay position-fixed top-0 start-0 w-100 h-100"></div>
        <div className="offcanvas-menu position-fixed">
          <div className="header-top d-flex align-items-center justify-content-between gap-4">
            <div className="logo">
              <Link to="/"><img className="brand-logo" src={brand.logo} alt="Lida Digital" /></Link>
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
            <img className="gallery_img" src="/assets/img/header/offcanvas1.jpg" alt="" />
            <img className="gallery_img" src="/assets/img/header/offcanvas2.jpg" alt="" />
            <img className="gallery_img" src="/assets/img/header/offcanvas3.jpg" alt="" />
            <img className="gallery_img" src="/assets/img/header/offcanvas4.jpg" alt="" />
          </div>
          <div className="off-contact-info">
            <span className="info-title">Contact Info</span>
            <div className="contact-details">
              <span className="sub-info">Phone</span>
              <p><a href={contact.phoneHref}>{contact.phone}</a></p>
            </div>
            <div className="contact-details">
              <span className="sub-info">Email</span>
              <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            </div>
            <div className="contact-details">
              <span className="sub-info">Location</span>
              <p>Abuja, Nigeria</p>
            </div>
          </div>
          <div className="social-icon-list">
            <span className="follow-title">Follow us:</span>
            <div className="social-icon d-flex align-items-center">
              <a href={contact.social.facebook}><i className="fab fa-facebook-f"></i></a>
              <a href={contact.social.twitter}><i className="fab fa-twitter"></i></a>
              <a href={contact.social.linkedin}><i className="fab fa-linkedin-in"></i></a>
              <a href={contact.social.instagram}><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* â”€â”€ MOBILE MENU â”€â”€ */}
        <div className="mobile-menu-area" style={{display: 'none'}} id="mobile-menu-area">
          <div className="container">
            <div className="mobile-topbar">
              <div className="d-flex justify-content-between align-items-center">
                <div className="logo">
                  <Link to="/"><img className="brand-logo" src={brand.logo} alt="Lida Digital" /></Link>
                </div>
                <div className="menu-search d-flex align-items-center gap-4">
                  <a href="#" className="main-header__search search-toggler">
                    <i className="fa-regular fa-magnifying-glass"></i>
                  </a>
                  <div className="bars">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-menu-overlay"></div>
          <div className="mobile-menu-main">
            <div className="logo">
              <Link to="/"><img className="brand-logo brand-logo--dark" src={brand.logo} alt="Lida Digital" /></Link>
            </div>
            <div className="close-mobile-menu"><i className="fas fa-times"></i></div>
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
                      <li><Link to="/careers">Careers</Link></li>
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
                  <p><a href={contact.phoneHref}>{contact.phone}</a></p>
                </div>
                <div className="contact-details">
                  <span className="sub-info">Email</span>
                  <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                </div>
                <div className="contact-details">
                  <span className="sub-info">Location</span>
                  <p>Abuja, Nigeria</p>
                </div>
              </div>
              <div className="social-icon-list">
                <span className="follow-title">Follow us:</span>
                <div className="social-icon d-flex align-items-center">
                  <a href={contact.social.facebook}><i className="fab fa-facebook-f"></i></a>
                  <a href={contact.social.twitter}><i className="fab fa-twitter"></i></a>
                  <a href={contact.social.linkedin}><i className="fab fa-linkedin-in"></i></a>
                  <a href={contact.social.instagram}><i className="fab fa-instagram"></i></a>
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


