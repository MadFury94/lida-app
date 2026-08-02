import { brand } from '../store/site'

export default function Preloader() {
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
