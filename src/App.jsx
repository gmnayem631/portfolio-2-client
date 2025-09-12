import ReactLenis from "lenis/react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <ReactLenis root>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </main>
    </ReactLenis>
  );
}

export default App;
