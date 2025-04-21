import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Alqamah Sayeed</h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">Atmospheric Science</h2>
            <p className="text-lg mb-8">
              Research scientist with 8+ years of experience in atmospheric science. Currently leading NASA SERVIR's 
              global Air Quality and Health thematic area.
            </p>
            <Link to="/contact" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md transition-colors">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto bg-card p-6 rounded-lg shadow-sm border border-border">
            <p className="mb-4">
              I am a passionate researcher in atmospheric science with a focus on particulate matter and air quality. 
              My research applies machine learning techniques to advance atmospheric modeling and satellite data analysis.
            </p>
            <p>
              I currently lead NASA SERVIR's global Air Quality and Health thematic area, developing solutions for 
              the United States, Central Americas, Southeast Asia and Africa.
            </p>
            <div className="mt-6 text-right">
              <Link to="/about" className="text-primary hover:underline">
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Featured Publications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="font-bold text-xl mb-2">Efficient PM2.5 forecasting using geographical correlation</h3>
              <p className="text-muted-foreground mb-4">Journal of Environmental Informatics Letters, 2023</p>
              <p className="line-clamp-3">
                A novel approach to PM2.5 forecasting that leverages geographical correlations and lagged effects.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="font-bold text-xl mb-2">Cost-effective air quality monitoring systems</h3>
              <p className="text-muted-foreground mb-4">Environmental Science & Technology, 2022</p>
              <p className="line-clamp-3">
                Development of low-cost air quality monitoring systems for deployment in resource-constrained regions.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="font-bold text-xl mb-2">Machine learning for atmospheric data analysis</h3>
              <p className="text-muted-foreground mb-4">Scientific Reports, 2021</p>
              <p className="line-clamp-3">
                Comprehensive review of machine learning approaches for integrating and analyzing atmospheric data.
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link to="/publications" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md transition-colors">
              View all publications
            </Link>
          </div>
        </div>
      </section>

      {/* Research Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Research Areas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="font-bold text-xl mb-4">Air Quality Monitoring</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Integration of multiple satellite data sources</li>
                <li>Machine learning models for PM2.5 prediction</li>
                <li>Geographical correlation techniques</li>
                <li>Cost-effective monitoring systems</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="font-bold text-xl mb-4">NASA SERVIR Projects</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Southeast Asia air quality monitoring network</li>
                <li>African dust storm prediction system</li>
                <li>Central American fire and smoke tracking</li>
                <li>Global PM2.5 estimation methodology</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link to="/research" className="text-primary hover:underline inline-flex items-center">
              Learn more about my research
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}