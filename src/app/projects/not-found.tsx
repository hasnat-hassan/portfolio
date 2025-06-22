import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-8">Project Not Found</h2>
      <p className="text-lg text-foreground/70 mb-8">
        Could not find the requested project.
      </p>
      <Link href="/" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-lg">
        Return Home
      </Link>
    </div>
  );
}