import parse from 'html-react-parser';
import Image from 'next/image';

const options = {
  replace: (domNode: any) => {
    if (domNode.type === 'tag' && domNode.name === 'img') {
      const { src, alt, class: className } = domNode.attribs;
      const imgSrc = src.startsWith('/') ? src : `/${src}`;
      return <Image src={imgSrc} alt={alt || ''} className={className} width={1200} height={800} style={{ width: '100%', height: 'auto' }} />;
    }
  }
};

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
              <img src="dcbt.png" alt="Sistem CBT" class="img-zoom" loading="lazy">
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
          <div class="work-card reveal" data-onclick="window.open('https://wa.me/62882016594700?text=Halo%20Yoka%2C%20saya%20tertarik%20dengan%20Hermes%20Agent', '_blank')" data-tooltip="Hubungi untuk info">
            <div class="card-accent-border"></div>
            <div class="card-shimmer"></div>
            <span class="card-index">03</span>
            <div class="work-img-wrap">
              <img src="hermes.png" alt="Hermes Agent" class="img-zoom" loading="lazy">
            </div>
            <div class="work-body">
              <div class="work-tags">
                <span class="work-tag accent">AI Agent</span>
                <span class="work-tag">Automation</span>
                <span class="work-tag">Workflow</span>
              </div>
              <h3 data-key="work_hermes_title">Hermes Agent Automation</h3>
              <p data-key="work_hermes_desc">
                Workflow otomasi berbasis AI agent yang mengeksekusi tugas
                berantai — dari pemicu pesan hingga eksekusi dan pelaporan —
                tanpa sentuhan manual.
              </p>
              <span class="work-link" data-key="work_contact">Hubungi untuk info</span>
            </div>
          </div>
          <div class="work-card reveal" data-onclick="window.open('https://wa.me/62882016594700?text=Halo%20Yoka%2C%20saya%20tertarik%20dengan%20Sistem%20Data%20Siswa', '_blank')" data-tooltip="Hubungi untuk info">
            <div class="card-accent-border"></div>
            <div class="card-shimmer"></div>
            <span class="card-index">04</span>
            <div class="work-img-wrap">
              <img src="perpus.png" alt="Data Siswa dan Perpustakaan" class="img-zoom" loading="lazy">
            </div>
            <div class="work-body">
              <div class="work-tags">
                <span class="work-tag accent">Sekolah</span>
                <span class="work-tag">Data Siswa</span>
                <span class="work-tag">Perpustakaan</span>
              </div>
              <h3 data-key="work_siswa_title">Data Siswa &amp; Perpus Digital</h3>
              <p data-key="work_siswa_desc">
                Sistem pendataan siswa terpusat yang terhubung dengan katalog
                perpustakaan digital — peminjaman, stok buku, dan riwayat
                tercatat otomatis.
              </p>
              <span class="work-link" data-key="work_contact">Hubungi untuk info</span>
            </div>
          </div>
          <div class="work-card reveal" data-onclick="window.open('https://wa.me/62882016594700?text=Halo%20Yoka%2C%20saya%20tertarik%20dengan%20Dashboard%20Guru', '_blank')" data-tooltip="Hubungi untuk info">
            <div class="card-accent-border"></div>
            <div class="card-shimmer"></div>
            <span class="card-index">05</span>
            <div class="work-img-wrap">
              <img src="47781.png" alt="Dashboard Guru" class="img-zoom" loading="lazy">
            </div>
            <div class="work-body">
              <div class="work-tags">
                <span class="work-tag accent">Dashboard</span>
                <span class="work-tag">Administrasi</span>
                <span class="work-tag">Guru</span>
              </div>
              <h3 data-key="work_guru_title">Dashboard Pekerjaan Guru</h3>
              <p data-key="work_guru_desc">
                Panel administrasi guru: kelengkapan perangkat, agenda harian,
                rekap kehadiran, dan progres tugas — terpantau dalam satu
                layar.
              </p>
              <span class="work-link" data-key="work_contact">Hubungi untuk info</span>
            </div>
          </div>
          <div class="work-card reveal" data-onclick="window.open('https://wa.me/62882016594700?text=Halo%20Yoka%2C%20saya%20tertarik%20dengan%20EduDevToolkit', '_blank')" data-tooltip="Hubungi untuk info">
            <div class="card-accent-border"></div>
            <div class="card-shimmer"></div>
            <span class="card-index">06</span>
            <div class="work-img-wrap">
              <img src="edudev.png" alt="EduDevToolkit" class="img-zoom" loading="lazy">
            </div>
            <div class="work-body">
              <div class="work-tags">
                <span class="work-tag accent">Agent Skill</span>
                <span class="work-tag">EduTech</span>
                <span class="work-tag">Toolkit</span>
              </div>
              <h3 data-key="work_edu_title">EduDevToolkit Agent Skill</h3>
              <p data-key="work_edu_desc">
                Kumpulan agent skill siap pakai untuk pengembangan solusi
                edukasi — standarisasi workflow, snippet otomasi, dan template
                integrasi dalam satu paket.
              </p>
              <span class="work-link" data-key="work_contact">Hubungi untuk info</span>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  return parse(html, options);
}
