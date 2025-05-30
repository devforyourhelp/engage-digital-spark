
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'branding', name: 'Branding' },
    { id: 'web', name: 'Web Design' },
    { id: 'marketing', name: 'Marketing' }
  ];

  const projects = [
    {
      id: 1,
      title: "TechStart Branding",
      category: "branding",
      description: "Complete brand identity for a tech startup",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      results: "300% increase in brand recognition"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "web",
      description: "Modern e-commerce website with custom features",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      results: "150% increase in online sales"
    },
    {
      id: 3,
      title: "Digital Campaign",
      category: "marketing",
      description: "Multi-channel marketing campaign for product launch",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      results: "500% ROI on ad spend"
    },
    {
      id: 4,
      title: "Restaurant Rebrand",
      category: "branding",
      description: "Complete visual identity redesign for local restaurant chain",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      results: "40% increase in foot traffic"
    },
    {
      id: 5,
      title: "SaaS Website",
      category: "web",
      description: "Landing page optimization for B2B software company",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      results: "200% improvement in conversion rate"
    },
    {
      id: 6,
      title: "Social Media Growth",
      category: "marketing",
      description: "Instagram and LinkedIn growth strategy for consulting firm",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      results: "1000% follower growth in 6 months"
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            Explore our latest work and see how we've helped businesses transform their digital presence and achieve remarkable growth.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-agency-blue text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="overflow-hidden hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="font-semibold text-sm mb-1">{project.results}</div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-poppins font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-agency-blue font-medium capitalize">
                    {project.category}
                  </span>
                  <button className="text-agency-orange hover:text-agency-orange/80 font-medium transition-colors">
                    View Details →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Ready to see your project here?</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-agency-orange hover:bg-agency-orange/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
