import React from 'react'
import { Target, Eye, Award, ChevronRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function About() {
  const partners = [
    'Simpolo Ceramics',
    'Volark Indian Tiles',
    'Porcellan',
    'RAK Ceramics',
    'Kludi RAK',
    'Bella Sanitary',
    'TOTO Sanitary',
    'Laticrete',
    'Mapei',
    'Saveto',
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
  ];

  const sectionRef = useRef(null);

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
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .gold-gradient {
          background: linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #FFD700 100%);
        }
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(184, 134, 11, 0.15);
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
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent);
          transition: left 0.6s;
        }
        .partner-card:hover::before {
          left: 100%;
        }
      `}</style>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C1C10] via-[#3D2817] to-[#5C4033] text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#D4AF37] rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#B8860B] rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-on-scroll">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              About <span className="gold-gradient bg-clip-text text-transparent">Us</span>
            </h1>
            <div className="w-24 h-1 gold-gradient mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
              Pioneering excellence in premium tile solutions through innovation, quality, and unparalleled craftsmanship.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto animate-on-scroll">
            <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-[#F5EFE0] text-[#B8860B] text-sm font-medium">
              <ChevronRight size={16} className="mr-1" /> Our Story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#2C1C10]">
              Crafting <span className="gold-gradient bg-clip-text text-transparent">Excellence</span> Since Day One
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="bg-white p-6 rounded-2xl shadow-sm card-hover border-l-4 border-[#D4AF37]">
                  <span className="font-semibold text-[#2C1C10]">Simpolo Trading LLC</span> is a UAE-based trading and project-focused supply company with direct access to its own manufacturing operations.
                </p>
                <p className="bg-white p-6 rounded-2xl shadow-sm card-hover">
                  Our production unit in India is equipped with advanced technology meeting all required BS/EN and ANSI/ASTM standards, ensuring exceptional product quality and innovative design capability.
                </p>
                <p className="bg-white p-6 rounded-2xl shadow-sm card-hover">
                  Supported by a specialized fabrication facility in ICAD, Abu Dhabi, we provide rapid customization and fast delivery for ongoing projects across the region.
                </p>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="bg-white p-6 rounded-2xl shadow-sm card-hover">
                  With dual production strength from both India and UAE facilities, we ensure consistent supply reliability and flexibility for large-scale project schedules.
                </p>
                <p className="bg-white p-6 rounded-2xl shadow-sm card-hover border-r-4 border-[#D4AF37]">
                  Our modern showroom and warehousing facility in Sharjah offers immediate stock availability, accurate in-house fabrication, and reliable logistics.
                </p>
                <p className="bg-gradient-to-br from-[#2C1C10] to-[#3D2817] text-white p-6 rounded-2xl shadow-lg">
                  We serve residential, commercial, hospitality, and government projects, delivering premium-quality solutions with exceptional service across the UAE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#FAF7F0] to-[#F5EFE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 card-hover border border-[#F0E6D2]">
                <div className="flex items-center mb-8">
                  <div className="p-3 rounded-xl gold-gradient mr-4">
                    <Eye className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#2C1C10]">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  To become the most trusted and preferred tile supplier in the UAE market by consistently delivering superior ceramic, porcelain, and specialty tile solutions.
                </p>
                <ul className="space-y-4">
                  {[
                    'Strengthen our presence across all Emirates',
                    'Provide durable products and innovative designs',
                    'Offer reliable service for all project types',
                    'Set new standards in customer satisfaction'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="p-1 rounded-full bg-[#F5EFE0] mr-3 mt-1 group-hover:gold-gradient transition-all">
                        <ChevronRight size={14} className="text-[#B8860B] group-hover:text-white" />
                      </div>
                      <span className="text-gray-700 group-hover:text-[#2C1C10] transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 card-hover border border-[#F0E6D2]">
                <div className="flex items-center mb-8">
                  <div className="p-3 rounded-xl gold-gradient mr-4">
                    <Target className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#2C1C10]">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  To deliver world-class services and solutions for all porcelain and ceramic tile requirements with uncompromising quality.
                </p>
                <ul className="space-y-4">
                  {[
                    'Advanced manufacturing and precision fabrication',
                    'Efficient logistics and consistent quality assurance',
                    'Timely delivery and technical excellence',
                    'Customer-first approach from concept to completion',
                    'Sustainable practices and innovative solutions'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="p-1 rounded-full bg-[#F5EFE0] mr-3 mt-1 group-hover:gold-gradient transition-all">
                        <ChevronRight size={14} className="text-[#B8860B] group-hover:text-white" />
                      </div>
                      <span className="text-gray-700 group-hover:text-[#2C1C10] transition-colors">{item}</span>
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
              <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-[#F5EFE0] text-[#B8860B] text-sm font-medium">
                <Award size={18} className="mr-2" /> Our Expertise
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2C1C10]">
                Comprehensive <span className="gold-gradient bg-clip-text text-transparent">Divisions</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Specialized solutions for every architectural and design requirement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {divisions.map((division, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-[#F0E6D2] hover:shadow-xl card-hover cursor-pointer"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-[#2C1C10] group-hover:text-[#B8860B] transition-colors">
                      {division}
                    </h3>
                    <div className="p-2 rounded-full bg-[#F5EFE0] group-hover:gold-gradient transition-all">
                      <ChevronRight size={18} className="text-[#B8860B] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div className="gold-gradient h-1.5 rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
                      </div>
                      <span className="ml-2">Explore</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#2C1C10] via-[#3D2817] to-[#2C1C10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Trusted <span className="gold-gradient bg-clip-text text-transparent">Global Partners</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Collaborating with world-renowned brands to deliver unparalleled quality and innovation
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="partner-card bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-[#D4AF37]/30 hover:bg-white/10 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="h-12 flex items-center justify-center mb-4">
                    <div className="w-10 h-10 rounded-full gold-gradient opacity-20 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-white group-hover:text-[#FFD700] transition-colors font-medium">
                    {partner}
                  </span>
                  <div className="mt-4 text-xs text-gray-400 group-hover:text-[#D4AF37] transition-colors">
                    Premium Partner
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="inline-flex items-center justify-center p-1 rounded-full gold-gradient">
                <button className="px-8 py-3 bg-[#2C1C10] text-white rounded-full font-medium hover:bg-transparent transition-colors">
                  View All Partnerships
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}