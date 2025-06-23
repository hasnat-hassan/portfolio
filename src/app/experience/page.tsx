import Experience from '@/components/Experience';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export const metadata = {
  title: 'Experience - Hasnat Hassan',
  description: 'Explore Hasnat Hassan\'s professional experience as a frontend developer, including internships and current role at Revnix.',
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      
      <main className="pt-20">
        <Experience />
      </main>
      
      <Footer />
    </div>
  );
} 