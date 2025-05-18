import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import Education from "./Components/Education/Education";
import Project from "./Components/Project/Project";

function App() {
  return (
    <div className="bg-[#050414]">
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Project />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
