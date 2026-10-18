import React from "react";
import type { Metadata } from "next";
import Portfolio from "../components/Portfolio";

export const metadata: Metadata = {
  title: "Javier Luansing - Hire Expert Full-Stack & React Native Developer",
  description: "Looking to hire a senior full-stack developer? Javier Luansing has 10+ years building enterprise mobile & web apps with React Native, React, TypeScript, Node.js. View portfolio, experience at Tracktile, Cloud Panda, Moment House. Available for remote work worldwide.",
  keywords: [
    "hire full-stack developer",
    "hire React Native developer",
    "hire mobile developer",
    "senior software engineer",
    "freelance developer Philippines",
    "remote developer for hire",
    "React Native consultant",
    "TypeScript expert",
    "mobile app development",
    "enterprise software developer"
  ],
  openGraph: {
    title: "Javier Luansing - Hire Expert Full-Stack & React Native Developer",
    description: "Senior developer with proven track record at top companies. 10+ years building scalable mobile & web applications. Available for hire.",
    locale: "en_US",
  },
};

export default function EnUSPage() {
  return <Portfolio />;
}
