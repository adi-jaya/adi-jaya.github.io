export function renderHero() {
  const heroEl = document.getElementById('hero');
  if (!heroEl) return;

  heroEl.innerHTML = `
    <div class="container fade-in" style="padding: 4rem 0 3rem 0;">
      <div style="max-width: 800px;">
        <div style="display:inline-flex; align-items:center; gap:0.5rem; margin-bottom:1.5rem;" class="badge badge-cyan">
          <span class="pulse-dot"></span> Full-Stack Software Engineer & System Architect
        </div>
        
        <h1 style="font-size: 3.25rem; letter-spacing: -0.03em; margin-bottom: 1.25rem; line-height: 1.15;">
          Building Scalable Systems & Elegant Web Architecture
        </h1>
        
        <p style="font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 2.25rem; max-width: 680px;">
          Halo, saya <strong style="color:var(--text-primary)">Adi Jaya</strong>. Berfokus pada perancangan arsitektur backend berkinerja tinggi, manajemen basis data berskala enterprise, dan pembuatan aplikasi web modern yang responsif & presisi.
        </p>

        <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 3rem; flex-wrap: wrap;">
          <a href="#projects" class="btn btn-primary">
            Explore Featured Projects
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
          <a href="#playground" class="btn btn-outline">
            Interactive Playground
          </a>
        </div>

        <div style="display:flex; align-items:center; gap:1rem; flex-wrap:wrap; padding-top:1.5rem; border-top:1px dashed var(--border-color);">
          <span class="mono" style="font-size:0.85rem; color:var(--text-muted);">Core Stack:</span>
          <span class="badge">Node.js</span>
          <span class="badge">C# / .NET Core</span>
          <span class="badge">PostgreSQL</span>
          <span class="badge">React / ES6+</span>
          <span class="badge">Docker</span>
        </div>
      </div>
    </div>
  `;
}
