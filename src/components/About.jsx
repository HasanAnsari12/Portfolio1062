import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="mb-10"
      >
        <p className="text-[#3B82F6] font-bold tracking-wider uppercase mb-2 text-xs md:text-sm">
          ABOUT ME
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
          Passionate Developer & Problem Solver
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {[
          {
            icon: "🎓",
            title: "Education",
            desc: "B.Tech Computer Science Engineering",
          },
          {
            icon: "📱",
            title: "Mobile & Web",
            desc: "React Native & Full Stack Developer",
          },
          {
            icon: "🧠",
            title: "DSA & Problem Solving",
            desc: "200+ LeetCode Problems Solved",
          },
          {
            icon: "🚀",
            title: "Engineering",
            desc: "Scalable APIs & Real-Time Systems",
          },
        ].map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="water-glass-card water-glass-hover p-5 rounded-2xl border border-white/90 shadow-xs"
          >
            <h3 className="text-[#3B82F6] text-lg font-bold mb-2 flex items-center gap-2">
              <span>{card.icon}</span> {card.title}
            </h3>
            <p className="text-[#6B7280] text-sm font-medium leading-snug">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="water-glass-card rounded-2xl p-6 md:p-8 border border-white/90 shadow-xs"
      >
        <p className="text-[#1A1A1A] text-base md:text-lg leading-relaxed">
          Hi, I'm <span className="text-[#3B82F6] font-bold">Hasan Ansari</span>,
          a Software Developer and Founder of <span className="text-[#3B82F6] font-bold">Nexora</span> specializing in
          building production-grade mobile applications with <span className="text-[#3B82F6] font-bold">React Native</span> and robust full-stack systems using <span className="text-[#3B82F6] font-bold">NestJS, Node.js, PostgreSQL, and Prisma</span>.
        </p>

        <p className="text-[#6B7280] text-base md:text-lg leading-relaxed mt-4">
          I am driven by clean code principles, strong computer science fundamentals, and real-time backend architecture. Having solved over{" "}
          <span className="text-[#3B82F6] font-bold">200+ LeetCode problems</span>, I focus on building performant, reliable applications with secure JWT authentication and efficient data models.
        </p>

        <p className="text-[#6B7280] text-base md:text-lg leading-relaxed mt-4">
          My objective is to contribute as a Software Engineer in high-impact engineering teams where I can design intuitive mobile experiences and backend architectures.
        </p>
      </motion.div>
    </section>
  );
}

export default About;