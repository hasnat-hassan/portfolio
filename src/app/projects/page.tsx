import Projects from '@/components/Projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      <main>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}