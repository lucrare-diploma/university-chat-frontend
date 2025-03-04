import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    onLogout();
    navigate('/login');
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Bine ai venit!
      </Typography>
      <Typography variant="body1">
        Aceasta este pagina de Home, vizibilă doar pentru utilizatorii autentificați.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleLogout} sx={{ mt: 2 }}>
        Logout
      </Button>
    </Box>
  );
};

export default Home;
