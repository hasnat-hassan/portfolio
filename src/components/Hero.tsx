'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaArrowDown } from 'react-icons/fa';
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const floatingIconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const icons = floatingIconsRef.current?.querySelectorAll('.floating-icon');
    if (!icons) return;

    icons.forEach((icon, index) => {
      const delay = index * 0.5;
      const duration = 3 + Math.random() * 2;
      const htmlIcon = icon as HTMLElement;
      
      htmlIcon.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
    });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50 z-0"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-gradient">Hasnat Hassan</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground/80 mb-6">
              Frontend Web Developer
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto lg:mx-0">
              I build modern, responsive websites with React, Next.js, and Tailwind CSS.
              Passionate about creating seamless user experiences and pixel-perfect designs.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Link 
                href="#contact" 
                className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Get in Touch
              </Link>
              <Link 
                href="#projects" 
                className="bg-card hover:bg-card/70 text-foreground font-medium py-3 px-6 rounded-lg transition-colors border border-border hover:border-primary"
              >
                View Projects
              </Link>
            </div>
            
            <div className="flex items-center gap-6 justify-center lg:justify-start mb-8">
              <Link 
                href="https://github.com/hasnat-hassan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors text-2xl"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </Link>
              <Link 
                href="https://linkedin.com/in/hasnat-hassan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors text-2xl"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </Link>
              <div className="flex items-center text-foreground/70 text-sm">
                <FaMapMarkerAlt className="mr-1" />
                <span>Haripur / Islamabad, Pakistan</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card">
                <Image 
                  src="/profile.svg" 
                  alt="Hasnat Hassan" 
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              
              <div ref={floatingIconsRef} className="absolute inset-0">
                <div className="floating-icon absolute top-0 left-1/4 bg-card p-2 rounded-full shadow-lg">
                  <SiReact className="text-xl text-blue-400" />
                </div>
                <div className="floating-icon absolute bottom-1/4 right-0 bg-card p-2 rounded-full shadow-lg">
                  <SiNextdotjs className="text-xl text-gray-200" />
                </div>
                <div className="floating-icon absolute bottom-0 left-1/3 bg-card p-2 rounded-full shadow-lg">
                  <SiTailwindcss className="text-xl text-blue-500" />
                </div>
                <div className="floating-icon absolute top-1/3 right-1/4 bg-card p-2 rounded-full shadow-lg">
                  <SiTypescript className="text-xl text-blue-600" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <span className="text-foreground/50 text-sm mb-2">Scroll Down</span>
          <FaArrowDown className="text-foreground/50" />
        </motion.div>
      </div>
    </section>
  );
}