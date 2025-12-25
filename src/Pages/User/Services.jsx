import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Package, Settings, Layers, Hammer, ChevronRight, CheckCircle2, Sparkles, Target, Award, Zap, Shield, Droplets, Users, Globe, Building, CheckCircle, Truck, Clock, MapPin, Phone, Mail, TrendingUp, Heart, ArrowRight } from 'lucide-react';
import Typewriter from 'typewriter-effect';

function Services() {
  const products = [
    {
      title: 'Porcelain Tiles',
      description: 'Durable, non-porous tiles made from refined clay and fired at high temperatures. Waterproof, stain-resistant, suitable for floors and walls.',
      sizes: ['200 × 1200 mm', '600 × 600 mm', '600 × 1200 mm', '800 × 1600 mm'],
      icon: Layers,
      features: ['Waterproof', 'Stain-resistant', 'High durability', 'Low maintenance']
    },
    {
      title: 'Porcelain Tiles Fabrication',
      description: 'Custom cutting, shaping, and customizing using advanced CNC routers and 5-axis water jet machines.',
      services: ['Custom dimensions', 'Steps & Skirting', 'Special edges', 'Drainer grooves'],
      icon: Settings,
      features: ['Precision CNC', 'Waterjet cutting', 'Custom profiles', 'Quick turnaround']
    },
    {
      title: 'Slab Tiles',
      description: 'Large-format porcelain tiles for seamless surfaces. Minimal grout lines, high durability, resistance to scratches and moisture.',
      features: ['Minimal grout lines', 'High durability', 'Low maintenance', 'Wide range of designs'],
      icon: Package,
      benefits: ['Seamless look', 'Easy cleaning', 'Modern aesthetic', 'Versatile applications']
    },
    {
      title: 'Ceramic Tiles',
      description: 'High-quality tiles fired at high temperatures. Available in vitrified and unglazed forms. Highly resistant to heat shock.',
      sizes: ['300 × 300 mm', '300 × 600 mm'],
      icon: Layers,
      features: ['Heat resistant', 'Cost-effective', 'Easy installation', 'Variety of finishes']
    },
    {
      title: 'Outdoor Heavy-Duty Tiles',
      description: '20mm thick flooring designed for seamless indoor-to-outdoor transitions. Impervious to water, frost and weather resistant, anti-slip surface.',
      features: ['Weather resistant', 'Anti-slip', 'No warping', 'Suitable for patios & driveways'],
      icon: Hammer,
      benefits: ['All-weather use', 'High safety', 'Minimal expansion', 'Long lifespan']
    },
    {
      title: 'Mosaic Fabrications',
      description: 'Small decorative pieces made from glass, ceramic, stone, and porcelain. Unlimited design possibilities with intricate patterns.',
      features: ['Artistic installations', 'High durability', 'Water resistance', 'Indoor & outdoor use'],
      icon: Package,
      applications: ['Feature walls', 'Pool borders', 'Backsplashes', 'Artistic floors']
    },
    {
      title: 'Swimming Pool Tiles & Mosaics',
      description: 'Sourced from Italian, Spanish, and Chinese manufacturers. Excellent color stability, full water resistance, anti-fade properties.',
      features: ['Color stability', 'Water resistant', 'Long-lasting', 'Premium quality'],
      icon: Droplets,
      benefits: ['No fading', 'Easy cleaning', 'Safe surfaces', 'Premium aesthetics']
    },
    {
      title: 'Marble & Granite',
      description: 'Natural stone with prominent veining. Marble offers elegant asymmetry and unique character. Granite features speckled patterns.',
      features: ['Natural patterns', 'Elegant asymmetry', 'Unique character', 'Durable'],
      icon: Package,
      varieties: ['Carrara', 'Calacatta', 'Statuario', 'Imperial']
    },
    {
      title: 'Marble Countertops & Fabrications',
      description: 'Professional countertop shaping and edge finishing. Various edge profiles and finishes available for functional and aesthetic requirements.',
      features: ['Countertop shaping', 'Edge finishing', 'Mitered edges', 'Custom profiles'],
      icon: Settings,
      profiles: ['Bullnose', 'Bevel', 'Ogee', 'Waterfall']
    },
    {
      title: 'Sanitary Ware',
      description: 'RAK Sanitaryware for premium quality and superior strength. Indian sanitaryware for competitive pricing and modern design.',
      features: ['Premium quality', 'Superior strength', 'Long-term durability', 'Modern design'],
      icon: Package,
      brands: ['RAK', 'Simpolo', 'Volark', 'TOTO']
    },
    {
      title: 'Bathroom Fittings',
      description: 'Complete range of plumbing fixtures and accessories. Includes mixers, taps, valves, and concealed systems.',
      features: ['Safe wastewater flow', 'Odor prevention', 'Efficient water control', 'Modern designs'],
      icon: Settings,
      types: ['Mixers', 'Showers', 'Accessories', 'Concealed systems']
    },
  ];

  const fabricationServices = [
    {
      title: 'Precision Cutting',
      description: 'Advanced CNC routers and water jet machines for custom dimensions and project-specific solutions',
      icon: Settings,
    },
    {
      title: 'Customization',
      description: 'Steps, skirting, slab resizing, and tailored solutions for your specific project requirements',
      icon: Package,
    },
    {
      title: 'Profiling & Grooving',
      description: 'Special edges, drainer grooves, and functional and aesthetic detailing for perfect finishes',
      icon: Layers,
    }
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const categories = ['All', 'Tiles', 'Fabrication', 'Stone', 'Sanitary', 'Specialty'];

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

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProducts(products);
      return;
    }
    
    const filtered = products.filter(product => {
      const productCategories = {
        'Tiles': ['Porcelain Tiles', 'Ceramic Tiles', 'Slab Tiles', 'Outdoor Heavy-Duty Tiles'],
        'Fabrication': ['Porcelain Tiles Fabrication', 'Mosaic Fabrications'],
        'Stone': ['Marble & Granite', 'Marble Countertops & Fabrications'],
        'Sanitary': ['Sanitary Ware', 'Bathroom Fittings'],
        'Specialty': ['Swimming Pool Tiles & Mosaics']
      };
      
      return productCategories[activeCategory]?.includes(product.title);
    });
    
    setFilteredProducts(filtered);
  }, [activeCategory]);

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
        .product-card {
          transition: all 0.4s ease;
        }
        .product-card:hover {
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
        .services-text {
          display: inline-block;
          background: linear-gradient(135deg, #c0c0c0 0%, #d4d4d4 50%, #e8e8e8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        .fabrication-text {
          display: inline-block;
          background: linear-gradient(135deg, #c0c0c0 0%, #d4d4d4 50%, #e8e8e8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        .solution-text {
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
              <Package size={18} className="mr-2 text-gray-400 relative z-10" />
              <span className="text-gray-400 font-medium relative z-10">Premium Solutions</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Products & <span className="services-text">Services</span>
            </h1>

            <div className="w-32 h-1.5 silver-gradient mb-8 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 sword-shimmer"></div>
            </div>

            <div className="text-2xl md:text-3xl mb-8 text-gray-300 font-semibold h-12">
              <Typewriter
                options={{
                  strings: [
                    'Comprehensive Tile Solutions',
                    'Premium Quality Materials',
                    'Custom Fabrication Services',
                    'Expert Technical Support',
                    'Timely Delivery Guaranteed',
                    'End-to-End Project Solutions'
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
              Discover our extensive range of premium tiles, sanitary ware, and specialized fabrication services. 
              From residential renovations to large-scale commercial projects, we provide comprehensive solutions 
              tailored to your specific requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white/5 backdrop-blur-sm sticky top-0 z-20 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all border relative overflow-hidden group ${
                  activeCategory === category
                    ? 'silver-gradient text-gray-900 border-gray-300'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-300 border border-gray-700'
                }`}
              >
                {activeCategory === category && (
                  <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="animate-on-scroll product-card bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden card-hover border border-gray-700 hover:border-gray-500 relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="p-8 relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl silver-gradient flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                      <product.icon className="text-gray-900 relative z-10" size={24} />
                    </div>
                    <div className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-medium rounded-full border border-gray-700">
                      Featured
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 hover:text-gray-300 transition-colors relative z-10">{product.title}</h3>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed relative z-10">{product.description}</p>
                  
                  <div className="space-y-4 relative z-10">
                    {product.sizes && (
                      <div>
                        <div className="text-xs font-medium text-gray-400 mb-2">AVAILABLE SIZES</div>
                        <div className="flex flex-wrap gap-2">
                          {product.sizes.map((size, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full hover:bg-white/10 hover:text-gray-200 transition-colors border border-gray-700">
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {product.features && (
                      <div>
                        <div className="text-xs font-medium text-gray-400 mb-2">KEY FEATURES</div>
                        <div className="space-y-2">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center group">
                              <CheckCircle2 size={14} className="text-gray-500 mr-2 flex-shrink-0 group-hover:scale-110 transition-transform" />
                              <span className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {product.benefits && (
                      <div>
                        <div className="text-xs font-medium text-gray-400 mb-2">BENEFITS</div>
                        <div className="flex flex-wrap gap-2">
                          {product.benefits.map((benefit, idx) => (
                            <span key={idx} className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded-full hover:bg-white/10 transition-colors border border-gray-700">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-700 relative z-10">
                    <Link
                      to="/contact"
                      className="group inline-flex items-center text-sm text-gray-400 hover:text-gray-300 transition-colors font-medium"
                    >
                      Request Sample
                      <ChevronRight size={16} className="ml-1 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-white/5 backdrop-blur border border-gray-700 text-gray-300 text-sm font-semibold relative overflow-hidden">
              <div className="absolute inset-0 sword-shimmer opacity-20"></div>
              <Settings size={18} className="mr-2 relative z-10" /> 
              <span className="relative z-10">Custom Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Precision <span className="fabrication-text">Fabrication</span> Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Advanced customization services to meet your exact project specifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fabricationServices.map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-white/5 backdrop-blur-md rounded-2xl p-8 card-hover border border-gray-700 hover:border-gray-600 relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="w-16 h-16 rounded-xl silver-gradient flex items-center justify-center mb-6 mx-auto relative overflow-hidden">
                  <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                  <service.icon className="text-gray-900 relative z-10" size={28} />
                </div>
                <h3 className="text-xl font-bold text-center text-white mb-4 relative z-10">{service.title}</h3>
                <p className="text-gray-400 text-center text-sm leading-relaxed relative z-10">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sword-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-600">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-16">
                <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-gray-600 relative overflow-hidden">
                  <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                  <Sparkles size={18} className="mr-2 text-gray-300 relative z-10" />
                  <span className="text-gray-300 relative z-10">Why Choose Us</span>
                </div>
                
                <h2 className="text-4xl font-bold text-white mb-6">
                  Beyond <span className="text-gray-300">Products</span>
                </h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-white/10 mr-4">
                      <Award className="text-gray-300" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Quality Assurance</h4>
                      <p className="text-gray-300 text-sm">All products meet international BS / EN and ANSI / ASTM standards</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-white/10 mr-4">
                      <Truck className="text-gray-300" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Fast Delivery</h4>
                      <p className="text-gray-300 text-sm">Immediate stock availability from our Sharjah warehouse</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-white/10 mr-4">
                      <Shield className="text-gray-300" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Expert Support</h4>
                      <p className="text-gray-300 text-sm">Technical guidance and project consultation from concept to completion</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-white/10 mr-4">
                      <Clock className="text-gray-300" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Timely Response</h4>
                      <p className="text-gray-300 text-sm">Quick quotes and responsive customer service</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="group px-8 py-4 silver-gradient text-gray-900 rounded-xl font-medium hover:shadow-xl transition-all duration-300 flex items-center space-x-3 card-hover border border-gray-300 relative overflow-hidden silver-button-shine"
                  >
                    <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                    <span className="relative z-10">Request Consultation</span>
                    <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                  </Link>
                  
                  <a
                    href="tel:+971557234180"
                    className="group px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center space-x-3 card-hover relative overflow-hidden"
                  >
                    <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <span className="relative z-10">Call Now: +971 55 723 4180</span>
                  </a>
                </div>
              </div>
              
              <div className="relative h-64 lg:h-auto min-h-[300px] bg-gradient-to-r from-gray-900/80 to-gray-800/80">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-600 relative overflow-hidden">
                      <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      <Target className="text-white relative z-10" size={32} />
                    </div>
                    <p className="text-2xl font-bold text-white mb-2">Custom Solutions</p>
                    <p className="text-gray-300">Tailored to your specific project needs</p>
                    <div className="mt-8 grid grid-cols-2 gap-4 max-w-xs mx-auto">
                      <div className="text-center p-4 bg-white/5 rounded-xl border border-gray-600 relative overflow-hidden group">
                        <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        <div className="text-xl font-bold text-white relative z-10">300+</div>
                        <div className="text-sm text-gray-300 relative z-10">Projects</div>
                      </div>
                      <div className="text-center p-4 bg-white/5 rounded-xl border border-gray-600 relative overflow-hidden group">
                        <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        <div className="text-xl font-bold text-white relative z-10">15+</div>
                        <div className="text-sm text-gray-300 relative z-10">Years Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 animate-on-scroll">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 card-hover border border-gray-700 relative overflow-hidden group">
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="flex items-center mb-8 relative z-10">
                  <div className="p-3 rounded-xl silver-gradient mr-4 relative overflow-hidden">
                    <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                    <Heart className="text-gray-900 relative z-10" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-white relative z-10">Customer Commitment</h3>
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg relative z-10">
                  We serve residential, commercial, hospitality, and government projects with 
                  personalized solutions, technical support, and comprehensive after-sales service.
                  Our team is dedicated to ensuring your complete satisfaction from concept to completion.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                  {['Free Consultation', 'Custom Designs', 'Installation Support', '10-Year Warranty', 
                    'Technical Guidance', 'Project Management', 'Quality Assurance', 'Timely Delivery'].map((item, idx) => (
                    <div key={idx} className="flex items-center text-sm group">
                      <CheckCircle size={16} className="text-gray-500 mr-2 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-300 group-hover:text-gray-200 transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="silver-gradient-dark rounded-2xl p-8 h-full card-hover border border-gray-600 relative overflow-hidden group">
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 relative z-10">Quick Contact</h3>
                <p className="text-gray-700 mb-8 leading-relaxed relative z-10">Get in touch with our team for expert advice and quotes</p>
                
                <div className="space-y-4 mb-8 relative z-10">
                  <div className="flex items-center text-gray-800">
                    <Phone size={18} className="mr-3 text-gray-600" />
                    <span>+971 55 723 4180</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <Mail size={18} className="mr-3 text-gray-600" />
                    <span>info@simpolotrading.com</span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <Clock size={18} className="mr-3 text-gray-600" />
                    <span>Sun - Thu: 8 AM - 6 PM</span>
                  </div>
                </div>
                
                <Link
                  to="/contact"
                  className="group w-full px-6 py-4 sword-gradient text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-700 relative overflow-hidden silver-button-shine"
                >
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <span className="relative z-10">Schedule a Consultation</span>
                </Link>
                <div className="mt-6 text-center relative z-10">
                  <div className="text-sm text-gray-600">Response within 24 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-white/5 backdrop-blur border border-gray-700 text-gray-300 text-sm font-semibold relative overflow-hidden">
              <div className="absolute inset-0 sword-shimmer opacity-20"></div>
              <TrendingUp size={18} className="mr-2 relative z-10" /> 
              <span className="relative z-10">Our Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Need a <span className="solution-text">Custom Solution</span>?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
              Our team specializes in creating tailored solutions for unique project requirements
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/portfolio"
                className="group px-8 py-4 sword-gradient text-white rounded-xl font-medium hover:shadow-xl transition-all duration-300 card-hover flex items-center space-x-3 border border-gray-700 relative overflow-hidden silver-button-shine"
              >
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <span className="relative z-10">View Our Projects</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="group px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-medium hover:bg-white/5 transition-all duration-300 flex items-center space-x-3 card-hover relative overflow-hidden"
              >
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <span className="relative z-10">Get Expert Advice</span>
                <ChevronRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;