import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight, Sparkles } from 'lucide-react';

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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50
        bg-gradient-to-r from-[#2C1C10] via-[#3D2817] to-[#2C1C10]
        transition-shadow duration-300
        ${scrolled ? 'shadow-2xl' : ''}
      `}
      style={{ height: '80px' }}   // 🔒 FIXED NAVBAR HEIGHT
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">

          {/* LOGO */}
          <Link to="/" className="flex items-center h-full">
            <img
              src="/sim.webp"
              alt="Simpolo"
              className={`
                max-h-[86px]
                w-auto
                object-contain
                transition-transform duration-300
                ${scrolled ? 'scale-100' : 'scale-125'}
              `}
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="group relative px-4 py-2"
              >
                <span
                  className={`text-sm transition-colors ${
                    isActive(link.path)
                      ? 'text-[#FFD700]'
                      : 'text-gray-300 hover:text-[#FFD700]'
                  }`}
                >
                  {link.label}
                </span>

                {isActive(link.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] rounded-full" />
                )}
              </Link>
            ))}

            <Link
              to="/contact"
              className="ml-6 px-6 py-2.5 bg-gradient-to-r from-[#B8860B] to-[#D4AF37]
              text-white rounded-xl font-medium flex items-center space-x-2
              hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all"
            >
              <Phone size={16} />
              <span>Get Quote</span>
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden mt-2 border-t border-white/10 pt-4 pb-4">
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
                  {isActive(link.path) && <Sparkles size={16} />}
                </div>
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 mx-4 px-4 py-3
              bg-gradient-to-r from-[#B8860B] to-[#D4AF37]
              text-white rounded-xl font-medium text-center"
            >
              Request a Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
