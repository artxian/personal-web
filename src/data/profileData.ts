// TypeScript Interfaces for Profile Data
export interface STARProject {
  id: string;
  title: string;
  category: string;
  summary: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
  image: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
}

export interface ProfileData {
  hero: {
    name: string;
    title: string;
    greeting: string;
    description: string;
    email: string;
    avatar: string;
    resumeUrl: string;
  };
  about: {
    bio: string;
    background: string;
    coreValues: string[];
    headshot: string;
  };
  skills: SkillCategory[];
  portfolio: STARProject[];
  experience: ExperienceItem[];
  testimonials: TestimonialItem[];
  contact: {
    email: string;
    location: string;
    availability: string;
    socials: {
      github: string;
      linkedin: string;
      instagram: string;
    };
  };
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
  };
}

export const profileData: ProfileData = {
  hero: {
    name: 'Kelvin Andrian Nataniel',
    title: 'Full-Stack Web Developer & Software Engineer',
    greeting: 'Hello there!',
    description: 'I’m a software engineer passionate about combining clean code with thoughtful design to build exceptional digital experiences.',
    email: 'kelvinnatanael13@gmail.com',
    avatar: '/img/headshot.jpg',
    resumeUrl: '#',
  },

  about: {
    bio: 'Hi! My name is Kelvin. As a Full Stack Software Developer, I love turning ideas into engaging digital realities. Driven by curiosity and a commitment to continuous learning, I specialize in crafting modern websites and powerful applications. My goal is to always channel my creativity into building beautiful, impactful solutions.',
    background: 'Currently pursuing Computer Science with an engineering background, focusing on building accessible, high-performance web applications that load lightning-fast and look stunning.',
    coreValues: [
      'Timeliness & Reliability',
      'Pixel-Perfect Attention to Detail',
      'Proactive & Clear Communication',
      'Continuous Technical Improvement',
    ],
    headshot: '/img/headshot.jpg',
  },

  skills: [
    {
      category: 'Front-End Development',
      description: 'Building responsive, fast, and accessible user interfaces',
      skills: [
        { name: 'HTML5 / Semantic HTML' },
        { name: 'CSS3 / Vanilla CSS' },
        { name: 'JavaScript (ES6+)' },
        { name: 'TypeScript' },
        { name: 'React (Vite)' },
        { name: 'Tailwind CSS' },
        { name: 'Next.js' },
        { name: 'Redux Toolkit' },
      ],
    },
    {
      category: 'Back-End Development',
      description: 'Engineering robust server-side logic and RESTful APIs',
      skills: [
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'RESTful API Design' },
        { name: 'PostgreSQL' },
        { name: 'MongoDB / Mongoose' },
        { name: 'Prisma ORM' },
        { name: 'JWT & Authentication' },
      ],
    },
    {
      category: 'DevOps & Development Tools',
      description: 'Version control, deployment pipelines, and workflow efficiency',
      skills: [
        { name: 'Git & GitHub Workflow' },
        { name: 'Docker & Containerization' },
        { name: 'Vercel & Netlify Deployment' },
        { name: 'CI/CD & GitHub Actions' },
        { name: 'Postman API Testing' },
        { name: 'PageSpeed & Web Vitals' },
        { name: 'VS Code & Linux CLI' },
      ],
    },
  ],

  portfolio: [
    {
      id: 'personal-portfolio',
      title: 'High-Performance Personal Portfolio',
      category: 'Front-End & Performance',
      summary: 'A minimalist, responsive developer portfolio engineered with React, TypeScript, and Core Web Vitals optimization.',
      situation: 'Recruiters and clients needed a fast, interactive single-page portfolio that accurately highlights technical depth, STAR projects, and design fidelity.',
      task: 'Build a production-ready portfolio that scores >90 on PageSpeed Insights across Performance, Accessibility, Best Practices, and SEO.',
      action: 'Migrated custom CSS animations to modular stylesheets, minimized bundle payloads using Vite + TypeScript, implemented lazy asset loading, and strictly controlled CLS with explicit aspect ratios.',
      result: 'Delivered an ultra-smooth experience with sub-second LCP, 0 CLS, and flawless responsiveness from mobile screens to ultrawide desktop displays.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Core Web Vitals'],
      demoUrl: 'https://drian.xyz',
      repoUrl: 'https://github.com/andriandme/personal-website',
      image: '/img/headshot.jpg',
    },
    {
      id: 'ecommerce-platform',
      title: 'Modern E-Commerce Storefront & Dashboard',
      category: 'Full-Stack Application',
      summary: 'End-to-end e-commerce experience featuring product catalog filtering, cart management, and admin management.',
      situation: 'Small businesses struggle with sluggish, cluttered storefronts that drop user conversion on mobile checkout flows.',
      task: 'Architect a responsive full-stack shop with real-time inventory tracking, resilient checkout state, and an intuitive admin portal.',
      action: 'Developed React frontend with Tailwind CSS layouting, Node.js/Express REST APIs with PostgreSQL, and implemented optimistic UI updates for instant cart modifications.',
      result: 'Achieved 40% faster page transitions compared to traditional multi-page stores and processed simulated concurrent checkout transactions seamlessly.',
      techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
      demoUrl: '#',
      repoUrl: 'https://github.com/andriandme',
      image: '/img/headshot.jpg',
    },
    {
      id: 'task-collaboration-app',
      title: 'Real-Time Kanban & Project Tracker',
      category: 'Web Application',
      summary: 'Interactive productivity application for agile task tracking, drag-and-drop workflow status, and team assignments.',
      situation: 'Remote development teams needed a distraction-free board to track feature sprints and backlog items without complex onboarding.',
      task: 'Design a clean Kanban board supporting drag-and-drop interactions, role permissions, and persistent cloud sync.',
      action: 'Built accessible draggable task cards using HTML5 Drag-and-Drop API, managed state with Redux Toolkit, and wrote comprehensive unit validation for task transitions.',
      result: 'Improved team task coordination efficiency with zero UI layout shifts and instantaneous local state persistence.',
      techStack: ['TypeScript', 'React', 'Redux Toolkit', 'Tailwind CSS', 'Express'],
      demoUrl: '#',
      repoUrl: 'https://github.com/andriandme',
      image: '/img/headshot.jpg',
    },
  ],

  experience: [
    {
      id: 'exp-1',
      role: 'Full-Stack Software Developer Intern',
      company: 'Tech Solutions Studio',
      period: '2024 — Present',
      location: 'Jakarta, Indonesia',
      description: [
        'Developed and maintained client web applications using React, TypeScript, and Node.js REST services.',
        'Collaborated with UI/UX designers to translate Figma prototypes into pixel-perfect, accessible components.',
        'Optimized frontend assets and bundle chunks, reducing overall First Contentful Paint by 30%.',
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git'],
    },
    {
      id: 'exp-2',
      role: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: '2023 — 2024',
      location: 'Remote',
      description: [
        'Designed and delivered bespoke responsive portfolio websites and landing pages for local businesses and professionals.',
        'Conducted performance audits using PageSpeed Insights and implemented SAIF/SEO best practices.',
        'Provided direct consultation and clear communication on technical requirements and post-launch maintenance.',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Vercel'],
    },
    {
      id: 'exp-3',
      role: 'Computer Science Student',
      company: 'EU University',
      period: '2022 — Present',
      location: 'Jakarta, Indonesia',
      description: [
        'Studying core computer science disciplines including Data Structures, Algorithms, Software Engineering, and Database Systems.',
        'Actively participating in coding challenges and collaborative software engineering projects.',
      ],
      technologies: ['Algorithms', 'Data Structures', 'Database Design', 'Software Engineering'],
    },
  ],

  testimonials: [
    {
      id: 'test-1',
      name: 'Alex Pratama',
      role: 'Senior Frontend Engineer',
      company: 'Digital Innovation Hub',
      avatar: '/img/headshot.jpg',
      quote: 'Kelvin brings a rare combination of sharp aesthetic intuition and solid engineering discipline. His attention to detail and ability to deliver clean, maintainable code is outstanding.',
    },
    {
      id: 'test-2',
      name: 'Sarah Wijaya',
      role: 'Product Manager',
      company: 'Creative Studio',
      avatar: '/img/headshot.jpg',
      quote: 'Working with Kelvin was a breeze. He consistently hit deadlines, communicated proactively, and ensured our web platform felt blazing fast across all mobile devices.',
    },
  ],

  contact: {
    email: 'kelvinnatanael13@gmail.com',
    location: 'Jakarta, Indonesia',
    availability: 'Open to full-time opportunities and freelance projects',
    socials: {
      github: 'https://github.com/andriandme',
      linkedin: 'https://linkedin.com/in/andriandme',
      instagram: 'https://instagram.com/andriandme',
    },
  },

  socials: {
    github: 'https://github.com/andriandme',
    linkedin: 'https://linkedin.com/in/andriandme',
    instagram: 'https://instagram.com/andriandme',
  },
};
