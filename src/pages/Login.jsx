import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import { login as loginService } from '../services/authService';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginService(email, password);
      onLogin(); // Actualizează starea de autentificare
      navigate('/home');
    } catch (error) {
      console.error(error);
      alert('Login eșuat. Verifică datele introduse.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5'
      }}
    >
      <Card sx={{ maxWidth: 400, width: '90%', mx: 'auto' }}>
        <CardContent>
          <Typography variant="h5" textAlign="center" mb={2}>
            Autentificare
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              sx={{ mb: 2 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Parola"
              type="password"
              variant="outlined"
              fullWidth
              required
              sx={{ mb: 2 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" fullWidth>
              LOGIN
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
