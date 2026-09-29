import { useState, type FormEvent } from 'react';
import { profileData } from '../data/profileData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate submission or mailto fallback
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-25 w-full max-w-287.5">
      {/* Section Heading */}
      <h2 className="section-heading mb-9">
        Get In Touch
      </h2>

      {/* Grid: Left Contact Info / Right Contact Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Column: Direct Links & Info */}
        <div className="flex flex-col gap-6">
          <p className="text-[17px] text-[#333333] leading-relaxed m-0">
            I'm currently looking for new opportunities, whether that's a full-time role, internship, or collaborative software project. My inbox is always open!
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <span className="contact-info-title block mb-1">Email</span>
              <a
                href={`mailto:${profileData.contact.email}`}
                className="link-underline contact-info-value"
              >
                {profileData.contact.email}
              </a>
            </div>

            <div>
              <span className="contact-info-title block mb-1">Location</span>
              <span className="contact-info-value block">
                {profileData.contact.location}
              </span>
            </div>

            <div>
              <span className="contact-info-title block mb-1">Availability</span>
              <span className="contact-info-value block text-[#007AFF]">
                {profileData.contact.availability}
              </span>
            </div>

            <div className="pt-2">
              <span className="contact-info-title block mb-2">Professional Profiles</span>
              <div className="flex items-center gap-3">
                <a
                  href={profileData.contact.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-resume-btn px-3 py-1.5 inline-flex items-center gap-1.5"
                >
                  <span>GitHub</span>
                  <span>↗</span>
                </a>
                <a
                  href={profileData.contact.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-resume-btn px-3 py-1.5 inline-flex items-center gap-1.5"
                >
                  <span>LinkedIn</span>
                  <span>↗</span>
                </a>
                <a
                  href={profileData.contact.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-resume-btn px-3 py-1.5 inline-flex items-center gap-1.5"
                >
                  <span>Instagram</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="contact-card">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="contact-label block mb-1.5">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                autoComplete='given-name'
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="contact-input"
              />
            </div>

            <div>
              <label htmlFor="email" className="contact-label block mb-1.5">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete='off'
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="contact-input"
              />
            </div>

            <div>
              <label htmlFor="subject" className="contact-label block mb-1.5">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Project Inquiry / Job Opportunity"
                className="contact-input"
              />
            </div>

            <div>
              <label htmlFor="message" className="contact-label block mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Kelvin, I'd like to discuss a project..."
                className="contact-input resize-y"
              />
            </div>

            <button type="submit" className="contact-submit-btn mt-2">
              {isSubmitted ? (
                <>
                  <span>✓ Message Sent!</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <span>→</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
