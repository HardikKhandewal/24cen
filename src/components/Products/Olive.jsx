import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Olive = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    console.log(".");
  }, []);

  const categories = [
    { name: 'Spirit closures', color: 'bg-blue-600' },
    { name: 'Wine closures', color: 'bg-blue-600' },
    { name: 'Pharma closures', color: 'bg-blue-600' },
    { name: 'Olive oil closures', color: 'bg-orange-500' },
    { name: 'Printed metal sheets', color: 'bg-blue-600' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Category Navigation */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        {categories.map((category, index) => (
          <Link
            to={`/products/${category.name.replace(/\s+/g, "").toLowerCase()}`}
            key={index}
          >
            <button
              className={`${category.color} text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity text-lg font-medium`}
            >
              {category.name}
            </button>
          </Link>
        ))}
      </div>
      
      {/* Image Gallery */}
      <h2 className="text-2xl font-bold mb-8 text-center">Olive Oil Closures</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Olive;