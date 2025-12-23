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
  title: "Javier Luansing - Contratar Desarrollador Full-Stack y React Native Experto",
  description: "¿Busca contratar un desarrollador full-stack senior? Javier Luansing tiene más de 8 años creando aplicaciones móviles y web empresariales con React Native, React, TypeScript, Node.js. Disponible para trabajo remoto en todo el mundo.",
  openGraph: {
    locale: "es_ES",
  },
};

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
