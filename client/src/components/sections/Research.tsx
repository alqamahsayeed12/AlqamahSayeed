import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Database, FileBarChart, X } from "lucide-react";
import { FaSatelliteDish } from "react-icons/fa";
import SectionTitle from "@/components/ui/section-title";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";

export default function Research() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
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
      ],
      detailedContent: {
        overview: "The MERRA2-ML-PM2.5 project is an advanced machine learning framework designed to predict fine particulate matter (PM2.5) concentrations using NASA's Modern-Era Retrospective analysis for Research and Applications, Version 2 (MERRA-2) reanalysis data.",
        methodology: "The project employs convolutional neural networks (CNNs) to process and analyze various meteorological and atmospheric variables from the MERRA-2 dataset. By identifying complex patterns and relationships between these variables and ground-based PM2.5 measurements, the model can generate high-resolution predictions even in areas with limited monitoring infrastructure.",
        impact: "This research significantly enhances our ability to estimate air quality in regions without adequate ground monitoring, which is particularly valuable for public health assessments, policy decision-making, and environmental justice initiatives. The machine learning approach outperforms traditional statistical methods by capturing non-linear relationships and spatial correlations in the data.",
        technicalDetails: [
          "Utilizes a multi-layer CNN architecture with residual connections",
          "Incorporates spatial and temporal attention mechanisms",
          "Processes multiple MERRA-2 atmospheric variables including aerosol optical depth, relative humidity, and wind patterns",
          "Validated against EPA monitoring stations with cross-validation techniques",
          "Achieves over 85% accuracy in PM2.5 prediction across diverse geographical regions"
        ],
        publications: [
          "Sayeed, A., et al. (2022). Hourly and Daily PM2.5 Estimations Using MERRA‐2: A Machine Learning Approach. Earth and Space Science, 9(2)",
          "Sayeed, A., et al. (2021). Bias correcting and extending the PM forecast by CMAQ up to 7 days using deep convolutional neural networks. Atmospheric Environment, 253"
        ]
      }
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
      ],
      detailedContent: {
        overview: "The MERRA2 CNN HAQAST PM2.5 Dataset is a comprehensive, pre-processed collection of atmospheric data specifically formatted for machine learning applications in air quality prediction. Hosted by NASA's Goddard Earth Sciences Data and Information Services Center (GES DISC), this dataset serves as a valuable resource for researchers working on PM2.5 estimation.",
        methodology: "The dataset was created by extracting and processing relevant variables from the MERRA-2 reanalysis data, including aerosol optical depth, relative humidity, temperature profiles, and various meteorological parameters. The data underwent careful quality control, normalization, and formatting to make it directly applicable for training convolutional neural networks and other machine learning models.",
        impact: "By providing a standardized, ready-to-use dataset, this work reduces the technical barriers for researchers and practitioners in the field of air quality modeling. It enables more rapid development and testing of new machine learning approaches for PM2.5 estimation, ultimately contributing to improvements in public health research and environmental monitoring capabilities.",
        datasetComponents: [
          "Daily averaged MERRA-2 aerosol and meteorological variables (2000-2019)",
          "Spatially aligned ground-based PM2.5 measurements from EPA monitoring stations",
          "Pre-processed input tensors for direct use in CNN models",
          "Validation subsets with data augmentation for robust model testing",
          "Comprehensive metadata and usage documentation"
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