import axios from "axios";

// Folosim variabila de mediu definită în .env (dacă folosești Vite)
const API_URL = import.meta.env.VITE_BACKEND_URL;

// Funcția pentru login: trimite email și parolă către API
export const login = async (email, password) => {
  const body = { email, password };
  const response = await axios.post(`${API_URL}/auth/login`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.data.access_token) {
    localStorage.setItem("token", response.data.access_token);
  }
  return response.data;
};

// Funcție pentru logout: șterge token-ul
export const logout = () => {
  localStorage.removeItem("token");
};

// Funcție pentru verificarea autentificării
export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};
