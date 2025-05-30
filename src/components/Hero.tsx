
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-agency-blue/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-agency-orange/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-agency-purple/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-agency-blue/10 rounded-full animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            <span className="gradient-text">Transform</span> Your Brand <br />
            Into a <span className="gradient-text">Digital Powerhouse</span>
          </h1>
          
          <p className={`text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0'
          }`}>
            We craft compelling digital experiences that drive growth, engage audiences, and deliver measurable results for your business.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0'
          }`}>
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-agency-blue hover:bg-agency-blue/90 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get a Free Quote
            </Button>
            
            <Button 
              onClick={() => scrollToSection('portfolio')}
              variant="outline" 
              size="lg"
              className="border-2 border-agency-orange text-agency-orange hover:bg-agency-orange hover:text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
            >
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-700 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-agency-blue mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-agency-orange mb-2">150+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-agency-purple mb-2">95%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-agency-blue mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ChevronDown className="w-6 h-6 text-agency-blue" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
