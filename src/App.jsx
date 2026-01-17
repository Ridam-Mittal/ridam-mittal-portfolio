import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const scrollRef = useRef(null);
  return (
    <div className="flex h-screen">

      <Sidebar scrollRef={scrollRef} />

      {/* MAIN CONTENT */}
      <main
        ref={scrollRef}
        className="
        flex-1 h-screen overflow-y-auto
        ml-0 md:ml-[clamp(240px,20vw,320px)]
        no-scrollbar scroll-smooth
        "
      >
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="education"><Education /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="achievements"><Achievements /></section>
        <section id="contact"><Contact /></section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
