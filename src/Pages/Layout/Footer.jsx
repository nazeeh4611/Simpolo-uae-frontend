import React from 'react'
import { Mail, Phone, MapPin, ChevronRight, Facebook, Instagram, Linkedin, Twitter, Send, Sparkles } from 'lucide-react';
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
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes swordShimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
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
        .sword-gradient-light {
          background: linear-gradient(135deg, 
            #2d2d2d 0%, 
            #404040 25%, 
            #525252 50%, 
            #404040 75%, 
            #2d2d2d 100%
          );
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .silver-text {
          background: linear-gradient(135deg, 
            #c0c0c0 0%, 
            #d4d4d4 25%, 
            #e8e8e8 50%, 
            #d4d4d4 75%, 
            #c0c0c0 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
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

      <footer className="sword-gradient text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px sword-shimmer"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Link to="/" className="flex items-center h-full relative">
                  <img
                    src="/lc.webp"
                    alt="Simpolo"
                    className="max-h-[120px] w-auto object-contain"
                  />
                  <div className="absolute -bottom-2 left-0 right-0 h-[2px] sword-shimmer rounded-full"></div>
                </Link>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Pioneering excellence in premium tile solutions through innovation, quality, and unparalleled craftsmanship across the UAE.
              </p>
              
              <div className="pt-4">
                <h4 className="text-sm font-medium text-gray-400 mb-3">Stay Updated</h4>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex relative">
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-l-xl focus:outline-none focus:border-gray-500 text-white placeholder-gray-600"
                    />
                    <button
                      type="submit"
                      disabled={subscribed}
                      className="px-4 sword-gradient-light text-white rounded-r-xl hover:opacity-90 transition-opacity disabled:opacity-50 border border-gray-700 relative overflow-hidden silver-button-shine"
                    >
                      <Send size={20} />
                    </button>
                  </div>
                  {subscribed && (
                    <p className="text-sm text-gray-400 animate-fadeIn">Thank you for subscribing!</p>
                  )}
                </form>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800">
                <span className="silver-text">Quick Links</span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="group flex items-center text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      <div className="w-1 h-1 bg-gray-600 mr-2 group-hover:bg-gray-400 transition-colors rounded-full"></div>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800">
                <span className="silver-text">Our Services</span>
              </h3>
              <ul className="space-y-3">
                {servicesLinks.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="group flex items-center text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      <div className="w-2 h-2 sword-shimmer rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800">
                <span className="silver-text">Contact Info</span>
              </h3>
              <ul className="space-y-4">
                <li className="group flex items-start space-x-4 hover:translate-x-2 transition-transform">
                  <div className="p-2 rounded-lg bg-gray-900/50 group-hover:sword-gradient-light transition-all border border-gray-800">
                    <MapPin className="text-gray-400" size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Corporate Office</div>
                    <div className="text-gray-600 text-sm">
                      218, Al Suaidi Building<br />
                      Al Murar, Dubai – UAE
                    </div>
                  </div>
                </li>
                
                <li className="group flex items-center space-x-4 hover:translate-x-2 transition-transform">
                  <div className="p-2 rounded-lg bg-gray-900/50 group-hover:sword-gradient-light transition-all border border-gray-800">
                    <Phone className="text-gray-400" size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <a href="tel:+971557234180" className="text-gray-600 text-sm hover:text-gray-400 transition-colors">
                      +971 55 723 4180
                    </a>
                  </div>
                </li>
                
                <li className="group flex items-center space-x-4 hover:translate-x-2 transition-transform">
                  <div className="p-2 rounded-lg bg-gray-900/50 group-hover:sword-gradient-light transition-all border border-gray-800">
                    <Mail className="text-gray-400" size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <a href="mailto:info@simpolotrading.com" className="text-gray-600 text-sm hover:text-gray-400 transition-colors break-all">
                      info@simpolotrading.com
                    </a>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-800">
                <h4 className="text-sm font-medium text-gray-400 mb-4">Follow Us</h4>
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
                      className="p-2 rounded-lg bg-gray-900/50 hover:sword-gradient-light transition-all group border border-gray-800 relative overflow-hidden"
                      aria-label={social.label}
                    >
                      <social.icon className="text-gray-500 group-hover:text-gray-300" size={18} />
                      <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-600 text-sm text-center md:text-left">
                <p>&copy; {new Date().getFullYear()} Simpolo Trading LLC. All rights reserved.</p>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <Link to="/privacy" className="text-gray-600 hover:text-gray-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-600 hover:text-gray-400 transition-colors">
                  Terms of Service
                </Link>
                <Link to="/contact" className="text-gray-600 hover:text-gray-400 transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <div className="inline-flex items-center px-4 py-2 bg-gray-900/50 rounded-full border border-gray-800 relative overflow-hidden">
                <span className="text-xs text-gray-600 relative z-10">Licensed by Dubai Economic Department • Trade License: 1234567</span>
                <div className="absolute inset-0 sword-shimmer opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px sword-shimmer"></div>
      </footer>
    </>
  );
}