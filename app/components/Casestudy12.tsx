import parse from 'html-react-parser';

export default function Casestudy12() {
  const html = `<section id="case-study" style="padding: 100px 0; background: var(--bg-soft)">
      <div class="wrap">
        <div class="sec-header center">
          <span class="sec-label" data-key="case_label">Studi Kasus</span>
          <h2 class="sec-title" data-key="case_title">
            Dari <em>Masalah</em> ke <em>Solusi</em>
          </h2>
          <p class="sec-subtitle" data-key="case_subtitle">
            Transformasi proses ujian di SDI Abu Seno — dari manual menuju
            otomasi penuh.
          </p>
        </div>
        <div class="psr-grid">
          <div class="psr-card reveal">
            <div class="psr-icon">
              <svg class="icon-outline" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <span class="psr-step">01</span>
            <h3 data-key="case_problem">Masalah</h3>
            <p data-key="case_problem_desc">
              Guru menginput soal dan rekap nilai secara manual. Ujian dilakukan
              di Google Forms tanpa pengacakan soal, tanpa anti-cheat, dan tanpa
              auto-save — memakan waktu berjam-jam untuk persiapan dan
              penilaian.
            </p>
          </div>
          <div class="psr-arrow">
            <svg class="icon-outline" viewBox="0 0 24 24" style="width: 20px; height: 20px; stroke: var(--text-light)">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </div>
          <div class="psr-card reveal">
            <div class="psr-icon">
              <svg class="icon-outline" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            </div>
            <span class="psr-step">02</span>
            <h3 data-key="case_solution">Solusi</h3>
            <p data-key="case_solution_desc">
              Saya membangun sistem CBT terintegrasi dengan AI Question
              Generator, RBAC 4-level, anti-cheat real-time, pengacakan soal &amp;
              jawaban, auto-save per klik, rekap nilai otomatis, dan dashboard
              admin terpusat.
            </p>
          </div>
          <div class="psr-arrow">
            <svg class="icon-outline" viewBox="0 0 24 24" style="width: 20px; height: 20px; stroke: var(--text-light)">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </div>
          <div class="psr-card reveal">
            <div class="psr-icon">
              <svg class="icon-outline" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <span class="psr-step">03</span>
            <h3 data-key="case_result">Hasil</h3>
            <p data-key="case_result_desc">
              Sistem digunakan di SDI Abu Seno sejak awal 2026. Waktu persiapan
              ujian hingga penilaian berkurang secara signifikan. Guru fokus
              mengajar, siswa ujian dengan nyaman, dan data tersimpan rapi
              otomatis.
            </p>
          </div>
        </div>
      </div>
    </section>`;
  return parse(html);
}
