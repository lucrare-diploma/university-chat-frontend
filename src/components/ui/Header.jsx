import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import logo from '../../assets/images/sigla_usv.png'; // asigură-te că calea e corectă

const Header = () => {
  return (
    <AppBar position="static" sx={{ width: '100%' }}>
      <Toolbar>
        {/* Box centrat pentru siglă */}
        <Box 
          sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}
        >
          <img src={logo} alt="Logo" style={{ height: 50 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
