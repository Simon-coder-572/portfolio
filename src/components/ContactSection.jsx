import "../styles/ContactSection.css";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-description">
            I'm always interested in new opportunities and collaborations. Let's discuss your next project!
          </p>
        </div>
        
        <div className="contact-content">
          {/* ✅ Left: Contact Info */}
          <div className="contact-info">
            <div className="contact-info-section">
              <h3 className="info-title">Contact Information</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="contact-icon">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>john.doe@email.com</span>
                </div>
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="contact-icon">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="contact-icon">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
            
            {/* ✅ Social Links */}
            <div className="contact-info-section">
              <h3 className="info-title">Follow Me</h3>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  {/* GitHub/LinkedIn/Twitter SVGs */}
                  <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77..."></path>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2..."></path>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53..."></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* ✅ Availability */}
            <div className="availability-card">
              <h3 className="card-title">Let's Work Together</h3>
              <p className="card-description">
                I'm currently available for freelance work and full-time opportunities.
              </p>
              <div className="availability-info">
                <div className="availability-item">
                  <span>Response Time:</span>
                  <span className="text-primary">Within 24 hours</span>
                </div>
                <div className="availability-item">
                  <span>Availability:</span>
                  <span className="text-green">Available</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* ✅ Right: Contact Form */}
          <div className="contact-form-card">
            <h3 className="form-title">Send Message</h3>
            <p className="form-description">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input id="name" className="form-input" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input id="email" type="email" className="form-input" placeholder="your@email.com" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input id="subject" className="form-input" placeholder="Project inquiry" />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  id="message" 
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
