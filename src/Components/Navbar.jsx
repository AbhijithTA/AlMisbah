import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1B1B1B] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wider">
          <h1 className="text-white">AlMisbah</h1>
        </div>

        {/* Hamburger Menu (Mobile View) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:space-x-8 text-xl absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-[#1B1B1B] lg:bg-transparent p-4 lg:p-0`}
        >
          <li>
            <a
              href="/"
              className="block lg:inline-block hover:text-gray-400 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block lg:inline-block hover:text-gray-400 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="block lg:inline-block hover:text-gray-400 transition duration-300"
            >
              Our Services
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="block lg:inline-block hover:text-gray-400 transition duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Call-to-Action Button */}
        <div className="hidden lg:block">
          <button className="bg-gray-600 px-6 py-2 rounded-full text-base tracking-widest hover:bg-gray-700 transition duration-300">
            Get In Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
