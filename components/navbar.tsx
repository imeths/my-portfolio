import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="#" className="flex items-center gap-2">
           <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">I</div>
           <span className="text-xl font-bold text-slate-800">Imeth<span className="text-blue-600">.</span></span>
        </Link>
        
        {/* Links */}
        <div className="hidden md:flex gap-8 font-medium text-slate-600 text-sm">
          <Link href="#home" className="hover:text-blue-600 transition">Home</Link>
          <Link href="#services" className="hover:text-blue-600 transition">Service</Link>
          <Link href="#about" className="hover:text-blue-600 transition">About</Link>
          <Link href="#case-studies" className="hover:text-blue-600 transition">Case Study</Link>
          <Link href="#contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* CTA Button */}
        <Link href="#contact" className="hidden md:block bg-blue-100 text-blue-600 px-5 py-2 rounded-full font-bold text-sm hover:bg-blue-200 transition">
          Let's Talk
        </Link>
      </div>
    </nav>
  );
}