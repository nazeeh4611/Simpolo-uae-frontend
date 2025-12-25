import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Building2, MapPin, ChevronRight, Award, CheckCircle2, Users, Clock, Target, Sparkles, TrendingUp, Star, ArrowRight } from 'lucide-react';
import Typewriter from 'typewriter-effect';

function Portfolio() {
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
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
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
    <div className="min-h-screen bg-black">
      <style dangerouslySetInnerHTML={{__html: `
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
        @keyframes swordShimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .sword-shimmer {
          background: linear-gradient(90deg, 
            transparent, 
            rgba(192, 192, 192, 0.1), 
            rgba(192, 192, 192, 0.3), 
            rgba(192, 192, 192, 0.6), 
            rgba(192, 192, 192, 0.3), 
            rgba(192, 192, 192, 0.1), 
            transparent
          );
          background-size: 200% 100%;
          animation: swordShimmer 3s infinite linear;
        }
        .sword-gradient {
          background: linear-gradient(135deg, 
            #000000 0%, 
            #1a1a1a 25%, 
            #2d2d2d 50%, 
            #1a1a1a 75%, 
            #000000 100%
          );
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
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
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%);
        }
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(255, 255, 255, 0.1);
        }
        .project-card {
          transition: all 0.4s ease;
        }
        .project-card:hover {
          transform: translateY(-5px) scale(1.02);
        }
        .typewriter-cursor {
          display: inline-block;
          width: 3px;
          background: #c0c0c0;
          margin-left: 4px;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .portfolio-text {
          display: inline-block;
          background: linear-gradient(135deg, #c0c0c0 0%, #d4d4d4 50%, #e8e8e8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        .prestigious-text {
          display: inline-block;
          background: linear-gradient(135deg, #c0c0c0 0%, #d4d4d4 50%, #e8e8e8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        .solutions-text {
          display: inline-block;
          background: linear-gradient(135deg, #c0c0c0 0%, #d4d4d4 50%, #e8e8e8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        .silver-button-shine {
          position: relative;
          overflow: hidden;
        }
        .silver-button-shine::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -60%;
          width: 20%;
          height: 200%;
          background: linear-gradient(
            rgba(255, 255, 255, 0.3), 
            rgba(255, 255, 255, 0.1) 50%, 
            rgba(255, 255, 255, 0.3)
          );
          transform: rotate(30deg);
          animation: buttonShine 3s infinite linear;
        }
        @keyframes buttonShine {
          0% { left: -60%; }
          100% { left: 140%; }
        }
      `}} />

      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-800 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-700 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-on-scroll max-w-4xl">
            <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/5 backdrop-blur border border-gray-700 relative overflow-hidden">
              <div className="absolute inset-0 sword-shimmer opacity-30"></div>
              <TrendingUp size={18} className="mr-2 text-gray-400 relative z-10" />
              <span className="text-gray-400 font-medium relative z-10">Our Success Stories</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Project <span className="portfolio-text">Portfolio</span>
            </h1>
            <div className="w-32 h-1.5 silver-gradient mb-8 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 sword-shimmer"></div>
            </div>
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

      <section className="py-16 relative bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="animate-on-scroll bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center card-hover border border-gray-700 hover:border-gray-600 relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="flex justify-center mb-4 relative z-10">
                  <div className="p-3 rounded-xl silver-gradient relative overflow-hidden">
                    <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                    <stat.icon className="text-gray-900 relative z-10" size={24} />
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2 text-white relative z-10">{stat.value}</div>
                <div className="text-gray-400 text-sm relative z-10">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <div className="animate-on-scroll">
              <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-white/5 backdrop-blur border border-gray-700 text-gray-300 text-sm font-semibold relative overflow-hidden">
                <div className="absolute inset-0 sword-shimmer opacity-20"></div>
                <Award size={18} className="mr-2 relative z-10" /> 
                <span className="relative z-10">Featured Projects</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Our <span className="prestigious-text">Prestigious</span> Projects
              </h2>
              <p className="text-gray-400 max-w-2xl">
                A showcase of our most prestigious and challenging projects across the UAE
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link
                key={index}
                to={`/gallery?project=${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="animate-on-scroll project-card group relative overflow-hidden rounded-2xl shadow-lg card-hover border border-gray-700 hover:border-gray-500"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative h-96 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <h3 className="text-white text-xl font-bold mb-3 group-hover:text-gray-200 transition-colors uppercase tracking-wide">
                      {project.name}
                    </h3>
                    <div className="flex items-center text-gray-300 text-sm font-medium">
                      <span className="uppercase tracking-wider">{project.type}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Link
              to="/gallery"
              className="group inline-flex items-center px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-medium hover:bg-white/5 hover:border-gray-500 transition-all duration-300 card-hover relative overflow-hidden"
            >
              <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <span className="relative z-10">View Complete Portfolio Gallery</span>
              <ArrowRight size={20} className="ml-2 relative z-10 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-white/5 backdrop-blur border border-gray-700 text-gray-300 text-sm font-semibold relative overflow-hidden">
              <div className="absolute inset-0 sword-shimmer opacity-20"></div>
              <Building2 size={18} className="mr-2 relative z-10" /> 
              <span className="relative z-10">Project Categories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Specialized <span className="solutions-text">Solutions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Tailored solutions for diverse architectural requirements across sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((type, index) => (
              <div
                key={index}
                className="animate-on-scroll group bg-white/5 backdrop-blur-md rounded-2xl p-8 text-center card-hover border border-gray-700 hover:border-gray-600 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="w-16 h-16 rounded-full silver-gradient flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform relative overflow-hidden">
                  <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                  <type.icon className="text-gray-900 relative z-10" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors relative z-10">{type.title}</h3>
                <p className="text-gray-400 mb-4 text-sm relative z-10">{type.description}</p>
                <div className="text-2xl font-bold text-gray-300 mb-2 relative z-10">{type.projects}</div>
                <div className="text-sm text-gray-500 relative z-10">Completed Projects</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden sword-gradient">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-700 rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600 rounded-full mix-blend-overlay filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm text-white text-sm font-semibold border border-gray-600 relative overflow-hidden">
              <div className="absolute inset-0 sword-shimmer opacity-30"></div>
              <Star size={18} className="mr-2 relative z-10" />
              <span className="relative z-10">Client Testimonials</span>
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
                className="animate-on-scroll bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-600 card-hover relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="flex mb-4 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-gray-400 fill-gray-400 mr-1" />
                  ))}
                </div>
                <div className="text-white mb-6 text-lg italic leading-relaxed relative z-10">"{testimonial.quote}"</div>
                <div className="border-t border-gray-600 pt-6 relative z-10">
                  <div className="text-gray-300 font-medium">{testimonial.client}</div>
                  <div className="text-gray-400 text-sm">{testimonial.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <div className="sword-gradient rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
              <div className="grid lg:grid-cols-2">
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-gray-600 relative overflow-hidden">
                    <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                    <Sparkles size={18} className="mr-2 text-gray-300 relative z-10" />
                    <span className="text-gray-300 relative z-10">Next Project</span>
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
                      className="group px-8 py-4 silver-gradient text-gray-900 rounded-xl font-medium hover:shadow-xl transition-all duration-300 flex items-center space-x-3 card-hover border border-gray-300 relative overflow-hidden silver-button-shine"
                    >
                      <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                      <span className="relative z-10">Request a Quote</span>
                      <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                    </Link>
                    
                    <Link
                      to="/services"
                      className="group px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center space-x-3 card-hover relative overflow-hidden"
                    >
                      <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      <span className="relative z-10">Our Services</span>
                      <ChevronRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
                
                <div className="relative h-64 lg:h-auto min-h-[300px] bg-gradient-to-r from-gray-900/80 to-gray-800/80">
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-600 animate-float relative overflow-hidden">
                        <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        <Award className="text-white relative z-10" size={32} />
                      </div>
                      <p className="text-2xl font-bold text-white mb-2">Your Vision</p>
                      <p className="text-gray-300">Our Expertise</p>
                      <div className="mt-8 grid grid-cols-2 gap-4 max-w-xs mx-auto">
                        <div className="text-center p-3 bg-white/5 rounded-xl border border-gray-600 relative overflow-hidden group">
                          <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                          <div className="text-lg font-bold text-white relative z-10">15+</div>
                          <div className="text-xs text-gray-300 relative z-10">Years Experience</div>
                        </div>
                        <div className="text-center p-3 bg-white/5 rounded-xl border border-gray-600 relative overflow-hidden group">
                          <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                          <div className="text-lg font-bold text-white relative z-10">50+</div>
                          <div className="text-xs text-gray-300 relative z-10">Projects</div>
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

export default Portfolio;