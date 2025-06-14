import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold gradient-text mb-2">Hasnat Hassan</h3>
            <p className="text-sm text-foreground/70">Frontend Web Developer</p>
          </div>
          
          <div className="flex space-x-4">
            <Link 
              href="mailto:hasnathassan397@gmail.com" 
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </Link>
            <Link 
              href="https://linkedin.com/in/hasnat-hassan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </Link>
            <Link 
              href="https://wa.me/923079114060" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={20} />
            </Link>
            <Link 
              href="https://github.com/hasnat-hassan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-border/30 text-center text-sm text-foreground/50">
          <p>© {currentYear} Hasnat Hassan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}