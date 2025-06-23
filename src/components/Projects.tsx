'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projectsData';
import { useTheme } from './ThemeProvider';

export default function Projects() {
  useTheme(); // Ensures component re-renders on theme changes
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = ['All', 'Frontend', 'Dashboard', 'Fullstack'];
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
    <section id="projects" className="py-32 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground transition-colors duration-300">Projects</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-xl text-black max-w-3xl mx-auto transition-colors duration-300">
              These are personal projects currently not deployed. Source code is private due to development done across different environments.
            </p>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto transition-colors duration-300">
              Explore my recent work and personal projects showcasing modern web development
            </p>

          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center mb-16">
            <div className="flex flex-wrap gap-3 md:gap-6 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full text-base md:text-lg font-medium transition-all duration-300 border
                    ${activeCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg transform scale-105 border-primary'
                      : `bg-card text-foreground/70 hover:text-foreground hover:bg-card/80 hover:border-primary/50 border-border hover:scale-105 transition-all duration-300`
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="mb-20">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeCategory}
                variants={gridVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10"
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

          <motion.div variants={itemVariants} className="text-center">
            <Link
              href="/projects"
              className="inline-block bg-card hover:bg-card/80 text-foreground font-semibold py-4 px-8 rounded-lg transition-all duration-300 border border-border hover:border-primary hover:shadow-lg transform hover:scale-105"
            >
              View All Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}