import parse from 'html-react-parser';

export default function CursorFollower3() {
  const html = `<div class="cursor-follower" id="cursorFollower" aria-hidden="true"></div>`;
  return parse(html);
}
