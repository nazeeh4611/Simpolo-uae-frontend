import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { baseurl } from '../../util/Base';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken');
    const adminUser = localStorage.getItem('adminUser');
    
    if (adminToken && adminUser) {
      try {
        const parsedUser = JSON.parse(adminUser);
        setUser(parsedUser);
        axios.defaults.headers.common['Authorization'] = `Bearer ${adminToken}`;
      } catch (error) {
        console.error('Error parsing admin user data:', error);
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        delete axios.defaults.headers.common['Authorization'];
      }
    }
    
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post(`${baseurl}admin/login`, {
        username,
        password
      });


      const { token, admin: admin } = response.data;
      
      if (token && admin) {
        localStorage.setItem('adminToken', token);
        localStorage.setItem('adminUser', JSON.stringify(admin));
        setUser(admin);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return { success: true, admin: admin };
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error('Login error:', error);
      return { 
        success: false, 
        error: error.response?.data?.message || error.message || 'Login failed' 
      };
    }
  };

  const adminLogin = async (username, password) => {
    return login(username, password);
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    setUser(null);
    delete axios.defaults.headers.common['Authorization'];
  };

  const getToken = () => {
    return localStorage.getItem('adminToken');
  };

  const isAuthenticated = () => {
    const token = localStorage.getItem('adminToken');
    const userData = localStorage.getItem('adminUser');
    return !!token && !!userData;
  };

  const updateUser = (updatedUser) => {
    const currentUser = JSON.parse(localStorage.getItem('adminUser') || '{}');
    const mergedUser = { ...currentUser, ...updatedUser };
    localStorage.setItem('adminUser', JSON.stringify(mergedUser));
    setUser(mergedUser);
  };

  const value = {
    user,
    loading,
    login: adminLogin,
    logout,
    updateUser,
    getToken,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};