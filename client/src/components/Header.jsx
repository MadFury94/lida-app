import { useSiteContent } from '../store/useSiteContent'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { brand, contact } from '../store/site'
import './Header.css'

function BrandLogo() {
  return <span className={`site-logo${brand.logo === '/Solution Media Gradient Logo.png' ? ' site-logo-padded' : ''}`}><img className="brand-logo" src={brand.logo} alt="Solutions Media" /></span>
}

export default function Header() {
  const { services } = useSiteContent()
  const location = useLocation()

  useEffect(() => {
    const header = document.getElementById('sticky-header')
    const mobile = header.querySelector('.mobile-menu-main')
    const overlay = header.querySelector('.mobile-menu-overlay')
    const toggle = header.querySelector('.bars')
    const close = header.querySelector('.close-mobile-menu')
    const mobileLinks = [...header.querySelectorAll('.sub-mobile-menu > a')]
    const onScroll = () => header.classList.toggle('sticky-menu', window.scrollY >= 120)
    const closeMenus = () => {
      header.querySelectorAll('.mobile-menu-main, .mobile-menu-overlay, .offcanvas-menu, .offcanvas-overlay').forEach(el => el.classList.remove('active', 'mobile-menu-open'))
      toggle.setAttribute('aria-expanded', 'false')
      document.body.classList.remove('no-scroll')
    }
    const openMobile = () => {
      mobile.classList.add('active')
      overlay.classList.add('active')
      toggle.setAttribute('aria-expanded', 'true')
      document.body.classList.add('no-scroll')
    }
    const onKey = event => {
      if (event.key !== 'Escape') return
      const wasMobileOpen = mobile.classList.contains('active')
      const wasPanelOpen = header.querySelector('.offcanvas-menu').classList.contains('active')
      closeMenus()
      if (wasMobileOpen) toggle.focus()
      else if (wasPanelOpen) header.querySelector('.offcanvas-btn').focus()
    }
    const onLink = event => {
      const link = event.target.closest('a[href]')
      if (link && !link.getAttribute('href').startsWith('#')) closeMenus()
    }
    const onSubmenu = event => {
      event.preventDefault()
      event.stopPropagation()
      const link = event.currentTarget
      const submenu = link.nextElementSibling
      const opening = link.getAttribute('aria-expanded') !== 'true'
      link.setAttribute('aria-expanded', String(opening))
      if (window.$) window.$(submenu).stop(true, true)[opening ? 'slideDown' : 'slideUp'](250)
      else submenu.style.display = opening ? 'block' : 'none'
    }
    // React owns header interactions. Remove template handlers on these buttons
    // so opening/closing or expanding a submenu runs exactly once.
    window.$?.(header).find('.bars, .close-mobile-menu, .mobile-menu-overlay, .offcanvas-btn, .offcanvas-overlay, .offcasvas-close').off('click')
    closeMenus()
    onScroll()
    toggle.addEventListener('click', openMobile)
    close.addEventListener('click', closeMenus)
    overlay.addEventListener('click', closeMenus)
    header.addEventListener('click', onLink)
    mobileLinks.forEach(link => link.addEventListener('click', onSubmenu))
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('keydown', onKey)
    const onResize = () => { if (window.innerWidth >= 1200) closeMenus() }
    window.addEventListener('resize', onResize)
    return () => {
      closeMenus()
      toggle.removeEventListener('click', openMobile)
      close.removeEventListener('click', closeMenus)
      overlay.removeEventListener('click', closeMenus)
      header.removeEventListener('click', onLink)
      mobileLinks.forEach(link => link.removeEventListener('click', onSubmenu))
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('keydown', onKey)
    }
  }, [location.pathname])

  const navCls = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`
  const closeOffcanvas = () => {
    document.querySelector('.offcanvas-menu')?.classList.remove('active')
    document.querySelector('.offcanvas-overlay')?.classList.remove('active')
    document.body.classList.remove('no-scroll')
  }
  const openOffcanvas = () => {
    document.querySelector('.offcanvas-menu')?.classList.add('active')
    document.querySelector('.offcanvas-overlay')?.classList.add('active')
    document.body.classList.add('no-scroll')
  }

  return (
    <>
      <header className="header-section header-3 solution-header" id="sticky-header">
        <div className="header-main">

          {/* ── DESKTOP NAV ── */}
          <nav className="navbar navbar-expand-xl p-0 site-header-nav" aria-label="Main navigation">

            <Link className="navbar-brand" to="/">
              <BrandLogo />
            </Link>

            <ul className="navbar-nav nav-links">

              <li className="nav-item">
                <NavLink className={navCls} to="/">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={navCls} to="/about">About Us</NavLink>
              </li>

              <li className="nav-item has-megamenu">
                <a className="nav-link" href="#" onClick={e => e.preventDefault()}>
                  Services <i className="fas fa-chevron-down"></i>
                </a>
                <div className="services-mega-menu">
                  <div className="mega-menu-inner">
                    <div className="mega-menu-grid">
                      {services.map(s => (
                        <Link key={s.slug} to={`/services/${s.slug}`} className="mega-menu-item">
                          <span className="mega-num">{s.number}</span>
                          <span className="mega-title">{s.shortTitle}</span>
                          <span className="mega-desc">{s.summary}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mega-menu-footer">
                      <Link to="/services" className="mega-all-link">
                        View All Services <i className="fa-regular fa-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
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
                <NavLink className={navCls} to="/insights">Insights</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={navCls} to="/contact">Contact</NavLink>
              </li>

            </ul>

            <div className="header-right">
              <Link className="theme-btn-main style-2 bg-white-style" to="/contact">
                <span className="theme-btn-arrow-left"><i className="fa-solid fa-arrow-up-right"></i></span>
                <span className="theme-btn">Let's Talk</span>
                <span className="theme-btn-arrow-right"><i className="fa-solid fa-arrow-up-right"></i></span>
              </Link>
              <button type="button" className="sidebar__toggle offcanvas-btn" aria-label="Open contact panel" onClick={openOffcanvas}>
                <span></span><span></span><span></span>
              </button>
            </div>

          </nav>
        </div>

        {/* ── OFFCANVAS ── */}
        <div className="offcanvas-overlay position-fixed top-0 start-0 w-100 h-100" onClick={closeOffcanvas}></div>
        <div className="offcanvas-menu position-fixed">
          <div className="header-top d-flex align-items-center justify-content-between gap-4">
            <div className="logo">
              <Link to="/"><BrandLogo /></Link>
            </div>
            <button className="offcasvas-close black-bg border-0 text-white d-flex align-items-center justify-content-center rounded-pill" aria-label="Close contact panel" onClick={closeOffcanvas}>
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
            <img className="gallery_img" src="/assets/img/home-1/solutionexpert3.jpg" alt="" />
            <img className="gallery_img" src="/assets/img/home-1/solutionmedia-expert.png" alt="" />
            <img className="gallery_img" src="/assets/img/home-1/solutionmedia-expert2.jpg" alt="" />
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

        {/* ── MOBILE MENU ── */}
        <div className="mobile-menu-area">
          <div className="container">
            <div className="mobile-topbar">
              <div className="d-flex justify-content-between align-items-center">
                <div className="logo">
                  <Link to="/"><BrandLogo /></Link>
                </div>
                <button type="button" className="bars" aria-label="Open navigation" aria-expanded="false" aria-controls="site-mobile-menu">
                  <span></span><span></span><span></span>
                </button>
              </div>
            </div>
          </div>
          <div className="mobile-menu-overlay"></div>
          <div className="mobile-menu-main" id="site-mobile-menu">
            <div className="logo">
              <Link to="/"><BrandLogo /></Link>
            </div>
            <button type="button" className="close-mobile-menu" aria-label="Close navigation"><i className="fas fa-times"></i></button>
            <div className="menu-body">
              <div className="menu-list">
                <ul className="list-unstyled">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li className="sub-mobile-menu">
                    <a href="#" aria-expanded="false">Services <i className="fas fa-chevron-down float-end"></i></a>
                    <ul className="list-unstyled">
                      <li><Link to="/services">All Services</Link></li>
                      {services.map(s => (
                        <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.shortTitle}</Link></li>
                      ))}
                    </ul>
                  </li>
                  <li className="sub-mobile-menu">
                    <a href="#" aria-expanded="false">Work <i className="fas fa-chevron-down float-end"></i></a>
                    <ul className="list-unstyled">
                      <li><Link to="/work">Case Studies</Link></li>
                      <li><Link to="/team">Our Team</Link></li>
                      <li><Link to="/careers">Careers</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/faq">FAQ</Link></li>
                  <li><Link to="/insights">Insights</Link></li>
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
    </>
  )
}
