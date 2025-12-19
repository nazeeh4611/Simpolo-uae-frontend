import React, { useEffect } from 'react'
import { Building2, MapPin, ChevronRight, Award, CheckCircle2, Users, Clock, Target, Sparkles, TrendingUp, Heart, Share2, Eye, Calendar, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

export function Portfolio() {
  const projects = [
    { 
      name: 'Sharjah Budaiya Suburb', 
      location: 'Sharjah', 
      type: 'Residential',
      category: 'iconic',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
      description: 'Premium residential community featuring luxury finishes'
    },
    { 
      name: 'Sharjah Link Investment', 
      location: 'Sharjah', 
      type: 'Commercial',
      category: 'premium',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?w=800&q=80',
      description: 'Modern commercial complex with innovative design'
    },
    { 
      name: 'DSSCB', 
      location: 'Abu Dhabi', 
      type: 'Government',
      category: 'premium',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w-800&q=80',
      description: 'Government infrastructure project with premium materials'
    },
    { 
      name: 'La Clé Residential', 
      location: 'Al Furjan, Dubai', 
      type: 'Residential',
      category: 'luxury',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      description: 'Luxury residential towers with bespoke finishes'
    },
    { 
      name: 'Fairmont Ajman', 
      location: 'Ajman', 
      type: 'Hospitality',
      category: 'luxury',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      description: '5-star hotel with exclusive tile installations'
    },
    { 
      name: 'Five Palm Dubai', 
      location: 'Dubai', 
      type: 'Hospitality',
      category: 'luxury',
      date: '2022',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
      description: 'Iconic hospitality destination on Palm Jumeirah'
    },
    { 
      name: 'Palace Beach Resort', 
      location: 'Fujairah', 
      type: 'Hospitality',
      category: 'luxury',
      date: '2022',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
      description: 'Beachfront resort with custom tile designs'
    },
    { 
      name: 'Aveline Residences', 
      location: 'JVC, Dubai', 
      type: 'Residential',
      category: 'premium',
      date: '2022',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      description: 'Contemporary residential development'
    },
    { 
      name: 'Aldar Mamsha Palm', 
      location: 'Saadiyat Island', 
      type: 'Residential',
      category: 'luxury',
      date: '2021',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
      description: 'Exclusive beachfront residences'
    },
    { 
      name: 'Nakheel Projects', 
      location: 'Dubai', 
      type: 'Mixed Use',
      category: 'iconic',
      date: '2021',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      description: 'Mixed-use development featuring retail and residential'
    },
  ];

  const stats = [
    { 
      value: '50+', 
      label: 'Completed Projects',
      icon: CheckCircle2,
    },
    { 
      value: '15+', 
      label: 'Years Experience',
      icon: Clock,
    },
    { 
      value: '100%', 
      label: 'Client Satisfaction',
      icon: Users,
    },
    { 
      value: '300+', 
      label: 'Happy Clients',
      icon: Target,
    },
  ];

  const projectTypes = [
    {
      icon: Building2,
      title: 'Residential',
      description: 'Villas, apartments, and residential complexes',
      projects: 28,
    },
    {
      icon: Building2,
      title: 'Commercial',
      description: 'Offices, retail spaces, and business centers',
      projects: 12,
    },
    {
      icon: Building2,
      title: 'Hospitality',
      description: 'Hotels, resorts, and service apartments',
      projects: 8,
    },
    {
      icon: Building2,
      title: 'Government',
      description: 'Public sector and infrastructure projects',
      projects: 5,
    }
  ];

  const testimonials = [
    {
      quote: "Simpolo Trading delivered exceptional quality and met tight deadlines for our luxury residential project.",
      client: "La Clé Residential",
      type: "Residential Development",
      rating: 5
    },
    {
      quote: "Their professional approach and quality materials made them our preferred supplier for hospitality projects.",
      client: "Fairmont Hotels",
      type: "Hospitality Group",
      rating: 5
    },
    {
      quote: "Reliable supply and consistent quality across multiple government infrastructure projects.",
      client: "DSSCB",
      type: "Government Entity",
      rating: 5
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
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
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .silver-gradient {
          background: linear-gradient(135deg, #c0c0c0 0%, #d4d4d4 50%, #e8e8e8 100%);
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        .silver-gradient-dark {
          background: linear-gradient(135deg, #808080 0%, #a0a0a0 50%, #c0c0c0 100%);
        }
        .dark-gradient {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #404040 100%);
        }
        .light-gradient {
          background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 50%, #e8e8e8 100%);
        }
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
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
        .typewriter-cursor {
          display: inline-block;
          width: 3px;
          background: #808080;
          margin-left: 4px;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .portfolio-text {
          display: inline-block;
          background: linear-gradient(135deg, #808080 0%, #a0a0a0 50%, #c0c0c0 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        .prestigious-text {
          display: inline-block;
          background: linear-gradient(135deg, #808080 0%, #a0a0a0 50%, #c0c0c0 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        .solutions-text {
          display: inline-block;
          background: linear-gradient(135deg, #808080 0%, #a0a0a0 50%, #c0c0c0 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
      `}</style>

<section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-700 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-on-scroll max-w-4xl">
            <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-gray-600">
              <TrendingUp size={18} className="mr-2 text-white" />
              <span className="text-white font-medium">Our Success Stories</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Project <span className="portfolio-text">Portfolio</span>
            </h1>
            <div className="w-24 h-1.5 silver-gradient mb-8 rounded-full"></div>
            <div className="text-2xl md:text-3xl mb-8 text-gray-300 font-semibold h-12">
              <Typewriter
                options={{
                  strings: [
                    'Prestigious Developments',
                    'Luxury Installations',
                    'Iconic Projects',
                    'Quality Deliverables',
                    'Client Success Stories',
                    'Premium Transformations'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                  cursorClassName: 'typewriter-cursor'
                }}
              />
            </div>
            <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-3xl leading-relaxed">
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
                className="animate-on-scroll bg-white rounded-2xl shadow-lg p-6 text-center card-hover border border-gray-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-gray-100">
                    <stat.icon className="text-gray-700" size={24} />
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2 text-gray-900">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <div className="animate-on-scroll">
              <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold border border-gray-300">
                <Award size={18} className="mr-2" /> Featured Projects
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Our <span className="prestigious-text">Prestigious</span> Projects
              </h2>
              <p className="text-gray-600 max-w-2xl">
                A showcase of our most prestigious and challenging projects across the UAE
              </p>
            </div>
            <div className="mt-4 lg:mt-0 flex gap-2 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              {['All', 'Iconic', 'Luxury', 'Premium', 'Specialty'].map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors border border-gray-300"
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
                className="animate-on-scroll project-card bg-white rounded-2xl shadow-sm overflow-hidden card-hover border border-gray-200"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`category-badge px-3 py-1 text-xs font-medium rounded-full ${
                      project.category === 'luxury' ? 'dark-gradient text-white border border-gray-700' :
                      project.category === 'iconic' ? 'bg-gray-800 text-white' :
                      project.category === 'specialty' ? 'bg-gray-700 text-white' :
                      'bg-gray-600 text-white'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-start">
                      <div className="p-2 rounded-lg bg-gray-100 mr-3">
                        <Building2 className="text-gray-700" size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1 hover:text-gray-700 transition-colors">{project.name}</h3>
                        <div className="flex items-center text-gray-600 text-sm">
                          <MapPin size={14} className="mr-1" />
                          {project.location}
                          <span className="mx-2">•</span>
                          <Calendar size={14} className="mr-1" />
                          {project.date}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {project.type}
                    </span>
                    <div className="flex items-center gap-3">
                      <button className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200">
                        <Eye size={16} className="text-gray-600" />
                      </button>
                      <button className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200">
                        <Share2 size={16} className="text-gray-600" />
                      </button>
                      <Link
                        to={`/gallery?project=${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-sm text-gray-700 hover:text-gray-900 transition-colors flex items-center"
                      >
                        Details
                        <ChevronRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Link
              to="/gallery"
              className="group inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-900 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 card-hover"
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
            <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold border border-gray-300">
              <Building2 size={18} className="mr-2" /> Project Categories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Specialized <span className="solutions-text">Solutions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Tailored solutions for diverse architectural requirements across sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((type, index) => (
              <div
                key={index}
                className="animate-on-scroll group bg-white rounded-2xl shadow-lg p-8 text-center card-hover border border-gray-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full silver-gradient flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <type.icon className="text-gray-900" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">{type.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{type.description}</p>
                <div className="text-2xl font-bold text-gray-700 mb-2">{type.projects}</div>
                <div className="text-sm text-gray-500">Completed Projects</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden dark-gradient">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-700 rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600 rounded-full mix-blend-overlay filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-semibold border border-gray-600">
              <Star size={18} className="mr-2" /> Client Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Client <span className="text-gray-300">Feedback</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Hear from our valued clients about their experience working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-600 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-gray-400 fill-gray-400 mr-1" />
                  ))}
                </div>
                <div className="text-white mb-6 text-lg italic leading-relaxed">"{testimonial.quote}"</div>
                <div className="border-t border-gray-600 pt-6">
                  <div className="text-gray-300 font-medium">{testimonial.client}</div>
                  <div className="text-gray-400 text-sm">{testimonial.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <div className="dark-gradient rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
              <div className="grid lg:grid-cols-2">
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-gray-600">
                    <Sparkles size={18} className="mr-2 text-gray-300" />
                    <span className="text-gray-300">Next Project</span>
                  </div>
                  
                  <h2 className="text-4xl font-bold text-white mb-6">
                    Start Your <span className="text-gray-300">Project</span> With Us
                  </h2>
                  <p className="text-gray-300 mb-8 text-lg">
                    Join our growing portfolio of successful projects and experience the Simpolo Trading difference
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="group px-8 py-4 dark-gradient text-white rounded-xl font-medium hover:shadow-xl transition-all duration-300 flex items-center space-x-3 card-hover border border-gray-700"
                    >
                      <span>Request a Quote</span>
                      <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                    
                    <Link
                      to="/services"
                      className="group px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center space-x-3"
                    >
                      <span>Our Services</span>
                      <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
                
                <div className="relative h-64 lg:h-auto min-h-[300px] bg-gradient-to-r from-gray-900/80 to-gray-800/80">
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-600 animate-float">
                        <Award className="text-white" size={32} />
                      </div>
                      <p className="text-2xl font-bold text-white mb-2">Your Vision</p>
                      <p className="text-gray-300">Our Expertise</p>
                      <div className="mt-8 grid grid-cols-2 gap-4 max-w-xs mx-auto">
                        <div className="text-center p-3 bg-white/5 rounded-xl border border-gray-600">
                          <div className="text-lg font-bold text-white">15+</div>
                          <div className="text-xs text-gray-300">Years Experience</div>
                        </div>
                        <div className="text-center p-3 bg-white/5 rounded-xl border border-gray-600">
                          <div className="text-lg font-bold text-white">50+</div>
                          <div className="text-xs text-gray-300">Projects</div>
                        </div>
                      </div>
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