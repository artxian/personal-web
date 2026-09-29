import { useState } from 'react';
import { profileData } from '../data/profileData';

const categories = ['All', 'Frontend', 'Fullstack', 'Web App'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = profileData.portfolio.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Frontend') {
      return (
        project.category.toLowerCase().includes('front') ||
        project.techStack.some((t) => t.toLowerCase().includes('react') || t.toLowerCase().includes('tailwind'))
      );
    }
    if (activeCategory === 'Fullstack') {
      return (
        project.category.toLowerCase().includes('full') ||
        project.techStack.some((t) => t.toLowerCase().includes('node') || t.toLowerCase().includes('postgresql') || t.toLowerCase().includes('express'))
      );
    }
    if (activeCategory === 'Web App') {
      return project.category.toLowerCase().includes('web') || project.category.toLowerCase().includes('application');
    }
    return true;
  });

  return (
    <section id="portfolio" className="py-25 w-full max-w-287.5">
      {/* Section Heading */}
      <h2 className="section-heading mb-6">
        Featured Projects
      </h2>

      {/* Category Filter Buttons (React useState) */}
      <div className="flex flex-nowrap sm:flex-wrap items-center gap-2.5 mb-9 overflow-x-auto pb-1 -mx-1 px-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            aria-pressed={activeCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-10">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="portfolio-card p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <span className="portfolio-category-tag">
                  {project.category}
                </span>
                <div className="flex items-center gap-3">
                  {project.demoUrl && project.demoUrl !== '#' && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project primary"
                    >
                      <span>Live Demo</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project"
                    >
                      <span>Code</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Summary */}
              <h3 className="portfolio-title m-0 mb-2">
                {project.title}
              </h3>
              <p className="portfolio-summary m-0 mb-6">
                {project.summary}
              </p>

              {/* STAR Framework Breakdown */}
              <div className="star-section flex flex-col gap-3.5 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="star-badge shrink-0">
                    Situation
                  </span>
                  <p className="star-text m-0">
                    {project.situation}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="star-badge shrink-0">
                    Task
                  </span>
                  <p className="star-text m-0">
                    {project.task}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="star-badge shrink-0">
                    Action
                  </span>
                  <p className="star-text m-0">
                    {project.action}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <span className="star-badge shrink-0">
                    Result
                  </span>
                  <p className="star-text m-0">
                    {project.result}
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.map((tech, tIdx) => (
                <span key={tIdx} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
