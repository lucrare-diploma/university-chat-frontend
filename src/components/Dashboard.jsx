// src/components/Dashboard.jsx
import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '240px 1fr',
        height: '100vh', // ocupă întreaga înălțime a ecranului
        overflow: 'hidden', // împiedică scroll global
      }}
    >
      {/* Coloana stângă: Meniul fix */}
      <Box
        sx={{
          backgroundColor: '#ffffff',
          borderRight: '1px solid #ddd',
          p: 2,
          overflow: 'hidden',
        }}
      >
        <List>
          <ListItem button onClick={() => navigate('/account')}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItem>
          <Divider sx={{ my: 1 }} />
          <ListItem button onClick={() => navigate('/dm')}>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="DM" />
          </ListItem>
          {/* Poți adăuga și alte elemente de meniu */}
        </List>
      </Box>

      {/* Coloana dreaptă: Zona de conținut scrollabilă */}
      <Box
        sx={{
          overflowY: 'auto',
          p: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Dashboard;
