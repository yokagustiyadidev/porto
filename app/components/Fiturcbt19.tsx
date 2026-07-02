import parse from 'html-react-parser';

export default function Fiturcbt19() {
  const html = `<section id="fitur-cbt">
      <div class="wrap">
        <div class="sec-header center">
          <span class="sec-label" data-key="cbt_label">Fitur</span>
          <h2 class="sec-title" data-key="cbt_title">CBT <em>Lengkap</em></h2>
          <p class="sec-subtitle" data-key="cbt_subtitle">
            Platform ujian digital yang dirancang untuk keandalan, keamanan, dan
            kemudahan pengguna.
          </p>
        </div>
        <div class="features-grid">
          <div class="feature-card reveal">
            <div class="card-accent-border"></div>
            <span class="card-index">01</span>
            <div class="feature-icon icon-glow">
              <svg class="icon-outline" viewBox="0 0 24 24">
                <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                <path d="M12 11V7a4 4 0 0 1 4-4h0"></path>
                <circle cx="8" cy="15" r="1" fill="#000" stroke="none"></circle>
                <circle cx="16" cy="15" r="1" fill="#000" stroke="none"></circle>
                <path d="M9 19h6"></path>
              </svg>
            </div>
            <h3 data-key="cbt_ai">AI Question Generator</h3>
            <p data-key="cbt_ai_desc">
              Guru tentukan topik dan jumlah soal — AI langsung menghasilkan
              bank soal pilihan ganda siap pakai.
            </p>
          </div>
          <div class="feature-card reveal">
            <div class="card-accent-border"></div>
            <span class="card-index">02</span>
            <div class="feature-icon icon-glow">
              <svg class="icon-outline" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
            </div>
            <h3 data-key="cbt_import">Import Massal</h3>
            <p data-key="cbt_import_desc">
              Upload hingga 40 soal via Excel. Mendukung Unicode penuh — Arab,
              Sunda, Mandarin — tanpa encoding error.
            </p>
          </div>
          <div class="feature-card reveal">
            <div class="card-accent-border"></div>
            <span class="card-index">03</span>
            <div class="feature-icon icon-glow">
              <svg class="icon-outline" viewBox="0 0 24 24">
                <polyline points="16 3 21 3 21 8"></polyline>
                <line x1="4" y1="20" x2="21" y2="3"></line>
                <polyline points="21 16 21 21 16 21"></polyline>
                <line x1="15" y1="15" x2="21" y2="21"></line>
                <line x1="4" y1="4" x2="9" y2="9"></line>
              </svg>
            </div>
            <h3 data-key="cbt_shuffle">Pengacakan Cerdas</h3>
            <p data-key="cbt_shuffle_desc">
              Urutan soal dan pilihan jawaban diacak per siswa, namun sistem
              tetap mengetahui kunci jawaban yang benar.
            </p>
          </div>
          <div class="feature-card reveal">
            <div class="card-accent-border"></div>
            <span class="card-index">04</span>
            <div class="feature-icon icon-glow">
              <svg class="icon-outline" viewBox="0 0 24 24">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                <polyline points="17 21 17 13 7 13 7 21"></polyline>
                <polyline points="7 3 7 8 15 8"></polyline>
              </svg>
            </div>
            <h3 data-key="cbt_autosave">Auto-Save &amp; Navigasi</h3>
            <p data-key="cbt_autosave_desc">
              Jawaban tersimpan otomatis. Tampilan satu soal per halaman dengan
              daftar navigasi untuk review ulang.
            </p>
          </div>
          <div class="feature-card reveal">
            <div class="card-accent-border"></div>
            <span class="card-index">05</span>
            <div class="feature-icon icon-glow">
              <svg class="icon-outline" viewBox="0 0 24 24">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h3 data-key="cbt_learning">Pojok Belajar</h3>
            <p data-key="cbt_learning_desc">
              Materi pelajaran dengan video YouTube terintegrasi. Siswa menonton
              langsung di dalam platform.
            </p>
          </div>
          <div class="feature-card reveal">
            <div class="card-accent-border"></div>
            <span class="card-index">06</span>
            <div class="feature-icon icon-glow">
              <svg class="icon-outline" viewBox="0 0 24 24">
                <path d="M18 20V10"></path>
                <path d="M12 20V4"></path>
                <path d="M6 20v-6"></path>
              </svg>
            </div>
            <h3 data-key="cbt_rekap">Rekap Nilai Otomatis</h3>
            <p data-key="cbt_rekap_desc">
              Nilai dikalkulasi mutlak dan otomatis. Rekap per ujian dan profil
              nilai seluruh mata pelajaran.
            </p>
          </div>
        </div>
      </div>
    </section>`;
  return parse(html);
}
