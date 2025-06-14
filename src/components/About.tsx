'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCode, FaLanguage } from 'react-icons/fa';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Hasnat is a passionate frontend developer with hands-on experience building modern websites using React.js, Next.js, Tailwind CSS, and TypeScript. Skilled in Figma-to-code conversion, API integrations, and backend connectivity with Supabase, Prisma, and Drizzle ORM.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              He also leverages AI tools like Cursor IDE, ChatGPT, Claude AI, and DeepSeek to accelerate development and debugging.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Education */}
            <motion.div 
              variants={itemVariants}
              className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FaGraduationCap className="text-primary text-2xl" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex flex-col">
                  <span className="font-medium">BS Software Engineering</span>
                  <span className="text-foreground/70 text-sm">Virtual University (In Progress)</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium">Diploma of Associate Engineering (ICT)</span>
                  <span className="text-foreground/70 text-sm">CTTI</span>
                </li>
              </ul>
            </motion.div>

            {/* Skills */}
            <motion.div 
              variants={itemVariants}
              className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                  <FaCode className="text-secondary text-2xl" />
                </div>
                <h3 className="text-xl font-semibold">Core Skills</h3>
              </div>
              <ul className="space-y-2">
                <li className="text-foreground/80">Frontend Development</li>
                <li className="text-foreground/80">Responsive Web Design</li>
                <li className="text-foreground/80">UI/UX Implementation</li>
                <li className="text-foreground/80">API Integration</li>
                <li className="text-foreground/80">Database Management</li>
              </ul>
            </motion.div>

            {/* Languages */}
            <motion.div 
              variants={itemVariants}
              className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                  <FaLanguage className="text-accent text-2xl" />
                </div>
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span>Urdu</span>
                  <span className="text-foreground/70">Native</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>English</span>
                  <span className="text-foreground/70">B2 Level</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}