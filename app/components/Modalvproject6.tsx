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


export default function Modalvproject6() {
  const html = `<div class="project-modal-overlay" id="modal-vproject">
      <div class="project-modal">
        <button class="modal-close" data-onclick="closeModal('modal-vproject')">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <img src="09.png" alt="V Project" class="modal-image">
        <div class="modal-content">
          <h2>V Project</h2>
          <div class="modal-tags">
            <span class="work-tag accent">Live</span>
            <span class="work-tag">WhatsApp AI</span>
            <span class="work-tag">Dashboard</span>
            <span class="work-tag">Node.js</span>
          </div>
          <p data-key="work_vproject_desc">
            Sistem manajemen servis dengan AI Assistant via WhatsApp 24/7.
            Mengotomasi pencatatan keluhan, status perbaikan, dan generate
            invoice tanpa intervensi manual.
          </p>
          <p>
            Fitur utama meliputi Customer Service otomatis dengan AI Persona,
            State Management untuk percakapan kontekstual, Invoice Otonom yang
            dihasilkan otomatis, Lead Logging ke spreadsheet, Web Dashboard
            untuk monitoring, dan Eskalasi Cerdas ke admin manusia saat
            diperlukan.
          </p>
          <div class="modal-cta">
            <a href="https://v-project-steel.vercel.app" target="_blank" class="hero-cta magnetic-btn ripple-btn">Kunjungi Website</a>
          </div>
        </div>
      </div>
    </div>`;
  return parse(html, options);
}
