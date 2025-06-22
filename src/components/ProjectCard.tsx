import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as Fa from 'react-icons/fa';
import * as Si from 'react-icons/si';
import { IconType } from 'react-icons';

import { Project, TechIcon } from '@/types/project';
import { useTheme } from './ThemeProvider';

interface ProjectCardProps {
  project: Project;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemVariants: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, itemVariants }) => {
  const { theme } = useTheme();
  return (
    <motion.div
      variants={itemVariants}
      className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Link href={`/projects/${project.slug}`} passHref>
        <div className="h-48 bg-gray-800 relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          
          {/* Main Feature */}
          <div className="mb-4">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-foreground/70 text-sm">{project.features[0]}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.techIcons.map((tech: TechIcon, index) => {
              const IconComponent: IconType = (Fa as Record<string, IconType>)[tech.icon] ||
                (Si as Record<string, IconType>)[tech.icon];
              return (
                <div
                  key={index}
                  className="flex items-center gap-1"
                  title={tech.name}
                >
                  {IconComponent && <IconComponent 
                    className={`text-lg ${tech.name === 'HTML5' ? 'text-[#E34F26]' :
                      tech.name === 'CSS3' ? 'text-[#1572B6]' :
                      tech.name === 'JavaScript' ? 'text-[#F7DF1E]' :
                      tech.name === 'TypeScript' ? 'text-[#3178C6]' :
                      tech.name === 'React.js' ? 'text-[#61DAFB]' :
                      tech.name === 'Next.js' ? (theme === 'light' ? 'text-black' : 'text-white') :
                      tech.name === 'Tailwind CSS' ? 'text-[#06B6D4]' :
                      tech.name === 'SASS' ? 'text-[#CC6699]' :
                      tech.name === 'Supabase' ? 'text-[#3ECF8E]' :
                      tech.name === 'Prisma ORM' ? (theme === 'light' ? 'text-black' : 'text-white') :
                      tech.name === 'MongoDB' ? 'text-[#47A248]' :
                      tech.name === 'MySQL' ? 'text-[#4479A1]' :
                      tech.name === 'Git' ? 'text-[#F05032]' :
                      tech.name === 'GitHub' ? (theme === 'light' ? 'text-black' : 'text-white') :
                      tech.name === 'Figma' ? 'text-[#F24E1E]' :
                      tech.name === 'Vercel' ? (theme === 'light' ? 'text-black' : 'text-white') :
                      tech.name === 'Postman' ? 'text-[#FF6C37]' :
                      tech.name === 'WordPress Clone' ? 'text-[#21759B]' :
                      tech.name === 'Strapi CMS' ? 'text-[#4945FF]' :
                      'text-foreground/60'}`} 
                    aria-hidden="true" />}
                </div>
              );
            })}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;