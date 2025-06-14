import Link from "next/link";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
    <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
      <Link href="/" className="text-xl font-bold text-blue-400 tracking-tight">Hasnat Hassan</Link>
      <ul className="flex gap-6 text-sm font-medium">
        <li><Link href="#about" className="hover:text-blue-400 transition">About</Link></li>
        <li><Link href="#projects" className="hover:text-blue-400 transition">Projects</Link></li>
        <li><Link href="#experience" className="hover:text-blue-400 transition">Experience</Link></li>
        <li><Link href="#tech" className="hover:text-blue-400 transition">Tech Stack</Link></li>
        <li><Link href="#contact" className="hover:text-blue-400 transition">Contact</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
