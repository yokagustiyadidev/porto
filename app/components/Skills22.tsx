import parse from 'html-react-parser';

export default function Skills22() {
  const html = `<section id="skills" style="background: var(--bg-soft)">
      <div class="wrap">
        <div class="skills-layout">
          <div class="skills-left">
            <span class="sec-label" data-key="skills_label">Keahlian</span>
            <h2 class="sec-title" data-key="skills_title">
              Skill &amp; <em>Teknologi</em>
            </h2>
            <p class="sec-subtitle" data-key="skills_subtitle">
              Kompetensi teknis untuk solusi digital end-to-end.
            </p>
            <p data-key="skills_desc">
              Saya menguasai Frontend Development dengan Tailwind CSS dan
              Vanilla JS, AI &amp; Prompt Engineering untuk integrasi
              OpenAI/Gemini/Groq, Sistem Keamanan RBAC 4-level, Node.js &amp;
              Otomasi untuk bot WhatsApp, serta IT Support &amp; Jaringan untuk
              diagnosis infrastruktur.
            </p>
          </div>
          <div class="skills-right">
            <div class="skill-item reveal">
              <div class="card-accent-border"></div>
              <div class="skill-progress" style="--progress: 15">
                <svg viewBox="0 0 36 36">
                  <circle class="bg" cx="18" cy="18" r="16"></circle>
                  <circle class="fg" cx="18" cy="18" r="16"></circle>
                </svg>
              </div>
              <div class="skill-icon icon-glow">
                <svg class="icon-outline" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v4"></path>
                  <path d="M12 18v4"></path>
                  <path d="M4.93 4.93l2.83 2.83"></path>
                  <path d="M16.24 16.24l2.83 2.83"></path>
                  <path d="M2 12h4"></path>
                  <path d="M18 12h4"></path>
                  <path d="M4.93 19.07l2.83-2.83"></path>
                  <path d="M16.24 7.76l2.83-2.83"></path>
                </svg>
              </div>
              <h4 data-key="skill_frontend">Frontend</h4>
              <p data-key="skill_frontend_desc">Tailwind CSS, Vanilla JS</p>
            </div>
            <div class="skill-item reveal">
              <div class="card-accent-border"></div>
              <div class="skill-progress" style="--progress: 25">
                <svg viewBox="0 0 36 36">
                  <circle class="bg" cx="18" cy="18" r="16"></circle>
                  <circle class="fg" cx="18" cy="18" r="16"></circle>
                </svg>
              </div>
              <div class="skill-icon icon-glow">
                <svg class="icon-outline" viewBox="0 0 24 24">
                  <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                  <path d="M12 11V7a4 4 0 0 1 4-4h0"></path>
                  <circle cx="8" cy="15" r="1" fill="#000" stroke="none"></circle>
                  <circle cx="16" cy="15" r="1" fill="#000" stroke="none"></circle>
                  <path d="M9 19h6"></path>
                </svg>
              </div>
              <h4 data-key="skill_ai">AI &amp; Prompt</h4>
              <p data-key="skill_ai_desc">OpenAI, Gemini, Groq</p>
            </div>
            <div class="skill-item reveal">
              <div class="card-accent-border"></div>
              <div class="skill-progress" style="--progress: 20">
                <svg viewBox="0 0 36 36">
                  <circle class="bg" cx="18" cy="18" r="16"></circle>
                  <circle class="fg" cx="18" cy="18" r="16"></circle>
                </svg>
              </div>
              <div class="skill-icon icon-glow">
                <svg class="icon-outline" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <circle cx="12" cy="11" r="2" fill="#000" stroke="none"></circle>
                  <path d="M12 13v3"></path>
                </svg>
              </div>
              <h4 data-key="skill_security">Keamanan</h4>
              <p data-key="skill_security_desc">RBAC 4 level, anti-cheat</p>
            </div>
            <div class="skill-item reveal">
              <div class="card-accent-border"></div>
              <div class="skill-progress" style="--progress: 30">
                <svg viewBox="0 0 36 36">
                  <circle class="bg" cx="18" cy="18" r="16"></circle>
                  <circle class="fg" cx="18" cy="18" r="16"></circle>
                </svg>
              </div>
              <div class="skill-icon icon-glow">
                <svg class="icon-outline" viewBox="0 0 24 24">
                  <path d="M18 20V10"></path>
                  <path d="M12 20V4"></path>
                  <path d="M6 20v-6"></path>
                </svg>
              </div>
              <h4 data-key="skill_ms">Microsoft</h4>
              <p data-key="skill_ms_desc">Excel, XLSX automation</p>
            </div>
            <div class="skill-item reveal">
              <div class="card-accent-border"></div>
              <div class="skill-progress" style="--progress: 35">
                <svg viewBox="0 0 36 36">
                  <circle class="bg" cx="18" cy="18" r="16"></circle>
                  <circle class="fg" cx="18" cy="18" r="16"></circle>
                </svg>
              </div>
              <div class="skill-icon icon-glow">
                <svg class="icon-outline" viewBox="0 0 24 24">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h4 data-key="skill_node">Node.js</h4>
              <p data-key="skill_node_desc">Baileys, bot WhatsApp</p>
            </div>
            <div class="skill-item reveal">
              <div class="card-accent-border"></div>
              <div class="skill-progress" style="--progress: 10">
                <svg viewBox="0 0 36 36">
                  <circle class="bg" cx="18" cy="18" r="16"></circle>
                  <circle class="fg" cx="18" cy="18" r="16"></circle>
                </svg>
              </div>
              <div class="skill-icon icon-glow">
                <svg class="icon-outline" viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                  <path d="M8 21h8m-4-4v4"></path>
                </svg>
              </div>
              <h4 data-key="skill_it">IT Support</h4>
              <p data-key="skill_it_desc">LAN, remote, diagnosis</p>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  return parse(html);
}
