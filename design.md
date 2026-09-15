# Design Doc — Portofolio Yoka Gustiyadi

## 1. Arsitektur UI

### 1.1 Pola komponen
- Setiap section = satu file `.tsx` di `app/components/`, berisi **string HTML** yang di-render lewat `html-react-parser`.
- `<img>` pada tag `img` diganti otomatis jadi `next/image` via opsi `replace` di parser (pola sudah ada di `Work15.tsx`, ditiru di komponen lain bila perlu).
- Interaksi client-side (modal, reveal, dark mode, i18n, magnetic button, ripple) ditangani **satu script global** `public/main.js` yang dimuat lazy-onload di `layout.tsx`. Tidak ada state React per komponen.

### 1.2 Alur data
```
layout.tsx (font + metadata)
  └─ page.tsx (urut render komponen)
      └─ app/components/*.tsx (string HTML → parse)
      └─ public/main.js (perilaku dinamis, i18n, theme, modal)
      └─ app/globals.css (token + gaya per komponen + dark mode)
```

### 1.3 Konvensi penamaan
- Komponen diberi nama `<Isi><Nomor urutan>.tsx` (mis. `Hero10.tsx`). Nomor urutan dipakai sebagai **anchor di HTML** lewat atribut `data-key` dan `id`.
- Atribut `data-key` pada elemen teks = kunci terjemahan ID/EN di `main.js`.

## 2. Token Design

### 2.1 Warna (CSS variables di `:root`)
| Token | Light | Dark |
|-------|-------|------|
| `--bg` | `#fafaf9` | `#0c0a09` |
| `--bg-soft` | `#f5f5f4` | `#1c1917` |
| `--surface` | `#ffffff` | `#1c1917` |
| `--text` | `#1c1917` | `#fafaf9` |
| `--text-muted` | `#78716c` | `#a8a29e` |
| `--text-light` | `#a8a29e` | `#78716c` |
| `--accent` | `#c05c54` | `#e79a94` |
| `--accent-hover` | `#a84a44` | `#f2bcb8` |
| `--accent-soft` | `#f9e4e1` | `#3a2220` |
| `--border` | `#e7e5e4` | `#292524` |
| `--neo-green` | `#f9e4e1` | *—* |
| `--neo-orange` | `#c05c54` | *—* |
| `--neo-purple` | `#e7e5e4` | *—* |

Dark mode dipicu oleh class `html.dark`; token di-override di bawah `html.dark`. Transisi warna `0.3s ease` di `html` dan `body`.

### 2.2 Tipografi
| Token | Font | Penggunaan |
|-------|------|------------|
| `--font-head` | Geist Sans | Heading section |
| `--font-body` | Geist Sans | Teks utama |
| `--font-mono` | Geist Mono | Label, index, kode |
| `--font-serif` | Georgia / Playfair Display | Elemen serif dekoratif (`slop-serif`) |
| Coolvetica | Coolvetica-Rg.otf (lokal) | Aksen khas |
| VT323 | VT323 (Google) | Elemen mono/terminal |
| Space Grotesk | Space Grotesk | Neo body / heading alternatif |
| Space Mono | Space Mono | Neo mono |

### 2.3 Spasi & radius
| Token | Nilai |
|-------|-------|
| `--radius-sm` | 12px |
| `--radius` | 32px |
| `--radius-lg` | 40px |
| `--shadow` | layered 0 1px 3px + 0 8px 30px (subtle) |
| `--shadow-hover` | 0 20px 40px -15px + 0 8px 30px |
| `--shadow-accent` | 0 8px 30px rgba(accent, 0.25) |
| `--cursor-size` | 20px |

### 2.4 Layout
- `--wrap` (`.wrap`): container max-width, padding horizontal responsif.
- `sec-header`: label + judul + subtitle per section; varian `.center` untuk rata tengah.
- Grid: `work-grid`, `services-grid` — auto-fit, min-width per kartu, gap 24–32px.
- Breakpoint: `@media (max-width: 900px)` untuk mobile controls; `@media (pointer: coarse)` untuk kursor follower.

## 4. Komponen Inti

### 4.0 Blog (ditambah 2026-09)
- Halaman list: `app/blog/page.tsx` — baca semua `.md` di `content/blog/`, filter `draft: false`, urut tanggal desc, tampilkan sebagai grid kartu (judul, tanggal, tags, excerpt).
- Halaman detail: `app/blog/[slug]/page.tsx` — server component, ambil `params.slug`, render via `Markdown.tsx` (react-markdown + remark-gfm + rehype-slug + rehype-highlight).
- Layout: `app/blog/layout.tsx` — import `blog.css` (semua gaya `.blog-*` dan `.markdown-body`).
- `generateStaticParams` + `generateMetadata` di halaman detail → build-time, SEO per essay.
- Gambar di dalam essay: `![alt](path)` → render `<img>` biasa (bukan next/image, karena di dalam markdown body), styling di `.markdown-body img` (width 100%, radius, border).
- Code block: `rehype-highlight` + import `highlight.js/styles/github-dark.css` langsung di `Markdown.tsx`.
- CSS blog ada di file terpisah `app/blog/blog.css`, bukan di `globals.css` — biar globals.css tidak tambah panjang.
- Navbar & MobileNav: tab "Blog" link ke `/blog` (full page navigation, bukan anchor scroll).
- i18n: `data-key="nav_blog"` di Navbar8/MobileNav9, terjemahan di `main.js` (id: "Blog", en: "Blog").

### 4.1 Navbar / MobileNav
- Navbar desktop: logo, links anchor, theme toggle, switcher ID/EN, CTA.
- MobileNav: hamburger + `.mobile-controls` (theme + lang) yang tampil di bawah 900px.
- Sticky/fixed, background semi-transparan mengikuti tema (`rgba(..., 0.82)` dark, `rgba(..., 0.97)` mobile).

### 4.2 Hero
- Blobs dekoratif + noise + partikel mengambang (CSS animation).
- Judul `slop-hero`: baris terpisah, `.slop-serif` untuk kata serbaguna, aksen SVG (spark + flame).
- Role: typewriter (`#typewriterText`), deskripsi singkat, CTA magnetic + ripple.
- Socials pill: WhatsApp, Email, LinkedIn, GitHub (label rapi di dalam pill).
- Aksen dekoratif: `hand.png` + `rocket.png` (mengambang, tidak interaktif).

### 4.3 Work (Proyek)
- Kartu grid `work-card`: index, tag, gambar (zoom on hover), deskripsi, tautan aksi.
- 2 kartu utama (V Project, CBT) memicu modal via `data-onclick="openModal(...)"`.
- 2 kartu (Hermes, Data Siswa) langsung buka `wa.me` dengan pesan preset.

### 4.4 Modal
- `Modalvproject6` dan `Modalcbt7`: overlay gelap, panel konten, close via klik luar / X.
- Kontrol: `openModal(id)` / `closeModal(id)` di `main.js`.

### 4.5 Layanan & Skill
- `service-card`: icon glow + index + judul + deskripsi.
- `skill-item`: label + progress bar animasi saat reveal.

### 4.6 Testimoni
- `testimonial-card`: glassmorph gradient background + gambar rating (`rating.png`).

### 4.7 Kontak & Footer
- `Floatwa4`: tombol WA mengambang kanan-bawah, animasi shadow pulse.
- `BackToTop5`: tombol ke atas, muncul setelah scroll tertentu.
- `Footer24`: socials + copyright.

## 5. Interaksi & Perilaku

### 5.1 Scroll Reveal
- Elemen `.reveal`: awal opacity 0 + translateY, saat masuk viewport via IntersectionObserver → class `in` (opacity 1, translate 0, transisi 0.6–0.8s ease).

### 5.2 Magnetic & Ripple Button
- `magnetic-btn`: posisi button mengikuti kursor dalam radius tertentu.
- `ripple-btn`: generate span ripple saat klik, scale + fade out.

### 5.3 Cursor Follower
- Dot 20px accent, `mix-blend-mode: difference`, skala naik saat hover elemen interaktif (50px). Tidak tampil di perangkat touchscreen.

### 5.4 Dark Mode
- Toggle di navbar (ikon sun/moon) + mobile controls.
- State tersimpan di `localStorage`; default mengikuti preferensi sistem jika belum pernah di-set.
- Semua token warna auto-follow via `html.dark`.

### 5.5 i18n
- Semua teks ber-`data-key` diambil dari objek terjemahan di `main.js`.
- Switcher ID/EN (toggle desktop + mobile), persist per pilihan.

## 6. Responsif

| Rentang | Perilaku |
|---------|----------|
| Desktop (> 900px) | Nav desktop, grid multi-kolom, cursor follower aktif |
| Mobile (≤ 900px) | MobileNav + mobile controls, grid 1 kolom, cursor follower off |

- Tanpa horizontal scroll di semua ukuran.
- Gambar responsif via `next/image` (width/height atribut + `style: 100% auto`).

## 7. SEO & Metadata
- `lang="id"`.
- Metadata: title, description, OG + Twitter card, og-image (`/og-image.jpg`), locale `id_ID`.
- Favicon: SVG inline (huruf "Y", Georgia).

## 8. Kinerja
- Font: `next/font` (self-hosted, swap) + Coolvetica lokal.
- Gambar: `next/image` dengan width/height eksplisit + `loading="lazy"`.
- Aset berat (main.js): `lazyOnload`.
- Target: LCP < 2.5s, INP < 200ms.

## 9. Batasan Teknis (dari AGENTS.md)
- **Next.js 16 punya breaking changes** — selalu cek `node_modules/next/dist/docs/` sebelum mengubah kode framework (API, konvensi, struktur file bisa berbeda dari versi yang dikenal).
- Pola string HTML + parser harus tetap dipakai untuk menambah section baru di homepage, bukan JSX per section. **Pengecualian: halaman blog** (`/blog` dan `/blog/[slug]`) memang pakai JSX/TSX biasa karena struktur dinamis (slug, metadata per post) — ini disengaja, bukan pelanggaran pola.
- Konten blog: file `.md` di `content/blog/` dengan frontmatter (title, date, description, tags, draft). Jangan edit file ini tanpa konfirmasi.

## 10. Penamaan & File
- Nama section mengikuti urutan render di `page.tsx`.
- Aset gambar di `public/`; font lokal di `public/fonts/`.
- Jangan membuat file komponen baru di luar pola `app/components/` + string HTML.
