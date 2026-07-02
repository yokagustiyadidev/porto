import parse from 'html-react-parser';

export default function Work15() {
  const html = `<section id="work">
      <div class="wrap">
        <div class="sec-header center">
          <span class="sec-label" data-key="work_label">Portofolio</span>
          <h2 class="sec-title" data-key="work_title">
            Proyek <em>Terpilih</em>
          </h2>
          <p class="sec-subtitle" data-key="work_subtitle">
            Karya nyata yang telah dibangun, digunakan, dan terus dikembangkan
            untuk memecahkan masalah operasional.
          </p>
        </div>
        <div class="work-grid">
          <div class="work-card reveal" data-onclick="openModal('modal-vproject')" data-tooltip="Click for details">
            <div class="card-accent-border"></div>
            <div class="card-shimmer"></div>
            <span class="card-index">01</span>
            <div class="work-img-wrap">
              <img src="09.png" alt="V Project" class="img-zoom" loading="lazy">
            </div>
            <div class="work-body">
              <div class="work-tags">
                <span class="work-tag accent">Live</span>
                <span class="work-tag">WhatsApp AI</span>
                <span class="work-tag">Dashboard</span>
              </div>
              <h3>V Project</h3>
              <p data-key="work_vproject_desc">
                Sistem manajemen servis dengan AI Assistant via WhatsApp 24/7.
                Mengotomasi pencatatan keluhan, status perbaikan, dan generate
                invoice tanpa intervensi manual.
              </p>
              <span class="work-link" data-key="work_visit">Kunjungi website</span>
            </div>
          </div>
          <div class="work-card reveal" data-onclick="openModal('modal-cbt')" data-tooltip="Click for details">
            <div class="card-accent-border"></div>
            <div class="card-shimmer"></div>
            <span class="card-index">02</span>
            <div class="work-img-wrap">
              <img src="50.png" alt="Sistem CBT" class="img-zoom" loading="lazy">
            </div>
            <div class="work-body">
              <div class="work-tags">
                <span class="work-tag accent">Production</span>
                <span class="work-tag">RBAC</span>
                <span class="work-tag">AI Question</span>
              </div>
              <h3 data-key="work_cbt_title">Sistem CBT Terintegrasi</h3>
              <p data-key="work_cbt_desc">
                Platform ujian digital end-to-end untuk SDI Abu Seno. Ditenagai
                AI pembuat soal, pengacakan pintar, anti-cheat real-time, dan
                rekap nilai terintegrasi.
              </p>
              <span class="work-link" data-key="work_docs">Lihat dokumentasi</span>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  return parse(html);
}
