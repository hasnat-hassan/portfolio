import TechStack from '@/components/TechStack';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export const metadata = {
  title: 'Tech Stack - Hasnat Hassan',
  description: 'Discover the technologies and tools Hasnat Hassan uses for frontend development, including React.js, Next.js, TypeScript, and more.',
};

export default function StackPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      
      <main className="pt-20">
        <TechStack />
      </main>
      
      <Footer />
    </div>
  );
} 