import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer text-white bg-[#f59542] p-10 mt-10">
      <nav>
        <h5 className="font-bold text-lg ">PRODUCTS</h5>
        <Link to="/products/pharmaclosures" className="link link-hover">Pharma Closures</Link>
        <Link to = "/products/spiritclosures" className="link link-hover">Spirit Closures</Link>
        <Link to = "/products/wineclosures" className="link link-hover">Wine Closures</Link>
        <Link to = "/products/oliveoilclosures" className="link link-hover">Olive oil closures</Link>
        <Link to = "/products/printedmetalsheets" className="link link-hover">Plain and Printed aluminium sheets</Link>
      </nav>
      <nav>
        <h6 className="font-bold text-lg">COMPANY</h6>
        <Link to="AboutUs" className="link link-hover">About us</Link>
        <Link to="Contact" className="link link-hover">Contact</Link>
      </nav>
      <nav>
        <h6 className="font-bold text-lg">SOCIAL</h6>
        <div className="grid grid-flow-col gap-4">
          <a>
            <div className="relative w-10 h-10 cursor-pointer">
              {/* Default image */}
              <img
                src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF"
                alt="Default"
                className="w-10 h-10 object-cover transition-opacity duration-500"
              />

              {/* Hover image */}
              <img
                src="https://img.icons8.com/?size=100&id=8808&format=png&color=0288D1"
                alt="On Hover"
                className="absolute top-0 left-0 w-10 h-10 object-cover opacity-0 transition-opacity duration-500 hover:opacity-100"
              />
            </div>
          </a>


          <a>
          <div className="relative w-10 h-10 cursor-pointer">
              {/* Default image */}
              <img
                src="https://img.icons8.com/?size=100&id=iKBSjwJ3Dcql&format=png&color=FFFFFF"
                
                alt="Default"
                className="w-10 h-10 object-cover transition-opacity duration-500"
              />

              {/* Hover image */}
              <img
                src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
                alt="On Hover"
                className="absolute top-0 left-0 w-10 h-10 object-cover opacity-0 transition-opacity duration-500 hover:opacity-100"
              />
            </div>
          </a>


          <a>
          <div className="relative w-10 h-10 cursor-pointer">
              {/* Default image */}
              <img
                src="https://img.icons8.com/?size=100&id=8818&format=png&color=FFFFFF"
                alt="Default"
                className="w-10 h-10 object-cover transition-opacity duration-500"
              />

              {/* Hover image */}
              <img
                src="https://img.icons8.com/?size=100&id=8818&format=png&color=0866FF"
                alt="On Hover"
                className="absolute top-0 left-0 w-10 h-10 object-cover opacity-0 transition-opacity duration-500 hover:opacity-100"
              />
            </div>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
