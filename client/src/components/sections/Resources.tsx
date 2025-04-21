import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Filter, ChevronDown } from "lucide-react";
import SectionTitle from "@/components/ui/section-title";
import ResourceCard from "@/components/ui/resource-card";
import { resources, ResourceCategory } from "@/data/resources";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

// Number of items to show per page (desktop)
const ITEMS_PER_PAGE = 6;
// Initial number of items to show on mobile before infinite scroll
const INITIAL_MOBILE_ITEMS = 3;
// Number of items to load each time for infinite scroll
const MOBILE_LOAD_INCREMENT = 3;

export default function Resources() {
  const isMobile = useIsMobile();
  const [activeFilter, setActiveFilter] = useState<ResourceCategory | 'all'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleItemsCount, setVisibleItemsCount] = useState(INITIAL_MOBILE_ITEMS);
  const [isLoading, setIsLoading] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  
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
  
  // Reset pagination state when filter changes
  useEffect(() => {
    setCurrentPage(1);
    if (isMobile) {
      setVisibleItemsCount(INITIAL_MOBILE_ITEMS);
    }
  }, [activeFilter, isMobile]);
  
  // For desktop: paginated resources
  const totalPages = Math.ceil(filteredResources.length / ITEMS_PER_PAGE);
  const paginatedResources = isMobile 
    ? filteredResources.slice(0, visibleItemsCount)
    : filteredResources.slice(
        (currentPage - 1) * ITEMS_PER_PAGE, 
        currentPage * ITEMS_PER_PAGE
      );
      
  // Intersection observer for infinite scroll on mobile
  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting && !isLoading && isMobile) {
      setIsLoading(true);
      // Simulate loading delay
      setTimeout(() => {
        setVisibleItemsCount(prev => 
          Math.min(prev + MOBILE_LOAD_INCREMENT, filteredResources.length)
        );
        setIsLoading(false);
      }, 500);
    }
  }, [isLoading, isMobile, filteredResources.length]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 0.1
    });
    
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
    
    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [handleObserver]);
  
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
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {paginatedResources.map((resource, index) => (
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
            
            {/* Load more indicator for mobile */}
            {isMobile && visibleItemsCount < filteredResources.length && (
              <div 
                ref={loadMoreRef} 
                className="text-center py-8 flex flex-col items-center"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
                ) : (
                  <ChevronDown className="h-6 w-6 text-primary animate-bounce" />
                )}
                <span className="text-sm text-gray-500 mt-2">
                  Scroll for more resources
                </span>
              </div>
            )}
            
            {/* Pagination for desktop */}
            {!isMobile && totalPages > 1 && (
              <div className="mt-8">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) setCurrentPage(currentPage - 1);
                        }}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(i + 1);
                          }}
                          isActive={currentPage === i + 1}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                        }}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
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