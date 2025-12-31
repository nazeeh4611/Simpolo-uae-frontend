import React, { useState, useEffect } from 'react';
import { ImageWithFallback } from '../../util/Fallback';
import { Filter, Search, MapPin, Calendar, ChevronRight, Sparkles, Award, Clock, Users, Star, Heart, Share2, Download, Grid, List, X, ArrowRight, Play, ImageIcon, Eye, Tag, Layers, ChevronLeft, ChevronRight as ChevronRightIcon, CheckCircle } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { baseurl } from '../../util/Base';

function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const categories = [
    'All',
    'Porcelain Tiles',
    'Porcelain Tiles Fabrications',
    'Slab Tiles',
    'Ceramic Tiles',
    'Outdoor Heavy-Duty Tiles',
    'Mosaic Fabrications from Tiles',
    'Swimming Pool Tiles',
    'Marble and Granite',
    'Marble Countertops and Fabrications',
    'Sanitary Ware',
    'Bathroom Fittings'
  ];
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [filteredGallery, setFilteredGallery] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [likedItems, setLikedItems] = useState({});
  const [sortBy, setSortBy] = useState('date');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const location = useLocation();
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoryFromUrl = queryParams.get('category');
    
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [location.search]);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${baseurl}gallery`);
        console.log("resposnseee")
        const galleryData = Array.isArray(response.data) ? response.data : [];
        setGallery(galleryData);
        setFilteredGallery(galleryData);
        setError(null);
      } catch (err) {
        setError('Failed to load gallery. Please try again later.');
        console.error('Error fetching gallery:', err);
        setGallery([]);
        setFilteredGallery([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  useEffect(() => {
    let filtered = [...gallery];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => 
        item.category === selectedCategory
      );
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(item => {
        return (
          (item.title && item.title.toLowerCase().includes(query)) ||
          (item.description && item.description.toLowerCase().includes(query)) ||
          (item.category && item.category.toLowerCase().includes(query))
        );
      });
    }

    if (sortBy === 'title') {
      filtered.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
    } else {
      filtered.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    }

    setFilteredGallery(Array.isArray(filtered) ? filtered : []);
  }, [gallery, selectedCategory, searchQuery, sortBy]);

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

  const renderGalleryContent = () => {
    const itemsToRender = Array.isArray(filteredGallery) ? filteredGallery : [];
    
    if (loading) {
      return (
        <div className="text-center py-24">
          <div className="w-24 h-24 silver-gradient rounded-full flex items-center justify-center mx-auto mb-6 relative overflow-hidden">
            <div className="absolute inset-0 sword-shimmer opacity-30"></div>
            <div className="text-gray-900 relative z-10 text-sm">Loading...</div>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-24">
          <div className="w-24 h-24 silver-gradient rounded-full flex items-center justify-center mx-auto mb-6 relative overflow-hidden">
            <div className="absolute inset-0 sword-shimmer opacity-30"></div>
            <div className="text-gray-900 relative z-10 text-sm">Error</div>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">Failed to Load Gallery</h3>
          <p className="text-gray-400 max-w-md mx-auto mb-8">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="group px-6 py-3 sword-gradient text-white rounded-xl font-medium hover:shadow-xl transition-all card-hover border border-gray-700 relative overflow-hidden silver-button-shine"
          >
            <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
            <span className="relative z-10">Retry</span>
          </button>
        </div>
      );
    }

    if (itemsToRender.length === 0) {
      return (
        <div className="text-center py-24">
          <div className="w-24 h-24 silver-gradient rounded-full flex items-center justify-center mx-auto mb-6 relative overflow-hidden">
            <div className="absolute inset-0 sword-shimmer opacity-30"></div>
            <Search className="text-gray-900 relative z-10" size={32} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">No Products Found</h3>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            {selectedCategory !== 'All' 
              ? `No items found in category "${selectedCategory}"`
              : 'Try adjusting your search or filter criteria to find what you\'re looking for'}
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
      );
    }

    if (viewMode === 'grid') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itemsToRender.map((item) => (
            <div
              key={item._id || item.id}
              onClick={() => handleOpenModal(item)}
              className="animate-on-scroll grid-item group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer card-hover bg-white/5 backdrop-blur-md border border-gray-700 hover:border-gray-500"
            >
              <div className="relative h-96 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <ImageWithFallback
                  src={item.images?.[0]?.url || 'https://images.unsplash.com/photo-1590880265945-6b43effeb599?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'}
                  alt={item.images?.[0]?.altText || item.title || 'Gallery image'}
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
                          handleLike(item._id);
                        }}
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full shadow-sm hover:bg-white/20 transition-colors border border-gray-600"
                      >
                        <Heart 
                          size={18} 
                          className={likedItems[item._id] ? 'text-red-500 fill-red-500' : 'text-gray-400'}
                        />
                      </button>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                      <h3 className="text-white text-xl font-bold mb-3 group-hover:text-gray-200 transition-colors uppercase tracking-wide">
                        {item.title || 'Untitled Project'}
                      </h3>
                      <div className="flex items-center text-gray-300 text-sm font-medium">
                        <span className="uppercase tracking-wider">{item.category || 'Uncategorized'}</span>
                        <span className="mx-2">•</span>
                        <span>{(item.images && item.images.length) || 0} images</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        } else {
          return (
            <div className="space-y-6">
              {itemsToRender.map((item) => (
                <div
                  key={item._id || item.id}
                  onClick={() => handleOpenModal(item)}
                  className="animate-on-scroll group bg-white/5 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-gray-500 overflow-hidden card-hover cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-64 h-64 md:h-auto relative flex-shrink-0">
                      <ImageWithFallback
                        src={item.images?.[0]?.url || 'https://images.unsplash.com/photo-1590880265945-6b43effeb599?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'}
                        alt={item.images?.[0]?.altText || item.title || 'Gallery image'}
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
                            {item.category || 'Uncategorized'}
                          </span>
                          <h3 className="text-2xl font-bold text-white mt-4 mb-2 group-hover:text-gray-300 transition-colors">{item.title || 'Untitled Project'}</h3>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLike(item._id);
                          }}
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-gray-700"
                        >
                          <Heart 
                            size={20} 
                            className={likedItems[item._id] ? 'text-red-500 fill-red-500' : 'text-gray-400'}
                          />
                        </button>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {item.description || 'Premium installation showcasing exceptional craftsmanship and design excellence.'}
                      </p>
                      
                      <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <div className="flex items-center">
                            <ImageIcon size={16} className="mr-1.5" />
                            {(item.images && item.images.length) || 0} images
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
          );
        }
      };

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
              Product <span className="gallery-text">Gallery</span>
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
              { value: gallery.length, label: 'Gallery Items', icon: Layers },
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
                Showing <span className="font-bold text-white">{filteredGallery.length}</span> items
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <ImageIcon size={16} className="mr-1" />
                High-quality images
              </div>
            </div>
          </div>

          {renderGalleryContent()}
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
                    src={selectedImage.images[currentImageIndex]?.url || 'https://images.unsplash.com/photo-1590880265945-6b43effeb599?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'}
                    alt={selectedImage.images[currentImageIndex]?.altText || `${selectedImage.title} - Image ${currentImageIndex + 1}`}
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
                          src={img.url}
                          alt={img.altText || `Thumbnail ${index + 1}`}
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
                  
                  <div className="text-gray-400 mb-4">
                    <span className="font-medium">Category: {selectedImage.category}</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Project Overview</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedImage.description || 'This premium installation showcases exceptional craftsmanship and attention to detail.'}
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-700">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-300">{selectedImage.images?.length || 0}</div>
                          <div className="text-sm text-gray-500">Images</div>
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
                  { label: 'Collections', value: categories.length - 1 },
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
                        <div className="text-lg font-bold text-white relative z-10">{gallery.length}</div>
                        <div className="text-xs text-gray-300 relative z-10">Gallery Items</div>
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