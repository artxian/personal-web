import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AuroraBackground } from './components/ui/aurora-background';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollAble = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= scrollAble - 150) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AuroraBackground className="w-full">
      <div className="min-h-screen relative w-full">
        {/* Go to Top Floating Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="btn-go-top"
          >
            <img
              src="/img/emojis/pointing-up.png"
              alt="Scroll back to top"
              width={30}
              height={30}
              loading="lazy"
              className="w-7.5 h-7.5"
            />
          </button>
        )}

        {/* Sticky Smart Navbar */}
        <Navbar />

        {/* Main Content Layout Container */}
        <div id="content" className="w-full flex justify-center">
          <main className="w-full max-w-[1920px] min-h-screen px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 flex flex-col">
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Experience />
            <Contact />
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </AuroraBackground>
  );
}

export default App;
