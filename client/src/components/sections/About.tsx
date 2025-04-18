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
              With over eight years at the frontier of atmospheric science and artificial intelligence, I've dedicated my career to transforming environmental monitoring through innovative computational approaches. My expertise spans developing sophisticated machine learning architectures for air quality prediction, optimizing satellite data assimilation techniques, and creating advanced climate modeling solutions to address urgent environmental challenges.
            </p>
            <p className="text-lg mb-6">
              As the Thematic Lead for NASA SERVIR's global Air Quality and Health initiative, I direct the development of next-generation satellite-based monitoring tools and predictive deep learning frameworks that revolutionize air pollution forecasting. My work connects cutting-edge science with practical applications through strategic collaborations with regional hubs throughout Southeast Asia, the Hindukush region, and Eastern and Southern Africa, empowering local decision-makers with critical environmental intelligence.
            </p>
            <p className="text-lg mb-8">
              My research has been featured in high-impact scientific journals, where I've pioneered novel approaches that bridge theoretical AI advancements with real-world environmental applications. Through leadership of multi-institutional research initiatives and contributions to global air quality programs, I've helped transform how we monitor, predict, and mitigate environmental threats, ultimately supporting improved public health outcomes and more effective climate adaptation strategies worldwide.
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
