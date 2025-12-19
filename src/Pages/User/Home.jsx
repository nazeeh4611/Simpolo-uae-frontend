import React from 'react'
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Award, Clock, Shield } from 'lucide-react';
import { ImageWithFallback } from '../../Util/Fallback';
import { useEffect } from 'react';

export function Home() {
  const features = [
    { 
      icon: Shield,
      title: 'Direct Manufacturing Access',
      description: 'Full control over production quality and timelines'
    },
    { 
      icon: Award,
      title: 'International Standards',
      description: 'BS / EN and ANSI / ASTM certified products'
    },
    { 
      icon: Clock,
      title: 'UAE Fabrication Facility',
      description: 'Rapid customization and fast delivery'
    },
    { 
      icon: Sparkles,
      title: 'Immediate Stock Availability',
      description: 'Ready-to-ship inventory in Sharjah warehouse'
    }
  ];

  const products = [
    {
      src: 'https://images.unsplash.com/photo-1590880265945-6b43effeb599?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMHRpbGVzfGVufDF8fHx8MTc2NjA3MjM0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Porcelain Tiles',
      description: 'Durable and non-porous tiles in various sizes and finishes',
      link: '/services/porcelain-tiles',
      tag: 'Premium'
    },
    {
      src: 'https://images.unsplash.com/photo-1669643219984-2ff3eea887a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjB0aWxlJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjYxMjQ4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Marble & Granite',
      description: 'Natural stone with elegant patterns and timeless appeal',
      link: '/services/marble-granite',
      tag: 'Luxury'
    },
    {
      src: 'https://images.unsplash.com/photo-1753723907358-c1d346aff7a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjB0aWxlfGVufDF8fHx8MTc2NjEyNDgwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Swimming Pool Tiles',
      description: 'Color-stable, water-resistant tiles for pools and spas',
      link: '/services/pool-tiles',
      tag: 'Specialty'
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
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
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
        .grid-item {
          transition: all 0.4s ease;
        }
        .grid-item:hover {
          transform: translateY(-5px);
        }
      `}</style>

      <section className="relative min-h-screen hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1728486885790-1454260d9246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Luxury tiles showroom"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C1C10]/90 via-[#3D2817]/80 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center pt-24 pb-16">
          <div className="animate-on-scroll max-w-3xl">
            <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
              <Sparkles size={18} className="mr-2 text-[#FFD700]" />
              <span className="text-[#FFD700]">Premier Tile Solutions</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              SIMPOLO <span className="gold-gradient bg-clip-text text-transparent">TRADING</span> LLC
            </h1>
            
            <div className="w-24 h-1 gold-gradient mb-8 rounded-full"></div>
            
            <p className="text-xl md:text-2xl mb-8 text-[#FFD700] font-medium">
              Crafted for Excellence, Designed for Perfection
            </p>
            
            <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl leading-relaxed">
              Your trusted partner for premium tiles, sanitary ware, and bathroom fittings across the UAE. 
              Delivering exceptional quality through direct manufacturing and innovative solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group px-8 py-4 gold-gradient text-[#2C1C10] rounded-xl font-medium hover:shadow-xl transition-all duration-300 flex items-center space-x-3 card-hover"
              >
                <span>Get in Touch</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link
                to="/services"
                className="group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center space-x-3"
              >
                <span>View Products</span>
                <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-12">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="animate-on-scroll bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg gold-gradient">
                      <feature.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-medium">{feature.title}</div>
                      <div className="text-sm text-gray-300 mt-1">{feature.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-[#F5EFE0] text-[#B8860B] text-sm font-medium">
                <Award size={18} className="mr-2" /> Our Story
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2C1C10]">
                Pioneering <span className="gold-gradient bg-clip-text text-transparent">Excellence</span> in Tile Solutions
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  Simpolo Trading LLC is a UAE-based trading and project-focused supply company with direct access to its own manufacturing operations.
                </p>
                <p>
                  We operate our own production unit in India with advanced technology meeting BS / EN and ANSI / ASTM standards, ensuring exceptional quality and innovative design capability.
                </p>
                <p>
                  With a dedicated fabrication facility in ICAD, Abu Dhabi, we provide rapid customization and reliable delivery across the Emirates.
                </p>
              </div>
              
              <Link
                to="/about"
                className="group inline-flex items-center mt-8 px-6 py-3 bg-[#2C1C10] text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
              >
                <span>Discover Our Journey</span>
                <ChevronRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            
            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1531586024505-b040066c2d5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Dubai building"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2C1C10] to-transparent p-8 text-white">
                  <div className="text-lg font-medium">Established in Dubai</div>
                  <div className="text-sm text-gray-300">Serving the UAE since inception</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#FAF7F0] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2C1C10]">
              Premium <span className="gold-gradient bg-clip-text text-transparent">Collections</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our curated selection of high-quality materials and innovative tile solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="group animate-on-scroll grid-item bg-white rounded-2xl shadow-sm overflow-hidden card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={product.src}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 gold-gradient text-white text-xs font-medium rounded-full">
                      {product.tag}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2C1C10] mb-3 group-hover:text-[#B8860B] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-[#B8860B] font-medium flex items-center">
                      Explore Collection
                      <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="text-xs text-gray-500">Featured</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Link
              to="/services"
              className="group inline-flex items-center px-8 py-4 border-2 border-[#D4AF37] text-[#2C1C10] rounded-xl font-medium hover:bg-[#F5EFE0] transition-all duration-300"
            >
              <span>View All Product Categories</span>
              <ChevronRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C1C10] via-[#3D2817] to-[#2C1C10]"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FFD700] rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#D4AF37] rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to <span className="gold-gradient bg-clip-text text-transparent">Transform</span> Your Space?
            </h2>
            <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Get in touch with our team today and let us help you bring your vision to life with premium tile solutions
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-white text-[#2C1C10] rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-3"
              >
                <span>Contact Our Experts</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link
                to="/gallery"
                className="group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center space-x-3"
              >
                <span>View Our Projects</span>
                <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FFD700]">24/7</div>
                  <div className="text-sm text-gray-300">Project Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FFD700]">500+</div>
                  <div className="text-sm text-gray-300">Successful Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FFD700]">100%</div>
                  <div className="text-sm text-gray-300">Quality Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}