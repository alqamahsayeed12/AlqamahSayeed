import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Database, FileBarChart, X } from "lucide-react";
import { FaSatelliteDish } from "react-icons/fa";
import SectionTitle from "@/components/ui/section-title";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";

import merra2Pm25MapImage from "../../assets/merra2_pm25_map.png";

export default function Research() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const researchProjects = [
    {
      title: "MERRA2 CNN HAQAST PM2.5 Dataset",
      description: "An integrated machine learning framework and dataset for predicting PM2.5 concentrations using MERRA-2 reanalysis data. This comprehensive project develops CNN-based approaches for high-resolution air quality prediction.",
      image: merra2Pm25MapImage,
      technologies: ["Python", "TensorFlow", "Satellite Data", "Deep Learning", "Atmospheric Science", "Air Quality", "NASA Data"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/Alqamah-Sayeed/MERRA2-ML-PM2.5",
          icon: <GitBranch className="h-4 w-4 mr-2" />
        },
        {
          label: "Dataset",
          url: "https://disc.gsfc.nasa.gov/datasets/MERRA2_CNN_HAQAST_PM25_1/summary",
          icon: <Database className="h-4 w-4 mr-2" />
        }
      ],
      detailedContent: {
        overview: "The MERRA2 CNN HAQAST PM2.5 Dataset and associated ML framework represent an advanced approach to predicting fine particulate matter (PM2.5) concentrations using NASA's Modern-Era Retrospective analysis for Research and Applications, Version 2 (MERRA-2) reanalysis data. This integrated project combines both model development and a comprehensive pre-processed dataset specifically formatted for machine learning applications in air quality prediction.",
        methodology: "The project employs convolutional neural networks (CNNs) to process and analyze various meteorological and atmospheric variables from the MERRA-2 dataset. By identifying complex patterns and relationships between these variables and ground-based PM2.5 measurements, the model can generate high-resolution predictions even in areas with limited monitoring infrastructure. The dataset was created by extracting and processing relevant variables from the MERRA-2 reanalysis data, including aerosol optical depth, relative humidity, temperature profiles, and various meteorological parameters. The data underwent careful quality control, normalization, and formatting to make it directly applicable for training CNNs and other machine learning models.",
        impact: "This research significantly enhances our ability to estimate air quality in regions without adequate ground monitoring, which is particularly valuable for public health assessments, policy decision-making, and environmental justice initiatives. The machine learning approach outperforms traditional statistical methods by capturing non-linear relationships and spatial correlations in the data. By providing a standardized, ready-to-use dataset, this work reduces the technical barriers for researchers and practitioners in the field of air quality modeling, enabling more rapid development and testing of new approaches for PM2.5 estimation.",
        technicalDetails: [
          "Utilizes a multi-layer CNN architecture with residual connections",
          "Incorporates spatial and temporal attention mechanisms",
          "Processes multiple MERRA-2 atmospheric variables including aerosol optical depth, relative humidity, and wind patterns",
          "Validated against EPA monitoring stations with cross-validation techniques",
          "Achieves over 85% accuracy in PM2.5 prediction across diverse geographical regions"
        ],
        datasetComponents: [
          "Daily averaged MERRA-2 aerosol and meteorological variables (2000-2019)",
          "Spatially aligned ground-based PM2.5 measurements from EPA monitoring stations",
          "Pre-processed input tensors for direct use in CNN models",
          "Validation subsets with data augmentation for robust model testing",
          "Comprehensive metadata and usage documentation"
        ],
        publications: [
          "Sayeed, A., et al. (2022). Hourly and Daily PM2.5 Estimations Using MERRA‐2: A Machine Learning Approach. Earth and Space Science, 9(2)",
          "Sayeed, A., et al. (2021). Bias correcting and extending the PM forecast by CMAQ up to 7 days using deep convolutional neural networks. Atmospheric Environment, 253",
          "Sayeed, A., et al. (2021). A novel CMAQ-CNN hybrid model to forecast hourly surface-ozone concentrations 14 days in advance. Scientific reports 11, 10891"
        ],
        applications: [
          "Development of region-specific air quality prediction models",
          "Long-term trend analysis of PM2.5 concentrations and contributing factors",
          "Evaluation and comparison of different machine learning architectures for environmental data",
          "Integration with health impact assessment studies and environmental policy research"
        ]
      }
    }
  ];

  return (
    <section id="research" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle>Research Project</SectionTitle>
        
        <div className="grid grid-cols-1 max-w-3xl mx-auto gap-8 mt-12">
          {researchProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="h-full flex flex-col overflow-hidden cursor-pointer transform transition-transform hover:-translate-y-1 hover:shadow-lg"
                onClick={() => setSelectedProject(index)}
              >
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
                  <CardTitle className="text-primary flex items-center">
                    {project.title}
                    <span className="ml-2 text-xs text-primary/70">(Click for details)</span>
                  </CardTitle>
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
                      onClick={(e) => e.stopPropagation()} // Prevent card click when clicking the button
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
      </div>

      {/* Project Detail Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject !== null && (
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary">
                {researchProjects[selectedProject].title}
              </DialogTitle>
              <DialogDescription className="text-gray-700 text-base">
                {researchProjects[selectedProject].description}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6 py-4">
              {/* Project Image or Icon */}
              {researchProjects[selectedProject].image ? (
                <div className="h-64 overflow-hidden rounded-md">
                  <img 
                    src={researchProjects[selectedProject].image} 
                    alt={researchProjects[selectedProject].title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-r from-primary/10 to-primary/30 rounded-md flex items-center justify-center">
                  <FaSatelliteDish className="h-20 w-20 text-primary/40" />
                </div>
              )}
              
              {/* Overview */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Overview</h3>
                <p className="text-gray-800">
                  {researchProjects[selectedProject].detailedContent.overview}
                </p>
              </div>
              
              {/* Methodology */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Methodology</h3>
                <p className="text-gray-800">
                  {researchProjects[selectedProject].detailedContent.methodology}
                </p>
              </div>
              
              {/* Impact */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Impact</h3>
                <p className="text-gray-800">
                  {researchProjects[selectedProject].detailedContent.impact}
                </p>
              </div>
              
              {/* Technical Details or Dataset Components */}
              {researchProjects[selectedProject].detailedContent.technicalDetails && (
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Technical Details</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-800">
                    {researchProjects[selectedProject].detailedContent.technicalDetails.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Dataset Components */}
              {researchProjects[selectedProject].detailedContent.datasetComponents && (
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Dataset Components</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-800">
                    {researchProjects[selectedProject].detailedContent.datasetComponents.map((component, index) => (
                      <li key={index}>{component}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Publications */}
              {researchProjects[selectedProject].detailedContent.publications && (
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Related Publications</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-800">
                    {researchProjects[selectedProject].detailedContent.publications.map((publication, index) => (
                      <li key={index}>{publication}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Applications */}
              {researchProjects[selectedProject].detailedContent.applications && (
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Applications</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-800">
                    {researchProjects[selectedProject].detailedContent.applications.map((application, index) => (
                      <li key={index}>{application}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <DialogFooter className="flex-col sm:flex-row gap-2">
              {researchProjects[selectedProject].links.map((link, i) => (
                <Button 
                  key={i}
                  variant="outline" 
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
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </Button>
              ))}
              <DialogClose asChild>
                <Button variant="secondary" className="ml-auto">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}