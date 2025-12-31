import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import Popup from "./components/Popup";

function App() {


  return (
    <>
      <Popup />
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
