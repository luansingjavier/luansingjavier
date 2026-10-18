import React from "react";

const Footer = () => (
  <footer className="flex items-center justify-between gap-6 border-t border-ink-10 py-4">
    <p className="text-sm">&copy; {new Date().getFullYear()} Javier Luansing</p>
    <a href="#top" className="muted-link py-1 text-sm font-medium">
      Back to Top
    </a>
  </footer>
);

export default Footer;
