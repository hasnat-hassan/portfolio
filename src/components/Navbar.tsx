'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Stack', path: '/stack' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-card/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gradient">Hasnat Hassan</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`relative font-medium hover:text-primary transition-colors ${pathname === link.path ? 'text-primary' : 'text-foreground'}`}
              >
                {link.name}
                {pathname === link.path && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="navbar-indicator"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative font-medium hover:text-primary transition-colors text-foreground"
              aria-label="Open Resume PDF in new tab"
            >
              Resume
            </a>
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button 
            className="flex flex-col space-y-1.5 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span 
              className="w-6 h-0.5 bg-foreground block" 
              animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }}
            />
            <motion.span 
              className="w-6 h-0.5 bg-foreground block" 
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            />
            <motion.span 
              className="w-6 h-0.5 bg-foreground block" 
              animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.nav 
          className="md:hidden bg-card/95 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`text-lg font-medium hover:text-primary transition-colors ${pathname === link.path ? 'text-primary' : 'text-foreground'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {/* Resume Button for Mobile */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:text-primary transition-colors text-foreground px-4 py-2 rounded bg-primary/90 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Open Resume PDF in new tab"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}