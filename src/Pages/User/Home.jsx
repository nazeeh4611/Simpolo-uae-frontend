import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Sparkles, Award, Clock, Shield, Star, TrendingUp, Users, Zap, Package, Globe, Truck, CheckCircle, Home, Building, Hotel, ShoppingBag, Phone, Mail, MapPin, Eye, Grid3x3 } from 'lucide-react';
import { ImageWithFallback } from '../../util/Fallback';
import Typewriter from 'typewriter-effect';
import { baseurl } from '../../util/Base';

function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
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

  const categories = [
    {
      src: '/1.webp',
      title: 'Porcelain Tiles',
      description: 'Durable and non-porous tiles in various sizes and finishes',
      link: '/gallery?category=Porcelain Tiles',
      tag: 'Premium'
    },
    {
      src: '/2.webp',
      title: 'Porcelain Tiles Fabrications',
      description: 'Custom-cut and fabricated porcelain solutions',
      link: '/gallery?category=Porcelain Tiles Fabrications',
      tag: 'Custom'
    },
    {
      src: '/3.webp',
      title: 'Slab Tiles',
      description: 'Large format slabs for seamless installations',
      link: '/gallery?category=Slab Tiles',
      tag: 'Modern'
    },
    {
      src: '/4.webp',
      title: 'Ceramic Tiles',
      description: 'Traditional and modern ceramic tile solutions',
      link: '/gallery?category=Ceramic Tiles',
      tag: 'Classic'
    },
    {
      src: '/5.webp',
      title: 'Outdoor Heavy-Duty Tiles',
      description: 'Weather-resistant tiles for outdoor applications',
      link: '/gallery?category=Outdoor Heavy-Duty Tiles',
      tag: 'Durable'
    },
    {
      src: '/6.webp',
      title: 'Mosaic Fabrications from Tiles',
      description: 'Custom mosaic patterns and fabrications',
      link: '/gallery?category=Mosaic Fabrications from Tiles',
      tag: 'Artistic'
    },
    {
      src: '/7.webp',
      title: 'Swimming Pool Tiles',
      description: 'Color-stable, water-resistant tiles for pools and spas',
      link: '/gallery?category=Swimming Pool Tiles',
      tag: 'Specialty'
    },
    {
      src: '/8.webp',
      title: 'Marble and Granite',
      description: 'Natural stone with elegant patterns and timeless appeal',
      link: '/gallery?category=Marble and Granite',
      tag: 'Luxury'
    },
    {
      src: '/9.webp',
      title: 'Marble Countertops and Fabrications',
      description: 'Custom marble countertops and stone fabrications',
      link: '/gallery?category=Marble Countertops and Fabrications',
      tag: 'Premium'
    },
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

  useEffect(() => {
    fetchFeaturedProjects();
  }, []);

  const fetchFeaturedProjects = async () => {
    try {
      const response = await fetch(`${baseurl}projects?featured=true`);
      const data = await response.json();
      setFeaturedProjects(data.slice(0, 8));
    } catch (error) {
      console.error('Error fetching featured projects:', error);
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const ProjectModal = () => {
    if (!selectedProject) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl shadow-2xl">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="rotate-45" size={24} />
          </button>
          
          {selectedProject.images && selectedProject.images.length > 0 && (
            <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
              <ImageWithFallback
                src={selectedProject.images[0].url}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          )}

          <div className="p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {selectedProject.title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-gray-400 mb-2">
                  <span className="font-semibold text-gray-300">Client:</span> {selectedProject.client}
                </p>
                <p className="text-gray-400 mb-2">
                  <span className="font-semibold text-gray-300">Location:</span> {selectedProject.location}
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold text-gray-300">Category:</span> {selectedProject.category}
                </p>
              </div>
              
              {selectedProject.completionDate && (
                <div>
                  <p className="text-gray-400">
                    <span className="font-semibold text-gray-300">Completed:</span>{' '}
                    {new Date(selectedProject.completionDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              )}
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">Project Description</h4>
              <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
            </div>

            {selectedProject.scope && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Project Scope</h4>
                <p className="text-gray-300 leading-relaxed">{selectedProject.scope}</p>
              </div>
            )}

            {selectedProject.productsUsed && selectedProject.productsUsed.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Products Used</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.productsUsed.map((product, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-3">
                      <p className="font-medium text-white">{product.name}</p>
                      {product.category && (
                        <p className="text-sm text-gray-400">Category: {product.category}</p>
                      )}
                      {product.quantity && (
                        <p className="text-sm text-gray-400">Quantity: {product.quantity}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedProject.images && selectedProject.images.length > 1 && (
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">More Images</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {selectedProject.images.slice(1).map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={image.url}
                        alt={`${selectedProject.title} - ${index + 2}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

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
        @keyframes swordShimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
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
        .hero-gradient {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 30%, #2d2d2d 70%, #1a1a1a 100%);
        }
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(255, 255, 255, 0.1);
        }
        .grid-item {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .grid-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(255, 255, 255, 0.1);
        }
        .trading-text {
          display: inline-block;
          background: linear-gradient(135deg, #c0c0c0 0%, #d4d4d4 50%, #e8e8e8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        .collections-text {
          display: inline-block;
          background: linear-gradient(135deg, #c0c0c0 0%, #d4d4d4 50%, #e8e8e8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        .showcase-text {
          display: inline-block;
          background: linear-gradient(135deg, #c0c0c0 0%, #d4d4d4 50%, #e8e8e8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        .excellence-text {
          display: inline-block;
          background: linear-gradient(135deg, #c0c0c0 0%, #d4d4d4 50%, #e8e8e8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        .transform-text {
          display: inline-block;
          background: linear-gradient(135deg, #c0c0c0 0%, #d4d4d4 50%, #e8e8e8 100%);
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
          background: #c0c0c0;
          margin-left: 4px;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .image-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.8) 100%);
          z-index: 1;
        }
        .image-card-content {
          position: relative;
          z-index: 2;
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

    <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
  </div>

  <div className="absolute inset-0 z-10 pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl animate-float" />
    <div
      className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl animate-float"
      style={{ animationDelay: "1.5s" }}
    />
  </div>

  <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center pt-32 pb-20">
    <div className="max-w-3xl">
      <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/5 backdrop-blur border border-gray-700 relative overflow-hidden">
        <div className="absolute inset-0 sword-shimmer opacity-30"></div>
        <Sparkles size={18} className="mr-2 text-gray-400 relative z-10" />
        <span className="text-gray-400 font-medium relative z-10">
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

      <div className="w-32 h-1.5 silver-gradient mb-8 rounded-full relative overflow-hidden">
        <div className="absolute inset-0 sword-shimmer"></div>
      </div>

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
          className="group px-8 py-4 sword-gradient text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-3 card-hover border border-gray-700 relative overflow-hidden silver-button-shine"
        >
          <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
          <span className="relative z-10">Get Free Consultation</span>
          <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
        </Link>

        <Link
          to="/services"
          className="group px-8 py-4 border-2 border-gray-600 rounded-xl font-semibold hover:bg-white/5 hover:border-gray-400 transition-all duration-300 flex items-center space-x-3 card-hover relative overflow-hidden"
        >
          <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
          <span className="relative z-10">View Products</span>
          <ChevronRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
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
            className="bg-white/5 backdrop-blur-md p-5 rounded-xl hover:bg-white/10 transition-all duration-300 card-hover relative overflow-hidden group"
          >
            <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <div className="flex items-start space-x-3 relative z-10">
              <div className="p-2.5 rounded-lg silver-gradient relative overflow-hidden">
                <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                <feature.icon className="text-gray-900 relative z-10" size={22} />
              </div>
              <div>
                <div className="font-semibold mb-1 text-white">{feature.title}</div>
                <div className="text-sm text-gray-400">
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
{/* 
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="animate-on-scroll text-center p-6 rounded-2xl hover:shadow-2xl cursor-pointer card-hover bg-white/5 backdrop-blur-md relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full silver-gradient mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                  <stat.icon className="text-gray-900 relative z-10" size={24} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-gray-900 text-gray-300 text-sm font-semibold relative overflow-hidden">
                <div className="absolute inset-0 sword-shimmer opacity-20"></div>
                <Award size={18} className="mr-2 relative z-10" /> 
                <span className="relative z-10">Our Story</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Pioneering <span className="excellence-text">Excellence</span> in Tile Solutions
              </h2>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
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
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle size={18} className="text-gray-400 mr-2 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Link
                to="/about"
                className="group inline-flex items-center mt-8 px-6 py-3 sword-gradient text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 card-hover relative overflow-hidden silver-button-shine"
              >
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <span className="relative z-10">Discover Our Journey</span>
                <ChevronRight size={20} className="ml-2 relative z-10 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            
            <div className="animate-on-scroll relative" style={{ animationDelay: '0.2s' }}>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl card-hover group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1531586024505-b040066c2d5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Dubai building"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="image-card-overlay"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 image-card-content">
                  <div className="text-xl font-semibold mb-2 text-white">Serving UAE Since 2008</div>
                  <div className="text-sm text-gray-300">Transforming spaces across the Emirates</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-2xl w-64 card-hover group relative overflow-hidden">
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="flex items-center mb-4 relative z-10">
                  <div className="p-2 rounded-lg silver-gradient mr-3 relative overflow-hidden">
                    <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                    <Package size={20} className="text-gray-900 relative z-10" />
                  </div>
                  <div>
                    <div className="font-bold text-white">24,000+ m²</div>
                    <div className="text-sm text-gray-400">Annual Production</div>
                  </div>
                </div>
                <div className="flex items-center relative z-10">
                  <div className="p-2 rounded-lg silver-gradient mr-3 relative overflow-hidden">
                    <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                    <Globe size={20} className="text-gray-900 relative z-10" />
                  </div>
                  <div>
                    <div className="font-bold text-white">50+ Countries</div>
                    <div className="text-sm text-gray-400">Global Reach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Premium <span className="collections-text">Collections</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Explore our comprehensive range of premium tile categories and solutions for every space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group animate-on-scroll relative overflow-hidden rounded-2xl cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={category.src}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white text-2xl font-semibold tracking-wide">
                      {category.title}
                    </h3>
                    <p className="text-gray-300 mt-2 text-sm">
                      {category.description}
                    </p>
                  </div>

                  {category.tag && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-gray-900">
                        {category.tag}
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14 animate-on-scroll">
            <Link
              to="/gallery"
              className="inline-flex items-center px-8 py-4 sword-gradient text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-xl"
            >
              View All Categories
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Featured <span className="showcase-text">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Discover our exceptional work across residential, commercial, and hospitality sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={project._id}
                className="group animate-on-scroll relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleProjectClick(project)}
              >
                <div className="image-card-overlay"></div>
                {project.images && project.images.length > 0 ? (
                  <ImageWithFallback
                    src={project.images[0].url}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <Grid3x3 size={48} className="text-gray-600" />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-6 image-card-content text-white">
                  <div className="text-xs font-semibold text-gray-300 mb-2">
                    {project.category}
                  </div>
                  <div className="text-lg font-bold group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </div>
                  <div className="text-sm text-gray-400 mt-2">{project.client}</div>
                  <div className="absolute top-4 right-4 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Link
              to="/portfolio"
              className="group inline-flex items-center px-8 py-4 sword-gradient text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 card-hover relative overflow-hidden silver-button-shine"
            >
              <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <span className="relative z-10">View All Projects</span>
              <ArrowRight size={20} className="ml-2 relative z-10 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-on-scroll">
              <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-gray-900 text-gray-300 text-sm font-semibold relative overflow-hidden">
                <div className="absolute inset-0 sword-shimmer opacity-20"></div>
                <Building size={18} className="mr-2 relative z-10" /> 
                <span className="relative z-10">Our Services</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Comprehensive <span className="showcase-text">Solutions</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover bg-white/5 backdrop-blur-md relative overflow-hidden group">
                    <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full silver-gradient mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                      <service.icon className="text-gray-900 relative z-10" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 relative z-10">{service.title}</h3>
                    <p className="text-sm text-gray-400 relative z-10">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="sword-gradient rounded-2xl p-8 text-white h-full card-hover relative overflow-hidden group">
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <h3 className="text-2xl font-bold mb-6 text-gray-300 relative z-10">Why Choose Us?</h3>
                <ul className="space-y-4 relative z-10">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle size={18} className="text-gray-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-6 bg-white/5 rounded-xl card-hover relative overflow-hidden group">
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="flex items-center mb-4 relative z-10">
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

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 animate-on-scroll">
              <div className="sword-gradient rounded-2xl p-8 text-white card-hover relative overflow-hidden group">
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <h3 className="text-2xl font-bold mb-6 text-gray-300 relative z-10">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
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
              <div className="silver-gradient-dark rounded-2xl p-8 h-full card-hover relative overflow-hidden group">
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 relative z-10">Quick Inquiry</h3>
                <p className="text-gray-700 mb-6 relative z-10">Get a free quote for your project</p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center w-full px-6 py-4 sword-gradient text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 card-hover relative overflow-hidden silver-button-shine"
                >
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <span className="relative z-10">Request a Quote</span>
                  <ArrowRight size={20} className="ml-2 relative z-10 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 sword-gradient"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-700 rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600 rounded-full mix-blend-overlay filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
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
                className="group px-8 py-4 silver-gradient text-gray-900 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 card-hover relative overflow-hidden silver-button-shine"
              >
                <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                <span className="relative z-10">Contact Our Experts</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link
                to="/portfolio"
                className="group px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-semibold hover:bg-white/5 hover:border-gray-500 transition-all duration-300 flex items-center space-x-3 card-hover relative overflow-hidden"
              >
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <span className="relative z-10">View Our Projects</span>
                <ChevronRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link
                to="/services"
                className="group px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-semibold hover:bg-white/5 hover:border-gray-500 transition-all duration-300 flex items-center space-x-3 card-hover relative overflow-hidden"
              >
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <span className="relative z-10">Request Samples</span>
                <Package size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="mt-16 pt-12 border-t border-gray-800">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
                <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm card-hover relative overflow-hidden group">
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="text-4xl font-bold text-white mb-2 relative z-10">24/7</div>
                  <div className="text-sm text-gray-400 font-medium relative z-10">Project Support</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm card-hover relative overflow-hidden group">
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="text-4xl font-bold text-white mb-2 relative z-10">500+</div>
                  <div className="text-sm text-gray-400 font-medium relative z-10">Successful Projects</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm card-hover relative overflow-hidden group">
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="text-4xl font-bold text-white mb-2 relative z-10">100%</div>
                  <div className="text-sm text-gray-400 font-medium relative z-10">Quality Guarantee</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm card-hover relative overflow-hidden group">
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="text-4xl font-bold text-white mb-2 relative z-10">15+</div>
                  <div className="text-sm text-gray-400 font-medium relative z-10">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showModal && <ProjectModal />}
    </div>
  );
}

export default HomePage;