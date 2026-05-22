import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {

  return (

    <div className="bg-[#0b1120] text-white overflow-hidden">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Portfolio />

      <Contact />

    </div>

  );
}

export default App;
