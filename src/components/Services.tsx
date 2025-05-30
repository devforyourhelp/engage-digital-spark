
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies that drive traffic, engagement, and conversions.",
      features: ["SEO Optimization", "Social Media Marketing", "Email Campaigns", "Content Marketing"],
      icon: "📱",
      color: "bg-agency-blue"
    },
    {
      title: "Brand Design",
      description: "Create memorable brand identities that resonate with your target audience.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Print Materials"],
      icon: "🎨",
      color: "bg-agency-orange"
    },
    {
      title: "Web Development",
      description: "Modern, responsive websites that convert visitors into customers.",
      features: ["Responsive Design", "E-commerce", "CMS Integration", "Performance Optimization"],
      icon: "💻",
      color: "bg-agency-purple"
    },
    {
      title: "Analytics & Insights",
      description: "Data-driven insights to optimize your marketing performance and ROI.",
      features: ["Performance Tracking", "Conversion Analysis", "A/B Testing", "Custom Reports"],
      icon: "📊",
      color: "bg-agency-blue"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We offer a comprehensive suite of digital marketing services designed to help your business grow and succeed in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`cursor-pointer transition-all duration-300 hover-lift ${
                activeService === index ? 'ring-2 ring-agency-orange scale-105' : ''
              }`}
              onClick={() => setActiveService(index)}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Active Service Details */}
        <div className="animate-fade-in">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${services[activeService].color} rounded-full flex items-center justify-center mr-4`}>
                      <span className="text-xl text-white">{services[activeService].icon}</span>
                    </div>
                    <h3 className="font-poppins font-bold text-2xl">{services[activeService].title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{services[activeService].description}</p>
                  
                  <h4 className="font-semibold text-lg mb-4">What's Included:</h4>
                  <ul className="space-y-2">
                    {services[activeService].features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-agency-orange rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-br from-agency-blue to-agency-purple p-8 rounded-2xl text-white">
                    <h4 className="font-bold text-2xl mb-4">Ready to Get Started?</h4>
                    <p className="mb-6">Let's discuss how we can help your business grow with our {services[activeService].title.toLowerCase()} services.</p>
                    <button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="bg-white text-agency-blue px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                    >
                      Get a Quote
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
