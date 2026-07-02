import parse from 'html-react-parser';

export default function Pengalaman13() {
  const html = `<section id="pengalaman" style="padding: 100px 0">
      <div class="wrap">
        <div class="sec-header" style="margin-bottom: 56px">
          <span class="sec-label" data-key="exp_label">Karier</span>
          <h2 class="sec-title" data-key="exp_title">
            Pengalaman <em>Bekerja</em>
          </h2>
        </div>
        <div class="exp-list">
          <div class="exp-item reveal">
            <div class="exp-main">
              <h3 class="exp-company">SDI Abu Seno</h3>
              <span class="exp-role" data-key="exp_role_admin">Staff Administrasi</span>
            </div>
            <span class="exp-year" data-key="exp_year_1">2024 — Sekarang</span>
          </div>
          <div class="exp-divider"></div>
          <div class="exp-item reveal">
            <div class="exp-main">
              <h3 class="exp-company">Pedagang dan Freelance</h3>
              <span class="exp-role" data-key="exp_role_freelance">Pekerjaan Paruh Waktu</span>
            </div>
            <span class="exp-year">2021 — 2024</span>
          </div>
          <div class="exp-divider"></div>
          <div class="exp-item reveal">
            <div class="exp-main">
              <h3 class="exp-company">PT Sakura Java Indonesia</h3>
              <span class="exp-role" data-key="exp_role_operator">Operator Produksi</span>
            </div>
            <span class="exp-year">Cikarang, 2018 — 2020</span>
          </div>
          <div class="exp-divider"></div>
          <div class="exp-item reveal">
            <div class="exp-main">
              <h3 class="exp-company">Kobutri Jabar</h3>
              <span class="exp-role" data-key="exp_role_admin2">Administrasi</span>
            </div>
            <span class="exp-year">2017</span>
          </div>
          <div class="exp-divider"></div>
          <div class="exp-item reveal">
            <div class="exp-main">
              <h3 class="exp-company">Auto Brother Salon Car</h3>
              <span class="exp-role" data-key="exp_role_polish">Poles Mobil</span>
            </div>
            <span class="exp-year">2016 — 2017</span>
          </div>
        </div>
      </div>
    </section>`;
  return parse(html);
}
