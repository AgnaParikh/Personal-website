import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0563bb] text-white py-4 fixed bottom-0 left-0 w-full">
      <div className="container mx-auto flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/agnaparikh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 bg-white text-[#0563bb] font-bold rounded-md hover:bg-gray-200 transition duration-300"
        >
          <FaLinkedin size={20} />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/AgnaParikh" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 bg-white text-[#0563bb] font-bold rounded-md hover:bg-gray-200 transition duration-300"
        >
          <FaGithub size={20} />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
