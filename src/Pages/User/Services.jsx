import React from 'react'
import { Package, Settings, Layers, Hammer, ChevronRight, CheckCircle2, Sparkles, Target, Award, Zap, Shield, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Services() {
  const products = [
    {
      title: 'Porcelain Tiles',
      description: 'Durable, non-porous tiles made from refined clay and fired at high temperatures. Waterproof, stain-resistant, suitable for floors and walls.',
      sizes: ['200 × 1200 mm', '600 × 600 mm', '600 × 1200 mm', '800 × 1600 mm'],
      icon: Layers,
      color: 'from-[#00C896] to-[#06D6A0]',
      features: ['Waterproof', 'Stain-resistant', 'High durability', 'Low maintenance']
    },
    {
      title: 'Porcelain Tiles Fabrication',
      description: 'Custom cutting, shaping, and customizing using advanced CNC routers and 5-axis water jet machines.',
      services: ['Custom dimensions', 'Steps & Skirting', 'Special edges', 'Drainer grooves'],
      icon: Settings,
      color: 'from-[#FF6B6B] to-[#FF8E53]',
      features: ['Precision CNC', 'Waterjet cutting', 'Custom profiles', 'Quick turnaround']
    },
    {
      title: 'Slab Tiles',
      description: 'Large-format porcelain tiles for seamless surfaces. Minimal grout lines, high durability, resistance to scratches and moisture.',
      features: ['Minimal grout lines', 'High durability', 'Low maintenance', 'Wide range of designs'],
      icon: Package,
      color: 'from-[#4ECDC4] to-[#44A08D]',
      benefits: ['Seamless look', 'Easy cleaning', 'Modern aesthetic', 'Versatile applications']
    },
    {
      title: 'Ceramic Tiles',
      description: 'High-quality tiles fired at high temperatures. Available in vitrified and unglazed forms. Highly resistant to heat shock.',
      sizes: ['300 × 300 mm', '300 × 600 mm'],
      icon: Layers,
      color: 'from-[#FFD166] to-[#FFB347]',
      features: ['Heat resistant', 'Cost-effective', 'Easy installation', 'Variety of finishes']
    },
    {
      title: 'Outdoor Heavy-Duty Tiles',
      description: '20mm thick flooring designed for seamless indoor-to-outdoor transitions. Impervious to water, frost and weather resistant, anti-slip surface.',
      features: ['Weather resistant', 'Anti-slip', 'No warping', 'Suitable for patios & driveways'],
      icon: Hammer,
      color: 'from-[#118AB2] to-[#073B4C]',
      benefits: ['All-weather use', 'High safety', 'Minimal expansion', 'Long lifespan']
    },
    {
      title: 'Mosaic Fabrications',
      description: 'Small decorative pieces made from glass, ceramic, stone, and porcelain. Unlimited design possibilities with intricate patterns.',
      features: ['Artistic installations', 'High durability', 'Water resistance', 'Indoor & outdoor use'],
      icon: Package,
      color: 'from-[#9D4EDD] to-[#7B2CBF]',
      applications: ['Feature walls', 'Pool borders', 'Backsplashes', 'Artistic floors']
    },
    {
      title: 'Swimming Pool Tiles & Mosaics',
      description: 'Sourced from Italian, Spanish, and Chinese manufacturers. Excellent color stability, full water resistance, anti-fade properties.',
      features: ['Color stability', 'Water resistant', 'Long-lasting', 'Premium quality'],
      icon: Droplets,
      color: 'from-[#00B4D8] to-[#0077B6]',
      benefits: ['No fading', 'Easy cleaning', 'Safe surfaces', 'Premium aesthetics']
    },
    {
      title: 'Marble & Granite',
      description: 'Natural stone with prominent veining. Marble offers elegant asymmetry and unique character. Granite features speckled patterns.',
      features: ['Natural patterns', 'Elegant asymmetry', 'Unique character', 'Durable'],
      icon: Package,
      color: 'from-[#E0AAFF] to-[#9D4EDD]',
      varieties: ['Carrara', 'Calacatta', 'Statuario', 'Imperial']
    },
    {
      title: 'Marble Countertops & Fabrications',
      description: 'Professional countertop shaping and edge finishing. Various edge profiles and finishes available for functional and aesthetic requirements.',
      features: ['Countertop shaping', 'Edge finishing', 'Mitered edges', 'Custom profiles'],
      icon: Settings,
      color: 'from-[#F15BB5] to-[#9B5DE5]',
      profiles: ['Bullnose', 'Bevel', 'Ogee', 'Waterfall']
    },
    {
      title: 'Sanitary Ware',
      description: 'RAK Sanitaryware for premium quality and superior strength. Indian sanitaryware for competitive pricing and modern design.',
      features: ['Premium quality', 'Superior strength', 'Long-term durability', 'Modern design'],
      icon: Package,
      color: 'from-[#00BBF9] to-[#00F5D4]',
      brands: ['RAK', 'Simpolo', 'Volark', 'TOTO']
    },
    {
      title: 'Bathroom Fittings',
      description: 'Complete range of plumbing fixtures and accessories. Includes mixers, taps, valves, and concealed systems.',
      features: ['Safe wastewater flow', 'Odor prevention', 'Efficient water control', 'Modern designs'],
      icon: Settings,
      color: 'from-[#FF9E00] to-[#FF5400]',
      types: ['Mixers', 'Showers', 'Accessories', 'Concealed systems']
    },
  ];

  const fabricationServices = [
    {
      title: 'Precision Cutting',
      description: 'Advanced CNC routers and water jet machines for custom dimensions and project-specific solutions',
      icon: Settings,
      color: 'from-[#FF6B6B] to-[#FF8E53]'
    },
    {
      title: 'Customization',
      description: 'Steps, skirting, slab resizing, and tailored solutions for your specific project requirements',
      icon: Package,
      color: 'from-[#4ECDC4] to-[#44A08D]'
    },
    {
      title: 'Profiling & Grooving',
      description: 'Special edges, drainer grooves, and functional and aesthetic detailing for perfect finishes',
      icon: Layers,
      color: 'from-[#FFD166] to-[#FFB347]'
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
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
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
        .product-card {
          transition: all 0.4s ease;
        }
        .product-card:hover {
          transform: translateY(-5px) scale(1.02);
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
              <Package size={18} className="mr-2 text-[#FFD700]" />
              <span className="text-[#FFD700]">Premium Solutions</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Products & <span className="gold-gradient bg-clip-text text-transparent">Services</span>
            </h1>
            <div className="w-24 h-1 gold-gradient mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
              Comprehensive range of premium tiles, sanitary ware, and specialized fabrication services for every project requirement
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white/50 backdrop-blur-sm sticky top-0 z-20 border-b border-[#F0E6D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'gold-gradient text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="animate-on-scroll product-card bg-white rounded-2xl shadow-sm overflow-hidden card-hover border border-[#F0E6D2]"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${product.color} flex items-center justify-center`}>
                      <product.icon className="text-white" size={24} />
                    </div>
                    <div className="px-3 py-1 bg-[#F5EFE0] text-[#B8860B] text-xs font-medium rounded-full">
                      Featured
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#2C1C10] mb-4">{product.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{product.description}</p>
                  
                  <div className="space-y-4">
                    {product.sizes && (
                      <div>
                        <div className="text-xs font-medium text-[#B8860B] mb-2">AVAILABLE SIZES</div>
                        <div className="flex flex-wrap gap-2">
                          {product.sizes.map((size, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {product.features && (
                      <div>
                        <div className="text-xs font-medium text-[#B8860B] mb-2">KEY FEATURES</div>
                        <div className="space-y-2">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle2 size={14} className="text-[#00C896] mr-2 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {product.benefits && (
                      <div>
                        <div className="text-xs font-medium text-[#B8860B] mb-2">BENEFITS</div>
                        <div className="flex flex-wrap gap-2">
                          {product.benefits.map((benefit, idx) => (
                            <span key={idx} className="px-2 py-1 bg-[#F5EFE0] text-[#B8860B] text-xs rounded-full">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-sm text-[#B8860B] hover:text-[#2C1C10] transition-colors font-medium"
                    >
                      Request Sample
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-[#FAF7F0] to-[#F5EFE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm">
              <Settings size={18} className="mr-2 text-[#B8860B]" />
              <span className="text-[#B8860B] font-medium">Custom Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2C1C10]">
              Precision <span className="gold-gradient bg-clip-text text-transparent">Fabrication</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Advanced customization services to meet your exact project specifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fabricationServices.map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-white rounded-2xl shadow-lg p-8 card-hover border border-[#F0E6D2]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 mx-auto`}>
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-center text-[#2C1C10] mb-4">{service.title}</h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#2C1C10] via-[#3D2817] to-[#2C1C10] rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-16">
                <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                  <Sparkles size={18} className="mr-2 text-[#FFD700]" />
                  <span className="text-[#FFD700]">Why Choose Us</span>
                </div>
                
                <h2 className="text-4xl font-bold text-white mb-6">
                  Beyond <span className="gold-gradient bg-clip-text text-transparent">Products</span>
                </h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-white/10 mr-4">
                      <Award className="text-[#FFD700]" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Quality Assurance</h4>
                      <p className="text-gray-300 text-sm">All products meet international BS / EN and ANSI / ASTM standards</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-white/10 mr-4">
                      <Zap className="text-[#FFD700]" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Fast Delivery</h4>
                      <p className="text-gray-300 text-sm">Immediate stock availability from our Sharjah warehouse</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-white/10 mr-4">
                      <Shield className="text-[#FFD700]" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Expert Support</h4>
                      <p className="text-gray-300 text-sm">Technical guidance and project consultation from concept to completion</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="group px-8 py-4 gold-gradient text-[#2C1C10] rounded-xl font-medium hover:shadow-xl transition-all duration-300 flex items-center space-x-3"
                  >
                    <span>Request Consultation</span>
                    <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                  
                  <a
                    href="tel:+971557234180"
                    className="group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center space-x-3"
                  >
                    <span>Call Now: +971 55 723 4180</span>
                  </a>
                </div>
              </div>
              
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2C1C10] to-transparent lg:from-transparent lg:via-[#2C1C10]/50 lg:to-[#2C1C10] z-10"></div>
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                      <Target className="text-white" size={32} />
                    </div>
                    <p className="text-2xl font-bold text-[#2C1C10] mb-2">Custom Solutions</p>
                    <p className="text-gray-600">Tailored to your needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#2C1C10]">
              Need a <span className="gold-gradient bg-clip-text text-transparent">Custom Solution</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
              Our team specializes in creating tailored solutions for unique project requirements
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/portfolio"
                className="group px-8 py-4 bg-[#2C1C10] text-white rounded-xl font-medium hover:shadow-xl transition-all duration-300 flex items-center space-x-3"
              >
                <span>View Our Projects</span>
                <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="group px-8 py-4 border-2 border-[#D4AF37] text-[#2C1C10] rounded-xl font-medium hover:bg-[#F5EFE0] transition-all duration-300 flex items-center space-x-3"
              >
                <span>Get Expert Advice</span>
                <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}