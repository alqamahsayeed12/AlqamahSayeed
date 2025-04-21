import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Alqamah Sayeed, Ph.D.</h1>
            <h2 className="text-2xl md:text-3xl text-primary mb-6">Atmospheric Science</h2>
            <p className="text-xl mb-8 max-w-2xl">
              Leading NASA SERVIR's global Air Quality and Health thematic area with 8+ years of
              experience in atmospheric science research and satellite-based applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                to="/research"
                className="bg-card text-card-foreground hover:bg-muted px-6 py-3 rounded-md border border-border transition-colors"
              >
                View Research
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Work</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-2">Air Quality Monitoring</h3>
              <p className="mb-4">
                Development of satellite-based air quality monitoring systems for regions with limited ground-based infrastructure.
              </p>
              <Link to="/research" className="text-primary hover:underline">Learn more →</Link>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-2">Machine Learning Research</h3>
              <p className="mb-4">
                Application of machine learning techniques to improve PM2.5 forecasting using geographical correlations.
              </p>
              <Link to="/publications" className="text-primary hover:underline">View publications →</Link>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-2">NASA SERVIR Leadership</h3>
              <p className="mb-4">
                Leading international collaborations to implement air quality systems in developing regions worldwide.
              </p>
              <Link to="/experience" className="text-primary hover:underline">See experience →</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Brief Bio Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg mb-6">
              I am an atmospheric science researcher with expertise in satellite remote sensing, 
              air quality monitoring, and machine learning applications for environmental data. 
              My work focuses on developing innovative solutions for air quality challenges in 
              regions with limited monitoring capabilities.
            </p>
            <p className="text-lg mb-6">
              Currently, I lead NASA SERVIR's Air Quality and Health thematic area, where I 
              collaborate with international partners to implement satellite-based air quality 
              monitoring and forecasting systems in the United States, Central Americas, 
              Southeast Asia and Africa.
            </p>
            <Link to="/about" className="text-primary hover:underline">Read more about my background →</Link>
          </div>
        </div>
      </section>
      
      {/* Recent Publications Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Recent Publications</h2>
            <Link to="/publications" className="text-primary hover:underline">View all publications →</Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-2">Efficient PM2.5 forecasting using geographical correlation and lagged effects</h3>
              <p className="italic mb-1">Yeo, I., Choi, Y., Lops, Y., Sayeed, A.</p>
              <p className="text-primary mb-4">Journal of Environmental Informatics Letters, 2023</p>
              <Link to="/publications" className="text-primary hover:underline">Read more →</Link>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-2">Cost-effective air quality monitoring systems for developing regions</h3>
              <p className="italic mb-1">Sayeed, A., Johnson, M., Kumar, P., et al.</p>
              <p className="text-primary mb-4">Environmental Science & Technology, 2022</p>
              <Link to="/publications" className="text-primary hover:underline">Read more →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}