import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { SiGooglescholar } from "react-icons/si";
import SectionTitle from "@/components/ui/section-title";
import PublicationCard from "@/components/ui/publication-card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronDown } from "lucide-react";
import { publications } from "@/data/publications";
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
const ITEMS_PER_PAGE = 3;
// Initial number of items to show on mobile before infinite scroll
const INITIAL_MOBILE_ITEMS = 2;
// Number of items to load each time for infinite scroll
const MOBILE_LOAD_INCREMENT = 2;

export default function Publications() {
  const isMobile = useIsMobile();
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleItemsCount, setVisibleItemsCount] = useState(INITIAL_MOBILE_ITEMS);
  const [isLoading, setIsLoading] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isMobile) {
      setVisibleItemsCount(INITIAL_MOBILE_ITEMS);
    } else {
      setCurrentPage(1);
    }
  }, [isMobile]);
  
  // For desktop: paginated publications
  const totalPages = Math.ceil(publications.length / ITEMS_PER_PAGE);
  const paginatedPublications = isMobile 
    ? publications.slice(0, visibleItemsCount)
    : publications.slice(
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
          Math.min(prev + MOBILE_LOAD_INCREMENT, publications.length)
        );
        setIsLoading(false);
      }, 500);
    }
  }, [isLoading, isMobile, publications.length]);
  
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
    <section id="publications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle>Publications</SectionTitle>

        {/* Publications */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-8 text-primary">Selected Publications</h3>
          <div className="grid grid-cols-1 gap-6">
            {paginatedPublications.map((pub, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <PublicationCard
                  title={pub.title}
                  authors={pub.authors}
                  journal={pub.journal}
                  url={pub.url}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Load more indicator for mobile */}
          {isMobile && visibleItemsCount < publications.length && (
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
                Scroll for more publications
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
          
          {/* View All Publications Button */}
          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium"
              onClick={() => window.open("https://scholar.google.com/citations?user=9RGwHf4AAAAJ", "_blank")}
            >
              <SiGooglescholar className="mr-2 h-5 w-5" />
              View All Publications
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
