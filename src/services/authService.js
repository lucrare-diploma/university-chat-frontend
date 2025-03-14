import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const login = async (email, password) => {
  const body = { email, password };
  const response = await axios.post(`${API_URL}/auth/login`, body, {
    headers: { "Content-Type": "application/json" },
  });
  console.log("Login response:", response.data);
  
  if (response.data.response.access_token) {
    localStorage.setItem("token", response.data.response.access_token);
  } else {
    throw new Error("Login eșuat. Verifică datele introduse.");
  }
  return response.data;
};


export const logout = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};
