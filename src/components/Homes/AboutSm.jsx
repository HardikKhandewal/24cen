import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Label */}
          <div className="mb-12">
            <span className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-medium">
              About Us
            </span>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Company Info */}
            <div className="space-y-6">
              <h2 className="text-orange-500 font-bold text-lg tracking-wide">
                About 21st Century Caps
              </h2>
              
              <h3 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
                Crafting the Best Caps and{' '}
                <span className="text-orange-500">Closures</span> for Global Brands
              </h3>
              
              <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
             
            </div>

            {/* Right Column - Description Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-gray-600 leading-relaxed">
                21st Century Caps is in the business of producing aluminium ROPP
                closures and printed metal sheets. We started operations as a
                family-owned business in 1982 and are presently one of the largest
                companies in the metal packaging business in the Indian
                sub-continent.
              </p>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <p className="text-gray-600">
                    Serving alcobev spirits, wine, pharmaceuticals, and olive oil industries
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <p className="text-gray-600">
                    Leaders in metal packaging solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;