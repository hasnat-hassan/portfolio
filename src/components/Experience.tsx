"use client";

import { experience } from "../data/experience";
import { motion } from "framer-motion";

const Experience = () => (
  <section id="experience" className="py-20 max-w-5xl mx-auto px-4">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-3xl font-bold mb-12 text-blue-400"
    >
      Experience
    </motion.h2>
    <div className="relative before:absolute before:left-6 before:h-full before:w-0.5 before:bg-gray-800 before:content-[''] ms-6">
      {experience.map((exp, i) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 + i * 0.1 }}
          className="relative pl-8 pb-12 group"
        >
          <div className="absolute left-0 -translate-x-[11px] w-5 h-5 bg-blue-500 rounded-full group-hover:scale-125 transition" />
          <div className="bg-gray-900 p-5 rounded-lg shadow-lg relative">
            <h3 className="text-xl font-bold text-blue-400 mb-1">{exp.company}</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
              <span className="text-gray-300">{exp.role}</span>
              <span className="text-gray-400">{exp.period}</span>
            </div>
            <ul className="list-disc ml-5 text-gray-400 space-y-1">
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
