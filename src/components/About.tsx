"use client";

import { bio } from "../data/bio";
import { skills } from "../data/skills";
import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-20 max-w-4xl mx-auto px-4">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-3xl font-bold mb-6 text-blue-400"
    >
      About Me
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="text-gray-300 mb-4"
    >
      {bio.summary}
    </motion.p>
    <div className="mb-4">
      <span className="font-semibold text-green-400">Location:</span> {bio.location}
    </div>
    <div className="mb-4">
      <span className="font-semibold text-green-400">Education:</span>
      <ul className="list-disc ml-6">
        {bio.education.map((ed, i) => (
          <li key={i}>{ed.degree} – {ed.institution} ({ed.period})</li>
        ))}
      </ul>
    </div>
    <div className="mb-4">
      <span className="font-semibold text-green-400">Languages:</span>
      <ul className="list-disc ml-6">
        {bio.languages.map((lang, i) => (
          <li key={i}>{lang.name} ({lang.level})</li>
        ))}
      </ul>
    </div>
    <div className="mb-4">
      <span className="font-semibold text-green-400">Skills & Tools:</span>
      <div className="flex flex-wrap gap-2 mt-2">
        {Object.entries(skills).flatMap(([group, items]) =>
          items.map((item: string, i: number) => (
            <span key={group + i} className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-200">{item}</span>
          ))
        )}
      </div>
    </div>
  </section>
);

export default About;
