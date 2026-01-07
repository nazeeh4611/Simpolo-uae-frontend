import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Sparkles, Award, Clock, Shield, Star, TrendingUp, Users, Zap, Package, Globe, Truck, CheckCircle, Home, Building, Hotel, ShoppingBag, Phone, Mail, MapPin, Eye, Grid3x3, ChevronLeft, ChevronRight as ChevronRightIcon, X } from 'lucide-react';
import { ImageWithFallback } from '../../util/Fallback';
import Typewriter from 'typewriter-effect';
import { baseurl } from '../../util/Base';
import { useSEO } from '../../util/SEO';
import ValuableClients from '../Layout/Clients';

function HomePage() {

  useSEO({
    title: "Home | Simpolo Trading",
    description: "Explore premium tiles and slabs by Simpolo Trading.",
  });
  
  const pageTitle = "Simpolo Trading LLC | Premium Tile Solutions & Sanitary Ware UAE";
  const pageDescription = "Simpolo Trading LLC - UAE's leading supplier of premium porcelain tiles, ceramic tiles, marble, and sanitary ware with direct manufacturing access and UAE fabrication facility.";
  const pageKeywords = "Simpolo Trading UAE, porcelain tiles UAE, ceramic tiles suppliers, marble tiles Dubai, bathroom fittings UAE, tile suppliers Sharjah, sanitary ware Abu Dhabi";

  const [loaded, setLoaded] = useState(false);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const videoRef = useRef(null);
  const modalRef = useRef(null);

  const features = [
    { 
      icon: Shield,
      title: 'Direct Manufacturing Access',
      description: 'Own production unit in India with advanced technology'
    },
    { 
      icon: Award,
      title: 'International Standards',
      description: 'BS/EN and ANSI/ASTM certified products'
    },
    { 
      icon: Clock,
      title: 'UAE Fabrication Facility',
      description: 'ICAD Abu Dhabi facility for fast delivery'
    },
    { 
      icon: Sparkles,
      title: 'Immediate Stock Availability',
      description: 'Warehouse in Sajja Industrial Area, Sharjah'
    }
  ];

  const categories = [
    {
      src: '/1.webp',
      title: 'Porcelain Tiles',
      description: 'Durable, non-porous tiles made from refined clay',
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
      description: 'Large-format porcelain tiles for seamless look',
      link: '/gallery?category=Slab Tiles',
      tag: 'Modern'
    },
    {
      src: '/4.webp',
      title: 'Ceramic Tiles',
      description: 'Manufactured from clay with consistent quality',
      link: '/gallery?category=Ceramic Tiles',
      tag: 'Classic'
    },
    {
      src: '/5.webp',
      title: 'Outdoor Heavy-Duty Tiles',
      description: 'Anti-slip finishes for outdoor applications',
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
      description: 'Color-stable, water-resistant tiles for pools',
      link: '/gallery?category=Swimming Pool Tiles',
      tag: 'Specialty'
    },
    {
      src: '/8.webp',
      title: 'Marble and Granite',
      description: 'Natural stone with elegant patterns',
      link: '/gallery?category=Marble and Granite',
      tag: 'Luxury'
    },
    {
      src: '/9.webp',
      title: 'Marble Countertops and Fabrications',
      description: 'Custom marble countertops and fabrications',
      link: '/gallery?category=Marble Countertops and Fabrications',
      tag: 'Premium'
    },
  ];

  const stats = [
    { icon: Star, value: 'Direct', label: 'Manufacturing Access' },
    { icon: Users, value: 'Dual', label: 'Production Strength' },
    { icon: Award, value: 'BS/EN', label: 'Certified Quality' },
    { icon: TrendingUp, value: 'UAE', label: 'Fabrication Facility' }
  ];

  const services = [
    {
      icon: Home,
      title: 'Residential Projects',
      description: 'Complete tile solutions for residential projects'
    },
    {
      icon: Building,
      title: 'Commercial Spaces',
      description: 'Tiles for commercial and government projects'
    },
    {
      icon: Hotel,
      title: 'Hospitality Industry',
      description: 'Luxury tiles for hotels and resorts'
    },
    {
      icon: ShoppingBag,
      title: 'Project Support',
      description: 'Fast delivery solutions for ongoing projects'
    }
  ];

  const benefits = [
    'Direct manufacturing operations',
    'Customized tile sizes',
    'Fast delivery across UAE',
    'Large-scale production capacity',
    'BS/EN and ANSI/ASTM standards',
    'Immediate stock availability',
    'Integrated production ecosystem',
    'Modern showroom and warehousing'
  ];

  useEffect(() => {
    document.title = pageTitle;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = pageDescription;
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = pageKeywords;
    
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = window.location.href;
    
    const ogTags = [
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:image', content: `${window.location.origin}/ban.webp` },
      { property: 'og:site_name', content: 'Simpolo Trading LLC' },
      { property: 'og:locale', content: 'en_AE' },
    ];
    
    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });
    
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: pageDescription },
      { name: 'twitter:image', content: `${window.location.origin}/ban.webp` },
      { name: 'twitter:site', content: '@simpolotrading' },
    ];
    
    twitterTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.name = tag.name;
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });
    
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      'name': 'Simpolo Trading LLC',
      'description': pageDescription,
      'url': window.location.origin,
      'logo': `${window.location.origin}/simlogo.webp`,
      'image': `${window.location.origin}/ban.webp`,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Sajja Industrial Area',
        'addressLocality': 'Sharjah',
        'addressRegion': 'UAE',
        'addressCountry': 'AE'
      },
      'telephone': '+971-4-123-4567',
      'openingHours': [
        'Mo-Th 08:00-18:00',
        'Fr 09:00-13:00',
        'Sa 09:00-13:00'
      ],
      'areaServed': {
        '@type': 'GeoCircle',
        'geoMidpoint': {
          '@type': 'GeoCoordinates',
          'latitude': 25.2048,
          'longitude': 55.2708
        },
        'geoRadius': '100000'
      },
      'makesOffer': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Product',
            'name': 'Porcelain Tiles',
            'description': 'Premium porcelain tiles for residential and commercial use'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Product',
            'name': 'Ceramic Tiles',
            'description': 'High-quality ceramic tiles in various designs'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Product',
            'name': 'Marble and Granite',
            'description': 'Natural stone tiles and slabs'
          }
        }
      ]
    };
    
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

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
    setCurrentImageIndex(0);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    
    if (showModal) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showModal]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };
    
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  const ProjectModal = () => {
    if (!selectedProject) return null;
  
    const handleNextImage = (e) => {
      e.stopPropagation();
      e.preventDefault();
      nextImage();
    };
  
    const handlePrevImage = (e) => {
      e.stopPropagation();
      e.preventDefault();
      prevImage();
    };
  
    const handleThumbnailClick = (index, e) => {
      e.stopPropagation();
      e.preventDefault();
      setCurrentImageIndex(index);
    };
  
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };
  
    useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [selectedProject, currentImageIndex]);
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
        <div 
          ref={modalRef}
          className="relative w-full max-w-6xl max-h-[95vh] overflow-y-auto bg-gray-900 rounded-2xl shadow-2xl"
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-50 p-3 rounded-full bg-black/80 text-white hover:bg-black hover:scale-110 transition-all duration-200"
            aria-label="Close project modal"
          >
            <X size={24} aria-hidden="true" />
          </button>
          
          {selectedProject.images && selectedProject.images.length > 0 && (
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-t-2xl">
              <div className="relative w-full h-full">
                <ImageWithFallback
                  key={`project-image-${selectedProject._id}-${currentImageIndex}`}
                  src={selectedProject.images[currentImageIndex]?.url}
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  width="1200"
                  height="500"
                  loading="eager"
                />
              </div>
              
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/70 text-white hover:bg-black hover:scale-110 transition-all duration-200 z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} aria-hidden="true" />
                  </button>
                  
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/70 text-white hover:bg-black hover:scale-110 transition-all duration-200 z-10"
                    aria-label="Next image"
                  >
                    <ChevronRightIcon size={24} aria-hidden="true" />
                  </button>
                </>
              )}
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full bg-black/70 text-white text-sm z-10 backdrop-blur-sm">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </div>
              
              {selectedProject.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 z-10">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => handleThumbnailClick(index, e)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/80 hover:scale-110'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                      aria-current={index === currentImageIndex ? "true" : "false"}
                    />
                  ))}
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          )}
  
          <div className="p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {selectedProject.title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-gray-300 mb-2">
                  <span className="font-semibold text-gray-200">Client:</span> {selectedProject.client}
                </p>
                <p className="text-gray-300 mb-2">
                  <span className="font-semibold text-gray-200">Location:</span> {selectedProject.location}
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-gray-200">Category:</span> {selectedProject.category}
                </p>
              </div>
              
              {selectedProject.completionDate && (
                <div>
                  <p className="text-gray-300">
                    <span className="font-semibold text-gray-200">Completed:</span>{' '}
                    {new Date(selectedProject.completionDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              )}
            </div>
  
            {selectedProject.description && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Project Description</h4>
                <p className="text-gray-200 leading-relaxed">{selectedProject.description}</p>
              </div>
            )}
  
            {selectedProject.scope && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Project Scope</h4>
                <p className="text-gray-200 leading-relaxed">{selectedProject.scope}</p>
              </div>
            )}
  
            {selectedProject.productsUsed && selectedProject.productsUsed.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Products Used</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.productsUsed.map((product, index) => (
                    <div key={index} className="bg-gray-800/70 rounded-lg p-3 hover:bg-gray-800 transition-colors">
                      <p className="font-medium text-white">{product.name}</p>
                      {product.category && (
                        <p className="text-sm text-gray-300">Category: {product.category}</p>
                      )}
                      {product.quantity && (
                        <p className="text-sm text-gray-300">Quantity: {product.quantity}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
  
            {selectedProject.images && selectedProject.images.length > 1 && (
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Project Gallery</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {selectedProject.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={(e) => handleThumbnailClick(index, e)}
                      className={`relative aspect-square rounded-lg overflow-hidden group transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-900 scale-105' 
                          : 'hover:scale-105'
                      }`}
                      aria-label={`View image ${index + 1}`}
                      aria-current={index === currentImageIndex ? "true" : "false"}
                    >
                      <ImageWithFallback
                        src={image.url}
                        alt={`${selectedProject.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        width="200"
                        height="200"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Eye size={20} className="text-white" aria-hidden="true" />
                      </div>
                    </button>
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
    <>
      <div className="sr-only" aria-hidden="true">
        <h1>Simpolo Trading LLC - Premium Tile Solutions Provider in UAE</h1>
        <p>Leading supplier of porcelain tiles, ceramic tiles, marble, granite, and sanitary ware with direct manufacturing operations.</p>
        
        <h2>Our Services:</h2>
        <ul>
          <li>Porcelain Tiles Supply & Installation</li>
          <li>Ceramic Tiles for Residential & Commercial</li>
          <li>Marble and Granite Fabrication</li>
          <li>Bathroom Fittings and Sanitary Ware</li>
          <li>Custom Tile Fabrication Services</li>
          <li>Swimming Pool Tiles Installation</li>
          <li>Outdoor Heavy-Duty Tiles</li>
        </ul>
        
        <h2>Why Choose Us:</h2>
        <ul>
          <li>Direct Manufacturing Access</li>
          <li>BS/EN and ANSI/ASTM Certified</li>
          <li>UAE Fabrication Facility</li>
          <li>Immediate Stock Availability</li>
          <li>Dual Production Strength</li>
        </ul>
      </div>

      <main className="min-h-screen bg-black">
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
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          }
        `}} />

        <section className="relative min-h-screen overflow-hidden text-white" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content="Simpolo Trading LLC" />
          <meta itemProp="description" content="Premium tile solutions provider in UAE" />
          <meta itemProp="url" content={window.location.href} />
          
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
              aria-label="Simpolo Trading LLC - Premium tile solutions showcase video"
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
                <Sparkles size={18} className="mr-2 text-gray-400 relative z-10" aria-hidden="true" />
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
                      'Pioneering Excellence in Tile Solutions',
                      "Crafted for quality designed for Delight",
                      "Direct Manufacturing Access",
                      "UAE Fabrication Facility",
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
                Established in the heart of the UAE, Simpolo Trading LLC is a trusted name in premium tiles and sanitary solutions, 
                delivering elegance, performance, and lasting quality for residential and commercial projects.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group px-8 py-4 sword-gradient text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-3 card-hover border border-gray-700 relative overflow-hidden silver-button-shine"
                  aria-label="Get free tile consultation from Simpolo Trading"
                >
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <span className="relative z-10">Get Free Consultation</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                </Link>

                <Link
                  to="/services"
                  className="group px-8 py-4 border-2 border-gray-600 rounded-xl font-semibold hover:bg-white/5 hover:border-gray-400 transition-all duration-300 flex items-center space-x-3 card-hover relative overflow-hidden"
                  aria-label="View our tile products and collections"
                >
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <span className="relative z-10">View Products</span>
                  <ChevronRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative z-20 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {features.map((feature, index) => (
                  <article
                    key={index}
                    className="bg-white/5 backdrop-blur-md p-5 rounded-xl hover:bg-white/10 transition-all duration-300 card-hover relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <div className="flex items-start space-x-3 relative z-10">
                      <div className="p-2.5 rounded-lg silver-gradient relative overflow-hidden">
                        <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                        <feature.icon className="text-gray-900 relative z-10" size={22} aria-hidden="true" />
                      </div>
                      <div>
                        <h2 className="font-semibold mb-1 text-white">{feature.title}</h2>
                        <p className="text-sm text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ValuableClients />

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
                  aria-label={`View ${category.title} collection`}
                >
                  <figure className="relative h-80 overflow-hidden">
                    <ImageWithFallback
                      src={category.src}
                      alt={`${category.title} - ${category.description}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      width="400"
                      height="320"
                      loading={index < 3 ? "eager" : "lazy"}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <figcaption className="absolute bottom-6 left-6">
                      <h3 className="text-white text-2xl font-semibold tracking-wide">
                        {category.title}
                      </h3>
                      <p className="text-gray-300 mt-2 text-sm">
                        {category.description}
                      </p>
                    </figcaption>

                    {category.tag && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-gray-900">
                          {category.tag}
                        </span>
                      </div>
                    )}
                  </figure>
                </Link>
              ))}
            </div>

            <div className="text-center mt-14 animate-on-scroll">
              <Link
                to="/gallery"
                className="group inline-flex items-center px-8 py-4 sword-gradient text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-xl"
                aria-label="View all tile categories gallery"
              >
                View All Categories
                <ChevronRight size={20} className="ml-2" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our <span className="showcase-text">Story</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Pioneering excellence in tile solutions through innovation and quality craftsmanship
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <div className="sword-gradient rounded-2xl p-8 text-white card-hover relative overflow-hidden group">
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-300 relative z-10">Our Excellence</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                    We specialize in advanced tile solutions crafted using cutting-edge manufacturing technology and 
                    produced in full compliance with international standards including BS/EN and ANSI/ASTM, ensuring 
                    exceptional durability, precision, and finish.
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                    Our state-of-the-art manufacturing facility in India. Fabrication works, including cutting and 
                    customization, are handled at our dedicated warehouse facility. Additionally, we operate a 
                    porcelain tile production unit in ICAD, Abu Dhabi, focused exclusively on manufacturing and 
                    efficient delivery across all Emirates.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-4 relative z-10">
                    {['Architects', 'Contractors', 'Developers', 'Interior Designers'].map((item, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <CheckCircle size={18} className="text-gray-400 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 card-hover border border-gray-700 relative overflow-hidden group">
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="flex items-center mb-6 relative z-10">
                    <div className="p-3 rounded-xl silver-gradient mr-4 relative overflow-hidden">
                      <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                      <Award className="text-gray-900 relative z-10" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Trusted Partner</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                    Driven by quality, innovation, and reliability, Simpolo Trading LLC is the preferred partner for 
                    architects, contractors, developers, and interior designers seeking refined solutions and 
                    dependable execution.
                  </p>
                  <div className="space-y-4 relative z-10">
                    {[
                      'Advanced manufacturing technology',
                      'International standards compliance',
                      'State-of-the-art facilities',
                      'Efficient delivery network',
                      'Cutting-edge fabrication'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 rounded-full silver-gradient mr-3"></div>
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
                <article
                  key={project._id}
                  className="group animate-on-scroll relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleProjectClick(project)}
                  itemScope
                  itemType="https://schema.org/CreativeWork"
                >
                  <meta itemProp="name" content={project.title} />
                  <meta itemProp="description" content={project.description} />
                  
                  <div className="image-card-overlay"></div>
                  {project.images && project.images.length > 0 ? (
                    <ImageWithFallback
                      src={project.images[0].url}
                      alt={`${project.title} - Tile installation project`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      width="300"
                      height="320"
                      loading={index < 4 ? "eager" : "lazy"}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                      <Grid3x3 size={48} className="text-gray-600" aria-hidden="true" />
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-6 image-card-content text-white">
                    <div className="text-xs font-semibold text-gray-300 mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-gray-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-2">{project.client}</p>
                    <button 
                      className="absolute top-4 right-4 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                      aria-label={`View details of ${project.title} project`}
                    >
                      <Eye size={20} aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12 animate-on-scroll">
              <Link
                to="/portfolio"
                className="group inline-flex items-center px-8 py-4 sword-gradient text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 card-hover relative overflow-hidden silver-button-shine"
                aria-label="View all completed projects portfolio"
              >
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <span className="relative z-10">View All Projects</span>
                <ArrowRight size={20} className="ml-2 relative z-10 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
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
                  <Building size={18} className="mr-2 relative z-10" aria-hidden="true" /> 
                  <span className="relative z-10">Our Services</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                  Comprehensive <span className="showcase-text">Solutions</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <article key={index} className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover bg-white/5 backdrop-blur-md relative overflow-hidden group">
                      <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full silver-gradient mb-4 relative overflow-hidden">
                        <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                        <service.icon className="text-gray-900 relative z-10" size={24} aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 relative z-10">{service.title}</h3>
                      <p className="text-sm text-gray-400 relative z-10">{service.description}</p>
                    </article>
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
                        <CheckCircle size={18} className="text-gray-400 mr-3 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 p-6 bg-white/5 rounded-xl card-hover relative overflow-hidden group">
                    <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <div className="flex items-center mb-4 relative z-10">
                      <Truck size={24} className="text-gray-400 mr-3" aria-hidden="true" />
                      <div>
                        <div className="font-bold text-gray-300">Fast Delivery Across UAE</div>
                        <div className="text-sm text-gray-400">Covering all Emirates</div>
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
                <address className="sword-gradient rounded-2xl p-8 text-white card-hover relative overflow-hidden group not-italic">
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-300 relative z-10">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                    <div className="flex items-start">
                      <MapPin size={24} className="text-gray-400 mr-4 flex-shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <div className="font-bold mb-1 text-gray-300">Our Locations</div>
                        <p className="text-gray-400 text-sm">Sajja Industrial Area, Sharjah</p>
                        <p className="text-gray-400 text-sm">ICAD, Abu Dhabi</p>
                        <p className="text-gray-400 text-sm">Dubai, UAE</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone size={24} className="text-gray-400 mr-4 flex-shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <div className="font-bold mb-1 text-gray-300">Call Us</div>
                        <p className="text-gray-400 text-sm">+971 4 123 4567</p>
                        <p className="text-gray-400 text-sm">+971 50 123 4567</p>
                        <p className="text-gray-400 text-sm">+971 2 345 6789</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail size={24} className="text-gray-400 mr-4 flex-shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <div className="font-bold mb-1 text-gray-300">Email Us</div>
                        <p className="text-gray-400 text-sm">info@simpolotrading.com</p>
                        <p className="text-gray-400 text-sm">sales@simpolotrading.com</p>
                        <p className="text-gray-400 text-sm">support@simpolotrading.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock size={24} className="text-gray-400 mr-4 flex-shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <div className="font-bold mb-1 text-gray-300">Working Hours</div>
                        <p className="text-gray-400 text-sm">Sun - Thu: 8:00 AM - 6:00 PM</p>
                        <p className="text-gray-400 text-sm">Fri: 9:00 AM - 1:00 PM</p>
                        <p className="text-gray-400 text-sm">Sat: By Appointment</p>
                      </div>
                    </div>
                  </div>
                </address>
              </div>
              
              <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <div className="silver-gradient-dark rounded-2xl p-8 h-full card-hover relative overflow-hidden group">
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 relative z-10">Quick Inquiry</h3>
                  <p className="text-gray-700 mb-6 relative z-10">Get a free quote for your project</p>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center w-full px-6 py-4 sword-gradient text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 card-hover relative overflow-hidden silver-button-shine"
                    aria-label="Request free tile project quote"
                  >
                    <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                    <span className="relative z-10">Request a Quote</span>
                    <ArrowRight size={20} className="ml-2 relative z-10 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
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
                  aria-label="Contact tile experts for consultation"
                >
                  <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                  <span className="relative z-10">Contact Our Experts</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                </Link>
                
                <Link
                  to="/portfolio"
                  className="group px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-semibold hover:bg-white/5 hover:border-gray-500 transition-all duration-300 flex items-center space-x-3 card-hover relative overflow-hidden"
                  aria-label="View our completed tile projects"
                >
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <span className="relative z-10">View Our Projects</span>
                  <ChevronRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                </Link>
                
                <Link
                  to="/services"
                  className="group px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-semibold hover:bg-white/5 hover:border-gray-500 transition-all duration-300 flex items-center space-x-3 card-hover relative overflow-hidden"
                  aria-label="Request tile samples"
                >
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <span className="relative z-10">Request Samples</span>
                  <Package size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-16 pt-12 border-t border-gray-800">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
                  <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm card-hover relative overflow-hidden group">
                    <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <div className="text-4xl font-bold text-white mb-2 relative z-10">Direct</div>
                    <p className="text-sm text-gray-400 font-medium relative z-10">Manufacturing Access</p>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm card-hover relative overflow-hidden group">
                    <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <div className="text-4xl font-bold text-white mb-2 relative z-10">Dual</div>
                    <p className="text-sm text-gray-400 font-medium relative z-10">Production Strength</p>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm card-hover relative overflow-hidden group">
                    <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <div className="text-4xl font-bold text-white mb-2 relative z-10">BS/EN</div>
                    <p className="text-sm text-gray-400 font-medium relative z-10">Certified Quality</p>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm card-hover relative overflow-hidden group">
                    <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <div className="text-4xl font-bold text-white mb-2 relative z-10">UAE</div>
                    <p className="text-sm text-gray-400 font-medium relative z-10">Fabrication Facility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {showModal && <ProjectModal />}
      </main>
    </>
  );
}

export default HomePage;