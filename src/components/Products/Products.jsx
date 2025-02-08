import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const categories = [
    { 
      name: "Spirit closures", 
      icon: "🥃",
      description: "Premium closures for spirits and beverages"
    },
    { 
      name: "Wine closures", 
      icon: "🍷",
      description: "Elegant solutions for wine bottles"
    },
    { 
      name: "Pharma closures", 
      icon: "💊",
      description: "Secure closures for pharmaceutical products"
    },
    { 
      name: "Olive oil closures", 
      icon: "🫒",
      description: "Specialized closures for olive oil bottles"
    },
    { 
      name: "Printed metal sheets", 
      icon: "🏭",
      description: "Custom printed metal sheets for various applications"
    },
  ];

  const products = [
    {
      id: 1,
      name: "Premium Spirit Closure",
      category: "Spirit closures",
      image: "https://www.nipra.in/images/gallery/spirit-closures/8.jpg",
      description: "High-quality closure for premium spirits with tamper-evident security features",
      features: ["Tamper-evident", "Leak-proof", "Premium finish"]
    },
    {
      id: 2,
      name: "Wine Cork Alternative",
      category: "Wine closures",
      image: "https://www.nipra.in/images/gallery/spirit-closures/4.jpg",
      description: "Modern alternative to traditional cork with enhanced preservation properties",
      features: ["Preserves flavor", "Easy opening", "Reusable"]
    },
    {
      id: 3,
      name: "Child-Safe Pharma Cap",
      category: "Pharma closures",
      image: "https://s.alicdn.com/@sc04/kf/H177a3dccc43a462c8f7bfa61ee1cc2dbZ.jpg_720x720q50.jpg",
      description: "Safety-first pharmaceutical bottle closure with child-resistant mechanism",
      features: ["Child-resistant", "Tamper-evident", "Airtight seal"]
    },
    {
      id: 4,
      name: "Premium Oil Pourer",
      category: "Olive oil closures",
      image: "https://www.nipra.in/images/gallery/spirit-closures/22.jpg",
      description: "Precision pouring closure for premium olive oil bottles",
      features: ["Anti-drip", "Controlled flow", "Airtight seal"]
    },
    {
      id: 5,
      name: "Decorative Metal Sheet",
      category: "Printed metal sheets",
      image: "https://www.nipra.in/images/gallery/spirit-closures/9.jpg",
      description: "Custom printed metal sheets with premium finish and durability",
      features: ["Custom designs", "Scratch-resistant", "UV protected"]
    },
    {
      id: 6,
      name: "Luxury Spirit Seal",
      category: "Spirit closures",
      image: "https://image.made-in-china.com/202f0j00ynViemLwLEgQ/Wholesale-Metal-Cover-Synthetic-Cork-T-Shape-Spirits-Liquor-Bottle-Bar-Top-Closure.webp",
      description: "Premium seal for luxury spirit bottles with distinctive design",
      features: ["Premium finish", "Custom branding", "Security features"]
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-[#F59542] bg-opacity-10 text-[#F59542] px-4 py-2 rounded-full text-sm font-medium">
              Our Products
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Innovative <span className="text-[#F59542]">Closure Solutions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality closure solutions designed to meet your specific needs
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`p-2 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300
                ${selectedCategory === "all" ? 'ring-2 ring-[#F59542]' : ''}
                group hover:-translate-y-1`}
            >
              <div className="text-center">
                <h3 className="font-semibold text-gray-900">All Products</h3>
              </div>
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={`p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300
                  ${selectedCategory === category.name ? 'ring-2 ring-[#F59542]' : ''}
                  group hover:-translate-y-1`}
              >
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">{category.name}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Category Header */}
        <div className="mb-12">
          <div className="text-center max-w-3xl mx-auto bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {selectedCategory === "all" ? "All Products" : selectedCategory}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {selectedCategory === "all" 
                ? "Explore our complete range of innovative closure solutions designed to meet diverse industry needs. Each product represents our commitment to quality, functionality, and excellence."
                : categories.find(cat => cat.name === selectedCategory)?.description}
            </p>
          </div>
        </div>


        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gradient-to-b from-white to-orange-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[#F59542] text-white text-sm rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                <div className="space-y-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#F59542] rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-end">
                <Link 
                  to="/contact"
                  className="px-6 py-2.5 bg-gradient-to-r from-[#ffb366] via-[#ff9f4d] to-[#F59542] 
                    text-white rounded-lg 
                    hover:from-[#ffc680] hover:via-[#ffb366] hover:to-[#ff9f4d]
                    transition-all duration-300 
                    shadow-[0_2px_8px_rgba(255,159,77,0.3)]
                    hover:shadow-[0_4px_16px_rgba(255,159,77,0.4)]
                    hover:scale-[1.02]
                    font-medium"
                >
                  Request Quote
                </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F59542]"></div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-[#F59542] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;