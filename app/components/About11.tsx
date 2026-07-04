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
              <a href="CVYOKAGUSTIYADI2026.pdf" target="_blank" class="magnetic-btn" aria-label="Download CV">
                <svg class="icon-outline" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/yoka-gustiyadi" target="_blank" class="magnetic-btn" aria-label="LinkedIn">
                <svg class="icon-outline" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
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
