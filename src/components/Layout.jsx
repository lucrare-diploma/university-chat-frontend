import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';

const Layout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Actualizează starea de autentificare când componenta se montează
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Routes>
      {/* Ruta pentru calea rădăcină */}
      <Route
        path="/"
        element={<Navigate to={isAuthenticated ? "/home" : "/login"} />}
      />
      {/* Ruta pentru Login */}
      <Route
        path="/login"
        element={
          isAuthenticated 
            ? <Navigate to="/home" /> 
            : <Login onLogin={() => setIsAuthenticated(true)} />
        }
      />
      {/* Ruta pentru Home */}
      <Route
        path="/home"
        element={
          isAuthenticated 
            ? <Home onLogout={() => setIsAuthenticated(false)} /> 
            : <Navigate to="/login" />
        }
      />
      {/* Orice altă rută */}
      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
};

export default Layout;
