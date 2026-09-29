# Kelvin Andrian Nataniel - Personal Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://drian.xyz)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/artxian/personal-web)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

> **Code Challenge 2 — Full Stack Web Development Program (Opsi A: Personal Website)**  
> Sebuah *Single-Page Application* (SPA) portofolio modern yang dirancang untuk menampilkan profil profesional, keahlian teknis (*skills*), dan portofolio proyek dengan arsitektur modular, performa ultra-cepat, tampilan responsif lintas perangkat, dan teroptimasi penuh untuk metrik **Google Core Web Vitals**.

---

## 📌 Daftar Isi

1. [Ringkasan Proyek](#-ringkasan-proyek)
2. [Demo & Tautan](#-demo--tautan)
3. [Arsitektur Styling & Keputusan Teknis](#-arsitektur-styling--keputusan-teknis-hybrid-css-architecture)
4. [Fitur Utama & State Management](#-fitur-utama--state-management)
5. [Optimasi Core Web Vitals & Accessibility](#-optimasi-core-web-vitals--accessibility-pagespeed-insights--lighthouse)
6. [Tech Stack](#-tech-stack)
7. [Struktur Direktori](#-struktur-direktori)
8. [Panduan Menjalankan Proyek di Lokal](#-panduan-menjalankan-proyek-di-lokal)
9. [Author](#-author)

---

## 🌟 Ringkasan Proyek

Website portofolio ini dibangun dari nol (*from scratch*) sebagai representasi profesional **Kelvin Andrian Nataniel** sebagai seorang *Full-Stack Software Developer*. Berfokus pada perpaduan estetika modern (desain *clean*, elegan, dan *liquid glassmorphism*) dengan prinsip rekayasa web terbaik:
- **Performa Tinggi**: Skor PageSpeed Insights / Lighthouse mendekati sempurna di semua kategori (Performance, Accessibility, Best Practices, SEO).
- **Stabilitas Layout**: Mencegah pergeseran tata letak (*zero Cumulative Layout Shift*).
- **Aksesibilitas Tinggi**: Kode HTML5 semantik dan dukungan navigasi ramah pembaca layar (*screen reader*).
- **Skalabilitas Konten**: Seluruh data profil terpisah secara modular (*data decoupling*) sehingga mudah diperbarui.

---

## 🔗 Demo & Tautan

- **Live Demo Website (Vercel)**: [https://drian.xyz](https://drian.xyz) *(atau domain deploy Vercel aktif)*
- **Repositori GitHub**: [https://github.com/artxian/personal-web](https://github.com/artxian/personal-web)

---

## 🎨 Arsitektur Styling & Keputusan Teknis (Hybrid CSS Architecture)

Proyek ini mengadopsi pendekatan **Hybrid Styling** yang mengombinasikan **80% Custom CSS** dan **20% Tailwind CSS**. Pendekatan ini dipilih melalui pertimbangan arsitektural yang matang untuk mencapai keseimbangan antara fleksibilitas visual dan efisiensi pengembangan.

```
                          ┌───────────────────────────────────────────────┐
                          │         Hybrid CSS Architecture               │
                          └───────┬───────────────────────────────┬───────┘
                                  │                               │
                       80% Custom CSS                    20% Tailwind CSS
                 (src/styles/components.css)           (Utility-First Layout)
                                  │                               │
            ┌─────────────────────┴─────────────┐         ┌───────┴─────────────────┐
            │ • Design System & Color Tokens    │         │ • Flexbox & Grid Matrix │
            │ • Light / Dark Mode Theming       │         │ • Spacing (Padding/Gap) │
            │ • Glassmorphism & Card Elevation  │         │ • Responsive Breakpoints│
            │ • Hover Effects & Micro-motions   │         │   (sm:, md:, lg:, xl:)  │
            │ • Custom Scrollbar & Typography   │         └─────────────────────────┘
            └───────────────────────────────────┘
```

### Mengapa 80% Custom CSS / 20% Tailwind CSS?

1. **Separation of Concerns & Code Readability**
   - Menghindari tumpukan puluhan *utility classes* dalam satu elemen JSX yang membuat file `.tsx` membengkak (*class bloat*).
   - Memisahkan logika interaksi komponen React dari aturan styling visual yang rumit, sehingga kode komponen tetap bersih, deklaratif, dan mudah dibaca oleh tim maupun instruktur.

2. **80% Custom CSS (`src/styles/components.css`)**
   - **Theming & Color Systems**: Mengatur palet warna terpusat, variabel CSS (CSS custom properties), dan perilaku *theme switching* (Light Mode & Dark Mode).
   - **Card & Component Styles**: Mengimplementasikan efek *liquid glass*, border halus (*subtle borders*), bayangan adaptif (*adaptive shadow*), dan *custom scrollbar*.
   - **Micro-Interactions & Animations**: Transisi halus saat *hover*, animasi putar/gelombang (*wave keyframes*), efek transisi tombol, serta efek *underline animation* pada tautan navigasi.

3. **20% Tailwind CSS (Layout & Breakpoints)**
   - **Grid & Flexbox Containers**: Mengelola tata letak makro halaman (`flex`, `grid`, `items-center`, `justify-between`).
   - **Spacing & Alignment**: Menjaga konsistensi jarak antar elemen (`p-6`, `gap-8`, `mb-9`, `mx-auto`).
   - **Responsive Breakpoints**: Menggunakan modifier bawaan (`sm:`, `md:`, `lg:`, `xl:`) secara presisi untuk adaptasi layar ponsel, tablet, hingga monitor resolusi ultra-wide (1920px+).

---

## ⚡ Fitur Utama & State Management

### 1. Smart Navbar & Mobile Navigation
- **Dynamic Scroll Header**: Header navbar cerdas yang mendeteksi arah scroll pengguna (sembunyi otomatis saat scroll ke bawah untuk memaksimalkan ruang baca, dan muncul kembali saat scroll ke atas).
- **Responsive Hamburger Drawer**: Drawer samping (*glassmorphic aside*) untuk tampilan mobile/tablet dengan animasi slide-in, tombol penutup eksplisit, dan fitur *scroll lock* pada `document.body` ketika menu terbuka.
- **Smooth Section Scrolling**: Navigasi mulus antar-section (`#about`, `#skills`, `#portfolio`, `#experience`, `#contact`).

### 2. Dark / Light Mode Toggle
- Dikelola interaktif menggunakan React `useState` dan disinkronkan langsung ke `localStorage`.
- Menerapkan manipulasi class `.dark` pada elemen root `<html>` dan `<body>` untuk transisi skema warna yang konsisten dan instan saat reload halaman tanpa *flash of unstyled content* (FOUC).

### 3. Portfolio Section (Metode STAR & Dynamic Filter)
- **Struktur STAR (Situation, Task, Action, Result)**: Setiap proyek portofolio diuraikan secara profesional mengacu pada standar industri untuk menonjolkan kemampuan pemecahan masalah teknis:
  - **Situation**: Konteks masalah dan tantangan yang dihadapi.
  - **Task**: Tujuan utama serta target yang harus dicapai.
  - **Action**: Langkah rekayasa perangkat lunak, arsitektur, dan teknologi yang diimplementasikan.
  - **Result**: Dampak konkret, peningkatan performa, atau hasil akhir yang terukur.
- **Category Filter State**: Filter proyek interaktif (*All*, *Frontend*, *Fullstack*, *Web App*) berbasis React `useState` yang memfilter koleksi proyek secara dinamis dan reaktif.

### 4. Categorized Skills, Timeline Experience, & Functional Contact Form
- **Skills & Technologies**: Dikelompokkan terstruktur menjadi 3 pilar:
  - *Front-End Development* (HTML5, CSS3, JavaScript, TypeScript, React, Tailwind CSS, Next.js, Redux).
  - *Back-End Development* (Node.js, Express.js, RESTful API, PostgreSQL, MongoDB, Prisma ORM, JWT).
  - *DevOps & Development Tools* (Git, Docker, Vercel, Netlify, CI/CD).
- **Experience Timeline**: Komponen linimasa vertikal dengan aksen garis & titik (*timeline dot*) untuk memvisualisasikan rekam jejak kerja, peranan, teknologi, dan pencapaian.
- **Interactive Contact Form**: Dilengkapi controlled inputs, validasi dasar, dan indikator *success notification* setelah pengiriman pesan.

### 5. Data Decoupling (`src/data/profileData.ts`)
- Seluruh konten biodata, daftar proyek, keahlian, pengalaman, dan kontak dipisahkan dari layer presentasi ke dalam file data tunggal berbasis TypeScript (`profileData.ts`).
- Menggunakan *strong typing* (`ProfileData`, `STARProject`, `ExperienceItem`, `SkillCategory`) sehingga pemeliharaan (*maintenance*) portofolio di kemudian hari dapat dilakukan tanpa perlu menyentuh kode komponen UI.

---

## 🚀 Optimasi Core Web Vitals & Accessibility (PageSpeed Insights / Lighthouse)

Proyek ini dirancang secara khusus untuk memenuhi kriteria ketat **Core Web Vitals Scoring (Bobot Penilaian 70%)** pada Code Challenge 2.

| Metrik Core Web Vitals | Parameter Evaluasi | Target Pengujian | Upaya Optimasi yang Diimplementasikan |
| :--- | :--- | :---: | :--- |
| **LCP** (*Largest Contentful Paint*) | Kecepatan elemen visual utama dimuat | **< 2.5 Detik** | Kompresi gambar ke format WebP, penempatan font lokal mandiri (*self-hosted* tanpa *blocking external network request*), serta `loading="eager"` dan `fetchpriority="high"` pada elemen hero banner. |
| **CLS** (*Cumulative Layout Shift*) | Stabilitas visual tampilan saat render | **< 0.1** | Pemberian atribut dimensi `width` dan `height` eksplisit pada seluruh tag `<img>`, icon SVG, serta container placeholder untuk mengeliminasi pergeseran layout. |
| **INP / FID** (*Interactivity*) | Responsivitas terhadap input pengguna | **< 200 ms** | Kode React yang ringan, pemanfaatan event listener pasif (`{ passive: true }`), *clean up* timer/scroll listener pada `useEffect`, dan nihil ketergantungan library pihak ketiga yang membebani *main thread*. |

### Accessibility (A11y) & SEO Excellence

- **Semantic HTML5 Elements**: Memanfaatkan struktur semantik baku (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
- **Descriptive Alt & ARIA Attributes**:
  - Seluruh gambar menyertakan atribut `alt` deskriptif.
  - Seluruh tombol ikon interaktif (seperti tombol dark mode, hamburger navigation, dan scroll-to-top) dilengkapi atribut `aria-label` dan `title`.
  - Tombol filter kategori portfolio menggunakan atribut `aria-pressed` untuk keterbacaan status aktif bagi pengguna pembaca layar (*screen reader*).
- **Comprehensive Meta Tags**:
  - `index.html` dilengkapi Open Graph (OG) tags, Twitter Card metadata, deskripsi komprehensif, kata kunci (*keywords*), tag `viewport`, dan `theme-color`.

### Target Skor Evaluasi Lighthouse & PageSpeed Insights

| Kategori | Target Skor | Deskripsi |
| :--- | :---: | :--- |
| 🚀 **Performance** | **95 - 100** | Kecepatan muat halaman kilat dan skor Core Web Vitals prima. |
| ♿ **Accessibility** | **100** | Kontras warna terstandar, navigasi keyboard ramah, atribut ARIA lengkap. |
| 🛡️ **Best Practices** | **100** | Standar keamanan modern, bebas error console, penggunaan HTTPS dan API modern. |
| 🔍 **SEO** | **100** | Struktur heading hierarkis (`h1` tunggal, `h2`, `h3`), meta deskripsi, dan crawlability tinggi. |

---

## 🛠️ Tech Stack

- **Core & Runtime**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool & Bundler**: [Vite](https://vitejs.dev/)
- **Styling Architecture**:
  - **Custom Vanilla CSS**: Design tokens, variables, glassmorphism, animations (`src/styles/components.css`)
  - **Tailwind CSS v4**: Utility-first spacing, flexbox, grid, responsive design (`@tailwindcss/vite`)
- **Animation / Visual Effects**: CSS Keyframes & Framer Motion (Aurora Background Canvas)
- **Icons & Utilities**: SVG Icons kustom, `clsx`, `tailwind-merge`
- **Quality & Linter**: Oxlint / ESLint
- **Deployment Platform**: [Vercel](https://vercel.com/)

---

## 📁 Struktur Direktori

```text
personal-website/
├── index.html               # Entry point HTML lengkap dengan SEO & Open Graph meta tags
├── package.json             # Dependensi proyek & script npm
├── tsconfig.json            # Konfigurasi TypeScript
├── vite.config.ts           # Konfigurasi Vite & Tailwind plugin
├── public/                  # Aset statis publik
├── fonts/                   # Self-hosted modern fonts (Inter, SF Mono)
├── img/                     # Format gambar teroptimasi (WebP/JPEG) & favicons
└── src/
    ├── main.tsx             # Entry point React DOM
    ├── App.tsx              # Root component & global layout wrapper
    ├── index.css            # Entry CSS (Tailwind @import & global theme variables)
    ├── components/          # Komponen UI modular
    │   ├── Navbar.tsx       # Smart navbar, mobile drawer, & theme toggle
    │   ├── Hero.tsx         # Greeting dinamis, CTA, LCP optimized
    │   ├── About.tsx        # Bio singkat, core values, & portrait visual
    │   ├── Skills.tsx       # Grid keahlian terstruktur (FE, BE, DevOps)
    │   ├── Portfolio.tsx    # Kartu proyek metode STAR & filter kategori
    │   ├── Experience.tsx   # Timeline linimasa pengalaman & edukasi
    │   ├── Contact.tsx      # Form kontak interaktif & info sosial
    │   ├── Footer.tsx       # Copyright & quick navigation links
    │   └── ui/              # Komponen efek visual (Aurora background)
    ├── data/
    │   └── profileData.ts   # Central decoupled data source & TypeScript interfaces
    └── styles/
        └── components.css   # 80% Custom CSS (Theming, cards, glassmorphic effects)
```

---

## 💻 Panduan Menjalankan Proyek di Lokal

Ikuti langkah-langkah berikut untuk menjalankan repositori ini di lingkungan lokal Anda:

### 1. Kloning Repositori
```bash
git clone https://github.com/artxian/personal-web.git
cd personal-web
```

### 2. Instalasi Dependensi
Pastikan [Node.js](https://nodejs.org/) (versi 18 ke atas) telah terpasang pada perangkat Anda:
```bash
npm install
```

### 3. Jalankan Server Pengembangan (Development Server)
```bash
npm run dev
```
Buka tautan lokal yang muncul pada terminal (biasanya `http://localhost:5173`) melalui browser Anda.

### 4. Build untuk Lingkungan Produksi
Untuk menguji kompilasi TypeScript dan pembuatan berkas bundel produksi yang teroptimasi:
```bash
npm run build
```

### 5. Preview Hasil Build Produksi
Untuk meninjau langsung hasil kompilasi folder `dist/` secara lokal sebelum deployment:
```bash
npm run preview
```

---

## 👨‍💻 Author

**Kelvin Andrian Nataniel**  
- **Email**: [kelvinnatanael13@gmail.com](mailto:kelvinnatanael13@gmail.com)  
- **LinkedIn**: [linkedin.com/in/kelvin-andrian-nataniel](https://linkedin.com)  
- **GitHub**: [@artxian](https://github.com/artxian)  
- **Portfolio**: [drian.xyz](https://drian.xyz)  

---
*Dibuat dengan dedikasi untuk pengumpulan Code Challenge 2 (Full Stack Web Development Program).*
