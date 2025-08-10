'use client';

import React from 'react';
import * as Fa from 'react-icons/fa';
import * as Si from 'react-icons/si';
import { IconType } from 'react-icons';

import { TechIcon } from '@/types/project';
import { useThemeSafe } from '@/components/ThemeProvider';

interface ProjectTechStackProps {
  techIcons: TechIcon[];
}

export default function ProjectTechStack({ techIcons }: ProjectTechStackProps) {
  const { theme } = useThemeSafe();

  return (
    <div className="flex flex-wrap gap-4">
      {techIcons.map((tech, index) => {
        const IconComponent: IconType = (Fa as Record<string, IconType>)[tech.icon] || (Si as Record<string, IconType>)[tech.icon];
        return (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-card rounded-full text-sm text-foreground/70 shadow"
            title={tech.name}
          >
            {IconComponent && <IconComponent 
              className={`text-xl ${tech.name === 'HTML5' ? 'text-[#E34F26]' :
                tech.name === 'CSS3' ? 'text-[#1572B6]' :
                tech.name === 'JavaScript' ? 'text-[#F7DF1E]' :
                tech.name === 'TypeScript' ? 'text-[#3178C6]' :
                tech.name === 'React.js' ? 'text-[#61DAFB]' :
                tech.name === 'Next.js' ? (theme === 'light' ? 'text-black' : 'text-white') :
                tech.name === 'Tailwind CSS' ? 'text-[#06B6D4]' :
                tech.name === 'SASS' ? 'text-[#CC6699]' :
                tech.name === 'Node.js' ? 'text-[#339933]' :
                tech.name === 'Express.js' ? 'text-[#000000]' :
                tech.name === 'Supabase' ? 'text-[#3ECF8E]' :
                tech.name === 'Prisma' ? (theme === 'light' ? 'text-[#2D3748]' : 'text-white') :
                tech.name === 'Prisma ORM' ? (theme === 'light' ? 'text-black' : 'text-white') :
                tech.name === 'PostgreSQL' ? 'text-[#336791]' :
                tech.name === 'Socket.io' ? 'text-[#010101]' :
                tech.name === 'MongoDB' ? 'text-[#47A248]' :
                tech.name === 'MySQL' ? 'text-[#4479A1]' :
                tech.name === 'Git' ? 'text-[#F05032]' :
                tech.name === 'GitHub' ? (theme === 'light' ? 'text-black' : 'text-white') :
                tech.name === 'Figma' ? 'text-[#F24E1E]' :
                tech.name === 'Vercel' ? (theme === 'light' ? 'text-black' : 'text-white') :
                tech.name === 'Postman' ? 'text-[#FF6C37]' :
                tech.name === 'WordPress Clone' ? 'text-[#21759B]' :
                tech.name === 'Strapi CMS' ? 'text-[#4945FF]' :
                'text-foreground/70'}`} 
              aria-hidden="true" />}
            <span>{tech.name}</span>
          </div>
        );
      })}
    </div>
  );
}