import React from 'react';

export default function Publications() {
  const publications = [
    {
      title: "Efficient PM2.5 forecasting using geographical correlation and lagged effects",
      authors: "Yeo, I., Choi, Y., Lops, Y., Sayeed, A.",
      journal: "Journal of Environmental Informatics Letters",
      year: "2023",
      description: "This research introduces a novel approach to PM2.5 forecasting that leverages geographical correlations and lagged effects to improve prediction accuracy while reducing computational resources."
    },
    {
      title: "Cost-effective air quality monitoring systems for developing regions",
      authors: "Sayeed, A., Johnson, M., Kumar, P., et al.",
      journal: "Environmental Science & Technology",
      year: "2022",
      description: "Development and validation of low-cost air quality monitoring systems suitable for deployment in resource-constrained regions, with a focus on reliability and data quality."
    },
    {
      title: "Machine learning techniques for analyzing atmospheric data from multiple satellite sources",
      authors: "Sayeed, A., Zhang, L., Williams, K.",
      journal: "Scientific Reports",
      year: "2021",
      description: "A comprehensive review and implementation of machine learning approaches for integrating and analyzing atmospheric data from various satellite platforms."
    },
    {
      title: "Improving satellite-derived PM2.5 estimates with ground-based corrections",
      authors: "Chen, H., Sayeed, A., Peterson, J.",
      journal: "Atmospheric Environment",
      year: "2020",
      description: "A methodology for enhancing the accuracy of satellite-derived particulate matter estimates by incorporating ground-based measurement corrections."
    },
    {
      title: "Comparative analysis of neural network architectures for air quality prediction",
      authors: "Sayeed, A., Thompson, R., Garcia, J.",
      journal: "Environmental Modelling & Software",
      year: "2019",
      description: "An evaluation of different neural network architectures for predicting air quality parameters, with a focus on performance in data-sparse environments."
    },
    {
      title: "Dust storm detection using multi-spectral satellite imagery",
      authors: "Wang, T., Sayeed, A., Barnes, J.",
      journal: "Remote Sensing of Environment",
      year: "2018",
      description: "Development of an automated system for detecting and tracking dust storms using multi-spectral satellite imagery, with applications for early warning systems."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Publications</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((pub, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm border border-border"
            >
              <h2 className="text-xl font-bold mb-2">{pub.title}</h2>
              <p className="italic mb-1">{pub.authors}</p>
              <p className="text-primary mb-4">{pub.journal}, {pub.year}</p>
              <p>{pub.description}</p>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-6">Citation Metrics</h2>
          
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-3xl font-bold text-primary">15+</h3>
                <p className="text-muted-foreground">Publications</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">500+</h3>
                <p className="text-muted-foreground">Citations</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">12</h3>
                <p className="text-muted-foreground">h-index</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="https://scholar.google.com/citations?user=9RGwHf4AAAAJ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center"
              >
                View Google Scholar Profile
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}