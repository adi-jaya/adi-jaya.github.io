export function openProjectModal(project) {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return;

  modalRoot.innerHTML = `
    <div class="modal-backdrop active" id="modal-backdrop">
      <div class="modal-content fade-in" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button id="close-modal-btn" aria-label="Close modal" style="position:absolute; top:1.25rem; right:1.25rem; background:transparent; border:none; color:var(--text-secondary); cursor:pointer; font-size:1.5rem; line-height:1; padding:0.25rem 0.5rem; border-radius:var(--radius-sm); transition:color var(--transition-fast);">&times;</button>
        
        <div class="badge badge-cyan" style="margin-bottom:1rem;">${project.category.toUpperCase()}</div>
        <h2 id="modal-title" style="font-size:1.75rem; margin-bottom:0.75rem;">${project.title}</h2>
        <p style="color:var(--text-secondary); margin-bottom:1.5rem;">${project.summary}</p>
        
        <div style="margin-bottom:1.75rem;">
          <h4 style="font-size:1rem; margin-bottom:0.75rem;">System Architecture Diagram</h4>
          ${project.architecture.diagramSvg}
        </div>

        <div style="margin-bottom:1.75rem;">
          <h4 style="font-size:1rem; margin-bottom:0.5rem;">Architecture Overview & Decisions</h4>
          <p style="color:var(--text-secondary); font-size:0.95rem;">${project.architecture.overview}</p>
        </div>

        <div style="margin-bottom:1.75rem;">
          <h4 style="font-size:1rem; margin-bottom:0.5rem;">Technical Challenges Solved</h4>
          <ul style="color:var(--text-secondary); font-size:0.95rem; padding-left:1.2rem;">
            ${project.architecture.challenges.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>

        <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom:2rem;">
          ${project.techStack.map(t => `<span class="badge">${t}</span>`).join('')}
        </div>

        <div style="display:flex; gap:1rem;">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="font-size:0.875rem;">View Code Repository</a>
        </div>
      </div>
    </div>
  `;

  document.body.style.overflow = 'hidden';

  const handleEscKey = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  const closeModal = () => {
    modalRoot.innerHTML = '';
    document.body.style.overflow = 'auto';
    document.removeEventListener('keydown', handleEscKey);
  };

  document.getElementById('close-modal-btn')?.addEventListener('click', closeModal);
  document.getElementById('modal-backdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'modal-backdrop') closeModal();
  });
  document.addEventListener('keydown', handleEscKey);
}
