const projects = [
  {
    title: "Nexora",
    description:
      "A modern technology platform focused on web development, mobile applications, and innovative digital solutions.",
    tech: ["React", "React Native", "Node.js", "MongoDB"],
  },
  {
    title: "WhatsApp Clone",
    description:
      "A real-time chat application with modern UI and messaging features.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "E-Commerce Website",
    description:
      "Full-stack e-commerce platform with product management and authentication.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    description:
      "Modern personal portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS"],
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <p className="text-cyan-400 font-semibold mb-2">MY WORK</p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Featured Projects
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-500 hover:-translate-y-2 transition duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              {project.title}
            </h3>

            <p className="text-slate-400 mb-5 leading-7">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 border border-cyan-500 text-cyan-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-xl font-medium">
                Live Demo
              </button>

              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-4 py-2 rounded-xl font-medium">
                GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;