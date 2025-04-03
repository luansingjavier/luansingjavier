import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-dark py-12 border-t border-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="text-accent">J</span>L
            </h2>
            <p className="text-gray-400 mt-2">Full-Stack & Mobile Developer</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://github.com/luansingjavier/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-accent transition-colors"
            >
              <Image src="/github.svg" alt="GitHub" width={24} height={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/javier-luansing-958628a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-accent transition-colors"
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
          </div>

          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} Javier Luansing. All rights
              reserved.
            </p>
            <p className="mt-1">Designed and built with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
