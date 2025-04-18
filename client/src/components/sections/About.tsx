import { motion } from "framer-motion";
import { Check, MapPin } from "lucide-react";
import SectionTitle from "@/components/ui/section-title";
import { skills } from "@/data/skills";
import { education } from "@/data/education";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="mt-14">
          <motion.div 
            className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="prose prose-lg max-w-none">
              <motion.p 
                className="text-lg leading-relaxed mb-6 text-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                With over eight years at the intersection of atmospheric science and artificial intelligence, I've dedicated my career to advancing environmental monitoring through cutting-edge computational approaches. My work spans the development of machine learning architectures for air quality prediction, optimization of satellite data assimilation, and the creation of innovative climate modeling solutions to address pressing global challenges.
              </motion.p>
              
              <motion.p 
                className="text-lg leading-relaxed mb-6 text-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                As the Thematic Lead for NASA SERVIR's global Air Quality and Health thematic area, I lead the design and development of next-generation satellite-based monitoring tools and predictive deep learning frameworks that are reshaping air pollution forecasting. By collaborating with regional hubs across Southeast Asia, the Hindu Kush Himalaya, and Eastern and Southern Africa, I help deliver actionable environmental intelligence to support local decision-making and climate resilience.
              </motion.p>
              
              <motion.p 
                className="text-lg leading-relaxed mb-10 text-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                My research has been featured in leading scientific journals, where I've pioneered approaches that connect theoretical AI advancements to real-world environmental applications. Through multi-institutional research leadership and contributions to global air quality programs, I strive to transform how we monitor, predict, and respond to environmental threats—advancing public health outcomes and strengthening climate adaptation worldwide.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-5 text-primary border-b border-gray-100 pb-2">Key Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center bg-gray-50 p-3 rounded-lg"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-800">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-5 text-primary border-b border-gray-100 pb-2">Education</h3>
              <motion.p 
                className="text-lg leading-relaxed mb-5 text-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                I hold a Ph.D. in Atmospheric Sciences from the University of Houston, where my research focused on integrating deep learning with numerical models to improve weather and air quality forecasting. Before that, I completed an M.Tech in Atmospheric and Oceanic Sciences at the Indian Institute of Technology, Delhi, where my master's thesis explored how climate change could impact India's wind energy potential. I began my academic journey with a B.Tech in Mechanical Engineering from Ideal Institute of Technology, Ghaziabad, India.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
