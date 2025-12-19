import React, { useEffect } from 'react';
import { Target, Eye, Award, ChevronRight, Users, Globe, Building, CheckCircle, Sparkles, TrendingUp, Shield, Star, Package, Truck, Clock, MapPin, Phone, Mail, Award as AwardIcon, Trophy, Briefcase, Heart } from 'lucide-react';
import Typewriter from 'typewriter-effect';

export function About() {
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
        .burgundy-gradient {
          background: linear-gradient(135deg, rgba(158, 80, 44, 1) 0%, rgba(120, 60, 33, 1) 50%, rgba(81, 40, 22, 1) 100%);
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        .burgundy-text {
          background: linear-gradient(135deg, rgba(158, 80, 44, 1) 0%, rgba(120, 60, 33, 1) 50%, rgba(81, 40, 22, 1) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(158, 80, 44, 0.15);
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
          background: linear-gradient(90deg, transparent, rgba(120, 60, 33, 0.1), transparent);
          transition: left 0.6s;
        }
        .partner-card:hover::before {
          left: 100%;
        }
        .typewriter-cursor {
          display: inline-block;
          width: 3px;
          background: rgba(158, 80, 44, 1);
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
          background: rgba(120, 60, 33, 1);
          border: 3px solid white;
          box-shadow: 0 0 0 3px rgba(120, 60, 33, 0.2);
        }
        .timeline-item::after {
          content: '';
          position: absolute;
          left: 5px;
          top: 40px;
          bottom: -20px;
          width: 2px;
          background: linear-gradient(to bottom, rgba(120, 60, 33, 1), transparent);
        }
        .timeline-item:last-child::after {
          display: none;
        }
      `}</style>

<section className="relative overflow-hidden bg-gradient-to-br from-[rgba(81,40,22,1)] via-[rgba(120,60,33,1)] to-[rgba(158,80,44,1)] text-white py-24">
  
  {/* Floating background blobs */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[rgba(158,80,44,0.2)] rounded-full blur-3xl animate-float"></div>
    <div
      className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[rgba(120,60,33,0.2)] rounded-full blur-3xl animate-float"
      style={{ animationDelay: '1.5s' }}
    ></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    {/* CONTENT GRID */}
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* LEFT CONTENT */}
      <div className="animate-on-scroll max-w-4xl">
        <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-[rgba(158,80,44,0.3)]">
          <Sparkles size={18} className="mr-2 text-white" />
          <span className="text-white font-medium">Our Legacy</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          About <span>Simpolo</span>
        </h1>

        <div className="w-32 h-1.5 burgundy-gradient mb-8 rounded-full"></div>

        <div className="text-2xl md:text-3xl mb-8 text-white font-semibold h-12">
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

        <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-3xl leading-relaxed">
          From humble beginnings to becoming a market leader, Simpolo Trading LLC has redefined
          excellence in premium tile solutions. Our journey spans over a decade of innovation,
          quality craftsmanship, and unwavering commitment to customer satisfaction.
        </p>
      </div>

      {/* RIGHT LOGO */}
      <div className="hidden lg:flex justify-center items-center">
        <div className="relative">
          <img
            src="/simlogo.webp"   // 🔁 replace with your actual logo path
            alt="Simpolo Logo"
            className="w-[340px] xl:w-[400px] opacity-90 drop-shadow-2xl"
          />
        </div>
      </div>

    </div>
  </div>
</section>


      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {[
                { icon: Users, value: '300+', label: 'Happy Clients', desc: 'Across UAE' },
                { icon: AwardIcon, value: '500+', label: 'Projects', desc: 'Successfully Completed' },
                { icon: Globe, value: '15+', label: 'Years', desc: 'Industry Experience' },
              ].map((stat, index) => (
                <div key={index} className="animate-on-scroll text-center p-8 rounded-2xl bg-gradient-to-br from-[#FAF7F0] to-white border border-[rgba(158,80,44,0.2)] hover:shadow-xl transition-all duration-300 card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full burgundy-gradient mb-6">
                    <stat.icon className="text-white" size={28} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-[rgba(81,40,22,1)] mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-[rgba(158,80,44,1)] mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.desc}</div>
                </div>
              ))}
            </div>

            <div className="animate-on-scroll">
              <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-[rgba(158,80,44,0.1)] text-[rgba(158,80,44,1)] text-sm font-semibold border border-[rgba(158,80,44,0.3)]">
                <Briefcase size={18} className="mr-2" /> Our Journey
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[rgba(81,40,22,1)]">
                Crafting <span className="burgundy-text">Excellence</span> Since 2008
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                  <div className="bg-white p-8 rounded-3xl shadow-lg card-hover border-l-4 border-[rgba(120,60,33,1)]">
                    <div className="flex items-start mb-4">
                      <div className="p-3 rounded-xl burgundy-gradient mr-4">
                        <Building className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[rgba(81,40,22,1)] mb-2">Company Foundation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          <span className="font-semibold text-[rgba(81,40,22,1)]">Simpolo Trading LLC</span> began its journey 
                          in 2008 with a vision to revolutionize the tile industry in UAE through 
                          superior quality and innovative designs.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-8 rounded-3xl shadow-lg card-hover">
                    <div className="flex items-start mb-4">
                      <div className="p-3 rounded-xl burgundy-gradient mr-4">
                        <Package className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[rgba(81,40,22,1)] mb-2">Manufacturing Excellence</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our state-of-the-art production unit in India employs cutting-edge technology 
                          meeting BS/EN and ANSI/ASTM standards, ensuring exceptional product quality 
                          and innovative design capability.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-8 rounded-3xl shadow-lg card-hover">
                    <div className="flex items-start mb-4">
                      <div className="p-3 rounded-xl burgundy-gradient mr-4">
                        <Truck className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[rgba(81,40,22,1)] mb-2">UAE Operations</h3>
                        <p className="text-gray-700 leading-relaxed">
                          With a dedicated fabrication facility in ICAD, Abu Dhabi and warehousing in 
                          Sharjah, we provide rapid customization and reliable delivery across all Emirates.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-[rgba(81,40,22,1)] to-[rgba(120,60,33,1)] text-white p-8 rounded-3xl shadow-xl">
                    <h3 className="text-2xl font-bold mb-6 text-white">Our Timeline</h3>
                    <div className="space-y-8 pl-6">
                      {milestones.map((milestone, index) => (
                        <div key={index} className="timeline-item pl-8">
                          <div className="text-3xl font-bold text-[rgba(158,80,44,1)] mb-1">{milestone.year}</div>
                          <div className="text-lg font-semibold mb-1">{milestone.title}</div>
                          <div className="text-gray-300 text-sm">{milestone.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white p-8 rounded-3xl shadow-lg card-hover border-r-4 border-[rgba(120,60,33,1)]">
                    <div className="flex items-start mb-4">
                      <div className="p-3 rounded-xl burgundy-gradient mr-4">
                        <Heart className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[rgba(81,40,22,1)] mb-2">Customer Commitment</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We serve residential, commercial, hospitality, and government projects with 
                          personalized solutions, technical support, and after-sales service.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      {['Free Consultation', 'Custom Designs', 'Installation Support', '10-Year Warranty'].map((item, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle size={16} className="text-[rgba(158,80,44,1)] mr-2" />
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

      <section className="py-24 bg-gradient-to-b from-[#FAF7F0] to-[#F5EFE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 card-hover border border-[#F0E6D2] overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgba(158,80,44,0.1)] rounded-full -translate-y-16 translate-x-16"></div>
                <div className="flex items-center mb-8 relative z-10">
                  <div className="p-3 rounded-xl burgundy-gradient mr-4">
                    <Eye className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[rgba(81,40,22,1)]">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed relative z-10">
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
                      <div className="p-2 rounded-full bg-[rgba(158,80,44,0.1)] mr-4 mt-1 group-hover:burgundy-gradient transition-all duration-300">
                        <Star size={16} className="text-[rgba(158,80,44,1)] group-hover:text-white" />
                      </div>
                      <span className="text-gray-700 group-hover:text-[rgba(81,40,22,1)] transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 card-hover border border-[#F0E6D2] overflow-hidden relative">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[rgba(120,60,33,0.1)] rounded-full translate-y-16 -translate-x-16"></div>
                <div className="flex items-center mb-8 relative z-10">
                  <div className="p-3 rounded-xl burgundy-gradient mr-4">
                    <Target className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[rgba(81,40,22,1)]">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed relative z-10">
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
                      <div className="p-2 rounded-full bg-[rgba(158,80,44,0.1)] mr-4 mt-1 group-hover:burgundy-gradient transition-all duration-300">
                        <Target size={16} className="text-[rgba(158,80,44,1)] group-hover:text-white" />
                      </div>
                      <span className="text-gray-700 group-hover:text-[rgba(81,40,22,1)] transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <div className="text-center mb-16">
              <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-[rgba(158,80,44,0.1)] text-[rgba(158,80,44,1)] text-sm font-semibold border border-[rgba(158,80,44,0.3)]">
                <TrendingUp size={18} className="mr-2" /> Our Expertise
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[rgba(81,40,22,1)]">
                Comprehensive <span className="burgundy-text">Divisions</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Specialized solutions for every architectural and design requirement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {divisions.map((division, index) => (
                <div
                  key={index}
                  className="group animate-on-scroll bg-white rounded-2xl p-6 shadow-lg border border-[#F0E6D2] hover:shadow-2xl card-hover cursor-pointer"
                  style={{ animationDelay: `${index * 0.03}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg burgundy-gradient flex items-center justify-center">
                      <Award size={20} className="text-white" />
                    </div>
                    <div className="p-2 rounded-full bg-[rgba(158,80,44,0.1)] group-hover:burgundy-gradient transition-all duration-300">
                      <ChevronRight size={18} className="text-[rgba(158,80,44,1)] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[rgba(81,40,22,1)] group-hover:text-[rgba(158,80,44,1)] transition-colors">
                    {division}
                  </h3>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="burgundy-gradient h-2 rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
                      </div>
                      <span className="ml-2 group-hover:text-[rgba(158,80,44,1)] transition-colors">View Details</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[rgba(81,40,22,1)] via-[rgba(120,60,33,1)] to-[rgba(158,80,44,1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Meet Our <span className="">Leadership</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Experienced professionals dedicated to excellence and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="animate-on-scroll group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[rgba(158,80,44,0.3)] hover:bg-white/10 transition-all duration-300 card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full burgundy-gradient flex items-center justify-center mr-4">
                      <span className="text-white text-xl font-bold">{member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}</span>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">{member.name}</div>
                      <div className="text-sm text-[rgba(158,80,44,1)]">{member.role}</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm text-gray-300">Experience</div>
                    <div className="text-lg font-semibold text-white">{member.experience}</div>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center text-sm text-gray-400 group-hover:text-[#ffffff] transition-colors">
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

      <section className="py-24 bg-gradient-to-b from-[#FAF7F0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <div className="text-center mb-16">
              <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-[rgba(158,80,44,0.1)] text-[rgba(158,80,44,1)] text-sm font-semibold border border-[rgba(158,80,44,0.3)]">
                <Globe size={18} className="mr-2" /> Our Partners
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[rgba(81,40,22,1)]">
                Trusted <span className="burgundy-text">Global Partners</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Collaborating with world-renowned brands to deliver unparalleled quality and innovation
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="partner-card animate-on-scroll bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-[rgba(158,80,44,1)] hover:shadow-xl transition-all duration-300 card-hover group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="h-16 flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full burgundy-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold">{partner.logo}</span>
                    </div>
                  </div>
                  <span className="text-gray-800 group-hover:text-[rgba(158,80,44,1)] transition-colors font-semibold">
                    {partner.name}
                  </span>
                  <div className="mt-3 text-xs text-gray-500 group-hover:text-[rgba(120,60,33,1)] transition-colors">
                    Premium Partner
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="group inline-flex items-center px-8 py-4 burgundy-gradient text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 card-hover">
                <span>View All Partnerships</span>
                <ChevronRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[rgba(81,40,22,1)] via-[rgba(120,60,33,1)] to-[rgba(158,80,44,1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 animate-on-scroll">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-white border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-[#dedede]">Contact Our Team</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-[rgba(158,80,44,1)] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1">Our Locations</div>
                      <div className="text-gray-300 text-sm">Sharjah Industrial Area, UAE</div>
                      <div className="text-gray-300 text-sm">ICAD, Abu Dhabi</div>
                      <div className="text-gray-300 text-sm">Jebel Ali Free Zone, Dubai</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone size={24} className="text-[rgba(158,80,44,1)] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1">Call Us</div>
                      <div className="text-gray-300 text-sm">+971 4 123 4567</div>
                      <div className="text-gray-300 text-sm">+971 50 123 4567</div>
                      <div className="text-gray-300 text-sm">+971 2 345 6789</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail size={24} className="text-[rgba(158,80,44,1)] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1">Email Us</div>
                      <div className="text-gray-300 text-sm">info@simpolotrading.com</div>
                      <div className="text-gray-300 text-sm">sales@simpolotrading.com</div>
                      <div className="text-gray-300 text-sm">support@simpolotrading.com</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock size={24} className="text-[rgba(158,80,44,1)] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1">Working Hours</div>
                      <div className="text-gray-300 text-sm">Sun - Thu: 8:00 AM - 6:00 PM</div>
                      <div className="text-gray-300 text-sm">Fri: 9:00 AM - 1:00 PM</div>
                      <div className="text-gray-300 text-sm">Sat: By Appointment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-[rgba(158,80,44,1)] to-[rgba(120,60,33,1)] rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-6 text-[#ffffff]">Quick Contact</h3>
                <p className="text-[rgba(255,245,240,1)] mb-6">Get in touch with our team for expert advice</p>
                <button className="group w-full px-6 py-4 bg-[rgba(81,40,22,1)] text-white rounded-xl font-semibold hover:bg-[rgba(120,60,33,1)] hover:shadow-xl transition-all duration-300 card-hover">
                  <span>Schedule a Consultation</span>
                </button>
                <div className="mt-6 text-center">
                  <div className="text-sm text-[rgba(255,245,240,1)]">Response within 24 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}