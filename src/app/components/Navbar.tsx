"use client";

import React, { useState } from "react";
import { CalendarIcon } from "./Icons";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const close = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-10 bg-bg lg:left-[var(--side-width)] lg:border-b-0">
      <div className="mx-auto max-w-[var(--content-width)] px-6 py-4 sm:flex sm:max-w-[calc(var(--content-width)+128px)] sm:items-center sm:gap-5 sm:px-16 lg:max-w-[var(--content-width)] lg:px-0">
        <div className="flex h-9 items-center justify-between sm:flex-none">
          <a
            href="#top"
            onClick={close}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-accent font-serif text-sm text-accent transition-transform duration-150 hover:scale-[0.875]"
          >
            JL
          </a>
          <button
            type="button"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1 sm:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="menu-panel"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span
              className={`block h-px bg-ink transition-all duration-150 ${
                isMenuOpen ? "w-4 translate-y-[2.5px] rotate-45" : "w-5"
              }`}
            />
            <span
              className={`block h-px bg-ink transition-all duration-150 ${
                isMenuOpen ? "w-4 -translate-y-[2.5px] -rotate-45" : "w-5"
              }`}
            />
          </button>
        </div>

        <nav
          id="menu-panel"
          aria-label="Main"
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col items-center gap-6 pb-2 pt-6 sm:flex sm:flex-1 sm:flex-row sm:justify-between sm:p-0`}
        >
          <ul className="flex flex-col items-center gap-1 sm:flex-row sm:gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="muted-link inline-flex py-1 text-sm font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#calendly"
            onClick={close}
            className="btn-small w-full sm:w-auto"
          >
            <CalendarIcon className="h-4 w-4" />
            <span>Book a Call</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
