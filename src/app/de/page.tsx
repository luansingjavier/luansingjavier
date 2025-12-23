import React from "react";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Javier Luansing - Full-Stack und React Native Entwickler Experte Einstellen",
  description: "Suchen Sie einen erfahrenen Full-Stack-Entwickler? Javier Luansing hat über 8 Jahre Erfahrung in der Entwicklung von mobilen und Web-Anwendungen für Unternehmen mit React Native, React, TypeScript, Node.js. Weltweit für Remote-Arbeit verfügbar.",
  openGraph: {
    locale: "de_DE",
  },
};

export default function DePage() {
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
