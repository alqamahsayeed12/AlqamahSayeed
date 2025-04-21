import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="container">
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="logo" style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                <Link to="/">Alqamah Sayeed</Link>
              </div>
              <ul style={{ display: 'flex', listStyle: 'none', gap: '1.5rem' }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/publications">Publications</Link></li>
                <li><Link to="/research">Research</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <div>
                <h3>Alqamah Sayeed</h3>
                <p>Atmospheric Science</p>
              </div>
              <div>
                <h3>Connect</h3>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                  <a href="https://www.linkedin.com/in/alqamah-sayeed-ph-d-3aa249172/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="https://github.com/Alqamah-Sayeed" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                  </a>
                  <a href="https://twitter.com/AlqamahSayeed89" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <p>&copy; {new Date().getFullYear()} Alqamah Sayeed. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

const Home = () => (
  <div>
    <section className="hero">
      <div className="container">
        <div style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Alqamah Sayeed</h1>
          <h2 style={{ fontWeight: 'normal', marginBottom: '2rem' }}>Atmospheric Science</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            Research scientist with 8+ years of experience in atmospheric science. Currently leading NASA SERVIR's global Air Quality and Health thematic area.
          </p>
          <a href="/contact" className="btn">Get in touch</a>
        </div>
      </div>
    </section>
    
    <section className="section">
      <div className="container">
        <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>About Me</h2>
        <div className="card">
          <p>
            I am a passionate researcher in atmospheric science with a focus on particulate matter and air quality. 
            My research applies machine learning techniques to advance atmospheric modeling and satellite data analysis.
            I currently lead NASA SERVIR's global Air Quality and Health thematic area, developing solutions for the United States, Central Americas, Southeast Asia and Africa.
          </p>
        </div>
      </div>
    </section>
    
    <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Featured Publications</h2>
        <div className="grid">
          <div className="card">
            <h3>Efficient PM2.5 forecasting using geographical correlation and lagged effects</h3>
            <p>Journal of Environmental Informatics Letters, 2023</p>
          </div>
          <div className="card">
            <h3>Cost-effective air quality monitoring systems</h3>
            <p>Environmental Science & Technology, 2022</p>
          </div>
          <div className="card">
            <h3>Machine learning for atmospheric data analysis</h3>
            <p>Scientific Reports, 2021</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/publications" className="btn">View all publications</Link>
        </div>
      </div>
    </section>
  </div>
);

const About = () => (
  <section className="section">
    <div className="container">
      <h1 style={{ marginBottom: '2rem' }}>About Me</h1>
      <div className="card">
        <p>
          I am a research scientist with 8+ years of experience in atmospheric science, specializing in particulate matter and air quality. 
          I have developed innovative approaches to remote sensing analysis and machine learning applications for environmental data.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Currently, I lead NASA SERVIR's global Air Quality and Health thematic area, developing solutions for the United States, Central Americas, Southeast Asia and Africa.
          My research focuses on using satellite data and machine learning to improve air quality monitoring and forecasting.
        </p>
        <p style={{ marginTop: '1rem' }}>
          I hold a Ph.D. in Atmospheric Science and have published extensively in leading journals in the field.
        </p>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section className="section">
    <div className="container">
      <h1 style={{ marginBottom: '2rem' }}>Professional Experience</h1>
      
      <div className="card">
        <h3>Lead, Air Quality & Health Thematic Area</h3>
        <h4>NASA SERVIR Science Coordination Office</h4>
        <p style={{ color: 'var(--muted-color)', marginBottom: '1rem' }}>2020 - Present</p>
        <p>
          Leading the global Air Quality and Health thematic area for NASA SERVIR, developing satellite-based solutions 
          for air quality monitoring and forecasting in the United States, Central Americas, Southeast Asia and Africa.
        </p>
      </div>
      
      <div className="card">
        <h3>Research Scientist</h3>
        <h4>Universities Space Research Association (USRA)</h4>
        <p style={{ color: 'var(--muted-color)', marginBottom: '1rem' }}>2017 - 2020</p>
        <p>
          Conducted research on atmospheric particulate matter and developed machine learning models for 
          environmental data analysis and prediction.
        </p>
      </div>
      
      <div className="card">
        <h3>Graduate Research Assistant</h3>
        <h4>University Atmospheric Research Department</h4>
        <p style={{ color: 'var(--muted-color)', marginBottom: '1rem' }}>2015 - 2017</p>
        <p>
          Assisted in research projects related to atmospheric science, including data collection, analysis, 
          and model development.
        </p>
      </div>
    </div>
  </section>
);

const Publications = () => (
  <section className="section">
    <div className="container">
      <h1 style={{ marginBottom: '2rem' }}>Publications</h1>
      
      <div className="card">
        <h3>Efficient PM2.5 forecasting using geographical correlation and lagged effects</h3>
        <p style={{ fontStyle: 'italic' }}>Yeo, I., Choi, Y., Lops, Y., Sayeed, A.</p>
        <p>Journal of Environmental Informatics Letters, 2023</p>
        <p style={{ marginTop: '0.5rem' }}>
          This research introduces a novel approach to PM2.5 forecasting that leverages geographical correlations 
          and lagged effects to improve prediction accuracy while reducing computational resources.
        </p>
      </div>
      
      <div className="card">
        <h3>Cost-effective air quality monitoring systems for developing regions</h3>
        <p style={{ fontStyle: 'italic' }}>Sayeed, A., Johnson, M., Kumar, P., et al.</p>
        <p>Environmental Science & Technology, 2022</p>
        <p style={{ marginTop: '0.5rem' }}>
          Development and validation of low-cost air quality monitoring systems suitable for deployment in 
          resource-constrained regions, with a focus on reliability and data quality.
        </p>
      </div>
      
      <div className="card">
        <h3>Machine learning techniques for analyzing atmospheric data from multiple satellite sources</h3>
        <p style={{ fontStyle: 'italic' }}>Sayeed, A., Zhang, L., Williams, K.</p>
        <p>Scientific Reports, 2021</p>
        <p style={{ marginTop: '0.5rem' }}>
          A comprehensive review and implementation of machine learning approaches for integrating and analyzing 
          atmospheric data from various satellite platforms.
        </p>
      </div>
      
      <div className="card">
        <h3>Improving satellite-derived PM2.5 estimates with ground-based corrections</h3>
        <p style={{ fontStyle: 'italic' }}>Chen, H., Sayeed, A., Peterson, J.</p>
        <p>Atmospheric Environment, 2020</p>
        <p style={{ marginTop: '0.5rem' }}>
          A methodology for enhancing the accuracy of satellite-derived particulate matter estimates by 
          incorporating ground-based measurement corrections.
        </p>
      </div>
    </div>
  </section>
);

const Research = () => (
  <section className="section">
    <div className="container">
      <h1 style={{ marginBottom: '2rem' }}>Research</h1>
      
      <div className="card">
        <h2>Air Quality Monitoring and Forecasting</h2>
        <p style={{ marginTop: '1rem' }}>
          My research focuses on developing advanced techniques for air quality monitoring and forecasting using 
          satellite data and machine learning. This includes:
        </p>
        <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
          <li>Integration of multiple satellite data sources for comprehensive air quality assessment</li>
          <li>Development of machine learning models for PM2.5 prediction</li>
          <li>Implementation of geographical correlation techniques to improve forecasting</li>
          <li>Design of cost-effective ground-based monitoring systems to complement satellite data</li>
        </ul>
      </div>
      
      <div className="card">
        <h2>NASA SERVIR Projects</h2>
        <p style={{ marginTop: '1rem' }}>
          As lead of NASA SERVIR's Air Quality and Health thematic area, I oversee projects that apply satellite data 
          to address environmental challenges in various regions:
        </p>
        <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
          <li>Southeast Asia air quality monitoring network</li>
          <li>African dust storm prediction system</li>
          <li>Central American fire and smoke tracking platform</li>
          <li>Global PM2.5 estimation methodology using machine learning</li>
        </ul>
      </div>
      
      <div className="card">
        <h2>Interdisciplinary Applications</h2>
        <p style={{ marginTop: '1rem' }}>
          My work extends beyond atmospheric science to include interdisciplinary applications:
        </p>
        <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
          <li>Health impact assessments of air pollution exposure</li>
          <li>Climate change effects on regional air quality patterns</li>
          <li>Policy recommendations for air quality management</li>
          <li>Capacity building for environmental monitoring in developing regions</li>
        </ul>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="section">
    <div className="container">
      <h1 style={{ marginBottom: '2rem' }}>Contact</h1>
      
      <div className="card">
        <h2>Connect With Me</h2>
        <p style={{ marginTop: '1rem' }}>
          I'm always interested in research collaborations, speaking opportunities, and connecting with fellow scientists.
        </p>
        
        <div style={{ marginTop: '2rem' }}>
          <h3>Professional Profiles</h3>
          <ul style={{ listStyle: 'none', marginTop: '0.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="https://www.linkedin.com/in/alqamah-sayeed-ph-d-3aa249172/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="https://github.com/Alqamah-Sayeed" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a href="https://twitter.com/AlqamahSayeed89" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaTwitter /> Twitter
              </a>
            </li>
          </ul>
        </div>
        
        <div style={{ marginTop: '2rem' }}>
          <h3>Send Me a Message</h3>
          <form style={{ marginTop: '1rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
              <input
                type="text"
                id="name"
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  borderRadius: 'var(--border-radius)',
                  border: '1px solid var(--border-color)'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
              <input
                type="email"
                id="email"
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  borderRadius: 'var(--border-radius)',
                  border: '1px solid var(--border-color)'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem' }}>Message</label>
              <textarea
                id="message"
                rows="5"
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  borderRadius: 'var(--border-radius)',
                  border: '1px solid var(--border-color)'
                }}
              ></textarea>
            </div>
            
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default App;