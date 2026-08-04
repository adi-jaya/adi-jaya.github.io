import { skillsData } from '../data/skills.js';

export function renderSkills() {
  const skillsEl = document.getElementById('skills');
  if (!skillsEl) return;

  skillsEl.innerHTML = `
    <div class="container">
      <h2 class="section-title">Technical Skills & Tech Stack</h2>
      <p class="section-subtitle">Pengelompokan keahlian teknis dan tingkat kemahiran sistem.</p>

      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:2rem;">
        ${skillsData.map(cat => `
          <div class="card fade-in">
            <h3 style="font-size:1.2rem; margin-bottom:1.25rem; color:var(--accent-cyan); border-bottom:1px solid var(--border-color); padding-bottom:0.5rem;">
              ${cat.category}
            </h3>
            <div style="display:flex; flex-direction:column; gap:1rem;">
              ${cat.items.map(item => `
                <div>
                  <div style="display:flex; justify-content:space-between; font-size:0.9rem; font-weight:500; margin-bottom:0.3rem;">
                    <span>${item.name}</span>
                    <span class="mono" style="color:var(--text-muted); font-size:0.8rem;">${item.level}%</span>
                  </div>
                  <div style="width:100%; height:6px; background:var(--border-color); border-radius:999px; overflow:hidden;">
                    <div style="width:${item.level}%; height:100%; background:linear-gradient(90deg, var(--accent-cyan), var(--accent-indigo)); border-radius:999px;"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
