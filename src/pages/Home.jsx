import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Bine ai venit!
      </Typography>
      <Typography variant="body1">
        Aceasta este pagina de Home, vizibilă doar pentru utilizatorii autentificați.
      </Typography>
    </Box>
  );
};

export default Home;
