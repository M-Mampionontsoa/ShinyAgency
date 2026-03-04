import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, userContext } from "../features/Context/AuthProvider";
import api from "../features/Api/axioApi";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/login", {
        username,
        password,
      });

      if (response.data.token) {
        try {
          login(response.data.token);
          navigate("/");
        } catch (loginError) {
          setError("Erreur lors du stockage du token");
        }
      }
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "Erreur de connexion. Vérifie tes identifiants.",
      );
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Connexion</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="texte"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          />
        </div>

        <div>
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          />
        </div>

        <button type="submit" style={{ padding: "10px 20px" }}>
          Se connecter
        </button>
      </form>
    </div>
  );
}
