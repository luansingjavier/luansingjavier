import React from "react";
import type { Metadata } from "next";
import Portfolio from "../components/Portfolio";

export const metadata: Metadata = {
  title: "Javier Luansing - Full-Stack und React Native Entwickler Experte Einstellen",
  description: "Suchen Sie einen erfahrenen Full-Stack-Entwickler? Javier Luansing hat über 10 Jahre Erfahrung in der Entwicklung von mobilen und Web-Anwendungen für Unternehmen mit React Native, React, TypeScript, Node.js. Weltweit für Remote-Arbeit verfügbar.",
  openGraph: {
    locale: "de_DE",
  },
};

export default function DePage() {
  return <Portfolio />;
}
