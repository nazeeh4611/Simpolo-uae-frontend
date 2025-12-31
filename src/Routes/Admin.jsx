import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import AdminLogin from '../Pages/Admin/AdminLogin';
import ProtectedRoute from './ProtectedRoute';
import AdminLayout from './Layout';

import Dashboard from '../Pages/Admin/Dashboard';
import GalleryList from '../Pages/Admin/GalleryManage';
import ProjectsList from '../Pages/Admin/ProjectList';

import { AuthProvider } from '../Pages/Admin/Auth';
import Settings from '../Pages/Admin/Settings';

function AdminRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<AdminLogin />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="gallery" element={<GalleryList />} />
          <Route path="projects" element={<ProjectsList />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default AdminRoutes;