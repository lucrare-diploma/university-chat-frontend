import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout'; // componenta care conține rutele (Login, Home, etc.)

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          display: 'grid',
          gridTemplateRows: 'auto 1fr auto',
          height: '100vh',   // ocupă toată înălțimea viewport-ului
          width: '100vw'     // ocupă toată lățimea ecranului
        }}
      >
        <Header />
        
        {/* Zona de conținut care se întinde */}
        <Box component="main" sx={{ overflowY: 'auto' }}>
          <Layout />
        </Box>

        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
