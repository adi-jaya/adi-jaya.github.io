import { timelineData } from '../data/timeline.js';

export function renderExperience() {
  const expEl = document.getElementById('experience');
  if (!expEl) return;

  expEl.innerHTML = `
    <div class="container">
      <h2 class="section-title">Interactive Experience & Timeline</h2>
      <p class="section-subtitle">Perjalanan karir, peran kunci, dan pencapaian teknis.</p>

      <div style="border-left: 2px solid var(--border-color); padding-left: 2rem; margin-left: 0.5rem;">
        ${timelineData.map(item => `
          <div class="fade-in" style="position:relative; margin-bottom: 2.5rem;">
            <div style="position:absolute; left:-2.55rem; top:0.25rem; width:14px; height:14px; border-radius:50%; background:var(--accent-cyan); border:3px solid var(--bg-main);"></div>
            <span class="mono" style="font-size:0.85rem; color:var(--accent-cyan); font-weight:600;">${item.period}</span>
            <h3 style="font-size:1.35rem; margin:0.25rem 0;">${item.role}</h3>
            <h4 style="font-size:1rem; color:var(--text-secondary); font-weight:500; margin-bottom:0.75rem;">${item.company}</h4>
            <p style="color:var(--text-secondary); font-size:0.95rem; margin-bottom:0.75rem;">${item.description}</p>
            <ul style="color:var(--text-secondary); font-size:0.9rem; padding-left:1.2rem; margin-bottom:1rem;">
              ${item.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
            <div style="display:flex; gap:0.4rem; flex-wrap:wrap;">
              ${item.tech.map(t => `<span class="badge" style="font-size:0.75rem;">${t}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
