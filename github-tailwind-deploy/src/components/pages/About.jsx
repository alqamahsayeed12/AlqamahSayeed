import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const education = [
    {
      degree: "Ph.D. in Atmospheric Science",
      institution: "University of Environmental Sciences",
      year: "2015-2019",
      description: "Specialized in satellite remote sensing of atmospheric particulate matter and machine learning applications for air quality monitoring."
    },
    {
      degree: "M.S. in Environmental Engineering",
      institution: "State University",
      year: "2013-2015",
      description: "Focused on air pollution control technologies and environmental data analysis techniques."
    },
    {
      degree: "B.S. in Environmental Science",
      institution: "National Institute of Technology",
      year: "2009-2013",
      description: "Foundations in environmental science with a specialization in atmospheric monitoring."
    }
  ];

  const skills = [
    {
      category: "Technical Skills",
      items: [
        "Satellite Data Analysis",
        "Air Quality Modeling",
        "Remote Sensing",
        "Machine Learning",
        "Python Programming",
        "Data Visualization",
        "Statistical Analysis",
        "Geographic Information Systems (GIS)"
      ]
    },
    {
      category: "Research Skills",
      items: [
        "Scientific Publication",
        "Research Design",
        "Literature Review",
        "Data Collection",
        "Environmental Monitoring",
        "Field Campaigns",
        "Technical Writing",
        "Peer Review"
      ]
    },
    {
      category: "Leadership & Management",
      items: [
        "Project Management",
        "Team Leadership",
        "International Collaboration",
        "Stakeholder Engagement",
        "Capacity Building",
        "Strategic Planning",
        "Grant Writing",
        "Workshop Facilitation"
      ]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Bio Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Biography</h2>
            <div className="space-y-4">
              <p>
                I am an atmospheric scientist with over 8 years of experience in air quality research, 
                satellite remote sensing, and machine learning applications for environmental data. My 
                work focuses on developing innovative approaches to monitor and predict air quality in 
                regions with limited ground-based monitoring capabilities.
              </p>
              <p>
                Currently, I serve as the lead for NASA SERVIR's global Air Quality and Health thematic 
                area, where I coordinate with international partners to implement satellite-based air 
                quality monitoring and forecasting systems in the United States, Central Americas, 
                Southeast Asia and Africa. My role involves translating cutting-edge scientific research 
                into practical applications that support environmental decision-making and public health 
                initiatives.
              </p>
              <p>
                Throughout my career, I have published numerous peer-reviewed papers on using machine 
                learning techniques for atmospheric data analysis, developed cost-effective monitoring 
                systems for developing regions, and led capacity-building efforts to strengthen 
                air quality management capabilities worldwide.
              </p>
            </div>
          </div>
          
          {/* Education Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-sm border border-border">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-primary">{edu.institution}</p>
                  <p className="text-muted-foreground mb-2">{edu.year}</p>
                  <p>{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Skills Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-sm border border-border">
                  <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="text-primary mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-muted p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in Collaboration?</h2>
            <p className="mb-6">
              I'm always open to discussing research opportunities, speaking engagements, 
              or potential collaborations in atmospheric science and air quality.
            </p>
            <Link 
              to="/contact" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}