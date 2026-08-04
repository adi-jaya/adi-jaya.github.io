# Portfolio Content & Design Specification

**Date:** 2026-08-04  
**Author:** Muhammad Adi Wijaya & Antigravity AI  
**Target File Location:** `docs/superpowers/specs/2026-08-04-portfolio-content-update-design.md`  

---

## 1. Overview & Objective
Update the developer portfolio content and visual assets for **Muhammad Adi Wijaya**. The updates replace template/placeholder entries with actual enterprise background data, active real-world projects (Laravel-based systems), updated tech stack, and engineering practices including SDD, TDD, and AI Agentic Coding.

---

## 2. Hero & Contact Data

### Hero Section (`js/components/hero.js` & `index.html`)
- **Full Name:** Muhammad Adi Wijaya
- **Role / Title:** Full-Stack Software Engineer & System Architect
- **Headline:** Building Scalable Systems & Enterprise Web Architecture
- **Bio:** Halo, saya **Muhammad Adi Wijaya**. Berfokus pada perancangan arsitektur backend berkinerja tinggi, sistem ERP enterprise, SIMRS/HMIS, dan pembuatan aplikasi web modern berbasis Laravel, .NET Core, & modern JavaScript.
- **Core Stack Badges:** `PHP / Laravel`, `JavaScript / TypeScript`, `PostgreSQL & MySQL`, `RESTful API`, `Docker`
- **Status:** Open for contracts & consulting

### Contact Information (`js/components/contact.js`)
- **Email:** `adijaya.adiwijaya@gmail.com`
- **GitHub:** `https://github.com/adi-jaya`
- **Footer Text:** `© 2026 Muhammad Adi Wijaya. Built with Vanilla HTML/CSS/JS — Hosted on GitHub Pages.`

---

## 3. Skills & Tech Stack (`js/data/skills.js`)

The skills grid is structured into 4 distinct categories:

1. **Backend & Systems**
   - PHP / Laravel (92%)
   - RESTful API (92%)
   - PostgreSQL & MySQL (90%)
   - System Architecture (88%)

2. **Frontend & UI**
   - JavaScript (ES6+) / TypeScript (90%)
   - jQuery (88%)
   - HTML5 & CSS3 Architecture (95%)
   - UI/UX & Responsive Design (90%)
   - Web Performance Optimization (88%)

3. **DevOps & Tools**
   - Git & GitHub Workflow (92%)
   - Docker & Containerization (82%)
   - CI/CD Deployment (80%)

4. **Engineering Practices & AI Workflow**
   - Spec-Driven Development (SDD) (90%)
   - Test-Driven Development (TDD) (88%)
   - AI Agentic Coding & Prompt Engineering (92%)
   - Systematic Debugging & Code Review Gates (90%)

---

## 4. Experience & Timeline (`js/data/timeline.js`)

- **Period:** Mei 2024 — Sekarang
- **Role:** Full-Stack Software Engineer
- **Company / Project:** Software Solutions / ERP & HMIS / SIMRS
- **Description:** Mengembangkan arsitektur aplikasi enterprise berskala menengah ke atas, sistem manajemen logistik, aplikasi manajemen farmasi, dan aplikasi administrasi pemerintahan/instansi, serta sistem akuntansi terpadu.
- **Highlights:**
  - Merancang arsitektur backend berskala enterprise berbasis PHP/Laravel dan C#/ASP.NET Core 8.
  - Memimpin integrasi modul SIMRS (RME, Farmasi, Bridging API BPJS/LIS/PACS) dan sistem ERP Logistik.
  - Mengoptimalkan kueri basis data dan alur transaksi akuntansi neraca laba rugi.
- **Tech Stack:** `PHP / Laravel`, `C# / ASP.NET Core 8`, `PostgreSQL`, `MySQL`, `RESTful API`

---

## 5. Featured Projects (`js/data/projects.js`)

Each project card features a 16:9 visual UI screenshot preview and an interactive detail modal containing architecture notes, SVG diagrams, key challenges, and technology badges.

1. **ASL Freight & Logistics System**
   - **Client/Context:** PT Artalapan Strategi Logistik
   - **Image Path:** `assets/images/asl_logistics_dashboard.png`
   - **Summary:** Sistem manajemen logistik, warehouse, & freight forwarding terpadu dengan modul akuntansi (Buku Besar, Kas/Bank, Penjualan, Pembelian, dan Manajemen Proyek).
   - **Tech Stack:** `PHP 8.2`, `Laravel 11`, `MySQL`, `DataTables`, `DomPDF`, `Excel`

2. **EHOS v2 — SIMRS / HMIS**
   - **Client/Context:** RS Siti Khodijah
   - **Image Path:** `assets/images/simrs_ehos_dashboard.png`
   - **Summary:** Hospital Management Information System (SIMRS/HMIS) dengan Rekam Medis Elektronik (RME), manajemen farmasi, serta integrasi/bridging API (BPJS, LIS, PACS).
   - **Tech Stack:** `PHP`, `Laravel`, `MySQL`, `REST API Bridging`, `JavaScript`

3. **Mires Enterprise ERP System v3.1**
   - **Client/Context:** PT Mires Mahisa Globalindo
   - **Image Path:** `assets/images/mires_erp_dashboard.png`
   - **Summary:** Sistem Informasi Enterprise (ERP) mencakup manajemen transaksi penjualan, service & job management, HRGA, serta engine akuntansi & buku besar terpadu.
   - **Tech Stack:** `PHP`, `Laravel`, `MySQL`, `REST API`, `JavaScript`

4. **Popeye Transport & Logistics System**
   - **Client/Context:** PT Popeye Trans Logistik
   - **Image Path:** `assets/images/popeye_trans_dashboard.png`
   - **Summary:** Sistem Manajemen Transportasi & Logistik (TMS) untuk pengoperasian armada kendaraan, pelacakan operasional pengiriman, akuntansi buku besar, dan closing bulanan.
   - **Tech Stack:** `PHP`, `Laravel`, `MySQL`, `DataTables`, `Bootstrap`

---

## 6. Image Assets Plan
Generate 4 dark-themed, ultra-clean application dashboard mockups via `generate_image` tool:
- `asl_logistics_dashboard.png`: Freight forwarding & warehouse logistics UI dashboard.
- `simrs_ehos_dashboard.png`: Hospital SIMRS & electronic medical record (RME) dashboard.
- `mires_erp_dashboard.png`: Corporate ERP, HRGA, & sales ledger dashboard.
- `popeye_trans_dashboard.png`: Fleet transport management & trip manifest dashboard.

All images saved to `assets/images/`.

---

## 7. Verification Steps
1. Verify HTML & JS imports run cleanly without syntax errors or missing asset references.
2. Confirm dark mode theme compatibility for all text, cards, badges, images, and modal views.
3. Test interactive features: Project filter buttons, Modal opening/closing, Contact form validation, and responsive mobile layouts.
