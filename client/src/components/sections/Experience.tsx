import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/section-title";
import TimelineItem from "@/components/ui/timeline-item";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-6">
        <SectionTitle>Professional Experience</SectionTitle>
        
        <div className="relative pl-8 md:pl-12 space-y-12 mt-12">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"></div>
          
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TimelineItem
                title={job.title}
                company={job.company}
                period={job.period}
                responsibilities={job.responsibilities}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
