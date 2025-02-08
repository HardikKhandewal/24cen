import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinkClass = `relative group px-4 py-2 transition-all duration-300 hover:text-[#f59542]`;
  const navLinkUnderline = `absolute left-0 bottom-0 w-full h-0.5 bg-[#f59542] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`;

  return (
    <nav className={`fixed top-0 w-full z-50 bg-[#EFEFE5] transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : ''
    }`}>
      <div className={`max-w-7xl mx-auto px-4 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}>
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex-shrink-0">
            <img 
              src="/logo.jpg" 
              alt="Logo" 
              className={`transition-all duration-300 ${
                isScrolled ? 'h-[56px]' : 'h-[70px]'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex font-semibold text-lg items-center space-x-6">
              {[
                { path: '/home', label: 'Home' },
                { path: '/AboutUs', label: 'About Us' },
                { path: '/Contact', label: 'Contact' }
              ].map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className={`${navLinkClass} ${
                    isActive(item.path) ? 'text-[#f59542]' : 'text-black'
                  }`}
                >
                  {item.label}
                  <span className={`${navLinkUnderline} ${
                    isActive(item.path) ? 'scale-x-100' : ''
                  }`} />
                </Link>
              ))}

              {/* Products Dropdown */}
              <div className="relative group">
                <Link 
                  to="/products"
                  className={`${navLinkClass} ${
                    isActive('/products') ? 'text-[#f59542]' : 'text-black'
                  }`}
                >
                  Products
                  <span className={`${navLinkUnderline} ${
                    isActive('/products') ? 'scale-x-100' : ''
                  }`} />
                </Link>
                <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white rounded-lg shadow-xl p-4 space-y-2">
                    {[
                      { path: '/products', label: 'Spirit Closures' },
                      { path: '/products', label: 'Wine Closures' },
                      { path: '/products', label: 'Pharma Closures' },
                      { path: '/products', label: 'Olive Oil Closures' },
                      { path: '/products', label: 'Plain and Printed Aluminium Sheets' }
                    ].map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-gray-800 hover:bg-[#EFEFE5] hover:text-[#f59542] rounded-md transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Brochure Button */}
            <a
              href="/brochure.pdf"
              download="21st Century Caps Brochure.pdf"
              className={`inline-flex font-semibold text-lg items-center px-6 py-2 rounded-full bg-[#f59542] text-white transition-all duration-300 hover:bg-white hover:text-[#f59542] border border-[#f59542] ${
                isScrolled ? 'text-sm' : 'text-base'
              }`}
            >
              Our Brochure
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md focus:outline-none"
          >
            <div className="w-6 h-5 relative transform transition-all duration-300">
              <span className={`absolute h-0.5 w-full bg-black transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`} />
              <span className={`absolute h-0.5 w-full bg-black transform transition-all duration-300 translate-y-2 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`} />
              <span className={`absolute h-0.5 w-full bg-black transform transition-all duration-300 translate-y-4 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
              }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-y-0 right-0 transform w-64 bg-white shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 space-y-4">
          <div className="space-y-3">
            {[
              { path: '/home', label: 'Home' },
              { path: '/AboutUs', label: 'About Us' },
              { path: '/Contact', label: 'Contact' }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-lg ${
                  isActive(item.path) ? 'text-[#f59542]' : 'text-gray-800'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Products Menu */}
            <div className="py-2">
              <div className="text-lg text-gray-800 mb-2">Products</div>
              <div className="pl-4 space-y-2">
                {[
                  { path: '/products', label: 'Spirit Closures' },
                  { path: '/products', label: 'Wine Closures' },
                  { path: '/products', label: 'Pharma Closures' },
                  { path: '/products', label: 'Olive Oil Closures' },
                  { path: '/products', label: 'Plain and Printed Aluminium Sheets' }
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-1 text-gray-600 hover:text-[#f59542]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            
          </div>
          
      </div>
      <a
              href="/brochure.pdf"
              download="21st Century Caps Brochure.pdf"
              className="iinline-block w-full mx-4 px-6 py-2.5 rounded-full bg-[#f59542] text-white text-center font-medium hover:bg-white hover:text-[#f59542] border-2 border-[#f59542] transition-colors duration-300"
            >
              Our Brochure
            </a>
        </div>
    </nav>
  );
};

export default Navbar;