import parse from 'html-react-parser';

export default function MobileNav9() {
  const html = `<div class="mobile-nav" id="mobileNav">
      <button class="mobile-nav-close" data-onclick="closeMobileNav()" aria-label="Tutup menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <a href="#about" data-onclick="closeMobileNav()" data-key="nav_about">Ikhtisar</a>
      <a href="#work" data-onclick="closeMobileNav()" data-key="nav_work">Proyek</a>
      <a href="#services" data-onclick="closeMobileNav()" data-key="nav_services">Layanan</a>
      <a href="#kontak" class="nav-cta-mobile" data-onclick="closeMobileNav()" data-key="nav_contact">Hubungi</a>
    </div>`;
  return parse(html);
}
