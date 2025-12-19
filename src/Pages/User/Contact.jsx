import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ChevronRight, MessageSquare, Building, User, Globe, Calendar, Shield, CheckCircle, ArrowRight, Sparkles, Award, Target, Users } from 'lucide-react';
import Typewriter from 'typewriter-effect';

export function Contact() {
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
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
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
        .input-focus:focus {
          box-shadow: 0 0 0 3px rgba(120, 60, 33, 0.2);
          border-color: rgba(120, 60, 33, 1);
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
        .shimmer-effect {
          position: relative;
          overflow: hidden;
        }
        .shimmer-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          animation: shimmer 2s infinite;
        }
      `}</style>

      <section className="relative overflow-hidden bg-gradient-to-br from-[rgba(81,40,22,1)] via-[rgba(120,60,33,1)] to-[rgba(158,80,44,1)] text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[rgba(158,80,44,0.2)] rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[rgba(120,60,33,0.2)] rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-on-scroll max-w-4xl">
            <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-[rgba(158,80,44,0.3)]">
              <MessageSquare size={18} className="mr-2 text-white" />
              <span className="text-white font-medium">Let's Connect</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Get In <span className="">Touch</span>
            </h1>
            
            <div className="w-32 h-1.5 burgundy-gradient mb-8 rounded-full"></div>
            
            <div className="text-2xl md:text-3xl mb-8 text-white font-semibold h-12">
              <Typewriter
                options={{
                  strings: [
                    'Ready to Transform Your Space?',
                    'Expert Tile Solutions',
                    'Premium Quality Materials',
                    'Custom Design Services',
                    'Professional Consultation',
                    'Free Quote Available'
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
              Connect with our team of experts for personalized solutions, project consultations, 
              or to explore our premium tile collections. We're here to bring your vision to life 
              with exceptional service and quality craftsmanship.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="animate-on-scroll group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-white rounded-2xl shadow-xl p-6 card-hover border border-[#F0E6D2] h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl burgundy-gradient mb-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-[rgba(81,40,22,1)] mb-3 group-hover:text-[rgba(158,80,44,1)] transition-colors">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">{info.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <div className="sticky top-24">
                <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-[rgba(158,80,44,0.1)] text-[rgba(158,80,44,1)] text-sm font-semibold border border-[rgba(158,80,44,0.3)]">
                  <Building size={18} className="mr-2" /> Our Locations
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[rgba(81,40,22,1)]">
                  Where to <span className="burgundy-text">Find Us</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="group bg-white rounded-2xl shadow-xl p-8 card-hover border border-[#F0E6D2] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[rgba(158,80,44,0.1)] to-transparent rounded-full -translate-y-8 translate-x-8"></div>
                    <div className="flex items-start space-x-4 relative z-10">
                      <div className="p-4 rounded-xl burgundy-gradient group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="text-white" size={28} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-[rgba(81,40,22,1)] group-hover:text-[rgba(158,80,44,1)] transition-colors">
                            Corporate Headquarters
                          </h3>
                          <span className="px-3 py-1 bg-[rgba(158,80,44,0.1)] text-[rgba(158,80,44,1)] text-xs font-semibold rounded-full">
                            Main Office
                          </span>
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          218, Al Suaidi Building, Al Murar<br />
                          Dubai, United Arab Emirates
                        </p>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Clock size={14} className="mr-2" />
                          Mon-Sat: 8:00 AM - 6:00 PM
                        </div>
                        <a href="#" className="inline-flex items-center px-4 py-2 burgundy-gradient text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 card-hover">
                          <MapPin size={16} className="mr-2" />
                          Get Directions
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-white rounded-2xl shadow-xl p-8 card-hover border border-[#F0E6D2] relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[rgba(120,60,33,0.1)] to-transparent rounded-full translate-y-8 -translate-x-8"></div>
                    <div className="flex items-start space-x-4 relative z-10">
                      <div className="p-4 rounded-xl burgundy-gradient group-hover:scale-110 transition-transform duration-300">
                        <Building className="text-white" size={28} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-[rgba(81,40,22,1)] group-hover:text-[rgba(158,80,44,1)] transition-colors">
                            Showroom & Warehouse
                          </h3>
                          <span className="px-3 py-1 bg-[rgba(158,80,44,0.1)] text-[rgba(158,80,44,1)] text-xs font-semibold rounded-full">
                            Largest Collection
                          </span>
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          Sajja Industrial Area, Near Sharjah Cement Factory<br />
                          Sharjah, United Arab Emirates
                        </p>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Users size={14} className="mr-2" />
                          Expert consultants available daily
                        </div>
                        <a href="#" className="inline-flex items-center px-4 py-2 burgundy-gradient text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 card-hover">
                          <Calendar size={16} className="mr-2" />
                          Schedule Visit
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group bg-gradient-to-br from-[rgba(81,40,22,1)] to-[rgba(120,60,33,1)] rounded-2xl shadow-xl p-6 card-hover">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-lg bg-white/20 mr-3">
                          <Award className="text-[#dbdbdb]" size={20} />
                        </div>
                        <h4 className="text-white font-medium">Quick Response</h4>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">
                        We guarantee a response within 2 hours during business hours
                      </p>
                      <div className="flex items-center text-sm text-[rgba(158,80,44,1)]">
                        <Shield size={14} className="mr-2" />
                        Priority Support Available
                      </div>
                    </div>

                    <div className="group bg-gradient-to-br from-[rgba(158,80,44,1)] to-[rgba(120,60,33,1)] rounded-2xl shadow-xl p-6 card-hover">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-lg bg-white/20 mr-3">
                          <Target className="text-white" size={20} />
                        </div>
                        <h4 className="text-white font-medium">Free Consultation</h4>
                      </div>
                      <p className="text-white/90 text-sm mb-3">
                        Book a free 30-minute consultation with our design experts
                      </p>
                      <a href="#" className="inline-flex items-center text-sm text-white font-medium hover:text-[rgba(158,80,44,1)] transition-colors">
                        Book Now
                        <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 card-hover border border-[#F0E6D2] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 burgundy-gradient"></div>
                <div className="flex items-center mb-8">
                  <div className="p-4 rounded-xl burgundy-gradient mr-4 animate-float">
                    <Send className="text-white" size={28} />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[rgba(81,40,22,1)]">Send Message</h2>
                    <p className="text-gray-600 mt-2">Our team will get back to you within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm mb-2 text-gray-700 font-medium group-hover:text-[rgba(81,40,22,1)] transition-colors">
                        <User size={16} className="inline mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none input-focus bg-gray-50/50 group-hover:bg-white transition-all duration-300"
                        placeholder="John Smith"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="email" className="block text-sm mb-2 text-gray-700 font-medium group-hover:text-[rgba(81,40,22,1)] transition-colors">
                        <Mail size={16} className="inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none input-focus bg-gray-50/50 group-hover:bg-white transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="phone" className="block text-sm mb-2 text-gray-700 font-medium group-hover:text-[rgba(81,40,22,1)] transition-colors">
                        <Phone size={16} className="inline mr-2" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none input-focus bg-gray-50/50 group-hover:bg-white transition-all duration-300"
                        placeholder="+971 55 123 4567"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="company" className="block text-sm mb-2 text-gray-700 font-medium group-hover:text-[rgba(81,40,22,1)] transition-colors">
                        <Building size={16} className="inline mr-2" />
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none input-focus bg-gray-50/50 group-hover:bg-white transition-all duration-300"
                        placeholder="Optional"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="projectType" className="block text-sm mb-2 text-gray-700 font-medium group-hover:text-[rgba(81,40,22,1)] transition-colors">
                      <Target size={16} className="inline mr-2" />
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none input-focus bg-gray-50/50 group-hover:bg-white transition-all duration-300 appearance-none"
                    >
                      <option value="">Select Project Type</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type.toLowerCase().replace(/\s+/g, '-')}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm mb-2 text-gray-700 font-medium group-hover:text-[rgba(81,40,22,1)] transition-colors">
                      <MessageSquare size={16} className="inline mr-2" />
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none input-focus bg-gray-50/50 group-hover:bg-white transition-all duration-300 resize-none"
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full px-6 py-4 burgundy-gradient text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed card-hover"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing Your Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={20} className="group-hover:translate-x-2 transition-transform" />
                        </>
                      )}
                    </button>
                    <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
                      <Shield size={14} className="mr-2 text-[rgba(158,80,44,1)]" />
                      Your information is secure and will never be shared
                    </div>
                  </div>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-[rgba(158,80,44,0.1)] flex-shrink-0">
                      <Sparkles className="text-[rgba(158,80,44,1)]" size={20} />
                    </div>
                    <div>
                      <h4 className="text-[rgba(81,40,22,1)] font-medium mb-1">Need immediate assistance?</h4>
                      <p className="text-gray-600 text-sm">
                        Call our dedicated support line at{' '}
                        <a href="tel:+971557234180" className="text-[rgba(158,80,44,1)] hover:text-[rgba(81,40,22,1)] font-medium">
                          +971 55 723 4180
                        </a>
                        {' '}for urgent project requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#FAF7F0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <div className="text-center mb-16">
              <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-[rgba(158,80,44,0.1)] text-[rgba(158,80,44,1)] text-sm font-semibold border border-[rgba(158,80,44,0.3)]">
                <Globe size={18} className="mr-2" /> Regional Support
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[rgba(81,40,22,1)]">
                Serving <span className="burgundy-text">All Emirates</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
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
                <div key={index} className="animate-on-scroll group bg-white rounded-2xl p-6 shadow-lg card-hover border border-[#F0E6D2]" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{region.icon}</div>
                    <div className="px-3 py-1 bg-[rgba(158,80,44,0.1)] text-[rgba(158,80,44,1)] text-xs font-semibold rounded-full">
                      {region.delivery}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[rgba(81,40,22,1)] mb-2 group-hover:text-[rgba(158,80,44,1)] transition-colors">{region.emirate}</h3>
                  <div className="text-2xl font-bold text-[rgba(158,80,44,1)] mb-1">{region.projects}</div>
                  <div className="text-sm text-gray-500">Completed Projects</div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle size={14} className="text-[rgba(158,80,44,1)] mr-2" />
                      On-site consultation available
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(81,40,22,1)] via-[rgba(120,60,33,1)] to-[rgba(158,80,44,1)]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[rgba(158,80,44,0.3)] rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[rgba(120,60,33,0.3)] rounded-full mix-blend-overlay filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-semibold border border-white/20">
                <MapPin size={18} className="mr-2" /> Visit Our Showroom
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Experience Our <span className="">Showroom</span>
              </h2>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                Experience our premium tile collections firsthand. Our spacious showroom features 
                the latest designs, patterns, and finishes to help you visualize your perfect space.
              </p>
              
              <div className="space-y-6">
                {[
                  'Live demonstrations of tile installation',
                  'Expert design consultations',
                  'Material samples for touch and feel',
                  'Digital visualization tools',
                  'Custom design workstation'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center text-white group">
                    <div className="p-2 rounded-full bg-white/10 mr-4 group-hover:bg-[rgba(158,80,44,1)] transition-colors">
                      <CheckCircle size={18} className="text-[#ffffff] group-hover:text-white transition-colors" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <a href="#" className="group px-8 py-4 bg-white text-[rgba(81,40,22,1)] rounded-xl font-semibold hover:bg-[rgba(158,80,44,1)] hover:text-white hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 card-hover">
                  <MapPin size={20} className="mr-2" />
                  <span>Get Directions</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </a>
                
                <a href="#" className="group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-[rgba(158,80,44,1)] transition-all duration-300 flex items-center space-x-3 card-hover">
                  <Calendar size={20} className="mr-2" />
                  <span>Book Appointment</span>
                </a>
              </div>
            </div>
            
            <div className="animate-on-scroll relative" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-[rgba(158,80,44,1)] to-[rgba(120,60,33,1)] rounded-2xl p-1 card-hover">
                <div className="bg-[rgba(81,40,22,1)] rounded-xl p-8 text-white">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 burgundy-gradient rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Sajja Industrial Area</h3>
                    <p className="text-gray-300">Sharjah, United Arab Emirates</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-white/10">
                      <span className="text-gray-300">Distance from Dubai</span>
                      <span className="font-semibold">30 minutes</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-white/10">
                      <span className="text-gray-300">Parking Available</span>
                      <span className="text-[#ffffff] font-semibold">Free</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-white/10">
                      <span className="text-gray-300">Showroom Size</span>
                      <span className="font-semibold">5,000 sq.ft.</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-gray-300">Open Today</span>
                      <span className="text-[#ffffff] font-semibold">Until 6:00 PM</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center text-sm text-gray-300">
                      <Clock size={14} className="mr-2" />
                      Last entry 5:30 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}