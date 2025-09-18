import "../styles/Contact.css";

export default function Contact() {
  return (
    <main className="contact-page">
      <div className="container">
        {/* Hero */}
        <div className="hero">
          <h1>Contact</h1>
          <p>Heb je een interessant project, vraag, of wil je gewoon een koffie drinken? Ik hoor graag van je!</p>
        </div>

        <div className="grid">
          {/* Contact Form */}
          <div className="main">
            <div className="card">
              <h2>Stuur me een bericht</h2>
              <form action="#" method="post">
                <div className="form-row">
                  <div className="form-group">
                    <label>Naam *</label>
                    <input type="text" name="name" required placeholder="Je volledige naam" />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" name="email" required placeholder="je.email@example.com" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Onderwerp *</label>
                  <input type="text" name="subject" required placeholder="Waar gaat je bericht over?" />
                </div>

                <div className="form-group">
                  <label>Bericht *</label>
                  <textarea name="message" required placeholder="Vertel me over je project of vraag..."></textarea>
                </div>

                <button type="submit" className="btn">Verstuur Bericht</button>
              </form>
            </div>

            {/* FAQ */}
            <div className="card">
              <h2>Veelgestelde Vragen</h2>

              <div className="faq-item">
                <h4>Wat zijn je tariefen?</h4>
                <p>Mijn tariefen variëren afhankelijk van de complexiteit en scope van het project. Neem contact op voor een vrijblijvende offerte.</p>
                <hr />
              </div>

              <div className="faq-item">
                <h4>Hoe lang duurt een typisch project?</h4>
                <p>Projectduur varieert van 2 weken voor kleine websites tot 6+ maanden voor complexe applicaties.</p>
                <hr />
              </div>

              <div className="faq-item">
                <h4>Werk je remote of on-site?</h4>
                <p>Ik werk voornamelijk remote, maar ben flexibel voor meetings on-site in Amsterdam.</p>
                <hr />
              </div>

              <div className="faq-item">
                <h4>Welke type projecten neem je aan?</h4>
                <p>Ik focus op web development projecten, van eenvoudige websites tot complexe applicaties.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            <div className="card">
              <h3>Contact Informatie</h3>
              <div className="contact-method">
                <h4>Email</h4>
                <p>john.doe@example.com</p>
                <p className="description">Voor professionele vragen</p>
                <span className="badge">24/7</span>
              </div>
              <div className="contact-method">
                <h4>Telefoon</h4>
                <p>+31 6 1234 5678</p>
                <p className="description">Voor dringende zaken</p>
                <span className="badge">Ma-Vr 9:00-17:00</span>
              </div>
              <div className="contact-method">
                <h4>Locatie</h4>
                <p>Amsterdam, Nederland</p>
                <p className="description">Beschikbaar voor meetings</p>
                <span className="badge">Op afspraak</span>
              </div>
            </div>

            <div className="card">
              <h3>Social Media</h3>
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta">
          <h2>Klaar om samen te werken?</h2>
          <p>Of je nu een eenvoudige website nodig hebt of een complexe webapplicatie wilt bouwen, ik help je graag om je ideeën tot leven te brengen.</p>
          <div className="cta-buttons">
            <a href="mailto:john.doe@example.com" className="btn">Start een Project</a>
            <a href="https://calendly.com/johndoe" target="_blank" rel="noopener noreferrer" className="btn outline">Plan een Meeting</a>
          </div>
        </div>
      </div>
    </main>
  );
}
