import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';

const Layout = () => {
  // Funcție simplă de verificare a autentificării
  const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };

  return (
    <Routes>
      {/* Ruta pentru Login */}
      <Route
        path="/login"
        element={ isAuthenticated() ? <Navigate to="/home" /> : <Login /> }
      />
      {/* Ruta principală pentru Home */}
      <Route
        path="/home"
        element={ isAuthenticated() ? <Home /> : <Navigate to="/login" /> }
      />
      {/* Redirecționează orice altă rută către "/" */}
      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
};

export default Layout;
