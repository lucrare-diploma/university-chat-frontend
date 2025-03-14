import React, { useEffect, useState, useContext } from 'react';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, getUserDetails } from '../services/userSerivce';
import AuthContext from '../context/AuthContext';

const Account = () => {
  const { logout } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const currentUserResponse = await getCurrentUser();
        if (!currentUserResponse.success) {
          throw new Error('Eroare la obținerea current_user');
        }
        const userId = currentUserResponse.response.current_user.user_id;
        const userDetailsResponse = await getUserDetails(userId);
        if (!userDetailsResponse.success) {
          throw new Error('Eroare la obținerea detaliilor utilizatorului');
        }
        setUserDetails(userDetailsResponse.response);
      } catch (err) {
        setError(err.message || 'Eroare necunoscută');
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', p: 2 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Informații Cont
      </Typography>
      {userDetails && (
        <Box>
          <Typography variant="body1">
            <strong>Nume complet:</strong> {userDetails.full_name}
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong> {userDetails.email}
          </Typography>
          <Typography variant="body1">
            <strong>User ID:</strong> {userDetails.id}
          </Typography>
        </Box>
      )}
      <Button variant="contained" color="primary" onClick={handleLogout} sx={{ mt: 2 }}>
        Logout
      </Button>
    </Box>
  );
};

export default Account;
