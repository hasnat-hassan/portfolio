import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export const metadata = {
  title: 'Contact - Hasnat Hassan',
  description: 'Get in touch with Hasnat Hassan for frontend development opportunities, collaborations, or project discussions.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      
      <main className="pt-20">
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
} 