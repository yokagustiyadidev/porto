import parse from 'html-react-parser';

export default function Sertifikat21() {
  const html = `<section id="sertifikat">
      <div class="wrap">
        <div class="sec-header center">
          <span class="sec-label" data-key="cert_label">Sertifikasi</span>
          <h2 class="sec-title" data-key="cert_title">
            Pengakuan <em>Resmi</em>
          </h2>
          <p class="sec-subtitle" data-key="cert_subtitle">
            Kompetensi yang tervalidasi melalui program pembelajaran
            berkelanjutan.
          </p>
        </div>
        <div class="cert-slider-wrap">
          <div class="cert-slider" id="certSlider">
            <div class="cert-card reveal">
              <div class="card-accent-border"></div>
              <div class="cert-img-wrap">
                <img src="sertif 1.jpg" alt="Claude with Google Vertex AI" class="img-zoom" loading="lazy">
              </div>
              <h3>Claude with Google Vertex AI</h3>
              <p class="cert-desc">Anthropic</p>
            </div>
            <div class="cert-card reveal">
              <div class="card-accent-border"></div>
              <div class="cert-img-wrap">
                <img src="sertif 2.jpg" alt="AI Fluency for educators" class="img-zoom" loading="lazy">
              </div>
              <h3>AI Fluency for Educators</h3>
              <p class="cert-desc">Anthropic</p>
            </div>
            <div class="cert-card reveal">
              <div class="card-accent-border"></div>
              <div class="cert-img-wrap">
                <img src="sertif 3.jpg" alt="AI Fluency for students" class="img-zoom" loading="lazy">
              </div>
              <h3>AI Fluency for Students</h3>
              <p class="cert-desc">Anthropic</p>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  return parse(html);
}
