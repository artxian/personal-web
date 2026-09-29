import { useState, useEffect } from 'react';
import { profileData } from '../data/profileData';

const Hero = () => {
  const [greeting, setGreeting] = useState('...');

  useEffect(() => {
    const updateGreeting = () => {
      const hours = new Date().getHours();
      if (hours >= 1 && hours <= 9) {
        setGreeting('Good morning!');
      } else if (hours >= 10 && hours <= 17) {
        setGreeting('Good afternoon!');
      } else {
        setGreeting('Good evening!');
      }
    };

    const interval = setInterval(updateGreeting, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col justify-center items-start gap-6 min-h-screen w-full max-w-300">
      {/* Dynamic Greeting */}
      <h3 className="hero-greeting flex items-center gap-3 m-0 mb-7 ml-1">
        <div>{greeting}</div>
        <img
          src="/img/emojis/wave.webp"
          alt="Waving hand greeting"
          width={48}
          height={48}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-12 h-12 inline-block align-text-bottom animate-wave cursor-grab"
        />
      </h3>

      {/* Main Title */}
      <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight m-0 w-full">
        <h3 className="hero-title-sub text-4xl sm:text-5xl">Hi, my name is</h3>
        {profileData.hero.name}.
      </h1>

      {/* Description */}
      <p className="hero-description m-0 ml-1 max-w-180">
        {profileData.hero.description}
      </p>

      {/* Get In Touch */}
      <h2 className="hero-contact m-0 mt-6 flex items-center flex-wrap gap-y-1">
        <span>Get in touch</span>
        <img
          src="/img/emojis/pointright.webp"
          alt="Point right indicator"
          width={36}
          height={36}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-9 h-9 mx-3 inline-block align-bottom shrink-0"
        />
        <a
          className="link-underline font-medium break-all"
          href={`mailto:${profileData.hero.email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {profileData.hero.email}
        </a>
      </h2>
    </section>
  );
};

export default Hero;
