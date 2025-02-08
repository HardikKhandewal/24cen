import React from 'react';

const About = () => {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Team Members" },
    { number: "95%", label: "Client Satisfaction" }
  ];

  const coreValues = [
    { title: "Innovation", description: "Pushing boundaries with cutting-edge solutions" },
    { title: "Excellence", description: "Delivering outstanding quality in every project" },
    { title: "Integrity", description: "Building trust through honest partnerships" },
    { title: "Collaboration", description: "Working together to achieve greater results" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <img 
                src="https://lic-pension-plans.com/wp-content/uploads/2020/07/about-us-for-LIC-pension-plans.jpg"
                alt="About Us"
                className="rounded-2xl shadow-2xl object-cover w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#F59542] rounded-2xl p-6 text-white shadow-lg">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block">
              <span className="bg-[#F59542] bg-opacity-10 text-[#F59542] px-4 py-2 rounded-full text-sm font-medium">
                About Us
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Transforming Ideas Into
              <span className="text-[#F59542]"> Digital Reality</span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              We are passionate about delivering exceptional digital solutions that drive business growth. 
              Our team of experts combines creativity with technical excellence to transform your vision into reality.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#F59542] rounded-full"></div>
                  <h4 className="font-semibold">Innovation First</h4>
                </div>
                <p className="text-gray-600 text-sm">Pioneering new solutions for digital challenges</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#F59542] rounded-full"></div>
                  <h4 className="font-semibold">Client Focus</h4>
                </div>
                <p className="text-gray-600 text-sm">Your success is our primary mission</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Mission Section */}
        <div className="relative py-20">
          <div className="absolute inset-0 bg-[#f4bf915f] bg-opacity-1 rounded-3xl"></div>
          <div className="relative z-10 px-8 py-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Mission & Vision</h2>
              <div className="w-24 h-1 bg-[#F59542] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#F59542] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                  <span className="text-[#F59542] text-3xl group-hover:text-white">🎯</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses through innovative digital solutions that drive growth and success. 
                  We're committed to delivering excellence in every project while fostering lasting partnerships.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#F59542] rounded-full"></div>
                    <span className="text-gray-600">Client-Centric Approach</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#F59542] rounded-full"></div>
                    <span className="text-gray-600">Innovative Solutions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#F59542] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6  transition-colors duration-300">
                  <span className="text-[#F59542] text-3xl group-hover:text-white">👁️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the global leader in digital transformation, setting new standards of excellence 
                  and innovation while creating meaningful impact for our clients and communities.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#F59542] rounded-full"></div>
                    <span className="text-gray-600">Global Leadership</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#F59542] rounded-full"></div>
                    <span className="text-gray-600">Sustainable Growth</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#F59542] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                  <span className="text-[#F59542] text-3xl group-hover:text-white">💎</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
                <p className="text-gray-600 leading-relaxed">
                  We promise to deliver exceptional quality, maintain transparency, and exceed expectations 
                  in every project while fostering innovation and sustainable growth.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#F59542] rounded-full"></div>
                    <span className="text-gray-600">Quality Assurance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#F59542] rounded-full"></div>
                    <span className="text-gray-600">Continuous Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        

        {/* Core Values Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <div className="w-24 h-1 bg-[#F59542] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group text-center group-hover:scale-110"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#F59542] to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300">
                  <span className="text-xl text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 ">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;