import { motion } from "framer-motion";
function Hero() {
  return (
   <section
  id="hero"
  className="min-h-screen pt-32 flex items-center px-6 relative overflow-hidden"
>
      
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full top-20 left-10"></div>
      <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full bottom-20 right-10"></div>

 <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
        className="max-w-2xl"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-4">
    👋 Welcome To My Portfolio
  </p>

  <h1 className="text-6xl md:text-8xl font-black leading-tight mb-4">
    Hasan <br />
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
      Ansari
    </span>
  </h1>

  <h2 className="text-2xl md:text-4xl font-semibold text-slate-300 mb-6">
    Full Stack Developer • React Native Developer
  </h2>

  <p className="text-slate-400 text-lg md:text-xl leading-8 max-w-2xl mb-8">
  Building scalable web applications, cross-platform mobile apps and
  modern digital experiences using
  <span className="text-cyan-400"> React.js</span>,
  <span className="text-cyan-400"> React Native</span>,
  <span className="text-cyan-400"> Node.js</span>,
  <span className="text-cyan-400"> MongoDB</span> and
  <span className="text-cyan-400"> Java</span>.

  <br />
  <br />

  Founder of <span className="text-cyan-400">Nexora</span> and passionate
  about solving complex problems through clean code, innovative solutions
  and modern technologies.
</p>

  {/* Tech Badges */}
  <div className="flex flex-wrap gap-3 mb-8">
    {[
      "React.js",
      "React Native",
      "Node.js",
      "MongoDB",
      "Java",
      "200+ LeetCode",
      "Founder of Nexora",
    ].map((item) => (
      <span
        key={item}
        className="px-4 py-2 rounded-full bg-slate-900 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500 hover:text-black transition duration-300"
      >
        {item}
      </span>
    ))}
  </div>

  {/* Stats */}
  <div className="grid grid-cols-3 gap-4 mb-8 max-w-xl">
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
      <h3 className="text-3xl font-bold text-cyan-400">200+</h3>
      <p className="text-slate-400 text-sm">LeetCode</p>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
      <h3 className="text-3xl font-bold text-cyan-400">10+</h3>
      <p className="text-slate-400 text-sm">Projects</p>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
      <h3 className="text-3xl font-bold text-cyan-400">5+</h3>
<p className="text-slate-400 text-sm">Technologies</p>
    </div>
  </div>

  {/* Buttons */}
  <div className="flex flex-wrap gap-4">
    <a
      href="#projects"
      className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-semibold transition"
    >
      View Projects
    </a>

   <div className="flex gap-4">
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noreferrer"
    className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-semibold"
  >
    View Resume
  </a>

  <a
    href="/resume.pdf"
    download
    className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-8 py-3 rounded-xl font-semibold"
  >
    Download Resume
  </a>
</div>
  </div>
</motion.div>

        {/* Right Side */}
      
<div className="hidden lg:flex justify-center">
  <div className="relative">

    {/* Glow */}
    <div className="absolute inset-0 bg-cyan-500/30 blur-3xl rounded-full"></div>

    {/* Main Card */}
   <div className="relative w-[430px] h-[430px] rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-1">
      <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
        <img
  src="/hasan.jpg"
  alt="Hasan Ansari"
  className="w-80 h-80 rounded-full object-cover"
/>
      </div>
    </div>

    {/* Floating Cards */}
    <div className="absolute top-8 -left-6 bg-slate-900/90 backdrop-blur-xl border border-cyan-500 px-5 py-3 rounded-2xl">
  🚀 Nexora
</div>

<div className="absolute top-24 -right-10 bg-slate-900/90 backdrop-blur-xl border border-cyan-500 px-5 py-3 rounded-2xl">
  📱 React Native
</div>

<div className="absolute bottom-24 -left-6 bg-slate-900/90 backdrop-blur-xl border border-cyan-500 px-5 py-3 rounded-2xl">
  🧠 200+ LeetCode
</div>
<div className="absolute top-24 -right-10 bg-slate-900/90 backdrop-blur-xl border border-cyan-500 px-5 py-3 rounded-2xl">
  📱 React Native Developer
</div>
  </div>
</div>
      </div>
    </section>
  );
}

export default Hero;