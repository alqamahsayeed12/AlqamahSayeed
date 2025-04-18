import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import profileImage from "../../assets/alqamah_profile.png";

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
            <h2 className="text-xl md:text-2xl text-primary font-semibold mb-6">
              Research Scientist | Atmospheric Science Specialist
            </h2>
            <p className="text-lg text-gray-800 mb-8">
              Experienced researcher with 8+ years in AI-driven atmospheric sciences, 
              specializing in machine learning and deep learning for air quality prediction, 
              satellite data assimilation, and climate modeling.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-medium"
              >
                <a href="#contact">Contact Me</a>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                asChild
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium"
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
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary shadow-lg overflow-hidden">
              <img 
                src={profileImage} 
                alt="Alqamah Sayeed" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
