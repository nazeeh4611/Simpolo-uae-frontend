import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, ChevronRight, Award, CheckCircle2, Users, Clock, Target, Sparkles, TrendingUp, Star, ArrowRight, X, Download, Share2, ChevronLeft, ChevronRight as ChevronRightIcon, Heart, Calendar, Play, Eye, Tag, ImageIcon, Filter, Search, Grid, List, Layers, Ruler, Package, Home, CheckCircle, Info, Wrench, Briefcase, User, Phone, Mail, ExternalLink, Copy, Check } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import axios from 'axios';
import { baseurl } from '../../util/Base';
import { ImageWithFallback } from '../../util/Fallback';
import { useSEO } from '../../util/SEO';

function Portfolio() {

  useSEO({
    title: "Portfolio | Simpolo Trading",
    description: "Explore premium tiles and slabs by Simpolo Trading.",
  });
  // SEO Metadata
  const pageTitle = "Portfolio | Simpolo Trading LLC - Premium Tile Projects & Installations UAE";
  const pageDescription = "View Simpolo Trading's portfolio of premium tile projects across UAE. Residential, commercial, hospitality & government tile installations with 500+ successful projects.";
  const pageKeywords = "tile projects portfolio, porcelain tile installations UAE, ceramic tile projects, marble installations Dubai, residential tile projects, commercial tile portfolio, hospitality tile work, government projects UAE";

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [likedItems, setLikedItems] = useState({});
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [copied, setCopied] = useState(false);
  const modalContentRef = useRef(null);
  
  const categories = [
    'All',
    'Residential',
    'Commercial',
    'Hospitality',
    'Government',
    'Pool & Villa'
  ];

  // Set SEO meta tags
  useEffect(() => {
    // Update document title
    document.title = pageTitle;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = pageDescription;
    
    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = pageKeywords;
    
    // Add canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = window.location.href;
    
    // Add Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:image', content: `${window.location.origin}/portfolio-og.jpg` },
      { property: 'og:site_name', content: 'Simpolo Trading LLC' },
      { property: 'og:locale', content: 'en_AE' },
    ];
    
    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });
    
    // Add Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: pageDescription },
      { name: 'twitter:image', content: `${window.location.origin}/portfolio-og.jpg` },
      { name: 'twitter:site', content: '@simpolotrading' },
    ];
    
    twitterTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.name = tag.name;
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });
    
    // Add structured data for Portfolio
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Simpolo Trading Portfolio',
      'description': pageDescription,
      'url': window.location.href,
      'numberOfItems': projects.length,
      'itemListElement': projects.slice(0, 20).map((project, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'CreativeWork',
          'name': project.title || project.name || 'Tile Installation Project',
          'description': project.description || 'Premium tile installation by Simpolo Trading LLC',
          'image': project.images?.[0]?.url || project.image || `${window.location.origin}/default-project.jpg`,
          'datePublished': project.createdAt,
          'creator': {
            '@type': 'Organization',
            'name': 'Simpolo Trading LLC',
            'url': window.location.origin
          },
          'locationCreated': project.location || 'UAE',
          'genre': project.category || 'Construction'
        }
      }))
    };
    
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Intersection Observer for animations
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
  }, [projects]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${baseurl}projects`);
        const projectsData = Array.isArray(response.data) ? response.data : [];
        setProjects(projectsData);
        setError(null);
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        console.error('Error fetching projects:', err);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(project => {
    if (selectedCategory !== 'All' && project.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      return (
        (project.title && project.title.toLowerCase().includes(query)) ||
        (project.description && project.description.toLowerCase().includes(query)) ||
        (project.category && project.category.toLowerCase().includes(query)) ||
        (project.location && project.location.toLowerCase().includes(query)) ||
        (project.client && project.client.toLowerCase().includes(query)) ||
        (project.scope && project.scope.toLowerCase().includes(query))
      );
    }
    return true;
  }).sort((a, b) => {
    if (sortBy === 'title') {
      return (a.title || '').localeCompare(b.title || '');
    }
    return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
  });

  const stats = [
    { 
      value: projects.length, 
      label: 'Completed Projects',
      icon: CheckCircle2,
    },
    { 
      value: '15+', 
      label: 'Years Experience',
      icon: Clock,
    },
    { 
      value: '100%', 
      label: 'Client Satisfaction',
      icon: Users,
    },
    { 
      value: '300+', 
      label: 'Happy Clients',
      icon: Target,
    },
  ];

  const projectTypes = [
    {
      icon: Building2,
      title: 'Residential',
      description: 'Villas, apartments, and residential complexes',
      count: projects.filter(p => p.category === 'Residential').length,
    },
    {
      icon: Building2,
      title: 'Commercial',
      description: 'Offices, retail spaces, and business centers',
      count: projects.filter(p => p.category === 'Commercial').length,
    },
    {
      icon: Building2,
      title: 'Hospitality',
      description: 'Hotels, resorts, and service apartments',
      count: projects.filter(p => p.category === 'Hospitality').length,
    },
    {
      icon: Building2,
      title: 'Government',
      description: 'Public sector and infrastructure projects',
      count: projects.filter(p => p.category === 'Government').length,
    }
  ];

  const testimonials = [
    {
      quote: "Simpolo Trading delivered exceptional quality and met tight deadlines for our luxury residential project.",
      client: "La Clé Residential",
      type: "Residential Development",
      rating: 5
    },
    {
      quote: "Their professional approach and quality materials made them our preferred supplier for hospitality projects.",
      client: "Fairmont Hotels",
      type: "Hospitality Group",
      rating: 5
    },
    {
      quote: "Reliable supply and consistent quality across multiple government infrastructure projects.",
      client: "DSSCB",
      type: "Government Entity",
      rating: 5
    }
  ];

  const handleLike = (id) => {
    setLikedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownload = (imageUrl, imageName) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = imageName || 'project-image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderProjects = () => {
    if (loading) {
      return (
        <div className="text-center py-12">
          <div className="w-16 h-16 silver-gradient rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden">
            <div className="absolute inset-0 sword-shimmer opacity-30"></div>
            <div className="text-gray-900 relative z-10 text-sm">Loading...</div>
          </div>
          <p className="text-gray-400">Loading projects...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-12">
          <div className="w-16 h-16 silver-gradient rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden">
            <div className="absolute inset-0 sword-shimmer opacity-30"></div>
            <div className="text-gray-900 relative z-10 text-sm">Error</div>
          </div>
          <p className="text-gray-400 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="group px-4 py-2 sword-gradient text-white rounded-lg font-medium hover:shadow-lg transition-all card-hover border border-gray-700 relative overflow-hidden silver-button-shine"
            aria-label="Retry loading projects"
          >
            <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-30 transition-opacity"></div>
            <span className="relative z-10">Retry</span>
          </button>
        </div>
      );
    }

    if (filteredProjects.length === 0) {
      return (
        <div className="text-center py-12">
          <div className="w-16 h-16 silver-gradient rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden">
            <div className="absolute inset-0 sword-shimmer opacity-30"></div>
            <Search className="text-gray-900 relative z-10" size={32} aria-hidden="true" />
          </div>
          <p className="text-gray-400">
            {selectedCategory !== 'All' 
              ? `No projects found in "${selectedCategory}" category`
              : 'No projects found'}
          </p>
        </div>
      );
    }

    if (viewMode === 'grid') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <article
              key={project._id || project.id || index}
              onClick={() => handleOpenModal(project)}
              className="animate-on-scroll project-card group relative overflow-hidden rounded-2xl shadow-lg card-hover border border-gray-700 hover:border-gray-500 cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <meta itemProp="name" content={project.title || project.name || 'Tile Installation Project'} />
              <meta itemProp="description" content={project.description || 'Premium tile installation by Simpolo Trading LLC'} />
              <meta itemProp="datePublished" content={project.createdAt} />
              
              <div className="relative h-96 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <ImageWithFallback
                  src={project.images?.[0]?.url || project.image || 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80'}
                  alt={project.title || project.name || 'Tile installation project'}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  width="400"
                  height="400"
                  loading={index < 6 ? "eager" : "lazy"}
                />
                
                {project.featured && (
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
                      handleLike(project._id);
                    }}
                    className="p-2 bg-white/10 backdrop-blur-sm rounded-full shadow-sm hover:bg-white/20 transition-colors border border-gray-600"
                    aria-label={likedItems[project._id] ? `Unlike ${project.title}` : `Like ${project.title}`}
                  >
                    <Heart 
                      size={18} 
                      className={likedItems[project._id] ? 'text-red-500 fill-red-500' : 'text-gray-400'}
                    />
                  </button>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-white text-xl font-bold mb-3 group-hover:text-gray-200 transition-colors uppercase tracking-wide">
                    {project.title || project.name || 'Untitled Project'}
                  </h3>
                  <div className="flex items-center text-gray-300 text-sm font-medium">
                    <span className="uppercase tracking-wider">{project.category || project.type || 'Project'}</span>
                    <span className="mx-2">•</span>
                    <span>{project.location || 'UAE'}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      );
    } else {
      return (
        <div className="space-y-6">
          {filteredProjects.map((project, index) => (
            <article
              key={project._id || project.id || index}
              onClick={() => handleOpenModal(project)}
              className="animate-on-scroll group bg-white/5 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-gray-500 overflow-hidden card-hover cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <meta itemProp="name" content={project.title || project.name || 'Tile Installation Project'} />
              <meta itemProp="description" content={project.description || 'Premium tile installation by Simpolo Trading LLC'} />
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-64 h-64 md:h-auto relative flex-shrink-0">
                  <ImageWithFallback
                    src={project.images?.[0]?.url || project.image || 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80'}
                    alt={project.title || project.name || 'Tile installation project'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width="256"
                    height="256"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  {project.featured && (
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
                        {project.category || project.type || 'Project'}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-4 mb-2 group-hover:text-gray-300 transition-colors">
                        {project.title || project.name || 'Untitled Project'}
                      </h3>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLike(project._id);
                      }}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-gray-700"
                      aria-label={likedItems[project._id] ? `Unlike ${project.title}` : `Like ${project.title}`}
                    >
                      <Heart 
                        size={20} 
                        className={likedItems[project._id] ? 'text-red-500 fill-red-500' : 'text-gray-400'}
                      />
                    </button>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description || 'Premium project showcasing exceptional craftsmanship and design excellence.'}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <ImageIcon size={16} className="mr-1.5" aria-hidden="true" />
                        {(project.images && project.images.length) || 0} images
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1.5" aria-hidden="true" />
                        {project.location || 'UAE'}
                      </div>
                      <div className="flex items-center">
                        <User size={16} className="mr-1.5" aria-hidden="true" />
                        {project.client || 'N/A'}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-300 font-semibold">
                      View Details
                      <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      );
    }
  };

  return (
    <>
      {/* Hidden SEO content for search engines */}
      <div className="sr-only" aria-hidden="true">
        <h1>Simpolo Trading Portfolio - Premium Tile Installation Projects UAE</h1>
        <p>Browse our extensive portfolio of {projects.length}+ successful tile installation projects across residential, commercial, hospitality, and government sectors in UAE.</p>
        
        <h2>Project Categories:</h2>
        <ul>
          <li>Residential Tile Projects - Villas, Apartments, Compounds</li>
          <li>Commercial Tile Installations - Offices, Malls, Retail Spaces</li>
          <li>Hospitality Tile Work - Hotels, Resorts, Restaurants</li>
          <li>Government & Infrastructure Projects</li>
          <li>Pool & Villa Specialized Installations</li>
        </ul>
        
        <h2>Featured Project Statistics:</h2>
        <ul>
          <li>Total Projects: {projects.length}</li>
          <li>Years Experience: 15+ Years</li>
          <li>Client Satisfaction: 100%</li>
          <li>Happy Clients: 300+</li>
        </ul>
        
        <h2>Locations Served:</h2>
        <ul>
          <li>Dubai - Luxury Residential & Commercial</li>
          <li>Abu Dhabi - Government & Hospitality</li>
          <li>Sharjah - Industrial & Residential</li>
          <li>All Emirates Coverage</li>
        </ul>
        
        <p>View our complete portfolio of premium tile installations including porcelain tiles, ceramic tiles, marble, and specialty tile applications.</p>
      </div>

      <main className="min-h-screen bg-black">
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
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
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
            background: linear-gradient(135deg, #808080 0%, #a0a0a0 50%, #c0c0c100%);
          }
          .dark-gradient {
            background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%);
          }
          .card-hover {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .card-hover:hover {
            transform: translateY(-8px);
            box-shadow: 0 25px 50px rgba(255, 255, 255, 0.1);
          }
          .project-card {
            transition: all 0.4s ease;
          }
          .project-card:hover {
            transform: translateY(-5px) scale(1.02);
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
          .portfolio-text {
            display: inline-block;
            background: linear-gradient(135deg, #c0c0c0 0%, #d4d4d4 50%, #e8e8e8 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
            background-size: 200% 200%;
            animation: gradientShift 3s ease infinite;
          }
          .prestigious-text {
            display: inline-block;
            background: linear-gradient(135deg, #c0c0c0 0%, #d4d4d4 50%, #e8e8e8 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
            background-size: 200% 200%;
            animation: gradientShift 3s ease infinite;
          }
          .solutions-text {
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
          .category-btn {
            transition: all 0.3s ease;
          }
          .category-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(255, 255, 255, 0.05);
          }
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
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
              <TrendingUp size={18} className="mr-2 text-gray-400 relative z-10" aria-hidden="true" />
              <span className="text-gray-400 font-medium relative z-10">Our Success Stories</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Project <span className="portfolio-text">Portfolio</span>
            </h1>
            <div className="w-32 h-1.5 silver-gradient mb-8 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 sword-shimmer"></div>
            </div>
            <div className="text-2xl md:text-3xl mb-8 text-gray-300 font-semibold h-12">
              <Typewriter
                options={{
                  strings: [
                    'Prestigious Developments',
                    'Luxury Installations',
                    'Iconic Projects',
                    'Quality Deliverables',
                    'Client Success Stories',
                    'Premium Transformations'
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
              Delivering excellence across residential, commercial, hospitality, and government projects throughout the UAE
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 relative bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <article 
                key={index} 
                className="animate-on-scroll bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center card-hover border border-gray-700 hover:border-gray-600 relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="flex justify-center mb-4 relative z-10">
                  <div className="p-3 rounded-xl silver-gradient relative overflow-hidden">
                    <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                    <stat.icon className="text-gray-900 relative z-10" size={24} aria-hidden="true" />
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2 text-white relative z-10">{stat.value}</div>
                <div className="text-gray-400 text-sm relative z-10">{stat.label}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl shadow-xl p-8 mb-12 border border-gray-700">
            <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Search projects, categories, or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-700"
                  aria-label="Search portfolio projects"
                />
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2">
                  <label className="text-sm text-gray-400">Sort by:</label>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 bg-white/5 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-700"
                    aria-label="Sort portfolio projects"
                  >
                    <option value="date" className="bg-gray-900">Latest</option>
                    <option value="title" className="bg-gray-900">Title</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2.5 rounded-lg category-btn ${viewMode === 'grid' ? 'silver-gradient text-gray-900 border border-gray-300' : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-gray-700'}`}
                    aria-label="Switch to grid view"
                  >
                    <Grid size={20} aria-hidden="true" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2.5 rounded-lg category-btn ${viewMode === 'list' ? 'silver-gradient text-gray-900 border border-gray-300' : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-gray-700'}`}
                    aria-label="Switch to list view"
                  >
                    <List size={20} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-bold text-white mb-3">Filter by Category:</h3>
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
                    aria-label={`Filter by ${category} projects`}
                  >
                    {category === 'All' ? (
                      <>
                        <Filter size={14} className="mr-2" aria-hidden="true" />
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
                Showing <span className="font-bold text-white">{filteredProjects.length}</span> projects
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <ImageIcon size={16} className="mr-1" aria-hidden="true" />
                High-quality images
              </div>
            </div>
          </div>

          {renderProjects()}

          <div className="text-center mt-12 animate-on-scroll">
            <Link
              to="/gallery"
              className="group inline-flex items-center px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-medium hover:bg-white/5 hover:border-gray-500 transition-all duration-300 card-hover relative overflow-hidden"
              aria-label="View complete Products"
            >
              <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <span className="relative z-10">View Complete Portfolio Gallery</span>
              <ArrowRight size={20} className="ml-2 relative z-10 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-scaleIn overflow-y-auto">
          <div 
            className="absolute inset-0" 
            onClick={() => {
              setSelectedProject(null);
              setCurrentImageIndex(0);
            }}
            aria-label="Close project modal"
          ></div>
          
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-2xl bg-gray-900 z-10 border border-gray-700 flex flex-col">
            <button
              onClick={() => {
                setSelectedProject(null);
                setCurrentImageIndex(0);
              }}
              className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-gray-400 border border-gray-600 transition-all duration-300 hover:shadow-lg z-30"
              aria-label="Close project details"
            >
              <X size={24} aria-hidden="true" />
            </button>
            
            <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
              <div className="lg:w-2/3 flex flex-col border-r border-gray-700">
                <div className="relative flex-1 bg-black flex items-center justify-center min-h-[400px] max-h-[500px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageWithFallback
                      src={selectedProject.images?.[currentImageIndex]?.url || selectedProject.image || 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80'}
                      alt={selectedProject.images?.[currentImageIndex]?.altText || `${selectedProject.title || selectedProject.name} - Image ${currentImageIndex + 1}`}
                      className="max-w-full max-h-full object-contain"
                      width="800"
                      height="600"
                    />
                  </div>
                  
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full shadow-xl hover:bg-white/20 transition-all duration-300 z-20 group border border-gray-600"
                    aria-label="Previous project image"
                  >
                    <ChevronLeft size={24} className="text-gray-300 group-hover:text-white group-hover:scale-110 transition-transform" aria-hidden="true" />
                  </button>
                  
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full shadow-xl hover:bg-white/20 transition-all duration-300 z-20 group border border-gray-600"
                    aria-label="Next project image"
                  >
                    <ChevronRightIcon size={24} className="text-gray-300 group-hover:text-white group-hover:scale-110 transition-transform" aria-hidden="true" />
                  </button>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleDownload(
                          selectedProject.images?.[currentImageIndex]?.url || selectedProject.image,
                          `${selectedProject.title || selectedProject.name}-${currentImageIndex + 1}.jpg`
                        )}
                        className="px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-xl text-sm font-medium hover:bg-white/20 text-gray-300 hover:text-white transition-all duration-300 border border-gray-600 flex items-center gap-2 hover:shadow-lg"
                        aria-label="Download project image"
                      >
                        <Download size={18} aria-hidden="true" />
                        Download
                      </button>
                      <button 
                        onClick={handleShare}
                        className="px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-xl text-sm font-medium hover:bg-white/20 text-gray-300 hover:text-white transition-all duration-300 border border-gray-600 flex items-center gap-2 hover:shadow-lg"
                        aria-label="Share project link"
                      >
                        {copied ? <Check size={18} className="text-green-500" aria-hidden="true" /> : <Share2 size={18} aria-hidden="true" />}
                        {copied ? 'Copied!' : 'Share'}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike(selectedProject._id);
                        }}
                        className="px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-xl text-sm font-medium hover:bg-white/20 text-gray-300 hover:text-white transition-all duration-300 border border-gray-600 flex items-center gap-2 hover:shadow-lg"
                        aria-label={likedItems[selectedProject._id] ? 'Unlike project' : 'Like project'}
                      >
                        <Heart 
                          size={18} 
                          className={likedItems[selectedProject._id] ? 'text-red-500 fill-red-500' : 'text-gray-400'}
                          aria-hidden="true"
                        />
                        {likedItems[selectedProject._id] ? 'Liked' : 'Like'}
                      </button>
                    </div>
                    <div className="text-white text-sm bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm font-medium border border-gray-600">
                      {currentImageIndex + 1} / {(selectedProject.images && selectedProject.images.length) || 1}
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-800/50 border-t border-gray-700">
                  <h3 className="text-white font-medium mb-2">Project Images</h3>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {selectedProject.images && selectedProject.images.length > 0 ? (
                      selectedProject.images.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                            currentImageIndex === index 
                              ? 'border-gray-300 ring-2 ring-gray-300/20 scale-105' 
                              : 'border-gray-600 hover:border-gray-400'
                          }`}
                          aria-label={`View project image ${index + 1}`}
                        >
                          <ImageWithFallback
                            src={img.url}
                            alt={img.altText || `Project thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                            width="80"
                            height="64"
                          />
                        </button>
                      ))
                    ) : (
                      <button
                        onClick={() => setCurrentImageIndex(0)}
                        className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 border-gray-300 ring-2 ring-gray-300/20 scale-105`}
                        aria-label="View project image"
                      >
                        <ImageWithFallback
                          src={selectedProject.image || 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80'}
                          alt={selectedProject.title || selectedProject.name}
                          className="w-full h-full object-cover"
                          width="80"
                          height="64"
                        />
                      </button>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/3 flex flex-col">
                <div className="flex-shrink-0 p-6 bg-gradient-to-b from-gray-900 to-black">
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-4 py-2 sword-gradient text-white text-sm font-semibold rounded-full border border-gray-700">
                        {selectedProject.category || selectedProject.type || 'Project'}
                      </span>
                      {selectedProject.featured && (
                        <span className="px-3 py-1.5 silver-gradient text-gray-900 text-xs font-semibold rounded-full shadow-sm border border-gray-300 relative overflow-hidden">
                          <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                          <span className="relative z-10">Featured</span>
                        </span>
                      )}
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mt-2 mb-3">
                      {selectedProject.title || selectedProject.name}
                    </h2>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-gray-400">
                        <MapPin size={18} className="mr-2" aria-hidden="true" />
                        <span className="font-medium">{selectedProject.location || 'UAE'}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <User size={18} className="mr-2" aria-hidden="true" />
                        <span className="font-medium">Client: {selectedProject.client || 'N/A'}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Calendar size={18} className="mr-2" aria-hidden="true" />
                        <span>
                          {selectedProject.completionDate 
                            ? `Completed: ${formatDate(selectedProject.completionDate)}`
                            : 'Completion Date: N/A'}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Calendar size={18} className="mr-2" aria-hidden="true" />
                        <span>Added on {formatDate(selectedProject.createdAt)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div 
                  ref={modalContentRef}
                  className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-gray-900 to-black"
                >
                  {selectedProject.description && (
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                        <Info size={20} className="mr-2" aria-hidden="true" />
                        Project Overview
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>
                  )}
                  
                  {selectedProject.scope && (
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                        <Briefcase size={20} className="mr-2" aria-hidden="true" />
                        Project Scope
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedProject.scope}
                      </p>
                    </div>
                  )}
                  
                  {selectedProject.productsUsed && selectedProject.productsUsed.length > 0 && (
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                        <Package size={20} className="mr-2" aria-hidden="true" />
                        Products Used
                      </h4>
                      <div className="space-y-3">
                        {selectedProject.productsUsed.map((product, index) => (
                          <div key={index} className="bg-white/5 p-3 rounded-lg border border-gray-700">
                            <div className="flex justify-between items-center mb-1">
                              <div className="text-gray-300 font-medium">{product.name || 'Product Name'}</div>
                              {product.quantity && (
                                <div className="text-gray-400 text-sm">Qty: {product.quantity}</div>
                              )}
                            </div>
                            {product.category && (
                              <div className="text-gray-400 text-sm">Category: {product.category}</div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                      <ImageIcon size={20} className="mr-2" aria-hidden="true" />
                      Media Details
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-white/5 p-3 rounded-lg border border-gray-700">
                        <div className="text-sm text-gray-400">Total Images</div>
                        <div className="text-gray-300 font-semibold">{(selectedProject.images && selectedProject.images.length) || 1}</div>
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg border border-gray-700">
                        <div className="text-sm text-gray-400">Current Image</div>
                        <div className="text-gray-300 font-semibold">#{currentImageIndex + 1}</div>
                      </div>
                    </div>
                    {selectedProject.images?.[currentImageIndex]?.caption && (
                      <div className="mt-3 p-3 bg-white/5 rounded-lg border border-gray-700">
                        <div className="text-sm text-gray-400 mb-1">Image Caption</div>
                        <div className="text-gray-300">{selectedProject.images[currentImageIndex].caption}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-white/5 backdrop-blur border border-gray-700 text-gray-300 text-sm font-semibold relative overflow-hidden">
              <div className="absolute inset-0 sword-shimmer opacity-20"></div>
              <Building2 size={18} className="mr-2 relative z-10" aria-hidden="true" /> 
              <span className="relative z-10">Project Categories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Specialized <span className="solutions-text">Solutions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Tailored solutions for diverse architectural requirements across sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((type, index) => (
              <article
                key={index}
                className="animate-on-scroll group bg-white/5 backdrop-blur-md rounded-2xl p-8 text-center card-hover border border-gray-700 hover:border-gray-600 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="w-16 h-16 rounded-full silver-gradient flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform relative overflow-hidden">
                  <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                  <type.icon className="text-gray-900 relative z-10" size={28} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors relative z-10">{type.title}</h3>
                <p className="text-gray-400 mb-4 text-sm relative z-10">{type.description}</p>
                <div className="text-2xl font-bold text-gray-300 mb-2 relative z-10">{type.count}</div>
                <div className="text-sm text-gray-500 relative z-10">Completed Projects</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden sword-gradient">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-700 rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600 rounded-full mix-blend-overlay filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm text-white text-sm font-semibold border border-gray-600 relative overflow-hidden">
              <div className="absolute inset-0 sword-shimmer opacity-30"></div>
              <Star size={18} className="mr-2 relative z-10" aria-hidden="true" />
              <span className="relative z-10">Client Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Client <span className="text-gray-300">Feedback</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Hear from our valued clients about their experience working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="animate-on-scroll bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-600 card-hover relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="flex mb-4 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-gray-400 fill-gray-400 mr-1" aria-hidden="true" />
                  ))}
                </div>
                <div className="text-white mb-6 text-lg italic leading-relaxed relative z-10" itemProp="reviewBody">"{testimonial.quote}"</div>
                <div className="border-t border-gray-600 pt-6 relative z-10">
                  <div className="text-gray-300 font-medium" itemProp="author">{testimonial.client}</div>
                  <div className="text-gray-400 text-sm">{testimonial.type}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <div className="sword-gradient rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
              <div className="grid lg:grid-cols-2">
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-gray-600 relative overflow-hidden">
                    <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                    <Sparkles size={18} className="mr-2 text-gray-300 relative z-10" aria-hidden="true" />
                    <span className="text-gray-300 relative z-10">Next Project</span>
                  </div>
                  
                  <h2 className="text-4xl font-bold text-white mb-6">
                    Start Your <span className="text-gray-300">Project</span> With Us
                  </h2>
                  <p className="text-gray-300 mb-8 text-lg">
                    Join our growing portfolio of successful projects and experience the Simpolo Trading difference
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="group px-8 py-4 silver-gradient text-gray-900 rounded-xl font-medium hover:shadow-xl transition-all duration-300 flex items-center space-x-3 card-hover border border-gray-300 relative overflow-hidden silver-button-shine"
                      aria-label="Request a project quote"
                    >
                      <div className="absolute inset-0 sword-shimmer opacity-30"></div>
                      <span className="relative z-10">Request a Quote</span>
                      <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                    </Link>
                    
                    <Link
                      to="/services"
                      className="group px-8 py-4 border-2 border-gray-600 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center space-x-3 card-hover relative overflow-hidden"
                      aria-label="View our tile services"
                    >
                      <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      <span className="relative z-10">Our Services</span>
                      <ChevronRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
                
                <div className="relative h-64 lg:h-auto min-h-[300px] bg-gradient-to-r from-gray-900/80 to-gray-800/80">
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-600 animate-float relative overflow-hidden">
                        <div className="absolute inset-0 sword-shimmer opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        <Award className="text-white relative z-10" size={32} aria-hidden="true" />
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
                          <div className="text-lg font-bold text-white relative z-10">{projects.length}</div>
                          <div className="text-xs text-gray-300 relative z-10">Projects</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

export default Portfolio;