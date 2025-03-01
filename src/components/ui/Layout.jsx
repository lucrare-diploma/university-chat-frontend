import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh', // ocupă tot ecranul
        width: '100%'  // ocupă toată lățimea
      }}
    >
      {/* Header-ul */}
      <Header />

      {/* Zona de conținut responsive */}
      <Container 
        component="main" 
        maxWidth="lg"  // ajustează breakpoint-ul după preferințe (xs, sm, md, lg, xl)
        sx={{ flexGrow: 1, mt: 2, mb: 2, width: '100%' }}
      >
        {children}
      </Container>

      {/* Footer-ul */}
      <Footer />
    </Box>
  );
};

export default Layout;
