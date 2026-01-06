import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import SiteFooter from "./components/SiteFooter";
import Skills from "./components/Skills";
const App = () => {
  return (
    <main>
          <Navbar />
          <Home />
          <Skills />
          <Projects/>
          <Resume />
          <Contact />
          <SiteFooter />
        
    </main>
  );
};

export default App;