import parse from 'html-react-parser';

export default function BackToTop5() {
  const html = `<button class="back-to-top" id="backToTop" aria-label="Back to top">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 15l-6-6-6 6"></path>
      </svg>
    </button>`;
  return parse(html);
}
