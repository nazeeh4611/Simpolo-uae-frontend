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
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes swordShimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
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
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .silver-border-shimmer {
          position: relative;
        }
        .silver-border-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent, 
            #c0c0c0, 
            #e8e8e8, 
            #c0c0c0, 
            transparent
          );
          animation: swordShimmer 2s infinite linear;
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
      
      <nav
        className={`fixed top-0 left-0 right-0 z-50 sword-gradient transition-all duration-300 ${scrolled ? 'shadow-2xl shadow-black/50' : ''}`}
        style={{ height: '80px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">

            <Link to="/" className="flex items-center h-full relative">
              <img
                src="/ts.png"
                alt="Simpolo"
                className={`max-h-[90px] w-auto object-contain transition-transform duration-300 ${scrolled ? 'scale-100' : 'scale-125'}`}
              />
              <div className="absolute -bottom-2 left-0 right-0 h-[2px] sword-shimmer rounded-full"></div>
            </Link>


            {/* <Link to="/" className="flex items-center h-full relative">
  <img
    src="/tes.png"
    alt="Simpolo"
    className={`
      h-[80px] 
      w-auto 
      object-contain 
      transition-all 
      duration-300
      ${scrolled ? 'scale-100' : 'scale-110'}
    `}
  />
  <div className="absolute -bottom-2 left-0 right-0 h-[2px] sword-shimmer rounded-full"></div>
</Link> */}

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
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 sword-shimmer rounded-full" />
                  )}
                </Link>
              ))}

              <Link
                to="/contact"
                className="ml-6 px-6 py-2.5 silver-button-shine sword-gradient text-white rounded-xl font-medium flex items-center space-x-2 hover:shadow-lg hover:shadow-gray-600/20 transition-all border border-gray-700 relative overflow-hidden"
              >
                <Phone size={16} />
                <span>Get Quote</span>
                <ChevronRight size={16} />
              </Link>
            </div>

            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-gray-700"
              >
                {isOpen ? <X size={24} className="text-gray-300" /> : <Menu size={24} className="text-gray-300" />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 sword-gradient shadow-2xl border-t border-gray-700">
              <div className="px-4 pt-4 pb-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-all mb-2 ${
                      isActive(link.path)
                        ? 'bg-gray-800/50 text-gray-300 border-l-4 sword-shimmer'
                        : 'text-gray-400 hover:bg-gray-800/30 hover:text-gray-300'
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
                  className="block mt-6 mx-4 px-4 py-3 silver-button-shine sword-gradient text-white rounded-xl font-medium text-center border border-gray-700 hover:shadow-lg hover:shadow-gray-600/20 transition-all relative overflow-hidden"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}