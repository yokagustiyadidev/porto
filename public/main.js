
      // Image loading debug + fix
      window.addEventListener(
        "error",
        function (e) {
          if (e.target.tagName === "IMG") {
            // Silenced in production — only fires for genuine load failures
          }
        },
        true,
      );

      // ════════════════════════════════════════════════════════════
      // ENTERPRISE PERFORMANCE CORE
      // All optimizations: GPU-composited transforms, cached rects,
      // consolidated scroll RAF loop, event delegation.
      // ════════════════════════════════════════════════════════════

      // ── CURSOR FOLLOWER (GPU composited via transform) ───────────
      (function initCursor() {
        const cursor = document.getElementById("cursorFollower");
        if (!cursor || ("ontouchstart" in window)) return;

        // Use transform instead of top/left — forces GPU layer, no layout cost
        cursor.style.top = "0px";
        cursor.style.left = "0px";

        let mouseX = 0, mouseY = 0;
        let currentX = 0, currentY = 0;
        let rafId = null;

        document.addEventListener("mousemove", (e) => {
          mouseX = e.clientX;
          mouseY = e.clientY;
          if (!cursor.classList.contains("visible")) cursor.classList.add("visible");
        }, { passive: true });

        document.addEventListener("mouseleave", () => cursor.classList.remove("visible"), { passive: true });

        function animateCursor() {
          currentX += (mouseX - currentX) * 0.12;
          currentY += (mouseY - currentY) * 0.12;
          cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
          rafId = requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Event delegation — one listener instead of N*2 listeners
        const HOVER_SELECTOR = "a, button, .work-card, .service-card, .feature-card, .testimonial-card, .skill-item, .cert-card, .contact-card";
        document.body.addEventListener("mouseenter", (e) => {
          if (e.target.closest(HOVER_SELECTOR)) cursor.classList.add("hover");
        }, true);
        document.body.addEventListener("mouseleave", (e) => {
          if (e.target.closest(HOVER_SELECTOR)) cursor.classList.remove("hover");
        }, true);
      })();

      // ── MAGNETIC BUTTONS (cached rect on enter) ─────────────────
      (function initMagnetic() {
        document.querySelectorAll(".magnetic-btn").forEach((btn) => {
          let rect = null;
          // Cache rect only once when mouse enters, not every pixel of movement
          btn.addEventListener("mouseenter", () => { rect = btn.getBoundingClientRect(); });
          btn.addEventListener("mousemove", (e) => {
            if (!rect) return;
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
          });
          btn.addEventListener("mouseleave", () => {
            rect = null;
            btn.style.transform = "";
          });
        });
      })();

      // ── RIPPLE EFFECT (cleanup via transitionend) ───────────────
      (function initRipple() {
        document.querySelectorAll(".ripple-btn").forEach((btn) => {
          btn.addEventListener("click", function (e) {
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement("span");
            ripple.className = "ripple";
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + "px";
            ripple.style.left = e.clientX - rect.left - size / 2 + "px";
            ripple.style.top = e.clientY - rect.top - size / 2 + "px";
            this.appendChild(ripple);
            // Use transitionend instead of arbitrary setTimeout — no memory leak
            ripple.addEventListener("transitionend", () => ripple.remove(), { once: true });
            // Fallback if transition never fires (e.g. reduced-motion)
            setTimeout(() => ripple.isConnected && ripple.remove(), 700);
          });
        });
      })();

      // ── 3D TILT CARDS (cached rect on enter) ───────────────────
      (function initTilt() {
        document.querySelectorAll(
          ".work-card, .service-card, .feature-card, .testimonial-card, .skill-item, .cert-card, .contact-card"
        ).forEach((card) => {
          let rect = null;
          card.addEventListener("mouseenter", () => { rect = card.getBoundingClientRect(); });
          card.addEventListener("mousemove", (e) => {
            if (!rect) return;
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.setProperty("--rotateX", -y * 8 + "deg");
            card.style.setProperty("--rotateY", x * 8 + "deg");
          });
          card.addEventListener("mouseleave", () => {
            rect = null;
            card.style.setProperty("--rotateX", "0deg");
            card.style.setProperty("--rotateY", "0deg");
          });
        });
      })();

      // ── TYPEWRITER EFFECT ──────────────────────────────────────
      function initTypewriter() {
        const el = document.getElementById("typewriterText");
        if (!el) return;
        const text = el.textContent;
        if (!text) return;
        el.textContent = "";

        let idx = 0;
        function type() {
          if (idx < text.length) {
            el.textContent += text[idx];
            idx++;
            setTimeout(type, 40 + Math.random() * 30);
          }
        }
        setTimeout(type, 500);
      }

      // ── SMOOTH SCROLL ──────────────────────────────────────────
      (function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          });
        });
      })();

      // ── TRANSLATIONS ───────────────────────────────────────────
      const translations = {
        id: {
          nav_about: "Ikhtisar",
          nav_work: "Proyek",
          nav_services: "Layanan",
          nav_contact: "Hubungi",
          hero_eyebrow: "Available for Collaboration",
          hero_role: "Staff Administrasi & IT Support",
          hero_desc:
            "Membangun arsitektur digital yang mengubah alur kerja manual menjadi ekosistem otonom — dari sistem ujian terintegrasi AI hingga otomasi bisnis berbasis WhatsApp.",
          hero_cta: "Lihat Proyek",
          about_title:
            "Mengubah alur kerja manual menjadi <em>ekosistem digital</em>.",
          about_desc:
            "Berlatar belakang pendidikan teknis SMK, saya berkembang menjadi pengembang yang praktis dan cepat beradaptasi. Fokus utama saya adalah mentransformasi proses administrasi dan ujian konvensional menjadi sistem digital yang aman, efisien, dan berkelanjutan.",
          about_resume: "Lihat CV",
          about_location_label: "Lokasi",
          about_location: "Bandung, Indonesia",
          about_focus_label: "Fokus",
          about_focus: "Teknis & AI Config",
          about_contact_label: "Kontak",
          about_contact: "0882-0165-94700",
          case_label: "Studi Kasus",
          case_title: "Dari <em>Masalah</em> ke <em>Solusi</em>",
          case_subtitle:
            "Transformasi proses ujian di SDI Abu Seno — dari manual menuju otomasi penuh.",
          case_problem: "Masalah",
          case_problem_desc:
            "Guru menginput soal dan rekap nilai secara manual. Ujian dilakukan di Google Forms tanpa pengacakan soal, tanpa anti-cheat, dan tanpa auto-save — memakan waktu berjam-jam untuk persiapan dan penilaian.",
          case_solution: "Solusi",
          case_solution_desc:
            "Saya membangun sistem CBT terintegrasi dengan AI Question Generator, RBAC 4-level, anti-cheat real-time, pengacakan soal & jawaban, auto-save per klik, rekap nilai otomatis, dan dashboard admin terpusat.",
          case_result: "Hasil",
          case_result_desc:
            "Sistem digunakan di SDI Abu Seno sejak awal 2026. Waktu persiapan ujian hingga penilaian berkurang secara signifikan. Guru fokus mengajar, siswa ujian dengan nyaman, dan data tersimpan rapi otomatis.",
          exp_label: "Karier",
          exp_title: "Pengalaman <em>Bekerja</em>",
          exp_role_admin: "Staff Administrasi",
          exp_role_freelance: "Pekerjaan Paruh Waktu",
          exp_role_operator: "Operator Produksi",
          exp_role_admin2: "Administrasi",
          exp_role_polish: "Poles Mobil",
          exp_year_1: "2024 — Sekarang",
          stat_years: "Tahun Pengalaman",
          stat_years_desc: "Tech & administrasi digital",
          stat_services: "Layanan Digital",
          stat_services_desc: "Siap dibangun untuk Anda",
          stat_bot: "Bot Aktif",
          stat_bot_desc: "WhatsApp AI tanpa henti",
          stat_certs: "Sertifikasi",
          stat_certs_desc: "Diterbitkan Anthropic",
          work_label: "Portofolio",
          work_title: "Proyek <em>Terpilih</em>",
          work_subtitle:
            "Karya nyata yang telah dibangun, digunakan, dan terus dikembangkan untuk memecahkan masalah operasional.",
          work_vproject_desc:
            "Sistem manajemen servis dengan AI Assistant via WhatsApp 24/7. Mengotomasi pencatatan keluhan, status perbaikan, dan generate invoice tanpa intervensi manual.",
          work_visit: "Kunjungi website",
          work_cbt_title: "Sistem CBT Terintegrasi",
          work_cbt_desc:
            "Platform ujian digital end-to-end untuk SDI Abu Seno. Ditenagai AI pembuat soal, pengacakan pintar, anti-cheat real-time, dan rekap nilai terintegrasi.",
          work_docs: "Lihat dokumentasi",
          services_label: "Layanan",
          services_title: "Yang Bisa Saya <em>Lakukan</em>",
          services_subtitle:
            "Solusi digital yang saya sediakan untuk memenuhi kebutuhan teknologi organisasi maupun personal.",
          svc_web: "Web & Dashboard",
          svc_web_desc:
            "Website profesional dan dashboard administrasi dengan desain modern, responsif, dan performa tinggi untuk kebutuhan bisnis maupun personal.",
          svc_cbt: "Sistem CBT Sekolah",
          svc_cbt_desc:
            "Platform ujian komputer berbasis web lengkap dengan AI, pengacakan soal, anti-cheat, data siswa, dan rekap nilai terintegrasi.",
          svc_wa: "WhatsApp AI 24/7",
          svc_wa_desc:
            "Bot WhatsApp pintar dengan AI persona, state management, dan eskalasi otomatis ke admin manusia saat dibutuhkan.",
          svc_portfolio: "Portofolio Online",
          svc_portfolio_desc:
            "Portofolio digital elegan untuk menampilkan karya, pengalaman, dan keahlian dengan tampilan premium yang meyakinkan.",
          svc_invite: "Undangan Digital",
          svc_invite_desc:
            "Undangan pernikahan digital interaktif dengan desain estetis, countdown timer, galeri foto, RSVP, dan integrasi peta.",
          demo_label: "Live Demo",
          demo_title: "Sistem <em>CBT</em>",
          demo_subtitle:
            "Jelajahi antarmuka ujian berbasis komputer secara langsung melalui demo interaktif.",
          demo_cta: "Buka Demo CBT ↗",
          vproject_label: "Fitur",
          vproject_title: "V Project — <em>Ekosistem Bisnis</em>",
          vproject_subtitle:
            "Solusi terintegrasi untuk manajemen servis dan otomasi pelanggan.",
          vproject_cs: "Customer Service Otomatis",
          vproject_cs_desc:
            "Layanan pelanggan 24/7 via WhatsApp. Pertanyaan umum, status servis, dan pencatatan keluhan ditangani AI secara real-time.",
          vproject_ai: "AI Persona & State",
          vproject_ai_desc:
            "Bot memiliki persona dan alur percakapan terstruktur. State management memastikan respons kontekstual dan konsisten.",
          vproject_invoice: "Invoice Otonom",
          vproject_invoice_desc:
            "Invoice dihasilkan otomatis setelah servis selesai berdasarkan data pekerjaan yang tercatat — tanpa input manual.",
          vproject_lead: "Lead Logging",
          vproject_lead_desc:
            "Setiap calon pelanggan via WhatsApp tercatat otomatis ke spreadsheet — nama, nomor, kebutuhan, dan waktu kontak.",
          vproject_dashboard: "Web Dashboard",
          vproject_dashboard_desc:
            "Antarmuka terpusat untuk memantau status perbaikan, riwayat pelanggan, dan performa bisnis. Bersih dan responsif.",
          vproject_escalation: "Eskalasi Cerdas",
          vproject_escalation_desc:
            "Ketika AI mendeteksi pertanyaan di luar kemampuannya, percakapan otomatis dieskalasi ke admin dengan transisi mulus.",
          cbt_label: "Fitur",
          cbt_title: "CBT <em>Lengkap</em>",
          cbt_subtitle:
            "Platform ujian digital yang dirancang untuk keandalan, keamanan, dan kemudahan pengguna.",
          cbt_ai: "AI Question Generator",
          cbt_ai_desc:
            "Guru tentukan topik dan jumlah soal — AI langsung menghasilkan bank soal pilihan ganda siap pakai.",
          cbt_import: "Import Massal",
          cbt_import_desc:
            "Upload hingga 40 soal via Excel. Mendukung Unicode penuh — Arab, Sunda, Mandarin — tanpa encoding error.",
          cbt_shuffle: "Pengacakan Cerdas",
          cbt_shuffle_desc:
            "Urutan soal dan pilihan jawaban diacak per siswa, namun sistem tetap mengetahui kunci jawaban yang benar.",
          cbt_autosave: "Auto-Save & Navigasi",
          cbt_autosave_desc:
            "Jawaban tersimpan otomatis. Tampilan satu soal per halaman dengan daftar navigasi untuk review ulang.",
          cbt_learning: "Pojok Belajar",
          cbt_learning_desc:
            "Materi pelajaran dengan video YouTube terintegrasi. Siswa menonton langsung di dalam platform.",
          cbt_rekap: "Rekap Nilai Otomatis",
          cbt_rekap_desc:
            "Nilai dikalkulasi mutlak dan otomatis. Rekap per ujian dan profil nilai seluruh mata pelajaran.",
          testi_label: "Testimoni",
          testi_title: "Apa Kata <em>Pengguna</em>",
          testi_subtitle:
            "Pengalaman para pengajar SDI Abu Seno dalam menggunakan Sistem CBT.",
          testi_1:
            "Sistem CBT ini sangat membantu proses ujian di sekolah kami. Pengacakan soal dan fitur anti-cheat membuat ujian lebih adil dan terjamin keamanannya.",
          testi_role_1: "Guru SDI Abu Seno",
          testi_2:
            "AI Question Generator sangat menghemat waktu saya dalam menyusun soal. Cukup tentukan topik, soal langsung siap digunakan. Pojok Belajar juga sangat membantu siswa.",
          testi_role_2: "Guru SDI Abu Seno",
          testi_3:
            "Antarmuka yang bersih dan intuitif membuat siswa mudah beradaptasi. Auto-save memastikan tidak ada jawaban yang hilang. Efisiensi ujian meningkat secara signifikan.",
          testi_role_3: "Guru SDI Abu Seno",
          cert_label: "Sertifikasi",
          cert_title: "Pengakuan <em>Resmi</em>",
          cert_subtitle:
            "Kompetensi yang tervalidasi melalui program pembelajaran berkelanjutan.",
          skills_label: "Keahlian",
          skills_title: "Skill & <em>Teknologi</em>",
          skills_subtitle: "Kompetensi teknis untuk solusi digital end-to-end.",
          skills_desc:
            "Saya menguasai Frontend Development dengan Tailwind CSS dan Vanilla JS, AI & Prompt Engineering untuk integrasi OpenAI/Gemini/Groq, Sistem Keamanan RBAC 4-level, Node.js & Otomasi untuk bot WhatsApp, serta IT Support & Jaringan untuk diagnosis infrastruktur.",
          skill_frontend: "Frontend",
          skill_frontend_desc: "Tailwind CSS, Vanilla JS",
          skill_ai: "AI & Prompt",
          skill_ai_desc: "OpenAI, Gemini, Groq",
          skill_security: "Keamanan",
          skill_security_desc: "RBAC 4 level, anti-cheat",
          skill_ms: "Microsoft",
          skill_ms_desc: "Excel, XLSX automation",
          skill_node: "Node.js",
          skill_node_desc: "Baileys, bot WhatsApp",
          skill_it: "IT Support",
          skill_it_desc: "LAN, remote, diagnosis",
          contact_label: "Kontak",
          contact_title: "Mari <em>Berdiskusi</em>",
          contact_subtitle:
            "Tersedia untuk proyek, kolaborasi, dan konsultasi teknis.",
          contact_wa_desc: "Respons cepat untuk diskusi proyek.",
          contact_email_desc: "Untuk penawaran dan detail formal.",
          footer: "Dirancang oleh Yoka Gustiyadi · 2026",
        },
        en: {
          nav_about: "Overview",
          nav_work: "Projects",
          nav_services: "Services",
          nav_contact: "Contact",
          hero_eyebrow: "Available for Collaboration",
          hero_role: "Admin Staff & IT Support",
          hero_desc:
            "Building digital architecture that transforms manual workflows into autonomous ecosystems — from AI-integrated exam systems to WhatsApp-based business automation.",
          hero_cta: "View Projects",
          about_title:
            "Transforming manual workflows into <em>digital ecosystems</em>.",
          about_desc:
            "With a technical vocational education background, I have grown into a practical and adaptable developer. My main focus is transforming conventional administration and exam processes into secure, efficient, and sustainable digital systems.",
          about_resume: "Download Resume",
          about_location_label: "Location",
          about_location: "Bandung, Indonesia",
          about_focus_label: "Focus",
          about_focus: "Technical & AI Config",
          about_contact_label: "Contact",
          about_contact: "0882-0165-94700",
          case_label: "Case Study",
          case_title: "From <em>Problem</em> to <em>Solution</em>",
          case_subtitle:
            "Transformation of exam processes at SDI Abu Seno — from manual to full automation.",
          case_problem: "Problem",
          case_problem_desc:
            "Teachers manually input questions and grade records. Exams were conducted on Google Forms without question shuffling, without anti-cheat, and without auto-save — taking hours for preparation and grading.",
          case_solution: "Solution",
          case_solution_desc:
            "I built an integrated CBT system with AI Question Generator, 4-level RBAC, real-time anti-cheat, question & answer shuffling, per-click auto-save, automatic grade recap, and centralized admin dashboard.",
          case_result: "Result",
          case_result_desc:
            "The system has been used at SDI Abu Seno since early 2026. Exam preparation to grading time has been significantly reduced. Teachers focus on teaching, students take exams comfortably, and data is neatly stored automatically.",
          exp_label: "Career",
          exp_title: "Work <em>Experience</em>",
          exp_role_admin: "Admin Staff",
          exp_role_freelance: "Part-time Work",
          exp_role_operator: "Production Operator",
          exp_role_admin2: "Administration",
          exp_role_polish: "Car Detailing",
          exp_year_1: "2024 — Present",
          stat_years: "Years Experience",
          stat_years_desc: "Tech & digital administration",
          stat_services: "Digital Services",
          stat_services_desc: "Ready to build for you",
          stat_bot: "Bot Active",
          stat_bot_desc: "WhatsApp AI non-stop",
          stat_certs: "Certifications",
          stat_certs_desc: "Issued by Anthropic",
          work_label: "Portfolio",
          work_title: "Selected <em>Projects</em>",
          work_subtitle:
            "Real works that have been built, used, and continuously developed to solve operational problems.",
          work_vproject_desc:
            "Service management system with AI Assistant via WhatsApp 24/7. Automates complaint logging, repair status, and invoice generation without manual intervention.",
          work_visit: "Visit website",
          work_cbt_title: "Integrated CBT System",
          work_cbt_desc:
            "End-to-end digital exam platform for SDI Abu Seno. Powered by AI question generation, smart shuffling, real-time anti-cheat, and integrated grade recap.",
          work_docs: "View documentation",
          services_label: "Services",
          services_title: "What I Can <em>Do</em>",
          services_subtitle:
            "Digital solutions I provide to meet organizational and personal technology needs.",
          svc_web: "Web & Dashboard",
          svc_web_desc:
            "Professional websites and admin dashboards with modern, responsive, and high-performance design for business and personal needs.",
          svc_cbt: "School CBT System",
          svc_cbt_desc:
            "Complete web-based computer exam platform with AI, question shuffling, anti-cheat, student data, and integrated grade recap.",
          svc_wa: "WhatsApp AI 24/7",
          svc_wa_desc:
            "Smart WhatsApp bot with AI persona, state management, and automatic escalation to human admin when needed.",
          svc_portfolio: "Online Portfolio",
          svc_portfolio_desc:
            "Elegant digital portfolio to showcase works, experience, and skills with a convincing premium look.",
          svc_invite: "Digital Invitation",
          svc_invite_desc:
            "Interactive digital wedding invitation with aesthetic design, countdown timer, photo gallery, RSVP, and map integration.",
          demo_label: "Live Demo",
          demo_title: "CBT <em>System</em>",
          demo_subtitle:
            "Explore the computer-based exam interface directly through an interactive demo.",
          demo_cta: "Open CBT Demo ↗",
          vproject_label: "Features",
          vproject_title: "V Project — <em>Business Ecosystem</em>",
          vproject_subtitle:
            "Integrated solution for service management and customer automation.",
          vproject_cs: "Automated Customer Service",
          vproject_cs_desc:
            "24/7 customer service via WhatsApp. Common questions, service status, and complaint logging handled by AI in real-time.",
          vproject_ai: "AI Persona & State",
          vproject_ai_desc:
            "Bot has persona and structured conversation flow. State management ensures contextual and consistent responses.",
          vproject_invoice: "Autonomous Invoice",
          vproject_invoice_desc:
            "Invoice generated automatically after service completion based on recorded work data — without manual input.",
          vproject_lead: "Lead Logging",
          vproject_lead_desc:
            "Every potential customer via WhatsApp is automatically logged to spreadsheet — name, number, needs, and contact time.",
          vproject_dashboard: "Web Dashboard",
          vproject_dashboard_desc:
            "Centralized interface to monitor repair status, customer history, and business performance. Clean and responsive.",
          vproject_escalation: "Smart Escalation",
          vproject_escalation_desc:
            "When AI detects questions beyond its capability, conversation is automatically escalated to admin with smooth transition.",
          cbt_label: "Features",
          cbt_title: "Complete <em>CBT</em>",
          cbt_subtitle:
            "Digital exam platform designed for reliability, security, and user-friendliness.",
          cbt_ai: "AI Question Generator",
          cbt_ai_desc:
            "Teachers specify topic and number of questions — AI immediately generates a ready-to-use multiple choice question bank.",
          cbt_import: "Bulk Import",
          cbt_import_desc:
            "Upload up to 40 questions via Excel. Supports full Unicode — Arabic, Sundanese, Mandarin — without encoding error.",
          cbt_shuffle: "Smart Shuffling",
          cbt_shuffle_desc:
            "Question and answer order shuffled per student, yet the system still knows the correct answer key.",
          cbt_autosave: "Auto-Save & Navigation",
          cbt_autosave_desc:
            "Answers saved automatically. One question per page display with navigation list for review.",
          cbt_learning: "Learning Corner",
          cbt_learning_desc:
            "Learning materials with integrated YouTube videos. Students watch directly within the platform.",
          cbt_rekap: "Automatic Grade Recap",
          cbt_rekap_desc:
            "Scores calculated absolutely and automatically. Recap per exam and subject grade profile.",
          testi_label: "Testimonials",
          testi_title: "What <em>Users</em> Say",
          testi_subtitle:
            "Experiences of SDI Abu Seno teachers in using the CBT System.",
          testi_1:
            "This CBT system greatly helps the exam process at our school. Question shuffling and anti-cheat features make exams fairer and more secure.",
          testi_role_1: "Teacher at SDI Abu Seno",
          testi_2:
            "AI Question Generator saves me a lot of time in composing questions. Just specify the topic, questions are ready to use. The Learning Corner is also very helpful for students.",
          testi_role_2: "Teacher at SDI Abu Seno",
          testi_3:
            "The clean and intuitive interface makes it easy for students to adapt. Auto-save ensures no answers are lost. Exam efficiency has increased significantly.",
          testi_role_3: "Teacher at SDI Abu Seno",
          cert_label: "Certifications",
          cert_title: "Official <em>Recognition</em>",
          cert_subtitle:
            "Competencies validated through continuous learning programs.",
          skills_label: "Skills",
          skills_title: "Skills & <em>Technologies</em>",
          skills_subtitle:
            "Technical competencies for end-to-end digital solutions.",
          skills_desc:
            "I master Frontend Development with Tailwind CSS and Vanilla JS, AI & Prompt Engineering for OpenAI/Gemini/Groq integration, RBAC 4-level Security System, Node.js & Automation for WhatsApp bots, as well as IT Support & Networking for infrastructure diagnosis.",
          skill_frontend: "Frontend",
          skill_frontend_desc: "Tailwind CSS, Vanilla JS",
          skill_ai: "AI & Prompt",
          skill_ai_desc: "OpenAI, Gemini, Groq",
          skill_security: "Security",
          skill_security_desc: "RBAC 4 level, anti-cheat",
          skill_ms: "Microsoft",
          skill_ms_desc: "Excel, XLSX automation",
          skill_node: "Node.js",
          skill_node_desc: "Baileys, WhatsApp bot",
          skill_it: "IT Support",
          skill_it_desc: "LAN, remote, diagnosis",
          contact_label: "Contact",
          contact_title: "Let's <em>Discuss</em>",
          contact_subtitle:
            "Available for projects, collaborations, and technical consultations.",
          contact_wa_desc: "Quick response for project discussions.",
          contact_email_desc: "For proposals and formal details.",
          footer: "Designed by Yoka Gustiyadi · 2026",
        },
      };

      let currentLang = "id";

      function switchLang(lang) {
        currentLang = lang;
        localStorage.setItem("lang", lang);

        // Update html lang attribute
        document.documentElement.lang = lang;

        // Update all elements with data-key
        document.querySelectorAll("[data-key]").forEach((el) => {
          const key = el.getAttribute("data-key");
          if (translations[lang][key]) {
            // Check if content contains HTML tags
            if (translations[lang][key].includes("<")) {
              el.innerHTML = translations[lang][key];
            } else {
              el.textContent = translations[lang][key];
            }
          }
        });

        // Update active state on buttons
        document.querySelectorAll(".lang-btn").forEach((btn) => {
          btn.classList.toggle(
            "active",
            btn.getAttribute("data-lang") === lang,
          );
        });
      }

      // Initialize language
      const savedLang = localStorage.getItem("lang");
      if (savedLang && translations[savedLang]) {
        switchLang(savedLang);
      }

      // Run typewriter after translations are set
      initTypewriter();

      /* ── STACKING CARD SCROLL ANIMATION ──────────────────────── */
      (function initStackingCards() {
        const sections = document.querySelectorAll("section:not(#hero)");
        if (!sections.length) return;

        // Wrap all non-hero sections in a container
        const container = document.createElement("div");
        container.className = "stack-cards";
        const firstSection = sections[0];
        firstSection.parentNode.insertBefore(container, firstSection);
        sections.forEach((section, i) => {
          // Mark bg-soft sections
          const bg = section.style.background || "";
          if (bg.includes("bg-soft")) {
            section.setAttribute("data-bg", "soft");
            section.style.background = "";
          }
          section.classList.add("stack-card");
          section.style.zIndex = i + 1;
          container.appendChild(section);
        });

        // Also move footer inside
        const footer = document.querySelector("footer");
        if (footer) container.appendChild(footer);

        const SCALE_MIN = 0.92;

        function updateStickyTops() {
          const vh = window.innerHeight;
          sections.forEach((section, i) => {
            const h = section.offsetHeight;
            const defaultTop = i * 28;
            let stickyTop = defaultTop;
            
            // If section is taller than available viewport minus tabs, 
            // let it scroll normally until its bottom reaches the bottom of the screen.
            if (h > vh - defaultTop) {
              stickyTop = vh - h;
            }
            section.style.top = stickyTop + "px";
            section.dataset.stickyTop = stickyTop;
            section.dataset.defaultTop = defaultTop;
          });
        }

        function onScroll() {
          const vh = window.innerHeight;
          sections.forEach((section, i) => {
            const rect = section.getBoundingClientRect();
            const stickyTop = parseFloat(section.dataset.stickyTop || 0);

            // When the section reaches its sticky point
            if (rect.top <= stickyTop + 1) {
              const nextSection = sections[i + 1];
              if (nextSection) {
                const nextRect = nextSection.getBoundingClientRect();
                const nextDefaultTop = parseFloat(nextSection.dataset.defaultTop || 0);
                
                // Progress is based on the next section moving from bottom of screen to its default tab position
                const totalTravel = vh - nextDefaultTop;
                let progress = 1 - ((nextRect.top - nextDefaultTop) / totalTravel);
                progress = Math.max(0, Math.min(1, progress));

                const scale = 1 - progress * (1 - SCALE_MIN);
                const borderRadius = progress * 24;

                section.style.transform = `scale(${scale})`;
                section.style.borderRadius = `${24 + borderRadius}px ${24 + borderRadius}px 0 0`;
                section.style.opacity = 1 - progress * 0.15;
              } else {
                // Last section
                section.style.transform = "scale(1)";
                section.style.opacity = "1";
              }
            } else {
              // Section hasn't reached its sticky point yet
              section.style.transform = "scale(1)";
              section.style.opacity = "1";
              section.style.borderRadius = `24px 24px 0 0`;
            }
          });
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        
        // Use ResizeObserver to automatically update sticky tops if content height changes (e.g. images load, window resize)
        const ro = new ResizeObserver(() => {
          updateStickyTops();
          onScroll();
        });
        sections.forEach(s => ro.observe(s));
      })();

      /* Scroll Reveal (cards & sub-elements — kept for compatibility) */
      const revealClasses = [
        "reveal",
        "reveal-scale",
        "reveal-left",
        "reveal-right",
      ];
      revealClasses.forEach((cls) => {
        const els = document.querySelectorAll("." + cls);
        if (els.length === 0) return;
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              const siblings = [...entry.target.parentElement.children].filter(
                (c) => c.classList.contains(cls),
              );
              const idx = siblings.indexOf(entry.target);
              entry.target.style.transitionDelay = idx * 80 + "ms";
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            });
          },
          { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
        );
        els.forEach((el) => observer.observe(el));
      });

      /* Hamburger Menu */
      const hamburger = document.getElementById("hamburger");
      const mobileNav = document.getElementById("mobileNav");

      hamburger.addEventListener("click", () => {
        const isActive = hamburger.classList.toggle("active");
        mobileNav.classList.toggle("active");
        hamburger.setAttribute("aria-expanded", isActive);
        document.body.style.overflow = isActive ? "hidden" : "";
      });

      function closeMobileNav() {
        hamburger.classList.remove("active");
        mobileNav.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }

      // Debounced resize — avoid ResizeObserver/resize handler storms
      let _resizeTimer = null;
      window.addEventListener("resize", () => {
        if (_resizeTimer) clearTimeout(_resizeTimer);
        _resizeTimer = setTimeout(() => {
          if (window.innerWidth > 900) closeMobileNav();
        }, 100);
      }, { passive: true });

      // ── CONSOLIDATED SCROLL LOOP ────────────────────────────────
      // ONE passive scroll listener → ONE rAF tick per frame.
      // This eliminates 4 separate scroll handlers that caused layout thrashing.
      const navbar = document.getElementById("navbar");
      const scrollProgress = document.getElementById("scrollProgress");
      const backToTopBtn = document.getElementById("backToTop");
      const blobWrap = document.querySelector(".hero-blob-wrap");
      const particles = document.querySelectorAll(".particle");

      let _scrollY = 0;
      let _scrollRafPending = false;

      function _onScrollFrame() {
        _scrollRafPending = false;
        const sy = _scrollY;

        // Navbar shadow
        if (navbar) {
          if (sy > 10) navbar.classList.add("scrolled");
          else navbar.classList.remove("scrolled");
        }

        // Scroll progress bar
        if (scrollProgress) {
          const docH = document.documentElement.scrollHeight - window.innerHeight;
          scrollProgress.style.width = (docH > 0 ? (sy / docH) * 100 : 0) + "%";
        }

        // Back-to-top button
        if (backToTopBtn) {
          if (sy > 400) backToTopBtn.classList.add("visible");
          else backToTopBtn.classList.remove("visible");
        }

        // Parallax blobs — only when near viewport top to save CPU
        if (blobWrap && sy < window.innerHeight * 2) {
          blobWrap.style.transform = `translateY(${sy * 0.08}px)`;
          particles.forEach((p, i) => {
            p.style.transform = `translateY(${sy * (0.03 + i * 0.015)}px)`;
          });
        }
      }

      window.addEventListener("scroll", () => {
        _scrollY = window.scrollY;
        if (!_scrollRafPending) {
          _scrollRafPending = true;
          requestAnimationFrame(_onScrollFrame);
        }
      }, { passive: true });
      // Trigger once on load to set initial state
      _onScrollFrame();

      /* Dark Mode Toggle */
      const themeToggle = document.getElementById("themeToggle");
      const mobileThemeToggle2 = document.getElementById("mobileThemeToggle2");
      const htmlEl = document.documentElement;

      function setTheme(theme) {
        if (theme === "dark") {
          htmlEl.classList.add("dark");
        } else {
          htmlEl.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
      }

      function toggleTheme() {
        const isDark = htmlEl.classList.contains("dark");
        setTheme(isDark ? "light" : "dark");
      }

      // Initialize theme
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
      } else if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setTheme("dark");
      }

      if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
      if (mobileThemeToggle2)
        mobileThemeToggle2.addEventListener("click", toggleTheme);

      // Mobile theme toggle in navbar
      const mobileThemeToggle = document.getElementById("mobileThemeToggle");
      if (mobileThemeToggle)
        mobileThemeToggle.addEventListener("click", toggleTheme);

      /* Stats Counter Animation */
      const statsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target
              .querySelectorAll("[data-target]")
              .forEach((counter) => {
                const target = parseInt(counter.dataset.target);
                const suffix = counter.dataset.suffix ?? "";
                let current = 0;
                const duration = 1500;
                const startTime = performance.now();

                function animate(currentTime) {
                  const elapsed = currentTime - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  const easeOut = 1 - Math.pow(1 - progress, 3);
                  current = Math.floor(target * easeOut);
                  counter.textContent = current + suffix;

                  if (progress < 1) {
                    requestAnimationFrame(animate);
                  } else {
                    counter.textContent = target + suffix;
                  }
                }
                requestAnimationFrame(animate);
              });
            statsObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.6 },
      );

      document
        .querySelectorAll(".stats-row")
        .forEach((el) => statsObserver.observe(el));



      // ── LAZY LOAD IMAGES ───────────────────────────────────────
      (function initLazyLoad() {
        const images = document.querySelectorAll("img[src]");
        const imageObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = "0";
                img.style.transition = "opacity 0.5s ease";
                img.onload = () => (img.style.opacity = "1");
                imageObserver.unobserve(img);
              }
            });
          },
          { rootMargin: "50px" },
        );

        images.forEach((img) => imageObserver.observe(img));
      })();

      // ── PRELOADER ──────────────────────────────────────────────
      (function initPreloader() {
        const preloader = document.getElementById("preloader");
        if (!preloader) return;

        const hidePreloader = () => {
          setTimeout(() => {
            preloader.classList.add("hidden");
          }, 800);
        };
        
        if (document.readyState === 'complete') {
          hidePreloader();
        } else {
          window.addEventListener("load", hidePreloader);
        }
      })();

      // ── BACK TO TOP (scroll handled in consolidated loop above) ─
      (function initBackToTop() {
        const btn = document.getElementById("backToTop");
        if (!btn) return;
        btn.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      })();

      // ── PROJECT MODAL ──────────────────────────────────────────
      function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.classList.add("active");
          document.body.style.overflow = "hidden";
        }
      }

      function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.classList.remove("active");
          document.body.style.overflow = "";
        }
      }

      (function initModals() {
        document
          .querySelectorAll(".project-modal-overlay")
          .forEach((overlay) => {
            overlay.addEventListener("click", (e) => {
              if (e.target === overlay) {
                overlay.classList.remove("active");
                document.body.style.overflow = "";
              }
            });
          });

        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape") {
            document
              .querySelectorAll(".project-modal-overlay.active")
              .forEach((modal) => {
                modal.classList.remove("active");
              });
            document.body.style.overflow = "";
          }
        });
      })();

      // ── TEXT REVEAL ANIMATION ──────────────────────────────────
      (function initTextReveal() {
        const revealElements = document.querySelectorAll(
          ".sec-title, .sec-subtitle",
        );

        revealElements.forEach((el) => {
          if (el.querySelector("span")) return;
          const text = el.innerHTML;
          const words = text.split(/(<em[^>]*>.*?<\/em>|\s+)/);
          el.innerHTML = words
            .map((word) => {
              if (word.startsWith("<em") || word.match(/^\s+$/)) return word;
              return `<span>${word}</span>`;
            })
            .join("");
          el.classList.add("text-reveal");
        });

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const spans = entry.target.querySelectorAll("span");
                spans.forEach((span, i) => {
                  span.style.transitionDelay = `${i * 50}ms`;
                });
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.2 },
        );

        document
          .querySelectorAll(".text-reveal")
          .forEach((el) => observer.observe(el));
      })();

      // FINAL SAFETY: Force all images visible after load
      const showImages = () => {
        requestAnimationFrame(function () {
          document.querySelectorAll("img").forEach(function (img) {
            img.style.opacity = "1";
            img.style.visibility = "visible";
            img.style.display = "block";
          });
        });
      };
      
      if (document.readyState === 'complete') {
        showImages();
      } else {
        window.addEventListener("load", showImages, { once: true, passive: true });
      }

      // ── SPLASH SCREEN LOGIC + CONSTELLATION ────────────────────
      (function initSplashScreen() {
        if ('scrollRestoration' in history) {
          history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);

        const splash = document.getElementById("splashScreen");
        const nextBtn = document.getElementById("splashNextBtn");
        const canvas = document.getElementById("splashCanvas");
        if (!splash) return;

        document.body.style.overflow = "hidden";

        // --- Constellation canvas ---
        if (canvas) {
          const ctx = canvas.getContext("2d");
          let W, H, stars, animFrame;
          const STAR_COUNT = 140;
          const MAX_DIST = 130;
          let mouse = { x: -9999, y: -9999 };

          function resize() {
            W = canvas.width = canvas.offsetWidth;
            H = canvas.height = canvas.offsetHeight;
          }

          function mkStar() {
            return {
              x: Math.random() * W,
              y: Math.random() * H,
              r: Math.random() * 1.6 + 0.3,
              vx: (Math.random() - 0.5) * 0.18,
              vy: (Math.random() - 0.5) * 0.18,
              alpha: Math.random() * 0.5 + 0.4,
              twinkleSpeed: Math.random() * 0.012 + 0.004,
              twinklePhase: Math.random() * Math.PI * 2,
            };
          }

          function init() {
            resize();
            stars = Array.from({ length: STAR_COUNT }, mkStar);
          }

          function draw(ts) {
            ctx.clearRect(0, 0, W, H);

            // Update + draw stars
            stars.forEach((s) => {
              s.x += s.vx;
              s.y += s.vy;
              if (s.x < 0) s.x = W;
              if (s.x > W) s.x = 0;
              if (s.y < 0) s.y = H;
              if (s.y > H) s.y = 0;

              s.twinklePhase += s.twinkleSpeed;
              const a = s.alpha * (0.7 + 0.3 * Math.sin(s.twinklePhase));

              ctx.beginPath();
              ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255,255,255,${a})`;
              ctx.fill();
            });

            // Draw constellation lines
            for (let i = 0; i < stars.length; i++) {
              for (let j = i + 1; j < stars.length; j++) {
                const dx = stars[i].x - stars[j].x;
                const dy = stars[i].y - stars[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MAX_DIST) {
                  const opacity = (1 - dist / MAX_DIST) * 0.18;
                  ctx.beginPath();
                  ctx.moveTo(stars[i].x, stars[i].y);
                  ctx.lineTo(stars[j].x, stars[j].y);
                  ctx.strokeStyle = `rgba(222,115,86,${opacity})`;
                  ctx.lineWidth = 0.6;
                  ctx.stroke();
                }
              }
            }

            // Mouse proximity glow
            stars.forEach((s) => {
              const dx = s.x - mouse.x,
                dy = s.y - mouse.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 90) {
                const glow = (1 - dist / 90) * 0.7;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r * 2.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(222,115,86,${glow})`;
                ctx.fill();
              }
            });

            animFrame = requestAnimationFrame(draw);
          }

          window.addEventListener("resize", () => {
            resize();
          });
          splash.addEventListener("mousemove", (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
          });
          splash.addEventListener("mouseleave", () => {
            mouse.x = -9999;
            mouse.y = -9999;
          });

          init();
          animFrame = requestAnimationFrame(draw);

          // Stop animation when splash hides
          splash.addEventListener("transitionend", () => {
            if (splash.classList.contains("hidden")) {
              cancelAnimationFrame(animFrame);
            }
          });
        }

        // --- Next button ---
        if (nextBtn) {
          nextBtn.addEventListener("click", () => {
            splash.classList.add("hidden");
            setTimeout(() => {
              document.body.style.overflow = "";
            }, 900);
          });
        }
      })();
    
