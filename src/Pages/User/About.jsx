import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Award, ChevronRight, Users, Globe, Building, CheckCircle, Sparkles, TrendingUp, Shield, Star, Package, Truck, Clock, MapPin, Phone, Mail, Trophy, Briefcase, Heart, ArrowRight, Zap } from 'lucide-react';
import Typewriter from 'typewriter-effect';

function About() {

  const partners = [
    { name: 'Simpolo Ceramics', logo: 'SC' },
    { name: 'Volark Indian Tiles', logo: 'VIT' },
    { name: 'Porcellan', logo: 'POR' },
    { name: 'RAK Ceramics', logo: 'RAK' },
    { name: 'Kludi RAK', logo: 'KR' },
    { name: 'Bella Sanitary', logo: 'BS' },
    { name: 'TOTO Sanitary', logo: 'TOTO' },
    { name: 'Laticrete', logo: 'LAT' },
    { name: 'Mapei', logo: 'MAP' },
    { name: 'Saveto', logo: 'SAV' },
    { name: 'Johnson Tiles', logo: 'JT' },
    { name: 'Kajaria', logo: 'KAJ' },
    { name: 'Somany', logo: 'SOM' },
    { name: 'Asian Tiles', logo: 'AT' },
    { name: 'Cera Sanitary', logo: 'CERA' },
  ];

  const divisions = [
    'Porcelain Tiles',
    'Porcelain Tiles Fabrications',
    'Slab Tiles',
    'Ceramic Tiles',
    'Outdoor Heavy-Duty Tiles',
    'Mosaic Fabrications from Tiles',
    'Swimming Pool Tiles',
    'Marble and Granite',
    'Marble Countertops and Fabrications',
    'Sanitary Ware',
    'Bathroom Fittings',
    'Kitchen Countertops',
    'Flooring Solutions',
    'Wall Cladding',
    'Pool Coping',
  ];

  const milestones = [
    { year: '2008', title: 'Company Founded', description: 'Started operations in Dubai' },
    { year: '2012', title: 'First Production Unit', description: 'Established manufacturing in India' },
    { year: '2015', title: 'UAE Fabrication', description: 'Opened facility in Abu Dhabi' },
    { year: '2018', title: 'Warehouse Expansion', description: 'Expanded Sharjah warehouse' },
    { year: '2020', title: 'Digital Transformation', description: 'Launched online platform' },
    { year: '2023', title: 'Regional Expansion', description: 'Covered all Emirates' },
  ];

  const team = [
    { name: 'Mohammed Al Said', role: 'Founder & CEO', experience: '20+ years' },
    { name: 'Sarah Johnson', role: 'Head of Operations', experience: '15+ years' },
    { name: 'Ahmed Hassan', role: 'Technical Director', experience: '18+ years' },
    { name: 'Layla Mohammed', role: 'Design Manager', experience: '12+ years' },
    { name: 'Raj Patel', role: 'Production Head', experience: '16+ years' },
    { name: 'Fatima Al Mansoori', role: 'Client Relations', experience: '10+ years' },
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
        .partner-card {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .partner-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(192, 192, 192, 0.1), transparent);
          transition: left 0.6s;
        }
        .partner-card:hover::before {
          left: 100%;
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
        .timeline-item {
          position: relative;
        }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 24px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #c0c0c0;
          border: 3px solid #1a1a1a;
          box-shadow: 0 0 0 3px rgba(192, 192, 192, 0.2);
        }
        .timeline-item::after {
          content: '';
          position: absolute;
          left: 5px;
          top: 40px;
          bottom: -20px;
          width: 2px;
          background: linear-gradient(to bottom, #c0c0c0, transparent);
        }
        .timeline-item:last-child::after {
          display: none;
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
        .divisions-text {
          display: inline-block;
          background: linear-gradient(135deg, #c0c0c0 0%, #d4d4d4 50%, #e8e8e8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        .partners-text {
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
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-700 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '1.5s' }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll max-w-4xl">
              <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/5 backdrop-blur border border-gray-700 relative overflow-hidden">
                <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                <Sparkles size={18} className="mr-2 text-gray-400 relative z-10" />
                <span className="text-gray-400 font-medium relative z-10">Our Legacy</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                About <span className="text-white">SIMPOLO</span>
              </h1>

              <div className="w-32 h-1.5 silver-gradient mb-8 rounded-full relative overflow-hidden">
                <div className="absolute inset-0 sword-shimmer"></div>
              </div>

              <div className="text-2xl md:text-3xl mb-8 text-gray-300 font-semibold h-12">
                <Typewriter
                  options={{
                    strings: [
                      '15+ Years of Excellence',
                      'Pioneering Tile Solutions',
                      'Quality That Endures',
                      'Innovation in Design',
                      'Your Trusted Partner',
                      'Transforming Spaces'
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
                From humble beginnings to becoming a market leader, Simpolo Trading LLC has redefined
                excellence in premium tile solutions. Our journey spans over a decade of innovation,
                quality craftsmanship, and unwavering commitment to customer satisfaction.
              </p>

              <Link
                to="/contact"
                className="group inline-flex items-center mt-8 px-6 py-3 sword-gradient text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 card-hover border border-gray-700 relative overflow-hidden silver-button-shine"
              >
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <span className="relative z-10">Contact Our Team</span>
                <ChevronRight size={20} className="ml-2 relative z-10 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <img
                  src="/simlogo.webp"
                  alt="Simpolo Logo"
                  className="w-[340px] xl:w-[400px] opacity-90 drop-shadow-2xl"
                />
                <div className="absolute inset-0 sword-shimmer opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {[
                { icon: Users, value: '300+', label: 'Happy Clients', desc: 'Across UAE' },
                { icon: Award, value: '500+', label: 'Projects', desc: 'Successfully Completed' },
                { icon: Globe, value: '15+', label: 'Years', desc: 'Industry Experience' },
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="animate-on-scroll text-center p-8 rounded-2xl bg-white/5 backdrop-blur-md hover:shadow-2xl transition-all duration-300 card-hover relative overflow-hidden group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full silver-gradient mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                    <stat.icon className="text-gray-900 relative z-10" size={28} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-300 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.desc}</div>
                </div>
              ))}
            </div>

            <div className="animate-on-scroll">
              <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-white/5 backdrop-blur border border-gray-700 text-gray-300 text-sm font-semibold relative overflow-hidden">
                <div className="absolute inset-0 sword-shimmer opacity-20"></div>
                <Briefcase size={18} className="mr-2 relative z-10" /> 
                <span className="relative z-10">Our Journey</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
                Crafting <span className="excellence-text">Excellence</span> Since 2008
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                  <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl card-hover border border-gray-700 relative overflow-hidden group">
                    <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <div className="flex items-start mb-4 relative z-10">
                      <div className="p-3 rounded-xl silver-gradient mr-4 relative overflow-hidden">
                        <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                        <Building className="text-gray-900 relative z-10" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Company Foundation</h3>
                        <p className="text-gray-300 leading-relaxed">
                          <span className="font-semibold text-white">Simpolo Trading LLC</span> began its journey 
                          in 2008 with a vision to revolutionize the tile industry in UAE through 
                          superior quality and innovative designs.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl card-hover border border-gray-700 relative overflow-hidden group">
                    <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <div className="flex items-start mb-4 relative z-10">
                      <div className="p-3 rounded-xl silver-gradient mr-4 relative overflow-hidden">
                        <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                        <Package className="text-gray-900 relative z-10" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Manufacturing Excellence</h3>
                        <p className="text-gray-300 leading-relaxed">
                          Our state-of-the-art production unit in India employs cutting-edge technology 
                          meeting BS/EN and ANSI/ASTM standards, ensuring exceptional product quality 
                          and innovative design capability.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl card-hover border border-gray-700 relative overflow-hidden group">
                    <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <div className="flex items-start mb-4 relative z-10">
                      <div className="p-3 rounded-xl silver-gradient mr-4 relative overflow-hidden">
                        <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                        <Truck className="text-gray-900 relative z-10" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">UAE Operations</h3>
                        <p className="text-gray-300 leading-relaxed">
                          With a dedicated fabrication facility in ICAD, Abu Dhabi and warehousing in 
                          Sharjah, we provide rapid customization and reliable delivery across all Emirates.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="sword-gradient text-white p-8 rounded-3xl border border-gray-600 relative overflow-hidden group">
                    <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <h3 className="text-2xl font-bold mb-6 text-gray-300 relative z-10">Our Timeline</h3>
                    <div className="space-y-8 pl-6 relative z-10">
                      {milestones.map((milestone, index) => (
                        <div key={index} className="timeline-item pl-8">
                          <div className="text-3xl font-bold text-gray-400 mb-1">{milestone.year}</div>
                          <div className="text-lg font-semibold mb-1 text-white">{milestone.title}</div>
                          <div className="text-gray-300 text-sm">{milestone.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl card-hover border-r-4 border-gray-600 relative overflow-hidden group">
                    <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <div className="flex items-start mb-4 relative z-10">
                      <div className="p-3 rounded-xl silver-gradient mr-4 relative overflow-hidden">
                        <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                        <Heart className="text-gray-900 relative z-10" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Customer Commitment</h3>
                        <p className="text-gray-300 leading-relaxed">
                          We serve residential, commercial, hospitality, and government projects with 
                          personalized solutions, technical support, and after-sales service.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-4 relative z-10">
                      {['Free Consultation', 'Custom Designs', 'Installation Support', '10-Year Warranty'].map((item, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle size={16} className="text-gray-400 mr-2" />
                          <span>{item}</span>
                        </div>
                      ))}
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
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 card-hover border border-gray-700 overflow-hidden relative group">
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="flex items-center mb-8 relative z-10">
                  <div className="p-3 rounded-xl silver-gradient mr-4 relative overflow-hidden">
                    <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                    <Eye className="text-gray-900 relative z-10" size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed relative z-10">
                  To become the most trusted and preferred tile supplier in the UAE market by consistently 
                  delivering superior ceramic, porcelain, and specialty tile solutions that transform spaces 
                  and exceed expectations.
                </p>
                <ul className="space-y-4 relative z-10">
                  {[
                    'Establish market leadership across all Emirates',
                    'Pioneer innovative and sustainable tile solutions',
                    'Deliver unmatched customer service excellence',
                    'Expand global partnerships and reach',
                    'Set industry benchmarks for quality and innovation'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="p-2 rounded-full bg-gray-800 mr-4 mt-1 group-hover:silver-gradient transition-all duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                        <Star size={16} className="text-gray-400 group-hover:text-gray-900 relative z-10" />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 card-hover border border-gray-700 overflow-hidden relative group">
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="flex items-center mb-8 relative z-10">
                  <div className="p-3 rounded-xl silver-gradient mr-4 relative overflow-hidden">
                    <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                    <Target className="text-gray-900 relative z-10" size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed relative z-10">
                  To deliver world-class services and solutions for all porcelain and ceramic tile 
                  requirements with uncompromising quality, technical excellence, and customer-centric 
                  innovation.
                </p>
                <ul className="space-y-4 relative z-10">
                  {[
                    'Advanced manufacturing with precision engineering',
                    'Efficient logistics and quality assurance systems',
                    'Timely delivery and technical excellence',
                    'Customer-first approach from concept to completion',
                    'Sustainable practices and eco-friendly solutions',
                    'Continuous innovation in design and technology'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="p-2 rounded-full bg-gray-800 mr-4 mt-1 group-hover:silver-gradient transition-all duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                        <Target size={16} className="text-gray-400 group-hover:text-gray-900 relative z-10" />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
                <TrendingUp size={18} className="mr-2 relative z-10" /> 
                <span className="relative z-10">Our Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Comprehensive <span className="divisions-text">Divisions</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Specialized solutions for every architectural and design requirement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {divisions.map((division, index) => (
                <div
                  key={index}
                  className="group animate-on-scroll bg-white/5 backdrop-blur-md rounded-2xl p-6 card-hover border border-gray-700 hover:border-gray-500 cursor-pointer relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.03}s` }}
                >
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="w-10 h-10 rounded-lg silver-gradient flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                      <Award size={20} className="text-gray-900 relative z-10" />
                    </div>
                    <div className="p-2 rounded-full bg-gray-800 group-hover:silver-gradient transition-all duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                      <ChevronRight size={18} className="text-gray-400 group-hover:text-gray-900 relative z-10 transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors relative z-10">
                    {division}
                  </h3>
                  <div className="mt-4 pt-4 border-t border-gray-700 relative z-10">
                    <div className="flex items-center text-sm text-gray-400">
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div className="silver-gradient h-2 rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
                      </div>
                      <span className="ml-2 group-hover:text-gray-300 transition-colors">View Details</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Meet Our <span className="text-gray-300">Leadership</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Experienced professionals dedicated to excellence and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="group animate-on-scroll bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-500 hover:bg-white/10 transition-all duration-300 card-hover relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="flex items-center mb-4 relative z-10">
                    <div className="w-16 h-16 rounded-full silver-gradient flex items-center justify-center mr-4 relative overflow-hidden">
                      <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                      <span className="text-gray-900 text-xl font-bold relative z-10">{member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}</span>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">{member.name}</div>
                      <div className="text-sm text-gray-400">{member.role}</div>
                    </div>
                  </div>
                  <div className="mb-4 relative z-10">
                    <div className="text-sm text-gray-400">Experience</div>
                    <div className="text-lg font-semibold text-white">{member.experience}</div>
                  </div>
                  <div className="pt-4 border-t border-gray-700 relative z-10">
                    <div className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      <span>View Profile</span>
                      <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
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
                <Globe size={18} className="mr-2 relative z-10" /> 
                <span className="relative z-10">Our Partners</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Trusted <span className="partners-text">Global Partners</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Collaborating with world-renowned brands to deliver unparalleled quality and innovation
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="partner-card animate-on-scroll bg-white/5 backdrop-blur-md rounded-xl p-6 text-center border border-gray-700 hover:border-gray-400 hover:shadow-xl transition-all duration-300 card-hover group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="h-16 flex items-center justify-center mb-4 relative z-10">
                    <div className="w-12 h-12 rounded-full silver-gradient flex items-center justify-center group-hover:scale-110 transition-transform relative overflow-hidden">
                      <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                      <span className="text-gray-900 font-bold relative z-10">{partner.logo}</span>
                    </div>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors font-semibold relative z-10">
                    {partner.name}
                  </span>
                  <div className="mt-3 text-xs text-gray-500 group-hover:text-gray-400 transition-colors relative z-10">
                    Premium Partner
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                to="/partners"
                className="group inline-flex items-center px-8 py-4 sword-gradient text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 card-hover border border-gray-700 relative overflow-hidden silver-button-shine"
              >
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <span className="relative z-10">View All Partnerships</span>
                <ChevronRight size={20} className="ml-2 relative z-10 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 animate-on-scroll">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-white border border-gray-700 relative overflow-hidden group">
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <h3 className="text-2xl font-bold mb-6 text-gray-300 relative z-10">Contact Our Team</h3>
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
              <div className="silver-gradient-dark rounded-2xl p-8 h-full border border-gray-600 relative overflow-hidden group">
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 relative z-10">Quick Contact</h3>
                <p className="text-gray-700 mb-6 relative z-10">Get in touch with our team for expert advice</p>
                <Link
                  to="/contact"
                  className="group w-full px-6 py-4 sword-gradient text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 card-hover border border-gray-700 relative overflow-hidden silver-button-shine"
                >
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <span className="relative z-10">Schedule a Consultation</span>
                  <ArrowRight size={20} className="ml-2 relative z-10 group-hover:translate-x-2 transition-transform" />
                </Link>
                <div className="mt-6 text-center relative z-10">
                  <div className="text-sm text-gray-600">Response within 24 hours</div>
                </div>
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
              Ready to Work <span className="excellence-text">With Us?</span>
            </h2>
            <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Join our network of satisfied clients and experience the Simpolo difference in quality, service, and innovation
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="group px-8 py-4 silver-gradient text-gray-900 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 card-hover relative overflow-hidden silver-button-shine"
              >
                <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link
                to="/careers"
                className="group px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-semibold hover:bg-white/5 hover:border-gray-500 transition-all duration-300 flex items-center space-x-3 card-hover relative overflow-hidden"
              >
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <span className="relative z-10">Join Our Team</span>
                <ChevronRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link
                to="/gallery"
                className="group px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-semibold hover:bg-white/5 hover:border-gray-500 transition-all duration-300 flex items-center space-x-3 card-hover relative overflow-hidden"
              >
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <span className="relative z-10">View Our Work</span>
                <Eye size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="mt-16 pt-12 border-t border-gray-800">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
                {[
                  { value: '15+', label: 'Years Experience' },
                  { value: '500+', label: 'Projects Completed' },
                  { value: '300+', label: 'Happy Clients' },
                  { value: '50+', label: 'Global Partners' }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm card-hover relative overflow-hidden group">
                    <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <div className="text-4xl font-bold text-white mb-2 relative z-10">{stat.value}</div>
                    <div className="text-sm text-gray-400 font-medium relative z-10">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;