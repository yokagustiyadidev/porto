const experiences = [
  {
    company: 'SDI Abu Seno',
    role: 'Staff Administrasi',
    year: '2024 — Sekarang',
    location: 'Jakarta',
  },
  {
    company: 'Pedagang dan Freelance',
    role: 'Pekerjaan Paruh Waktu',
    year: '2021 — 2024',
    location: 'Jakarta',
  },
  {
    company: 'PT Sakura Java Indonesia',
    role: 'Operator Produksi',
    year: '2018 — 2020',
    location: 'Cikarang',
  },
  {
    company: 'Kobutri Jabar',
    role: 'Administrasi',
    year: '2017',
    location: 'Jabar',
  },
  {
    company: 'Auto Brother Salon Car',
    role: 'Poles Mobil',
    year: '2016 — 2017',
    location: 'Jakarta',
  },
];

export default function Pengalaman13() {
  return (
    <section id="pengalaman" className="exp-timeline-section">
      <div className="wrap">
        <div className="sec-header exp-sec-header">
          <span className="sec-label" data-key="exp_label">
            Karier
          </span>
          <h2 className="sec-title" data-key="exp_title">
            Pengalaman <em>Bekerja</em>
          </h2>
        </div>
        <div className="exp-list exp-timeline">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="exp-item exp-tl-item reveal"
            >
              <div className="exp-tl-dot"></div>
              <div className="exp-tl-card">
                <div className="exp-tl-header">
                  <h3 className="exp-company">{exp.company}</h3>
                  <span className="exp-year">{exp.year}</span>
                </div>
                <span className="exp-role">
                  {exp.role}
                  {exp.location ? ` · ${exp.location}` : ''}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
