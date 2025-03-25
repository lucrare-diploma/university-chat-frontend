import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter basename="/university-chat-frontend">
      <Box
        sx={{
          display: 'grid',
          gridTemplateRows: 'auto 1fr auto',
          height: '100vh',
          width: '100vw'
        }}
      >
        <Header />
        <Box component="main" sx={{ 
          overflow: 'hidden'
        }}>
          <Layout />
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
