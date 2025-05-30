
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    "Data-driven marketing strategies",
    "Creative design and branding",
    "Performance optimization",
    "24/7 customer support"
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="animate-slide-in-left">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
              About <span className="gradient-text">Our Agency</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-6">
              We are a passionate team of digital marketing experts, designers, and strategists 
              dedicated to helping businesses thrive in the digital landscape. With over 5 years 
              of experience, we've helped hundreds of companies achieve their growth objectives.
            </p>
            
            <p className="text-gray-600 text-lg mb-8">
              Our approach combines creative thinking with data-driven insights to deliver 
              campaigns that not only look great but also drive real business results.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-agency-orange flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-agency-blue hover:bg-agency-blue/90 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                Our Services
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-agency-orange text-agency-orange hover:bg-agency-orange hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right side - Images/Visual */}
          <div className="animate-slide-in-right">
            <div className="relative">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agency-blue/20 to-transparent"></div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-agency-orange rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🚀</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Innovation</div>
                    <div className="text-sm text-gray-600">Cutting-edge solutions</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-agency-purple rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📈</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Growth</div>
                    <div className="text-sm text-gray-600">Measurable results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
