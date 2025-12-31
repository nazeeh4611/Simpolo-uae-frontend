import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Image, 
  Briefcase, 
  Menu, 
  X, 
  LogOut,
  User,
  Settings,
  Home
} from 'lucide-react';
import { useAuth } from '../Pages/Admin/Auth';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const navItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { path: '/admin/gallery', label: 'Gallery', icon: <Image size={20} /> },
    { path: '/admin/projects', label: 'Projects', icon: <Briefcase size={20} /> },
    { path: '/admin/settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const handleGoToWebsite = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <aside className={`
        fixed
        w-64
        h-screen
        bg-gradient-to-b from-gray-900 to-black
        text-white
        z-50
        transform
        transition-transform
        duration-300
        ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        shadow-2xl
        flex
        flex-col
      `}>
        <div className="flex flex-col h-full overflow-hidden">
          <div className="p-6 border-b border-gray-800 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-700">
                  <span className="text-silver font-bold text-xl">ST</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">Simpolo Admin</h1>
                  <p className="text-gray-400 text-sm">Control Panel</p>
                </div>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="p-4 border-b border-gray-800 flex-shrink-0">
            <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center border border-gray-700">
                <User size={18} className="text-gray-300" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm text-white">{user?.name || 'Admin'}</p>
                <p className="text-xs text-gray-400">Administrator</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  location.pathname === item.path 
                    ? 'bg-gradient-to-r from-gray-800 to-gray-700 text-white shadow-lg border border-gray-700' 
                    : 'hover:bg-gray-800 text-gray-300 hover:text-white'
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <div className={`${location.pathname === item.path ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                  {item.icon}
                </div>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
            
            <button
              onClick={handleGoToWebsite}
              className="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group hover:bg-gray-800 text-gray-300 hover:text-white w-full"
            >
              <Home size={20} className="text-gray-400 group-hover:text-white" />
              <span className="font-medium">View Website</span>
            </button>
          </nav>

          <div className="p-4 border-t border-gray-800 space-y-2 flex-shrink-0">
            <button
              onClick={handleLogout}
              className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white rounded-xl transition-all duration-200 font-medium shadow-lg hover:shadow-xl border border-gray-700"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-h-screen lg:ml-64">
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30 flex-shrink-0">
          <div className="flex items-center justify-between px-4 lg:px-6 py-3 lg:py-4">
            <div className="flex items-center space-x-3 lg:space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden text-gray-600 hover:text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Menu size={20} />
              </button>
              
              <div className="hidden md:block">
                <h2 className="text-base lg:text-lg font-semibold text-gray-800">
                  Welcome back, <span className="text-gray-700">{user?.name || 'Admin'}</span>
                </h2>
                <p className="text-xs lg:text-sm text-gray-500">Manage your content and projects</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-xs lg:text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Online</span>
              </div>
              <div className="text-xs lg:text-sm text-gray-500 whitespace-nowrap">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto w-full p-3 lg:p-4">
            <Outlet />
          </div>
        </main>

        <footer className="bg-white border-t border-gray-200 py-3 lg:py-4 px-4 lg:px-6 flex-shrink-0">
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs lg:text-sm text-gray-500 gap-2">
            <div>
              © {new Date().getFullYear()} Simpolo Trading LLC. All rights reserved.
            </div>
            <div className="flex items-center space-x-3 lg:space-x-4">
              <span>v1.0.0</span>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;