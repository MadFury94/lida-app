import { useEffect, useRef, useState } from 'react'

export default function Preloader() {
  const [done, setDone] = useState(false)
  const loader = useRef(null)
  useEffect(() => {
    let frame
    let start
    const node = loader.current
    const finish = window.setTimeout(() => setDone(true), 3800)
    const animate = time => {
      start ??= time
      const progress = Math.min((time - start) / 2400, 1)
      const count = Math.round((1 - Math.pow(1 - progress, 3)) * 100)
      node.querySelector('#pct').textContent = count
      node.querySelector('#logoFill').style.clipPath = `inset(${100 - count}% 0 0 0)`
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    const reveal = window.setTimeout(() => node.querySelector('#logoFill').classList.add('reveal'), 2600)
    const hide = window.setTimeout(() => node.classList.add('hide'), 3100)
    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(finish); clearTimeout(reveal); clearTimeout(hide)
    }
  }, [])
  if (done) return null
  return (
    <div id="preloader" ref={loader} aria-hidden="true">
      <div className="bracket tl"></div>
      <div className="bracket tr"></div>
      <div className="bracket bl"></div>
      <div className="bracket br"></div>

      <div className="pre-logo">
        SOLUTIONS MEDIA
        <div className="pre-logo-fill" id="logoFill">SOLUTIONS MEDIA</div>
      </div>

      <div className="loader-ring">
        <svg viewBox="0 0 72 72">
          <circle className="ring-track" cx="36" cy="36" r="32" />
          <circle className="ring-arc a2" cx="36" cy="36" r="32" />
          <circle className="ring-arc a1" cx="36" cy="36" r="32" />
        </svg>
        <div className="ring-center-dot"></div>
      </div>

      <div className="pre-count">Loading <span id="pct">0</span>%</div>
    </div>
  )
}
