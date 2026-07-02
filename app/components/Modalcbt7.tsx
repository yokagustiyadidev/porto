import parse from 'html-react-parser';

export default function Modalcbt7() {
  const html = `<div class="project-modal-overlay" id="modal-cbt">
      <div class="project-modal">
        <button class="modal-close" data-onclick="closeModal('modal-cbt')">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <img src="50.png" alt="Sistem CBT" class="modal-image">
        <div class="modal-content">
          <h2 data-key="work_cbt_title">Sistem CBT Terintegrasi</h2>
          <div class="modal-tags">
            <span class="work-tag accent">Production</span>
            <span class="work-tag">RBAC</span>
            <span class="work-tag">AI Question</span>
            <span class="work-tag">Anti-cheat</span>
          </div>
          <p data-key="work_cbt_desc">
            Platform ujian digital end-to-end untuk SDI Abu Seno. Ditenagai AI
            pembuat soal, pengacakan pintar, anti-cheat real-time, dan rekap
            nilai terintegrasi.
          </p>
          <p>
            Dilengkapi AI Question Generator untuk membuat soal otomatis, Import
            Massal via Excel dengan dukungan Unicode penuh, Pengacakan Cerdas
            soal dan jawaban per siswa, Auto-Save per klik, Pojok Belajar dengan
            video YouTube terintegrasi, dan Rekap Nilai otomatis.
          </p>
          <div class="modal-cta">
            <a href="https://drive.google.com/drive/folders/1K34zxs3n6lYajXO1cHwfABLwAKdx38zK" target="_blank" class="hero-cta magnetic-btn ripple-btn" data-key="work_docs">Lihat Dokumentasi</a>
            <a href="https://cbt-demo-yokagustiyadi.vercel.app" target="_blank" class="hero-cta magnetic-btn ripple-btn">Demo CBT</a>
          </div>
        </div>
      </div>
    </div>`;
  return parse(html);
}
