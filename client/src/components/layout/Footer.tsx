import { Link } from "wouter";
import { Linkedin, Github, Twitter } from "lucide-react";
import { SiGooglescholar } from "react-icons/si";

const quickLinks = [
  { href: "/hero", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/publications", label: "Publications" },
  { href: "/research", label: "Research" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { 
    href: "https://linkedin.com/in/alqamah-sayeed-ph-d-3aa249172", 
    label: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />
  },
  { 
    href: "https://github.com/Alqamah-Sayeed", 
    label: "GitHub",
    icon: <Github className="h-5 w-5" />
  },
  { 
    href: "https://twitter.com/AlqamahSayeed89", 
    label: "Twitter",
    icon: <Twitter className="h-5 w-5" />
  },
  { 
    href: "https://scholar.google.com/citations?user=9RGwHf4AAAAJ", 
    label: "Google Scholar",
    icon: <SiGooglescholar className="h-5 w-5" />
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">
              Alqamah Sayeed
            </h3>
            <p className="mt-2 text-gray-300">
              Research Scientist | Atmospheric Science
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0">
            <div>
              <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="hover:text-gray-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3">Follow Me</h4>
              <div className="flex space-x-3">
                {socialLinks.map((link) => (
                  <a 
                    key={link.href}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="hover:text-gray-300 transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} Alqamah Sayeed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
