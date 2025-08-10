'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isLoaded: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Safe version that provides fallback values during SSR/hydration
export function useThemeSafe() {
  const context = useContext(ThemeContext);
  
  // Provide safe defaults during SSR or when context is not ready
  if (context === undefined || !context.isLoaded) {
    return {
      theme: 'dark' as Theme,
      toggleTheme: () => {},
      isLoaded: false,
    };
  }
  
  return context;
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Get theme from localStorage or use default
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    setIsLoaded(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Always provide the context - the inline script in layout.tsx handles FOUC prevention
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isLoaded }}>
      {children}
    </ThemeContext.Provider>
  );
}