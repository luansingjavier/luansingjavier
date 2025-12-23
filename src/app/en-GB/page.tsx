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
  title: "Javier Luansing - Hire Expert Full-Stack & React Native Developer",
  description: "Looking to hire a senior full-stack developer? Javier Luansing has 8+ years building enterprise mobile & web apps with React Native, React, TypeScript, Node.js. Available for remote work worldwide.",
  openGraph: {
    locale: "en_GB",
  },
};

export default function EnGBPage() {
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
