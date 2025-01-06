import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import resume from "../Assets/Resume.pdf";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-[#0563bb] text-white flex justify-between h-24 mx-auto px-4 max-h-[1240px] items-center">
      <h1 className="w-full text-xl font-bold text-white-600">Agna Parikh</h1>
      <ul className='hidden md:flex '>
        <li className="p-4">
        <a
            href="/" 
            className="px-4 py-2 text-white rounded-md hover:bg-lime-700 hover:shadow-lg transition duration-300"
          >
          Home
          </a>
        </li>
        <li className="p-4">
        <a
            href={resume} 
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-white rounded-md hover:bg-lime-700 hover:shadow-lg transition duration-300"
          >
          Resume
          </a>
        </li>
        <li className="p-4"><Link to="/about" className="px-4 py-2 text-white rounded-md hover:bg-lime-700 hover:shadow-lg transition duration-300">About</Link></li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "left-0 top-0 fixed h-full w-[60%] bg-[#99CCFF] border-r border-r-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl m-4 font-bold text-lime-600">Agna Parikh</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-b-lime-700">
            <a
              href="/" // Adjust the path if necessary
              className="px-4 py-2 text-white rounded-md hover:bg-lime-700 hover:shadow-lg transition duration-300"
            >
            Home
            </a>
          </li>
          <li className="p-4 border-b border-b-lime-700">
            <a
              href={resume} // Adjust the path if necessary
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-white rounded-md hover:bg-lime-700 hover:shadow-lg transition duration-300"
            >
            Resume
            </a>
          </li>
          <li className="p-4 border-b border-b-lime-700"><Link to="/about" className="px-4 py-2 text-white rounded-md hover:bg-lime-700 hover:shadow-lg transition duration-300">About</Link></li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
