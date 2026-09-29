import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      document.documentElement.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    let lastScroll = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY || document.documentElement.scrollTop;

          if (currentScroll <= lastScroll) {
            // Scrolling up -> show header
            setIsScrollDown(false);
          } else if (currentScroll > 100 && currentScroll > lastScroll) {
            // Scrolling down -> hide header
            setIsScrollDown(true);
          }

          setIsScrolled(currentScroll >= 10);
          lastScroll = currentScroll <= 0 ? 0 : currentScroll;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('theme', next ? 'dark' : 'light');
      } catch {
        // Ignore storage errors in private browsing
      }
      return next;
    });
  };

  return (
    <>
      {/* Header */}
      <header
        className={`site-header fixed top-0 left-0 w-full h-40 px-6.25 sm:px-10 md:px-12.5 flex items-center justify-center z-20 ${isScrolled ? 'scrolled' : ''
          } ${isScrollDown ? 'scroll-down' : 'scroll-up'}`}
      >
        <nav className="in-site-header px-6 py-3 flex justify-between items-center">
          {/* Header Logo */}
          <div className="text-center">
            <a href="/#" className="inline-block" aria-label="Home">
              <img
                src={isDark ? "/img/favicon/light/apple-touch-icon.png" : "/img/favicon/dark/apple-touch-icon.png"}
                alt="Kelvin Andrian Nataniel signature"
                width={32}
                height={32}
                loading="lazy"
                decoding="async"
                className="h-8 w-8 rounded"
              />
            </a>
          </div>

          {/* Desktop Nav: Layout & Spacing via Tailwind, Styles via CSS */}
          <div className="hidden lg:flex items-center gap-6.25">
            <ol className="flex justify-end flex-wrap items-center gap-0.5 list-none m-0 p-0">
              <li>
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="nav-link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav-link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#experience" className="nav-link">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ol>

            {/* Dark / Light Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="theme-toggle-btn"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 4.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm9-9a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-18 0a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm14.657-6.657a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm-12.728 12.728a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm12.728 0a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM5.636 5.636a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>

            <a
              href="#"
              className="nav-resume-btn animate-intro-resume px-4 py-2 cursor-pointer"
            >
              Resume
            </a>
          </div>

          {/* Mobile Right Controls: Dark Mode Toggle + Hamburger */}
          <div className="lg:hidden flex items-center gap-6">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="theme-toggle-btn"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 4.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm9-9a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-18 0a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm14.657-6.657a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm-12.728 12.728a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm12.728 0a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM5.636 5.636a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0z" />
                </svg>
              ) : (
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>

            <div
              onClick={toggleNav}
              aria-label="Toggle menu"
              className={`nav-toggle-icon animate-intro-right-left ${isOpen ? 'active' : ''
                }`}
            >
              &#10010;
            </div>
          </div>
        </nav>
      </header>

      {/* Backdrop Modal for Mobile Menu */}
      {isOpen && (
        <div
          onClick={closeNav}
          className="drawer-backdrop fixed inset-0 z-30"
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Menu — Liquid Glass Theme */}
      <aside
        className={`nav-drawer fixed top-1/12 right-5 h-3/4 w-[min(80vw,380px)] py-8 px-6 flex flex-col justify-between items-center z-200 ${isOpen ? 'translate-x-0' : 'translate-x-120'
          }`}
      >
        {/* Drawer Header */}
        <div className="w-full flex items-center justify-between pb-4 border-b border-black/10 dark:border-white/10">
          <div className="flex justify-start items-center gap-6">
            <img
              src={isDark ? "/img/favicon/light/apple-touch-icon.png" : "/img/favicon/dark/apple-touch-icon.png"}
              alt="Logo"
              width={28}
              height={28}
              loading="lazy"
              decoding="async"
              className="h-7 w-7 rounded-md"
            />
            <span className="font-mono text-xs uppercase tracking-widest font-semibold">
              Navigation
            </span>
          </div>
          <button
            onClick={closeNav}
            aria-label="Close menu"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Drawer Links */}
        <ol className="list-none flex flex-col items-center gap-3 w-full p-0 my-auto">
          {[
            { name: 'About', href: '#about' },
            { name: 'Skills', href: '#skills' },
            { name: 'Portfolio', href: '#portfolio' },
            { name: 'Experience', href: '#experience' },
            { name: 'Contact', href: '#contact' },
          ].map((item) => (
            <li key={item.name} className="w-full text-center">
              <a
                href={item.href}
                onClick={closeNav}
                className="nav-drawer-link w-full block py-3 px-6 rounded-xl font-mono text-base tracking-wide transition-all"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ol>

        {/* Drawer Footer / Resume */}
        <div className="w-full pt-4 border-t border-black/10 dark:border-white/10 flex justify-center">
          <a
            href="#"
            onClick={closeNav}
            className="nav-drawer-resume w-full text-center py-3.5 px-6 rounded-xl font-mono text-sm tracking-widest uppercase font-semibold cursor-pointer block transition-all"
          >
            Resume
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
