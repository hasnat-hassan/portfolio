import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';

import { projects } from '@/data/projectsData';
import ProjectTechStack from './ProjectTechStack';

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="text-primary hover:underline mb-8 inline-block">
          &larr; Back to Projects
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">{project.title}</h1>
        <p className="text-xl text-foreground/70 mb-8 text-center">{project.tagline}</p>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Description</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">{project.description}</p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground/80">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
          <ProjectTechStack techIcons={project.techIcons} />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">UI Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={screenshot}
                  alt={`${project.title} Screenshot ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}