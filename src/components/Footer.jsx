function Footer() {
  return (
    <footer className="border-t border-white/80 mt-16 bg-white/40 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        <h3 className="text-2xl font-extrabold text-[#1A1A1A] mb-2 tracking-tight">
          Hasan <span className="bg-gradient-to-r from-[#3B82F6] to-[#5B8CFF] bg-clip-text text-transparent">Ansari</span>
        </h3>

        <p className="text-[#6B7280] text-sm md:text-base font-medium mb-1">
          React Native Developer • Full Stack Software Developer
        </p>

        <p className="text-[#3B82F6] font-semibold text-xs md:text-sm mb-5 flex items-center justify-center gap-1">
          Founder of Nexora 🚀
        </p>

        <div className="flex justify-center flex-wrap gap-2 mb-6">
          {["React Native", "NestJS", "PostgreSQL", "Prisma", "JWT Auth", "200+ LeetCode"].map((tag) => (
            <span
              key={tag}
              className="px-3.5 py-1 rounded-full bg-white/80 border border-[#5B8CFF]/25 text-[#3B82F6] text-xs font-medium shadow-2xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="border-t border-[#5B8CFF]/15 pt-5">
          <p className="text-[#6B7280] text-xs md:text-sm font-medium">
            © {new Date().getFullYear()} Hasan Ansari. Built for Performance & Scalability.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;