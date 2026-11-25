export type Language = 'id' | 'en';

export interface DocumentationItem {
  id: string;
  title: Record<Language, string>;
  categoryKey: 'work' | 'internship' | 'project' | 'organization';
  categoryLabel: Record<Language, string>;
  subCategory?: string;
  locationOrOrg: string;
  year: Record<Language, string>;
  description: Record<Language, string>;
  imageUrl?: string;
  defaultPlaceholder: string;
}

export interface ExperienceItem {
  id: string;
  period: Record<Language, string>;
  role: Record<Language, string>;
  organization: Record<Language, string>;
  location: string;
  type: Record<Language, string>;
  categoryKey: 'iot' | 'work' | 'internship';
  highlight: Record<Language, string>;
  visualTag: Record<Language, string>;
  description: Record<Language, string>;
  bullets: Record<Language, string[]>;
  skills: Record<Language, string[]>;
}

export interface ProjectItem {
  id: string;
  year: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  partner: string;
  category: Record<Language, string>;
  description: Record<Language, string>;
  stats?: Record<Language, string>;
  features: Record<Language, string[]>;
  tools: string[];
  image: string;
}

export interface SkillItem {
  name: Record<Language, string>;
  category: 'technical' | 'soft';
  level: Record<Language, string>;
  highlight?: boolean;
}

export interface OrganizationItem {
  year: string;
  role: Record<Language, string>;
  organization: string;
  categoryLabel: Record<Language, string>;
  highlight: Record<Language, string>;
}

export interface CertificateItem {
  year: string;
  validUntil: Record<Language, string>;
  title: Record<Language, string>;
  issuer: string;
  grade?: Record<Language, string>;
  credentialId: string;
  skills: Record<Language, string[]>;
}

export const PROFILE = {
  name: 'Upik Zeni Alin Triyani',
  shortName: 'Upik Zeni',
  nickname: 'Jeni',
  location: 'Jakarta Selatan, DKI Jakarta',
  locationEn: 'South Jakarta, Indonesia',
  email: 'upikzeni4@gmail.com',
};

export const UI_COPY: Record<
  Language,
  {
    nav: {
      profile: string;
      experience: string;
      projects: string;
      gallery: string;
      skills: string;
      contact: string;
      cta: string;
    };
    controls: {
      themeLight: string;
      themeDark: string;
      langId: string;
      langEn: string;
    };
    hero: {
      eyebrow: string;
      locationLine: string;
      bioMain: string;
      bioSub: string;
      ctaPrimary: string;
      copyEmail: string;
      emailCopied: string;
      focus1: string;
      focus2: string;
      focus3: string;
      portraitBadge: string;
      snapshotRole1: string;
      snapshotOrg1: string;
      snapshotRole2: string;
      snapshotOrg2: string;
      cards: {
        eduLabel: string;
        eduTitle: string;
        eduDesc: string;
        workLabel: string;
        workTitle: string;
        workDesc: string;
        iotLabel: string;
        iotTitle: string;
        iotDesc: string;
        certLabel: string;
        certTitle: string;
        certDesc: string;
      };
    };
    experience: {
      sectionLabel: string;
      title: string;
      hint: string;
      selectPrompt: string;
      highlightPrefix: string;
      responsibilitiesTitle: string;
      toolsTitle: string;
      contextTitle: string;
      verifiedText: string;
      seeDocs: string;
    };
    projects: {
      sectionLabel: string;
      title: string;
      subtitle: string;
      focusTitle: string;
      learnMore: string;
      modalAdvantages: string;
      partnerPrefix: string;
      close: string;
    };
    gallery: {
      sectionLabel: string;
      title: string;
      ownerModeOn: string;
      ownerModeOff: string;
      ownerNoticeTitle: string;
      ownerNoticeBody: string;
      filterAll: string;
      filterWork: string;
      filterInternship: string;
      filterProject: string;
      filterOrg: string;
      tapHint: string;
      customBadge: string;
      viewFull: string;
      changePhoto: string;
      cancel: string;
      replaceTitle: string;
      pickFile: string;
      orUrl: string;
      save: string;
      resetDefault: string;
      savedSuccess: string;
      closeModal: string;
    };
    skills: {
      sectionLabel: string;
      title: string;
      subtitle: string;
      countSuffix: string;
      filterAll: string;
      filterTech: string;
      filterSoft: string;
      searchPlaceholder: string;
      techLabel: string;
      softLabel: string;
      coreLabel: string;
      empty: string;
    };
    org: {
      sectionLabel: string;
      title: string;
      subtitle: string;
    };
    certs: {
      sectionLabel: string;
      title: string;
      subtitle: string;
      validityPrefix: string;
      issuerPrefix: string;
      scopeTitle: string;
      regNo: string;
      verified: string;
    };
    contact: {
      eyebrow: string;
      title: string;
      desc: string;
      sendBtn: string;
      directEmailBtn: string;
      emailLabel: string;
      locationLabel: string;
      rights: string;
      emailSubjectPrefill: string;
      emailBodyPrefill: string;
    };
    modal: {
      eyebrow: string;
      title: string;
      subtitle: string;
      emailLabel: string;
      privacyNoteLabel: string;
      privacyNoteValue: string;
      nameLabel: string;
      namePlaceholder: string;
      senderEmailLabel: string;
      senderEmailPlaceholder: string;
      topicLabel: string;
      topics: string[];
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      openingEmail: string;
      closeLabel: string;
    };
  }
> = {
  id: {
    nav: {
      profile: 'Profil',
      experience: 'Pengalaman',
      projects: 'Proyek',
      gallery: 'Dokumentasi',
      skills: 'Keahlian',
      contact: 'Kontak',
      cta: 'Hubungi Saya',
    },
    controls: {
      themeLight: 'Terang',
      themeDark: 'Gelap',
      langId: 'ID',
      langEn: 'EN',
    },
    hero: {
      eyebrow: 'Sistem Informasi · Peminatan Data Science',
      locationLine: 'DKI Jakarta · Universitas Budi Luhur',
      bioMain:
        'Mahasiswi Sistem Informasi di Universitas Budi Luhur—lebih sering dipanggil Jeni—yang berfokus pada pengembangan sistem informasi, pengelolaan data, dan solusi berbasis teknologi. Telah terlibat langsung dalam proyek nyata untuk masyarakat melalui capstone project, mulai dari pengembangan perangkat hingga integrasi sistem bersama tim.',
      bioSub:
        'Teliti, terstruktur, dan terbiasa menerjemahkan kebutuhan pengguna menjadi solusi yang berfungsi.',
      ctaPrimary: 'Ajak Diskusi & Magang',
      copyEmail: 'upikzeni4@gmail.com',
      emailCopied: 'Email Disalin',
      focus1: 'Tata Kelola Arsip & Basis Data',
      focus2: 'Pengembangan IoT & Integrasi Sistem',
      focus3: 'Sertifikasi BNSP KKNI Level II',
      portraitBadge: 'STATUS AKTIF · 2026',
      snapshotRole1: 'Staff Data Aktif',
      snapshotOrg1: 'Yayasan Ummi Nurul Hasanah',
      snapshotRole2: 'Mahasiswi S1',
      snapshotOrg2: 'Sistem Informasi UBL',
      cards: {
        eduLabel: 'Pendidikan Sekarang',
        eduTitle: 'Universitas Budi Luhur',
        eduDesc: 'S1 Sistem Informasi · Peminatan Data Science. Fokus perancangan basis data dan analisis data.',
        workLabel: 'Pekerjaan Sekarang',
        workTitle: 'Data Administrator Staff',
        workDesc: 'Yayasan Ummi Nurul Hasanah (2022 — Sekarang). Mengelola dokumen operasional & arsip digital.',
        iotLabel: 'Capstone Project',
        iotTitle: 'IoT Developer · FloodGuard',
        iotDesc: 'Sistem peringatan dini banjir berbasis sensor untuk RW 08 Taman Cipulir Estate (Sep 2026 — Jan 2027 · 4 Bulan).',
        certLabel: 'Lisensi Kompetensi',
        certTitle: 'BNSP KKNI Level II',
        certDesc: 'Tenaga Perkantoran Umum resmi berstandar nasional. Berlaku aktif hingga Mei 2027.',
      },
    },
    experience: {
      sectionLabel: '02 · Rekam Jejak Karier',
      title: 'Pengalaman Profesional, Capstone & Praktik Industri',
      hint: 'Pilih peran di kiri untuk melihat rincian tugas',
      selectPrompt: 'Pilih Pengalaman',
      highlightPrefix: 'Highlight:',
      responsibilitiesTitle: 'Tanggung Jawab & Pencapaian Utama:',
      toolsTitle: 'Kompetensi & Perangkat yang Digunakan:',
      contextTitle: 'Lingkup & Konteks Instansi',
      verifiedText: 'Berkas Terverifikasi',
      seeDocs: 'Lihat Dokumentasi',
    },
    projects: {
      sectionLabel: '03 · Proyek & Inovasi Edukatif',
      title: 'Gamifikasi, Edukasi & Dampak Sosial',
      subtitle: 'Karya kolaboratif institusi pendidikan',
      focusTitle: 'Fokus Implementasi:',
      learnMore: 'Pelajari Selengkapnya',
      modalAdvantages: 'Keunggulan & Nilai Edukasi:',
      partnerPrefix: 'Mitra:',
      close: 'Tutup',
    },
    gallery: {
      sectionLabel: '04 · Galeri Dokumentasi',
      title: 'Dokumentasi Arsip, Kantor & Organisasi',
      ownerModeOn: 'Mode Pemilik: Aktif',
      ownerModeOff: 'Mode Pemilik (Ubah Foto)',
      ownerNoticeTitle: 'Keamanan Saat Dihosting:',
      ownerNoticeBody:
        'Pengunjung luar tidak bisa mengubah foto di server Anda. Perubahan foto di mode ini tersimpan lokal di browser perangkat Anda (localStorage).',
      filterAll: 'Semua',
      filterWork: 'Pekerjaan',
      filterInternship: 'Prakerin',
      filterProject: 'Proyek',
      filterOrg: 'Organisasi',
      tapHint: 'Ketuk kartu untuk memperbesar foto',
      customBadge: 'Foto Kustom',
      viewFull: 'Lihat Penuh',
      changePhoto: 'Ganti Foto',
      cancel: 'Batal',
      replaceTitle: 'Ganti Foto:',
      pickFile: 'Pilih dari HP / Laptop:',
      orUrl: 'Atau Tempel Link Foto (URL):',
      save: 'Simpan',
      resetDefault: 'Kembalikan ke Foto Default',
      savedSuccess: 'Foto berhasil disimpan di browser.',
      closeModal: 'Tutup Tampilan',
    },
    skills: {
      sectionLabel: '05 · Portofolio Kompetensi',
      title: 'Keahlian Teknis & Komunikasi',
      subtitle: 'Kombinasi ketelitian pengelolaan data, pemodelan sistem informasi, integrasi IoT, dan komunikasi publik.',
      countSuffix: 'Keahlian Terpilih',
      filterAll: 'Semua',
      filterTech: 'Teknis & Data',
      filterSoft: 'Interpersonal & Komunikasi',
      searchPlaceholder: 'Cari keahlian...',
      techLabel: 'Keahlian Teknis',
      softLabel: 'Keahlian Interpersonal',
      coreLabel: 'Utama',
      empty: 'Tidak ada keahlian yang sesuai dengan pencarian.',
    },
    org: {
      sectionLabel: '06 · Aktivitas & Kepengurusan',
      title: 'Pengalaman Organisasi, Kepanitiaan & Komunitas',
      subtitle: 'Jejak kepengurusan OSIS, kehumasan & relawan kampus',
    },
    certs: {
      sectionLabel: '07 · Kredensial & Lisensi',
      title: 'Sertifikasi Kompetensi Terakreditasi',
      subtitle: 'Standar Nasional & Industri',
      validityPrefix: 'Masa Berlaku:',
      issuerPrefix: 'Penerbit:',
      scopeTitle: 'Cakupan Standar Kompetensi:',
      regNo: 'No. Registrasi / Sertifikat:',
      verified: 'Terverifikasi Resmi',
    },
    contact: {
      eyebrow: 'Tersedia untuk Magang & Peluang 2026',
      title: 'Mari Berdiskusi Soal Data, Sistem Informasi, atau Proyek.',
      desc: 'Tertarik mengundang Jeni untuk memperkuat tim pengelolaan data, pengembangan sistem informasi & IoT, atau mendiskusikan peluang magang? Silakan hubungi melalui formulir pesan atau email resmi.',
      sendBtn: 'Kirim Pesan Sekarang',
      directEmailBtn: 'Kirim Email Langsung',
      emailLabel: 'Email Resmi',
      locationLabel: 'Lokasi Domisili',
      rights: 'Upik Zeni Alin Triyani · All Rights Reserved.',
      emailSubjectPrefill: 'Diskusi Peluang Magang / Kolaborasi - Portofolio Jeni',
      emailBodyPrefill: 'Halo Jeni (Upik Zeni),\n\nSaya menghubungi Anda melalui web portofolio untuk mendiskusikan...',
    },
    modal: {
      eyebrow: 'Mari Terhubung',
      title: 'Hubungi Jeni (Upik Zeni)',
      subtitle: 'Siap untuk wawancara magang, proyek sistem informasi & IoT, pengelolaan data, atau kolaborasi acara.',
      emailLabel: 'Email Resmi (Klik untuk Salin)',
      privacyNoteLabel: 'Kontak Telepon / WhatsApp',
      privacyNoteValue: 'Dibagikan secara privat setelah komunikasi via Email',
      nameLabel: 'Nama Anda / Instansi',
      namePlaceholder: 'Contoh: Tim Rekrutmen Perusahaan / Panitia Event',
      senderEmailLabel: 'Alamat Email Anda',
      senderEmailPlaceholder: 'nama@perusahaan.com',
      topicLabel: 'Topik Diskusi',
      topics: [
        'Internship / Lowongan Kerja Data',
        'Proyek Sistem Informasi / IoT',
        'Permintaan Kontak WhatsApp / Jadwal Meeting',
        'Master of Ceremony / Event Hosting',
        'Lainnya',
      ],
      messageLabel: 'Pesan Singkat',
      messagePlaceholder: 'Tuliskan gambaran singkat tawaran, jadwal, atau proyek...',
      submit: 'Kirim Pesan via Email',
      openingEmail: 'Membuka Aplikasi Email Anda...',
      closeLabel: 'Tutup Dialog',
    },
  },
  en: {
    nav: {
      profile: 'Profile',
      experience: 'Experience',
      projects: 'Projects',
      gallery: 'Gallery',
      skills: 'Skills',
      contact: 'Contact',
      cta: 'Contact Me',
    },
    controls: {
      themeLight: 'Light',
      themeDark: 'Dark',
      langId: 'ID',
      langEn: 'EN',
    },
    hero: {
      eyebrow: 'Information Systems · Data Science Track',
      locationLine: 'South Jakarta · Budi Luhur University',
      bioMain:
        'Information Systems undergraduate at Budi Luhur University—more commonly called Jeni—focusing on information systems development, data management, and technology-based solutions. Directly involved in real-world community projects through a capstone project, from hardware development to team-based system integration.',
      bioSub:
        'Detail-oriented, structured, and accustomed to translating user needs into working solutions.',
      ctaPrimary: 'Discuss & Internships',
      copyEmail: 'upikzeni4@gmail.com',
      emailCopied: 'Email Copied',
      focus1: 'Data & Archive Governance',
      focus2: 'IoT Device & System Integration',
      focus3: 'BNSP KKNI Level II Certified',
      portraitBadge: 'ACTIVE · 2026',
      snapshotRole1: 'Active Data Staff',
      snapshotOrg1: 'Yayasan Ummi Nurul Hasanah',
      snapshotRole2: 'B.Sc. Student',
      snapshotOrg2: 'Information Systems UBL',
      cards: {
        eduLabel: 'Current Education',
        eduTitle: 'Budi Luhur University',
        eduDesc: 'B.Sc. in Information Systems · Data Science Track. Focus on database design and data analysis.',
        workLabel: 'Current Role',
        workTitle: 'Data Administrator Staff',
        workDesc: 'Yayasan Ummi Nurul Hasanah (2022 — Present). Managing operational records and digital archives.',
        iotLabel: 'Capstone Project',
        iotTitle: 'IoT Developer · FloodGuard',
        iotDesc: 'Sensor-based flood early warning system for RW 08 Taman Cipulir Estate (Sep 2026 — Jan 2027 · 4 Months).',
        certLabel: 'Competency License',
        certTitle: 'BNSP KKNI Level II',
        certDesc: 'Nationally accredited General Office Administration license. Valid through May 2027.',
      },
    },
    experience: {
      sectionLabel: '02 · Career Track',
      title: 'Professional Experience, Capstone & Internships',
      hint: 'Select a role on the left to inspect responsibilities',
      selectPrompt: 'Select Experience',
      highlightPrefix: 'Highlight:',
      responsibilitiesTitle: 'Key Responsibilities & Achievements:',
      toolsTitle: 'Competencies & Tools Used:',
      contextTitle: 'Scope & Institutional Context',
      verifiedText: 'Verified Record',
      seeDocs: 'View Documentation',
    },
    projects: {
      sectionLabel: '03 · Projects & Educational Innovation',
      title: 'Gamification, Education & Social Impact',
      subtitle: 'Collaborative work with educational institutions',
      focusTitle: 'Implementation Focus:',
      learnMore: 'Learn More',
      modalAdvantages: 'Key Strengths & Educational Value:',
      partnerPrefix: 'Partner:',
      close: 'Close',
    },
    gallery: {
      sectionLabel: '04 · Documentation Gallery',
      title: 'Archive, Office & Organization Documentation',
      ownerModeOn: 'Owner Mode: Active',
      ownerModeOff: 'Owner Mode (Edit Photo)',
      ownerNoticeTitle: 'Hosting Security Notice:',
      ownerNoticeBody:
        'External visitors cannot alter server photos. Changes in this mode are saved locally in your browser (localStorage).',
      filterAll: 'All',
      filterWork: 'Work',
      filterInternship: 'Internship',
      filterProject: 'Projects',
      filterOrg: 'Organization',
      tapHint: 'Click any card to enlarge photo',
      customBadge: 'Custom Photo',
      viewFull: 'View Full',
      changePhoto: 'Change Photo',
      cancel: 'Cancel',
      replaceTitle: 'Replace Photo:',
      pickFile: 'Choose from device:',
      orUrl: 'Or paste image URL:',
      save: 'Save',
      resetDefault: 'Reset to Default Photo',
      savedSuccess: 'Photo saved in browser.',
      closeModal: 'Close View',
    },
    skills: {
      sectionLabel: '05 · Competency Portfolio',
      title: 'Technical & Communication Skills',
      subtitle: 'Combining structured data governance, information systems modeling, IoT integration, and public communication.',
      countSuffix: 'Selected Skills',
      filterAll: 'All',
      filterTech: 'Technical & Data',
      filterSoft: 'Interpersonal & Communication',
      searchPlaceholder: 'Search skills...',
      techLabel: 'Technical Skill',
      softLabel: 'Interpersonal Skill',
      coreLabel: 'Core',
      empty: 'No skills match your search query.',
    },
    org: {
      sectionLabel: '06 · Leadership & Activities',
      title: 'Organization, Committee & Community Experience',
      subtitle: 'Student council leadership, PR & campus volunteering',
    },
    certs: {
      sectionLabel: '07 · Credentials & Licenses',
      title: 'Accredited Competency Certifications',
      subtitle: 'National & Industry Standards',
      validityPrefix: 'Valid:',
      issuerPrefix: 'Issuer:',
      scopeTitle: 'Competency Standards Covered:',
      regNo: 'Registration / Certificate No:',
      verified: 'Officially Verified',
    },
    contact: {
      eyebrow: 'Available for Internships & Opportunities 2026',
      title: 'Let’s Discuss Data, Information Systems, or Projects.',
      desc: 'Interested in collaborating with Jeni on data administration, information systems & IoT projects, or internship opportunities? Reach out via the message form or official email.',
      sendBtn: 'Send Message Now',
      directEmailBtn: 'Send Direct Email',
      emailLabel: 'Official Email',
      locationLabel: 'Location',
      rights: 'Upik Zeni Alin Triyani · All Rights Reserved.',
      emailSubjectPrefill: 'Internship / Collaboration Inquiry - Jeni Portfolio',
      emailBodyPrefill: 'Hello Jeni (Upik Zeni),\n\nI am reaching out via your portfolio website to discuss...',
    },
    modal: {
      eyebrow: 'Get in Touch',
      title: 'Contact Jeni (Upik Zeni)',
      subtitle: 'Ready for internship interviews, information systems & IoT projects, data management, or event hosting.',
      emailLabel: 'Official Email (Click to Copy)',
      privacyNoteLabel: 'Phone / WhatsApp Contact',
      privacyNoteValue: 'Shared privately upon initial Email confirmation',
      nameLabel: 'Your Name / Organization',
      namePlaceholder: 'e.g. Hiring Team / Event Committee',
      senderEmailLabel: 'Your Email Address',
      senderEmailPlaceholder: 'name@company.com',
      topicLabel: 'Discussion Topic',
      topics: [
        'Data / IT Internship',
        'Information Systems / IoT Project',
        'Request WhatsApp / Meeting Schedule',
        'Master of Ceremony / Event Hosting',
        'Other',
      ],
      messageLabel: 'Short Message',
      messagePlaceholder: 'Write a brief overview of the opportunity, schedule, or project...',
      submit: 'Send Message via Email',
      openingEmail: 'Opening Email Application...',
      closeLabel: 'Close Dialog',
    },
  },
};

export const INITIAL_DOCUMENTATIONS: DocumentationItem[] = [
  {
    id: 'doc-yayasan',
    title: {
      id: 'Dokumentasi Data Administrasi Yayasan',
      en: 'Foundation Administrative Data Management',
    },
    categoryKey: 'work',
    categoryLabel: { id: 'Pekerjaan', en: 'Work' },
    locationOrOrg: 'Yayasan Ummi Nurul Hasanah',
    year: { id: '2022 — Sekarang', en: '2022 — Present' },
    description: {
      id: 'Pengelolaan berkas fisik, digitalisasi spreadsheet, dan penataan arsip persuratan operasional yayasan.',
      en: 'Physical records management, spreadsheet digitization, and structured operational correspondence archiving.',
    },
    defaultPlaceholder: '/panti.jpeg',
  },
  {
    id: 'doc-pupr',
    title: {
      id: 'Dokumentasi Prakerin Ditjen Sumber Daya Air',
      en: 'Internship at Directorate General of Water Resources',
    },
    categoryKey: 'internship',
    categoryLabel: { id: 'Prakerin', en: 'Internship' },
    locationOrOrg: 'Ditjen SDA — Kementerian PUPR',
    year: { id: 'Feb — Mar 2023', en: 'Feb — Mar 2023' },
    description: {
      id: 'Kegiatan pengarsipan dokumen kenegaraan, klasifikasi surat sesuai SOP, dan rekapitulasi data Excel.',
      en: 'State document archiving, SOP-compliant mail classification, and Excel correspondence recaps.',
    },
    defaultPlaceholder: '/puor.jpeg',
  },
  {
    id: 'doc-walikota',
    title: {
      id: 'Dokumentasi Bagian Tata Pemerintahan',
      en: 'Governance Administration Division',
    },
    categoryKey: 'internship',
    categoryLabel: { id: 'Prakerin', en: 'Internship' },
    locationOrOrg: 'Kantor Walikota Jakarta Selatan',
    year: { id: 'Sep — Nov 2022', en: 'Sep — Nov 2022' },
    description: {
      id: 'Pengelolaan administrasi surat dinas masuk/keluar serta pengarsipan agenda kerja tata pemerintahan.',
      en: 'Managing incoming/outgoing official correspondence and archiving municipal governance schedules.',
    },
    defaultPlaceholder: '/walikota.jpg',
  },
  {
    id: 'doc-roblox',
    title: {
      id: 'Dokumentasi Game Edukasi Roblox "KUSAM"',
      en: 'Roblox Educational Game "KUSAM"',
    },
    categoryKey: 'project',
    categoryLabel: { id: 'Proyek', en: 'Projects' },
    locationOrOrg: 'MIN 9 Jakarta Selatan',
    year: { id: '2025', en: '2025' },
    description: {
      id: 'Sesi pengenalan dan penerapan gamifikasi edukasi interaktif berbasis Roblox bagi siswa madrasah.',
      en: 'Interactive Roblox-based educational gamification session implemented for elementary madrasah students.',
    },
    defaultPlaceholder: '/kusam.jpeg',
  },
  {
    id: 'doc-budi-luhur',
    title: {
      id: 'Dokumentasi Edukasi Pemilahan Sampah',
      en: 'Waste Sorting Education Program',
    },
    categoryKey: 'project',
    categoryLabel: { id: 'Proyek', en: 'Projects' },
    locationOrOrg: 'SDI Darul Muttaqiem',
    year: { id: '2025', en: '2025' },
    description: {
      id: 'Penerapan aplikasi wawasan Budi Luhur dan pendampingan praktik pilah sampah untuk siswa sekolah dasar.',
      en: 'Community outreach teaching waste sorting practices grounded in Budi Luhur values for elementary students.',
    },
    defaultPlaceholder: '/awbl.jpeg',
  },
  {
    id: 'doc-osis',
    title: {
      id: 'Dokumentasi Kepengurusan OSIS',
      en: 'Student Council (OSIS) Leadership',
    },
    categoryKey: 'organization',
    categoryLabel: { id: 'Organisasi', en: 'Organization' },
    subCategory: 'OSIS',
    locationOrOrg: 'SMK Puspita Persada',
    year: { id: '2022 — 2024', en: '2022 — 2024' },
    description: {
      id: 'Dokumentasi kepengurusan sebagai Wakil Ketua dan Sekretaris OSIS, rapat koordinasi program kerja, dan tata kelola persuratan.',
      en: 'Serving as Vice President and Secretary of OSIS, coordinating student programs and administrative correspondence.',
    },
    defaultPlaceholder: '/2.png',
  },
  {
    id: 'doc-kampus',
    title: {
      id: 'Dokumentasi Kegiatan Kampus & Relawan',
      en: 'Campus & Volunteer Activities',
    },
    categoryKey: 'organization',
    categoryLabel: { id: 'Organisasi', en: 'Organization' },
    subCategory: 'Kampus',
    locationOrOrg: 'Universitas Budi Luhur',
    year: { id: '2024 — Sekarang', en: '2024 — Present' },
    description: {
      id: 'Keikutsertaan aktif dalam UBL Volunteer Community, kepanitiaan Kartini Week, dan aksi sosial mahasiswa.',
      en: 'Active participation in UBL Volunteer Community, Kartini Week committee, and campus social initiatives.',
    },
    defaultPlaceholder: '/kampus.jpg',
  },
  {
    id: 'doc-mc',
    title: {
      id: 'Dokumentasi Master of Ceremony (MC)',
      en: 'Master of Ceremony (MC) Appearances',
    },
    categoryKey: 'organization',
    categoryLabel: { id: 'Organisasi', en: 'Organization' },
    subCategory: 'MC',
    locationOrOrg: 'Panggung Acara & Institusi',
    year: { id: '2023 — Sekarang', en: '2023 — Present' },
    description: {
      id: 'Dokumentasi sebagai pemandu acara (MC) pada wisuda purna siswa, peringatan hari besar, dan acara resmi kepanitiaan.',
      en: 'Hosting formal graduation ceremonies, institutional commemorations, and committee events.',
    },
    defaultPlaceholder: '/1.png',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'tce-floodguard-iot',
    period: {
      id: 'Sep 2026 — Jan 2027 (4 Bulan)',
      en: 'Sep 2026 — Jan 2027 (4 Months)',
    },
    role: {
      id: 'IoT Developer',
      en: 'IoT Developer',
    },
    organization: {
      id: 'Universitas Budi Luhur',
      en: 'Budi Luhur University',
    },
    location: 'Jakarta, Indonesia',
    type: {
      id: 'Capstone Project',
      en: 'Capstone Project',
    },
    categoryKey: 'iot',
    highlight: {
      id: 'Mengembangkan perangkat IoT sistem peringatan dini banjir TCE FloodGuard untuk RW 08 Taman Cipulir Estate (4 bulan).',
      en: 'Developed the IoT monitoring device for TCE FloodGuard, a 4-month flood early warning system capstone for RW 08 Taman Cipulir Estate.',
    },
    visualTag: {
      id: 'Proyek Capstone Kampus (Pengganti KKP)',
      en: 'Campus Capstone Project (KKP Replacement)',
    },
    description: {
      id: 'Proyek capstone kampus berdurasi 4 bulan (pengganti program KKP): TCE FloodGuard, sistem peringatan dini banjir untuk RW 08 Taman Cipulir Estate, Tangerang. Bertanggung jawab mengembangkan perangkat IoT sebagai bagian dari tim.',
      en: '4-month campus capstone project (replacing the KKP field program): TCE FloodGuard, a flood early warning system for RW 08 Taman Cipulir Estate, Tangerang. Responsible for developing the IoT device as part of a team.',
    },
    bullets: {
      id: [
        'Mengembangkan perangkat pemantau banjir dengan sensor ketinggian air, aliran air, dan curah hujan yang menghasilkan data penentu tingkat siaga (Aman, Waspada, Siaga).',
        'Memprogram firmware untuk membaca data sensor dan mengirimkannya ke server lokal secara berkala.',
        'Berkolaborasi dengan rekan tim yang menangani dashboard serta notifikasi WhatsApp untuk mengintegrasikan keseluruhan sistem.',
      ],
      en: [
        'Developed a flood monitoring device with water level, flow, and rainfall sensors, providing the data used to determine alert levels (Safe, Caution, Alert).',
        'Programmed firmware to read sensor data and send it to a local server at regular intervals.',
        'Collaborated with teammates handling the dashboard and WhatsApp notifications to integrate the full system.',
      ],
    },
    skills: {
      id: [
        'Perangkat Keras IoT',
        'Pemrograman Firmware',
        'Sensor Air & Curah Hujan',
        'Integrasi Server Lokal',
        'Kolaborasi Sistem Tim',
      ],
      en: [
        'IoT Hardware',
        'Embedded Firmware',
        'Water & Rainfall Sensors',
        'Local Server Integration',
        'Team System Integration',
      ],
    },
  },
  {
    id: 'ummi-nurul-hasanah',
    period: {
      id: '2022 — Sekarang',
      en: '2022 — Present',
    },
    role: {
      id: 'Data Administrator Staff',
      en: 'Data Administrator Staff',
    },
    organization: {
      id: 'Yayasan Ummi Nurul Hasanah',
      en: 'Yayasan Ummi Nurul Hasanah',
    },
    location: 'Jakarta, Indonesia',
    type: {
      id: 'Pekerjaan',
      en: 'Employment',
    },
    categoryKey: 'work',
    highlight: {
      id: 'Mengelola arsip operasional dan basis data yayasan secara terpusat dan rapi.',
      en: 'Managing centralized operational archives and foundation databases with high accuracy.',
    },
    visualTag: {
      id: 'Kantor Yayasan & Database',
      en: 'Foundation Office & Database',
    },
    description: {
      id: 'Bertanggung jawab atas keakuratan data administrasi, kearsipan fisik, serta kelancaran distribusi korespondensi organisasi.',
      en: 'Responsible for administrative data accuracy, physical record-keeping, and timely distribution of organizational correspondence.',
    },
    bullets: {
      id: [
        'Mengelola data administrasi yayasan secara terstruktur dengan sistem klasifikasi.',
        'Mengarsipkan dokumen fisik maupun arsip digital berbasis Google Workspace & Excel spreadsheet.',
        'Mengatur disposisi surat masuk dan surat keluar untuk memastikan operasional tepat waktu.',
      ],
      en: [
        'Managed foundation administrative records using a structured classification system.',
        'Archived both physical documents and digital spreadsheets across Google Workspace and Microsoft Excel.',
        'Coordinated incoming and outgoing correspondence routing to keep daily operations on schedule.',
      ],
    },
    skills: {
      id: ['Data Entry', 'Google Workspace', 'Analisis Spreadsheet', 'Sistem Kearsipan', 'Arsip Digital'],
      en: ['Data Entry', 'Google Workspace', 'Spreadsheet Analysis', 'Filing Systems', 'Digital Archiving'],
    },
  },
  {
    id: 'pupr-sda',
    period: {
      id: 'Feb — Mar 2023',
      en: 'Feb — Mar 2023',
    },
    role: {
      id: 'Praktik Kerja Industri (Prakerin)',
      en: 'Industrial Internship (Prakerin)',
    },
    organization: {
      id: 'Direktorat Jenderal Sumber Daya Air — Kementerian PUPR',
      en: 'Directorate General of Water Resources — Ministry of PUPR',
    },
    location: 'Jakarta Selatan',
    type: {
      id: 'Prakerin',
      en: 'Internship',
    },
    categoryKey: 'internship',
    highlight: {
      id: 'Mendukung digitalisasi arsip kearsipan kementerian dengan format terstandarisasi.',
      en: 'Supported ministry record digitization under standardized government SOP formats.',
    },
    visualTag: {
      id: 'Instansi Pemerintahan Pusat',
      en: 'Central Government Institution',
    },
    description: {
      id: 'Terlibat langsung dalam tata kelola administrasi dokumen teknis dan persuratan di lingkungan Ditjen Sumber Daya Air.',
      en: 'Directly involved in technical document governance and official correspondence workflows at the Directorate General of Water Resources.',
    },
    bullets: {
      id: [
        'Mengelola dan mengarsipkan dokumen administrasi kenegaraan dengan kodefikasi resmi.',
        'Mengklasifikasikan dokumen sesuai standar operasional prosedur (SOP) Kementerian PUPR.',
        'Menginput rekapitulasi arsip surat masuk dan keluar secara akurat ke dalam format Excel.',
        'Membantu penataan ruang penyimpanan arsip aktif dan inaktif.',
      ],
      en: [
        'Managed and archived official state administrative documents using standardized classification codes.',
        'Categorized records strictly following Ministry of PUPR standard operating procedures (SOP).',
        'Recorded incoming and outgoing correspondence logs accurately into structured Excel spreadsheets.',
        'Assisted in organizing active and inactive physical archive storage.',
      ],
    },
    skills: {
      id: ['Microsoft Excel', 'Klasifikasi Dokumen', 'Administrasi Pemerintahan', 'Standardisasi SOP'],
      en: ['Microsoft Excel', 'Document Classification', 'Public Administration', 'SOP Standardization'],
    },
  },
  {
    id: 'walikota-jaksel',
    period: {
      id: 'Sep — Nov 2022',
      en: 'Sep — Nov 2022',
    },
    role: {
      id: 'Praktik Kerja Industri (Prakerin)',
      en: 'Industrial Internship (Prakerin)',
    },
    organization: {
      id: 'Bagian Tata Pemerintahan — Kantor Walikota Adm. Jakarta Selatan',
      en: 'Governance Division — South Jakarta Mayor Office',
    },
    location: 'Jakarta Selatan',
    type: {
      id: 'Prakerin',
      en: 'Internship',
    },
    categoryKey: 'internship',
    highlight: {
      id: 'Mendukung kelancaran birokrasi dan agenda kerja operasional Tata Pemerintahan.',
      en: 'Supported administrative workflows and daily operational schedules for municipal governance.',
    },
    visualTag: {
      id: 'Kantor Walikota Jakarta Selatan',
      en: 'South Jakarta Mayor Office',
    },
    description: {
      id: 'Melaksanakan tugas kesekretariatan dan tata kelola surat-menyurat resmi tingkat kota administrasi.',
      en: 'Executed secretarial and official municipal correspondence management tasks.',
    },
    bullets: {
      id: [
        'Mengelola administrasi surat dinas masuk dan keluar dengan pencatatan nomor agenda.',
        'Mendata dan mengarsipkan berkas pemerintahan agar mudah ditelusuri kapan saja.',
        'Mendukung penyusunan agenda kegiatan kerja harian pimpinan dan tim operasional.',
        'Berkoordinasi dengan staf lintas divisi dalam penyaluran nota dinas.',
      ],
      en: [
        'Processed incoming and outgoing official letters with systematic agenda numbering.',
        'Cataloged and filed municipal governance documents for fast retrieval.',
        'Assisted in preparing daily work schedules for leadership and operational teams.',
        'Coordinated with cross-division staff for internal memorandum distribution.',
      ],
    },
    skills: {
      id: ['Tata Kelola Surat', 'Agenda Kerja', 'Filing System', 'Komunikasi Birokrasi'],
      en: ['Correspondence Management', 'Scheduling', 'Filing Systems', 'Bureaucratic Communication'],
    },
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'kusam-roblox',
    year: '2025',
    title: {
      id: 'Game Edukasi Roblox "KUSAM"',
      en: 'Roblox Educational Game "KUSAM"',
    },
    subtitle: {
      id: 'Kolaborasi Kreatif bersama MIN 9 Jakarta Selatan',
      en: 'Creative Collaboration with MIN 9 South Jakarta',
    },
    partner: 'MIN 9 Jakarta Selatan',
    category: {
      id: 'Gamifikasi & Teknologi Interaktif',
      en: 'Gamification & Interactive Tech',
    },
    description: {
      id: 'Membangun lingkungan pembelajaran interaktif di platform Roblox untuk mengenalkan konsep edukatif secara menyenangkan bagi siswa madrasah.',
      en: 'Built an interactive learning environment on Roblox to introduce educational concepts in an engaging way for elementary madrasah students.',
    },
    stats: {
      id: '80+ Siswa Terlibat',
      en: '80+ Students Engaged',
    },
    features: {
      id: [
        'Desain level interaktif yang mendorong pemahaman logika dan kerja tim anak.',
        'Penyusunan materi edukasi yang diselaraskan dengan kurikulum sekolah dasar/madrasah.',
        'Eksplorasi virtual yang aman, ramah anak, dan meningkatkan antusiasme belajar siswa.',
      ],
      en: [
        'Interactive level design encouraging logical thinking and teamwork among students.',
        'Educational content aligned with elementary madrasah learning objectives.',
        'Safe, child-friendly virtual exploration that boosts student engagement.',
      ],
    },
    tools: ['Roblox Studio', 'Game Design', 'Interactive Learning'],
    image: '/kusam.jpeg',
  },
  {
    id: 'wawasan-budi-luhur',
    year: '2025',
    title: {
      id: 'Wawasan Budi Luhur',
      en: 'Budi Luhur Environmental Insight',
    },
    subtitle: {
      id: 'Edukasi Pemilahan Sampah di SDI Darul Muttaqiem',
      en: 'Waste Sorting Education at SDI Darul Muttaqiem',
    },
    partner: 'SDI Darul Muttaqiem',
    category: {
      id: 'Edukasi & Dampak Sosial',
      en: 'Education & Social Impact',
    },
    description: {
      id: 'Kegiatan edukasi lingkungan yang mengenalkan pentingnya pemilahan sampah kepada siswa sekolah dasar melalui penerapan 9 nilai Kebudiluhuran dalam kehidupan sehari-hari.',
      en: 'An environmental education initiative introducing waste sorting to elementary students through the practical application of the 9 Budi Luhur values.',
    },
    stats: {
      id: 'Edukasi & Praktik Nyata',
      en: 'Theory & Hands-on Practice',
    },
    features: {
      id: [
        'Pengenalan jenis-jenis sampah organik dan anorganik serta dampaknya terhadap lingkungan.',
        'Penyampaian materi yang mengintegrasikan 9 nilai Kebudiluhuran dalam sikap peduli dan bertanggung jawab terhadap lingkungan.',
        'Praktik langsung memilah sampah sesuai jenisnya di lingkungan sekolah.',
        'Mengajak siswa membangun kebiasaan menjaga kebersihan melalui tindakan sederhana.',
      ],
      en: [
        'Introduced organic and inorganic waste categories and their environmental impact.',
        'Integrated the 9 Budi Luhur character values into environmental responsibility.',
        'Facilitated hands-on waste sorting practice directly on school grounds.',
        'Encouraged students to build daily cleanliness habits through practical action.',
      ],
    },
    tools: ['Environmental Education', '9 Nilai Kebudiluhuran', 'Interactive Learning', 'Practical Activity'],
    image: '/awbl.jpeg',
  },
];

export const SKILLS: SkillItem[] = [
  {
    name: { id: 'Analisis Data', en: 'Data Analysis' },
    category: 'technical',
    level: { id: 'Sedang Didalami', en: 'Developing' },
    highlight: true,
  },
  {
    name: { id: 'Entity Relationship (ERD)', en: 'Entity Relationship (ERD)' },
    category: 'technical',
    level: { id: 'Menengah', en: 'Intermediate' },
    highlight: true,
  },
  {
    name: { id: 'Unified Modeling Language (UML)', en: 'Unified Modeling Language (UML)' },
    category: 'technical',
    level: { id: 'Menengah', en: 'Intermediate' },
    highlight: true,
  },
  {
    name: { id: 'Pengembangan IoT & Firmware', en: 'IoT Device & Firmware' },
    category: 'technical',
    level: { id: 'Capstone 4 Bulan', en: '4-Month Capstone' },
    highlight: true,
  },
  {
    name: { id: 'Google Workspace', en: 'Google Workspace' },
    category: 'technical',
    level: { id: 'Mahir', en: 'Proficient' },
    highlight: false,
  },
  {
    name: { id: 'Microsoft Office & Excel', en: 'Microsoft Office & Excel' },
    category: 'technical',
    level: { id: 'Mahir', en: 'Proficient' },
    highlight: true,
  },
  {
    name: { id: 'Arsip Dokumen Digital', en: 'Digital Document Archiving' },
    category: 'technical',
    level: { id: 'Mahir', en: 'Proficient' },
    highlight: true,
  },
  {
    name: { id: 'Canva & Media Visual', en: 'Canva & Visual Media' },
    category: 'technical',
    level: { id: 'Kreatif', en: 'Creative' },
    highlight: false,
  },
  {
    name: { id: 'Public Speaking', en: 'Public Speaking' },
    category: 'soft',
    level: { id: 'Berpengalaman', en: 'Experienced' },
    highlight: true,
  },
  {
    name: { id: 'Master of Ceremony (MC)', en: 'Master of Ceremony (MC)' },
    category: 'soft',
    level: { id: 'Berpengalaman', en: 'Experienced' },
    highlight: true,
  },
  {
    name: { id: 'Kepemimpinan & Koordinasi', en: 'Leadership & Coordination' },
    category: 'soft',
    level: { id: 'Aktif Organisasi', en: 'Active Leader' },
    highlight: true,
  },
  {
    name: { id: 'Ketelitian & Detail Presisi', en: 'Attention to Detail' },
    category: 'soft',
    level: { id: 'Kuat', en: 'Strong' },
    highlight: true,
  },
  {
    name: { id: 'Problem Solving', en: 'Problem Solving' },
    category: 'soft',
    level: { id: 'Solutif', en: 'Structured' },
    highlight: false,
  },
  {
    name: { id: 'Manajemen Waktu & Multitasking', en: 'Time Management & Multitasking' },
    category: 'soft',
    level: { id: 'Terbiasa', en: 'Consistent' },
    highlight: false,
  },
];

export const ORGANIZATIONS: OrganizationItem[] = [
  {
    year: '2026',
    role: {
      id: 'Humas — Kartini Week 2026',
      en: 'Public Relations — Kartini Week 2026',
    },
    organization: 'UBL Volunteer Community (Universitas Budi Luhur)',
    categoryLabel: {
      id: 'Komunitas & Humas',
      en: 'Community & PR',
    },
    highlight: {
      id: 'Menjalin relasi media, publikasi kegiatan sukarelawan, dan mengoordinasikan delegasi acara.',
      en: 'Managed media relations, volunteer event publicity, and delegate coordination.',
    },
  },
  {
    year: '2024',
    role: {
      id: 'Master of Ceremony — Wisuda & Isra Mi’raj',
      en: 'Master of Ceremony — Graduation & Isra Mi’raj',
    },
    organization: 'SMK Puspita Persada',
    categoryLabel: {
      id: 'Master of Ceremony',
      en: 'Master of Ceremony',
    },
    highlight: {
      id: 'Memandu jalannya prosesi wisuda formal dan peringatan hari besar keagamaan di hadapan ratusan audiens.',
      en: 'Hosted formal graduation ceremonies and institutional commemorations for hundreds of attendees.',
    },
  },
  {
    year: '2023 — 2024',
    role: {
      id: 'Wakil Ketua OSIS',
      en: 'Vice President of Student Council (OSIS)',
    },
    organization: 'SMK Puspita Persada',
    categoryLabel: {
      id: 'Kepemimpinan OSIS',
      en: 'Student Leadership',
    },
    highlight: {
      id: 'Memimpin delegasi program kerja kesiswaan, memediasi aspirasi siswa, dan menyukseskan puluhan event sekolah.',
      en: 'Led student council initiatives, mediated student aspirations, and coordinated school-wide programs.',
    },
  },
  {
    year: '2022',
    role: {
      id: 'Sekretaris Utama OSIS',
      en: 'Chief Secretary of Student Council (OSIS)',
    },
    organization: 'SMK Puspita Persada',
    categoryLabel: {
      id: 'Kepemimpinan OSIS',
      en: 'Student Leadership',
    },
    highlight: {
      id: 'Mengelola seluruh administrasi persuratan, notulensi rapat pleno, dan proposal kegiatan OSIS.',
      en: 'Managed official correspondence, plenary meeting minutes, and activity proposals for the student council.',
    },
  },
];

export const CERTIFICATIONS: CertificateItem[] = [
  {
    year: '2024 — 2027',
    validUntil: { id: 'Mei 2027', en: 'May 2027' },
    title: {
      id: 'Tenaga Perkantoran Umum, KKNI Level II',
      en: 'General Office Administration Personnel, KKNI Level II',
    },
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    credentialId: '82110 4110 2 0001369 2024',
    skills: {
      id: ['Pengelolaan Dokumen', 'Komunikasi Kantor', 'Sistem Kearsipan Nasional'],
      en: ['Document Management', 'Office Communication', 'National Archiving System'],
    },
  },
  {
    year: '2024 — 2027',
    validUntil: { id: '2027', en: '2027' },
    title: {
      id: 'Manajemen Perkantoran & Layanan Bisnis',
      en: 'Office Management & Business Services',
    },
    issuer: 'SMK Puspita Persada & PT. Jaya Edutama Karya',
    grade: {
      id: 'Predikat: Sangat Kompeten (A)',
      en: 'Grade: Highly Competent (A)',
    },
    credentialId: '2023190248829882100001',
    skills: {
      id: ['Otomatisasi Tata Kelola Perkantoran', 'Layanan Bisnis Prima', 'Pelaporan Keuangan & Dokumen'],
      en: ['Office Governance Automation', 'Business Service Excellence', 'Financial & Document Reporting'],
    },
  },
];
