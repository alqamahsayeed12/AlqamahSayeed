import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

// Custom hook for hash-based location
function useHashLocation() {
  const [hash, setHash] = useState(window.location.hash.replace('#', '') || '/');
  
  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash.replace('#', '') || '/');
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  return hash;
}

// Custom link component for hash navigation
interface HashLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function HashLink({ href, children, className = '', onClick = () => {} }: HashLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = href;
    onClick();
  };
  
  return (
    <a href={`#${href}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

const navLinks = [
  { href: "/hero", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/publications", label: "Publications" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useHashLocation();

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <HashLink href="/hero" className="flex items-center text-2xl font-bold">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-blue-400 text-white flex items-center justify-center mr-2 shadow-md border-2 border-white">
            <span className="text-lg font-bold">AS</span>
          </div>
        </HashLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <HashLink 
              key={link.href}
              href={link.href}
              className={`relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-[width] after:duration-300 hover:after:w-full ${
                location === link.href 
                  ? "text-primary after:w-full font-medium" 
                  : "text-gray-700 hover:text-primary transition-colors"
              }`}
            >
              {link.label}
            </HashLink>
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
              <HashLink 
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
              </HashLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
