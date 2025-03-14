import React, { useState } from 'react';
import { Box, IconButton, List, ListItem, ListItemIcon, ListItemText, Collapse, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ children }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex', height: '100%', backgroundColor: 'var(--background-color)' }}>
      {/* Meniul din stânga */}
      <Box
        sx={{
          width: open ? 240 : 60,
          transition: 'width 0.3s ease',
          borderRight: '1px solid #ddd',
          overflow: 'hidden',
          backgroundColor: 'var(--background-color)'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: open ? 'space-between' : 'center',
            p: 1,
          }}
        >
          {open && <Box component="span" sx={{ fontWeight: 'bold' }}>Meniu</Box>}
          <IconButton onClick={handleToggle}>
            {open ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
        <Divider />
        <List>
          <ListItem button onClick={() => navigate('/account')}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <ListItemText primary="Account" />
            </Collapse>
          </ListItem>
          {/* Alte elemente de meniu pot fi adăugate aici */}
        </List>
      </Box>

      {/* Zona de conținut principală */}
      <Box sx={{ flexGrow: 1, p: 2 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Dashboard;
