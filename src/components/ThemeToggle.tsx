'use client';

import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="relative p-2 rounded-full bg-card hover:bg-card/80 transition-colors"
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="relative w-5 h-5 flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <FiSun className="absolute text-yellow-400" />
        ) : (
          <FiMoon className="absolute text-blue-500" />
        )}
      </motion.div>
    </motion.button>
  );
}