import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button
} from '@mui/material';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ... logica de login
  };

  return (
    // Box pe toată lățimea/înălțimea, centrat
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5' // sau altă culoare de fundal
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
}

export default Login;
