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
        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
        transition-all duration-300
        ${scrolled ? 'shadow-2xl' : ''}
      `}
      style={{ height: '80px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">

          {/* LOGO */}
          <Link to="/" className="flex items-center h-full">
            <img
              src="/sim.webp"
              alt="Simpolo"
              className={`
                max-h-[90px]
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
                      ? 'text-gray-300'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {link.label}
                </span>

                {isActive(link.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 rounded-full" />
                )}
              </Link>
            ))}

            <Link
              to="/contact"
              className="ml-6 px-6 py-2.5 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700
              text-white rounded-xl font-medium flex items-center space-x-2
              hover:shadow-lg hover:shadow-gray-600/20 transition-all border border-gray-600"
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

        {/* MOBILE MENU - Fixed positioning */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl border-t border-gray-700">
            <div className="px-4 pt-4 pb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all mb-2 ${
                    isActive(link.path)
                      ? 'bg-gradient-to-r from-gray-700/30 to-gray-600/30 text-gray-300 border-l-4 border-gray-300'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{link.label}</span>
                    {isActive(link.path) && <Sparkles size={16} className="text-gray-300" />}
                  </div>
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block mt-6 mx-4 px-4 py-3
                bg-gradient-to-r from-gray-700 to-gray-600
                text-white rounded-xl font-medium text-center border border-gray-600
                hover:shadow-lg hover:shadow-gray-600/20 transition-all"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}