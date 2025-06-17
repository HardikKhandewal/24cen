import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Company Info */}
            
            <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-orange-100 rounded-full">
          <h2 className="text-orange-600 font-bold text-md tracking-wide">
            About 21st Century Caps
          </h2>
        </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
                Crafting the Best <span className="text-orange-500">Caps</span> and{' '}
                <span className="text-orange-500">Closures</span> for Global Brands
              </h3>
              
              <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
             
            </div>

            {/* Right Column - Description Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-gray-600 leading-relaxed">         
                Welcome to 21st Century Caps Solutions Pvt Ltd 
                We're pioneering a comprehensive solution for bottle packing, all under one roof. Our product range includes a diverse array of ROPP caps, featuring multiple colors and innovative designs to prevent counterfeiting.
              </p>
              
              <div className="mt-2 space-y-1">
              <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-orange-500"></div>
        <p className="text-gray-600 pt-5">
          Advanced tamper-evident technology ensuring product integrity while maintaining easy opening for consumers
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-orange-500"></div>
        <p className="text-gray-600 pt-5">
          Continuous innovation in manufacturing processes, combining cutting-edge automation with rigorous quality control at every production stage
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