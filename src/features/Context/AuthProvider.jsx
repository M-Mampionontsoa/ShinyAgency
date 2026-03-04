import { createContext, useState, useContext } from "react";
const userContext = createContext();
export default function AuthProvider({ children }) {
  const [userLoged, setUserLoged] = useState(null);

  const login = (token) => {
    setUserLoged(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUserLoged(null);
    localStorage.removeItem("token");
  };

  const value = {
    userLoged,
    login,
    logout,
    isLoged: !!userLoged || !!localStorage.getItem("token"),
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}
export const useAuth = () => {
  const context = useContext(userContext);

  return (
    context || {
      userLoged: null,
      login: () => {},
      logout: () => {},
      isLoged: false,
    }
  );
};
