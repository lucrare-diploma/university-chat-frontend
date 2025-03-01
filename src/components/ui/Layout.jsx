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
        minHeight: '100vh',
        width: '100%'
      }}
    >
      <Header />

      <Container 
        component="main" 
        maxWidth="lg"
        sx={{ flexGrow: 1, mt: 2, mb: 2, width: '100%' }}
      >
        {children}
      </Container>

      <Footer />
    </Box>
  );
};

export default Layout;
