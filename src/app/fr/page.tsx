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
  title: "Javier Luansing - Embaucher Développeur Full-Stack et React Native Expert",
  description: "Vous cherchez à embaucher un développeur full-stack senior? Javier Luansing a plus de 8 ans de création d'applications mobiles et web d'entreprise avec React Native, React, TypeScript, Node.js. Disponible pour le travail à distance dans le monde entier.",
  openGraph: {
    locale: "fr_FR",
  },
};

export default function FrPage() {
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
