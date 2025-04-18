import { motion } from "framer-motion";
import { Check, MapPin } from "lucide-react";
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
              I'm an atmospheric scientist with over eight years of experience in air quality research, specializing in the use of advanced machine learning techniques for environmental monitoring and forecasting. My expertise lies in developing innovative ML/DL solutions for air quality prediction, satellite data assimilation, and climate modeling challenges.
            </p>
            <p className="text-lg mb-6">
              Currently, I lead NASA SERVIR's global Air Quality and Health thematic area, where I develop satellite-based tools and deep learning models to improve air pollution forecasting. I collaborate with regional hubs across Southeast Asia, Hindukush, and Eastern and Southern Africa to support decision-making and environmental monitoring initiatives.
            </p>
            <p className="text-lg mb-8">
              I have published in high-impact journals, led multi-institutional projects, and contributed to global air quality initiatives, bridging the gap between cutting-edge AI research and practical environmental applications to address critical public health and climate challenges.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-primary">Key Skills</h3>
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
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-800">{skill}</span>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold mb-4 text-primary">Education</h3>
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
              <h3 className="text-xl font-semibold mb-4 text-primary">Languages</h3>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
