import { HashRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

// Import page components
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Experience from "./components/pages/Experience";
import Publications from "./components/pages/Publications";
import Research from "./components/pages/Research";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <Router>
      <Toaster />
      <div className="min-h-screen flex flex-col">
        <header className="border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex justify-between items-center">
              <div className="font-bold text-xl">
                <Link to="/">Alqamah Sayeed</Link>
              </div>
              <ul className="hidden md:flex space-x-6">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/experience" className="hover:text-primary transition-colors">Experience</Link></li>
                <li><Link to="/publications" className="hover:text-primary transition-colors">Publications</Link></li>
                <li><Link to="/research" className="hover:text-primary transition-colors">Research</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
              <div className="md:hidden">
                <button className="p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="bg-muted py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between mb-8">
              <div className="mb-6 md:mb-0">
                <h3 className="font-bold text-lg mb-2">Alqamah Sayeed</h3>
                <p className="text-muted-foreground">Atmospheric Science</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Connect</h3>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/alqamah-sayeed-ph-d-3aa249172/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="https://github.com/Alqamah-Sayeed" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <FaGithub size={20} />
                  </a>
                  <a href="https://twitter.com/AlqamahSayeed89" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Alqamah Sayeed. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;