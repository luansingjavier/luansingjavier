import React from "react";
import type { Metadata } from "next";
import Portfolio from "../components/Portfolio";

export const metadata: Metadata = {
  title: "Javier Luansing - Contratar Desarrollador Full-Stack y React Native Experto",
  description: "¿Busca contratar un desarrollador full-stack senior? Javier Luansing tiene más de 10 años creando aplicaciones móviles y web empresariales con React Native, React, TypeScript, Node.js. Disponible para trabajo remoto en todo el mundo.",
  openGraph: {
    locale: "es_ES",
  },
};

export default function EsPage() {
  return <Portfolio />;
}
