import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "about",
    "skills",
    "projects",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="water-glass-card rounded-2xl px-6 py-3.5 flex items-center justify-between border border-white/80 shadow-[0_8px_32px_rgba(91,140,255,0.12)]">

          {/* Logo with Liquid Water Gradient */}
          <a
            href="#"
            className="text-2xl font-bold tracking-tight group flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]"></span>
            <span className="bg-gradient-to-r from-[#1A1A1A] via-[#3B82F6] to-[#5B8CFF] bg-clip-text text-transparent group-hover:opacity-90 transition duration-200">
              Hasan Ansari
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="capitalize text-[#6B7280] font-medium hover:text-[#3B82F6] transition-all duration-300 text-sm tracking-wide relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#5B8CFF] after:to-[#3B82F6] hover:after:w-full after:transition-all after:duration-300"
              >
                {link}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="btn-water-primary px-6 py-2.5 text-sm rounded-xl font-semibold transition-all duration-300 shadow-[0_6px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_10px_28px_rgba(59,130,246,0.45)]"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#3B82F6] text-xl p-2 rounded-lg bg-white/50 backdrop-blur-md border border-white/80 shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 water-glass-card rounded-2xl p-6 flex flex-col gap-4 border border-white/90 shadow-[0_12px_40px_rgba(91,140,255,0.18)] animate-in fade-in slide-in-from-top-4 duration-300">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="capitalize text-[#1A1A1A] font-medium hover:text-[#3B82F6] transition py-1"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="btn-water-primary text-center py-2.5 rounded-xl font-semibold shadow-md mt-2"
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;