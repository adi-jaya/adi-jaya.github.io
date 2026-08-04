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
