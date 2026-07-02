import parse from 'html-react-parser';

export default function Statsmarquee14() {
  const html = `<section id="stats-marquee" style="padding: 100px 0 0 0">
      <!-- Stats Row -->
      <div class="wrap" style="margin-bottom: 40px">
        <div class="stats-row">
          <div class="stat-item">
            <div class="stat-number" data-target="2" data-suffix="+">0</div>
            <div class="stat-label" data-key="stat_years">Tahun Pengalaman</div>
            <div class="stat-desc" data-key="stat_years_desc">
              Tech &amp; administrasi digital
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-target="5" data-suffix="">0</div>
            <div class="stat-label" data-key="stat_services">Layanan Digital</div>
            <div class="stat-desc" data-key="stat_services_desc">
              Siap dibangun untuk Anda
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-number">24/7</div>
            <div class="stat-label" data-key="stat_bot">Bot Aktif</div>
            <div class="stat-desc" data-key="stat_bot_desc">
              WhatsApp AI tanpa henti
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-target="3" data-suffix="">0</div>
            <div class="stat-label" data-key="stat_certs">Sertifikasi</div>
            <div class="stat-desc" data-key="stat_certs_desc">
              Diterbitkan Anthropic
            </div>
          </div>
        </div>
      </div>

      <!-- Marquee -->
      <div class="marquee-container">
        <div class="marquee-content">
          <div class="marquee-item">Web Development</div>
          <div class="marquee-item">Tailwind CSS</div>
          <div class="marquee-item">Vanilla JS</div>
          <div class="marquee-item">Prompt Engineering</div>
          <div class="marquee-item">AI Integration</div>
          <div class="marquee-item">RBAC Security</div>
          <div class="marquee-item">Web Development</div>
          <div class="marquee-item">Tailwind CSS</div>
          <div class="marquee-item">Vanilla JS</div>
          <div class="marquee-item">Prompt Engineering</div>
          <div class="marquee-item">AI Integration</div>
          <div class="marquee-item">RBAC Security</div>
        </div>
      </div>
    </section>`;
  return parse(html);
}
