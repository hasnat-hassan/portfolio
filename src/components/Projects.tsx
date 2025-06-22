'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projectsData';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = ['All', 'Frontend', 'Dashboard'];
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

  const gridVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      scale: 0.9,
      transition: {
        duration: 0.2
      }
    }
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
                  className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                    activeCategory === category 
                      ? 'bg-primary text-white shadow-lg transform scale-105' 
                      : 'bg-card hover:bg-card/70 text-foreground/70 hover:scale-105'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeCategory}
                variants={gridVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 absolute inset-0"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    layout
                  >
                    <ProjectCard project={project} itemVariants={{}} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          
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