import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const getCurrentUser = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/current_user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // Răspunsul va fi de forma:
  // { success: true, code: 200, response: { current_user: { user_id, role, exp } }, detail: null }
  return response.data;
};

export const getUserDetails = async (userId) => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // Răspunsul va fi de forma:
  // { success: true, code: 200, response: { current_user: { id, full_name, email, ... } }, detail: null }
  return response.data;
};

export const getUsers = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // Presupunem că răspunsul conține un array de useri sub formă de:
  // [
  //   { id: '123', full_name: 'John Doe', email: 'john@example.com' },
  //   ...
  // ]
  return response.data.response;
};
