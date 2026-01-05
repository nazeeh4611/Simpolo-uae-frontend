import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, ChevronRight, MessageSquare, Building, User, Globe, Calendar, Shield, CheckCircle, ArrowRight, Sparkles, Award, Target, Users, ChevronLeft, Package, Home } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { useSEO } from '../../util/SEO';

function Contact() {


  useSEO({
    title: "Contact | Simpolo Trading",
    description: "Explore premium tiles and slabs by Simpolo Trading.",
  });
  // SEO Metadata
  const pageTitle = "Contact Simpolo Trading LLC | UAE Tile Solutions & Support";
  const pageDescription = "Contact Simpolo Trading LLC for premium tile solutions in UAE. Get expert consultation, project quotes, and visit our Sharjah showroom. Call +971 55 723 4180.";
  const pageKeywords = "contact Simpolo, tile consultation UAE, tile showroom Sharjah, get tile quote, UAE tile suppliers contact, tile project consultation, Simpolo support";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert('Thank you for your message! Our team will contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Support',
      details: ['+971 55 723 4180', '+971 4 123 4567'],
      subtitle: 'Available 24/7 for urgent inquiries',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@simpolotrading.com', 'sales@simpolotrading.com'],
      subtitle: 'Response within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Sajja Industrial Area, Sharjah', 'ICAD, Abu Dhabi'],
      subtitle: 'Visit our showroom',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Sun-Thu: 8AM-6PM', 'Fri: 9AM-1PM'],
      subtitle: 'Saturday by appointment',
    }
  ];

  const projectTypes = [
    'Residential Villa',
    'Apartment Complex',
    'Commercial Office',
    'Hotel/Resort',
    'Shopping Mall',
    'Hospital/Healthcare',
    'Educational Institution',
    'Government Project',
    'Renovation Project',
    'Custom Design'
  ];

  // Set SEO meta tags
  useEffect(() => {
    // Update document title
    document.title = pageTitle;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = pageDescription;
    
    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = pageKeywords;
    
    // Add canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = window.location.href;
    
    // Add Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:image', content: `${window.location.origin}/simlogo.webp` },
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
    
    // Add Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: pageDescription },
      { name: 'twitter:image', content: `${window.location.origin}/simlogo.webp` },
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
    
    // Add structured data for Contact Page
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contact Simpolo Trading LLC',
      'description': pageDescription,
      'url': window.location.href,
      'mainEntity': {
        '@type': 'Organization',
        'name': 'Simpolo Trading LLC',
        'telephone': '+971-55-723-4180',
        'email': 'info@simpolotrading.com',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Sajja Industrial Area, Near Sharjah Cement Factory',
          'addressLocality': 'Sharjah',
          'addressRegion': 'UAE',
          'postalCode': '00000',
          'addressCountry': 'AE'
        },
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            'opens': '08:00',
            'closes': '18:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Friday'],
            'opens': '09:00',
            'closes': '13:00'
          }
        ]
      }
    };
    
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Intersection Observer for animations
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
    <>
      {/* Hidden SEO content for search engines */}
      <div className="sr-only" aria-hidden="true">
        <h1>Contact Simpolo Trading LLC - UAE's Premier Tile Solutions Provider</h1>
        <p>Get in touch with Simpolo Trading LLC for all your tile and marble requirements in UAE. Expert consultation, free quotes, and showroom visits available.</p>
        
        <h2>Contact Information:</h2>
        <ul>
          <li>Phone: +971 55 723 4180 (24/7 Support)</li>
          <li>Email: info@simpolotrading.com</li>
          <li>Showroom: Sajja Industrial Area, Sharjah, UAE</li>
          <li>Office: Al Suaidi Building, Al Murar, Dubai, UAE</li>
        </ul>
        
        <h2>Business Hours:</h2>
        <ul>
          <li>Sunday - Thursday: 8:00 AM to 6:00 PM</li>
          <li>Friday: 9:00 AM to 1:00 PM</li>
          <li>Saturday: By Appointment Only</li>
        </ul>
        
        <h2>Services Offered:</h2>
        <ul>
          <li>Free Tile Consultation</li>
          <li>Project Quotation & Estimation</li>
          <li>Showroom Visits</li>
          <li>On-site Measurement</li>
          <li>Technical Support</li>
        </ul>
        
        <p>Servicing all Emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain</p>
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
          .card-hover {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .card-hover:hover {
            transform: translateY(-8px);
            box-shadow: 0 25px 50px rgba(255, 255, 255, 0.1);
          }
          .input-focus:focus {
            box-shadow: 0 0 0 3px rgba(192, 192, 192, 0.2);
            border-color: #c0c0c0;
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
          .touch-text {
            display: inline-block;
            background: linear-gradient(135deg, #c0c0c0 0%, #d4d4d4 50%, #e8e8e8 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
            background-size: 200% 200%;
            animation: gradientShift 3s ease infinite;
          }
          .findus-text {
            display: inline-block;
            background: linear-gradient(135deg, #c0c0c0 0%, #d4d4d4 50%, #e8e8e8 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
            background-size: 200% 200%;
            animation: gradientShift 3s ease infinite;
          }
          .emirates-text {
            display: inline-block;
            background: linear-gradient(135deg, #c0c0c0 0%, #d4d4d4 50%, #e8e8e8 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
            background-size: 200% 200%;
            animation: gradientShift 3s ease infinite;
          }
          .showroom-text {
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

        <section className="relative min-h-screen overflow-hidden text-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-800/30 rounded-full blur-3xl animate-float" />
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-700/30 rounded-full blur-3xl animate-float"
              style={{ animationDelay: '1.5s' }}
            />
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center pt-32 pb-20">
            <div className="max-w-4xl">
              <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/5 backdrop-blur border border-gray-700 relative overflow-hidden">
                <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                <MessageSquare size={18} className="mr-2 text-gray-400 relative z-10" />
                <span className="text-gray-400 font-medium relative z-10">
                  Let's Connect
                </span>
              </div>
          
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Contact With <span className="text-white">Simpolo</span>
              </h1>

              <div className="w-32 h-1.5 silver-gradient mb-8 rounded-full relative overflow-hidden">
                <div className="absolute inset-0 sword-shimmer"></div>
              </div>

              <div className="text-2xl md:text-3xl mb-8 text-gray-300 font-semibold h-12">
                <Typewriter
                  options={{
                    strings: [
                      "Ready to Transform Your Space?",
                      "Expert Tile Solutions",
                      "Premium Quality Materials",
                      "Custom Design Services",
                      "Professional Consultation",
                      "Free Quote Available"
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
                Connect with our team of experts for personalized solutions, project consultations, 
                or to explore our premium tile collections. We're here to bring your vision to life 
                with exceptional service and quality craftsmanship.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#form"
                  className="group px-8 py-4 sword-gradient text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-3 card-hover border border-gray-700 relative overflow-hidden silver-button-shine"
                  aria-label="Send message to Simpolo Trading LLC"
                >
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <span className="relative z-10">Send Message</span>
                  <Send size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                </a>

                <Link
                  to="/gallery"
                  className="group px-8 py-4 border-2 border-gray-600 rounded-xl font-semibold hover:bg-white/5 hover:border-gray-400 transition-all duration-300 flex items-center space-x-3 card-hover relative overflow-hidden"
                  aria-label="View our tile products and collections"
                >
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <span className="relative z-10">View Products</span>
                  <ChevronRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <article key={index} className="animate-on-scroll group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 card-hover border border-gray-700 hover:border-gray-600 h-full relative overflow-hidden">
                    <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl silver-gradient mb-4 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                      <info.icon className="text-gray-900 relative z-10" size={24} aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gray-300 transition-colors relative z-10">
                      {info.title}
                    </h3>
                    <div className="space-y-2 relative z-10">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300 font-medium">{detail}</p>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-700 relative z-10">
                      <p className="text-sm text-gray-400">{info.subtitle}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="animate-on-scroll">
                <div className="sticky top-24">
                  <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/5 backdrop-blur border border-gray-700 text-gray-300 text-sm font-semibold relative overflow-hidden">
                    <div className="absolute inset-0 sword-shimmer opacity-20"></div>
                    <Building size={18} className="mr-2 relative z-10" aria-hidden="true" /> 
                    <span className="relative z-10">Our Locations</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                    Where to <span className="findus-text">Find Us</span>
                  </h2>
                  
                  <div className="space-y-8">
                    <article className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 card-hover border border-gray-700 hover:border-gray-600 relative overflow-hidden">
                      <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      <div className="flex items-start space-x-4 relative z-10">
                        <div className="p-4 rounded-xl silver-gradient group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                          <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                          <MapPin className="text-gray-900 relative z-10" size={28} aria-hidden="true" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                              Corporate Headquarters
                            </h3>
                            <span className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs font-semibold rounded-full border border-gray-700">
                              Main Office
                            </span>
                          </div>
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            218, Al Suaidi Building, Al Murar<br />
                            Dubai, United Arab Emirates
                          </p>
                          <div className="flex items-center text-sm text-gray-400 mb-4">
                            <Clock size={14} className="mr-2" aria-hidden="true" />
                            Mon-Sat: 8:00 AM - 6:00 PM
                          </div>
                          <a 
                            href="https://maps.google.com/?q=Al+Suaidi+Building+Al+Murar+Dubai+UAE" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 sword-gradient text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 card-hover border border-gray-700 relative overflow-hidden silver-button-shine"
                            aria-label="Get directions to our Dubai office"
                          >
                            <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                            <MapPin size={16} className="mr-2 relative z-10" aria-hidden="true" />
                            <span className="relative z-10">Get Directions</span>
                          </a>
                        </div>
                      </div>
                    </article>

                    <article className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 card-hover border border-gray-700 hover:border-gray-600 relative overflow-hidden">
                      <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      <div className="flex items-start space-x-4 relative z-10">
                        <div className="p-4 rounded-xl silver-gradient group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                          <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                          <Building className="text-gray-900 relative z-10" size={28} aria-hidden="true" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                              Showroom & Warehouse
                            </h3>
                            <span className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs font-semibold rounded-full border border-gray-700">
                              Largest Collection
                            </span>
                          </div>
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            Sajja Industrial Area, Near Sharjah Cement Factory<br />
                            Sharjah, United Arab Emirates
                          </p>
                          <div className="flex items-center text-sm text-gray-400 mb-4">
                            <Users size={14} className="mr-2" aria-hidden="true" />
                            Expert consultants available daily
                          </div>
                          <a 
                            href="#form" 
                            className="inline-flex items-center px-4 py-2 sword-gradient text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 card-hover border border-gray-700 relative overflow-hidden silver-button-shine"
                            aria-label="Schedule a visit to our Sharjah showroom"
                          >
                            <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                            <Calendar size={16} className="mr-2 relative z-10" aria-hidden="true" />
                            <span className="relative z-10">Schedule Visit</span>
                          </a>
                        </div>
                      </div>
                    </article>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <article className="group sword-gradient rounded-2xl p-6 card-hover border border-gray-700 relative overflow-hidden">
                        <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        <div className="flex items-center mb-4 relative z-10">
                          <div className="p-2 rounded-lg bg-white/10 mr-3">
                            <Award className="text-gray-300" size={20} aria-hidden="true" />
                          </div>
                          <h4 className="text-white font-medium">Quick Response</h4>
                        </div>
                        <p className="text-gray-300 text-sm mb-3 relative z-10">
                          We guarantee a response within 2 hours during business hours
                        </p>
                        <div className="flex items-center text-sm text-gray-400 relative z-10">
                          <Shield size={14} className="mr-2" aria-hidden="true" />
                          Priority Support Available
                        </div>
                      </article>

                      <article className="group silver-gradient-dark rounded-2xl p-6 card-hover border border-gray-600 relative overflow-hidden">
                        <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        <div className="flex items-center mb-4 relative z-10">
                          <div className="p-2 rounded-lg bg-gray-900/20 mr-3">
                            <Target className="text-gray-900" size={20} aria-hidden="true" />
                          </div>
                          <h4 className="text-gray-900 font-medium">Free Consultation</h4>
                        </div>
                        <p className="text-gray-700 text-sm mb-3 relative z-10">
                          Book a free 30-minute consultation with our design experts
                        </p>
                        <a 
                          href="#form" 
                          className="inline-flex items-center text-sm text-gray-700 font-medium hover:text-gray-900 transition-colors relative z-10"
                          aria-label="Book a free tile consultation"
                        >
                          Book Now
                          <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </a>
                      </article>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }} id="form">
                <article className="bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-10 card-hover border border-gray-700 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 silver-gradient"></div>
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <div className="flex items-center mb-8 relative z-10">
                    <div className="p-4 rounded-xl silver-gradient mr-4 animate-float relative overflow-hidden">
                      <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                      <Send className="text-gray-900 relative z-10" size={28} aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white">Send Message</h2>
                      <p className="text-gray-400 mt-2">Our team will get back to you within 24 hours</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="name" className="block text-sm mb-2 text-gray-300 font-medium group-hover:text-white transition-colors">
                          <User size={16} className="inline mr-2" aria-hidden="true" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl focus:outline-none input-focus text-white placeholder-gray-500 group-hover:bg-white/10 transition-all duration-300"
                          placeholder="John Smith"
                          aria-required="true"
                        />
                      </div>

                      <div className="group">
                        <label htmlFor="email" className="block text-sm mb-2 text-gray-300 font-medium group-hover:text-white transition-colors">
                          <Mail size={16} className="inline mr-2" aria-hidden="true" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl focus:outline-none input-focus text-white placeholder-gray-500 group-hover:bg-white/10 transition-all duration-300"
                          placeholder="john@example.com"
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="phone" className="block text-sm mb-2 text-gray-300 font-medium group-hover:text-white transition-colors">
                          <Phone size={16} className="inline mr-2" aria-hidden="true" />
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl focus:outline-none input-focus text-white placeholder-gray-500 group-hover:bg-white/10 transition-all duration-300"
                          placeholder="+971 55 123 4567"
                          aria-required="true"
                        />
                      </div>

                      <div className="group">
                        <label htmlFor="company" className="block text-sm mb-2 text-gray-300 font-medium group-hover:text-white transition-colors">
                          <Building size={16} className="inline mr-2" aria-hidden="true" />
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl focus:outline-none input-focus text-white placeholder-gray-500 group-hover:bg-white/10 transition-all duration-300"
                          placeholder="Optional"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="projectType" className="block text-sm mb-2 text-gray-300 font-medium group-hover:text-white transition-colors">
                        <Target size={16} className="inline mr-2" aria-hidden="true" />
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl focus:outline-none input-focus text-white placeholder-gray-500 group-hover:bg-white/10 transition-all duration-300 appearance-none"
                        aria-required="true"
                      >
                        <option value="" className="bg-gray-800">Select Project Type</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type.toLowerCase().replace(/\s+/g, '-')} className="bg-gray-800">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="group">
                      <label htmlFor="message" className="block text-sm mb-2 text-gray-300 font-medium group-hover:text-white transition-colors">
                        <MessageSquare size={16} className="inline mr-2" aria-hidden="true" />
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl focus:outline-none input-focus text-white placeholder-gray-500 group-hover:bg-white/10 transition-all duration-300 resize-none"
                        placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                        aria-required="true"
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group w-full px-6 py-4 sword-gradient text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed card-hover border border-gray-700 relative overflow-hidden silver-button-shine"
                        aria-label="Submit your message to Simpolo Trading"
                      >
                        <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin relative z-10" aria-hidden="true"></div>
                            <span className="relative z-10">Processing Your Request...</span>
                          </>
                        ) : (
                          <>
                            <span className="relative z-10">Send Message</span>
                            <Send size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                          </>
                        )}
                      </button>
                      <div className="flex items-center justify-center mt-4 text-sm text-gray-400">
                        <Shield size={14} className="mr-2 text-gray-500" aria-hidden="true" />
                        Your information is secure and will never be shared
                      </div>
                    </div>
                  </form>

                  <div className="mt-8 pt-8 border-t border-gray-700 relative z-10">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-white/5 flex-shrink-0">
                        <Sparkles className="text-gray-400" size={20} aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Need immediate assistance?</h4>
                        <p className="text-gray-400 text-sm">
                          Call our dedicated support line at{' '}
                          <a href="tel:+971557234180" className="text-gray-300 hover:text-white font-medium">
                            +971 55 723 4180
                          </a>
                          {' '}for urgent project requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-on-scroll">
              <div className="text-center mb-16">
                <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-white/5 backdrop-blur border border-gray-700 text-gray-300 text-sm font-semibold relative overflow-hidden">
                  <div className="absolute inset-0 sword-shimmer opacity-20"></div>
                  <Globe size={18} className="mr-2 relative z-10" aria-hidden="true" /> 
                  <span className="relative z-10">Regional Support</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Serving <span className="emirates-text">All Emirates</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                  With facilities across UAE, we provide comprehensive support and delivery services
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { emirate: 'Dubai', projects: '250+', delivery: '24 Hours', icon: '🏙️' },
                  { emirate: 'Abu Dhabi', projects: '180+', delivery: '48 Hours', icon: '🕌' },
                  { emirate: 'Sharjah', projects: '120+', delivery: 'Same Day', icon: '🏛️' },
                  { emirate: 'Ajman', projects: '75+', delivery: '48 Hours', icon: '🌊' },
                  { emirate: 'Ras Al Khaimah', projects: '60+', delivery: '72 Hours', icon: '⛰️' },
                  { emirate: 'Fujairah', projects: '45+', delivery: '72 Hours', icon: '🏖️' },
                ].map((region, index) => (
                  <article key={index} className="group animate-on-scroll bg-white/5 backdrop-blur-md rounded-2xl p-6 card-hover border border-gray-700 hover:border-gray-600 relative overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <div className="flex items-center justify-between mb-4 relative z-10">
                      <div className="text-3xl" aria-hidden="true">{region.icon}</div>
                      <div className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs font-semibold rounded-full border border-gray-700">
                        {region.delivery}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors relative z-10">{region.emirate}</h3>
                    <div className="text-2xl font-bold text-gray-300 mb-1 relative z-10">{region.projects}</div>
                    <p className="text-sm text-gray-400 relative z-10">Completed Projects</p>
                    <div className="mt-4 pt-4 border-t border-gray-700 relative z-10">
                      <div className="flex items-center text-sm text-gray-400">
                        <CheckCircle size={14} className="text-gray-500 mr-2" aria-hidden="true" />
                        On-site consultation available
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-800/30 rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-700/30 rounded-full mix-blend-overlay filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/5 backdrop-blur border border-gray-700 text-gray-300 text-sm font-semibold relative overflow-hidden">
                  <div className="absolute inset-0 sword-shimmer opacity-20"></div>
                  <MapPin size={18} className="mr-2 relative z-10" aria-hidden="true" /> 
                  <span className="relative z-10">Visit Our Showroom</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Experience Our <span className="showroom-text">Showroom</span>
                </h2>
                <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                  Experience our premium tile collections firsthand. Our spacious showroom features 
                  the latest designs, patterns, and finishes to help you visualize your perfect space.
                </p>
                
                <ul className="space-y-6">
                  {[
                    'Live demonstrations of tile installation',
                    'Expert design consultations',
                    'Material samples for touch and feel',
                    'Digital visualization tools',
                    'Custom design workstation'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-white group">
                      <div className="p-2 rounded-full bg-white/10 mr-4 group-hover:silver-gradient transition-all duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                        <CheckCircle size={18} className="text-gray-300 group-hover:text-gray-900 relative z-10 transition-colors" aria-hidden="true" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <a 
                    href="https://maps.google.com/?q=Sajja+Industrial+Area+Sharjah+UAE" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group px-8 py-4 sword-gradient text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 card-hover border border-gray-700 relative overflow-hidden silver-button-shine"
                    aria-label="Get directions to Simpolo showroom in Sharjah"
                  >
                    <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                    <MapPin size={20} className="mr-2 relative z-10" aria-hidden="true" />
                    <span className="relative z-10">Get Directions</span>
                    <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                  </a>
                  
                  <a 
                    href="#form" 
                    className="group px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-semibold hover:bg-white/5 hover:border-gray-400 transition-all duration-300 flex items-center space-x-3 card-hover relative overflow-hidden"
                    aria-label="Book an appointment at our showroom"
                  >
                    <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <Calendar size={20} className="mr-2 relative z-10" aria-hidden="true" />
                    <span className="relative z-10">Book Appointment</span>
                  </a>
                </div>
              </div>
              
              <div className="animate-on-scroll relative" style={{ animationDelay: '0.2s' }}>
                <article className="silver-gradient-dark rounded-2xl p-1 card-hover relative overflow-hidden">
                  <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                  <div className="bg-gray-900 rounded-xl p-8 text-white relative z-10">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 silver-gradient rounded-full flex items-center justify-center mx-auto mb-4 animate-float relative overflow-hidden">
                        <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                        <MapPin className="text-gray-900 relative z-10" size={24} aria-hidden="true" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Sajja Industrial Area</h3>
                      <p className="text-gray-300">Sharjah, United Arab Emirates</p>
                    </div>
                    
                    <dl className="space-y-4">
                      <div className="flex items-center justify-between py-3 border-b border-white/10">
                        <dt className="text-gray-300">Distance from Dubai</dt>
                        <dd className="font-semibold">30 minutes</dd>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-white/10">
                        <dt className="text-gray-300">Parking Available</dt>
                        <dd className="text-gray-300 font-semibold">Free</dd>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-white/10">
                        <dt className="text-gray-300">Showroom Size</dt>
                        <dd className="font-semibold">5,000 sq.ft.</dd>
                      </div>
                      <div className="flex items-center justify-between py-3">
                        <dt className="text-gray-300">Open Today</dt>
                        <dd className="text-gray-300 font-semibold">Until 6:00 PM</dd>
                      </div>
                    </dl>
                    
                    <div className="mt-8 text-center">
                      <div className="inline-flex items-center text-sm text-gray-400">
                        <Clock size={14} className="mr-2" aria-hidden="true" />
                        Last entry 5:30 PM
                      </div>
                    </div>
                  </div>
                </article>
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
                Ready to Start Your <span className="touch-text">Project?</span>
              </h2>
              <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Get in touch with our team today for expert consultation, project estimates, 
                and personalized solutions for your tile requirements.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#form"
                  className="group px-8 py-4 silver-gradient text-gray-900 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 card-hover relative overflow-hidden silver-button-shine"
                  aria-label="Request free tile project quote"
                >
                  <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                  <span className="relative z-10">Request Free Quote</span>
                  <Send size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                </a>
                
                <a
                  href="tel:+971557234180"
                  className="group px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-semibold hover:bg-white/5 hover:border-gray-500 transition-all duration-300 flex items-center space-x-3 card-hover relative overflow-hidden"
                  aria-label="Call Simpolo Trading at +971 55 723 4180"
                >
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <Phone size={20} className="mr-2 relative z-10" aria-hidden="true" />
                  <span className="relative z-10">Call Now: +971 55 723 4180</span>
                </a>
                
                <Link
                  to="/products"
                  className="group px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-semibold hover:bg-white/5 hover:border-gray-500 transition-all duration-300 flex items-center space-x-3 card-hover relative overflow-hidden"
                  aria-label="Browse our tile products and collections"
                >
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <span className="relative z-10">Browse Products</span>
                  <ChevronRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-16 pt-12 border-t border-gray-800">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
                  {[
                    { value: '24/7', label: 'Support Available' },
                    { value: '2 Hours', label: 'Response Time' },
                    { value: 'Free', label: 'Consultation' },
                    { value: '500+', label: 'Projects Completed' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm card-hover relative overflow-hidden group">
                      <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      <div className="text-4xl font-bold text-white mb-2 relative z-10">{stat.value}</div>
                      <p className="text-sm text-gray-400 font-medium relative z-10">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;