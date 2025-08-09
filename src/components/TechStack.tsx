'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaGitAlt, FaGithub, FaFigma, FaWordpress,
  FaRobot, FaBrain, FaDatabase
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiSupabase, SiPrisma, SiMongodb, 
  SiMysql, SiVercel, SiPostman, SiStrapi, SiOpenai, SiCurseforge
} from 'react-icons/si';
import { useTheme } from './ThemeProvider';
import { TechCategory } from '@/types/tech-stack';

export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme } = useTheme();

  const techCategories: TechCategory[] = [
    {
      name: 'Languages',
      items: [
        { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
      ],
    },
    {
      name: 'Frameworks',
      items: [
        { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" /> },
        { name: 'Next.js', icon: <SiNextdotjs className={theme === 'light' ? 'text-black' : 'text-white'} /> },
      ],
    },
    {
      name: 'Styling',
      items: [
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: 'SASS', icon: <FaSass className="text-[#CC6699]" /> },
      ],
    },
    {
      name: 'Backend/DB',
      items: [
        { name: 'Supabase', icon: <SiSupabase className="text-[#3ECF8E]" /> },
        { name: 'Prisma ORM', icon: <SiPrisma className={theme === 'light' ? 'text-black' : 'text-white'} /> },
        { name: 'Drizzle ORM', icon: <FaDatabase className="text-[#C5F74F]" /> }, // Drizzle brand color
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
        { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
      ],
    },
    {
      name: 'Version Control',
      items: [
        { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: 'GitHub', icon: <FaGithub className={theme === 'light' ? 'text-black' : 'text-white'} /> },
      ],
    },
    {
      name: 'Tools',
      items: [
        { name: 'Figma', icon: <FaFigma className="text-[#F24E1E]" /> },
        { name: 'Vercel', icon: <SiVercel className={theme === 'light' ? 'text-black' : 'text-white'} /> },
        { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
      ],
    },
    {
      name: 'AI Assistants',
      items: [
        { name: 'Cursor IDE', icon: <SiCurseforge className="text-[#6B46C1]" /> }, // Using placeholder
        { name: 'ChatGPT', icon: <SiOpenai className="text-[#74AA9C]" /> },
        { name: 'Claude AI', icon: <FaBrain className="text-[#8E75FF]" /> }, // Using placeholder
        { name: 'DeepSeek', icon: <FaRobot className="text-[#0078D4]" /> }, // Using placeholder
      ],
    },
    {
      name: 'CMS',
      items: [
        { name: 'WordPress Clone', icon: <FaWordpress className="text-[#21759B]" /> },
        { name: 'Strapi CMS', icon: <SiStrapi className="text-[#4945FF]" /> },
      ],
    },
  ];

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
    <section id="stack" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="space-y-12">
            {techCategories.map((category) => (
              <motion.div key={category.name} variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-6 border-l-4 border-primary pl-3">
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {category.items.map((item) => (
                    <motion.div
                      key={item.name}
                      className="bg-background rounded-lg p-4 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <span className="text-sm font-medium">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}