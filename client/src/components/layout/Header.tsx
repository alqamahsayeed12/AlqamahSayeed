import { useState } from "react";
import { Menu, X, Cloud, Wind } from "lucide-react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { href: "/hero", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/publications", label: "Publications" },
  { href: "/research", label: "Research" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/hero" className="flex items-center text-2xl font-bold">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-blue-400 text-white flex items-center justify-center mr-2 shadow-md border-2 border-white">
            <span className="text-lg font-bold">AS</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-[width] after:duration-300 hover:after:w-full ${
                location === link.href 
                  ? "text-primary after:w-full font-medium" 
                  : "text-gray-700 hover:text-primary transition-colors"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-primary focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute w-full">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={`${
                  location === link.href 
                    ? "text-primary font-medium" 
                    : "text-gray-700 hover:text-primary transition-colors"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
