import { profileData } from '../data/profileData';

const Experience = () => {
  return (
    <section id="experience" className="py-25 w-full max-w-287.5">
      {/* Section Heading */}
      <h2 className="section-heading mb-9">
        Experience & Education
      </h2>

      {/* Timeline List */}
      <div className="timeline-track flex flex-col gap-8 ml-3 pl-6 sm:ml-3 sm:pl-6">
        {profileData.experience.map((item) => (
          <div key={item.id} className="relative">
            {/* Timeline Dot */}
            <span className="timeline-dot" />

            {/* Experience Card */}
            <div className="experience-card flex flex-col justify-between">
              <div>
                {/* Header info: Role & Company / Period */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className="exp-role m-0">
                    {item.role}
                  </h3>
                  <span className="exp-company-period">
                    {item.period}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
                  <span className="font-semibold text-gray-800">
                    {item.company}
                  </span>
                  <span className="exp-location">
                    {item.location}
                  </span>
                </div>

                {/* Bullets List */}
                <ul className="list-none p-0 m-0 space-y-2 mb-4">
                  {item.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="exp-bullet flex items-start gap-2.5">
                      <span className="text-[#007AFF] shrink-0 mt-0.5">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Associated Technologies */}
              {item.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
