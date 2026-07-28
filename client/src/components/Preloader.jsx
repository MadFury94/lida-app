export default function Preloader() {
  return (
    <div dangerouslySetInnerHTML={{__html: `            <div id="preloader">
            <div class="bracket tl"></div>
            <div class="bracket tr"></div>
            <div class="bracket bl"></div>
            <div class="bracket br"></div>

            <div class="pre-logo">
                ORIXO
                <div class="pre-logo-fill" id="logoFill">ORIXO</div>
            </div>

            <div class="loader-ring">
                <svg viewBox="0 0 72 72">
                <circle class="ring-track" cx="36" cy="36" r="32"/>
                <circle class="ring-arc a2" cx="36" cy="36" r="32"/>
                <circle class="ring-arc a1" cx="36" cy="36" r="32"/>
                </svg>
                <div class="ring-center-dot"></div>
            </div>

            <div class="pre-count">Loading <span id="pct">0</span>%</div>
            </div>`}} />
  )
}
