import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import "./App.css";
import AppContainer from "./components/AppContainer";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevVal) => (prevVal === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AppContainer></AppContainer>
    </ThemeContext.Provider>
  );
}

export default App;
