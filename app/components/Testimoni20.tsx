import parse from 'html-react-parser';

export default function Testimoni20() {
  const html = `<section id="testimoni" style="background: var(--bg-soft)">
      <div class="wrap">
        <div class="sec-header center">
          <span class="sec-label" data-key="testi_label">Testimoni</span>
          <h2 class="sec-title" data-key="testi_title">
            Apa Kata <em>Pengguna</em>
          </h2>
          <p class="sec-subtitle" data-key="testi_subtitle">
            Pengalaman para pengajar SDI Abu Seno dalam menggunakan Sistem CBT.
          </p>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card reveal">
            <div class="card-accent-border"></div>
            <div class="testimonial-quote">"</div>
            <p class="testimonial-text" data-key="testi_1">
              Sistem CBT ini sangat membantu proses ujian di sekolah kami.
              Pengacakan soal dan fitur anti-cheat membuat ujian lebih adil dan
              terjamin keamanannya.
            </p>
            <div class="testimonial-author">
              <div class="testimonial-avatar avatar-pulse">A</div>
              <div class="testimonial-info">
                <strong>Pak Arsy</strong>
                <span data-key="testi_role_1">Guru SDI Abu Seno</span>
              </div>
            </div>
          </div>
          <div class="testimonial-card reveal">
            <div class="card-accent-border"></div>
            <div class="testimonial-quote">"</div>
            <p class="testimonial-text" data-key="testi_2">
              AI Question Generator sangat menghemat waktu saya dalam menyusun
              soal. Cukup tentukan topik, soal langsung siap digunakan. Pojok
              Belajar juga sangat membantu siswa.
            </p>
            <div class="testimonial-author">
              <div class="testimonial-avatar avatar-pulse">T</div>
              <div class="testimonial-info">
                <strong>Pak Teten</strong>
                <span data-key="testi_role_2">Guru SDI Abu Seno</span>
              </div>
            </div>
          </div>
          <div class="testimonial-card reveal">
            <div class="card-accent-border"></div>
            <div class="testimonial-quote">"</div>
            <p class="testimonial-text" data-key="testi_3">
              Antarmuka yang bersih dan intuitif membuat siswa mudah
              beradaptasi. Auto-save memastikan tidak ada jawaban yang hilang.
              Efisiensi ujian meningkat secara signifikan.
            </p>
            <div class="testimonial-author">
              <div class="testimonial-avatar avatar-pulse">M</div>
              <div class="testimonial-info">
                <strong>Pak Mukhtar</strong>
                <span data-key="testi_role_3">Guru SDI Abu Seno</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  return parse(html);
}
