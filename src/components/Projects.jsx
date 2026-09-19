import { motion } from "framer-motion";

const projects = [
  {
    title: "Rubee AI – Full Stack AI Chat Application",
    subtitle: "Real-Time Mobile & Backend Platform",
    bullets: [
      "Built a real-time AI chat application with session-based architecture",
      "Used React Native, NestJS, PostgreSQL, Prisma, Gemini API",
      "Implemented JWT authentication and secure API integration",
      "Designed scalable backend and real-time messaging system",
    ],
    tech: ["React Native", "NestJS", "PostgreSQL", "Prisma", "Gemini API", "JWT Auth", "API Integration"],
    github: "https://github.com/HasanAnsari12",
    demo: "#",
  },
  {
    title: "AI-Powered Social Media Trend Tracker",
    subtitle: "AI Content Analysis System",
    bullets: [
      "Built a system to track and analyze trending content using AI",
      "Integrated APIs for real-time data fetching",
      "Provided insights and recommendations based on trends",
      "Focus on performance and data handling",
    ],
    tech: ["React Native", "Node.js", "Gemini API", "REST APIs", "Data Handling", "Performance"],
    github: "https://github.com/HasanAnsari12",
    demo: "#",
  },
  {
    title: "Travel & Tourism Application",
    subtitle: "Cross-Platform Mobile Booking App",
    bullets: [
      "Developed a mobile app for exploring destinations and booking",
      "Created responsive UI for destinations and packages",
      "Focused on user experience and smooth navigation",
    ],
    tech: ["React Native", "Mobile UI", "UX Design", "API Integration", "State Management"],
    github: "https://github.com/HasanAnsari12",
    demo: "#",
  },
  {
    title: "AI Calculator (Advanced Calculator)",
    subtitle: "Smart Math Engine & Logic App",
    bullets: [
      "Built an AI-powered calculator with smart expression handling",
      "Supports advanced calculations and dynamic input processing",
      "Implemented clean UI with real-time result updates",
      "Focus: logic building, performance, and user interaction",
    ],
    tech: ["React Native", "JavaScript", "Dynamic Input", "Logic Building", "Performance"],
    github: "https://github.com/HasanAnsari12",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="mb-10"
      >
        <p className="text-[#3B82F6] font-bold tracking-wider uppercase mb-2 text-xs md:text-sm">
          FEATURED PROJECTS
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
          Production & Engineering Highlights
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="water-glass-card water-glass-hover rounded-2xl p-6 border border-white/90 shadow-xs flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex justify-between items-start mb-3 gap-2">
                <div>
                  <span className="text-xs font-semibold text-[#3B82F6] uppercase tracking-wider block mb-1">
                    {project.subtitle}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A]">
                    {project.title}
                  </h3>
                </div>
                <span className="w-8 h-8 rounded-xl bg-[#5B8CFF]/10 flex shrink-0 items-center justify-center text-[#3B82F6] text-xs font-bold border border-[#5B8CFF]/20">
                  0{index + 1}
                </span>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 mb-6 text-[#6B7280] text-sm leading-relaxed">
                {project.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="text-[#3B82F6] font-bold mt-0.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-[#5B8CFF]/10 border border-[#5B8CFF]/25 text-[#3B82F6]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-4 border-t border-white/70">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-water-primary px-4 py-2 text-xs md:text-sm font-semibold rounded-xl"
              >
                GitHub Code
              </a>

              <a
                href={project.demo}
                className="btn-water-secondary px-4 py-2 text-xs md:text-sm font-semibold rounded-xl"
              >
                Project Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;