function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">

        <h3 className="text-3xl font-bold mb-3">
          Hasan <span className="text-cyan-400">Ansari</span>
        </h3>

        <p className="text-slate-400 text-lg mb-2">
          Full Stack Developer • React Native Developer
        </p>

        <p className="text-cyan-400 font-medium mb-6">
          Founder of Nexora 🚀
        </p>

        <div className="flex justify-center flex-wrap gap-3 mb-8">
          <span className="px-4 py-2 rounded-full border border-cyan-500 text-cyan-400">
            React.js
          </span>

          <span className="px-4 py-2 rounded-full border border-cyan-500 text-cyan-400">
            React Native
          </span>

          <span className="px-4 py-2 rounded-full border border-cyan-500 text-cyan-400">
            Node.js
          </span>

          <span className="px-4 py-2 rounded-full border border-cyan-500 text-cyan-400">
            MongoDB
          </span>
        </div>

        <div className="border-t border-slate-800 pt-6">
          <p className="text-slate-500 text-sm">
            © 2026 Hasan Ansari. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;