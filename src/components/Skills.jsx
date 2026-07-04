const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "React Native", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    title: "Programming",
    skills: ["Java", "Python", "C++", "DSA"],
  },
  
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <p className="text-cyan-400 font-semibold mb-2">MY SKILLS</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Technologies I Work With
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-500 transition duration-300"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-slate-900 border border-slate-800 rounded-3xl p-8">
        <h3 className="text-2xl font-bold text-cyan-400 mb-4">
          Highlights
        </h3>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-slate-800 rounded-2xl p-4 text-center">
            <h4 className="text-3xl font-bold text-cyan-400">200+</h4>
            <p className="text-slate-400">LeetCode Problems</p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-4 text-center">
            <h4 className="text-3xl font-bold text-cyan-400">10+</h4>
            <p className="text-slate-400">Projects</p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-4 text-center">
            <h4 className="text-3xl font-bold text-cyan-400">React</h4>
            <p className="text-slate-400">Frontend</p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-4 text-center">
            <h4 className="text-3xl font-bold text-cyan-400">RN</h4>
            <p className="text-slate-400">Mobile Apps</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;