import { useEffect } from 'react'

// Orixo index-3 settings from assets/js/main.js. The original ready handler
// cannot initialize content that arrives later through React/the CMS.
export default function useHomeAnimations(rootRef) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined
    const { gsap, ScrollTrigger, ScrollSmoother, SplitText, Swiper, $ } = window
    const sliders = []
    const splits = []
    const listeners = []
    let context, media, ownedSmoother, frame
    let disposed = false
    const all = selector => [...root.querySelectorAll(selector)]
    const on = (element, event, callback) => {
      element.addEventListener(event, callback)
      listeners.push(() => element.removeEventListener(event, callback))
    }
    const init = () => {
      if (disposed) return
      const slider = (selector, options) => {
        const element = root.querySelector(selector)
        if (!element || !Swiper || element.swiper) return
        sliders.push(new Swiper(element, options))
      }
      const autoplay = { delay: 2000, disableOnInteraction: false }
      slider('.brand-slider', {
        spaceBetween: 24, speed: 1300, loop: true, autoplay,
        breakpoints: { 1399: { slidesPerView: 8 }, 1199: { slidesPerView: 5 }, 991: { slidesPerView: 4 }, 767: { slidesPerView: 3 }, 575: { slidesPerView: 2 }, 400: { slidesPerView: 2 }, 0: { slidesPerView: 1 } },
      })
      slider('.service-slider-3', {
        spaceBetween: 30, speed: 1300, loop: true, autoplay,
        navigation: { nextEl: root.querySelector('.array-next'), prevEl: root.querySelector('.array-prev') },
        pagination: { el: root.querySelector('.dot'), clickable: true },
        breakpoints: { 1199: { slidesPerView: 4 }, 991: { slidesPerView: 3 }, 767: { slidesPerView: 2 }, 575: { slidesPerView: 1.5 }, 0: { slidesPerView: 1.2 } },
      })
      slider('.testimonial-slider-3', {
        spaceBetween: 30, speed: 1300, loop: true, centeredSlides: true, autoplay,
        breakpoints: { 1199: { slidesPerView: 3 }, 991: { slidesPerView: 2 }, 767: { slidesPerView: 2 }, 575: { slidesPerView: 1 }, 0: { slidesPerView: 1 } },
      })
      const hoverItems = all('.service-box-items-3, .work-process-items-3, .choose-list li')
      hoverItems.forEach(element => {
        const activate = () => { hoverItems.forEach(item => item.classList.remove('active')); element.classList.add('active') }
        on(element, 'mouseenter', activate)
        on(element, 'focusin', activate)
      })
      const titles = all('.team-title'), portraits = all('.gt-team-one-image')
      titles.forEach((element, index) => {
        const activate = () => {
          titles.forEach((item, i) => item.classList.toggle('active', i === index))
          portraits.forEach((item, i) => item.classList.toggle('active', i === index))
        }
        on(element, 'mouseenter', activate)
        on(element, 'focusin', activate)
      })
      if ($?.fn.magnificPopup) $(root).find('.video-popup').magnificPopup({ type: 'iframe', callbacks: {} })
      if (!gsap || !ScrollTrigger || !SplitText) return
      gsap.registerPlugin(ScrollTrigger, SplitText)
      context = gsap.context(() => {
        if (ScrollSmoother && !ScrollSmoother.get()) {
          gsap.registerPlugin(ScrollSmoother)
          ownedSmoother = ScrollSmoother.create({ wrapper: '#smooth-wrapper', content: '#smooth-content', smooth: 2, effects: true, smoothTouch: 0.1, normalizeScroll: false, ignoreMobileResize: true })
        }
        all('.split-title').filter(el => !el.querySelector('.char')).forEach(title => {
          const split = new SplitText(title, { type: 'words,chars' })
          splits.push(split)
          split.chars.forEach(char => char.classList.add('char'))
          gsap.to(split.chars, { scrollTrigger: { trigger: title, start: 'top 90%', toggleActions: 'play none none none' }, duration: 0.8, clipPath: 'inset(0% 0% -15% 0%)', x: 0, opacity: 1, ease: 'power4.out', stagger: 0.03 })
        })
        all('.wa_title_spilt_1').filter(el => !el.querySelector('.char')).forEach(element => {
          const split = new SplitText(element, { type: 'words,chars', wordsClass: 'word', charsClass: 'char' })
          splits.push(split)
          let duration = parseFloat(element.dataset.speed) || 0.6
          if (window.innerWidth <= 768) duration *= 0.5
          gsap.set(split.words, { willChange: 'transform', perspective: 1000, transformStyle: 'preserve-3d' })
          gsap.set(split.chars, { willChange: 'transform', opacity: 0, rotateX: -80, transformOrigin: 'center center -10px' })
          gsap.set(element, { perspective: 1000, transformStyle: 'preserve-3d' })
          gsap.to(split.chars, { scrollTrigger: { trigger: element, start: 'top 85%' }, opacity: 1, rotateX: 0, duration, delay: parseFloat(element.dataset.delay) || 0, ease: 'power2.out', stagger: { each: 0.025, from: 'center' } })
        })
        media = gsap.matchMedia()
        media.add('(min-width: 1200px)', () => {
          const subtitleSplits = []
          all('.tz-sub-tilte').filter(el => !el.querySelector('.split-line')).forEach(element => {
            const split = new SplitText(element, { type: 'lines,words,chars', linesClass: 'split-line' })
            subtitleSplits.push(split)
            gsap.set(split.chars, { opacity: 0, x: 7 })
            gsap.to(split.chars, { scrollTrigger: { trigger: element, start: 'top 90%', end: 'top 60%', scrub: 1 }, x: 0, opacity: 1, duration: 0.7, stagger: 0.2 })
          })
          return () => subtitleSplits.forEach(split => split.revert())
        })
        media.add('(min-width: 1199px)', () => {
          all('.tp-panel-pin').forEach(element => {
            if (ScrollTrigger.getAll().some(trigger => trigger.pin === element)) return
            ScrollTrigger.create({ trigger: element, start: element.dataset.start || 'top 10%', end: element.dataset.end || 'bottom 55%', endTrigger: root.querySelector('.tp-panel-pin-area'), pin: element, scrub: 1, pinSpacing: false, markers: false })
          })
        })
      }, root)
      ScrollTrigger.refresh()
    }
    // Let the template's ready handler finish, without waiting for remote images
    // and fonts: those can keep window.load pending after the page is usable.
    const schedule = () => { frame = requestAnimationFrame(init) }
    if (document.readyState !== 'loading') schedule()
    else on(document, 'DOMContentLoaded', schedule)
    return () => {
      disposed = true
      cancelAnimationFrame(frame)
      listeners.forEach(remove => remove())
      media?.revert()
      context?.revert()
      splits.forEach(split => split.revert())
      sliders.forEach(slider => slider.destroy(true, true))
      ownedSmoother?.kill()
      if ($) $(root).find('.video-popup').off('.magnificPopup').removeData('magnificPopup')
    }
  }, [rootRef])
}
