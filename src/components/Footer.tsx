
import React from 'react';
import { Mail, Phone, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { name: "About Us", action: () => scrollToSection('about') },
    { name: "Services", action: () => scrollToSection('services') },
    { name: "Portfolio", action: () => scrollToSection('portfolio') },
    { name: "Contact", action: () => scrollToSection('contact') }
  ];

  const services = [
    "Digital Marketing",
    "Brand Design", 
    "Web Development",
    "Analytics & Insights"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-agency-blue to-agency-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">MA</span>
              </div>
              <span className="font-poppins font-bold text-xl">MarketingAgency</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We help businesses transform their digital presence and achieve remarkable growth through innovative marketing strategies and creative solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-agency-orange" />
                <span className="text-gray-400">hello@marketingagency.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-agency-orange" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={link.action}
                    className="text-gray-400 hover:text-agency-orange transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-gray-400 hover:text-agency-orange transition-colors duration-300 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Stay Connected</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and marketing tips.</p>
            
            {/* Newsletter Signup */}
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-agency-orange"
              />
              <button className="bg-agency-orange hover:bg-agency-orange/90 px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-agency-orange transition-colors duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} MarketingAgency. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-400 hover:text-agency-orange transition-colors text-sm">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-agency-orange transition-colors text-sm">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-agency-orange transition-colors text-sm">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
