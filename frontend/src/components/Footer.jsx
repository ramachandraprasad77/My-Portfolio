import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 fixed bottom-0 w-full shadow-md z-50 ">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-2">
          © {new Date().getFullYear()} Ramachandraprasad Sharma M K. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 text-xl">
          <a href="https://github.com/ramachandraprasad77" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-200">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ramachandraprasad-sharma-m-k-56356b359/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-200">
            LinkedIn
          </a>
          <a href="mailto:ramachandraprasad77@gmail.com" className="hover:text-teal-400 transition-colors duration-200">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;