import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import UserRoutes from './User';
import AdminRoutes from './Admin';

function AppRoute() {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminRoutes />} />

      <Route path="/*" element={<UserRoutes />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoute;
