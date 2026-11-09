import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
