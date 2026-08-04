# Portfolio Website Design Spec — `adi-jaya.github.io`

**Date**: 2026-08-04  
**Author**: Adi Jaya  
**Target Repository**: `https://github.com/adi-jaya/adi-jaya.github.io`  
**Stack**: Vanilla HTML5, Custom CSS Design System, Modular JavaScript (ES6 Modules)  
**Hosting**: GitHub Pages  

---

## 1. Overview & Goals

This specification defines the architecture, design system, component breakdown, and feature requirements for building a high-performance, responsive personal portfolio for **Adi Jaya** as a **Full-Stack Software Engineer & System Architect**.

### Key Objectives
1. **High Visual Impact**: Clean & Minimalist Tech aesthetic with modern typography, subtle micro-animations, generous spacing, and a seamless Dark/Light theme switcher.
2. **Comprehensive Showcase**: Highlight complex full-stack projects with technical architecture breakdowns, career/education timeline, categorized skills radar, contact options, and a downloadable CV.
3. **Interactive Demos**: Include an in-browser Interactive Playground (API / System Architecture Simulator) to demonstrate practical engineering depth.
4. **Maximum Performance**: Target 100/100 Core Web Vitals using modular Vanilla web technologies without heavy framework bundles.

---

## 2. Project Structure & Architecture

```
adi-jaya.github.io/
├── index.html              # Accessible, SEO-optimized HTML5 entry point
├── css/
│   ├── main.css            # Master stylesheet importing variables & modules
│   ├── variables.css       # Design tokens (Colors dark/light, fonts, spacing, shadows)
│   ├── components.css      # Component styles (Cards, Modals, Buttons, Badges, Forms)
│   └── animations.css      # Smooth transitions & micro-interactions
├── js/
│   ├── main.js             # Application initialization
│   ├── data/
│   │   ├── projects.js     # Projects dataset (tech stack, architecture info, demo/repo links)
│   │   ├── timeline.js     # Experience, education, & milestone data
│   │   └── skills.js       # Skills taxonomy & proficiency data
│   ├── components/
│   │   ├── theme.js        # Light/Dark mode switcher with localStorage persistence
│   │   ├── navbar.js       # Sticky header & active navigation state
│   │   ├── projectModal.js # Interactive project detail & architecture modal
│   │   └── playground.js   # Live interactive API/System architecture simulator
│   └── utils/
│       └── filter.js       # Search & category filter logic
├── assets/
│   ├── images/             # Project screenshots & media assets
│   └── docs/               # Downloadable Resume / CV (PDF)
└── docs/
    └── superpowers/specs/  # Design specs directory
```

---

## 3. UI Layout & Component Breakdown

### 3.1 Header & Navigation Bar
- **Brand Identity**: Logo/Initials "AJ" with a live status pulse badge ("Available for projects/roles").
- **Navigation Links**: Smooth scroll triggers for `Projects`, `Experience`, `Skills`, `Playground`, `Contact`.
- **Theme Toggle**: Icon button switching between Sun/Moon icons with CSS theme transitions.
- **CTA**: Direct button to download CV (`assets/docs/resume.pdf`).
- **Behavior**: Sticky header with glassmorphism backdrop filter (`backdrop-filter: blur(12px)`).

### 3.2 Hero Section
- **Headline**: High-contrast typography: *"Adi Jaya — Full-Stack Software Engineer & System Architect"*.
- **Sub-headline**: Concise summary of full-stack engineering expertise, scalable backend design, and modern web application development.
- **Action Buttons**: Primary CTA *"Explore Projects"* and Secondary CTA *"Get in Touch"*.
- **Quick Tech Badges**: Prominent badges for core skills (e.g., Node.js, Go, React, PostgreSQL, Docker, AWS).

### 3.3 Featured Projects Showcase
- **Category Filters**: Interactive tabs for `All`, `Full-Stack`, `Backend & APIs`, `Frontend UI`.
- **Project Cards**: Clean cards featuring project title, screenshot placeholder, brief summary, tech tags, and a "View Architecture" button.
- **Architecture Modal**: Triggered on card click, presenting:
  - Technical decisions & rationale.
  - Interactive System Architecture Diagram (Mermaid / SVG rendered).
  - Key technical challenges resolved.
  - Direct links to Live Demo and GitHub repository.

### 3.4 Interactive Experience & Timeline
- **Vertical Timeline**: Chronological presentation of career roles, key projects, and education.
- **Timeline Cards**: Company name/project title, role, date range, bullet points with quantifiable engineering achievements, and tech stack tags.

### 3.5 Technical Skills & Searchable Radar
- **Skill Categories**:
  - *Backend & Systems*: API Design, Microservices, Databases (SQL/NoSQL), Caching, System Design.
  - *Frontend & UI*: HTML5/CSS3 Architecture, ES6+ JavaScript, UI Performance, Responsive Web.
  - *DevOps & Infrastructure*: Git, Docker, CI/CD Pipelines, Cloud Services, Linux Administration.
- **Interactive Filtering**: Clicking any skill tag filters the projects section to display relevant projects utilizing that skill.

### 3.6 Live Interactive Playground (Full-Stack Simulator)
- **API & System Architecture Simulator**:
  - Allows recruiters/visitors to execute simulated HTTP endpoints (`GET /api/v1/health`, `POST /api/v1/orders`, `GET /api/v1/analytics`).
  - Displays real-time mock latency, HTTP response status codes, formatted JSON payloads, and visual data-flow steps.

### 3.7 Contact Section & Footer
- **Contact Form**: Client-side validated contact form with quick auto-fill mailto helper.
- **Professional Links**: GitHub, LinkedIn, Email, Twitter/X.
- **Footer**: Credits & indicator *"Built with Vanilla HTML/CSS/JS — Hosted on GitHub Pages"*.

---

## 4. Design System & Theme Specification

### 4.1 Color Palettes

#### Dark Mode (Default)
- `background-main`: `#0a0d12`
- `surface-card`: `#121721`
- `border-subtle`: `#1f293d`
- `text-primary`: `#f1f5f9`
- `text-secondary`: `#94a3b8`
- `accent-cyan`: `#38bdf8`
- `accent-indigo`: `#818cf8`

#### Light Mode
- `background-main`: `#f8fafc`
- `surface-card`: `#ffffff`
- `border-subtle`: `#e2e8f0`
- `text-primary`: `#0f172a`
- `text-secondary`: `#475569`
- `accent-cyan`: `#0284c7`
- `accent-indigo`: `#4f46e5`

### 4.2 Typography & Micro-animations
- **Fonts**: `Inter` for general copy and body text; `JetBrains Mono` for code snippets, tech tags, and JSON output.
- **Animations**: Subtle CSS transitions (200ms ease-in-out) for hover states, theme toggles, modal fades, and filter transitions.

---

## 5. SEO & Core Web Vitals Strategy

- **Semantic HTML**: Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- **Meta Tags**: Title, description, viewport, keywords, Open Graph (`og:title`, `og:image`, `og:description`), and Twitter Cards.
- **Performance**: Zero external JS dependencies, lightweight CSS, inline critical styling, and responsive image assets.
