import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Stars from "./components/Stars";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://luansingjavier.info"),
  title: {
    default:
      "Javier Luansing - Full-Stack & Mobile Developer | React Native Expert",
    template: "%s | Javier Luansing - Full-Stack Developer",
  },
  description:
    "Senior Full-Stack & Mobile Developer with 8+ years of experience in React Native, React, TypeScript, and Node.js. Specializing in scalable mobile and web applications, cloud solutions, and enterprise software development. Available for freelance and remote opportunities.",
  keywords: [
    "Javier Luansing",
    "Full-Stack Developer",
    "Mobile Developer",
    "React Native Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Senior Software Engineer",
    "Freelance Developer",
    "Remote Developer",
    "Philippines Developer",
    "iOS Developer",
    "Android Developer",
    "Web Developer",
    "Cloud Solutions",
    "Laravel Developer",
    "JavaScript Developer",
    "Software Engineer for Hire",
    "Technical Consultant",
    "App Development",
  ],
  authors: [{ name: "Javier Luansing" }],
  creator: "Javier Luansing",
  publisher: "Javier Luansing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luansingjavier.info",
    title:
      "Javier Luansing - Full-Stack & Mobile Developer | React Native Expert",
    description:
      "Senior Full-Stack & Mobile Developer with 8+ years of experience specializing in React Native, React, and cloud-based solutions. Building scalable, high-performance applications.",
    siteName: "Javier Luansing Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Javier Luansing - Full-Stack & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Javier Luansing - Full-Stack & Mobile Developer",
    description:
      "Senior Full-Stack & Mobile Developer with 8+ years of experience in React Native, React, TypeScript, and Node.js. Available for freelance opportunities.",
    images: ["/profile.jpg"],
    creator: "@luansingjavier",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "your-google-verification-code", // Replace with actual verification code
  // },
  alternates: {
    canonical: "https://luansingjavier.info",
    languages: {
      "en-US": "https://luansingjavier.info/en-US",
      "en-GB": "https://luansingjavier.info/en-GB",
      es: "https://luansingjavier.info/es",
      fr: "https://luansingjavier.info/fr",
      de: "https://luansingjavier.info/de",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Javier Luansing",
    jobTitle: "Full-Stack & Mobile Developer",
    description:
      "Senior Full-Stack & Mobile Developer with 8+ years of experience specializing in React Native, React, TypeScript, and Node.js",
    url: "https://luansingjavier.info",
    image: "https://luansingjavier.info/profile.jpg",
    sameAs: [
      "https://github.com/luansingjavier",
      "https://linkedin.com/in/javier-luansing-958628a4",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Naga City",
      addressCountry: "Philippines",
    },
    knowsAbout: [
      "React Native",
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Mobile Development",
      "Web Development",
      "Full-Stack Development",
      "Cloud Solutions",
      "Laravel",
      "PHP",
      "iOS Development",
      "Android Development",
      "DevOps",
      "CI/CD",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Ateneo de Naga University",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Stars />
        {children}
      </body>
    </html>
  );
}
