import React from "react";
import type { Metadata } from "next";
import Portfolio from "../components/Portfolio";

export const metadata: Metadata = {
  title: "Javier Luansing - Embaucher Développeur Full-Stack et React Native Expert",
  description: "Vous cherchez à embaucher un développeur full-stack senior? Javier Luansing a plus de 10 ans de création d'applications mobiles et web d'entreprise avec React Native, React, TypeScript, Node.js. Disponible pour le travail à distance dans le monde entier.",
  openGraph: {
    locale: "fr_FR",
  },
};

export default function FrPage() {
  return <Portfolio />;
}
