import { useEffect } from "react";
import { WOW } from "wowjs";
import "animate.css";
import { Link } from 'react-router-dom';

const ShowcasePro = () => {
  useEffect(() => {
    new WOW({
      boxClass: "wow", // class for WOW.js elements
      animateClass: "animate__animated", // class for Animate.css animations
      offset: 100, // offset to trigger animation
      mobile: true, // enable animations on mobile devices
      live: true, // update animations for dynamically loaded content
    }).init();
  }, []);
  return (
    <>
      <h1 className="text-center my-2 text-5xl font-bold text-[#f59542]">
        Products
      </h1>
      <div id="imgs" className="flex flex-wrap mx-auto w-screen justify-center">
      
        {/* First Product */}
        <div
          className="wow animate__fadeInLeft w-[350px] mx-6 my-4 flex flex-col group"
          data-wow-delay="0"
          data-wow-duration="1500ms"
        >
          {/* Image container */}
          
          <div className="relative w-full h-full cursor-pointer">
            {/* Default image */}
            <Link to="/products?category=Spirit closures">
            <img
              src="liqour-1.jpg"
              alt="Default"
              className="w-full h-full object-cover transition-opacity duration-500"
            />

            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>

            {/* Hover image with animation */}
            <div
              className="absolute flex justify-center items-center rounded-full bg-white top-1/2 left-1/2 w-14 h-14 object-fill opacity-0 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:opacity-100 "
            >
              <img className="object-fill h-1/2 w-1/2 m-auto" src="https://img.icons8.com/?size=100&id=7867&format=png&color=f59542" alt="" />
            </div>
            </Link>
          </div>

          <h1 className="mt-6 mx-auto font-bold text-lg">Spirit Clousers</h1>
          <p className="mt-1 text-center">
            These closures are used by distilleries for packaging spirits such
            as whisky, vodka, rum, brandy, gin, and other such beverages.
          </p>
        </div>

        {/* Second Product */}
        <div
          className="wow animate__fadeInUp w-[350px] mx-6 my-4 flex flex-col group"
          data-wow-delay="0"
          data-wow-duration="1500ms"
        >
          {/* Image container */}
          <div className="relative w-full h-full cursor-pointer">
            {/* Default image */}
            <Link to="/products?category=Wine closures">
            <img
              src="wine-6.jpeg"
              alt="Default"
              className="w-full h-full object-cover transition-opacity duration-500"
            />

            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>

            {/* Hover image with animation */}
            <div
              className="absolute flex justify-center items-center rounded-full bg-white top-1/2 left-1/2 w-14 h-14 object-fill opacity-0 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:opacity-100 "
            >
              <img className="object-fill h-1/2 w-1/2 m-auto" src="https://img.icons8.com/?size=100&id=7867&format=png&color=f59542" alt="" />
            </div>
            </Link>
          </div>

          <h1 className="mt-6 mx-auto font-bold text-lg">Wine Clousers</h1>
          <p className="mt-1 text-center">
            Wine closures are available in variety of decoration options with saranex and saran-tin liners.
          </p>
        </div>


        <div
          className="wow animate__fadeInRight w-[350px] mx-6 my-4 flex flex-col group"
          data-wow-delay="0"
          data-wow-duration="1500ms"
        >
          {/* Image container */}
          <div className="relative w-full h-full cursor-pointer">
            {/* Default image */}
            <Link to="/products?category=Pharma closures">
            <img
              src="https://www.nipra.in/images/resource/service-3.jpg"
              alt="Default"
              className="w-full h-full object-cover transition-opacity duration-500"
            />

            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>

            {/* Hover image with animation */}
            <div
              className="absolute flex justify-center items-center rounded-full bg-white top-1/2 left-1/2 w-14 h-14 object-fill opacity-0 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:opacity-100 "
            >
              <img className="object-fill h-1/2 w-1/2 m-auto" src="https://img.icons8.com/?size=100&id=7867&format=png&color=f59542" alt="" />
            </div>
            </Link>
          </div>

          <h1 className="mt-6 mx-auto font-bold text-lg">Pharma Clousers</h1>
          <p className="mt-1 text-center">
          Closures for pharmaceuticals are available with retort-resistant coating systems and variety of liner options.
          </p>
        </div>


        <div
          className="wow animate__fadeInUp w-[350px] mx-6 my-4 flex flex-col group"
          data-wow-delay="0"
          data-wow-duration="1500ms"
        >
          {/* Image container */}
          <div className="relative w-full h-full cursor-pointer">
            {/* Default image */}
            <Link to="/products?category=Olive oil closures">
            <img
              src="	https://www.nipra.in/images/resource/service-4a.jpg"
              alt="Default"
              className="w-full h-full object-cover transition-opacity duration-500"
            />

            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>

            {/* Hover image with animation */}
            <div
              className="absolute flex justify-center items-center rounded-full bg-white top-1/2 left-1/2 w-14 h-14 object-fill opacity-0 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:opacity-100 "
            >
              <img className="object-fill h-1/2 w-1/2 m-auto" src="https://img.icons8.com/?size=100&id=7867&format=png&color=f59542" alt="" />
            </div>
            </Link>
          </div>

          <h1 className="mt-6 mx-auto font-bold text-lg">Olive Oil Clousers</h1>
          <p className="mt-1 text-center">
          Olive oil closures come with the functional option of an 'easy-pour insert' for better customer experience.
          </p>
        </div>

        <div
          className="wow animate__fadeInUp w-[350px] mx-6 my-4 flex flex-col group"
          data-wow-delay="0"
          data-wow-duration="1500ms"
        >
          {/* Image container */}
          <div className="relative w-full h-full cursor-pointer">
            {/* Default image */}
            <Link to="/products?category=Printed metal sheets">
            <img
              src="https://www.nipra.in/images/resource/service-5a.jpg"
              alt="Default"
              className="w-full h-full object-cover transition-opacity duration-500"
            />

            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50"></div>

            {/* Hover image with animation */}
            <div
              className="absolute flex justify-center items-center rounded-full bg-white top-1/2 left-1/2 w-14 h-14 object-fill opacity-0 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:opacity-100 "
            >
              <img className="object-fill h-1/2 w-1/2 m-auto" src="https://img.icons8.com/?size=100&id=7867&format=png&color=f59542" alt="" />
            </div>
            </Link>
          </div>

          <h1 className="mt-6 mx-auto font-bold text-lg">Plain and Printed Aluminium Sheets</h1>
          <p className="mt-1 text-center">
          Printed metal sheets are the raw material for manufacturers of aluminium bottle caps (ROPP closures) and metal containers/cans.
          </p>
        </div>
      </div>
    </>
  );
};

export default ShowcasePro;
