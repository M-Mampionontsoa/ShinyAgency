import axios from "axios";
import { Navigate } from "react-router-dom";

const api = axios.create({
  baseURL: "https://mario.mg/",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// (Optionnel plus tard) Intercepteur réponse pour gérer 401 → logout auto
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      Navigate("/login"); // ou utilise useNavigate dans un hook
    }
    return Promise.reject(error);
  },
);

export default api;
