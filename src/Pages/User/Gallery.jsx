import React, { useState, useEffect } from 'react';
import { ImageWithFallback } from '../../util/Fallback';
import { Filter, Search, MapPin, Calendar, ChevronRight, Sparkles, Award, Clock, Users, Star, Heart, Share2, Download, Grid, List, X, ArrowRight, Play, ImageIcon, Eye, Tag, Layers, ChevronLeft, ChevronRight as ChevronRightIcon, CheckCircle } from 'lucide-react';
import Typewriter from 'typewriter-effect';

function Gallery() {
  const gallery = [
    {
      id: 1,
      title: 'Modern Bathroom Tiles',
      category: 'Porcelain Tiles',
      tags: ['Bathroom', 'Modern', 'Premium', 'Luxury'],
      location: 'Dubai Hills Villa',
      date: 'Dec 2024',
      likes: 142,
      views: 2345,
      featured: true,
      images: [
        'https://images.unsplash.com/photo-1590880265945-6b43effeb599?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
        'https://images.unsplash.com/photo-1621680817805-d5d06ea2d3bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80'
      ]
    },
    {
      id: 2,
      title: 'Marble Texture Showcase',
      category: 'Marble & Granite',
      tags: ['Luxury', 'Natural', 'Elegant', 'Classic'],
      location: 'Emirates Palace',
      date: 'Nov 2024',
      likes: 189,
      views: 3120,
      featured: true,
      images: [
        'https://images.unsplash.com/photo-1669643219984-2ff3eea887a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80'
      ]
    },
    {
      id: 3,
      title: 'Swimming Pool Tiles',
      category: 'Pool Tiles',
      tags: ['Outdoor', 'Waterproof', 'Safety', 'Durable'],
      location: 'Jumeirah Beach Resort',
      date: 'Oct 2024',
      likes: 156,
      views: 2890,
      images: [
        'https://images.unsplash.com/photo-1753723907358-c1d346aff7a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80'
      ]
    },
    {
      id: 4,
      title: 'Construction Materials',
      category: 'Building Materials',
      tags: ['Industrial', 'Durable', 'Technical', 'Commercial'],
      location: 'Dubai Marina Tower',
      date: 'Sep 2024',
      likes: 98,
      views: 1870,
      images: [
        'https://images.unsplash.com/photo-1637241612956-b7309005288b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
      ]
    },
    {
      id: 5,
      title: 'Luxury Showroom Display',
      category: 'Showroom',
      tags: ['Display', 'Premium', 'Showcase', 'Collection'],
      location: 'Our Showroom',
      date: 'Aug 2024',
      likes: 210,
      views: 4210,
      featured: true,
      images: [
        'https://images.unsplash.com/photo-1728486885790-1454260d9246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80'
      ]
    },
    {
      id: 6,
      title: 'Dubai Architecture Project',
      category: 'Projects',
      tags: ['Architecture', 'Urban', 'Modern', 'Skyscraper'],
      location: 'Downtown Dubai',
      date: 'Jul 2024',
      likes: 245,
      views: 5230,
      images: [
        'https://images.unsplash.com/photo-1531586024505-b040066c2d5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
      ]
    },
    {
      id: 7,
      title: 'Kitchen Backsplash Design',
      category: 'Ceramic Tiles',
      tags: ['Kitchen', 'Pattern', 'Design', 'Colorful'],
      location: 'Al Barsha Villa',
      date: 'Jun 2024',
      likes: 167,
      views: 2980,
      images: [
        'https://images.unsplash.com/photo-1636491427623-f9813e4c3b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80'
      ]
    },
    {
      id: 8,
      title: 'Commercial Flooring Solution',
      category: 'Outdoor Tiles',
      tags: ['Commercial', 'Heavy Duty', 'Flooring', 'Durable'],
      location: 'Mall of Emirates',
      date: 'May 2024',
      likes: 134,
      views: 2760,
      images: [
        'https://images.unsplash.com/photo-1615529328331-f8917597711f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
      ]
    },
    {
      id: 9,
      title: 'Pattern Mosaic Artwork',
      category: 'Mosaic Fabrications',
      tags: ['Artistic', 'Custom', 'Pattern', 'Unique'],
      location: 'Dubai Opera',
      date: 'Apr 2024',
      likes: 189,
      views: 3450,
      featured: true,
      images: [
        'https://images.unsplash.com/photo-1621680817805-d5d06ea2d3bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=800&q=80'
      ]
    },
    {
      id: 10,
      title: 'Living Room Elegance',
      category: 'Porcelain Tiles',
      tags: ['Living Room', 'Elegant', 'Spacious', 'Modern'],
      location: 'Palm Jumeirah Villa',
      date: 'Mar 2024',
      likes: 178,
      views: 3120,
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
      ]
    },
    {
      id: 11,
      title: 'Luxury Hotel Lobby',
      category: 'Marble & Granite',
      tags: ['Hotel', 'Lobby', 'Luxury', 'Grand'],
      location: 'Burj Al Arab',
      date: 'Feb 2024',
      likes: 256,
      views: 4890,
      featured: true,
      images: [
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80'
      ]
    },
    {
      id: 12,
      title: 'Office Space Design',
      category: 'Commercial Tiles',
      tags: ['Office', 'Corporate', 'Professional', 'Modern'],
      location: 'DIFC Tower',
      date: 'Jan 2024',
      likes: 145,
      views: 2670,
      images: [
        'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80'
      ]
    }
  ];

  const categories = ['All', 'Porcelain Tiles', 'Marble & Granite', 'Pool Tiles', 'Ceramic Tiles', 'Outdoor Tiles', 'Mosaic Fabrications', 'Commercial Tiles', 'Showroom', 'Projects'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [filteredGallery, setFilteredGallery] = useState(gallery);
  const [viewMode, setViewMode] = useState('grid');
  const [likedItems, setLikedItems] = useState({});
  const [sortBy, setSortBy] = useState('date');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let filtered = gallery.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });

    filtered.sort((a, b) => {
      if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'likes') return b.likes - a.likes;
      if (sortBy === 'views') return b.views - a.views;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });

    setFilteredGallery(filtered);
  }, [selectedCategory, searchQuery, sortBy]);

  const handleLike = (id) => {
    setLikedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleOpenModal = (item) => {
    setSelectedImage(item);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedImage) {
      setCurrentImageIndex((prev) => 
        prev === selectedImage.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedImage) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedImage.images.length - 1 : prev - 1
      );
    }
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
    <div className="min-h-screen bg-black">
      <style dangerouslySetInnerHTML={{__html: `
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
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes swordShimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
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
        .silver-gradient {
          background: linear-gradient(135deg, #c0c0c0 0%, #d4d4d4 50%, #e8e8e8 100%);
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        .silver-gradient-dark {
          background: linear-gradient(135deg, #808080 0%, #a0a0a0 50%, #c0c0c0 100%);
        }
        .dark-gradient {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%);
        }
        .grid-item {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .grid-item:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px rgba(255, 255, 255, 0.1);
        }
        .category-btn {
          transition: all 0.3s ease;
        }
        .category-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(255, 255, 255, 0.05);
        }
        .typewriter-cursor {
          display: inline-block;
          width: 3px;
          background: #c0c0c0;
          margin-left: 4px;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(255, 255, 255, 0.1);
        }
        .gallery-text {
          display: inline-block;
          background: linear-gradient(135deg, #c0c0c0 0%, #d4d4d4 50%, #e8e8e8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        .showroom-text {
          display: inline-block;
          background: linear-gradient(135deg, #c0c0c0 0%, #d4d4d4 50%, #e8e8e8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
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

      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-800 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-700 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-on-scroll max-w-4xl">
            <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/5 backdrop-blur border border-gray-700 relative overflow-hidden">
              <div className="absolute inset-0 sword-shimmer opacity-30"></div>
              <Sparkles size={18} className="mr-2 text-gray-400 relative z-10" />
              <span className="text-gray-400 font-medium relative z-10">Visual Showcase</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Project <span className="gallery-text">Gallery</span>
            </h1>

            <div className="w-32 h-1.5 silver-gradient mb-8 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 sword-shimmer"></div>
            </div>

            <div className="text-2xl md:text-3xl mb-8 text-gray-300 font-semibold h-12">
              <Typewriter
                options={{
                  strings: [
                    'Premium Installations',
                    'Luxury Transformations',
                    'Design Excellence',
                    'Quality Craftsmanship',
                    'Inspiration Gallery',
                    'Project Showcase'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                  cursorClassName: 'typewriter-cursor'
                }}
              />
            </div>

            <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-3xl leading-relaxed">
              Explore our stunning portfolio of premium tile installations and projects across the UAE. 
              From luxury villas to commercial spaces, witness the transformation through our lens.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-gray-300">
                <Award size={20} className="mr-2 text-gray-400" />
                <span>300+ Successful Projects</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Users size={20} className="mr-2 text-gray-400" />
                <span>Luxury & Commercial</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin size={20} className="mr-2 text-gray-400" />
                <span>All Emirates Covered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { value: '500+', label: 'Projects Completed', icon: Layers },
              { value: '100%', label: 'Client Satisfaction', icon: Award },
              { value: '15+', label: 'Years Experience', icon: Clock },
              { value: '300+', label: 'Happy Clients', icon: Users }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="animate-on-scroll bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center card-hover border border-gray-700 hover:border-gray-600 relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="flex justify-center mb-4 relative z-10">
                  <div className="p-3 rounded-xl silver-gradient relative overflow-hidden">
                    <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                    <stat.icon className="text-gray-900 relative z-10" size={24} />
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2 text-white relative z-10">{stat.value}</div>
                <div className="text-gray-400 text-sm relative z-10">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-3xl shadow-xl p-8 mb-12 border border-gray-700">
            <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search projects, tags, or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-700"
                />
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2">
                  <label className="text-sm text-gray-400">Sort by:</label>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 bg-white/5 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-700"
                  >
                    <option value="date" className="bg-gray-900">Latest</option>
                    <option value="likes" className="bg-gray-900">Most Liked</option>
                    <option value="views" className="bg-gray-900">Most Viewed</option>
                    <option value="title" className="bg-gray-900">Title</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2.5 rounded-lg category-btn ${viewMode === 'grid' ? 'silver-gradient text-gray-900 border border-gray-300' : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-gray-700'}`}
                  >
                    <Grid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2.5 rounded-lg category-btn ${viewMode === 'list' ? 'silver-gradient text-gray-900 border border-gray-300' : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-gray-700'}`}
                  >
                    <List size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    className={`category-btn px-4 py-2.5 rounded-full text-sm font-medium transition-all flex items-center ${
                      selectedCategory === category
                        ? 'silver-gradient text-gray-900 border border-gray-300'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-300 border border-gray-700'
                    }`}
                  >
                    {category === 'All' ? (
                      <>
                        <Filter size={14} className="mr-2" />
                        {category}
                      </>
                    ) : (
                      category
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-700">
              <div className="text-sm text-gray-400">
                Showing <span className="font-bold text-white">{filteredGallery.length}</span> of {gallery.length} projects
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <ImageIcon size={16} className="mr-1" />
                High-quality images
              </div>
            </div>
          </div>

          {filteredGallery.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-24 h-24 silver-gradient rounded-full flex items-center justify-center mx-auto mb-6 relative overflow-hidden">
                <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                <Search className="text-gray-900 relative z-10" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">No Projects Found</h3>
              <p className="text-gray-400 max-w-md mx-auto mb-8">
                Try adjusting your search or filter criteria to find what you're looking for
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="group px-6 py-3 sword-gradient text-white rounded-xl font-medium hover:shadow-xl transition-all card-hover border border-gray-700 relative overflow-hidden silver-button-shine"
              >
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <span className="relative z-10">Reset Filters</span>
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGallery.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleOpenModal(item)}
                  className="animate-on-scroll grid-item group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer card-hover bg-white/5 backdrop-blur-md border border-gray-700 hover:border-gray-500"
                >
                  <div className="relative h-96 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                    <ImageWithFallback
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {item.featured && (
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1.5 silver-gradient text-gray-900 text-xs font-semibold rounded-full shadow-sm border border-gray-300 relative overflow-hidden">
                          <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                          <span className="relative z-10">Featured</span>
                        </span>
                      </div>
                    )}
                    
                    <div className="absolute top-4 right-4 z-20">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike(item.id);
                        }}
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full shadow-sm hover:bg-white/20 transition-colors border border-gray-600"
                      >
                        <Heart 
                          size={18} 
                          className={likedItems[item.id] ? 'text-red-500 fill-red-500' : 'text-gray-400'}
                        />
                      </button>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                      <h3 className="text-white text-xl font-bold mb-3 group-hover:text-gray-200 transition-colors uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <div className="flex items-center text-gray-300 text-sm font-medium">
                        <span className="uppercase tracking-wider">{item.category}</span>
                        <span className="mx-2">•</span>
                        <span>{item.images.length} images</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredGallery.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleOpenModal(item)}
                  className="animate-on-scroll group bg-white/5 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-gray-500 overflow-hidden card-hover cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-64 h-64 md:h-auto relative flex-shrink-0">
                      <ImageWithFallback
                        src={item.images[0]}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1.5 silver-gradient text-gray-900 text-xs font-semibold rounded-full shadow-sm border border-gray-300 relative overflow-hidden">
                            <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                            <span className="relative z-10">Featured</span>
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="px-3 py-1 sword-gradient text-white text-sm font-semibold rounded-full border border-gray-700">
                            {item.category}
                          </span>
                          <h3 className="text-2xl font-bold text-white mt-4 mb-2 group-hover:text-gray-300 transition-colors">{item.title}</h3>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLike(item.id);
                          }}
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-gray-700"
                        >
                          <Heart 
                            size={20} 
                            className={likedItems[item.id] ? 'text-red-500 fill-red-500' : 'text-gray-400'}
                          />
                        </button>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-400 mb-4">
                        <MapPin size={16} className="mr-2" />
                        {item.location}
                        <span className="mx-3">•</span>
                        <Calendar size={16} className="mr-2" />
                        {item.date}
                        <span className="mx-3">•</span>
                        <ImageIcon size={16} className="mr-2" />
                        {item.images.length} images
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1.5 bg-white/5 text-gray-300 text-sm font-medium rounded-full border border-gray-700"
                          >
                            <Tag size={12} className="inline mr-1.5" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        Premium installation showcasing exceptional craftsmanship and design excellence. 
                        This project demonstrates our commitment to quality and attention to detail.
                      </p>
                      
                      <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Heart size={16} className="mr-1.5" />
                            {item.likes} likes
                          </div>
                          <div className="flex items-center">
                            <Eye size={16} className="mr-1.5" />
                            {item.views.toLocaleString()} views
                          </div>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-300 font-semibold">
                          View Details
                          <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredGallery.length > 0 && (
            <div className="text-center mt-16">
              <button className="group px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-semibold hover:bg-white/5 hover:border-gray-500 transition-all duration-300 inline-flex items-center card-hover relative overflow-hidden">
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <span className="relative z-10">Load More Projects</span>
                <ChevronRight size={20} className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-scaleIn">
          <div className="absolute inset-0" onClick={() => {
            setSelectedImage(null);
            setCurrentImageIndex(0);
          }}></div>
          
          <div className="relative max-w-7xl w-full max-h-[90vh] overflow-hidden rounded-2xl bg-gray-900 z-10 border border-gray-700">
            <div className="grid lg:grid-cols-3 h-full">
              <div className="lg:col-span-2 relative">
                <div className="relative h-96 lg:h-[500px] bg-black">
                  <ImageWithFallback
                    src={selectedImage.images[currentImageIndex]}
                    alt={`${selectedImage.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full shadow-xl hover:bg-white/20 transition-all duration-300 z-20 group border border-gray-600"
                  >
                    <ChevronLeft size={24} className="text-gray-300 group-hover:text-white group-hover:scale-110 transition-transform" />
                  </button>
                  
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full shadow-xl hover:bg-white/20 transition-all duration-300 z-20 group border border-gray-600"
                  >
                    <ChevronRightIcon size={24} className="text-gray-300 group-hover:text-white group-hover:scale-110 transition-transform" />
                  </button>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20">
                    <div className="flex items-center gap-2">
                      <button className="px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-xl text-sm font-medium hover:bg-white/20 text-gray-300 hover:text-white transition-all duration-300 border border-gray-600 flex items-center gap-2 hover:shadow-lg">
                        <Download size={18} />
                        Download
                      </button>
                      <button className="px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-xl text-sm font-medium hover:bg-white/20 text-gray-300 hover:text-white transition-all duration-300 border border-gray-600 flex items-center gap-2 hover:shadow-lg">
                        <Share2 size={18} />
                        Share
                      </button>
                    </div>
                    <div className="text-white text-sm bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm font-medium border border-gray-600">
                      {currentImageIndex + 1} / {selectedImage.images.length}
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-800/50 border-t border-gray-700">
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {selectedImage.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          currentImageIndex === index 
                            ? 'border-gray-300 ring-2 ring-gray-300/20 scale-105' 
                            : 'border-gray-600 hover:border-gray-400'
                        }`}
                      >
                        <ImageWithFallback
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto bg-gradient-to-b from-gray-900 to-black">
                <button
                  onClick={() => {
                    setSelectedImage(null);
                    setCurrentImageIndex(0);
                  }}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 border border-gray-600 transition-all duration-300 hover:shadow-lg"
                >
                  <X size={20} />
                </button>
                
                <div className="mb-6">
                  <span className="px-4 py-2 sword-gradient text-white text-sm font-semibold rounded-full border border-gray-700">
                    {selectedImage.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-3">
                    {selectedImage.title}
                  </h2>
                  
                  <div className="flex items-center text-gray-400 mb-4">
                    <MapPin size={18} className="mr-2 text-gray-500" />
                    <span className="font-medium">{selectedImage.location}</span>
                    <span className="mx-3">•</span>
                    <Calendar size={18} className="mr-2 text-gray-500" />
                    <span>{selectedImage.date}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedImage.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-white/5 text-gray-300 text-sm font-medium rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Project Overview</h4>
                    <p className="text-gray-300 leading-relaxed">
                      This premium installation showcases exceptional craftsmanship and attention to detail. 
                      Using only the finest materials, our team transformed this space into a masterpiece 
                      of design and functionality. The project demonstrates our commitment to excellence 
                      and our ability to deliver beyond expectations.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-gray-700 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="p-2 rounded-lg silver-gradient mr-3 relative overflow-hidden">
                          <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                          <Award size={20} className="text-gray-900 relative z-10" />
                        </div>
                        <span className="font-semibold text-white">Materials Used</span>
                      </div>
                      <ul className="text-sm text-gray-300 space-y-2">
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-gray-500 mr-2" />
                          Premium Grade Porcelain Tiles
                        </li>
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-gray-500 mr-2" />
                          Epoxy Grout System
                        </li>
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-gray-500 mr-2" />
                          Anti-slip Coating
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-gray-700 shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="p-2 rounded-lg silver-gradient mr-3 relative overflow-hidden">
                          <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                          <Clock size={20} className="text-gray-900 relative z-10" />
                        </div>
                        <span className="font-semibold text-white">Project Timeline</span>
                      </div>
                      <ul className="text-sm text-gray-300 space-y-2">
                        <li className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-gray-500 mr-2"></div>
                          Design Phase: 2 weeks
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-gray-500 mr-2"></div>
                          Installation: 3 weeks
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-gray-500 mr-2"></div>
                          Finishing: 1 week
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-700">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-300">{selectedImage.likes}</div>
                          <div className="text-sm text-gray-500">Likes</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-300">{selectedImage.views.toLocaleString()}</div>
                          <div className="text-sm text-gray-500">Views</div>
                        </div>
                      </div>
                      
                      <button className="group px-6 py-3 sword-gradient text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 card-hover border border-gray-700 relative overflow-hidden silver-button-shine w-full sm:w-auto">
                        <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
                        <span className="relative z-10">Request Similar Project</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="py-24 relative overflow-hidden sword-gradient">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-700 rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600 rounded-full mix-blend-overlay filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-white/5 backdrop-blur border border-gray-700 text-gray-300 text-sm font-semibold relative overflow-hidden">
                <div className="absolute inset-0 sword-shimmer opacity-20"></div>
                <MapPin size={18} className="mr-2 relative z-10" /> 
                <span className="relative z-10">Our Showroom</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Experience Our <span className="showroom-text">Showroom</span>
              </h2>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                Visit our state-of-the-art showroom to experience our premium tile collections in person. 
                See the true beauty of our materials under professional lighting and get expert advice 
                from our design consultants.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Showroom Size', value: '5,000 sq.ft.' },
                  { label: 'Collections', value: '50+' },
                  { label: 'Design Experts', value: 'On-site' },
                  { label: 'Parking', value: 'Free' },
                ].map((stat, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-gray-600">
                    <div className="text-2xl font-bold text-gray-300 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="group px-8 py-4 silver-gradient text-gray-900 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 card-hover relative overflow-hidden silver-button-shine">
                  <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                  <MapPin size={20} className="mr-2 relative z-10" />
                  <span className="relative z-10">Get Directions</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                </button>
                
                <button className="group px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-gray-400 transition-all duration-300 flex items-center space-x-3 card-hover relative overflow-hidden">
                  <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <Calendar size={20} className="mr-2 relative z-10" />
                  <span className="relative z-10">Book Appointment</span>
                </button>
              </div>
            </div>
            
            <div className="animate-on-scroll relative" style={{ animationDelay: '0.2s' }}>
              <div className="silver-gradient-dark rounded-2xl p-1 card-hover relative overflow-hidden">
                <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                <div className="bg-gray-900 rounded-xl p-8 text-white relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 silver-gradient rounded-full flex items-center justify-center mx-auto mb-6 animate-float relative overflow-hidden">
                      <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                      <Play className="text-gray-900 relative z-10" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Virtual Tour Available</h3>
                    <p className="text-gray-300">Explore our showroom from anywhere</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-lg silver-gradient flex items-center justify-center mr-4 relative overflow-hidden">
                        <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                        <Star className="text-gray-900 relative z-10" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold">Live Demonstrations</div>
                        <div className="text-sm text-gray-300">Tile installation techniques</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-lg silver-gradient flex items-center justify-center mr-4 relative overflow-hidden">
                        <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                        <Users className="text-gray-900 relative z-10" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold">Expert Consultations</div>
                        <div className="text-sm text-gray-300">Free design advice</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-lg silver-gradient flex items-center justify-center mr-4 relative overflow-hidden">
                        <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                        <Award className="text-gray-900 relative z-10" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold">Sample Collection</div>
                        <div className="text-sm text-gray-300">Take home material samples</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <button className="group px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-medium hover:bg-white/20 transition-all card-hover border border-gray-600 relative overflow-hidden">
                      <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      <span className="relative z-10">Start Virtual Tour</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sword-gradient rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-gray-600 relative overflow-hidden">
                  <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                  <Sparkles size={18} className="mr-2 text-gray-300 relative z-10" />
                  <span className="text-gray-300 relative z-10">Next Project</span>
                </div>
                
                <h2 className="text-4xl font-bold text-white mb-6">
                  Start Your <span className="text-gray-300">Transformation</span>
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Join our growing portfolio of successful projects and experience the Simpolo Trading difference
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="group px-8 py-4 silver-gradient text-gray-900 rounded-xl font-medium hover:shadow-xl transition-all duration-300 flex items-center space-x-3 card-hover border border-gray-300 relative overflow-hidden silver-button-shine">
                    <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                    <span className="relative z-10">Request a Quote</span>
                    <ChevronRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                  </button>
                  
                  <button className="group px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center space-x-3 card-hover relative overflow-hidden">
                    <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <span className="relative z-10">View Services</span>
                    <ChevronRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
              
              <div className="relative h-64 lg:h-auto min-h-[300px] bg-gradient-to-r from-gray-900/80 to-gray-800/80">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-600 animate-float relative overflow-hidden">
                      <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      <Award className="text-white relative z-10" size={32} />
                    </div>
                    <p className="text-2xl font-bold text-white mb-2">Your Vision</p>
                    <p className="text-gray-300">Our Expertise</p>
                    <div className="mt-8 grid grid-cols-2 gap-4 max-w-xs mx-auto">
                      <div className="text-center p-3 bg-white/5 rounded-xl border border-gray-600 relative overflow-hidden group">
                        <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        <div className="text-lg font-bold text-white relative z-10">15+</div>
                        <div className="text-xs text-gray-300 relative z-10">Years Experience</div>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-xl border border-gray-600 relative overflow-hidden group">
                        <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        <div className="text-lg font-bold text-white relative z-10">500+</div>
                        <div className="text-xs text-gray-300 relative z-10">Projects</div>
                      </div>
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

export default Gallery;