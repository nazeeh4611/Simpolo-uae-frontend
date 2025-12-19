import React from 'react'
import { Building2, MapPin, ChevronRight, Award, CheckCircle2, Users, Clock, Target, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export function Portfolio() {
  const projects = [
    { 
      name: 'Sharjah Budaiya Suburb', 
      location: 'Sharjah', 
      type: 'Residential',
      category: 'iconic'
    },
    { 
      name: 'Sharjah Link Investment', 
      location: 'Sharjah', 
      type: 'Commercial',
      category: 'premium'
    },
    { 
      name: 'DSSCB', 
      location: 'Abu Dhabi', 
      type: 'Government',
      category: 'premium'
    },
    { 
      name: 'La Clé Residential', 
      location: 'Al Furjan, Dubai', 
      type: 'Residential',
      category: 'luxury'
    },
    { 
      name: 'Fairmont Ajman', 
      location: 'Ajman', 
      type: 'Hospitality',
      category: 'luxury'
    },
    { 
      name: 'Five Palm Dubai', 
      location: 'Dubai', 
      type: 'Hospitality',
      category: 'luxury'
    },
    { 
      name: 'Palace Beach Resort', 
      location: 'Fujairah', 
      type: 'Hospitality',
      category: 'luxury'
    },
    { 
      name: 'Aveline Residences', 
      location: 'JVC, Dubai', 
      type: 'Residential',
      category: 'premium'
    },
    { 
      name: 'Aldar Mamsha Palm', 
      location: 'Saadiyat Island', 
      type: 'Residential',
      category: 'luxury'
    },
    { 
      name: 'Nakheel Projects', 
      location: 'Dubai', 
      type: 'Mixed Use',
      category: 'iconic'
    },
    { 
      name: 'Nasaq 5', 
      location: 'Aljada, Sharjah', 
      type: 'Residential',
      category: 'premium'
    },
    { 
      name: 'Dubai Hills Residential', 
      location: 'Dubai Hills', 
      type: 'Residential',
      category: 'luxury'
    },
    { 
      name: 'Arjan Residential', 
      location: 'Arjan, Dubai', 
      type: 'Residential',
      category: 'premium'
    },
    { 
      name: 'Dubai Silicon Oasis', 
      location: 'Dubai', 
      type: 'Commercial',
      category: 'iconic'
    },
    { 
      name: 'Abu Dhabi Al Raha Beach', 
      location: 'Abu Dhabi', 
      type: 'Residential',
      category: 'luxury'
    },
    { 
      name: 'Apparel Group Projects', 
      location: 'UAE', 
      type: 'Commercial',
      category: 'premium'
    },
    { 
      name: 'Rolex Outlet', 
      location: 'Dubai', 
      type: 'Retail',
      category: 'luxury'
    },
    { 
      name: 'Private Villas', 
      location: 'Dubai & Abu Dhabi', 
      type: 'Residential',
      category: 'premium'
    },
    { 
      name: 'Pool Projects', 
      location: 'Dubai Hills & Palm', 
      type: 'Residential',
      category: 'specialty'
    },
  ];

  const stats = [
    { 
      value: '50+', 
      label: 'Completed Projects',
      icon: CheckCircle2,
      color: 'text-[#00C896]'
    },
    { 
      value: '15+', 
      label: 'Years Experience',
      icon: Clock,
      color: 'text-[#FF6B6B]'
    },
    { 
      value: '100%', 
      label: 'Client Satisfaction',
      icon: Users,
      color: 'text-[#4ECDC4]'
    },
    { 
      value: '24/7', 
      label: 'Project Support',
      icon: Target,
      color: 'text-[#FFD166]'
    },
  ];

  const projectTypes = [
    {
      icon: Building2,
      title: 'Residential',
      description: 'Villas, apartments, and residential complexes',
      projects: 28,
      gradient: 'from-[#FF6B6B] to-[#FF8E53]'
    },
    {
      icon: Building2,
      title: 'Commercial',
      description: 'Offices, retail spaces, and business centers',
      projects: 12,
      gradient: 'from-[#4ECDC4] to-[#44A08D]'
    },
    {
      icon: Building2,
      title: 'Hospitality',
      description: 'Hotels, resorts, and service apartments',
      projects: 8,
      gradient: 'from-[#FFD166] to-[#FFB347]'
    },
    {
      icon: Building2,
      title: 'Government',
      description: 'Public sector and infrastructure projects',
      projects: 5,
      gradient: 'from-[#06D6A0] to-[#00C896]'
    }
  ];

  const testimonials = [
    {
      quote: "Simpolo Trading delivered exceptional quality and met tight deadlines for our luxury residential project.",
      client: "La Clé Residential",
      type: "Residential Development"
    },
    {
      quote: "Their professional approach and quality materials made them our preferred supplier for hospitality projects.",
      client: "Fairmont Hotels",
      type: "Hospitality Group"
    },
    {
      quote: "Reliable supply and consistent quality across multiple government infrastructure projects.",
      client: "DSSCB",
      type: "Government Entity"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF7F0] to-white">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-shimmer {
          background: linear-gradient(90deg, #2C1C10 0%, #D4AF37 50%, #2C1C10 100%);
          background-size: 200% auto;
          animation: shimmer 2s infinite linear;
        }
        .gold-gradient {
          background: linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #FFD700 100%);
        }
        .hero-gradient {
          background: linear-gradient(135deg, #2C1C10 0%, #3D2817 50%, #5C4033 100%);
        }
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(184, 134, 11, 0.15);
        }
        .project-card {
          transition: all 0.4s ease;
        }
        .project-card:hover {
          transform: translateY(-5px) scale(1.02);
        }
        .category-badge {
          transition: all 0.3s ease;
        }
        .category-badge:hover {
          transform: scale(1.1);
        }
      `}</style>

      <section className="relative overflow-hidden hero-gradient text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D4AF37] rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#B8860B] rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-on-scroll">
            <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
              <TrendingUp size={18} className="mr-2 text-[#FFD700]" />
              <span className="text-[#FFD700]">Our Success Stories</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Project <span className="gold-gradient bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <div className="w-24 h-1 gold-gradient mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
              Delivering excellence across residential, commercial, hospitality, and government projects throughout the UAE
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="animate-on-scroll bg-white rounded-2xl shadow-lg p-6 text-center card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-[#F5EFE0]">
                    <stat.icon className={`${stat.color}`} size={24} />
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2 text-[#2C1C10]">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#FAF7F0] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2C1C10]">
                Featured <span className="gold-gradient bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="text-gray-600 max-w-2xl">
                A showcase of our most prestigious and challenging projects across the UAE
              </p>
            </div>
            <div className="mt-4 lg:mt-0 flex gap-2 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              {['All', 'Iconic', 'Luxury', 'Premium', 'Specialty'].map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="animate-on-scroll project-card bg-white rounded-2xl shadow-sm overflow-hidden card-hover border border-[#F0E6D2]"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-start">
                      <div className="p-2 rounded-lg bg-[#F5EFE0] mr-3">
                        <Building2 className="text-[#B8860B]" size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#2C1C10] mb-1">{project.name}</h3>
                        <div className="flex items-center text-gray-600 text-sm">
                          <MapPin size={14} className="mr-1" />
                          {project.location}
                        </div>
                      </div>
                    </div>
                    <span className={`category-badge px-3 py-1 text-xs font-medium rounded-full ${
                      project.category === 'luxury' ? 'bg-gradient-to-r from-[#FFD700] to-[#FFB347] text-[#2C1C10]' :
                      project.category === 'iconic' ? 'bg-gradient-to-r from-[#4ECDC4] to-[#44A08D] text-white' :
                      project.category === 'specialty' ? 'bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white' :
                      'bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {project.type}
                    </span>
                    <Link
                      to="/gallery"
                      className="text-sm text-[#B8860B] hover:text-[#2C1C10] transition-colors flex items-center"
                    >
                      View Project
                      <ChevronRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Link
              to="/gallery"
              className="group inline-flex items-center px-8 py-4 border-2 border-[#D4AF37] text-[#2C1C10] rounded-xl font-medium hover:bg-[#F5EFE0] transition-all duration-300"
            >
              <span>View Complete Portfolio Gallery</span>
              <ChevronRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2C1C10]">
              Project <span className="gold-gradient bg-clip-text text-transparent">Categories</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Specialized solutions for diverse architectural requirements across sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((type, index) => (
              <div
                key={index}
                className="animate-on-scroll group bg-white rounded-2xl shadow-lg p-8 text-center card-hover border border-[#F0E6D2]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${type.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <type.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#2C1C10] mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{type.description}</p>
                <div className="text-2xl font-bold text-[#2C1C10] mb-2">{type.projects}</div>
                <div className="text-sm text-gray-500">Completed Projects</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1C10] via-[#3D2817] to-[#2C1C10]"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 -left-32 w-80 h-80 bg-[#FFD700] rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#D4AF37] rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Client <span className="gold-gradient bg-clip-text text-transparent">Testimonials</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Hear from our valued clients about their experience working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-white mb-6 text-lg italic">"{testimonial.quote}"</div>
                <div className="border-t border-white/20 pt-6">
                  <div className="text-[#FFD700] font-medium">{testimonial.client}</div>
                  <div className="text-gray-300 text-sm">{testimonial.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-[#FAF7F0] via-white to-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <div className="bg-gradient-to-r from-[#2C1C10] via-[#3D2817] to-[#2C1C10] rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                    <Sparkles size={18} className="mr-2 text-[#FFD700]" />
                    <span className="text-[#FFD700]">Next Project</span>
                  </div>
                  
                  <h2 className="text-4xl font-bold text-white mb-6">
                    Start Your <span className="gold-gradient bg-clip-text text-transparent">Project</span> With Us
                  </h2>
                  <p className="text-gray-300 mb-8 text-lg">
                    Join our growing portfolio of successful projects and experience the Simpolo Trading difference
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="group px-8 py-4 gold-gradient text-[#2C1C10] rounded-xl font-medium hover:shadow-xl transition-all duration-300 flex items-center space-x-3"
                    >
                      <span>Request a Quote</span>
                      <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                    
                    <Link
                      to="/services"
                      className="group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center space-x-3"
                    >
                      <span>Our Services</span>
                      <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
                
                <div className="relative h-64 lg:h-auto min-h-[300px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2C1C10] to-transparent lg:from-transparent lg:via-[#2C1C10]/50 lg:to-[#2C1C10] z-10"></div>
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                        <Award className="text-white" size={32} />
                      </div>
                      <p className="text-2xl font-bold text-[#2C1C10] mb-2">Your Vision</p>
                      <p className="text-gray-600">Our Expertise</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}