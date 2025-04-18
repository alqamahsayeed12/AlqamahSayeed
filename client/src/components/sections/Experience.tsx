import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "@/components/ui/section-title";
import TimelineItem from "@/components/ui/timeline-item";
import { Button } from "@/components/ui/button";
import { experience } from "@/data/experience";

export default function Experience() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  
  // Calculate total pages
  const totalPages = Math.ceil(experience.length / itemsPerPage);
  
  // Get current page items
  const currentExperience = experience.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  // Navigation functions
  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };
  
  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-6">
        <SectionTitle>Professional Experience</SectionTitle>
        
        <div className="relative pl-8 md:pl-12 space-y-12 mt-12">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"></div>
          
          {currentExperience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
        
        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-12">
          <div className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
