import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromUrl = queryParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || "all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  // Update selectedCategory when URL query parameter changes
  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    } else {
      // If no category is specified in URL, default to "all"
      setSelectedCategory("all");
    }
  }, [categoryFromUrl, location.search]);

  // Handler to change category and update URL
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    
    // Update URL with new category parameter
    if (category === "all") {
      navigate("/products");
    } else {
      navigate(`/products?category=${encodeURIComponent(category)}`);
    }
  };

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

  // Main product cards for all products view
  const mainProducts = [
    {
      id: 1,
      name: "Spirit Closure",
      category: "Spirit closures",
      image: "liqour-1.jpg",
      description: "High-quality closure for premium spirits with tamper-evident security features",
      features: ["Tamper-evident", "Leak-proof", "Premium finish"]
    },
    {
      id: 2,
      name: "Wine Closure",
      category: "Wine closures",
      image: "wine-6.jpeg",
      description: "Modern alternative to traditional cork with enhanced preservation properties",
      features: ["Preserves flavor", "Easy opening", "Reusable"]
    },
    {
      id: 3,
      name: "Pharma Closure",
      category: "Pharma closures",
      image: "pharma-3.jpg",
      description: "Safety-first pharmaceutical bottle closure with child-resistant mechanism",
      features: ["Child-resistant", "Tamper-evident", "Airtight seal"]
    },
    {
      id: 4,
      name: "Olive Oil Closure",
      category: "Olive oil closures",
      image: "olive-1.jpg",
      description: "Precision pouring closure for premium olive oil bottles",
      features: ["Anti-drip", "Controlled flow", "Airtight seal"]
    },
    {
      id: 5,
      name: "Printed metal sheets",
      category: "Printed metal sheets",
      image: "metal-sheet-2.jpg",
      description: "Custom printed metal sheets with premium finish and durability",
      features: ["Custom designs", "Scratch-resistant", "UV protected"]
    }
  ];

  // Gallery images organized by category
  const galleryImages = {
    "Spirit closures": [
      {
        id: "s1",
        name: "Premium Spirit Closure",
        image: "liqour-1.jpg",
      },
      {
        id: "s2",
        name: "Luxury Spirit Seal",
        image: "liqour-2.jpg",
      },
      {
        id: "s3",
        name: "Metal Cap for Spirits",
        image: "liqour-3.jpg",
      },
      {
        id: "s4",
        name: "Customized Spirit Closure",
        image: "liqour-4.jpg",
      },
      {
        id: "s5",
        name: "Elegant Whiskey Stopper",
        image: "liqour-5.jpg",
      }
    ],
    "Wine closures": [
      {
        id: "w1",
        name: "Wine Cork Alternative",
        image: "wine-1.jpeg",
      },
      {
        id: "w2",
        name: "Premium Screw Cap",
        image: "wine-2.jpeg",
      },
      {
        id: "w3",
        name: "Decorative Wine Seal",
        image: "wine-3.jpeg",
      },
      {
        id: "w4",
        name: "Classic Wine Stopper",
        image: "wine-4.jpg",
      },
      {
        id: "w5",
        name: "Classic Wine Stopper 2",
        image: "wine-5.jpeg",
      },
      {
        id: "w6",
        name: "Classic Wine Stopper 3",
        image: "wine-6.jpeg",
      },
      {
        id: "w7",
        name: "Classic Wine Stopper 4",
        image: "wine-7.jpeg",
      },
      {
        id: "w8",
        name: "Classic Wine Stopper 5",
        image: "wine-8.jpg",
      },
      {
        id: "w9",
        name: "Classic Wine Stopper 6",
        image: "wine-9.jpg",
      },
      {
        id: "w10",
        name: "Classic Wine Stopper 7",
        image: "wine-10.webp",
      }
    ],
    "Pharma closures": [
      {
        id: "p1",
        name: "Child-Safe Pharma Cap",
        image: "pharma-1.jpg",
      },
      {
        id: "p2",
        name: "Medical Dropper Cap",
        image: "pharma-2.jpg",
      },
      {
        id: "p3",
        name: "Tamper-Evident Closure",
        image: "pharma-3.jpg",
      }
    ],
    "Olive oil closures": [
      {
        id: "o1",
        name: "Premium Oil Pourer",
        image: "olive-1.jpg",
      },
      {
        id: "o2",
        name: "Anti-drip Olive Oil Cap",
        image: "olive-2.jpg",
      },
      {
        id: "o3",
        name: "Decorative Oil Seal",
        image: "olive-3.jpg",
      },
      {
        id: "o4",
        name: "Premium Oil Bottle Closure",
        image: "olive-4.jpg",
      },
      {
        id: "o5",
        name: "Premium Oil Bottle Closure 2",
        image: "olive-5.jpeg",
      }
    ],
    "Printed metal sheets": [
      {
        id: "m1",
        name: "Decorative Metal Sheet",
        image: "/metal-sheet-1.jpg",
      },
      {
        id: "m2",
        name: "Custom Printed Tin",
        image: "/metal-sheet-2.jpg",
      }
    ]
  };

  // Get images based on selected category
  const getGalleryItems = () => {
    if (selectedCategory === "all") {
      return [];
    }
    return galleryImages[selectedCategory] || [];
  };

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
              onClick={() => handleCategoryChange("all")}
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
                onClick={() => handleCategoryChange(category.name)}
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

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F59542]"></div>
          </div>
        )}

        {/* Product Display - Conditional Rendering */}
        {!isLoading && selectedCategory === "all" && (
          // Full Product Cards for "All Products" - Now with View Gallery button only
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainProducts.map((product) => (
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
                  
                  <div className="mt-6 flex justify-between">
                    <button 
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-[1.02]"
                      onClick={() => handleCategoryChange(product.category)}
                    >
                      View Gallery
                    </button>
                    
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
        )}

        {/* Image Gallery for Specific Categories */}
        {!isLoading && selectedCategory !== "all" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {getGalleryItems().map((item) => (
              <div 
                key={item.id} 
                className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <h3 className="text-white text-lg font-bold text-center px-4">{item.name}</h3>
                      <div className="flex justify-center mt-2">
                        <Link 
                          to="/contact"
                          className="px-4 py-2 bg-[#F59542] text-white rounded-lg text-sm font-medium"
                        >
                          Request Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && (selectedCategory !== "all" && getGalleryItems().length === 0) && (
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