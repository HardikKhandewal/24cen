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
        style={{ width: "70%" }} // Adjust width as needed
      >
        <ul className="menu bg-base-200 rounded-box w-full">
          <li>
            <a className="hover:bg-[#F59542]">Hoome</a>
          </li>
          <li>
            <a className="hover:bg-[#F59542]">About Us</a>
          </li>
          <li>
            <details open>
              <summary className="hover:bg-[#F59542]">Products</summary>
              <ul>
                <li>
                  <a className="hover:bg-[#F59542]">Spirit Clousers</a>
                </li>
                <li>
                  <a className="hover:bg-[#F59542]">Wine Clousers</a>
                </li>
                <li>
                  <a className="hover:bg-[#F59542]">Pharma Clousers</a>
                </li>
                <li>
                  <a className="hover:bg-[#F59542]">Olive Oil Clousers</a>
                </li>
                <li>
                  <a className="hover:bg-[#F59542]">Plain and Printed Aluminium Sheets</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a className="hover:bg-[#F59542]">Contact</a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
