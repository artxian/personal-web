import { profileData } from '../data/profileData';

const About = () => {
  return (
    <section id="about" className="py-25 w-full max-w-287.5">
      {/* Section Heading with Line */}
      <h2 className="about-heading flex items-center mb-9">
        About Me
      </h2>

      {/* About Content: Text on Left, Headshot on Right */}
      <div className="flex flex-col lg:flex-row justify-between gap-14 items-center lg:items-start">
        {/* Left: Bio & Key Values */}
        <div className="flex flex-col justify-start gap-13 max-w-full md:max-w-175 space-y-5">
          <p className="about-text m-0">{profileData.about.bio}</p>

          {/* Key Values from Briefing */}
          <div className="pt-2 flex flex-col justify-between gap-3">
            <h3 className="about-values-title">Key Values:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 list-none p-0 m-0">
              {profileData.about.coreValues.map((val, idx) => (
                <li key={idx} className="about-value-item flex items-center gap-2.5">
                  <span className="about-value-bullet">▹</span>
                  <span>{val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Headshot using .about-headshot-wrapper */}
        <div className="about-headshot-wrapper">
          <img
            src="/img/headshot.webp"
            alt={`Portrait of ${profileData.hero.name}`}
            width={350}
            height={350}
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
