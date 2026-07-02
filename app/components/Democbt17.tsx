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


export default function Democbt17() {
  const html = `<section id="demo-cbt">
      <div class="wrap">
        <div class="sec-header center">
          <span class="sec-label" data-key="demo_label">Live Demo</span>
          <h2 class="sec-title" data-key="demo_title">Sistem <em>CBT</em></h2>
          <p class="sec-subtitle" data-key="demo_subtitle">
            Jelajahi antarmuka ujian berbasis komputer secara langsung melalui
            demo interaktif.
          </p>
          <a href="https://cbt-demo-yokagustiyadi.vercel.app" target="_blank" class="hero-cta magnetic-btn ripple-btn" style="display: inline-flex; margin-top: 24px" data-key="demo_cta">Buka Demo CBT ↗</a>
        </div>
        <div class="cbt-gallery" style="margin-top: 56px">
          <div class="cbt-gallery-item reveal" data-onclick="
              window.open('https://cbt-demo-yokagustiyadi.vercel.app', '_blank')
            ">
            <img src="47777.png" alt="CBT Login Page" class="img-zoom" loading="lazy">
          </div>
          <div class="cbt-gallery-item reveal" data-onclick="
              window.open('https://cbt-demo-yokagustiyadi.vercel.app', '_blank')
            ">
            <img src="47781.png" alt="CBT Exam Interface" class="img-zoom" loading="lazy">
          </div>
        </div>
      </div>
    </section>`;
  return parse(html, options);
}
