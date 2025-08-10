import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ClientWrapper from '@/components/ClientWrapper';

// Lazy load non-critical components
const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>,
});

const TechStack = dynamic(() => import('@/components/TechStack'), {
  loading: () => <div className="min-h-[60vh] flex items-center justify-center">Loading...</div>,
});

const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>,
});

const Experience = dynamic(() => import('@/components/Experience'), {
  loading: () => <div className="min-h-[60vh] flex items-center justify-center">Loading...</div>,
});

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="min-h-[60vh] flex items-center justify-center">Loading...</div>,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-20 flex items-center justify-center">Loading...</div>,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ClientWrapper />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
