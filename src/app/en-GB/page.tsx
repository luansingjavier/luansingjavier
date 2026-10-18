import React from "react";
import type { Metadata } from "next";
import Portfolio from "../components/Portfolio";

export const metadata: Metadata = {
  title: "Javier Luansing - Hire Expert Full-Stack & React Native Developer",
  description: "Looking to hire a senior full-stack developer? Javier Luansing has 10+ years building enterprise mobile & web apps with React Native, React, TypeScript, Node.js. Available for remote work worldwide.",
  openGraph: {
    locale: "en_GB",
  },
};

export default function EnGBPage() {
  return <Portfolio />;
}
