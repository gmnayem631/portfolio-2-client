import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
      </main>
    </>
  );
}

export default App;
