import { initTheme } from './components/theme.js';
import { renderNavbar } from './components/navbar.js';
import { renderHero } from './components/hero.js';
import { renderProjects } from './components/projects.js';
import { renderExperience } from './components/experience.js';
import { renderSkills } from './components/skills.js';
import { renderPlayground } from './components/playground.js';
import { renderContact } from './components/contact.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderNavbar();
  renderHero();
  renderProjects();
  renderExperience();
  renderSkills();
  renderPlayground();
  renderContact();
});
