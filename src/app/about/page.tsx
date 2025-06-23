import About from '@/components/About';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export const metadata = {
  title: 'About - Hasnat Hassan',
  description: 'Learn more about Hasnat Hassan, a passionate frontend developer with expertise in React.js, Next.js, and modern web technologies.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      
      <main className="pt-20">
        <About />
      </main>
      
      <Footer />
    </div>
  );
} 