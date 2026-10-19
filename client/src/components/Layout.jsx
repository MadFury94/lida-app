import usePageLifecycle from '../hooks/usePageLifecycle'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Preloader from './Preloader'
import ContentBoundary from './ContentBoundary'
import { useSiteContent } from '../store/useSiteContent'

export default function Layout() {
  const location = useLocation()
  const { loading, unavailable } = useSiteContent()
  usePageLifecycle(!loading && !unavailable)

  useEffect(() => {
    // The legacy template normally reveals the page from main.js. In React the
    // load event may have fired before that handler can find the mounted nodes,
    // so make visibility part of the layout lifecycle as well.
    const page = document.getElementById('page')
    page?.classList.add('visible')

    // Re-init all template JS on every page mount/change
    if (typeof window.$ === 'undefined') return undefined


    // Header owns its navigation and panel handlers.

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

    // Home and Services accordions are controlled by React state.
    window.$('.service-box-style').off('click', '.service-acc-btn')

    // Counter up
    if (window.$ && window.$.fn.counterUp) {
      window.$('.count').counterUp(location.pathname === '/' ? { delay: 15, time: 4000 } : { delay: 10, time: 1000 })
    }


  }, [location.pathname, loading, unavailable])

  return (
    <div className="page-wrapper">
      <Preloader />
      <div id="page" className="visible">
        <div className="global-header">
          <Header />
        </div>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main key={location.pathname}>
              <ContentBoundary><Outlet /></ContentBoundary>
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
