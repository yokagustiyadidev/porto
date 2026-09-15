# PRD — Portofolio Yoka Gustiyadi

## 1. Ringkasan
Website portofolio one-page untuk Yoka Gustiyadi, menampilkan profil, proyek, layanan, dan kanal kontak. Dibangun dengan Next.js 16 + React 19, satu halaman utama (`/`) berisi komponen-komponen terpisah, CSS global bertoken, dark mode, dan dukungan bilingual (ID/EN).

## 2. Tujuan
- Menampilkan kredensial dan karya nyata secara profesional.
- Memudahkan pengunjung menghubungi via WhatsApp, email, atau LinkedIn.
- Showcase proyek: Sistem CBT, V Project (WhatsApp AI), Hermes Agent, Sistem Data Siswa.
- Menjadi pintu masuk untuk penawaran jasa (web, CBT, WhatsApp AI, portofolio).

## 3. Pengguna
- Calon klien / pemberi kerja / kolaborator.
- Pengunjung umum yang mencari portofolio Yoka.

## 4. Cakupan

### 4.1 Halaman
- `/` — satu-satunya rute. One-page dengan anchor nav: `#hero`, `#work`, `#services`, `#skills`, `#testimoni`, `#kontak`, `#footer`.

### 4.2 Komponen (urutan render)
| # | Komponen | Fungsi |
|---|----------|--------|
| 1 | SplashScreen | Overlay saat load pertama |
| 2 | Preloader1 | Loading state sebelum konten tampil |
| 3 | ScrollProgress2 | Progress bar horizontal saat scroll |
| 4 | CursorFollower3 | Dot accent mengikuti kursor (desktop) |
| 5 | Floatwa4 | Tombol WhatsApp mengambang |
| 6 | BackToTop5 | Tombol kembali ke atas |
| 7 | Modalvproject6 | Modal detail proyek V Project |
| 8 | Modalcbt7 | Modal detail proyek CBT |
| 9 | Navbar8 | Navigasi desktop + toggle dark mode + switcher ID/EN |
| 10 | MobileNav9 | Navigasi mobile |
| 11 | Hero10 | Judul utama, role, deskripsi singkat, CTA, socials |
| 12 | About11 | Perkenalan + tautan CV |
| 13 | Casestudy12 | Study kasus singkat |
| 14 | Pengalaman13 | Timeline pengalaman kerja |
| 15 | Statsmarquee14 | Angka statistik berjalan |
| 16 | Work15 | Grid proyek terpilih + trigger modal |
| 17 | Services16 | Daftar layanan yang ditawarkan |
| 18 | Democbt17 | Demo fitur CBT (interaktif) |
| 19 | Vproject18 | Detail V Project |
| 20 | Fiturcbt19 | Fitur-fitur CBT |
| 21 | Testimoni20 | Testimoni klien |
| 22 | Sertifikat21 | Daftar sertifikasi |
| 23 | Skills22 | Skill dengan progress bar |
| 24 | Footer24 | Kontak + socials + copyright |
| 25 | ThankYou25 | Halaman status sukses form kontak (kalau ada) |

### 4.3 Interaksi
- Klik kartu proyek V Project / CBT → buka modal (`openModal` di `main.js`).
- Tombol magnetic + ripple pada CTA hero.
- Dark mode: persist di `localStorage`, toggle di navbar.
- Bahasa: switcher ID/EN, semua teks memakai atribut `data-key` + objek terjemahan di `main.js`.
- Scroll reveal: elemen `.reveal` muncul saat masuk viewport (IntersectionObserver di `main.js`).

### 4.4 Kontak
- WhatsApp: `wa.me/62882016594700`
- Email: `yokagustiyadi.dev@gmail.com`
- LinkedIn: `linkedin.com/in/yoka-gustiyadi`
- GitHub: `github.com/yokagustiyadidev`

## 5. Non-Goal
- Tidak ada backend, database, atau autentikasi.
- Tidak ada form kontak (kontak via WhatsApp/email langsung).

## 5.1 Blog (ditambah 2026-09)
- Rute: `/blog` (halaman daftar) dan `/blog/[slug]` (halaman detail essay).
- Konten: file Markdown dengan frontmatter di `content/blog/`.
- Render: `gray-matter` (parse frontmatter) + `react-markdown` + `remark-gfm` (tabel, list) + `rehype-slug` (anchor heading) + `rehype-highlight` (syntax highlighting).
- Draft mechanism: `draft: true` di frontmatter → tidak muncul di listing.
- Gambar: bisa dipakai di dalam essay via `![caption](path)`, dirender dengan styling `.markdown-body img`.
- Tiap halaman detail dapat `generateMetadata` sendiri (SEO per essay).

## 6. Metrik Sukses
- Lighthouse performance > 90.
- Mobile responsive tanpa horizontal scroll.
- Semua anchor nav reachable tanpa error.
- Waktu interaktif < 2.5 detik pada koneksi 4G.

## 7. Ketergantungan
- `next@16.2.10`, `react@19.2.4`, `html-react-parser`, `sharp` (dev, image optimization), `gray-matter`, `react-markdown`, `remark-gfm`, `rehype-slug`, `rehype-highlight`.
- Font: Geist, Manrope, Playfair Display, VT323, Space Grotesk/Space Mono (Google Fonts via `next/font`), Coolvetica (lokal, `public/fonts`).
- Gambar & aset statis di `public/`.

## 8. Catatan Teknis
- Komponen memakai pola: HTML string → `html-react-parser`, lalu `next/image` di-substitusikan via `replace`. Pola ini harus dipertahankan untuk konsistensi.
- `AGENTS.md` mewajibkan membaca guide Next.js di `node_modules/next/dist/docs/` sebelum mengubah perilaku framework.
- Repo: `git`, branch `main`, push langsung ke `origin/main`.
