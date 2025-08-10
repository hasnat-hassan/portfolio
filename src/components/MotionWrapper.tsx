'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  initial?: string;
  animate?: string;
  style?: React.CSSProperties;
  onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  ref?: React.RefObject<HTMLDivElement>;
}

export const MotionDiv = ({ children, className, variants, initial, animate, style, onMouseMove, onMouseEnter, onMouseLeave, ref }: MotionWrapperProps) => (
  <motion.div
    ref={ref}
    className={className}
    variants={variants}
    initial={initial}
    animate={animate}
    style={style}
    onMouseMove={onMouseMove}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </motion.div>
);

export const fadeInUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};
