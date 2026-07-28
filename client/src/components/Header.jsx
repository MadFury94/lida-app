import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Our Work', to: '/work' },
  { label: 'Team', to: '/team' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header" id="sticky-header">
      <div className="site-header__inner">
        <Link className="site-header__logo" to="/" onClick={closeMenu}>
          <img src="/assets/img/logo/white-logo.svg" alt="Lida Digital" />
        </Link>

        <nav className="site-header__desktop" aria-label="Main navigation">
          {navigation.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => isActive ? 'active' : undefined}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link className="site-header__cta" to="/contact">
          Let's Talk <i className="fa-solid fa-arrow-up-right" />
        </Link>

        <button
          className="site-header__toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(open => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`site-header__mobile${menuOpen ? ' is-open' : ''}`}
        aria-label="Mobile navigation"
      >
        {navigation.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => isActive ? 'active' : undefined}
            onClick={closeMenu}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
