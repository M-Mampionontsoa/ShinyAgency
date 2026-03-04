import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

export default function ProtectedRoute() {
  const { isLoged } = useAuth();

  // Si pas authentifié → on redirige vers login
  if (!isLoged) {
    return <Navigate to="/login" replace />;
  }

  // Si OK → on affiche la page (Outlet = les enfants)
  return <Outlet />;
}
