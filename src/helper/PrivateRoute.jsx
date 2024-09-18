import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = sessionStorage.getItem('token'); // Get token from sessionStorage

  // Render the children (the component passed inside PrivateRoute)
  return token ? children : <Navigate to="/submit-grievance" />;
};

export default PrivateRoute;
