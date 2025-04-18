import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 md:pr-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Alqamah Sayeed</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-secondary font-semibold mb-6">
              Research Scientist | Atmospheric Science Specialist
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Experienced researcher with 8+ years in AI-driven atmospheric sciences, 
              specializing in machine learning and deep learning for air quality prediction, 
              satellite data assimilation, and climate modeling.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white"
              >
                <a href="#contact">Contact Me</a>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                asChild
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
              >
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-accent/20 flex items-center justify-center overflow-hidden">
              <svg
                className="w-full h-full text-secondary/20"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M100,20 C130,20 155,45 155,75 C155,105 130,130 100,130 C70,130 45,105 45,75 C45,45 70,20 100,20 Z M100,140 C150,140 190,160 190,185 L10,185 C10,160 50,140 100,140 Z"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
