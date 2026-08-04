# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-performance, responsive, clean & minimalist tech personal portfolio for Adi Jaya hosted on GitHub Pages (`adi-jaya.github.io`).

**Architecture:** Single-page Vanilla Web Application using HTML5 semantik, CSS Design System dengan Dark/Light theme custom properties, dan ES6 Modular JavaScript (tanpa framework heavy). Data disajikan secara terpisah melalui file modul JavaScript di `js/data/`.

**Tech Stack:** HTML5, CSS3 (Flexbox/Grid, CSS Variables, Glassmorphism), JavaScript (ES Modules), JetBrains Mono & Inter Fonts.

## Global Constraints

- Primary target repository: `adi-jaya.github.io`
- Zero external build step / bundler required (pure native web standards)
- Dark mode as default theme with Light mode toggle
- High contrast typography with clean tech aesthetic

---

### Task 1: Repository Structure & Semantic HTML Base

**Files:**
- Create: `adi-jaya.github.io/index.html`
- Create: `adi-jaya.github.io/assets/images/.gitkeep`
- Create: `adi-jaya.github.io/assets/docs/.gitkeep`

**Interfaces:**
- Produces: `index.html` DOM container with sections `#hero`, `#projects`, `#experience`, `#skills`, `#playground`, `#contact`.

- [ ] **Step 1: Create HTML5 index file**

Create `index.html`:
```html
<!DOCTYPE html>
<html lang="id" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Adi Jaya — Full-Stack Software Engineer & System Architect</title>
  <meta name="description" content="Portfolio of Adi Jaya — Full-Stack Software Engineer specializing in scalable backend architecture, modern web apps, and system design.">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <header id="navbar" class="navbar"></header>
  
  <main>
    <section id="hero" class="hero-section"></section>
    <section id="projects" class="projects-section"></section>
    <section id="experience" class="experience-section"></section>
    <section id="skills" class="skills-section"></section>
    <section id="playground" class="playground-section"></section>
    <section id="contact" class="contact-section"></section>
  </main>
  
  <footer id="footer" class="footer"></footer>

  <div id="modal-root"></div>

  <script type="module" src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
cd /Users/adijaya/MyFiles/adi-jaya.github.io
rtk git add index.html assets/
rtk git commit -m "feat: setup base HTML5 structure and asset directories"
```

---

### Task 2: Design System & CSS Variables (`css/variables.css`, `css/main.css`, `css/components.css`, `css/animations.css`)

**Files:**
- Create: `adi-jaya.github.io/css/variables.css`
- Create: `adi-jaya.github.io/css/main.css`
- Create: `adi-jaya.github.io/css/components.css`
- Create: `adi-jaya.github.io/css/animations.css`

**Interfaces:**
- Produces: Complete CSS design system with Dark & Light theme tokens, reset, typography, and component primitives.

- [ ] **Step 1: Write `css/variables.css`**

```css
:root[data-theme="dark"] {
  --bg-main: #0a0d12;
  --bg-surface: #121721;
  --bg-surface-hover: #1a2232;
  --border-color: #1f293d;
  --border-accent: #2e3d5b;
  --text-primary: #f1f5f9;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --accent-cyan: #38bdf8;
  --accent-cyan-glow: rgba(56, 189, 248, 0.15);
  --accent-indigo: #818cf8;
  --status-green: #22c55e;
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.5);
  --glass-bg: rgba(18, 23, 33, 0.85);
}

:root[data-theme="light"] {
  --bg-main: #f8fafc;
  --bg-surface: #ffffff;
  --bg-surface-hover: #f1f5f9;
  --border-color: #e2e8f0;
  --border-accent: #cbd5e1;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-muted: #94a3b8;
  --accent-cyan: #0284c7;
  --accent-cyan-glow: rgba(2, 132, 199, 0.12);
  --accent-indigo: #4f46e5;
  --status-green: #16a34a;
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.08);
  --glass-bg: rgba(255, 255, 255, 0.85);
}

:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --container-max: 1140px;
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
}
```

- [ ] **Step 2: Write `css/main.css` & `css/animations.css`**

Create `css/animations.css`:
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulseGlow {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.15); }
}

.fade-in {
  animation: fadeIn 0.4s ease forwards;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background-color: var(--status-green);
  border-radius: 50%;
  display: inline-block;
  animation: pulseGlow 2s infinite ease-in-out;
}
```

Create `css/main.css`:
```css
@import 'variables.css';
@import 'components.css';
@import 'animations.css';

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-main);
  color: var(--text-primary);
  font-family: var(--font-sans);
  line-height: 1.6;
  transition: background-color var(--transition-normal), color var(--transition-normal);
  overflow-x: hidden;
}

.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 1.5rem;
}

section {
  padding: 5rem 0;
  border-bottom: 1px solid var(--border-color);
}

h1, h2, h3, h4 {
  color: var(--text-primary);
  font-weight: 700;
  line-height: 1.25;
}

.section-title {
  font-size: 2.25rem;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.section-subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.mono {
  font-family: var(--font-mono);
}
```

- [ ] **Step 3: Write `css/components.css`**

Create `css/components.css`:
```css
/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-fast);
  border: 1px solid transparent;
}

.btn-primary {
  background-color: var(--accent-cyan);
  color: #ffffff;
}

.btn-primary:hover {
  filter: brightness(1.1);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px var(--accent-cyan-glow);
}

.btn-outline {
  background-color: transparent;
  color: var(--text-primary);
  border-color: var(--border-accent);
}

.btn-outline:hover {
  background-color: var(--bg-surface-hover);
  border-color: var(--accent-cyan);
}

/* Badges & Tags */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  font-size: 0.825rem;
  font-family: var(--font-mono);
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
}

.badge-cyan {
  background-color: var(--accent-cyan-glow);
  color: var(--accent-cyan);
  border-color: var(--accent-cyan);
}

/* Cards */
.card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.75rem;
  transition: all var(--transition-fast);
}

.card:hover {
  border-color: var(--border-accent);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* Modal */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1.5rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition-normal);
}

.modal-backdrop.active {
  opacity: 1;
  pointer-events: auto;
}

.modal-content {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-accent);
  border-radius: var(--radius-lg);
  max-width: 800px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  padding: 2.5rem;
  position: relative;
  box-shadow: var(--shadow-lg);
}
```

- [ ] **Step 4: Commit**

```bash
cd /Users/adijaya/MyFiles/adi-jaya.github.io
rtk git add css/
rtk git commit -m "feat: implement CSS design system, theme variables, and component primitives"
```

---

### Task 3: Data Layer (`js/data/projects.js`, `js/data/timeline.js`, `js/data/skills.js`)

**Files:**
- Create: `adi-jaya.github.io/js/data/projects.js`
- Create: `adi-jaya.github.io/js/data/timeline.js`
- Create: `adi-jaya.github.io/js/data/skills.js`

**Interfaces:**
- Produces:
  - `projectsData`: Array of project objects with id, title, category, description, techStack, architecture, liveUrl, githubUrl.
  - `timelineData`: Array of career/education objects with year, role, company, details, tags.
  - `skillsData`: Array of categorized skill objects.

- [ ] **Step 1: Write `js/data/projects.js`**

```javascript
export const projectsData = [
  {
    id: "logistics-monorepo",
    title: "Enterprise Logistics Management System",
    category: "fullstack",
    summary: "Sistem manajemen logistik & transportasi terpadu dengan pelacakan real-time, pengolahan manifes, dan modul akuntansi.",
    techStack: ["Node.js", "Express", "PostgreSQL", "React", "Docker", "Redis"],
    architecture: {
      overview: "Arsitektur berbasis Microservices-ready monorepo dengan PostgreSQL sebagai database utama dan Redis pub/sub untuk real-time tracking update.",
      diagramSvg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; background:var(--bg-main); padding:1rem; border-radius:8px;">
        <rect x="20" y="70" width="120" height="60" rx="6" fill="var(--bg-surface)" stroke="var(--accent-cyan)" stroke-width="2"/>
        <text x="80" y="105" fill="var(--text-primary)" font-size="12" text-anchor="middle" font-family="monospace">Client (React SPA)</text>
        
        <path d="M140 100 L210 100" stroke="var(--accent-cyan)" stroke-width="2" marker-end="url(#arrow)"/>
        
        <rect x="220" y="70" width="140" height="60" rx="6" fill="var(--bg-surface)" stroke="var(--accent-indigo)" stroke-width="2"/>
        <text x="290" y="105" fill="var(--text-primary)" font-size="12" text-anchor="middle" font-family="monospace">API Gateway / Node</text>
        
        <path d="M360 100 L430 100" stroke="var(--accent-indigo)" stroke-width="2"/>
        
        <rect x="440" y="40" width="130" height="50" rx="6" fill="var(--bg-surface)" stroke="var(--status-green)" stroke-width="2"/>
        <text x="505" y="70" fill="var(--text-primary)" font-size="11" text-anchor="middle" font-family="monospace">PostgreSQL DB</text>
        
        <rect x="440" y="110" width="130" height="50" rx="6" fill="var(--bg-surface)" stroke="var(--accent-cyan)" stroke-width="2"/>
        <text x="505" y="140" fill="var(--text-primary)" font-size="11" text-anchor="middle" font-family="monospace">Redis Cache</text>
      </svg>`,
      challenges: [
        "Optimalisasi kueri laporan keuangan bulanan dengan pembagian agregasi batching.",
        "Sinkronisasi real-time status armada kendaraan tanpa membebankan server."
      ]
    },
    liveUrl: "#",
    githubUrl: "https://github.com/adi-jaya"
  },
  {
    id: "accounting-system",
    title: "Basic Accounting & Financial Engine",
    category: "backend",
    summary: "Engine akuntansi double-entry ledger dengan audit trail lengkap, laporan laba rugi otomatis, dan manajemen neraca.",
    techStack: ["C#", ".NET Core", "SQL Server", "REST API"],
    architecture: {
      overview: "Clean Architecture dengan skema transactional double-entry debit/kredit yang menjamin konsistensi neraca 100%.",
      diagramSvg: `<svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; background:var(--bg-main); padding:1rem; border-radius:8px;">
        <rect x="40" y="50" width="140" height="60" rx="6" fill="var(--bg-surface)" stroke="var(--accent-indigo)" stroke-width="2"/>
        <text x="110" y="85" fill="var(--text-primary)" font-size="12" text-anchor="middle" font-family="monospace">Ledger Controller</text>
        <path d="M180 80 L280 80" stroke="var(--accent-indigo)" stroke-width="2"/>
        <rect x="290" y="50" width="140" height="60" rx="6" fill="var(--bg-surface)" stroke="var(--accent-cyan)" stroke-width="2"/>
        <text x="360" y="85" fill="var(--text-primary)" font-size="12" text-anchor="middle" font-family="monospace">Journal Service</text>
        <path d="M430 80 L490 80" stroke="var(--accent-cyan)" stroke-width="2"/>
        <rect x="500" y="50" width="80" height="60" rx="6" fill="var(--bg-surface)" stroke="var(--status-green)" stroke-width="2"/>
        <text x="540" y="85" fill="var(--text-primary)" font-size="11" text-anchor="middle" font-family="monospace">SQL DB</text>
      </svg>`,
      challenges: [
        "Pencegahan race condition pada concurrent posting transaksi akuntansi.",
        "Implementasi immutable audit trail log untuk keperluan auditing."
      ]
    },
    liveUrl: "#",
    githubUrl: "https://github.com/adi-jaya"
  },
  {
    id: "pharmacy-management",
    title: "Pharmacy & Inventory Control System",
    category: "fullstack",
    summary: "Sistem manajemen stok obat, resep medis, rekap inventaris otomatis, dan integrasi POS kasir farmasi.",
    techStack: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
    architecture: {
      overview: "MVC Laravel dengan caching stok obat menggunakan Redis untuk respon pencarian instan.",
      diagramSvg: `<svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; background:var(--bg-main); padding:1rem; border-radius:8px;">
        <rect x="50" y="50" width="140" height="60" rx="6" fill="var(--bg-surface)" stroke="var(--accent-cyan)" stroke-width="2"/>
        <text x="120" y="85" fill="var(--text-primary)" font-size="12" text-anchor="middle" font-family="monospace">POS Interface</text>
        <path d="M190 80 L300 80" stroke="var(--accent-cyan)" stroke-width="2"/>
        <rect x="310" y="50" width="140" height="60" rx="6" fill="var(--bg-surface)" stroke="var(--accent-indigo)" stroke-width="2"/>
        <text x="380" y="85" fill="var(--text-primary)" font-size="12" text-anchor="middle" font-family="monospace">Laravel Engine</text>
        <path d="M450 80 L510 80" stroke="var(--accent-indigo)" stroke-width="2"/>
        <rect x="520" y="50" width="60" height="60" rx="6" fill="var(--bg-surface)" stroke="var(--status-green)" stroke-width="2"/>
        <text x="550" y="85" fill="var(--text-primary)" font-size="11" text-anchor="middle" font-family="monospace">MySQL</text>
      </svg>`,
      challenges: [
        "Peringatan dini otomatis untuk stok mendekati tenggat kadaluarsa (FEFO system).",
        "Optimasi query transaksi kasir dalam volume tinggi."
      ]
    },
    liveUrl: "#",
    githubUrl: "https://github.com/adi-jaya"
  }
];
```

- [ ] **Step 2: Write `js/data/timeline.js` & `js/data/skills.js`**

Create `js/data/timeline.js`:
```javascript
export const timelineData = [
  {
    period: "2023 — Sekarang",
    role: "Lead / Senior Full-Stack Software Engineer",
    company: "Enterprise Software & Logistics Projects",
    description: "Merancang dan membangun arsitektur aplikasi enterprise berskala besar, sistem manajemen logistik, serta sistem akuntansi terpadu.",
    highlights: [
      "Mengembangkan arsitektur backend berkinerja tinggi berbasis Node.js & .NET Core.",
      "Memimpin penggabungan sistem manajemen rantai pasok dan pelaporan keuangan.",
      "Mengoptimalkan performa database kueri hingga memangkas waktu pemrosesan 40%."
    ],
    tech: ["Node.js", ".NET Core", "PostgreSQL", "React", "Docker"]
  },
  {
    period: "2021 — 2023",
    role: "Full-Stack Web Developer",
    company: "Software Solutions",
    description: "Mengembangkan aplikasi manajemen farmasi, sistem akuntansi, dan aplikasi administrasi pemerintahan/instansi.",
    highlights: [
      "Membangun RESTful API aman dengan autentikasi JWT dan pembatasan peran akses (RBAC).",
      "Mengimplementasikan UI/UX responsif yang ramah pengguna."
    ],
    tech: ["Laravel", "MySQL", "JavaScript ES6", "Bootstrap", "Git"]
  }
];
```

Create `js/data/skills.js`:
```javascript
export const skillsData = [
  {
    category: "Backend & Systems",
    items: [
      { name: "Node.js / Express", level: 90 },
      { name: "C# / .NET Core", level: 85 },
      { name: "PHP / Laravel", level: 88 },
      { name: "RESTful API & GraphQL", level: 92 },
      { name: "PostgreSQL & MySQL", level: 90 },
      { name: "System Architecture", level: 85 }
    ]
  },
  {
    category: "Frontend & UI",
    items: [
      { name: "JavaScript (ES6+) / TypeScript", level: 90 },
      { name: "HTML5 & CSS3 Architecture", level: 95 },
      { name: "React.js", level: 85 },
      { name: "UI/UX & Responsive Design", level: 90 },
      { name: "Web Performance Optimization", level: 88 }
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git & GitHub Workflow", level: 92 },
      { name: "Docker & Containerization", level: 82 },
      { name: "Linux Administration", level: 80 },
      { name: "CI/CD Deployment", level: 80 }
    ]
  }
];
```

- [ ] **Step 3: Commit**

```bash
cd /Users/adijaya/MyFiles/adi-jaya.github.io
rtk git add js/data/
rtk git commit -m "feat: add structured dataset for projects, timeline, and skills"
```

---

### Task 4: Theme Switcher & Navbar Component (`js/components/theme.js`, `js/components/navbar.js`)

**Files:**
- Create: `adi-jaya.github.io/js/components/theme.js`
- Create: `adi-jaya.github.io/js/components/navbar.js`

**Interfaces:**
- Consumes: `index.html` header container `#navbar`.
- Produces: Interactive theme switcher and sticky glassmorphism navbar.

- [ ] **Step 1: Write `js/components/theme.js`**

```javascript
export function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  
  setTheme(initialTheme);
}

export function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.innerHTML = theme === 'dark' 
      ? `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`
      : `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
  }
}

export function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}
```

- [ ] **Step 2: Write `js/components/navbar.js`**

```javascript
import { toggleTheme } from './theme.js';

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

  // Style navbar sticky glass effect
  navbarEl.style.position = 'sticky';
  navbarEl.style.top = '0';
  navbarEl.style.zIndex = '100';
  navbarEl.style.backgroundColor = 'var(--glass-bg)';
  navbarEl.style.backdropFilter = 'blur(12px)';
  navbarEl.style.borderBottom = '1px solid var(--border-color)';
}
```

- [ ] **Step 3: Commit**

```bash
cd /Users/adijaya/MyFiles/adi-jaya.github.io
rtk git add js/components/theme.js js/components/navbar.js
rtk git commit -m "feat: implement theme switcher and sticky glassmorphism navbar"
```

---

### Task 5: Hero Section Component (`js/components/hero.js`)

**Files:**
- Create: `adi-jaya.github.io/js/components/hero.js`

**Interfaces:**
- Consumes: `#hero` section container.
- Produces: Clean minimalist tech Hero layout.

- [ ] **Step 1: Write `js/components/hero.js`**

```javascript
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
```

- [ ] **Step 2: Commit**

```bash
cd /Users/adijaya/MyFiles/adi-jaya.github.io
rtk git add js/components/hero.js
rtk git commit -m "feat: implement hero section with high contrast typography"
```

---

### Task 6: Projects Showcase & Architecture Modal Component (`js/components/projects.js`, `js/components/projectModal.js`)

**Files:**
- Create: `adi-jaya.github.io/js/components/projects.js`
- Create: `adi-jaya.github.io/js/components/projectModal.js`

**Interfaces:**
- Consumes: `projectsData` from `js/data/projects.js`.
- Produces: Filterable project cards grid and interactive architecture modal overlay.

- [ ] **Step 1: Write `js/components/projectModal.js`**

```javascript
export function openProjectModal(project) {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return;

  modalRoot.innerHTML = `
    <div class="modal-backdrop active" id="modal-backdrop">
      <div class="modal-content fade-in">
        <button id="close-modal-btn" style="position:absolute; top:1.25rem; right:1.25rem; background:transparent; border:none; color:var(--text-secondary); cursor:pointer; font-size:1.5rem;">&times;</button>
        
        <div class="badge badge-cyan" style="margin-bottom:1rem;">${project.category.toUpperCase()}</div>
        <h2 style="font-size:1.75rem; margin-bottom:0.75rem;">${project.title}</h2>
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
          <a href="${project.githubUrl}" target="_blank" class="btn btn-outline" style="font-size:0.875rem;">View Code Repository</a>
        </div>
      </div>
    </div>
  `;

  document.body.style.overflow = 'hidden';

  const closeModal = () => {
    modalRoot.innerHTML = '';
    document.body.style.overflow = 'auto';
  };

  document.getElementById('close-modal-btn')?.addEventListener('click', closeModal);
  document.getElementById('modal-backdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'modal-backdrop') closeModal();
  });
}
```

- [ ] **Step 2: Write `js/components/projects.js`**

```javascript
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
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderGrid(e.target.dataset.category);
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
      const proj = projectsData.find(p => p.id === e.target.dataset.id);
      if (proj) openProjectModal(proj);
    });
  });
}
```

- [ ] **Step 3: Commit**

```bash
cd /Users/adijaya/MyFiles/adi-jaya.github.io
rtk git add js/components/projects.js js/components/projectModal.js
rtk git commit -m "feat: implement project cards grid, category filters, and architecture modal"
```

---

### Task 7: Experience Timeline & Technical Skills Grid Components (`js/components/experience.js`, `js/components/skills.js`)

**Files:**
- Create: `adi-jaya.github.io/js/components/experience.js`
- Create: `adi-jaya.github.io/js/components/skills.js`

**Interfaces:**
- Consumes: `timelineData` and `skillsData`.
- Produces: Rendered Experience Timeline & Skills Radar/Grid.

- [ ] **Step 1: Write `js/components/experience.js`**

```javascript
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
```

- [ ] **Step 2: Write `js/components/skills.js`**

```javascript
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
```

- [ ] **Step 3: Commit**

```bash
cd /Users/adijaya/MyFiles/adi-jaya.github.io
rtk git add js/components/experience.js js/components/skills.js
rtk git commit -m "feat: implement experience timeline and skills grid components"
```

---

### Task 8: Full-Stack Live Interactive Playground Component (`js/components/playground.js`)

**Files:**
- Create: `adi-jaya.github.io/js/components/playground.js`

**Interfaces:**
- Consumes: `#playground` section container.
- Produces: Interactive API & System Architecture simulator component.

- [ ] **Step 1: Write `js/components/playground.js`**

```javascript
export function renderPlayground() {
  const playgroundEl = document.getElementById('playground');
  if (!playgroundEl) return;

  playgroundEl.innerHTML = `
    <div class="container">
      <div style="display:inline-flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;" class="badge badge-cyan">
        <span class="pulse-dot"></span> Live Full-Stack Demo
      </div>
      <h2 class="section-title">Interactive System Playground</h2>
      <p class="section-subtitle">Simulasikan request HTTP API backend real-time dan amati alur respon JSON server.</p>

      <div class="card fade-in" style="padding:0; overflow:hidden;">
        <!-- Control Bar -->
        <div style="background:var(--bg-main); padding:1rem 1.5rem; border-bottom:1px solid var(--border-color); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem;">
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <span class="mono" style="background:var(--accent-cyan-glow); color:var(--accent-cyan); padding:0.25rem 0.5rem; border-radius:4px; font-weight:600; font-size:0.85rem;" id="playground-method">GET</span>
            <select id="playground-endpoint-select" class="mono" style="background:var(--bg-surface); color:var(--text-primary); border:1px solid var(--border-accent); padding:0.4rem 0.75rem; border-radius:var(--radius-sm); font-size:0.9rem; cursor:pointer;">
              <option value="health">/api/v1/health (System Status)</option>
              <option value="projects">/api/v1/projects/stats (Metrics)</option>
              <option value="architecture">/api/v1/architecture/nodes (Topology)</option>
            </select>
          </div>
          <button id="send-request-btn" class="btn btn-primary" style="padding:0.4rem 1.25rem; font-size:0.875rem;">
            Execute Request
          </button>
        </div>

        <!-- Terminal Output Area -->
        <div style="padding:1.5rem; font-family:var(--font-mono); font-size:0.875rem;">
          <div style="display:flex; justify-content:space-between; color:var(--text-muted); margin-bottom:0.75rem; font-size:0.8rem;">
            <span>Response Header: HTTP/1.1 200 OK</span>
            <span id="response-time">Latency: -- ms</span>
          </div>
          <pre id="playground-output" style="background:var(--bg-main); padding:1.25rem; border-radius:var(--radius-sm); border:1px solid var(--border-color); color:var(--accent-cyan); overflow-x:auto; min-height:160px; margin:0;">
// Click "Execute Request" to test API response...
          </pre>
        </div>
      </div>
    </div>
  `;

  const endpoints = {
    health: {
      method: "GET",
      response: {
        status: "healthy",
        uptime_seconds: 864200,
        timestamp: new Date().toISOString(),
        services: { database: "connected (1ms)", redis_cache: "active", api_gateway: "online" }
      }
    },
    projects: {
      method: "GET",
      response: {
        total_projects: 12,
        categories: ["Full-Stack", "Backend & APIs", "System Architecture"],
        core_technologies: ["Node.js", "C# .NET", "PostgreSQL", "Laravel", "Docker"],
        code_quality_score: "A+"
      }
    },
    architecture: {
      method: "GET",
      response: {
        topology: "Decoupled Microservices / Modular Monolith",
        load_balancer: "Nginx Reverse Proxy",
        database_cluster: "PostgreSQL Master-Replica",
        caching_layer: "Redis Pub/Sub"
      }
    }
  };

  const selectEl = document.getElementById('playground-endpoint-select');
  const methodEl = document.getElementById('playground-method');
  const btnEl = document.getElementById('send-request-btn');
  const outputEl = document.getElementById('playground-output');
  const timeEl = document.getElementById('response-time');

  selectEl?.addEventListener('change', (e) => {
    const ep = endpoints[e.target.value];
    if (ep && methodEl) methodEl.textContent = ep.method;
  });

  btnEl?.addEventListener('click', () => {
    const selectedKey = selectEl?.value || 'health';
    const epData = endpoints[selectedKey];
    
    if (outputEl) outputEl.textContent = "// Executing simulated request...";
    const start = performance.now();

    setTimeout(() => {
      const end = performance.now();
      const latency = Math.round(end - start);
      if (timeEl) timeEl.textContent = `Latency: ${latency} ms`;
      if (outputEl && epData) {
        outputEl.textContent = JSON.stringify(epData.response, null, 2);
      }
    }, 150);
  });
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/adijaya/MyFiles/adi-jaya.github.io
rtk git add js/components/playground.js
rtk git commit -m "feat: implement live full-stack API playground simulator"
```

---

### Task 9: Contact & Main App Integration (`js/components/contact.js`, `js/main.js`)

**Files:**
- Create: `adi-jaya.github.io/js/components/contact.js`
- Create: `adi-jaya.github.io/js/main.js`

**Interfaces:**
- Consumes: `#contact` & `#footer` containers. Initializes all UI components.

- [ ] **Step 1: Write `js/components/contact.js`**

```javascript
export function renderContact() {
  const contactEl = document.getElementById('contact');
  const footerEl = document.getElementById('footer');

  if (contactEl) {
    contactEl.innerHTML = `
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">Mari berdiskusi mengenai proyek, arsitektur sistem, atau peluang kolaborasi.</p>

        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:2.5rem;">
          <div>
            <h3 style="font-size:1.4rem; margin-bottom:1rem;">Contact Information</h3>
            <p style="color:var(--text-secondary); margin-bottom:1.5rem;">
              Silakan kirimkan pesan langsung via form atau terhubung melalui jejaring profesional:
            </p>
            <div style="display:flex; flex-direction:column; gap:1rem;" class="mono">
              <div style="display:flex; align-items:center; gap:0.75rem;">
                <span class="badge badge-cyan">Email</span>
                <a href="mailto:adijaya@example.com" style="color:var(--text-primary); text-decoration:none;">adijaya@example.com</a>
              </div>
              <div style="display:flex; align-items:center; gap:0.75rem;">
                <span class="badge badge-cyan">GitHub</span>
                <a href="https://github.com/adi-jaya" target="_blank" style="color:var(--text-primary); text-decoration:none;">github.com/adi-jaya</a>
              </div>
            </div>
          </div>

          <div class="card">
            <form id="contact-form" onsubmit="event.preventDefault(); alert('Terima kasih! Pesan Anda telah terkirim.');">
              <div style="margin-bottom:1.25rem;">
                <label style="display:block; font-size:0.9rem; font-weight:500; margin-bottom:0.4rem;">Nama</label>
                <input type="text" required placeholder="Nama Anda" style="width:100%; background:var(--bg-main); color:var(--text-primary); border:1px solid var(--border-color); padding:0.75rem; border-radius:var(--radius-sm); font-family:inherit;">
              </div>
              <div style="margin-bottom:1.25rem;">
                <label style="display:block; font-size:0.9rem; font-weight:500; margin-bottom:0.4rem;">Email</label>
                <input type="email" required placeholder="email@domain.com" style="width:100%; background:var(--bg-main); color:var(--text-primary); border:1px solid var(--border-color); padding:0.75rem; border-radius:var(--radius-sm); font-family:inherit;">
              </div>
              <div style="margin-bottom:1.5rem;">
                <label style="display:block; font-size:0.9rem; font-weight:500; margin-bottom:0.4rem;">Pesan</label>
                <textarea required rows="4" placeholder="Tuliskan pesan Anda..." style="width:100%; background:var(--bg-main); color:var(--text-primary); border:1px solid var(--border-color); padding:0.75rem; border-radius:var(--radius-sm); font-family:inherit; resize:vertical;"></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center;">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  if (footerEl) {
    footerEl.innerHTML = `
      <div class="container" style="padding:2rem 0; text-align:center; color:var(--text-muted); font-size:0.875rem;">
        <p>© ${new Date().getFullYear()} Adi Jaya. Built with Vanilla HTML/CSS/JS — Hosted on GitHub Pages.</p>
      </div>
    `;
  }
}
```

- [ ] **Step 2: Write `js/main.js`**

```javascript
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
```

- [ ] **Step 3: Commit**

```bash
cd /Users/adijaya/MyFiles/adi-jaya.github.io
rtk git add js/components/contact.js js/main.js
rtk git commit -m "feat: complete application assembly and contact component"
```

---

### Task 10: Local Verification & Final Check

- [ ] **Step 1: Test locally via Python HTTP server**

```bash
cd /Users/adijaya/MyFiles/adi-jaya.github.io
python3 -m http.server 8080 &
```

- [ ] **Step 2: Verify all interactive features & layout**

Check:
1. Open `http://localhost:8080`
2. Test Theme Toggle (Dark/Light mode)
3. Test Project Filter tabs & View Architecture Modal
4. Test Interactive Playground API execution
5. Confirm responsive design across screen widths

- [ ] **Step 3: Final Commit**

```bash
cd /Users/adijaya/MyFiles/adi-jaya.github.io
rtk git status
```
