import React from "react";
import profileImage from "../Assets/mypic.jpg";
import { FaLinkedin, FaGithub, FaMedium  } from "react-icons/fa";

const Description = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white rounded-xl shadow-lg p-6 flex items-center w-full max-w-2xl h-72">
      <div className="flex-shrink-0">
        <img
          src= {profileImage}
          alt="Profile"
          className="w-48 h-48 rounded-full border-4 border-blue-500 shadow-md ml-20"
        />
      </div>

      <div className="ml-6">
        <h2 className="text-xl font-bold text-gray-800 ml-20 md:text-6xl sm:text-3xl text-xl">Agna Parikh</h2>
        <p className="text-gray-500 text-sm mt-1 ml-20">+1 (703) 868-6328</p>
        <p className="text-gray-500 text-sm mt-1 ml-20">Wilmington, Delaware</p>
        <p className="text-gray-500 text-sm mt-1 ml-20">Email: agnaparikh2103@gmail.com</p>
      <div className="flex mt-4 ml-20 space-x-6">
            <a
              href="https://www.linkedin.com/in/agnaparikh/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="https://github.com/AgnaParikh" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="https://medium.com/@agnaparikh2103"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 transition"
            >
              <FaMedium size={40} color="black" />
          </a>
          </div>
          </div>
    </div>
  </div>
  );
}

export default Description;
