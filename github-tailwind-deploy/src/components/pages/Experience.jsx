import React from 'react';

export default function Experience() {
  const experiences = [
    {
      title: "Lead, Air Quality & Health Thematic Area",
      company: "NASA SERVIR Science Coordination Office",
      period: "2020 - Present",
      description: "Leading the global Air Quality and Health thematic area for NASA SERVIR, developing satellite-based solutions for air quality monitoring and forecasting in the United States, Central Americas, Southeast Asia and Africa. Coordinating with international partners to implement air quality systems and build capacity in developing regions."
    },
    {
      title: "Research Scientist",
      company: "Universities Space Research Association (USRA)",
      period: "2017 - 2020",
      description: "Conducted research on atmospheric particulate matter and developed machine learning models for environmental data analysis and prediction. Led multiple projects on satellite-based air quality monitoring and collaborated with international partners to improve environmental data access in developing regions."
    },
    {
      title: "Graduate Research Assistant",
      company: "University Atmospheric Research Department",
      period: "2015 - 2017",
      description: "Assisted in research projects related to atmospheric science, including data collection, analysis, and model development. Contributed to publications on air quality monitoring techniques and participated in field campaigns to validate satellite measurements."
    },
    {
      title: "Environmental Data Analyst (Intern)",
      company: "National Environmental Monitoring Agency",
      period: "2014 - 2015",
      description: "Analyzed environmental datasets to identify pollution patterns and trends. Supported the development of data visualization tools for public communication of air quality information."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Professional Experience</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm border border-border"
            >
              <h2 className="text-2xl font-bold">{exp.title}</h2>
              <h3 className="text-xl text-primary mb-1">{exp.company}</h3>
              <p className="text-muted-foreground mb-4">{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-6">Key Achievements</h2>
          
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong>Regional Air Quality System:</strong> Led the development of a comprehensive air quality monitoring system for Southeast Asia, combining satellite data with ground-based measurements.
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong>Machine Learning Research:</strong> Published 12+ peer-reviewed papers on using machine learning techniques for atmospheric data analysis, with over 500 citations.
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong>Capacity Building:</strong> Trained over 200 environmental scientists and officials from 15 countries on satellite-based air quality monitoring techniques.
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong>International Collaboration:</strong> Established partnerships with 8 international organizations to improve global air quality monitoring networks.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}