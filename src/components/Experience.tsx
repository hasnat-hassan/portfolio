'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaCode, FaFigma, FaDatabase, FaLock, FaUsers, FaRocket } from 'react-icons/fa';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: {
    text: string;
    icon: React.ReactNode;
  }[];
}

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: ExperienceItem[] = [
    {
      title: 'Junior Web Developer',
      company: 'Revnix',
      period: 'Feb 2024 – Present',
      responsibilities: [
        { 
          text: 'Converted Figma designs to production-ready UI with React/Next.js + Tailwind',
          icon: <FaFigma />
        },
        { 
          text: 'Built dynamic pages (auth, cart, profile, shop) with Supabase backend',
          icon: <FaCode />
        },
        { 
          text: 'Integrated forms, password flows, and secure user data handling',
          icon: <FaLock />
        },
        { 
          text: 'Used Prisma & Drizzle ORM for complex DB logic',
          icon: <FaDatabase />
        },
        { 
          text: 'Contributed to real client projects — all live and deployed',
          icon: <FaUsers />
        },
        { 
          text: 'Boosted productivity with Cursor IDE, ChatGPT, Claude, and DeepSeek',
          icon: <FaRocket />
        },
      ],
    },
    {
      title: 'Intern',
      company: 'Revnix',
      period: 'Dec 2023 – Feb 2024',
      responsibilities: [
        { 
          text: 'Completed project-based learning from Udemy',
          icon: <FaCode />
        },
        { 
          text: 'Built various UI projects using React, CSS, and APIs',
          icon: <FaCode />
        },
        { 
          text: 'Gained confidence in converting Figma designs to real apps',
          icon: <FaFigma />
        },
        { 
          text: 'Learned Git workflows and modern dev environments',
          icon: <FaCode />
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              My professional journey as a developer
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:translate-x-px"></div>

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2 flex items-center justify-center z-10">
                    <FaBriefcase className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 pl-12 md:pl-0 md:pr-12 md:text-right">
                    <div className="flex flex-col items-start bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
                      <h4 className="text-lg text-primary mb-3">{experience.company}</h4>
                      <div className="flex items-center mb-4 md:justify-end">
                        <FaCalendarAlt className="text-foreground/60 mr-2" />
                        <span className="text-foreground/60">{experience.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>

            {/* Responsibilities */}
            <div className="space-y-12 mt-8">
              {experiences.map((experience, index) => (
                <motion.div 
                  key={`resp-${index}`}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Empty space for alignment */}
                  <div className="md:w-1/2"></div>

                  {/* Content */}
                  <div className="md:w-1/2 pl-12 md:pl-12 md:pr-0">
                    <div className="flex flex-col items-center bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <h4 className="text-lg font-semibold mb-4">Responsibilities</h4>
                      <ul className="space-y-3">
                        {experience.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-3 mt-1">{item.icon}</span>
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}