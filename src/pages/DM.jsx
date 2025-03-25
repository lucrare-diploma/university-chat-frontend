// src/pages/DM.jsx
import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  List,
  ListItem,
  ListItemText,
  Typography,
  CircularProgress,
} from "@mui/material";
import { getUsers } from "../services/userSerivce";

const DM = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        // Dacă API-ul returnează un obiect cu cheia 'response' ce conține array-ul,
        // adaptează: setUsers(Array.isArray(data.response) ? data.response : []);
        setUsers(data);
      } catch (err) {
        setError(err.message || "Eroare la obținerea userilor");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      user.id.toLowerCase().includes(lowerSearch) ||
      user.full_name.toLowerCase().includes(lowerSearch) ||
      user.email.toLowerCase().includes(lowerSearch)
    );
  });

  if (loading) {
    return (
      <Box sx={{ p: 2, textAlign: "center" }}>
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
    <Box>
      {/* Zona fixă: Titlu + Bara de căutare */}
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Direct Messages
        </Typography>
        <TextField
          label="Caută utilizatori (ID, nume, email)"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      {/* Zona scrollabilă: Listă */}
      <Box sx={{ overflowY: "auto" }}>
        <List>
          {filteredUsers.map((user) => (
            <ListItem key={user.id} button>
              <ListItemText
                primary={user.full_name} // Titlu (nume complet)
                secondary={user.email}    // Subtitlu (email)
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default DM;
