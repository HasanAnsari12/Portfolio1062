import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend & Mobile",
    skills: ["React Native", "React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["NestJS", "Node.js", "Express.js", "REST APIs", "JWT Authentication", "Real-Time Messaging"],
  },
  {
    title: "Database & ORM",
    skills: ["PostgreSQL", "Prisma ORM", "MongoDB", "MySQL", "Firebase"],
  },
  {
    title: "Problem Solving & Tools",
    skills: ["DSA (200+ LeetCode)", "Java", "C++", "Git & GitHub", "Vite", "Postman"],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="mb-10"
      >
        <p className="text-[#3B82F6] font-bold tracking-wider uppercase mb-2 text-xs md:text-sm">
          TECHNICAL SKILLS
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
          Technologies & Competencies
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="water-glass-card water-glass-hover rounded-2xl p-6 border border-white/90 shadow-xs"
          >
            <h3 className="text-xl font-bold text-[#3B82F6] mb-5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]"></span>
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-full bg-white/90 border border-[#5B8CFF]/25 text-[#1A1A1A] font-medium text-xs md:text-sm hover:border-[#3B82F6] hover:text-[#3B82F6] transition duration-200 shadow-2xs cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Highlights Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="mt-8 water-glass-card rounded-2xl p-6 border border-white/90 shadow-xs"
      >
        <h3 className="text-lg font-bold text-[#1A1A1A] mb-4">
          Core Focus Highlights
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-xl p-4 text-center shadow-2xs">
            <h4 className="text-2xl md:text-3xl font-extrabold text-[#3B82F6]">React Native</h4>
            <p className="text-[#6B7280] font-medium text-xs md:text-sm mt-1">Cross-Platform Mobile</p>
          </div>

          <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-xl p-4 text-center shadow-2xs">
            <h4 className="text-2xl md:text-3xl font-extrabold text-[#3B82F6]">NestJS & Node</h4>
            <p className="text-[#6B7280] font-medium text-xs md:text-sm mt-1">Scalable Backend</p>
          </div>

          <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-xl p-4 text-center shadow-2xs">
            <h4 className="text-2xl md:text-3xl font-extrabold text-[#3B82F6]">PostgreSQL</h4>
            <p className="text-[#6B7280] font-medium text-xs md:text-sm mt-1">Prisma & SQL</p>
          </div>

          <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-xl p-4 text-center shadow-2xs">
            <h4 className="text-2xl md:text-3xl font-extrabold text-[#3B82F6]">200+</h4>
            <p className="text-[#6B7280] font-medium text-xs md:text-sm mt-1">LeetCode Solved</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;