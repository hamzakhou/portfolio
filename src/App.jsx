import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="portfolio-container" dir="ltr">
      
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-brand">
          <div className="brand-logo">HK</div>
          <span style={{ fontWeight: 'bold', color: '#f8fafc' }}>Hamza Khoulassi</span>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
        </ul>
        <a href="#contact" className="nav-btn">
          Contact
        </a>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge">
          <span className="dot"></span> Available for new opportunities
        </div>
        <h1>Hamza <span>Khoulassi</span></h1>
        <p className="hero-title">Full-Stack Software Developer</p>
        <p className="hero-desc">
          Passionate and rigorous Full-Stack Developer trained at 1337 Coding School (42 Network), specializing in designing robust, scalable, and high-performance solutions.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
          <a href="https://linkedin.com/in/hamza-khoulassi" target="_blank" rel="noreferrer" className="btn-secondary">
            LinkedIn Profile
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="card">
            <ul style={{ direction: 'ltr' }}>
              <li>📍 Khouribga, Morocco</li>
              <li>✉️ khoulassihamza@gmail.com</li>
              <li>📞 +212 684104365</li>
            </ul>
          </div>
          <div className="card" style={{ color: '#cbd5e1' }}>
            <p style={{ marginBottom: '1rem' }}>
              Full-Stack Developer trained at 1337 Coding School (42 Network), possessing a strong foundation in complex problem solving and software architecture.
            </p>
            <p>
              Experienced with modern front-end and back-end technologies (.NET, Node.js, React), focusing on writing clean code and building scalable applications.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section" style={{ background: '#090d19' }}>
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-list">
          
          <div className="exp-card">
            <div className="exp-header">
              <div>
                <h3>Full-Stack Developer</h3>
                <p className="exp-company">1kbytes | Tangier, Morocco</p>
              </div>
              <span className="exp-date">Sept 2024 - Feb 2026</span>
            </div>
            <ul>
              <li>End-to-end design and development of a knowledge management platform using Node.js, TypeScript, React, and MobX.</li>
              <li>Created over ten modern web and mobile applications ensuring seamless API integration.</li>
              <li>Optimized complaints processing workflow through high-performing software solutions.</li>
            </ul>
          </div>

          <div className="exp-card">
            <div className="exp-header">
              <div>
                <h3>Full-Stack Developer (Ecosystem Projects)</h3>
                <p className="exp-company">1337 Coding School | Khouribga, Morocco</p>
              </div>
              <span className="exp-date">2022 - 2025</span>
            </div>
            <ul>
              <li>Designed and deployed robust microservices using .NET Core for complex business features.</li>
              <li>Architected and built booking systems based on DDD and CQRS patterns.</li>
              <li>Optimized relational databases (T-SQL) for high-load applications.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {["JavaScript", "TypeScript", ".NET / .NET Core", "React.js", "Angular", "Node.js", "REST APIs", "SOAP", "Spring Boot", "DDD / CQRS", "CI/CD & Azure", "T-SQL / PostgreSQL", "HTML5 / CSS3", "C / C++"].map((skill, index) => (
            <div key={index} className="skill-badge">{skill}</div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section" style={{ background: '#090d19' }}>
        <h2 className="section-title">Education</h2>
        <div className="experience-list">
          <div className="exp-card">
            <div className="exp-header">
              <div>
                <h3>Software Architecture & Full-Stack Engineering</h3>
                <p className="exp-company">1337 Coding School (42 Network) | Khouribga, Morocco</p>
              </div>
              <span className="exp-date">2022 - 2025</span>
            </div>
          </div>
          <div className="exp-card">
            <div className="exp-header">
              <div>
                <h3>Specialized Technician Diploma in Software Development</h3>
                <p className="exp-company">ISTA | Khouribga, Morocco</p>
              </div>
              <span className="exp-date">2020 - 2022</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="footer">
        <h2 style={{ color: '#f8fafc', marginBottom: '1rem' }}>Let's Build Something Together!</h2>
        <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Feel free to reach out via email or LinkedIn.</p>
        <a href="mailto:khoulassihamza@gmail.com" className="btn-primary" style={{ display: 'inline-flex', margin: '0 auto' }}>
          Send an Email
        </a>
        <p>© {new Date().getFullYear()} Hamza Khoulassi. All rights reserved.</p>
      </footer>

    </div>
  );
}