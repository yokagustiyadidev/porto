import parse from 'html-react-parser';

export default function Vproject18() {
  const html = `<section id="vproject" style="background: var(--bg-soft)">
      <div class="wrap">
        <div class="sec-header center">
          <span class="sec-label" data-key="vproject_label">Fitur</span>
          <h2 class="sec-title" data-key="vproject_title">
            V Project — <em>Ekosistem Bisnis</em>
          </h2>
          <p class="sec-subtitle" data-key="vproject_subtitle">
            Solusi terintegrasi untuk manajemen servis dan otomasi pelanggan.
          </p>
        </div>
        <div class="features-grid">
          <div class="feature-card reveal">
            <div class="card-accent-border"></div>
            <span class="card-index">01</span>
            <div class="feature-icon icon-glow">
              <svg class="icon-outline" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l2.9-5.6A8.38 8.38 0 0 1 5 11.5a8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>
            <h3 data-key="vproject_cs">Customer Service Otomatis</h3>
            <p data-key="vproject_cs_desc">
              Layanan pelanggan 24/7 via WhatsApp. Pertanyaan umum, status
              servis, dan pencatatan keluhan ditangani AI secara real-time.
            </p>
          </div>
          <div class="feature-card reveal">
            <div class="card-accent-border"></div>
            <span class="card-index">02</span>
            <div class="feature-icon icon-glow">
              <svg class="icon-outline" viewBox="0 0 24 24">
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v0a2.5 2.5 0 0 1 2.5-2.5"></path>
                <path d="M12 4.5c-2.5 0-4.5 2-4.5 4.5v0c0 2.5 2 4.5 4.5 4.5"></path>
                <path d="M12 4.5c2.5 0 4.5 2 4.5 4.5v0c0 2.5-2 4.5-4.5 4.5"></path>
                <path d="M7.5 9c-1.5 0-2.5 1-2.5 2.5S6 14 7.5 14"></path>
                <path d="M16.5 9c1.5 0 2.5 1 2.5 2.5S18 14 16.5 14"></path>
                <path d="M7.5 14c-1 2 0 4 2 5"></path>
                <path d="M16.5 14c1 2 0 4-2 5"></path>
                <path d="M12 14v6"></path>
              </svg>
            </div>
            <h3 data-key="vproject_ai">AI Persona &amp; State</h3>
            <p data-key="vproject_ai_desc">
              Bot memiliki persona dan alur percakapan terstruktur. State
              management memastikan respons kontekstual dan konsisten.
            </p>
          </div>
          <div class="feature-card reveal">
            <div class="card-accent-border"></div>
            <span class="card-index">03</span>
            <div class="feature-icon icon-glow">
              <svg class="icon-outline" viewBox="0 0 24 24">
                <path d="M4 4h16v16l-4-2-4 2-4-2-4 2V4z"></path>
                <path d="M8 10h8"></path>
                <path d="M8 14h5"></path>
              </svg>
            </div>
            <h3 data-key="vproject_invoice">Invoice Otonom</h3>
            <p data-key="vproject_invoice_desc">
              Invoice dihasilkan otomatis setelah servis selesai berdasarkan
              data pekerjaan yang tercatat — tanpa input manual.
            </p>
          </div>
          <div class="feature-card reveal">
            <div class="card-accent-border"></div>
            <span class="card-index">04</span>
            <div class="feature-icon icon-glow">
              <svg class="icon-outline" viewBox="0 0 24 24">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1"></rect>
                <path d="M9 12h6"></path>
                <path d="M9 16h6"></path>
              </svg>
            </div>
            <h3 data-key="vproject_lead">Lead Logging</h3>
            <p data-key="vproject_lead_desc">
              Setiap calon pelanggan via WhatsApp tercatat otomatis ke
              spreadsheet — nama, nomor, kebutuhan, dan waktu kontak.
            </p>
          </div>
          <div class="feature-card reveal">
            <div class="card-accent-border"></div>
            <span class="card-index">05</span>
            <div class="feature-icon icon-glow">
              <svg class="icon-outline" viewBox="0 0 24 24">
                <path d="M18 20V10"></path>
                <path d="M12 20V4"></path>
                <path d="M6 20v-6"></path>
              </svg>
            </div>
            <h3 data-key="vproject_dashboard">Web Dashboard</h3>
            <p data-key="vproject_dashboard_desc">
              Antarmuka terpusat untuk memantau status perbaikan, riwayat
              pelanggan, dan performa bisnis. Bersih dan responsif.
            </p>
          </div>
          <div class="feature-card reveal">
            <div class="card-accent-border"></div>
            <span class="card-index">06</span>
            <div class="feature-icon icon-glow">
              <svg class="icon-outline" viewBox="0 0 24 24">
                <path d="M23 4v6h-6"></path>
                <path d="M1 20v-6h6"></path>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
              </svg>
            </div>
            <h3 data-key="vproject_escalation">Eskalasi Cerdas</h3>
            <p data-key="vproject_escalation_desc">
              Ketika AI mendeteksi pertanyaan di luar kemampuannya, percakapan
              otomatis dieskalasi ke admin dengan transisi mulus.
            </p>
          </div>
        </div>
      </div>
    </section>`;
  return parse(html);
}
