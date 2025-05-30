
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      content: "Working with this agency transformed our digital presence completely. Our online sales increased by 300% within just 6 months!",
      avatar: "SJ",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, GrowthCo",
      content: "The team's creativity and strategic thinking helped us reach new audiences we never thought possible. Absolutely outstanding results!",
      avatar: "MC",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, LocalBiz",
      content: "From branding to digital marketing, they delivered beyond our expectations. Our brand recognition has never been stronger!",
      avatar: "ER",
      rating: 5
    },
    {
      name: "David Kim",
      position: "VP Marketing, InnovateLab",
      content: "Professional, creative, and results-driven. They helped us achieve a 500% ROI on our marketing campaigns!",
      avatar: "DK",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8 md:p-12 text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
                "{testimonials[activeTestimonial].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-agency-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg text-gray-900">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-agency-orange">
                    {testimonials[activeTestimonial].position}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                activeTestimonial === index ? 'bg-agency-blue' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`cursor-pointer transition-all duration-300 hover-lift ${
                activeTestimonial === index ? 'ring-2 ring-agency-orange' : ''
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-agency-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.position}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Ready to join our satisfied clients?</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-agency-blue hover:bg-agency-blue/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
