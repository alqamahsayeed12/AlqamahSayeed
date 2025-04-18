import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "@/components/ui/section-title";
import PublicationCard from "@/components/ui/publication-card";
import ProductCard from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { publications } from "@/data/publications";
import { products } from "@/data/products";

export default function Publications() {
  const [publicationPage, setPublicationPage] = useState(1);
  const [productPage, setProductPage] = useState(1);
  
  const publicationsPerPage = 3;
  const productsPerPage = 3;
  
  // Calculate total pages
  const totalPublicationPages = Math.ceil(publications.length / publicationsPerPage);
  const totalProductPages = Math.ceil(products.length / productsPerPage);
  
  // Get current items
  const currentPublications = publications.slice(
    (publicationPage - 1) * publicationsPerPage,
    publicationPage * publicationsPerPage
  );
  
  const currentProducts = products.slice(
    (productPage - 1) * productsPerPage,
    productPage * productsPerPage
  );
  
  // Page navigation functions
  const goToNextPublicationPage = () => {
    setPublicationPage((prev) => Math.min(prev + 1, totalPublicationPages));
  };
  
  const goToPrevPublicationPage = () => {
    setPublicationPage((prev) => Math.max(prev - 1, 1));
  };
  
  const goToNextProductPage = () => {
    setProductPage((prev) => Math.min(prev + 1, totalProductPages));
  };
  
  const goToPrevProductPage = () => {
    setProductPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <section id="publications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle>Publications & Products</SectionTitle>

        {/* Publications */}
        <div className="mb-12 mt-12">
          <h3 className="text-2xl font-semibold mb-8 text-primary">Selected Publications</h3>
          <div className="grid grid-cols-1 gap-6">
            {currentPublications.map((pub, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
          
          {/* Publications Pagination */}
          <div className="flex justify-between items-center mt-8">
            <div className="text-sm text-gray-600">
              Page {publicationPage} of {totalPublicationPages}
            </div>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={goToPrevPublicationPage}
                disabled={publicationPage === 1}
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={goToNextPublicationPage}
                disabled={publicationPage === totalPublicationPages}
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-primary">Research Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard
                  title={product.title}
                  description={product.description}
                  iconName={product.iconName}
                  url={product.url}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Products Pagination */}
          {totalProductPages > 1 && (
            <div className="flex justify-between items-center mt-8">
              <div className="text-sm text-gray-600">
                Page {productPage} of {totalProductPages}
              </div>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={goToPrevProductPage}
                  disabled={productPage === 1}
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={goToNextProductPage}
                  disabled={productPage === totalProductPages}
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
