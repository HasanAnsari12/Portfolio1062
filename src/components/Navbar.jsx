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
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-2xl px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold text-cyan-400"
          >
            <span className="text-cyan-400">
  {"Hasan Ansari "}
</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="capitalize text-slate-300 hover:text-cyan-400 transition duration-300"
              >
                {link}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-xl font-semibold transition"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cyan-400 text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="capitalize text-slate-300 hover:text-cyan-400"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="bg-cyan-500 text-center py-2 rounded-xl"
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