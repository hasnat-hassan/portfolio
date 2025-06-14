'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  liveLink: string;
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'WordPress-like CMS Clone',
      description: 'A custom CMS with dynamic form handling, role-based access control, and integrated shop/cart functionality.',
      image: '/projects/cms.svg',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Supabase', 'Prisma'],
      category: 'Full Stack',
      github: 'https://github.com/hasnat-hassan',
      liveLink: 'https://cms-clone.example.com',
    },
    {
      id: 2,
      title: 'E-Commerce Site',
      description: 'Feature-rich online store with product filters, cart logic, and secure authentication.',
      image: '/projects/ecommerce.svg',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Supabase', 'Stripe'],
      category: 'Full Stack',
      github: 'https://github.com/hasnat-hassan',
      liveLink: 'https://ecommerce.example.com',
    },
    {
      id: 3,
      title: 'Agency Portfolio Site',
      description: 'Modern, animated website built for a real client with smooth transitions and responsive design.',
      image: '/projects/agency.svg',
      tags: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion'],
      category: 'Frontend',
      github: 'https://github.com/hasnat-hassan',
      liveLink: 'https://agency.example.com',
    },
    {
      id: 4,
      title: 'Figma to HTML Website',
      description: 'Pixel-perfect UI implementation from Figma design, fully responsive on all devices.',
      image: '/projects/figma.svg',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      category: 'Frontend',
      github: 'https://github.com/hasnat-hassan',
      liveLink: 'https://figma-conversion.example.com',
    },
    {
      id: 5,
      title: 'Internship Projects',
      description: 'Collection of mini applications built during Udemy learning path as part of internship.',
      image: '/projects/internship.svg',
      tags: ['React', 'CSS', 'APIs', 'JavaScript'],
      category: 'Learning',
      github: 'https://github.com/hasnat-hassan',
      liveLink: 'https://internship.example.com',
    },
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Learning'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore my recent work and personal projects
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center mb-10">
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${activeCategory === category ? 'bg-primary text-white' : 'bg-card hover:bg-card/70 text-foreground/70'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="h-48 bg-gray-800 relative overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-foreground/70 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs bg-background px-2 py-1 rounded-full text-foreground/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between">
                      <Link 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-foreground/70 hover:text-primary transition-colors"
                      >
                        <FaGithub /> <span>Code</span>
                      </Link>
                      <Link 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-foreground/70 hover:text-primary transition-colors"
                      >
                        <span>Live Demo</span> <FaExternalLinkAlt />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Link 
              href="/projects"
              className="inline-block bg-card hover:bg-card/70 text-foreground font-medium py-3 px-6 rounded-lg transition-colors border border-border hover:border-primary"
            >
              View All Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}