import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import SectionTitle from "@/components/ui/section-title";
import PublicationCard from "@/components/ui/publication-card";
import ProductCard from "@/components/ui/product-card";
import { publications } from "@/data/publications";
import { products } from "@/data/products";

export default function Publications() {
  return (
    <section id="publications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle>Publications & Products</SectionTitle>

        {/* Publications */}
        <div className="mb-12 mt-12">
          <h3 className="text-2xl font-semibold mb-8 text-secondary">Selected Publications</h3>
          <div className="grid grid-cols-1 gap-6">
            {publications.map((pub, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
          
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a 
              href="#"
              className="text-secondary hover:text-blue-700 inline-flex items-center"
            >
              <span>View All Publications</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </motion.div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-secondary">Research Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
        </div>
      </div>
    </section>
  );
}
