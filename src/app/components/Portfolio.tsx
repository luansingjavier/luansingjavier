import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

/** The full one-page portfolio, shared by every locale route. */
const Portfolio = () => (
  <>
    <Navbar />
    <Sidebar />
    <div className="lg:ml-[var(--side-width)]">
      <main className="content">
        <Hero />
        <div className="[&>section:last-child]:border-b [&>section:last-child]:border-ink-10">
          <About />
          <Experience />
          <Education />
          <Skills />
        </div>
        <Contact />
      </main>
      <div className="content">
        <Footer />
      </div>
    </div>
  </>
);

export default Portfolio;
