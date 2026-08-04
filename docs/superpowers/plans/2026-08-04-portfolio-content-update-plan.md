# Portfolio Content Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update developer portfolio data, text content, skills grid, experience timeline, and project list for Muhammad Adi Wijaya with AI-generated visual dashboard mockups and engineering practices.

**Architecture:** Vanilla HTML5/CSS3/JavaScript ES6 modules. Data is isolated under `js/data/`, UI components under `js/components/`, visual assets under `assets/images/`, and global layout in `index.html`.

**Tech Stack:** HTML5, CSS3 (Vanilla), JavaScript (ES6+ Modules), GitHub Pages.

## Global Constraints

- Preserve all existing UI layout structures and CSS theme variables (`--bg-main`, `--accent-cyan`, `--bg-surface`, `--text-primary`, `--status-green`).
- Follow exact content specifications from `docs/superpowers/specs/2026-08-04-portfolio-content-update-design.md`.
- No broken image links or missing JS module exports.

---

### Task 1: Generate Project Image Mockups

**Files:**
- Create: `assets/images/asl_logistics_dashboard.png`
- Create: `assets/images/simrs_ehos_dashboard.png`
- Create: `assets/images/mires_erp_dashboard.png`
- Create: `assets/images/popeye_trans_dashboard.png`

**Interfaces:**
- Consumes: `generate_image` tool
- Produces: 4 PNG image files in `assets/images/`

- [ ] **Step 1: Generate ASL Freight & Logistics System dashboard image**

Generate image with prompt: "Modern dark themed web application UI dashboard for freight forwarding and warehouse logistics management system with delivery route maps, cargo manifest data table, container stats widgets, cyan accents, sleek UI design, ultra clean"
Save to `assets/images/asl_logistics_dashboard.png`. AspectRatio: "16:9".

- [ ] **Step 2: Generate EHOS v2 SIMRS dashboard image**

Generate image with prompt: "Modern dark themed web application UI dashboard for hospital management information system SIMRS with electronic medical records RME, pharmacy stock charts, patient queue stats, emerald green accents, sleek medical UI"
Save to `assets/images/simrs_ehos_dashboard.png`. AspectRatio: "16:9".

- [ ] **Step 3: Generate Mires Enterprise ERP System v3.1 image**

Generate image with prompt: "Modern dark themed corporate ERP web application dashboard showing sales revenue line chart, general ledger accounting double entry table, HR headcount stats, deep blue and purple indigo accents, sleek enterprise UI"
Save to `assets/images/mires_erp_dashboard.png`. AspectRatio: "16:9".

- [ ] **Step 4: Generate Popeye Transport & Logistics System image**

Generate image with prompt: "Modern dark themed fleet transportation management system TMS dashboard showing live truck GPS tracking, monthly closing status cards, shipment order list, neon blue accents, clean UI"
Save to `assets/images/popeye_trans_dashboard.png`. AspectRatio: "16:9".

- [ ] **Step 5: Commit visual assets**

```bash
git add assets/images/*.png
git commit -m "assets: add project UI dashboard screenshot mockups"
```

---

### Task 2: Update Data Files (`skills.js`, `timeline.js`, `projects.js`)

**Files:**
- Modify: `js/data/skills.js`
- Modify: `js/data/timeline.js`
- Modify: `js/data/projects.js`

**Interfaces:**
- Consumes: Image files from Task 1
- Produces: Updated export constants (`skillsData`, `timelineData`, `projectsData`)

- [ ] **Step 1: Update `js/data/skills.js`**

Replace content of `js/data/skills.js` with:

```javascript
export const skillsData = [
  {
    category: "Backend & Systems",
    items: [
      { name: "PHP / Laravel", level: 92 },
      { name: "RESTful API", level: 92 },
      { name: "PostgreSQL & MySQL", level: 90 },
      { name: "System Architecture", level: 88 }
    ]
  },
  {
    category: "Frontend & UI",
    items: [
      { name: "JavaScript (ES6+) / TypeScript", level: 90 },
      { name: "jQuery", level: 88 },
      { name: "HTML5 & CSS3 Architecture", level: 95 },
      { name: "UI/UX & Responsive Design", level: 90 },
      { name: "Web Performance Optimization", level: 88 }
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git & GitHub Workflow", level: 92 },
      { name: "Docker & Containerization", level: 82 },
      { name: "CI/CD Deployment", level: 80 }
    ]
  },
  {
    category: "Engineering Practices & AI Workflow",
    items: [
      { name: "Spec-Driven Development (SDD)", level: 90 },
      { name: "Test-Driven Development (TDD)", level: 88 },
      { name: "AI Agentic Coding & Prompt Engineering", level: 92 },
      { name: "Systematic Debugging & Code Review Gates", level: 90 }
    ]
  }
];
```

- [ ] **Step 2: Update `js/data/timeline.js`**

Replace content of `js/data/timeline.js` with:

```javascript
export const timelineData = [
  {
    period: "Mei 2024 — Sekarang",
    role: "Full-Stack Software Engineer",
    company: "Software Solutions / ERP & HMIS / SIMRS",
    description: "Mengembangkan arsitektur aplikasi enterprise berskala menengah ke atas, sistem manajemen logistik, aplikasi manajemen farmasi, dan aplikasi administrasi pemerintahan/instansi, serta sistem akuntansi terpadu.",
    highlights: [
      "Merancang arsitektur backend berskala enterprise berbasis PHP/Laravel dan C#/ASP.NET Core 8.",
      "Memimpin integrasi modul SIMRS (RME, Farmasi, Bridging API BPJS/LIS/PACS) dan sistem ERP Logistik.",
      "Mengoptimalkan kueri basis data dan alur transaksi akuntansi neraca laba rugi."
    ],
    tech: ["PHP / Laravel", "C# / ASP.NET Core 8", "PostgreSQL", "MySQL", "RESTful API"]
  }
];
```

- [ ] **Step 3: Update `js/data/projects.js`**

Replace content of `js/data/projects.js` with:

```javascript
export const projectsData = [
  {
    id: "asl-logistics",
    title: "ASL Freight & Logistics System",
    category: "fullstack",
    summary: "Sistem manajemen logistik, warehouse, & freight forwarding terpadu dengan modul akuntansi (Buku Besar, Kas/Bank, Penjualan, Pembelian, dan Manajemen Proyek).",
    image: "assets/images/asl_logistics_dashboard.png",
    techStack: ["PHP 8.2", "Laravel 11", "MySQL", "DataTables", "DomPDF", "Excel"],
    architecture: {
      overview: "Arsitektur Modular Monolith berbasis Laravel 11 dengan modul Freight Forwarding, Warehouse Management System (WMS), dan Ledger Accounting terintegrasi.",
      diagramSvg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; background:var(--bg-main); padding:1rem; border-radius:8px;">
        <rect x="20" y="70" width="130" height="60" rx="6" fill="var(--bg-surface)" stroke="var(--accent-cyan)" stroke-width="2"/>
        <text x="85" y="105" fill="var(--text-primary)" font-size="12" text-anchor="middle" font-family="sans-serif">Frontend / DataTables</text>
        <path d="M150 100 L220 100" stroke="var(--accent-cyan)" stroke-width="2"/>
        <rect x="230" y="70" width="140" height="60" rx="6" fill="var(--bg-surface)" stroke="var(--accent-indigo)" stroke-width="2"/>
        <text x="300" y="105" fill="var(--text-primary)" font-size="12" text-anchor="middle" font-family="sans-serif">Laravel 11 Core</text>
        <path d="M370 100 L440 100" stroke="var(--accent-indigo)" stroke-width="2"/>
        <rect x="450" y="70" width="130" height="60" rx="6" fill="var(--bg-surface)" stroke="var(--status-green)" stroke-width="2"/>
        <text x="515" y="105" fill="var(--text-primary)" font-size="12" text-anchor="middle" font-family="sans-serif">MySQL Database</text>
      </svg>`,
      challenges: [
        "Penyusunan laporan neraca saldo dan buku besar terpadu antar modul transaksi.",
        "Generasi dokumen PDF manifes dan laporan ekspedisi dalam format kustom."
      ]
    },
    githubUrl: "https://github.com/adi-jaya"
  },
  {
    id: "ehos-simrs",
    title: "EHOS v2 — SIMRS / HMIS",
    category: "fullstack",
    summary: "Hospital Management Information System (SIMRS/HMIS) dengan Rekam Medis Elektronik (RME), manajemen farmasi, serta integrasi/bridging API (BPJS, LIS, PACS).",
    image: "assets/images/simrs_ehos_dashboard.png",
    techStack: ["PHP", "Laravel", "MySQL", "REST API Bridging", "JavaScript"],
    architecture: {
      overview: "Arsitektur Sistem Informasi Manajemen Rumah Sakit (SIMRS) berbasis Service Bridging untuk pengolahan rekam medis elektronik RME dan sinkronisasi layanan BPJS.",
      diagramSvg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; background:var(--bg-main); padding:1rem; border-radius:8px;">
        <rect x="20" y="70" width="130" height="60" rx="6" fill="var(--bg-surface)" stroke="var(--status-green)" stroke-width="2"/>
        <text x="85" y="105" fill="var(--text-primary)" font-size="12" text-anchor="middle" font-family="sans-serif">RME / Yanmed UI</text>
        <path d="M150 100 L220 100" stroke="var(--status-green)" stroke-width="2"/>
        <rect x="230" y="70" width="140" height="60" rx="6" fill="var(--bg-surface)" stroke="var(--accent-cyan)" stroke-width="2"/>
        <text x="300" y="105" fill="var(--text-primary)" font-size="12" text-anchor="middle" font-family="sans-serif">Laravel Engine</text>
        <path d="M370 100 L440 100" stroke="var(--accent-cyan)" stroke-width="2"/>
        <rect x="450" y="70" width="130" height="60" rx="6" fill="var(--bg-surface)" stroke="var(--accent-indigo)" stroke-width="2"/>
        <text x="515" y="105" fill="var(--text-primary)" font-size="12" text-anchor="middle" font-family="sans-serif">API Bridging BPJS</text>
      </svg>`,
      challenges: [
        "Keamanan dan kerahasiaan data rekam medis pasien sesuai regulasi kesehatan.",
        "Integrasi API LIS & PACS untuk transmisi hasil lab secara real-time."
      ]
    },
    githubUrl: "https://github.com/adi-jaya"
  },
  {
    id: "mires-erp",
    title: "Mires Enterprise ERP System v3.1",
    category: "fullstack",
    summary: "Sistem Informasi Enterprise (ERP) mencakup manajemen transaksi penjualan, service & job management, HRGA, serta engine akuntansi & buku besar terpadu.",
    image: "assets/images/mires_erp_dashboard.png",
    techStack: ["PHP", "Laravel", "MySQL", "REST API", "JavaScript"],
    architecture: {
      overview: "Arsitektur Enterprise ERP terpusat yang menghubungkan manajemen HR, pekerjaan servis, transaksi penjualan, hingga jurnal keuangan buku besar.",
      diagramSvg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; background:var(--bg-main); padding:1rem; border-radius:8px;">
        <rect x="20" y="70" width="130" height="60" rx="6" fill="var(--bg-surface)" stroke="var(--accent-indigo)" stroke-width="2"/>
        <text x="85" y="105" fill="var(--text-primary)" font-size="12" text-anchor="middle" font-family="sans-serif">HRGA & Sales Portal</text>
        <path d="M150 100 L220 100" stroke="var(--accent-indigo)" stroke-width="2"/>
        <rect x="230" y="70" width="140" height="60" rx="6" fill="var(--bg-surface)" stroke="var(--accent-cyan)" stroke-width="2"/>
        <text x="300" y="105" fill="var(--text-primary)" font-size="12" text-anchor="middle" font-family="sans-serif">ERP Core Engine</text>
        <path d="M370 100 L440 100" stroke="var(--accent-cyan)" stroke-width="2"/>
        <rect x="450" y="70" width="130" height="60" rx="6" fill="var(--bg-surface)" stroke="var(--status-green)" stroke-width="2"/>
        <text x="515" y="105" fill="var(--text-primary)" font-size="12" text-anchor="middle" font-family="sans-serif">Accounting DB</text>
      </svg>`,
      challenges: [
        "Konsistensi pencatatan transaksi multi-cabang dan approval flow bertingkat.",
        "Pelaporan posisi keuangan terpadu secara real-time."
      ]
    },
    githubUrl: "https://github.com/adi-jaya"
  },
  {
    id: "popeye-trans",
    title: "Popeye Transport & Logistics System",
    category: "fullstack",
    summary: "Sistem Manajemen Transportasi & Logistik (TMS) untuk pengoperasian armada kendaraan, pelacakan operasional pengiriman, akuntansi buku besar, dan closing bulanan.",
    image: "assets/images/popeye_trans_dashboard.png",
    techStack: ["PHP", "Laravel", "MySQL", "DataTables", "Bootstrap"],
    architecture: {
      overview: "Sistem Manajemen Armada & Operasional Pengiriman (TMS) terintegrasi dengan modul pengeluaran kas/bank dan audit closing bulanan.",
      diagramSvg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; background:var(--bg-main); padding:1rem; border-radius:8px;">
        <rect x="20" y="70" width="130" height="60" rx="6" fill="var(--bg-surface)" stroke="var(--accent-cyan)" stroke-width="2"/>
        <text x="85" y="105" fill="var(--text-primary)" font-size="12" text-anchor="middle" font-family="sans-serif">Operasional Armada</text>
        <path d="M150 100 L220 100" stroke="var(--accent-cyan)" stroke-width="2"/>
        <rect x="230" y="70" width="140" height="60" rx="6" fill="var(--bg-surface)" stroke="var(--accent-indigo)" stroke-width="2"/>
        <text x="300" y="105" fill="var(--text-primary)" font-size="12" text-anchor="middle" font-family="sans-serif">Laravel TMS</text>
        <path d="M370 100 L440 100" stroke="var(--accent-indigo)" stroke-width="2"/>
        <rect x="450" y="70" width="130" height="60" rx="6" fill="var(--bg-surface)" stroke="var(--status-green)" stroke-width="2"/>
        <text x="515" y="105" fill="var(--text-primary)" font-size="12" text-anchor="middle" font-family="sans-serif">Closing Engine DB</text>
      </svg>`,
      challenges: [
        "Otomatisasi kalkulasi biaya operasional jalan armada kendaraan.",
        "Verifikasi closing bulanan yang cepat dan akurat."
      ]
    },
    githubUrl: "https://github.com/adi-jaya"
  }
];
```

- [ ] **Step 4: Commit data updates**

```bash
git add js/data/*.js
git commit -m "feat: update skills, timeline, and projects data with real entries"
```

---

### Task 3: Update UI Components & Page Metadata

**Files:**
- Modify: `index.html`
- Modify: `js/components/hero.js`
- Modify: `js/components/contact.js`
- Modify: `js/components/projects.js`

**Interfaces:**
- Consumes: Exported data from Task 2
- Produces: Updated DOM render functions displaying project screenshot images & updated text

- [ ] **Step 1: Update `index.html`**

Update `title` tag in `index.html`:
`<title>Muhammad Adi Wijaya — Full-Stack Software Engineer & System Architect</title>`

- [ ] **Step 2: Update `js/components/hero.js`**

Update name, bio, and core stack badges in `js/components/hero.js`:
- Name: **Muhammad Adi Wijaya**
- Bio: "Halo, saya **Muhammad Adi Wijaya**. Berfokus pada perancangan arsitektur backend berkinerja tinggi, sistem ERP enterprise, SIMRS/HMIS, dan pembuatan aplikasi web modern berbasis Laravel, .NET Core, & modern JavaScript."
- Core Stack Badges: `PHP / Laravel`, `JavaScript / TypeScript`, `PostgreSQL & MySQL`, `RESTful API`, `Docker`

- [ ] **Step 3: Update `js/components/contact.js`**

Update email to `adijaya.adiwijaya@gmail.com` and footer text copyright to `© 2026 Muhammad Adi Wijaya. Built with Vanilla HTML/CSS/JS — Hosted on GitHub Pages.`.

- [ ] **Step 4: Update `js/components/projects.js` to render image banners**

Ensure project cards display the `project.image` screenshot banner if provided:
In project card HTML generation:
```javascript
${project.image ? `<div style="overflow:hidden; border-bottom:1px solid var(--border-color); aspect-ratio:16/9;"><img src="${project.image}" alt="${project.title}" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 0.3s ease;" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'"></div>` : ''}
```

- [ ] **Step 5: Commit component changes**

```bash
git add index.html js/components/*.js
git commit -m "feat: update hero, contact info, and project card image rendering"
```

---

### Task 4: Final Verification & Smoke Test

- [ ] **Step 1: Run static check / verification**

Verify files exist and contain valid JS syntax using node check or static inspection.

- [ ] **Step 2: Final commit and verify git working tree clean**

```bash
git status
```
