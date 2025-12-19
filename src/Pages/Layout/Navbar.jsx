import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight, Building2, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gradient-to-r from-[#2C1C10] via-[#3D2817] to-[#2C1C10] shadow-2xl py-2' 
        : 'bg-gradient-to-r from-[#2C1C10] via-[#3D2817] to-[#2C1C10] py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-[#B8860B] to-[#FFD700] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Building2 className="text-white" size={24} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFD700] rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                  SIMPOLO TRADING
                </span>
              </div>
              <div className="text-xs text-gray-300">Premium Tile Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className="group relative px-4 py-2"
              >
                <span className={`text-sm transition-colors ${
                  isActive(link.path)
                    ? 'text-[#FFD700]'
                    : 'text-gray-300 hover:text-[#FFD700]'
                }`}>
                  {link.label}
                </span>
                
                {/* Active indicator */}
                {isActive(link.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] rounded-full"></div>
                )}
                
                {/* Hover indicator */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B]/10 to-[#D4AF37]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                
                {/* Animated border on hover */}
                {!isActive(link.path) && (
                  <div className="absolute inset-0 border border-transparent group-hover:border-[#D4AF37]/30 rounded-lg transition-all duration-300 -z-10"></div>
                )}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-6 px-6 py-2.5 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white rounded-xl font-medium hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300 flex items-center space-x-2 group"
            >
              <Phone size={16} />
              <span>Get Quote</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden space-x-4">
            <a href="tel:+971557234180" className="hidden sm:flex items-center text-sm text-[#FFD700] hover:text-white transition-colors">
              <Phone size={16} className="mr-1" />
              <span>+971 55 723 4180</span>
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              {isOpen ? (
                <X className="text-white" size={24} />
              ) : (
                <Menu className="text-white" size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden animate-fadeIn mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all ${
                    isActive(link.path)
                      ? 'bg-gradient-to-r from-[#B8860B]/20 to-[#D4AF37]/20 text-[#FFD700]'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{link.label}</span>
                    {isActive(link.path) && (
                      <Sparkles size={16} className="text-[#FFD700]" />
                    )}
                  </div>
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block mt-4 px-4 py-3 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white rounded-xl font-medium text-center"
              >
                Request a Quote
              </Link>
              
              <div className="flex justify-center space-x-6 mt-6 pt-6 border-t border-white/10">
                <a href="tel:+971557234180" className="text-sm text-gray-300 hover:text-[#FFD700] transition-colors">
                  <Phone size={16} className="inline mr-1" />
                  Call Now
                </a>
                <a href="mailto:info@simpolotrading.com" className="text-sm text-gray-300 hover:text-[#FFD700] transition-colors">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}