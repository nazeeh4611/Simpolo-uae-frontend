import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Map, Home, Building, Box, Briefcase, Users, FileText, ChevronRight, Globe, Layers, Package, Phone, Mail, Award, ShoppingBag } from 'lucide-react';
import { useSEO } from '../../util/SEO';

function Sitemap() {

  useSEO({
    title: "Sitemap | Simpolo Trading",
    description: "Complete site structure and navigation for Simpolo Trading LLC website.",
  });

  const pageTitle = "Sitemap | Simpolo Trading LLC - Website Navigation Guide";
  const pageDescription = "Complete sitemap of Simpolo Trading LLC website. Find all pages, categories, and navigation links easily.";
  const pageKeywords = "Simpolo Trading sitemap, website navigation, site structure, page index, site map";

  useEffect(() => {
    document.title = pageTitle;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.content = pageDescription;
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) metaKeywords.content = pageKeywords;
    
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Sitemap',
      'description': pageDescription,
      'url': window.location.href,
      'mainEntity': {
        '@type': 'ItemList',
        'numberOfItems': 8,
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Home', url: '/' },
          { '@type': 'ListItem', position: 2, name: 'About Us', url: '/about' },
          { '@type': 'ListItem', position: 3, name: 'Services', url: '/services' },
          { '@type': 'ListItem', position: 4, name: 'Gallery', url: '/gallery' },
          { '@type': 'ListItem', position: 5, name: 'Portfolio', url: '/portfolio' },
          { '@type': 'ListItem', position: 6, name: 'Contact', url: '/contact' },
          { '@type': 'ListItem', position: 7, name: 'Privacy Policy', url: '/privacy-policy' },
          { '@type': 'ListItem', position: 8, name: 'Terms of Service', url: '/terms' }
        ]
      }
    };
    
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) existingScript.remove();
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, []);

  const siteSections = [
    {
      title: "Main Pages",
      icon: Home,
      links: [
        { path: "/", label: "Home", description: "Welcome to Simpolo Trading" },
        { path: "/about", label: "About Us", description: "Our story and mission" },
        { path: "/services", label: "Services", description: "Our tile solutions" },
        { path: "/gallery", label: "Gallery", description: "Tile collections" },
        { path: "/portfolio", label: "Portfolio", description: "Our projects" },
        { path: "/contact", label: "Contact", description: "Get in touch" }
      ]
    },
    {
      title: "Products & Categories",
      icon: Package,
      links: [
        { path: "/gallery?category=Porcelain Tiles", label: "Porcelain Tiles", description: "Premium porcelain collections" },
        { path: "/gallery?category=Ceramic Tiles", label: "Ceramic Tiles", description: "Traditional ceramic tiles" },
        { path: "/gallery?category=Marble and Granite", label: "Marble & Granite", description: "Natural stone solutions" },
        { path: "/gallery?category=Slab Tiles", label: "Slab Tiles", description: "Large format slabs" },
        { path: "/gallery?category=Outdoor Tiles", label: "Outdoor Tiles", description: "Weather-resistant tiles" },
        { path: "/gallery?category=Swimming Pool Tiles", label: "Pool Tiles", description: "Specialty pool tiles" },
        { path: "/gallery?category=Mosaic Fabrications", label: "Mosaic Fabrications", description: "Custom mosaic designs" }
      ]
    },
    {
      title: "Services",
      icon: Briefcase,
      links: [
        { path: "/services#residential", label: "Residential Projects", description: "Home tile solutions" },
        { path: "/services#commercial", label: "Commercial Spaces", description: "Business tile installations" },
        { path: "/services#hospitality", label: "Hospitality", description: "Hotel & resort tiles" },
        { path: "/services#fabrication", label: "Tile Fabrication", description: "Custom cutting services" },
        { path: "/services#installation", label: "Professional Installation", description: "Expert tile installation" },
        { path: "/services#consultation", label: "Free Consultation", description: "Design consultation" }
      ]
    },
    {
      title: "Information",
      icon: FileText,
      links: [
        { path: "/privacy-policy", label: "Privacy Policy", description: "Data protection information" },
        { path: "/terms", label: "Terms of Service", description: "Legal terms and conditions" },
        { path: "/about#partners", label: "Our Partners", description: "Brand collaborations" },
        { path: "/about#team", label: "Our Team", description: "Meet our experts" },
        { path: "/portfolio#clients", label: "Our Clients", description: "Client testimonials" },
        { path: "/contact#locations", label: "Our Locations", description: "Office & warehouse addresses" }
      ]
    }
  ];

  const quickLinks = [
    { icon: Phone, path: "/contact", label: "Call Us", description: "+971 4 123 4567" },
    { icon: Mail, path: "/contact", label: "Email Us", description: "info@simpolotrading.com" },
    { icon: Globe, path: "/services", label: "Get Quote", description: "Request free quote" },
    { icon: Award, path: "/portfolio", label: "View Work", description: "Our completed projects" },
    { icon: ShoppingBag, path: "/gallery", label: "Shop Now", description: "Browse collections" },
    { icon: Users, path: "/about#team", label: "Meet Team", description: "Our professionals" }
  ];

  return (
    <>
      <div className="sr-only" aria-hidden="true">
        <h1>Sitemap - Simpolo Trading LLC</h1>
        <p>Complete navigation guide for Simpolo Trading LLC website. Find all pages, product categories, and services easily.</p>
        <h2>Website Structure</h2>
        <ul>
          <li>Home Page</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Gallery</li>
          <li>Portfolio</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>

      <main className="min-h-screen bg-black text-white">
        <section className="py-30 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-gray-700">
                <Map size={18} className="mr-2 text-gray-400" />
                <span className="text-gray-400 font-medium">Website Navigation</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Website <span className="text-gray-300">Sitemap</span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Explore our complete website structure. Find all pages, products, and services with ease.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="bg-gray-900/50 rounded-xl p-4 text-center hover:bg-gray-800 transition-colors group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800 mb-3 group-hover:bg-gray-700">
                    <link.icon size={24} className="text-gray-300" />
                  </div>
                  <div className="font-semibold mb-1">{link.label}</div>
                  <div className="text-sm text-gray-400">{link.description}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {siteSections.map((section, index) => (
                <div key={index} className="bg-gray-900/30 rounded-2xl p-6">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-gray-800 mr-4">
                      <section.icon size={24} className="text-gray-300" />
                    </div>
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                  </div>
                  
                  <div className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        to={link.path}
                        className="flex items-center p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-md bg-gray-800 flex items-center justify-center mr-4 group-hover:bg-gray-700">
                          <ChevronRight size={16} className="text-gray-400" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold group-hover:text-gray-300">{link.label}</div>
                          <div className="text-sm text-gray-500">{link.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-900/20 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Layers size={28} className="text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold">Site Structure Overview</h3>
              </div>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="p-4 bg-gray-800/30 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">Total Pages</div>
                    <div className="text-2xl font-bold">24+</div>
                  </div>
                  <div className="p-4 bg-gray-800/30 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">Product Categories</div>
                    <div className="text-2xl font-bold">15+</div>
                  </div>
                  <div className="p-4 bg-gray-800/30 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">Service Types</div>
                    <div className="text-2xl font-bold">8+</div>
                  </div>
                  <div className="p-4 bg-gray-800/30 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">Project Galleries</div>
                    <div className="text-2xl font-bold">500+</div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-800">
                  <p className="text-gray-400">
                    Can't find what you're looking for? Use our search function or contact our customer support team for assistance.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-500 mb-6">
                This sitemap is regularly updated. Last updated: January 1, 2024
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/"
                  className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors inline-flex items-center"
                >
                  <Home size={18} className="mr-2" />
                  Back to Home
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors inline-flex items-center"
                >
                  <Phone size={18} className="mr-2" />
                  Need Help?
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Sitemap;