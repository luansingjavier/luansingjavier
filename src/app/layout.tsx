import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Javier Luansing | Full-Stack & Mobile Developer",
  description:
    "Experienced Full-Stack & Mobile Developer specializing in React Native, React, and cloud solutions. Available for projects in Europe and the United States.",
  keywords: [
    "full-stack developer",
    "mobile developer",
    "react native",
    "react",
    "web development",
    "app development",
    "Europe",
    "United States",
    "remote developer",
  ],
  authors: [{ name: "Javier Luansing" }],
  creator: "Javier Luansing",
  publisher: "Javier Luansing",
  alternates: {
    canonical: "https://luansingjavier.info",
    languages: {
      "en-US": "https://luansingjavier.info/en-us",
      "en-GB": "https://luansingjavier.info/en-gb",
      "es-ES": "https://luansingjavier.info/es",
      "fr-FR": "https://luansingjavier.info/fr",
      "de-DE": "https://luansingjavier.info/de",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_GB", "es_ES", "fr_FR", "de_DE"],
    url: "https://luansingjavier.info",
    title: "Javier Luansing | Full-Stack & Mobile Developer",
    description:
      "Experienced Full-Stack & Mobile Developer specializing in React Native, React, and cloud solutions. Available for projects in Europe and the United States.",
    siteName: "Javier Luansing Portfolio",
    images: [
      {
        url: "https://luansingjavier.info/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Javier Luansing - Full-Stack & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Javier Luansing | Full-Stack & Mobile Developer",
    description:
      "Experienced Full-Stack & Mobile Developer specializing in React Native, React, and cloud solutions. Available for projects in Europe and the United States.",
    images: ["https://luansingjavier.info/twitter-image.jpg"],
    creator: "@javierluansing",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="alternate"
          href="https://luansingjavier.info"
          hrefLang="x-default"
        />
        <link
          rel="alternate"
          href="https://luansingjavier.info/en-us"
          hrefLang="en-us"
        />
        <link
          rel="alternate"
          href="https://luansingjavier.info/en-gb"
          hrefLang="en-gb"
        />
        <link
          rel="alternate"
          href="https://luansingjavier.info/es"
          hrefLang="es"
        />
        <link
          rel="alternate"
          href="https://luansingjavier.info/fr"
          hrefLang="fr"
        />
        <link
          rel="alternate"
          href="https://luansingjavier.info/de"
          hrefLang="de"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Javier Luansing",
              url: "https://luansingjavier.info",
              jobTitle: "Full-Stack & Mobile Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              knowsAbout: [
                "React",
                "React Native",
                "Web Development",
                "Mobile Development",
                "Cloud Solutions",
              ],
              makesOffer: {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Full-Stack & Mobile Development Services",
                  description:
                    "Development services for web and mobile applications, available in Europe and the United States",
                },
              },
            }),
          }}
        />
      </head>
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
