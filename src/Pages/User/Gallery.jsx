import React from 'react'
import { ImageWithFallback } from '../../Util/Fallback';
import { Filter, Search, ZoomIn, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Gallery() {
  const gallery = [
    {
      src: 'https://images.unsplash.com/photo-1590880265945-6b43effeb599?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMHRpbGVzfGVufDF8fHx8MTc2NjA3MjM0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Modern Bathroom Tiles',
      category: 'Porcelain Tiles',
      tags: ['Bathroom', 'Modern', 'Premium']
    },
    {
      src: 'https://images.unsplash.com/photo-1669643219984-2ff3eea887a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjB0aWxlJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjYxMjQ4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Marble Texture',
      category: 'Marble & Granite',
      tags: ['Luxury', 'Natural', 'Elegant']
    },
    {
      src: 'https://images.unsplash.com/photo-1753723907358-c1d346aff7a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjB0aWxlfGVufDF8fHx8MTc2NjEyNDgwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Swimming Pool Tiles',
      category: 'Pool Tiles',
      tags: ['Outdoor', 'Waterproof', 'Safety']
    },
    {
      src: 'https://images.unsplash.com/photo-1637241612956-b7309005288b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYXRlcmlhbHN8ZW58MXx8fHwxNzY2MDYyMTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Construction Materials',
      category: 'Building Materials',
      tags: ['Industrial', 'Durable', 'Technical']
    },
    {
      src: 'https://images.unsplash.com/photo-1728486885790-1454260d9246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0aWxlcyUyMHNob3dyb29tfGVufDF8fHx8MTc2NjEyNDgwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Luxury Showroom',
      category: 'Showroom',
      tags: ['Display', 'Premium', 'Showcase']
    },
    {
      src: 'https://images.unsplash.com/photo-1531586024505-b040066c2d5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2NjEyNDgwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Dubai Architecture',
      category: 'Projects',
      tags: ['Architecture', 'Urban', 'Modern']
    },
    {
      src: 'https://images.unsplash.com/photo-1636491427623-f9813e4c3b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Kitchen Backsplash',
      category: 'Ceramic Tiles',
      tags: ['Kitchen', 'Pattern', 'Design']
    },
    {
      src: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Commercial Flooring',
      category: 'Outdoor Tiles',
      tags: ['Commercial', 'Heavy Duty', 'Flooring']
    },
    {
      src: 'https://images.unsplash.com/photo-1621680817805-d5d06ea2d3bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Pattern Mosaic',
      category: 'Mosaic Fabrications',
      tags: ['Artistic', 'Custom', 'Pattern']
    }
  ];

  const categories = ['All', ...Array.from(new Set(gallery.map(item => item.category)))];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [filteredGallery, setFilteredGallery] = useState(gallery);

  useEffect(() => {
    const filtered = gallery.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
    setFilteredGallery(filtered);
  }, [selectedCategory, searchQuery]);

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
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
        .gold-gradient {
          background: linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #FFD700 100%);
        }
        .grid-item {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .grid-item:hover {
          transform: translateY(-8px) scale(1.02);
        }
        .category-btn {
          transition: all 0.3s ease;
        }
        .category-btn:hover {
          transform: translateY(-2px);
        }
      `}</style>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#2C1C10] via-[#3D2817] to-[#5C4033] text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 -left-32 w-80 h-80 bg-[#D4AF37] rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#B8860B] rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-on-scroll">
            <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
              <Filter size={18} className="mr-2 text-[#FFD700]" />
              <span className="text-[#FFD700]">Visual Showcase</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Project <span className="gold-gradient bg-clip-text text-transparent">Gallery</span>
            </h1>
            <div className="w-24 h-1 gold-gradient mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
              Discover our premium collections through stunning visuals of completed projects and product showcases
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white/50 backdrop-blur-sm sticky top-0 z-20 border-b border-[#F0E6D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B8860B]" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`category-btn px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'gold-gradient text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="text-sm text-gray-600 hidden md:block">
              <span className="font-medium text-[#B8860B]">{filteredGallery.length}</span> projects found
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredGallery.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#2C1C10] mb-4">No Projects Found</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Try adjusting your search or filter criteria to find what you're looking for
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item, index) => (
                <div
                  key={index}
                  className="grid-item group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl bg-white animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <ImageWithFallback
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <button
                      onClick={() => setSelectedImage(item)}
                      className="absolute top-4 right-4 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ZoomIn className="text-white" size={20} />
                    </button>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#2C1C10] text-xs font-medium rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2C1C10] mb-2 group-hover:text-[#B8860B] transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-[#F5EFE0] text-[#B8860B] text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <button
                        onClick={() => setSelectedImage(item)}
                        className="text-sm text-[#B8860B] hover:text-[#2C1C10] transition-colors font-medium flex items-center"
                      >
                        View Details <ChevronRight size={16} className="ml-1" />
                      </button>
                      <div className="text-xs text-gray-500">Project #{index + 1}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredGallery.length > 0 && (
            <div className="text-center mt-12">
              <button className="px-8 py-3 border-2 border-[#D4AF37] text-[#2C1C10] rounded-full font-medium hover:bg-[#F5EFE0] transition-colors">
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-scaleIn">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-[#FFD700] transition-colors z-10"
          >
            ✕
          </button>
          <div className="max-w-6xl w-full max-h-[90vh] overflow-hidden rounded-2xl bg-white">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[400px]">
                <ImageWithFallback
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="mb-4">
                  <span className="px-3 py-1 gold-gradient text-white text-sm font-medium rounded-full">
                    {selectedImage.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-[#2C1C10] mb-4">
                  {selectedImage.title}
                </h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedImage.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#F5EFE0] text-[#B8860B] text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-8">
                  This premium installation showcases our commitment to quality and design excellence. 
                  The materials used meet the highest industry standards for durability and aesthetic appeal.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-[#F5EFE0] flex items-center justify-center mr-3">
                      <Calendar className="text-[#B8860B]" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Project Date</div>
                      <div className="font-medium text-[#2C1C10]">December 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-[#F5EFE0] flex items-center justify-center mr-3">
                      <MapPin className="text-[#B8860B]" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Location</div>
                      <div className="font-medium text-[#2C1C10]">Dubai, UAE</div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <button className="px-6 py-3 gold-gradient text-white rounded-xl font-medium hover:shadow-lg transition-shadow">
                    Request Similar Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#2C1C10] via-[#3D2817] to-[#2C1C10] rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Experience Our <span className="gold-gradient bg-clip-text text-transparent">Showroom</span>
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Visit our state-of-the-art showroom to experience our premium tile collections in person. 
                  Get expert advice and see the true beauty of our materials under professional lighting.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-white">
                    <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mr-3">
                      <MapPin className="text-[#FFD700]" size={16} />
                    </div>
                    <span>Sajja Industrial Area, Sharjah, UAE</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mr-3">
                      <Calendar className="text-[#FFD700]" size={16} />
                    </div>
                    <span>Saturday - Thursday: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-3 gold-gradient text-white rounded-xl font-medium hover:shadow-xl transition-all flex items-center">
                    <MapPin size={20} className="mr-2" />
                    Get Directions
                  </button>
                  <button className="px-8 py-3 border-2 border-white/30 text-white rounded-xl font-medium hover:bg-white/10 transition-colors">
                    Book Appointment
                  </button>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2C1C10] to-transparent lg:from-transparent lg:via-[#2C1C10]/50 lg:to-[#2C1C10] z-10"></div>
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                      <MapPin className="text-white" size={32} />
                    </div>
                    <p className="text-2xl font-bold text-[#2C1C10] mb-2">Showroom Tour</p>
                    <p className="text-gray-600">Experience luxury in person</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script>{`
        if (typeof window !== 'undefined') {
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
        }
      `}</script>
    </div>
  );
}