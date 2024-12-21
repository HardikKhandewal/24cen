import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Disable scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = ""; // Cleanup on component unmount
    };
  }, [isOpen]);

  return (
    <div className="flex items-center min-[1030px]:hidden justify-start my-auto">
      {/* Hamburger Icon */}
      <button
        className="flex flex-col items-center justify-center w-8 h-8 space-y-1 group"
        onClick={() => setIsOpen(!isOpen)} // Toggle the state
      >
        <div
          className={`h-1 w-full bg-black rounded transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`h-1 w-full bg-black rounded transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`h-1 w-full bg-black rounded transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </button>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-md p-4 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "50%" }} // Adjust width as needed
      >
        <ul className="space-y-4 mt-8">
        <Link to="/">
          <li className="border-b border-gray-300 pb-2">
            
            <span className="text-black hover:text-blue-500">
              Home
            </span>
          </li>
        </Link>

        <Link to = "AboutUs">
          <li className="border-b border-gray-300 pb-2">
            <span className="text-black hover:text-blue-500">
              About
            </span>
          </li>
        </Link>

        <Link to = "Contact">
          <li className="pb-2">
            <span className="text-black hover:text-blue-500">
              Contact
            </span>
          </li>
        </Link>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
