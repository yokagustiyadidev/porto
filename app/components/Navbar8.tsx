import parse from 'html-react-parser';

export default function Navbar8() {
  const html = `<nav id="navbar">
      <div class="wrap nav-inner">
        <a href="#" class="nav-logo">Portofolio</a>
        <div class="nav-links">
          <a href="#about" data-key="nav_about">Ikhtisar</a>
          <a href="#work" data-key="nav_work">Proyek</a>
          <a href="#services" data-key="nav_services">Layanan</a>
          <div class="lang-switcher">
            <button class="lang-btn active" data-lang="id" onclick="switchLang('id')">
              ID
            </button>
            <button class="lang-btn" data-lang="en" onclick="switchLang('en')">
              EN
            </button>
          </div>
          <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">
            <svg class="sun-icon" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5"></circle>
              <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
            </svg>
            <svg class="moon-icon" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
          <a href="#kontak" class="nav-cta" data-key="nav_contact">Hubungi</a>
        </div>
        <!-- Mobile controls: theme + lang outside hamburger -->
        <div class="mobile-controls">
          <button class="theme-toggle mobile-theme-toggle" id="mobileThemeToggle" aria-label="Toggle dark mode">
            <svg class="sun-icon" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5"></circle>
              <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
            </svg>
            <svg class="moon-icon" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
          <div class="lang-switcher mobile-lang-switcher">
            <button class="lang-btn active" data-lang="id" onclick="switchLang('id')">
              ID
            </button>
            <button class="lang-btn" data-lang="en" onclick="switchLang('en')">
              EN
            </button>
          </div>
        </div>
        <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>`;
  return parse(html);
}
