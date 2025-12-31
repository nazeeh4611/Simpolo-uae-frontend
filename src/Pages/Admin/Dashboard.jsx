import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseurl } from '../../util/Base';
import { 
  TrendingUp, 
  Users, 
  Image as ImageIcon,
  Briefcase,
  Upload,
  FileText,
  Activity,
  ArrowUpRight,
  Eye,
  Calendar,
  Clock,
  CheckCircle
} from 'lucide-react';

const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: baseurl,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

const axiosInstance = createAxiosInstance();

const Dashboard = () => {
  const [stats, setStats] = useState({
    galleryCount: 0,
    projectsCount: 0,
    adminsCount: 0,
    galleryGrowth: 0,
    projectsGrowth: 0,
    viewsGrowth: 15
  });
  const [recentGallery, setRecentGallery] = useState([]);
  const [recentProjects, setRecentProjects] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get('admin/dashboard');
      const data = response.data;
      
      setStats(data.stats);
      setRecentGallery(data.recent.gallery || []);
      setRecentProjects(data.recent.projects || []);
      setRecentActivity(data.activity || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setError('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    fetchDashboardData();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full py-20">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full py-20">
        <div className="text-center max-w-md">
          <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-xl mb-4">
            <p className="font-medium mb-2">Error Loading Dashboard</p>
            <p className="text-sm">{error}</p>
          </div>
          <button 
            onClick={handleRetry}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600 text-sm lg:text-base">Welcome back! Here's what's happening with your content.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/admin/gallery/add"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 lg:px-5 py-2.5 rounded-lg flex items-center gap-2 transition-colors font-medium shadow-sm text-sm lg:text-base whitespace-nowrap"
          >
            <ImageIcon size={18} />
            Add Gallery Item
          </Link>
          <Link
            to="/admin/projects/add"
            className="bg-green-600 hover:bg-green-700 text-white px-4 lg:px-5 py-2.5 rounded-lg flex items-center gap-2 transition-colors font-medium shadow-sm text-sm lg:text-base whitespace-nowrap"
          >
            <Briefcase size={18} />
            Add Project
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <StatCard
          title="Gallery Items"
          value={stats.galleryCount}
          icon={<ImageIcon className="w-5 h-5 lg:w-6 lg:h-6" />}
          color="blue"
          link="/admin/gallery"
          trend={`+${stats.galleryGrowth}%`}
          trendLabel="this month"
        />
        <StatCard
          title="Projects"
          value={stats.projectsCount}
          icon={<Briefcase className="w-5 h-5 lg:w-6 lg:h-6" />}
          color="green"
          link="/admin/projects"
          trend={`+${stats.projectsGrowth}%`}
          trendLabel="this month"
        />
        <StatCard
          title="Admins"
          value={stats.adminsCount}
          icon={<Users className="w-5 h-5 lg:w-6 lg:h-6" />}
          color="purple"
          link="/admin/settings"
          trend=""
          trendLabel="total users"
        />
        <StatCard
          title="Views Growth"
          value={`+${stats.viewsGrowth}%`}
          icon={<Activity className="w-5 h-5 lg:w-6 lg:h-6" />}
          color="yellow"
          trend=""
          trendLabel="monthly increase"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 lg:p-6">
        <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <QuickActionCard
            title="Upload Images"
            description="Add new images to your gallery"
            icon={<Upload className="w-6 h-6 lg:w-7 lg:h-7" />}
            color="bg-blue-500"
            link="/admin/gallery/add"
          />
          <QuickActionCard
            title="Create Project"
            description="Start documenting a new project"
            icon={<Briefcase className="w-6 h-6 lg:w-7 lg:h-7" />}
            color="bg-green-500"
            link="/admin/projects/add"
          />
          <QuickActionCard
            title="Manage Admins"
            description="View and manage admin users"
            icon={<Users className="w-6 h-6 lg:w-7 lg:h-7" />}
            color="bg-purple-500"
            link="/admin/settings"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentItems
          title="Recent Gallery Items"
          items={recentGallery}
          type="gallery"
        />
        <RecentItems
          title="Recent Projects"
          items={recentProjects}
          type="projects"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 lg:p-6">
        <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-600" />
          Recent Activity
        </h2>
        <ActivityTimeline activities={recentActivity} />
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, color, link, trend, trendLabel }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    yellow: 'bg-yellow-100 text-yellow-600'
  };

  const bgColorClasses = {
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    purple: 'bg-purple-50',
    yellow: 'bg-yellow-50'
  };

  return (
    <div className={`${bgColorClasses[color]} rounded-xl shadow-sm border border-gray-200 p-4 lg:p-6 hover:shadow-md transition-all duration-200`}>
      <div className="flex items-start justify-between mb-3 lg:mb-4">
        <div className={`${colorClasses[color]} p-2.5 lg:p-3 rounded-lg`}>
          {icon}
        </div>
      </div>
      
      <div>
        <p className="text-xs lg:text-sm text-gray-600 font-medium mb-1">{title}</p>
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{value}</h3>
        
        {trend && (
          <div className="flex items-center gap-1 text-xs lg:text-sm">
            <ArrowUpRight className="w-3 h-3 lg:w-4 lg:h-4 text-green-600" />
            <span className="text-green-600 font-semibold">{trend}</span>
            <span className="text-gray-500">{trendLabel}</span>
          </div>
        )}
      </div>
      
      {link && (
        <Link
          to={link}
          className="mt-3 lg:mt-4 inline-flex items-center text-xs lg:text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          View all
          <ArrowUpRight className="w-3 h-3 lg:w-4 lg:h-4 ml-1" />
        </Link>
      )}
    </div>
  );
};

const QuickActionCard = ({ title, description, icon, color, link }) => {
  const CardContent = (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-4 lg:p-5 hover:border-blue-500 hover:shadow-lg transition-all duration-200 cursor-pointer group h-full">
      <div className={`${color} text-white p-2.5 lg:p-3 rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="font-semibold text-gray-900 text-sm lg:text-base mb-1.5">{title}</h3>
      <p className="text-xs lg:text-sm text-gray-600">{description}</p>
    </div>
  );

  return link ? <Link to={link}>{CardContent}</Link> : CardContent;
};

const RecentItems = ({ title, items, type }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'No date';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch (error) {
      return 'Invalid date';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-full">
      <div className="px-4 lg:px-6 py-3 lg:py-4 border-b border-gray-200">
        <h2 className="text-lg lg:text-xl font-bold text-gray-900 flex items-center gap-2">
          {type === 'gallery' ? <ImageIcon className="w-4 h-4 lg:w-5 lg:h-5" /> : <Briefcase className="w-4 h-4 lg:w-5 lg:h-5" />}
          {title}
        </h2>
      </div>
      
      <div className="p-4 lg:p-6">
        {items && items.length > 0 ? (
          <div className="space-y-3 lg:space-y-4">
            {items.map((item) => (
              <div
                key={item._id || item.id}
                className="flex items-center justify-between p-3 lg:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <div className="flex-1 min-w-0 pr-2">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-gray-900 text-sm lg:text-base truncate">
                      {item.title || item.name || 'Untitled'}
                    </h3>
                  </div>
                  <p className="text-xs lg:text-sm text-gray-600 truncate">
                    {formatDate(item.createdAt || item.date)}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    to={`/admin/${type}/edit/${item._id || item.id}`}
                    className="ml-2 lg:ml-4 text-blue-600 hover:text-blue-700 text-xs lg:text-sm font-medium whitespace-nowrap px-3 lg:px-4 py-1.5 lg:py-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group-hover:shadow-sm"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6 lg:py-8">
            <div className="text-gray-400 mb-2 lg:mb-3">
              {type === 'gallery' ? 
                <ImageIcon size={32} className="mx-auto lg:w-12 lg:h-12" /> : 
                <Briefcase size={32} className="mx-auto lg:w-12 lg:h-12" />
              }
            </div>
            <p className="text-gray-500 font-medium text-sm lg:text-base">No {type} yet</p>
          </div>
        )}
        
        {items && items.length > 0 && (
          <div className="mt-4 lg:mt-6 pt-3 lg:pt-4 border-t border-gray-200">
            <Link
              to={`/admin/${type}`}
              className="text-blue-600 hover:text-blue-700 font-medium text-xs lg:text-sm flex items-center justify-center gap-1 hover:gap-2 transition-all"
            >
              View all {type}
              <ArrowUpRight className="w-3 h-3 lg:w-4 lg:h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const ActivityItem = ({ action, item, time, color, type }) => {
  const getActionIcon = () => {
    switch (type) {
      case 'gallery':
        return <ImageIcon className="w-4 h-4" />;
      case 'project':
        return <Briefcase className="w-4 h-4" />;
      default:
        return <Activity className="w-4 h-4" />;
    }
  };

  const getColorClass = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-500';
      case 'green':
        return 'bg-green-500';
      case 'purple':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="flex items-start gap-4 group">
      <div className="relative">
        <div className={`${getColorClass()} w-2.5 h-2.5 rounded-full mt-2`}></div>
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-200 group-last:hidden"></div>
      </div>
      <div className="flex-1 pb-4">
        <div className="flex items-center gap-2">
          <div className={`${getColorClass()} bg-opacity-10 p-1 rounded`}>
            {getActionIcon()}
          </div>
          <p className="text-gray-900 font-medium text-sm lg:text-base">
            {action}
          </p>
        </div>
        <p className="text-xs lg:text-sm text-gray-600 mt-1">{item}</p>
        <div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
          <Clock className="w-3 h-3" />
          {time}
        </div>
      </div>
    </div>
  );
};

const ActivityTimeline = ({ activities }) => {
  const formatTimeAgo = (dateString) => {
    if (!dateString) return 'Recently';
    
    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffInSeconds = Math.floor((now - date) / 1000);
      
      if (diffInSeconds < 60) return 'Just now';
      if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
      if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
      if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    } catch (error) {
      return 'Recently';
    }
  };

  if (activities.length === 0) {
    return (
      <div className="text-center py-8">
        <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
        <p className="text-gray-500 font-medium">No recent activity</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <ActivityItem
          key={activity._id}
          action={activity.action}
          item={activity.item}
          time={formatTimeAgo(activity.createdAt)}
          color={activity.color}
          type={activity.type}
        />
      ))}
    </div>
  );
};

export default Dashboard;