import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HamMenu from "./HamMenu";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) =>  location.pathname.startsWith(path);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`bg-[#EFEFE5]  sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className={`flex justify-between w-11/12 mx-auto transition-all duration-300 max-[425px]:ml-0 ${isScrolled ? 'h-20' : 'h-28'}`}>
        <div id="mainLogo" className="flex h-full max-[425px]:w-3/4">
          <Link to="/home">
          <img className={`transition-all duration-300 h-full m-auto ${isScrolled ? 'scale-90' : ''}`} src="/logo.jpg" alt="" />
          </Link>
        </div>
       
        <div id="menu" className="flex justify-start my-auto max-[1022px]:hidden">
          <ul className={`menu text-2xl menu-vertical lg:menu-horizontal bg-base-200 mx-2 gap-5 rounded-box transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
            <Link to="/home"><li  className={`hover:after:scale-x-100 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:bg-[#f59542] after:duration-500 after:transition-transform hover:text-[#f59542] duration-300 transition-colors mx-2 cursor-pointer ${
      isActive("/home") ? "text-[#f59542] after:scale-x-100" : "text-black after:scale-x-0"
    }`}>Home</li></Link>
            
            <Link to="/AboutUs"><li  className={`hover:after:scale-x-100 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:bg-[#f59542] after:duration-500 after:transition-transform hover:text-[#f59542] duration-300 transition-colors mx-2 cursor-pointer ${
      isActive("/AboutUs") ? "text-[#f59542] after:scale-x-100" : "text-black after:scale-x-0"
    }`}>About Us</li></Link>
            
            
            <div className="dropdown dropdown-hover group relative">
            <Link to="/products">
              <div
                tabIndex={0}
                role="button"
                
                className={`hover:after:scale-x-100 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:bg-[#f59542] after:duration-500 after:transition-transform hover:text-[#f59542] duration-300 transition-colors mx-2 cursor-pointer ${
                  isActive("/products") ? "text-[#f59542] after:scale-x-100" : "text-black after:scale-x-0"
                }`}
              >
                Products
              </div>
              </Link>
              <ul
                tabIndex={0}
                className="dropdown-content gap-4 text-lg p-4 menu bg-base-100 rounded-box z-[1] w-60 shadow"
              >
                <Link to ="/products/spiritclosures"><li className="cursor-pointer hover:text-[#f59542]">Spirit Closures</li></Link>
                <Link to ="/products/wineclosures"><li className="cursor-pointer hover:text-[#f59542]">Wine Closures</li></Link>
                <Link to ="/products/pharmaclosures"><li className="cursor-pointer hover:text-[#f59542]">Pharma Closures</li></Link>
                <Link to ="/products/oliveoilclosures"><li className="cursor-pointer hover:text-[#f59542]">Olive oil closures</li></Link>
                {/* <Link to =""><li className="cursor-pointer hover:text-[#f59542]">Beverages / sharbat Closures</li></Link> */}
                <Link to ="/products/printedmetalsheets"><li className="cursor-pointer hover:text-[#f59542]">Plain and Printed aluminium sheets</li></Link>
              </ul>
            </div>
           
            <Link to="/home"><li  className={`hover:after:scale-x-100 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:bg-[#f59542] after:duration-500 after:transition-transform hover:text-[#f59542] duration-300 transition-colors mx-2 cursor-pointer ${
      isActive("/Contact") ? "text-[#f59542] after:scale-x-100" : "text-black after:scale-x-0"
    }`}>Contact</li></Link> 
          </ul>
          <div className={`hover:bg-white hover:border hover:border-gray-400 hover:text-[#f59542] bg-[#f59542] border border-[#f59542] text-white rounded-full cursor-pointer transition-all duration-500 ease-in-out ${isScrolled ? 'py-2 px-3 text-lg' : 'py-3 px-4 text-xl'}`}>
            Our Brochure
          </div>
        </div>

        <HamMenu/>
        
      </div>
    </div>
  );
};

export default Navbar;