// Footer.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        textAlign: 'center',
        backgroundColor: 'primary.main',
        color: 'white'
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} University Chat
      </Typography>
    </Box>
  );
}

export default Footer;
