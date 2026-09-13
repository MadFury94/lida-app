import { useEffect, useState } from 'react'

export default function Preloader() {
  const [done, setDone] = useState(false)
  useEffect(() => {
    // Content arrives after window.load, so the template's load handler may
    // have already run. React owns this final reveal once the content mounts.
    const timer = window.setTimeout(() => setDone(true), 300)
    return () => window.clearTimeout(timer)
  }, [])
  if (done) return null
  return (
    <div id="preloader">
      <div className="bracket tl"></div>
      <div className="bracket tr"></div>
      <div className="bracket bl"></div>
      <div className="bracket br"></div>

      <div className="pre-logo">
        LIDA
        <div className="pre-logo-fill" id="logoFill">LIDA</div>
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
