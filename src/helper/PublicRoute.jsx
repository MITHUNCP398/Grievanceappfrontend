import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ element: Component }) => {
  const token = sessionStorage.getItem('token'); // Check for token

  return token ? <Navigate to="/dashboard" /> : <Component />; // Redirect if token exists
};

export default PublicRoute;
