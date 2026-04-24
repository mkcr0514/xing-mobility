import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Technology', path: '/technology' },
  { name: 'Platforms', path: '/platforms' },
  { name: 'Markets', path: '/markets' },
  { name: 'Company', path: '/company' },
  { name: 'Join Us', path: '/join-us' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-xing-blue flex items-center justify-center">
            <span className="text-white font-bold text-xl">X</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tighter uppercase">XING MOBILITY</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium uppercase tracking-widest hover:text-xing-blue transition-colors ${
                location.pathname === link.path ? 'text-xing-blue' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="xing-button text-xs">
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[72px] bg-xing-dark z-40 md:hidden flex flex-col p-8 gap-6"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-2xl font-display font-bold uppercase tracking-tight flex justify-between items-center"
              >
                {link.name}
                <ChevronRight className="text-xing-blue" />
              </Link>
            ))}
            <Link to="/contact" className="xing-button text-center mt-4">
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
