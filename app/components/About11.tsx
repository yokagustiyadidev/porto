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


export default function About11() {
  const html = `<section id="about">
      <div class="wrap">
        <div class="about-grid">
          <div class="about-image-wrap">
            <img src="profiless.png" alt="Yoka Gustiyadi" class="about-img">
          </div>
          <div class="about-content">
            <h2 class="sec-title" data-key="about_title">
              Mengubah alur kerja manual menjadi <em>ekosistem digital</em>.
            </h2>
            <p data-key="about_desc">
              Berlatar belakang pendidikan teknis SMK, saya berkembang menjadi
              pengembang yang praktis dan cepat beradaptasi. Fokus utama saya
              adalah mentransformasi proses administrasi dan ujian konvensional
              menjadi sistem digital yang aman, efisien, dan berkelanjutan.
            </p>
            <div class="about-links">
              <a href="CVYOKAGUSTIYADI2026.pdf" target="_blank">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span data-key="about_resume">Lihat CV</span>
              </a>
              <a href="https://www.linkedin.com/in/yoka-gustiyadi" target="_blank">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
                LinkedIn
              </a>
            </div>
            <div class="about-meta">
              <div class="about-meta-item">
                <strong data-key="about_location_label">Lokasi</strong><span data-key="about_location">Bandung, Indonesia</span>
              </div>
              <div class="about-meta-item">
                <strong data-key="about_focus_label">Fokus</strong><span data-key="about_focus">Teknis &amp; AI Config</span>
              </div>
              <div class="about-meta-item">
                <strong data-key="about_contact_label">Kontak</strong><span data-key="about_contact">0882-0165-94700</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  return parse(html, options);
}
