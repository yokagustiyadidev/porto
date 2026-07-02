import parse from 'html-react-parser';

export default function Footer24() {
  const html = `<footer>
      <p data-key="footer">Dirancang oleh Yoka Gustiyadi · 2026</p>
    </footer>`;
  return parse(html);
}
