import React from 'react'
import { Mail, Phone, MapPin, Clock, Send, ChevronRight, MessageSquare, Building } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
      alert('Thank you for your message! We will contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

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
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(184, 134, 11, 0.15);
        }
        .input-focus:focus {
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
        }
        .form-slide {
          transition: all 0.5s ease;
        }
      `}</style>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C1C10] via-[#3D2817] to-[#5C4033] text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#D4AF37] rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#B8860B] rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-on-scroll">
            <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
              <MessageSquare size={18} className="mr-2 text-[#FFD700]" />
              <span className="text-[#FFD700]">Let's Connect</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Get In <span className="gold-gradient bg-clip-text text-transparent">Touch</span>
            </h1>
            <div className="w-24 h-1 gold-gradient mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
              Reach out to our team for inquiries, quotes, or expert support on premium tile solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <div className="sticky top-24">
                <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-[#F5EFE0] text-[#B8860B] text-sm font-medium">
                  <Building size={18} className="mr-2" /> Our Presence
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#2C1C10]">
                  Connect With <span className="gold-gradient bg-clip-text text-transparent">Us</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="group bg-white rounded-2xl shadow-sm p-6 card-hover border border-[#F0E6D2]">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl gold-gradient group-hover:scale-110 transition-transform">
                        <MapPin className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl mb-2 text-[#2C1C10] group-hover:text-[#B8860B] transition-colors">
                          Corporate Office
                        </h3>
                        <p className="text-gray-700 mb-2">
                          218, Al Suaidi Building<br />
                          Al Murar, Dubai – UAE
                        </p>
                        <a href="#" className="inline-flex items-center text-[#B8860B] hover:text-[#2C1C10] transition-colors text-sm">
                          Get Directions <ChevronRight size={14} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-white rounded-2xl shadow-sm p-6 card-hover border border-[#F0E6D2]">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl gold-gradient group-hover:scale-110 transition-transform">
                        <Building className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl mb-2 text-[#2C1C10] group-hover:text-[#B8860B] transition-colors">
                          Showroom & Warehouse
                        </h3>
                        <p className="text-gray-700 mb-2">
                          Sajja Industrial Area<br />
                          Sharjah, UAE
                        </p>
                        <p className="text-sm text-gray-600 mb-3">
                          Visit our showroom to explore our complete range of premium products
                        </p>
                        <a href="#" className="inline-flex items-center text-[#B8860B] hover:text-[#2C1C10] transition-colors text-sm">
                          Schedule a Visit <ChevronRight size={14} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="group bg-white rounded-2xl shadow-sm p-6 card-hover border border-[#F0E6D2]">
                      <div className="flex items-center mb-3">
                        <div className="p-2 rounded-lg bg-[#F5EFE0] mr-3 group-hover:gold-gradient transition-all">
                          <Phone className="text-[#B8860B] group-hover:text-white transition-colors" size={20} />
                        </div>
                        <h4 className="text-[#2C1C10] font-medium">Phone</h4>
                      </div>
                      <a href="tel:+971557234180" className="text-lg text-gray-700 hover:text-[#B8860B] transition-colors">
                        +971 55 723 4180
                      </a>
                    </div>

                    <div className="group bg-white rounded-2xl shadow-sm p-6 card-hover border border-[#F0E6D2]">
                      <div className="flex items-center mb-3">
                        <div className="p-2 rounded-lg bg-[#F5EFE0] mr-3 group-hover:gold-gradient transition-all">
                          <Mail className="text-[#B8860B] group-hover:text-white transition-colors" size={20} />
                        </div>
                        <h4 className="text-[#2C1C10] font-medium">Email</h4>
                      </div>
                      <a href="mailto:info@simpolotrading.com" className="text-gray-700 hover:text-[#B8860B] transition-colors break-all">
                        info@simpolotrading.com
                      </a>
                    </div>
                  </div>

                  <div className="group bg-gradient-to-br from-[#2C1C10] to-[#3D2817] rounded-2xl shadow-xl p-6 card-hover">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-white/20 mr-3">
                        <Clock className="text-[#FFD700]" size={20} />
                      </div>
                      <h4 className="text-white font-medium">Business Hours</h4>
                    </div>
                    <div className="space-y-2 text-white/90">
                      <div className="flex justify-between items-center">
                        <span>Saturday - Thursday</span>
                        <span className="text-[#FFD700] font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-white/10">
                        <span>Friday</span>
                        <span className="text-gray-400">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll form-slide" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 card-hover border border-[#F0E6D2]">
                <div className="flex items-center mb-8">
                  <div className="p-3 rounded-xl gold-gradient mr-4 animate-float">
                    <Send className="text-white" size={24} />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2C1C10]">Send Message</h2>
                    <p className="text-gray-600 mt-2">We typically respond within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm mb-2 text-gray-700 group-hover:text-[#2C1C10] transition-colors">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none input-focus focus:border-[#D4AF37] bg-gray-50 group-hover:bg-white transition-all"
                        placeholder="John Smith"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="email" className="block text-sm mb-2 text-gray-700 group-hover:text-[#2C1C10] transition-colors">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none input-focus focus:border-[#D4AF37] bg-gray-50 group-hover:bg-white transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="phone" className="block text-sm mb-2 text-gray-700 group-hover:text-[#2C1C10] transition-colors">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none input-focus focus:border-[#D4AF37] bg-gray-50 group-hover:bg-white transition-all"
                        placeholder="+971 55 123 4567"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="subject" className="block text-sm mb-2 text-gray-700 group-hover:text-[#2C1C10] transition-colors">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none input-focus focus:border-[#D4AF37] bg-gray-50 group-hover:bg-white transition-all appearance-none"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="quote">Request a Quote</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="visit">Schedule Showroom Visit</option>
                      </select>
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm mb-2 text-gray-700 group-hover:text-[#2C1C10] transition-colors">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none input-focus focus:border-[#D4AF37] bg-gray-50 group-hover:bg-white transition-all resize-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-4 gold-gradient text-white rounded-xl font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={20} className="animate-pulse" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-gray-500 text-sm mt-4">
                      By submitting, you agree to our privacy policy
                    </p>
                  </div>
                </form>
              </div>

              <div className="mt-8 bg-gradient-to-r from-[#F5EFE0] to-transparent p-6 rounded-2xl">
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-[#B8860B]/10 mr-3">
                    <MessageSquare className="text-[#B8860B]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#2C1C10] font-medium mb-1">Prefer direct contact?</h4>
                    <p className="text-gray-600 text-sm">
                      For urgent inquiries, call us directly at{' '}
                      <a href="tel:+971557234180" className="text-[#B8860B] hover:text-[#2C1C10] transition-colors font-medium">
                        +971 55 723 4180
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <div className="bg-gradient-to-r from-[#2C1C10] via-[#3D2817] to-[#2C1C10] rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Visit Our <span className="gold-gradient bg-clip-text text-transparent">Showroom</span>
                  </h2>
                  <p className="text-gray-300 mb-8">
                    Experience our premium tile collections firsthand. Our showroom in Sajja Industrial Area showcases the finest selection of porcelain, ceramic, and specialty tiles.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="#" className="px-6 py-3 bg-white text-[#2C1C10] rounded-full font-medium hover:bg-[#FFD700] transition-colors inline-flex items-center">
                      <MapPin size={18} className="mr-2" />
                      Get Directions
                    </a>
                    <a href="#" className="px-6 py-3 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors">
                      Schedule Appointment
                    </a>
                  </div>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2C1C10] to-transparent lg:from-transparent z-10"></div>
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                        <MapPin className="text-white" size={24} />
                      </div>
                      <p className="text-[#2C1C10] font-medium">Interactive Map Location</p>
                      <p className="text-gray-600 text-sm mt-2">Sajja Industrial Area, Sharjah, UAE</p>
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