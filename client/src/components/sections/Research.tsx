import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Database, Download, FileBarChart } from "lucide-react";
import { FaSatelliteDish } from "react-icons/fa";
import SectionTitle from "@/components/ui/section-title";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Research() {
  const researchProjects = [
    {
      title: "MERRA2-ML-PM2.5",
      description: "Machine learning model for predicting PM2.5 concentrations using MERRA-2 reanalysis data. This project develops a CNN-based approach for high-resolution air quality prediction.",
      image: null,
      technologies: ["Python", "TensorFlow", "Satellite Data", "Deep Learning"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/Alqamah-Sayeed/MERRA2-ML-PM2.5",
          icon: <GitBranch className="h-4 w-4 mr-2" />
        }
      ]
    },
    {
      title: "MERRA2 CNN HAQAST PM2.5 Dataset",
      description: "A dataset derived from MERRA-2 reanalysis data for PM2.5 estimation using convolutional neural networks. This NASA-hosted dataset is designed to support air quality research and applications.",
      image: null,
      technologies: ["Satellite Data", "Atmospheric Science", "Air Quality", "NASA Data"],
      links: [
        {
          label: "Dataset",
          url: "https://disc.gsfc.nasa.gov/datasets/MERRA2_CNN_HAQAST_PM25_1/summary",
          icon: <Database className="h-4 w-4 mr-2" />
        }
      ]
    }
  ];

  return (
    <section id="research" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle>Research Projects</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {researchProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                {project.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                )}
                {!project.image && (
                  <div className="h-48 bg-gradient-to-r from-primary/10 to-primary/20 flex items-center justify-center">
                    <FaSatelliteDish className="h-16 w-16 text-primary/30" />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-primary">{project.title}</CardTitle>
                  <CardDescription className="text-gray-800">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 border-t pt-4">
                  {project.links.map((link, i) => (
                    <Button 
                      key={i}
                      variant="outline" 
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                      asChild
                    >
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        {link.icon}
                        {link.label}
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-primary">Research Focus</h3>
          <p className="text-gray-800 mb-4">
            My research focuses on applying machine learning techniques to atmospheric science, particularly 
            for air quality monitoring and prediction. I work extensively with NASA's MERRA-2 (Modern-Era 
            Retrospective analysis for Research and Applications, Version 2) reanalysis data to develop models 
            that can accurately estimate PM2.5 concentrations at high spatial resolutions.
          </p>
          <p className="text-gray-800 mb-4">
            The MERRA2-ML-PM2.5 project implements convolutional neural networks to analyze satellite data, 
            enabling more accurate air quality predictions in regions where ground monitoring is sparse. This 
            approach helps bridge gaps in air quality monitoring networks and provides valuable information for 
            public health and environmental policy.
          </p>
          <p className="text-gray-800">
            The corresponding dataset hosted by NASA's Goddard Earth Sciences Data and Information Services Center 
            (GES DISC) provides researchers with pre-processed MERRA-2 data specifically formatted for machine 
            learning applications in PM2.5 estimation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}