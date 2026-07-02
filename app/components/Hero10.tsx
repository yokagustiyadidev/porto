import parse from 'html-react-parser';

export default function Hero10() {
  const html = `<section class="hero" id="hero">
      <div class="hero-bg">
        <div class="hero-blob-wrap">
          <div class="hero-blob"></div>
          <div class="hero-blob"></div>
          <div class="hero-blob"></div>
          <div class="hero-blob"></div>
        </div>
        <div class="hero-noise"></div>
        <div class="particle" style="
            top: 20%;
            left: 10%;
            width: 6px;
            height: 6px;
            animation-delay: 0s;
            animation-duration: 18s;
          "></div>
        <div class="particle" style="
            top: 60%;
            left: 80%;
            width: 3px;
            height: 3px;
            animation-delay: -3s;
            animation-duration: 22s;
          "></div>
        <div class="particle" style="
            top: 80%;
            left: 20%;
            width: 5px;
            height: 5px;
            animation-delay: -7s;
            animation-duration: 16s;
          "></div>
        <div class="particle" style="
            top: 30%;
            left: 70%;
            width: 4px;
            height: 4px;
            animation-delay: -11s;
            animation-duration: 20s;
          "></div>
        <div class="particle" style="
            top: 70%;
            left: 50%;
            width: 3px;
            height: 3px;
            animation-delay: -5s;
            animation-duration: 14s;
          "></div>
      </div>
      <div class="wrap">
        <div class="hero-inner">
          <span class="hero-eyebrow" data-key="hero_eyebrow">Available for Collaboration</span>
          <h1 class="hero-title">Yoka <em>Gustiyadi</em></h1>
          <p class="hero-role">
            <span class="typewriter" id="typewriterText" data-key="hero_role">Staff Administrasi &amp; IT Support</span>
          </p>
          <p class="hero-desc" data-key="hero_desc">
            Membangun arsitektur digital yang mengubah alur kerja manual menjadi
            ekosistem otonom — dari sistem ujian terintegrasi AI hingga otomasi
            bisnis berbasis WhatsApp.
          </p>
          <div class="hero-actions">
            <a href="#work" class="hero-cta magnetic-btn ripple-btn" data-key="hero_cta">Lihat Proyek</a>
            <div class="hero-socials">
              <a href="https://wa.me/62882016594700" target="_blank" class="magnetic-btn" aria-label="WhatsApp">
                <svg class="icon-outline" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l2.9-5.6A8.38 8.38 0 0 1 5 11.5a8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
              <a href="mailto:yokagustiyadi.dev@gmail.com" class="magnetic-btn" aria-label="Email">
                <svg class="icon-outline" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/yoka-gustiyadi" target="_blank" class="magnetic-btn" aria-label="LinkedIn">
                <svg class="icon-outline" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://github.com/yokagustiyadidev" target="_blank" class="magnetic-btn" aria-label="GitHub">
                <svg class="icon-outline" viewBox="0 0 24 24">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 1.5 10.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 20.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  return parse(html);
}
