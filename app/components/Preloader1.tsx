import parse from 'html-react-parser';

export default function Preloader1() {
  const html = `<div class="preloader" id="preloader">
      <div class="preloader-logo">Y</div>
      <div class="preloader-bar"></div>
    </div>`;
  return parse(html);
}
