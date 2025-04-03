import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function EsPage() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
