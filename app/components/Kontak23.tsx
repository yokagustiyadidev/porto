import parse from 'html-react-parser';

export default function Kontak23() {
  const html = `<section id="kontak">
      <div class="wrap">
        <div class="sec-header center">
          <span class="sec-label" data-key="contact_label">Kontak</span>
          <h2 class="sec-title" data-key="contact_title">
            Mari <em>Berdiskusi</em>
          </h2>
          <p class="sec-subtitle" data-key="contact_subtitle">
            Tersedia untuk proyek, kolaborasi, dan konsultasi teknis.
          </p>
        </div>
        <div class="contact-grid">
          <div class="contact-card reveal">
            <div class="card-accent-border"></div>
            <div class="contact-card-expand"></div>
            <div class="contact-icon icon-glow icon-bounce">
              <svg class="icon-outline" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.56 12.56 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.56 12.56 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div class="contact-info">
              <h3>WhatsApp</h3>
              <a href="https://wa.me/62882016594700" target="_blank">0882-0165-94700</a>
              <p data-key="contact_wa_desc">
                Respons cepat untuk diskusi proyek.
              </p>
            </div>
          </div>
          <div class="contact-card reveal">
            <div class="card-accent-border"></div>
            <div class="contact-card-expand"></div>
            <div class="contact-icon icon-glow icon-bounce">
              <svg class="icon-outline" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div class="contact-info">
              <h3>Email</h3>
              <a href="mailto:yokagustiyadi.dev@gmail.com">yokagustiyadi.dev@gmail.com</a>
              <p data-key="contact_email_desc">
                Untuk penawaran dan detail formal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  return parse(html);
}
