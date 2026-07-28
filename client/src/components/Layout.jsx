import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Preloader from './Preloader'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    // The legacy template normally reveals the page from main.js. In React the
    // load event may have fired before that handler can find the mounted nodes,
    // so make visibility part of the layout lifecycle as well.
    const page = document.getElementById('page')
    page?.classList.add('visible')

    // Re-init all template JS on every page mount/change
    if (typeof window.$ === 'undefined') return undefined

    // WOW animations
    if (typeof window.WOW !== 'undefined') {
      new window.WOW({ live: false }).init()
    }

    // Sticky header scroll
    const onScroll = () => {
      const h = document.getElementById('sticky-header')
      if (h) h.classList.toggle('sticky-menu', window.scrollY > 100)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()

    // Mobile menu bars toggle
    const bars = document.querySelector('.bars')
    const mobileMain = document.querySelector('.mobile-menu-main')
    const mobileOverlay = document.querySelector('.mobile-menu-overlay')
    const closeMobile = document.querySelector('.close-mobile-menu')

    if (bars && mobileMain) {
      bars.onclick = () => {
        mobileMain.classList.add('mobile-menu-open')
        mobileOverlay?.classList.add('active')
      }
    }
    if (closeMobile && mobileMain) {
      closeMobile.onclick = () => {
        mobileMain.classList.remove('mobile-menu-open')
        mobileOverlay?.classList.remove('active')
      }
    }
    if (mobileOverlay && mobileMain) {
      mobileOverlay.onclick = () => {
        mobileMain.classList.remove('mobile-menu-open')
        mobileOverlay.classList.remove('active')
      }
    }

    // Offcanvas sidebar
    const offcanvasBtn = document.querySelector('.offcanvas-btn')
    const offcanvasMenu = document.querySelector('.offcanvas-menu')
    const offcanvasOverlay = document.querySelector('.offcanvas-overlay')
    const offcanvasClose = document.querySelector('.offcasvas-close')

    if (offcanvasBtn && offcanvasMenu) {
      offcanvasBtn.onclick = () => {
        offcanvasMenu.classList.add('active')
        offcanvasOverlay?.classList.add('active')
      }
    }
    if (offcanvasClose && offcanvasMenu) {
      offcanvasClose.onclick = () => {
        offcanvasMenu.classList.remove('active')
        offcanvasOverlay?.classList.remove('active')
      }
    }
    if (offcanvasOverlay && offcanvasMenu) {
      offcanvasOverlay.onclick = () => {
        offcanvasMenu.classList.remove('active')
        offcanvasOverlay.classList.remove('active')
      }
    }

    // Search popup
    const searchTogglers = document.querySelectorAll('.search-toggler')
    const searchPopup = document.querySelector('.search-popup')
    searchTogglers.forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault()
        searchPopup?.classList.toggle('active')
      }
    })

    // Sub-menu mobile accordion
    document.querySelectorAll('.sub-mobile-menu > a').forEach(link => {
      link.onclick = (e) => {
        e.preventDefault()
        link.parentElement.classList.toggle('open')
      }
    })

    // FAQ / service accordion
    document.querySelectorAll('.accordion .acc-btn').forEach(btn => {
      btn.onclick = () => {
        const block = btn.closest('.accordion')
        const allBlocks = block.closest('ul')?.querySelectorAll('.accordion') || []
        allBlocks.forEach(b => {
          b.classList.remove('active-block')
          b.querySelector('.acc-content')?.classList.remove('current')
          b.querySelector('.acc-btn')?.classList.remove('active')
        })
        block.classList.add('active-block')
        block.querySelector('.acc-content')?.classList.add('current')
        btn.classList.add('active')
      }
    })

    // Service accordion
    document.querySelectorAll('.service-list-wrap .service-acc-btn').forEach(btn => {
      btn.onclick = () => {
        const wrap = btn.closest('.service-list-wrap')
        const allWraps = wrap.closest('.service-box-style')?.querySelectorAll('.service-list-wrap') || []
        allWraps.forEach(w => {
          w.classList.remove('active-block')
          w.querySelector('.service-acc-content')?.classList.remove('current')
          w.querySelector('.service-acc-btn')?.classList.remove('active')
        })
        wrap.classList.add('active-block')
        wrap.querySelector('.service-acc-content')?.classList.add('current')
        btn.classList.add('active')
      }
    })

    // Counter up
    if (window.$ && window.$.fn.counterUp) {
      window.$('.count').counterUp({ delay: 10, time: 1000 })
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      bars && (bars.onclick = null)
      closeMobile && (closeMobile.onclick = null)
      mobileOverlay && (mobileOverlay.onclick = null)
      offcanvasBtn && (offcanvasBtn.onclick = null)
      offcanvasClose && (offcanvasClose.onclick = null)
      offcanvasOverlay && (offcanvasOverlay.onclick = null)
    }
  }, [location.pathname])

  return (
    <div className="page-wrapper">
      <Preloader />
      <div id="page">
        <div className="global-header">
          <Header />
        </div>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <Outlet />
            </main>
            <div className="global-footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
