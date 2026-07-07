import parse from 'html-react-parser';

export default function SplashScreen() {
  const html = `<div class="splash-screen" id="splashScreen">
      <div class="splash-left">
        <div class="splash-content">
          <div class="splash-logo">PORTO<span class="logo-highlight">FOLIO</span></div>
          <div class="splash-divider"></div>
          <div class="splash-creator">
            <div class="creator-label">Created by</div>
            <div class="creator-name">Yoka Gustiyadi</div>
          </div>
          <div class="splash-copyright">©2026 Yoka. All rights reserved<br/>For more details and legal notices, go to<br/>the About Portfolio section</div>
          <div class="splash-info">Initializing...</div>
          <button class="splash-next-btn" id="splashNextBtn" aria-label="Enter Portfolio">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
      <div class="splash-right">
        <div class="splash-artwork"></div>
      </div>
    </div>`;
  return parse(html);
}