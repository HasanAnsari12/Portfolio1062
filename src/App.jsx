import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  return (
    <div className="bg-[#F5F7FB] text-[#1A1A1A] min-h-screen relative overflow-x-hidden selection:bg-[#5B8CFF]/20 selection:text-[#3B82F6]">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;