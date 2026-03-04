import { createContext, useState, useContext } from "react";
import GlobalStyle from "../../utils/style/globalStyle";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <GlobalStyle theme={theme} />
      {children}
    </ThemeContext.Provider>
  );
}

export function useThem() {
  const them = useContext(ThemeContext);

  return them;
}
