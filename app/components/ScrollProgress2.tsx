import parse from 'html-react-parser';

export default function ScrollProgress2() {
  const html = `<div class="scroll-progress" id="scrollProgress"></div>`;
  return parse(html);
}
