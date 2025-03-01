import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box 
      component="footer"
      sx={{ 
        p: 2, 
        backgroundColor: 'primary.main', 
        color: 'white', 
        textAlign: 'center',
        width: '100%'
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} University Chat. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
