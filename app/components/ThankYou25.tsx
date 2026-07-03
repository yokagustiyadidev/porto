import parse from 'html-react-parser';

export default function ThankYou25() {
  const html = `<section id="thank-you" class="thank-you-section">
      <div class="thank-you-splash">
        <div class="thank-you-content reveal-scale">
          <h1 class="thank-you-heading">
            <span class="thank-you-text">Thank</span>
            <em class="thank-you-accent">You</em>
          </h1>
          <p class="thank-you-description" data-key="thanks_desc">
            Terima kasih telah melihat portfolio saya. Mari terhubung untuk membahas proyek Anda!
          </p>
          <div class="thank-you-cta-group">
            <a 
              href="https://wa.me/62882016594700?text=Halo%20Yoka%2C%20saya%20tertarik%20untuk%20diskusi%20project" 
              target="_blank" 
              rel="noopener noreferrer"
              class="thank-you-cta thank-you-cta-whatsapp magnetic-btn ripple-btn"
              aria-label="Contact via WhatsApp"
            >
              <svg class="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span data-key="cta_whatsapp">WhatsApp</span>
            </a>
            <a 
              href="mailto:yokagustiyadi.dev@gmail.com?subject=Diskusi%20Project&body=Halo%20Yoka%2C%20saya%20tertarik%20untuk%20diskusi%20project."
              class="thank-you-cta thank-you-cta-email magnetic-btn ripple-btn"
              aria-label="Contact via Email"
            >
              <svg class="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span data-key="cta_email">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>`;
  return parse(html);
}