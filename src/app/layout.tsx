import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Stars from "./components/Stars";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Javier Luansing - Portfolio",
  description: "Personal portfolio of Javier Luansing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Stars />
        {children}
      </body>
    </html>
  );
}
