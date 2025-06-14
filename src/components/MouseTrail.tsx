'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Point {
  x: number;
  y: number;
  timestamp: number;
}

export default function MouseTrail() {
  const [points, setPoints] = useState<Point[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Number of trail points to render
  const numPoints = 20;
  // How long points stay visible (in milliseconds)
  const trailDuration = 500;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      };
      
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      setPoints((prevPoints) => {
        // Add new point
        const updatedPoints = [...prevPoints, newPoint];
        
        // Remove old points
        const currentTime = Date.now();
        const filteredPoints = updatedPoints.filter(
          (point) => currentTime - point.timestamp < trailDuration
        );
        
        // Limit number of points
        return filteredPoints.slice(-numPoints);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Hide on mobile devices
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9997] overflow-hidden">
      {/* Main cursor position */}
      {points.map((point, i) => {
        // Calculate size and opacity based on position in the trail
        // Increased base size from 3 to 5, and max size from 8 to 12
        const size = Math.max(5, 12 * (1 - i / numPoints));
        // Increased minimum opacity from 0.1 to 0.3
        const opacity = Math.max(0.3, 1 - i / numPoints);
        
        return (
          <motion.div
            key={`${point.timestamp}-${i}`}
            // Changed from bg-primary to bg-primary/90 for more contrast
            className="absolute rounded-full bg-primary/90 shadow-sm shadow-primary/50"
            style={{
              width: size,
              height: size,
              opacity,
              top: 0,
              left: 0,
              translateX: '-50%',
              translateY: '-50%',
            }}
            animate={{
              x: point.x,
              y: point.y,
            }}
            transition={{
              duration: 0.1,
              ease: 'linear',
            }}
          />
        );
      })}
    </div>
  );
}