import React, { useState } from "react";

const ThemeContext = React.createContext();
const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((oldTheme) => (oldTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
