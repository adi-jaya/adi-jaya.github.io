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
