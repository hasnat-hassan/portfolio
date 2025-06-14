"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm pointer-events-none z-50"
      animate={{
        x: mousePosition.x - 12, // Center the circle (half of width)
        y: mousePosition.y - 12, // Center the circle (half of height)
      }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 150,
        mass: 0.1
      }}
    />
  );
};

export default MouseTrail;
