---
title: "Kenapa Saya Pilih Hermes Agent, dan Gimana Setup-nya (Dari yang Gagal Sampai Jalan)"
date: "2026-09-15"
description: "Cerita kenapa saya berhenti nulis script otomasi satu per satu, dan proses setup Hermes Agent — termasuk bagian yang bikin stuck dulu dan baru kelar setelah saya ubah cara nulisnya."
tags: ["Hermes", "Otomasi", "AI Agent"]
draft: false
---

Saya pakai Hermes Agent sekarang buat sebagian besar pekerjaan otomasi — deploy, monitoring server, cek log, bikin report, sampai nulis konten. Tapi jujur, awalnya saya agak ragu. Selama ini semua otomasi saya jalanin dengan cara lama: nulis script cron, webhook, atau kalau lagi males, ya manual aja tiap hari.

## Kenapa saya mulai cari alternatif

Masalah lama itu bukan sekadar "cron ribet". Cron emang bisa diandalkan, iya. Tapi begitu ada yang nyimpang — misalnya response API-nya ganti format, atau ada error di tengah jalan — saya harus balik nulis parsing error, retry logic, dan notifikasinya. Tiap nambah satu task baru, saya bikin file script baru. Setelah beberapa bulan, saya punya lusinan file `.sh` dan `.py` yang masing-masing kecil, tapi nggak saling ngerti.

Yang paling bikin pusing bukan nulis scriptnya, tapi **menjaganya**. Tiap kali ada perubahan kecil — ganti domain, tambah endpoint, ubah format response — saya harus ngedit, testing, deploy ulang. Tiap kali. Itu yang bikin saya akhirnya nanya: kalau AI sekarang bisa nulis code dan ngerti context, kenapa saya masih nulis script satu per satu kayak gini?

## Kenapa Hermes, bukan yang lain

Saya coba beberapa pendekatan AI agent sebelumnya sebelum pake ini. Ada yang pake framework berat, ada yang tinggal nyalin-paste dari template, ada juga yang harus ngerunning di server khusus. Hermes cocok buat saya karena beberapa hal yang kebetulan saya butuhkan.

**Dia jalan di mesin saya, bukan di tempat lain.** Otomasi yang saya punya butuh akses langsung ke file lokal, database lokal, terminal. Kalau agent-nya jalan di cloud terpisah, semua itu jadi ribet banget. Hermes bisa nyambung langsung ke environment yang sudah ada, jadi nggak perlu bikin setup terpisah.

**Memory-nya persisten antar session.** Ini yang penting. Task otomasi sering nyambung — kemarin saya cek server A, hari ini harus ngecek lagi dengan konteks yang sama. Kalau tiap kali mulai dari nol, saya harus ulang konteksnya, yang bikin prompt jadi panjang dan biayanya naik.

**Skill-nya modular.** Hermes bisa nambah skill baru yang cuma di-load saat dibutuhkan. Kalau tugas hari ini tentang deploy PHP native, skill PHP-nya muncul. Kalau besok tentang nulis blog, skill-nya beda. Nggak perlu satu prompt raksasa yang ngadung semua.

**Ada guardrail yang bisa diatur.** Otomasi yang ngejalanin perintah di server production itu berisiko, dan saya nggak mau dia asal jalanin perintah destruktif. Di Hermes, saya bisa set: untuk task low-risk (baca log, cek status), biarin jalan sendiri. Untuk task high-risk (patch database production), minta konfirmasi dulu. Yang terakhir ini yang bikin dia layak dipakai di environment yang beneran ada datanya, bukan cuma main-main.

## Setup-nya

Bagian instalasi-nya sendiri cepet. Yang sering bikin orang stuck justru bukan instalasinya, tapi **bagian setup skill dan konteks** — kalau kamu langsung jalanin tanpa kasih konteks apa-apa, dia bakal ngerasa di tempat asing, dan hasilnya bakal ngawur.

Yang saya lakuin:

1. **Tulis `AGENTS.md`** di folder project. Isinya pendek: apa project-nya, konvensi yang dipakai, folder mana yang boleh disentuh, mana yang nggak.
2. **Bikin skill per domain** — satu skill untuk "deploy PHP native ke Hostinger", satu lagi untuk "manage Telegram bot". Tiap skill ada instruksi, contoh, dan pitfall yang pernah saya nemu.
3. **Set memory** untuk hal-hal yang harus selalu diingat: kredensial disimpan di mana, struktur folder gimana, naming convention apa.

Yang terakhir, skill ini yang bikin beda dari chatbot biasa: **Hermes bisa nambah skill baru dari pengalaman yang sudah terjadi.** Kalau suatu hari dia nemu cara deploy yang lebih baik dari yang ada di skill sekarang, skill-nya bisa di-update, dan besok dia langsung pakai cara baru itu tanpa perlu diinget-inget lagi.

## Yang bikin stuck dulu

Jujur, setup awal saya nggak langsung kelar. Pertama kali saya coba, prompt saya terlalu umum — kayak "perbaiki website-ku". Hasilnya dia ngerasa bingung mau mulai dari mana, karena prompt-nya terlalu luas.

Solusinya: **nulis prompt yang spesifik.** "Perbaiki form kontak yang error 404 di page /kontak" itu jauh lebih baik daripada "perbaiki form kontak". Tiap task yang saya kasih sekarang selalu ada konteks yang jelas: apa yang salah, di mana, dan apa yang harusnya kejadian.

Kedua, saya sempat lupa bikin log. Tiap kali dia jalanin perintah di server, saya minta log hasilnya, bukan karena nggak percaya, tapi karena kalau ada yang nyimpang, log itu yang saya pake buat nge-debug. Sekarang log udah jadi kebiasaan, dan justru sering lebih berguna daripada jawaban langsungnya.

Ketiga, dan ini penting: **jangan biarin dia kerja di production tanpa staging dulu.** Kalau ada perubahan yang risky, selalu test di environment local atau staging sebelum disentuh. Aturan ini saya tulis di `AGENTS.md` supaya dia juga inget, bukan cuma saya yang inget.

## Penutup

Hermes bukan pengganti semua skill. Saya tetap nulis code manual kadang, dan tetap cek manual sebelum deploy ke production. Tapi untuk pekerjaan otomasi yang berulang — monitoring, cron, parsing log, bikin report — dia udah ngilangin sebagian besar beban itu.

Kalau kamu mau coba, saran saya mulai dari task kecil yang reversible dulu, baru nambah complexity setelah kamu ngerti di bagian mana dia bisa diandalkan dan di bagian mana masih harus diawasi.
