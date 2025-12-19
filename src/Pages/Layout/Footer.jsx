import React from 'react'
import { Mail, Phone, MapPin, ChevronRight, Building2, Facebook, Instagram, Linkedin, Twitter, Send, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Products & Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const servicesLinks = [
    { label: 'Porcelain Tiles', path: '/services' },
    { label: 'Marble & Granite', path: '/services' },
    { label: 'Fabrication Services', path: '/services' },
    { label: 'Sanitary Ware', path: '/services' },
    { label: 'Swimming Pool Tiles', path: '/services' },
    { label: 'Custom Solutions', path: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#2C1C10] via-[#3D2817] to-[#2C1C10] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-[#B8860B] to-[#FFD700] rounded-lg flex items-center justify-center">
                <Building2 className="text-white" size={24} />
              </div>
              <div className="text-xl font-bold">
                <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                  SIMPOLO TRADING
                </span>
                <div className="text-sm text-gray-400">LLC</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Pioneering excellence in premium tile solutions through innovation, quality, and unparalleled craftsmanship across the UAE.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="pt-4">
              <h4 className="text-sm font-medium text-[#FFD700] mb-3">Stay Updated</h4>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l-xl focus:outline-none focus:border-[#D4AF37] text-white placeholder-gray-400"
                  />
                  <button
                    type="submit"
                    disabled={subscribed}
                    className="px-4 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white rounded-r-xl hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    <Send size={20} />
                  </button>
                </div>
                {subscribed && (
                  <p className="text-sm text-green-400 animate-fadeIn">Thank you for subscribing!</p>
                )}
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-white/10">
              <span className="bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                Quick Links
              </span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-gray-300 hover:text-[#FFD700] transition-colors"
                  >
                    <ChevronRight size={14} className="mr-2 text-[#B8860B] group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-white/10">
              <span className="bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                Our Services
              </span>
            </h3>
            <ul className="space-y-3">
              {servicesLinks.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="group flex items-center text-gray-300 hover:text-[#FFD700] transition-colors"
                  >
                    <Sparkles size={14} className="mr-2 text-[#B8860B] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-white/10">
              <span className="bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                Contact Info
              </span>
            </h3>
            <ul className="space-y-4">
              <li className="group flex items-start space-x-4 hover:translate-x-2 transition-transform">
                <div className="p-2 rounded-lg bg-white/10 group-hover:bg-gradient-to-r from-[#B8860B] to-[#D4AF37] transition-all">
                  <MapPin className="text-white" size={18} />
                </div>
                <div>
                  <div className="text-sm text-[#FFD700]">Corporate Office</div>
                  <div className="text-gray-300 text-sm">
                    218, Al Suaidi Building<br />
                    Al Murar, Dubai – UAE
                  </div>
                </div>
              </li>
              
              <li className="group flex items-center space-x-4 hover:translate-x-2 transition-transform">
                <div className="p-2 rounded-lg bg-white/10 group-hover:bg-gradient-to-r from-[#B8860B] to-[#D4AF37] transition-all">
                  <Phone className="text-white" size={18} />
                </div>
                <div>
                  <div className="text-sm text-[#FFD700]">Phone</div>
                  <a href="tel:+971557234180" className="text-gray-300 text-sm hover:text-[#FFD700] transition-colors">
                    +971 55 723 4180
                  </a>
                </div>
              </li>
              
              <li className="group flex items-center space-x-4 hover:translate-x-2 transition-transform">
                <div className="p-2 rounded-lg bg-white/10 group-hover:bg-gradient-to-r from-[#B8860B] to-[#D4AF37] transition-all">
                  <Mail className="text-white" size={18} />
                </div>
                <div>
                  <div className="text-sm text-[#FFD700]">Email</div>
                  <a href="mailto:info@simpolotrading.com" className="text-gray-300 text-sm hover:text-[#FFD700] transition-colors break-all">
                    info@simpolotrading.com
                  </a>
                </div>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-sm font-medium text-[#FFD700] mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Twitter, label: 'Twitter' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="p-2 rounded-lg bg-white/10 hover:bg-gradient-to-r from-[#B8860B] to-[#D4AF37] transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="text-gray-300 group-hover:text-white" size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Simpolo Trading LLC. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <div className="inline-flex items-center px-4 py-2 bg-white/5 rounded-full">
              <span className="text-xs text-gray-400">Licensed by Dubai Economic Department • Trade License: 1234567</span>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </footer>
  );
}