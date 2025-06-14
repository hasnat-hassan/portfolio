"use client";

import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";

const filters = ["All", "React.js", "Next.js", "Tailwind CSS", "CMS", "E-commerce"];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(active));

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl font-bold mb-8 text-blue-400"
      >
        Projects
      </motion.h2>
      <div className="flex gap-3 mb-8 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-1 rounded-full border transition text-sm font-medium ${active === f ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-200 border-gray-700 hover:bg-blue-600 hover:text-white"}`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {filtered.map((proj, i) => (
          <motion.div
            key={proj.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 + i * 0.1 }}
            className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-[1.03] hover:shadow-xl transition-transform group"
          >
            <Image 
              src={proj.image} 
              alt={proj.name} 
              width={600}
              height={300}
              className="w-full h-48 object-cover group-hover:opacity-80 transition" 
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-blue-400 mb-2">{proj.name}</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {proj.tech.map((t) => (
                  <span key={t} className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-200">{t}</span>
                ))}
              </div>
              <div className="mb-2 text-gray-300 text-sm">
                <strong>Role:</strong> {proj.role}
              </div>
              <ul className="list-disc ml-5 text-gray-400 text-sm mb-3">
                {proj.responsibilities.map((r: string, idx: number) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
              <div className="flex gap-4 mt-2">
                <a href={proj.live} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 flex items-center gap-1"><FaExternalLinkAlt /> Live</a>
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center gap-1"><FaGithub /> GitHub</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
