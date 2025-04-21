import React from 'react';

export default function About() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-sm border border-border">
          <div className="space-y-6">
            <p className="text-lg">
              I am a research scientist with 8+ years of experience in atmospheric science, specializing in particulate matter and air quality. 
              I have developed innovative approaches to remote sensing analysis and machine learning applications for environmental data.
            </p>
            
            <p className="text-lg">
              Currently, I lead NASA SERVIR's global Air Quality and Health thematic area, developing solutions for the United States, 
              Central Americas, Southeast Asia and Africa. My research focuses on using satellite data and machine learning to improve 
              air quality monitoring and forecasting.
            </p>
            
            <p className="text-lg">
              I hold a Ph.D. in Atmospheric Science and have published extensively in leading journals in the field. My interdisciplinary 
              background allows me to bridge the gap between atmospheric science, remote sensing, and data science to create innovative 
              solutions for environmental challenges.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Ph.D. in Atmospheric Science</h3>
                <p className="text-muted-foreground">University of Environmental Sciences • 2015-2019</p>
                <p>Dissertation: "Machine Learning Applications for Satellite-Based Air Quality Analysis"</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold">M.S. in Environmental Engineering</h3>
                <p className="text-muted-foreground">Technical Institute of Climate Studies • 2013-2015</p>
                <p>Thesis: "Development of Low-Cost Air Quality Sensors for Urban Environments"</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold">B.S. in Earth Science</h3>
                <p className="text-muted-foreground">State University • 2009-2013</p>
                <p>Minor in Computer Science</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Satellite Data Analysis</li>
                  <li>Air Quality Modeling</li>
                  <li>Machine Learning & AI</li>
                  <li>Remote Sensing</li>
                  <li>GIS and Spatial Analysis</li>
                  <li>Environmental Monitoring</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Programming & Tools</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Python (NumPy, Pandas, SciKit-Learn)</li>
                  <li>R for Statistical Analysis</li>
                  <li>Google Earth Engine</li>
                  <li>MATLAB</li>
                  <li>ArcGIS & QGIS</li>
                  <li>Data Visualization (Tableau, D3.js)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}