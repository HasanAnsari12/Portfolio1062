function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <p className="text-cyan-400 font-semibold mb-2">ABOUT ME</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Passionate Developer & Problem Solver
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition">
          <h3 className="text-cyan-400 text-xl font-bold mb-3">
            🎓 Education
          </h3>
          <p className="text-slate-300">
            B.Tech Computer Science Engineering
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition">
          <h3 className="text-cyan-400 text-xl font-bold mb-3">
            💻 Development
          </h3>
          <p className="text-slate-300">
            Full Stack & React Native Developer
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition">
          <h3 className="text-cyan-400 text-xl font-bold mb-3">
            🧠 DSA
          </h3>
          <p className="text-slate-300">
            200+ LeetCode Problems Solved
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition">
          <h3 className="text-cyan-400 text-xl font-bold mb-3">
            🚀 Projects
          </h3>
          <p className="text-slate-300">
            10+ Real World Projects Built
          </p>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10">
        <p className="text-slate-300 text-lg leading-8">
          Hi, I'm <span className="text-cyan-400 font-semibold">Hasan Ansari</span>,
          a passionate Full Stack Developer and React Native Developer with a
          strong foundation in Java, JavaScript, React.js, React Native,
          Node.js, Express.js, MongoDB, MySQL, and Data Structures &
          Algorithms.
        </p>

        <p className="text-slate-400 text-lg leading-8 mt-6">
          I enjoy building modern web applications, mobile applications, and
          solving complex programming challenges. I have solved more than
          <span className="text-cyan-400 font-semibold"> 200+ LeetCode problems </span>
          and continuously improve my problem-solving and development skills.
        </p>

        <p className="text-slate-400 text-lg leading-8 mt-6">
          My goal is to become a skilled Software Engineer who creates scalable,
          high-performance applications and delivers great user experiences.
        </p>
      </div>
    </section>
  );
}

export default About;