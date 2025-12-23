import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Sparkles, Award, Clock, Shield, Star, TrendingUp, Users, Zap, Package, Globe, Truck, CheckCircle, Home, Building, Hotel, ShoppingBag, Phone, Mail, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../../Util/Fallback';
import Typewriter from 'typewriter-effect';

function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

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
    },
    {
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      title: 'Bathroom Fittings',
      description: 'Premium sanitary ware and modern bathroom solutions',
      link: '/services/bathroom-fittings',
      tag: 'Luxury'
    },
    {
      src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      title: 'Kitchen Tiles',
      description: 'Heat-resistant and easy-to-clean kitchen solutions',
      link: '/services/kitchen-tiles',
      tag: 'Premium'
    },
    {
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
      title: 'Commercial Tiles',
      description: 'High-traffic resistant tiles for commercial spaces',
      link: '/services/commercial-tiles',
      tag: 'Commercial'
    }
  ];

  const showcaseImages = [
    {
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      title: 'Modern Living Spaces',
      category: 'Residential'
    },
    {
      src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      title: 'Luxury Bathroom Design',
      category: 'Premium'
    },
    {
      src: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
      title: 'Commercial Excellence',
      category: 'Commercial'
    },
    {
      src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
      title: 'Kitchen Elegance',
      category: 'Interior'
    },
    {
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
      title: 'Hotel Lobby',
      category: 'Hospitality'
    },
    {
      src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
      title: 'Office Spaces',
      category: 'Corporate'
    },
    {
      src: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=800&q=80',
      title: 'Shopping Mall',
      category: 'Retail'
    },
    {
      src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
      title: 'Luxury Villa',
      category: 'Premium'
    }
  ];

  const stats = [
    { icon: Star, value: '500+', label: 'Completed Projects' },
    { icon: Users, value: '300+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' }
  ];

  const services = [
    {
      icon: Home,
      title: 'Residential Projects',
      description: 'Complete tile solutions for villas, apartments, and residential complexes'
    },
    {
      icon: Building,
      title: 'Commercial Spaces',
      description: 'Durable and stylish tiles for offices, malls, and commercial buildings'
    },
    {
      icon: Hotel,
      title: 'Hospitality Industry',
      description: 'Luxury tiles for hotels, resorts, and hospitality establishments'
    },
    {
      icon: ShoppingBag,
      title: 'Retail Stores',
      description: 'Custom tile designs for retail spaces and showrooms'
    }
  ];

  const benefits = [
    'Direct factory prices',
    'Custom size and design options',
    'Quick delivery across UAE',
    'Professional installation support',
    '10-year warranty on premium tiles',
    'Free consultation and samples',
    'Project management services',
    'After-sales support'
  ];

  useEffect(() => {
    setLoaded(true);
    
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
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
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
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
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
        .hero-gradient {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 30%, #404040 70%, #2d2d2d 100%);
        }
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
        .grid-item {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .grid-item:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(192, 192, 192, 0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        .trading-text {
          display: inline-block;
          background: linear-gradient(135deg, #808080 0%, #a0a0a0 50%, #c0c0c0 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        .collections-text {
          display: inline-block;
          background: linear-gradient(135deg, #808080 0%, #a0a0a0 50%, #c0c0c0 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        .showcase-text {
          display: inline-block;
          background: linear-gradient(135deg, #808080 0%, #a0a0a0 50%, #c0c0c0 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        .excellence-text {
          display: inline-block;
          background: linear-gradient(135deg, #808080 0%, #a0a0a0 50%, #c0c0c0 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        .transform-text {
          display: inline-block;
          background: linear-gradient(135deg, #808080 0%, #a0a0a0 50%, #c0c0c0 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
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
      `}} />

<section className="relative min-h-screen overflow-hidden text-white">
  <div className="absolute inset-0 z-0">
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/ban.webp"
      className="w-full h-full object-cover"
    >
      <source
        src="https://pub-6070c66a49144147b12828af75c69a0c.r2.dev/IMG_3.mp4"
        type="video/mp4"
      />
    </video>

    <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/80 via-gray-900/70 to-black/80" />
  </div>

  <div className="absolute inset-0 z-10 pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl animate-float" />
    <div
      className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600/20 rounded-full blur-3xl animate-float"
      style={{ animationDelay: "1.5s" }}
    />
  </div>

  <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center pt-32 pb-20">
    <div className="max-w-3xl">
      <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-gray-600">
        <Sparkles size={18} className="mr-2 text-gray-300" />
        <span className="text-gray-300 font-medium">
          Premier Tile Solutions
        </span>
      </div>

      <h1 className="mb-6 leading-tight text-white">
  <div className="relative inline-block">
    <span className="block text-5xl md:text-6xl lg:text-7xl font-extrabold">
      SIMPOLO
    </span>

    <span className="absolute right-0 -bottom-6 text-base md:text-lg tracking-widest text-gray-300 font-bold">
  TRADING LLC
</span>


  </div>
</h1>


      <div className="w-32 h-1.5 silver-gradient mb-8 rounded-full" />

      <div className="text-2xl md:text-3xl mb-8 text-gray-300 font-semibold h-12">
        <Typewriter
          options={{
            strings: [
              "Crafted for Excellence",
              "Designed for Perfection",
              "Premium Tile Solutions",
              "Your Trusted Partner",
              "Innovative Designs",
              "Quality Guaranteed",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
            cursorClassName: 'typewriter-cursor'
          }}
        />
      </div>

      <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl leading-relaxed">
        Your trusted partner for premium tiles, sanitary ware, and bathroom
        fittings across the UAE. Delivering exceptional quality through direct
        manufacturing and innovative solutions with 15+ years of expertise in
        transforming spaces.
      </p>

      <div className="flex flex-wrap gap-4">
        <Link
          to="/contact"
          className="group px-8 py-4 dark-gradient rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-3 card-hover border border-gray-700"
        >
          <span>Get Free Consultation</span>
          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
        </Link>

        <Link
          to="/services"
          className="group px-8 py-4 border-2 border-gray-600 rounded-xl font-semibold hover:bg-white/10 hover:border-gray-400 transition-all duration-300 flex items-center space-x-3 card-hover"
        >
          <span>View Products</span>
          <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </div>
  </div>

  <div className="relative z-20 pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-gray-600 hover:bg-white/15 transition-all duration-300 card-hover"
          >
            <div className="flex items-start space-x-3">
              <div className="p-2.5 rounded-lg silver-gradient">
                <feature.icon className="text-gray-900" size={22} />
              </div>
              <div>
                <div className="font-semibold mb-1 text-white">{feature.title}</div>
                <div className="text-sm text-gray-300">
                  {feature.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="animate-on-scroll text-center p-6 rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer card-hover bg-white border border-gray-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full silver-gradient mb-4">
                  <stat.icon className="text-gray-900" size={24} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold border border-gray-300">
                <Award size={18} className="mr-2" /> Our Story
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Pioneering <span className="excellence-text">Excellence</span> in Tile Solutions
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Established in the heart of UAE, Simpolo Trading LLC has emerged as a leading provider 
                  of premium tiles and sanitary solutions. With over 15 years of industry experience, 
                  we combine traditional craftsmanship with modern technology.
                </p>
                <p>
                  Our state-of-the-art manufacturing facility in India employs cutting-edge technology 
                  and adheres to international standards (BS/EN, ANSI/ASTM), ensuring every product meets 
                  the highest quality benchmarks.
                </p>
                <p>
                  Our Abu Dhabi fabrication facility enables rapid customization and swift delivery 
                  across all Emirates, making us the preferred choice for architects, contractors, 
                  and interior designers.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <CheckCircle size={18} className="text-gray-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Link
                to="/about"
                className="group inline-flex items-center mt-8 px-6 py-3 dark-gradient text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 card-hover border border-gray-700"
              >
                <span>Discover Our Journey</span>
                <ChevronRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            
            <div className="animate-on-scroll relative" style={{ animationDelay: '0.2s' }}>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl card-hover border border-gray-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1531586024505-b040066c2d5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Dubai building"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="text-xl font-semibold mb-2">Serving UAE Since 2008</div>
                  <div className="text-sm text-gray-300">Transforming spaces across the Emirates</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl w-64 border border-gray-200 card-hover">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg silver-gradient mr-3">
                    <Package size={20} className="text-gray-900" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">24,000+ m²</div>
                    <div className="text-sm text-gray-600">Annual Production</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-2 rounded-lg silver-gradient mr-3">
                    <Globe size={20} className="text-gray-900" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">50+ Countries</div>
                    <div className="text-sm text-gray-600">Global Reach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Premium <span className="collections-text">Collections</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our curated selection of high-quality materials and innovative tile solutions for every space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="group animate-on-scroll grid-item relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer card-hover bg-white border border-gray-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                  <ImageWithFallback
                    src={product.src}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1.5 silver-gradient text-gray-900 text-xs font-semibold rounded-full shadow-sm border border-gray-300">
                      {product.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <h3 className="text-white text-xl font-bold mb-3 group-hover:text-gray-200 transition-colors">
                      {product.title}
                    </h3>
                    <div className="text-white/90 text-sm font-medium">
                      Explore Collection
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-700 font-semibold flex items-center">
                      View Details
                      <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <Zap size={18} className="text-gray-600" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Link
              to="/services"
              className="group inline-flex items-center px-8 py-4 dark-gradient text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 card-hover border border-gray-700"
            >
              <span>View All Product Categories</span>
              <ChevronRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-on-scroll">
              <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold border border-gray-300">
                <Building size={18} className="mr-2" /> Our Services
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Comprehensive <span className="showcase-text">Solutions</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover bg-white border border-gray-200">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full silver-gradient mb-4">
                      <service.icon className="text-gray-900" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="dark-gradient rounded-2xl p-8 text-white h-full border border-gray-700 card-hover">
                <h3 className="text-2xl font-bold mb-6 text-gray-300">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle size={18} className="text-gray-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-6 bg-white/10 rounded-xl border border-gray-700 card-hover">
                  <div className="flex items-center mb-4">
                    <Truck size={24} className="text-gray-400 mr-3" />
                    <div>
                      <div className="font-bold text-gray-300">Fast Delivery Across UAE</div>
                      <div className="text-sm text-gray-400">24-48 hours for stock items</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="showcase-text">Showcase</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Witness the transformation of spaces with our premium tile solutions across various sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {showcaseImages.map((image, index) => (
              <div
                key={index}
                className="group animate-on-scroll relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer card-hover border border-gray-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <ImageWithFallback
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                  <div className="text-xs font-semibold text-gray-300 mb-2">{image.category}</div>
                  <div className="text-lg font-bold group-hover:text-gray-200 transition-colors">{image.title}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Link
              to="/gallery"
              className="group inline-flex items-center px-8 py-4 dark-gradient text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 card-hover border border-gray-700"
            >
              <span>View Full Gallery</span>
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 animate-on-scroll">
              <div className="dark-gradient rounded-2xl p-8 text-white border border-gray-700 card-hover">
                <h3 className="text-2xl font-bold mb-6 text-gray-300">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-gray-400 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1 text-gray-300">Our Locations</div>
                      <div className="text-gray-400 text-sm">Sharjah Industrial Area, UAE</div>
                      <div className="text-gray-400 text-sm">ICAD, Abu Dhabi</div>
                      <div className="text-gray-400 text-sm">Jebel Ali Free Zone, Dubai</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone size={24} className="text-gray-400 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1 text-gray-300">Call Us</div>
                      <div className="text-gray-400 text-sm">+971 4 123 4567</div>
                      <div className="text-gray-400 text-sm">+971 50 123 4567</div>
                      <div className="text-gray-400 text-sm">+971 2 345 6789</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail size={24} className="text-gray-400 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1 text-gray-300">Email Us</div>
                      <div className="text-gray-400 text-sm">info@simpolotrading.com</div>
                      <div className="text-gray-400 text-sm">sales@simpolotrading.com</div>
                      <div className="text-gray-400 text-sm">support@simpolotrading.com</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock size={24} className="text-gray-400 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1 text-gray-300">Working Hours</div>
                      <div className="text-gray-400 text-sm">Sun - Thu: 8:00 AM - 6:00 PM</div>
                      <div className="text-gray-400 text-sm">Fri: 9:00 AM - 1:00 PM</div>
                      <div className="text-gray-400 text-sm">Sat: By Appointment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="silver-gradient-dark rounded-2xl p-8 h-full border border-gray-600 card-hover">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Quick Inquiry</h3>
                <p className="text-gray-700 mb-6">Get a free quote for your project</p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center w-full px-6 py-4 dark-gradient text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 card-hover border border-gray-700"
                >
                  <span>Request a Quote</span>
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 dark-gradient"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-600 rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500 rounded-full mix-blend-overlay filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to <span className="transform-text">Transform</span> Your Space?
            </h2>
            <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Get in touch with our team today and let us help you bring your vision to life with premium tile solutions
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 card-hover border border-gray-300"
              >
                <span>Contact Our Experts</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link
                to="/gallery"
                className="group px-8 py-4 border-2 border-gray-400 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-gray-300 transition-all duration-300 flex items-center space-x-3 card-hover"
              >
                <span>View Our Projects</span>
                <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link
                to="/services"
                className="group px-8 py-4 border-2 border-gray-400 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-gray-300 transition-all duration-300 flex items-center space-x-3 card-hover"
              >
                <span>Request Samples</span>
                <Package size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="mt-16 pt-12 border-t border-gray-600">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
                <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm card-hover border border-gray-700">
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-sm text-gray-300 font-medium">Project Support</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm card-hover border border-gray-700">
                  <div className="text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-sm text-gray-300 font-medium">Successful Projects</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm card-hover border border-gray-700">
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-sm text-gray-300 font-medium">Quality Guarantee</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm card-hover border border-gray-700">
                  <div className="text-4xl font-bold text-white mb-2">15+</div>
                  <div className="text-sm text-gray-300 font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage