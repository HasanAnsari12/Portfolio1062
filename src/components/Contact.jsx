function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-cyan-400 font-semibold tracking-widest uppercase">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Let's Work Together
        </h2>

        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          Open to internships, freelance opportunities, collaborations,
          and exciting software development projects.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Email */}
        <a
          href="mailto:ansarihasan1062@gmail.com"
          className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-500 transition block"
        >
          <h3 className="text-cyan-400 text-xl font-bold mb-3">
            📧 Email
          </h3>

          <p className="text-slate-300 break-all">
            ansarihasan1062@gmail.com
          </p>
        </a>

        {/* Phone */}
        <a
          href="tel:7470507311"
          className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-500 transition block"
        >
          <h3 className="text-cyan-400 text-xl font-bold mb-3">
            📱 Phone
          </h3>

          <p className="text-slate-300">
            +91 7470507311
          </p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/HasanAnsari12"
          target="_blank"
          rel="noreferrer"
          className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-500 transition block"
        >
          <h3 className="text-cyan-400 text-xl font-bold mb-3">
            💻 GitHub
          </h3>

          <p className="text-slate-300">
            github.com/HasanAnsari12
          </p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/hasan-ansari-96a9022b4/"
          target="_blank"
          rel="noreferrer"
          className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-500 transition block"
        >
          <h3 className="text-cyan-400 text-xl font-bold mb-3">
            🔗 LinkedIn
          </h3>

          <p className="text-slate-300">
            linkedin.com/in/hasan-ansari-96a9022b4
          </p>
        </a>
      </div>

      <div className="text-center mt-12">
        <p className="text-slate-400 mb-5">
          📍 Bhopal, Madhya Pradesh, India
        </p>

        <a
          href="mailto:ansarihasan1062@gmail.com"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-xl font-semibold transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Contact;