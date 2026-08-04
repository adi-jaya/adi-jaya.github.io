import { projectsData } from '../data/projects.js';
import { openProjectModal } from './projectModal.js';

export function renderProjects() {
  const projectsEl = document.getElementById('projects');
  if (!projectsEl) return;

  projectsEl.innerHTML = `
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>
      <p class="section-subtitle">Showcase arsitektur & pengembangan aplikasi berskala enterprise.</p>

      <div id="project-filters" style="display:flex; gap:0.75rem; margin-bottom:2rem; flex-wrap:wrap;">
        <button class="btn btn-outline filter-btn active" data-category="all" style="padding:0.4rem 1rem; font-size:0.875rem;">All Projects</button>
        <button class="btn btn-outline filter-btn" data-category="fullstack" style="padding:0.4rem 1rem; font-size:0.875rem;">Full-Stack</button>
        <button class="btn btn-outline filter-btn" data-category="backend" style="padding:0.4rem 1rem; font-size:0.875rem;">Backend & System</button>
      </div>

      <div id="projects-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:1.75rem;"></div>
    </div>
  `;

  renderGrid('all');

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetBtn = e.currentTarget;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      targetBtn.classList.add('active');
      renderGrid(targetBtn.dataset.category);
    });
  });
}

function renderGrid(category) {
  const gridEl = document.getElementById('projects-grid');
  if (!gridEl) return;

  const filtered = category === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === category);

  gridEl.innerHTML = filtered.map(p => `
    <div class="card fade-in" style="display:flex; flex-direction:column; justify-content:space-between;">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
          <span class="badge badge-cyan">${p.category.toUpperCase()}</span>
        </div>
        <h3 style="font-size:1.35rem; margin-bottom:0.75rem;">${p.title}</h3>
        <p style="color:var(--text-secondary); font-size:0.95rem; margin-bottom:1.5rem;">${p.summary}</p>
        <div style="display:flex; gap:0.4rem; flex-wrap:wrap; margin-bottom:1.5rem;">
          ${p.techStack.map(t => `<span class="badge" style="font-size:0.75rem;">${t}</span>`).join('')}
        </div>
      </div>
      <button class="btn btn-outline view-arch-btn" data-id="${p.id}" style="width:100%; justify-content:center; font-size:0.875rem;">
        View Architecture & Details
      </button>
    </div>
  `).join('');

  document.querySelectorAll('.view-arch-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetBtn = e.currentTarget;
      const proj = projectsData.find(p => p.id === targetBtn.dataset.id);
      if (proj) openProjectModal(proj);
    });
  });
}
