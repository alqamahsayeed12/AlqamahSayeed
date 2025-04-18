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
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg mb-6">
              With over eight years at the intersection of atmospheric science and artificial intelligence, I've dedicated my career to advancing environmental monitoring through cutting-edge computational approaches. My work spans the development of machine learning architectures for air quality prediction, optimization of satellite data assimilation, and the creation of innovative climate modeling solutions to address pressing global challenges.
            </p>
            <p className="text-lg mb-6">
              As the Thematic Lead for NASA SERVIR's global Air Quality and Health thematic area, I lead the design and development of next-generation satellite-based monitoring tools and predictive deep learning frameworks that are reshaping air pollution forecasting. By collaborating with regional hubs across Southeast Asia, the Hindu Kush Himalaya, and Eastern and Southern Africa, I help deliver actionable environmental intelligence to support local decision-making and climate resilience.
            </p>
            <p className="text-lg mb-8">
              My research has been featured in leading scientific journals, where I've pioneered approaches that connect theoretical AI advancements to real-world environmental applications. Through multi-institutional research leadership and contributions to global air quality programs, I strive to transform how we monitor, predict, and respond to environmental threats—advancing public health outcomes and strengthening climate adaptation worldwide.
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
        </div>
      </div>
    </section>
  );
}
