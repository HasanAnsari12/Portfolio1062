import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-32 pb-16 flex items-center px-6 relative overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="absolute w-96 h-96 bg-[#5B8CFF]/15 blur-3xl rounded-full top-20 left-10 pointer-events-none"></div>
      <div className="absolute w-96 h-96 bg-[#7AA2FF]/15 blur-3xl rounded-full bottom-20 right-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/90 text-[#3B82F6] text-xs md:text-sm font-semibold tracking-wider uppercase mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6]"></span>
            React Native & Full Stack Developer
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-4 text-[#1A1A1A]">
            Hasan <br />
            <span className="bg-gradient-to-r from-[#3B82F6] via-[#5B8CFF] to-[#7AA2FF] bg-clip-text text-transparent">
              Ansari
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A]/80 mb-6 tracking-tight">
            Building High-Performance Mobile & Full-Stack Applications
          </h2>

          <p className="text-[#6B7280] text-base md:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
            Specializing in cross-platform mobile apps with{" "}
            <span className="text-[#3B82F6] font-semibold">React Native</span>, scalable backend APIs using{" "}
            <span className="text-[#3B82F6] font-semibold">NestJS & Node.js</span>, secure databases with{" "}
            <span className="text-[#3B82F6] font-semibold">PostgreSQL & Prisma</span>, and robust problem solving with{" "}
            <span className="text-[#3B82F6] font-semibold">200+ LeetCode</span> challenges solved.
            <br /><br />
            Founder of <span className="text-[#3B82F6] font-semibold">Nexora</span> — focused on delivering production-ready architecture, clean code, and intuitive user experiences.
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "React Native",
              "NestJS",
              "Node.js",
              "PostgreSQL",
              "Prisma",
              "JWT Auth",
              "API Integration",
              "200+ LeetCode",
            ].map((item) => (
              <span
                key={item}
                className="px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/90 text-[#3B82F6] text-xs md:text-sm font-medium shadow-xs hover:border-[#5B8CFF]/50 transition duration-200 cursor-default"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mb-8 max-w-xl">
            <div className="water-glass-card water-glass-hover p-4 text-center rounded-2xl border border-white/90 shadow-xs">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#3B82F6]">200+</h3>
              <p className="text-[#6B7280] text-xs md:text-sm font-medium mt-1">LeetCode Solved</p>
            </div>

            <div className="water-glass-card water-glass-hover p-4 text-center rounded-2xl border border-white/90 shadow-xs">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#3B82F6]">10+</h3>
              <p className="text-[#6B7280] text-xs md:text-sm font-medium mt-1">Real-World Projects</p>
            </div>

            <div className="water-glass-card water-glass-hover p-4 text-center rounded-2xl border border-white/90 shadow-xs">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#3B82F6]">Full Stack</h3>
              <p className="text-[#6B7280] text-xs md:text-sm font-medium mt-1">Mobile & Web</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#projects"
              className="btn-water-primary px-7 py-3 rounded-xl font-semibold shadow-sm text-sm md:text-base"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-water-secondary px-6 py-3 rounded-xl font-semibold text-sm md:text-base"
            >
              View Resume
            </a>

            <a
              href="/resume.pdf"
              download
              className="btn-water-secondary px-6 py-3 rounded-xl font-semibold text-sm md:text-base"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Side Avatar */}
        <div className="hidden lg:flex justify-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {/* Soft Glow Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#5B8CFF]/20 to-[#3B82F6]/20 blur-2xl rounded-full transform scale-105"></div>

            {/* Main Avatar Ring */}
            <div className="relative w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-[#5B8CFF] via-[#7AA2FF] to-[#3B82F6] p-1 shadow-md">
              <div className="w-full h-full rounded-full bg-white/90 backdrop-blur-md p-1.5 flex items-center justify-center overflow-hidden">
                <img
                  src="/hasan.jpg"
                  alt="Hasan Ansari"
                  className="w-full h-full rounded-full object-cover shadow-inner"
                />
              </div>
            </div>

            {/* Static Professional Badges */}
            <div className="absolute top-4 -left-6 water-glass-card px-4 py-2 rounded-xl border border-white/90 shadow-sm font-semibold text-[#1A1A1A] text-xs flex items-center gap-2">
              🚀 <span className="bg-gradient-to-r from-[#3B82F6] to-[#5B8CFF] bg-clip-text text-transparent font-bold">Nexora Founder</span>
            </div>

            <div className="absolute top-20 -right-8 water-glass-card px-4 py-2 rounded-xl border border-white/90 shadow-sm font-semibold text-[#1A1A1A] text-xs flex items-center gap-2">
              📱 <span className="text-[#3B82F6]">React Native</span>
            </div>

            <div className="absolute bottom-16 -left-4 water-glass-card px-4 py-2 rounded-xl border border-white/90 shadow-sm font-semibold text-[#1A1A1A] text-xs flex items-center gap-2">
              🧠 <span className="text-[#3B82F6]">DSA & Logic Building</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;