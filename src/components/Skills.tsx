import { profileData } from '../data/profileData';

const Skills = () => {
  return (
    <section id="skills" className="py-25 w-full max-w-287.5">
      {/* Section Heading */}
      <h2 className="section-heading mb-9">
        Skills & Technologies
      </h2>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {profileData.skills.map((categoryGroup, index) => (
          <div
            key={index}
            className="skill-card p-6 flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="mb-4">
                <h3 className="skill-category-title m-0">
                  {categoryGroup.category}
                </h3>
                <p className="skill-category-desc mt-1.5 mb-0">
                  {categoryGroup.description}
                </p>
              </div>

              {/* Badges List */}
              <div className="flex flex-wrap gap-2 pt-2">
                {categoryGroup.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-badge">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
