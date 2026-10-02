import {
  LazyMotion,
  domAnimation,
} from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <main
        id="top"
        className="portfolio"
      >
        <Navbar />

        <Hero />

        <About />

        <Projects />

        <Skills />

        <Contact />
      </main>
    </LazyMotion>
  );
}

export default App;