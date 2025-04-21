import React from 'react';

export default function Research() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Research</h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <h2 className="text-2xl font-bold mb-4">Air Quality Monitoring and Forecasting</h2>
            <p className="mb-4">
              My research focuses on developing advanced techniques for air quality monitoring and forecasting 
              using satellite data and machine learning. This includes innovative approaches to data integration,
              model development, and validation.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Key Areas:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Integration of multiple satellite data sources for comprehensive air quality assessment</li>
                <li>Development of machine learning models for PM2.5 prediction</li>
                <li>Implementation of geographical correlation techniques to improve forecasting</li>
                <li>Design of cost-effective ground-based monitoring systems to complement satellite data</li>
                <li>Validation methodologies for satellite-derived air quality parameters</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <h2 className="text-2xl font-bold mb-4">NASA SERVIR Projects</h2>
            <p className="mb-4">
              As lead of NASA SERVIR's Air Quality and Health thematic area, I oversee projects that apply 
              satellite data to address environmental challenges in various regions. These projects focus on 
              building capacity in developing countries and providing actionable information for decision-makers.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Current Projects:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Southeast Asia air quality monitoring network:</strong> Integration of satellite data 
                  with ground measurements to provide comprehensive air quality information for the region.
                </li>
                <li>
                  <strong>African dust storm prediction system:</strong> Early warning system for dust storms 
                  using satellite observations and meteorological models.
                </li>
                <li>
                  <strong>Central American fire and smoke tracking platform:</strong> Near real-time monitoring 
                  of fires and smoke plumes to support public health advisories.
                </li>
                <li>
                  <strong>Global PM2.5 estimation methodology:</strong> Machine learning approach to estimate 
                  ground-level PM2.5 using satellite aerosol optical depth data.
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <h2 className="text-2xl font-bold mb-4">Interdisciplinary Applications</h2>
            <p className="mb-4">
              My work extends beyond atmospheric science to include interdisciplinary applications that 
              connect air quality research with other fields. These collaborations help to increase the 
              impact of scientific findings on society.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Research Directions:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Health impact assessments of air pollution exposure</li>
                <li>Climate change effects on regional air quality patterns</li>
                <li>Environmental justice implications of air pollution distribution</li>
                <li>Policy recommendations based on scientific evidence</li>
                <li>Low-cost sensing technologies for citizen science initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}