'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaCode, FaFigma, FaDatabase, FaLock, FaUsers, FaRocket } from 'react-icons/fa';

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
      title: 'Intern',
      company: 'Revnix',
      period: 'Feb 2024 - july 2024',
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
            {/* Timeline vertical line (desktop only) */}
            <div className="hidden md:block absolute left-6 top-0 bottom-0 w-1 bg-border rounded-full"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex md:items-center"
                >
                  {/* Timeline dot/icon (desktop only) */}
                  <div className="hidden md:flex flex-col items-center z-10">
                    <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shadow-lg border-4 border-background">
                      <FaRocket className="text-black dark:text-white text-xs" />
                    </span>
                    {/* Connector line below dot except for last item */}
                    {index < experiences.length - 1 && (
                      <span className="flex-1 w-1 bg-border"></span>
                    )}
                  </div>

                  {/* Card */}
                  <div className="ml-0 md:ml-12 flex-1">
                    <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold">{experience.title}</h3>
                          <h4 className="text-lg text-primary">{experience.company}</h4>
                        </div>
                        <div className="flex items-center text-foreground/60 mt-2 md:mt-0">
                          <FaCalendarAlt className="mr-2" />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold mb-2 mt-4">Responsibilities</h4>
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