import parse from 'html-react-parser';

export default function Services16() {
  const html = `<section id="services" style="background: var(--bg-soft)">
      <div class="wrap">
        <div class="sec-header center">
          <span class="sec-label" data-key="services_label">Layanan</span>
          <h2 class="sec-title" data-key="services_title">
            Yang Bisa Saya <em>Lakukan</em>
          </h2>
          <p class="sec-subtitle" data-key="services_subtitle">
            Solusi digital yang saya sediakan untuk memenuhi kebutuhan teknologi
            organisasi maupun personal.
          </p>
        </div>
        <div class="services-grid">
          <div class="service-card reveal">
            <div class="card-accent-border"></div>
            <span class="card-index">01</span>
            <div class="service-icon icon-glow">
              <svg class="icon-outline" viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                <path d="M8 21h8m-4-4v4"></path>
              </svg>
            </div>
            <h3 data-key="svc_web">Web &amp; Dashboard</h3>
            <p data-key="svc_web_desc">
              Website profesional dan dashboard administrasi dengan desain
              modern, responsif, dan performa tinggi untuk kebutuhan bisnis
              maupun personal.
            </p>
          </div>
          <div class="service-card reveal">
            <div class="card-accent-border"></div>
            <span class="card-index">02</span>
            <div class="service-icon icon-glow">
              <svg class="icon-outline" viewBox="0 0 24 24">
                <path d="M22 10l-10-6-10 6 10 6 10-6z"></path>
                <path d="M6 12v5a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-5"></path>
              </svg>
            </div>
            <h3 data-key="svc_cbt">Sistem CBT Sekolah</h3>
            <p data-key="svc_cbt_desc">
              Platform ujian komputer berbasis web lengkap dengan AI, pengacakan
              soal, anti-cheat, data siswa, dan rekap nilai terintegrasi.
            </p>
          </div>
          <div class="service-card reveal">
            <div class="card-accent-border"></div>
            <span class="card-index">03</span>
            <div class="service-icon icon-glow">
              <svg class="icon-outline" viewBox="0 0 24 24">
                <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                <path d="M12 11V7a4 4 0 0 1 4-4h0"></path>
                <circle cx="8" cy="15" r="1" fill="#000" stroke="none"></circle>
                <circle cx="16" cy="15" r="1" fill="#000" stroke="none"></circle>
                <path d="M9 19h6"></path>
              </svg>
            </div>
            <h3 data-key="svc_wa">WhatsApp AI 24/7</h3>
            <p data-key="svc_wa_desc">
              Bot WhatsApp pintar dengan AI persona, state management, dan
              eskalasi otomatis ke admin manusia saat dibutuhkan.
            </p>
          </div>
          <div class="service-card reveal">
            <div class="card-accent-border"></div>
            <span class="card-index">04</span>
            <div class="service-icon icon-glow">
              <svg class="icon-outline" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3 data-key="svc_portfolio">Portofolio Online</h3>
            <p data-key="svc_portfolio_desc">
              Portofolio digital elegan untuk menampilkan karya, pengalaman, dan
              keahlian dengan tampilan premium yang meyakinkan.
            </p>
          </div>
          <div class="service-card reveal">
            <div class="card-accent-border"></div>
            <span class="card-index">05</span>
            <div class="service-icon icon-glow">
              <svg class="icon-outline" viewBox="0 0 24 24">
                <path d="M22 6l-10 7L2 6"></path>
                <path d="M2 6v12h20V6"></path>
                <path d="M12 13l-2-2a2 2 0 0 1 2-2 2 2 0 0 1 2 2l-2 2z"></path>
              </svg>
            </div>
            <h3 data-key="svc_invite">Undangan Digital</h3>
            <p data-key="svc_invite_desc">
              Undangan pernikahan digital interaktif dengan desain estetis,
              countdown timer, galeri foto, RSVP, dan integrasi peta.
            </p>
          </div>
        </div>
      </div>
    </section>`;
  return parse(html);
}
