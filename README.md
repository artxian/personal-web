# Kelvin Andrian Nataniel - Personal Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://drian.xyz)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/artxian/personal-web)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

> **Code Challenge 2 — Full Stack Web Development Program (Option A: Personal Website)**  
> A high-performance, modern Single-Page Application (SPA) portfolio engineered to showcase professional background, core competencies, and project accomplishments. Built with a modular architecture, fluid responsiveness across all viewports, and meticulously optimized for **Google Core Web Vitals**.

---

## 📌 Table of Contents

1. [Project Overview](#-project-overview)
2. [Live Demo & Repository](#-live-demo--repository)
3. [Styling Architecture & Technical Decisions](#-styling-architecture--technical-decisions-hybrid-css-architecture)
4. [Core Features & State Management](#-core-features--state-management)
5. [Core Web Vitals Optimization & Accessibility](#-core-web-vitals-optimization--accessibility-pagespeed-insights--lighthouse)
6. [Tech Stack](#-tech-stack)
7. [Directory Structure](#-directory-structure)
8. [Local Development Guide](#-local-development-guide)
9. [Author](#-author)

---

## 🌟 Project Overview

This portfolio website was designed and engineered from the ground up to serve as the definitive professional representation of **Kelvin Andrian Nataniel** as a *Full-Stack Software Developer*. The application blends contemporary UI aesthetics—clean layouts, elegant typography, and liquid glassmorphic surfaces—with software engineering best practices:

- **Exceptional Performance**: Near-perfect Lighthouse and PageSpeed Insights scores across all four evaluation categories (Performance, Accessibility, Best Practices, and SEO).
- **Rock-Solid Layout Stability**: Engineered with explicit dimensions and content placeholders to achieve near-zero Cumulative Layout Shift (CLS).
- **Accessibility by Default**: Built with accessible, semantic HTML5 elements and full support for keyboard navigation and screen readers.
- **Content Decoupling**: All profile data, projects, and career records are isolated in a centralized, strongly typed data layer (`profileData.ts`) for seamless scalability and effortless updates.

---

## 🔗 Live Demo & Repository

- **Live Production URL (Vercel)**: [https://drian.xyz](https://drian.xyz) *(or active Vercel deployment domain)*
- **GitHub Repository**: [https://github.com/artxian/personal-web](https://github.com/artxian/personal-web)

---

## 🎨 Styling Architecture & Technical Decisions (Hybrid CSS Architecture)

The project implements a deliberate **Hybrid Styling Architecture** combining **80% Custom CSS** and **20% Tailwind CSS**. Rather than adopting an all-or-nothing approach, this hybrid paradigm provides the optimal equilibrium between visual control, expressive animations, and development velocity.

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

### Why 80% Custom CSS / 20% Tailwind CSS?

1. **Separation of Concerns & Code Readability**
   - Eliminates excessive utility class chaining in JSX templates (*class bloat*), keeping `.tsx` files clean, declarative, and easy to review and maintain.
   - Decouples component business and presentation logic from complex aesthetic rules, avoiding clutter while preserving architectural clarity.

2. **80% Custom CSS (`src/styles/components.css`)**
   - **Theming & Color Systems**: Centralized color palettes, CSS custom properties (variables), and light/dark theme transitions.
   - **Card & Component Styling**: Liquid glassmorphism effects, backdrop blurs, adaptive border strokes, dimensional shadows, and custom-tailored scrollbars.
   - **Micro-Interactions & Animations**: Subtle hover elevation transitions, waving hand keyframe loops, interactive button animations, and animated link underlines.

3. **20% Tailwind CSS (Layout & Breakpoints)**
   - **Macro Layout Matrices**: Grid and flexbox distribution (`flex`, `grid`, `items-center`, `justify-between`).
   - **Systematic Spacing**: Consistent dimensional rhythm across components (`p-6`, `gap-8`, `mb-9`, `mx-auto`).
   - **Responsive Breakpoint Modifiers**: Native Tailwind breakpoint variants (`sm:`, `md:`, `lg:`, `xl:`) used to adapt views smoothly from mobile screens to ultra-wide displays (1920px+).

---

## ⚡ Core Features & State Management

### 1. Smart Navbar & Mobile Navigation
- **Scroll-Aware Header**: An adaptive navigation bar that detects scroll direction—automatically tucking away on downward scroll to maximize readable viewport area and gliding back into view upon upward scroll.
- **Glassmorphic Mobile Drawer**: A slide-in drawer menu tailored for mobile and tablet screens, featuring an explicit close trigger, backdrop blur, and automatic background scroll locking (`document.body.style.overflow = 'hidden'`).
- **Smooth Anchor Scrolling**: Seamless page transitions across all primary sections (`#about`, `#skills`, `#portfolio`, `#experience`, `#contact`).

### 2. Dark / Light Mode Toggle
- Built interactively using React `useState` and synchronized with `localStorage` for state persistence.
- Dynamically toggles the `.dark` class on root `<html>` and `<body>` elements, ensuring instantaneous theme switching without layout flashes or unstyled content artifacts (FOUC).

### 3. Portfolio Section (STAR Methodology & Dynamic Filter)
- **STAR Framework Presentation**: Each featured project is thoroughly documented using the industry-standard **Situation, Task, Action, Result** model to highlight engineering competence:
  - **Situation**: Contextual background, business dilemma, or technical constraint.
  - **Task**: Core objectives, scope, and technical responsibilities.
  - **Action**: Implementation details, architectural decisions, and technologies deployed.
  - **Result**: Tangible impact, measurable performance gains, or deployment outcomes.
- **Dynamic Category Filter**: An interactive filter system (*All*, *Frontend*, *Fullstack*, *Web App*) powered by React `useState` that dynamically filters portfolio items in real-time.

### 4. Categorized Skills, Experience Timeline, & Functional Contact Form
- **Skills Matrix**: Organized logically across three technical pillars:
  - *Front-End Development* (HTML5, CSS3, JavaScript, TypeScript, React, Tailwind CSS, Next.js, Redux Toolkit).
  - *Back-End Development* (Node.js, Express.js, RESTful APIs, PostgreSQL, MongoDB, Prisma ORM, JWT).
  - *DevOps & Tooling* (Git, Docker, Vercel, Netlify, CI/CD).
- **Career & Education Timeline**: A vertical timeline component featuring active indicators (*timeline dots*) and structured cards detailing roles, organizations, durations, key achievements, and technology tags.
- **Interactive Contact Form**: Controlled form inputs with validation and an automated visual submission feedback state.

### 5. Centralized Data Decoupling (`src/data/profileData.ts`)
- All biographical info, project entries, skills, milestones, and contact metadata are completely separated from presentation components into a single data repository (`profileData.ts`).
- Governed by comprehensive TypeScript interfaces (`ProfileData`, `STARProject`, `ExperienceItem`, `SkillCategory`), allowing future updates to copy or portfolio entries without modifying component source code.

---

## 🚀 Core Web Vitals Optimization & Accessibility (PageSpeed Insights / Lighthouse)

The portfolio was engineered to meet the stringent requirements of **Core Web Vitals Scoring (70% Assessment Weight)** for Code Challenge 2.

| Core Web Vitals Metric | Evaluation Parameter | Target Threshold | Optimization Implementation |
| :--- | :--- | :---: | :--- |
| **LCP** (*Largest Contentful Paint*) | Time to render primary above-the-fold content | **< 2.5 s** | Image compression to modern WebP format, local self-hosted fonts without external blocking network calls, `loading="eager"`, and `fetchpriority="high"` on critical hero visual elements. |
| **CLS** (*Cumulative Layout Shift*) | Visual stability and unexpected movement | **< 0.1** | Explicit `width` and `height` dimensions on all `<img>` tags, SVG icons, and media wrappers to reserve rendering dimensions prior to resource load. |
| **INP / FID** (*Interactivity*) | Responsiveness to user input and touch | **< 200 ms** | Lean React component tree, passive scroll listeners (`{ passive: true }`), diligent timer and listener cleanup in `useEffect`, and zero heavy third-party tracking scripts. |

### Accessibility (A11y) & SEO Excellence

- **Semantic HTML5 Architecture**: Proper structural elements utilized throughout (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
- **Descriptive Alt & ARIA Compliance**:
  - Meaningful `alt` text on every image and decorative asset.
  - Clear `aria-label` and `title` attributes on interactive icon controls (theme toggle, mobile navigation trigger, scroll-to-top button).
  - `aria-pressed` states on portfolio filter buttons for screen reader awareness.
- **Search Engine Optimization (SEO)**:
  - Complete meta suite in `index.html` including Open Graph (OG) tags, Twitter Cards, canonical directives, descriptive keywords, and theme colors.

### Target Lighthouse & PageSpeed Insights Scores

| Category | Target Score | Engineering Focus |
| :--- | :---: | :--- |
| 🚀 **Performance** | **95 - 100** | Rapid initial render times and exceptional Core Web Vitals benchmarks. |
| ♿ **Accessibility** | **100** | Strict color contrast ratios, keyboard navigability, and complete ARIA attributes. |
| 🛡️ **Best Practices** | **100** | Modern security headers, zero console diagnostics, HTTPS, and modern web APIs. |
| 🔍 **SEO** | **100** | Hierarchical heading tree (single `h1`, structured `h2`/`h3`), crawlability, and rich metadata. |

---

## 🛠️ Tech Stack

- **Core & Runtime**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool & Bundler**: [Vite](https://vitejs.dev/)
- **Styling Architecture**:
  - **Custom Vanilla CSS**: Design tokens, variables, glassmorphic effects, keyframe animations (`src/styles/components.css`)
  - **Tailwind CSS v4**: Utility-first spacing, flexbox, grid, responsive layout system (`@tailwindcss/vite`)
- **Animation / Visual Effects**: Native CSS Keyframes & Framer Motion (Aurora Canvas)
- **Icons & Utilities**: Custom SVG Icons, `clsx`, `tailwind-merge`
- **Linter & Code Quality**: Oxlint / ESLint
- **Deployment Platform**: [Vercel](https://vercel.com/)

---

## 📁 Directory Structure

```text
personal-website/
├── index.html               # Entry HTML with comprehensive SEO & Open Graph meta tags
├── package.json             # Project dependencies and operational npm scripts
├── tsconfig.json            # TypeScript compiler configuration
├── vite.config.ts           # Vite bundler & Tailwind plugin configuration
├── public/                  # Static assets and site icons
├── fonts/                   # Self-hosted modern fonts (Inter, SF Mono)
├── img/                     # Optimized visual media (WebP/JPEG) and favicons
└── src/
    ├── main.tsx             # React DOM entry point
    ├── App.tsx              # Root component & global layout coordinator
    ├── index.css            # Global CSS entry (Tailwind imports & root variables)
    ├── components/          # Modular user interface components
    │   ├── Navbar.tsx       # Smart scroll-aware navbar, mobile drawer, & theme toggle
    │   ├── Hero.tsx         # Dynamic greeting, CTA buttons, and LCP-optimized hero
    │   ├── About.tsx        # Bio overview, core value pills, and portrait visual
    │   ├── Skills.tsx       # Tri-pillar skills matrix (Frontend, Backend, DevOps)
    │   ├── Portfolio.tsx    # STAR-structured project cards with dynamic category filtering
    │   ├── Experience.tsx   # Milestone timeline for professional experience & education
    │   ├── Contact.tsx      # Interactive contact form & professional social links
    │   ├── Footer.tsx       # Copyright details and navigation links
    │   └── ui/              # Visual effects components (Aurora ambient background)
    ├── data/
    │   └── profileData.ts   # Central decoupled profile data & TypeScript interfaces
    └── styles/
        └── components.css   # 80% Custom CSS (Theming, cards, glassmorphic styling)
```

---

## 💻 Local Development Guide

Follow these steps to run the repository locally on your machine:

### 1. Clone the Repository
```bash
git clone https://github.com/artxian/personal-web.git
cd personal-web
```

### 2. Install Dependencies
Ensure that [Node.js](https://nodejs.org/) (v18 or higher) is installed on your system:
```bash
npm install
```

### 3. Launch the Development Server
```bash
npm run dev
```
Open your browser and navigate to the local URL provided in the terminal output (typically `http://localhost:5173`).

### 4. Build for Production
To perform TypeScript type-checking and generate an optimized production bundle:
```bash
npm run build
```

### 5. Preview Production Build
To inspect and test the generated `dist/` production build locally prior to deployment:
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
*Engineered with dedication for Code Challenge 2 evaluation (Full Stack Web Development Program).*
