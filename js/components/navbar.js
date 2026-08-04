import { toggleTheme, setTheme } from './theme.js';

export function renderNavbar() {
  const navbarEl = document.getElementById('navbar');
  if (!navbarEl) return;

  navbarEl.innerHTML = `
    <div class="container" style="display:flex; align-items:center; justify-content:space-between; height:70px;">
      <a href="#hero" style="display:flex; align-items:center; gap:0.75rem; text-decoration:none; color:var(--text-primary); font-weight:700; font-size:1.15rem;">
        <span class="mono" style="background:var(--accent-cyan-glow); color:var(--accent-cyan); padding:0.3rem 0.6rem; border-radius:var(--radius-sm); border:1px solid var(--accent-cyan);">AJ</span>
        <span>Adi Jaya</span>
        <span class="badge badge-cyan" style="font-size:0.75rem;"><span class="pulse-dot"></span> Available</span>
      </a>

      <nav style="display:flex; align-items:center; gap:1.75rem;">
        <a href="#projects" class="nav-link" style="color:var(--text-secondary); text-decoration:none; font-size:0.95rem; font-weight:500; transition:color var(--transition-fast);">Projects</a>
        <a href="#experience" class="nav-link" style="color:var(--text-secondary); text-decoration:none; font-size:0.95rem; font-weight:500; transition:color var(--transition-fast);">Experience</a>
        <a href="#skills" class="nav-link" style="color:var(--text-secondary); text-decoration:none; font-size:0.95rem; font-weight:500; transition:color var(--transition-fast);">Skills</a>
        <a href="#playground" class="nav-link" style="color:var(--text-secondary); text-decoration:none; font-size:0.95rem; font-weight:500; transition:color var(--transition-fast);">Playground</a>
        <a href="#contact" class="nav-link" style="color:var(--text-secondary); text-decoration:none; font-size:0.95rem; font-weight:500; transition:color var(--transition-fast);">Contact</a>

        <button id="theme-toggle-btn" class="btn btn-outline" style="padding:0.4rem 0.6rem;" aria-label="Toggle Dark/Light Mode"></button>
        <a href="#contact" class="btn btn-primary" style="padding:0.45rem 1rem; font-size:0.875rem;">Get in Touch</a>
      </nav>
    </div>
  `;

  document.getElementById('theme-toggle-btn')?.addEventListener('click', toggleTheme);

  // Set initial icon for theme button based on current data-theme
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  setTheme(currentTheme);

  // Style navbar sticky glass effect
  navbarEl.style.position = 'sticky';
  navbarEl.style.top = '0';
  navbarEl.style.zIndex = '100';
  navbarEl.style.backgroundColor = 'var(--glass-bg)';
  navbarEl.style.backdropFilter = 'blur(12px)';
  navbarEl.style.borderBottom = '1px solid var(--border-color)';
}
