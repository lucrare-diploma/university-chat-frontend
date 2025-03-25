// src/components/Layout.jsx
import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Account from '../pages/Account';
import DM from '../pages/DM';
import Dashboard from './Dashboard';
import AuthContext from '../context/AuthContext';

const Layout = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={isAuthenticated ? '/home' : '/login'} />} />
      <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
      <Route
        path="/home"
        element={
          isAuthenticated ? (
            <Dashboard>
              <Home />
            </Dashboard>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/account"
        element={
          isAuthenticated ? (
            <Dashboard>
              <Account />
            </Dashboard>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/dm"
        element={
          isAuthenticated ? (
            <Dashboard>
              <DM />
            </Dashboard>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Layout;
