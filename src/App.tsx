import { HashRouter } from "react-router-dom";
import About from "./components/About";
import AppBar from "./components/AppBar";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Technology from "./components/Technology";

function App() {
  return (
    <HashRouter>
      
      {/* Background */}
      <div className="fixed top-0 left-0 w-full h-full z-[-2] 
      bg-neutral-950 
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      {/* Content */}
      <div className="relative z-0">
        <AppBar />
        <HeroSection />
        <About />
        <Technology />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </div>

    </HashRouter>
  );
}

export default App;