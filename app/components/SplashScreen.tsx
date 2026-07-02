import parse from 'html-react-parser';

export default function SplashScreen() {
  const html = `<div class="splash-screen" id="splashScreen">
      <canvas id="splashCanvas"></canvas>
      
      <div class="terminal-window">
        <div class="terminal-header">
          <div class="dot red"></div>
          <div class="dot yellow"></div>
          <div class="dot green"></div>
        </div>
        <div class="terminal-body">
          <div class="terminal-welcome">
            * Welcome to
          </div>
          <div class="terminal-title">
            <div class="blocky-text white">PORTO</div>
            <div class="blocky-text orange">FOLIO</div>
          </div>
          <div class="terminal-subtitle">
            yokagustiyadi — portofolio digital
          </div>
          <div class="terminal-footer">
            <button class="splash-next-btn" id="splashNextBtn" aria-label="Enter Portfolio">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>`;
  return parse(html);
}
