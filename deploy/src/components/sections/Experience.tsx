import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";
import SectionTitle from "./components/ui/section-title";
import { experience } from "./data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <SectionTitle>Professional Journey</SectionTitle>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            My career path has taken me from academic research to leadership roles at NASA, 
            where I've built expertise in combining atmospheric science with cutting-edge AI solutions.
          </p>
        </div>
        
        <div className="grid gap-8 max-w-5xl mx-auto">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-4 mb-4 items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary">{job.title}</h3>
                    <div className="flex items-center text-gray-700 mt-1">
                      <Briefcase className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mt-1">
                      <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{job.period}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-xl mt-4">
                  <h4 className="text-md font-medium text-gray-800 mb-3">Key Contributions</h4>
                  <div className="space-y-3 text-gray-700">
                    {job.responsibilities.map((item, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + (idx * 0.05) }}
                        className="flex"
                      >
                        <div className="min-w-[8px] h-[8px] rounded-full bg-primary mt-2 mr-3" />
                        <p>{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
