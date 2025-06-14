"use client";

import { bio } from "../data/bio";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="flex flex-col items-center justify-center min-h-[80vh] text-center" id="home">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-6xl font-bold mb-4 text-blue-400"
    >
      {bio.name}
    </motion.h1>
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-xl md:text-2xl font-semibold mb-2 text-green-400"
    >
      {bio.role}
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="max-w-xl text-gray-300 mb-6"
    >
      {bio.summary}
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4 }}
      className="flex gap-4 justify-center"
    >
      <span className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-200">{bio.location}</span>
    </motion.div>
  </section>
);

export default Hero;
