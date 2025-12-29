
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Briefcase, Code, Mail, Home as HomeIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import VASection from './components/VASection';
import SoftwareSection from './components/SoftwareSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: <HomeIcon className="w-4 h-4" /> },
    { name: 'About', path: '/about', icon: <User className="w-4 h-4" /> },
    { name: 'VA Services', path: '/va', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Software', path: '/software', icon: <Code className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-[#0F172A]">
              Anne<span className="text-[#6D28D9]">Nana</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                    location.pathname === link.path 
                      ? 'text-[#6D28D9] bg-purple-50' 
                      : 'text-slate-500 hover:text-[#6D28D9]'
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#0F172A] hover:bg-purple-50 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-200 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-bold text-slate-600 hover:text-[#6D28D9] hover:bg-purple-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    {link.icon}
                    <span>{link.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-[#0F172A] text-slate-300 py-16 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold text-white mb-4">Anne Nana</h3>
        <p className="text-slate-400 max-w-sm mb-6">Expert Virtual Assistant and Software Engineer providing end-to-end operational and technical solutions.</p>
        <p className="text-sm">© {new Date().getFullYear()} Anne Nana. All rights reserved.</p>
      </div>
      <div className="flex flex-col items-center md:items-end justify-center space-y-4">
        <div className="flex space-x-6">
          <a 
        href="https://www.linkedin.com/in/ann-nana-93b023330" 
        className="hover:text-purple-400 transition-colors font-semibold"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
  </a>

          <a 
        href="https://github.com/nana938" 
        className="hover:text-purple-400 transition-colors font-semibold"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
  </a>

        </div>
        <div className="flex items-center space-x-2 text-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>Available for global opportunities</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/va" element={<VASection />} />
            <Route path="/software" element={<SoftwareSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}