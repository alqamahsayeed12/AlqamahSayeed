import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, MapPin, Phone, Mail } from "lucide-react";
import SectionTitle from "@/components/ui/section-title";
import { skills } from "@/data/skills";
import { education } from "@/data/education";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <motion.div 
            className="md:w-2/3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg mb-6">
              I am a research scientist specializing in AI-driven atmospheric sciences with expertise in machine learning and deep learning for air quality prediction, satellite data assimilation, and climate modeling. My work focuses on developing innovative solutions for environmental challenges using advanced computational techniques.
            </p>
            <p className="text-lg mb-6">
              Currently, I serve as the Thematic Lead for Air Quality and Health at the University of Alabama in Huntsville, where I collaborate with regional hubs across Southeast Asia, Hindukush, and Eastern and Southern Africa to develop services and solutions for air quality monitoring and forecasting.
            </p>
            <p className="text-lg mb-8">
              I have published in high-impact journals, led multi-institutional projects, and contributed to global air quality initiatives, bridging the gap between cutting-edge AI research and practical environmental applications.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-blue-700">Key Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Check className="h-5 w-5 text-blue-700 mr-2" />
                  <span className="text-gray-800">{skill}</span>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold mb-4 text-blue-700">Education</h3>
            <div className="space-y-4 mb-8">
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                >
                  <span className="font-semibold text-gray-900">{edu.degree}</span>
                  <span className="text-gray-800">{edu.institution}, {edu.location}</span>
                  <span className="text-gray-700 text-sm">{edu.period}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/3 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-700 mr-3 mt-1" />
                  <span className="text-gray-800">5771 Oakwood Rd. NW, Huntsville, AL</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-700 mr-3" />
                  <span className="text-gray-800">(346)-717-5706</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-700 mr-3" />
                  <span className="text-gray-800">alqamah.sayeed12@gmail.com</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Languages</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-800">English</span>
                  <span className="text-sm text-gray-700">Fluent</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-800">Hindi</span>
                  <span className="text-sm text-gray-700">Native</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Download CV</h3>
              <Button 
                className="bg-secondary hover:bg-secondary/90 flex items-center"
                asChild
              >
                <a href="/api/cv" download="Alqamah_Sayeed_CV.pdf">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="h-4 w-4 mr-2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Full CV
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
