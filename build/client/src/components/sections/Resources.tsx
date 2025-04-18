import { useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import SectionTitle from "@/components/ui/section-title";
import ResourceCard from "@/components/ui/resource-card";
import { resources, ResourceCategory } from "@/data/resources";
import { Button } from "@/components/ui/button";

export default function Resources() {
  const [activeFilter, setActiveFilter] = useState<ResourceCategory | 'all'>('all');
  
  const filters: {value: ResourceCategory | 'all'; label: string}[] = [
    { value: 'all', label: 'All Resources' },
    { value: 'talk', label: 'Talks & Presentations' },
    { value: 'notebook', label: 'Notebooks' },
    { value: 'workshop', label: 'Workshops' },
    { value: 'dataset', label: 'Datasets' }
  ];
  
  const filteredResources = activeFilter === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeFilter);
  
  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle>Resources & Materials</SectionTitle>
        
        <motion.div 
          className="mt-8 mb-10 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              className={`text-sm py-1 px-4 rounded-full ${
                activeFilter === filter.value 
                  ? "bg-primary text-white" 
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>
        
        {filteredResources.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500">No resources found for the selected category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ResourceCard resource={resource} />
              </motion.div>
            ))}
          </div>
        )}
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            These resources showcase my research, presentations, and educational materials related to 
            atmospheric science, air quality modeling, and machine learning applications. 
            Feel free to explore and utilize these materials for your own research and learning.
          </p>
        </motion.div>
      </div>
    </section>
  );
}