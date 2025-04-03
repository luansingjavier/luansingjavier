"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-white flex items-center"
        >
          <span className="text-accent">J</span>L
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <a
            href="#about"
            className="text-white hover:text-accent-light transition-colors"
            onClick={(e) => scrollToSection(e, "about")}
          >
            About
          </a>
          <a
            href="#skills"
            className="text-white hover:text-accent-light transition-colors"
            onClick={(e) => scrollToSection(e, "about")}
          >
            Skills
          </a>
          <a
            href="#experience"
            className="text-white hover:text-accent-light transition-colors"
            onClick={(e) => scrollToSection(e, "experience")}
          >
            Experience
          </a>
          <a
            href="#education"
            className="text-white hover:text-accent-light transition-colors"
            onClick={(e) => scrollToSection(e, "education")}
          >
            Education
          </a>
          <a
            href="#contact"
            className="text-white hover:text-accent-light transition-colors"
            onClick={(e) => scrollToSection(e, "contact")}
          >
            Contact
          </a>
          <a
            href="#calendly"
            className="text-accent font-medium hover:text-accent-light transition-colors border border-accent/50 rounded-full px-4 py-1.5 flex items-center"
            onClick={(e) => scrollToSection(e, "calendly")}
          >
            Book a Call
          </a>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/luansingjavier/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="text-white hover:text-accent-light transition-colors"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/javier-luansing-958628a4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
              className="text-white hover:text-accent-light transition-colors"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-dark absolute top-full left-0 right-0 p-4 flex flex-col space-y-4">
          <a
            href="#about"
            className="text-white hover:text-accent-light transition-colors"
            onClick={(e) => scrollToSection(e, "about")}
          >
            About
          </a>
          <a
            href="#skills"
            className="text-white hover:text-accent-light transition-colors"
            onClick={(e) => scrollToSection(e, "about")}
          >
            Skills
          </a>
          <a
            href="#experience"
            className="text-white hover:text-accent-light transition-colors"
            onClick={(e) => scrollToSection(e, "experience")}
          >
            Experience
          </a>
          <a
            href="#education"
            className="text-white hover:text-accent-light transition-colors"
            onClick={(e) => scrollToSection(e, "education")}
          >
            Education
          </a>
          <a
            href="#contact"
            className="text-white hover:text-accent-light transition-colors"
            onClick={(e) => scrollToSection(e, "contact")}
          >
            Contact
          </a>
          <a
            href="#calendly"
            className="text-accent font-medium hover:text-accent-light transition-colors flex items-center justify-center border border-accent/50 rounded-full px-4 py-2 mt-2"
            onClick={(e) => scrollToSection(e, "calendly")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Book a Call
          </a>

          <div className="flex items-center space-x-4 pt-2">
            <a
              href="https://github.com/luansingjavier/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github.svg"
                alt="GitHub"
                width={24}
                height={24}
                className="text-white hover:text-accent-light transition-colors"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/javier-luansing-958628a4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                className="text-white hover:text-accent-light transition-colors"
              />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
