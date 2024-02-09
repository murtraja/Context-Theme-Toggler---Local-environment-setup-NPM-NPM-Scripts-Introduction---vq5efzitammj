import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeProvider";

const LocalThemedBox = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);
  const [localTheme, setLocalTheme] = useState(theme);
  const localThemeC = localTheme === "light" ? "dark" : "light";
  const themer = (className) => className + "-" + localTheme;
  const themerList = (classList) => classList.map(themer).join(" ");

  const toggleLocalTheme = () => {
    setLocalTheme((oldTheme) => (oldTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => setLocalTheme(theme), [theme]);
  return (
    <div
      style={{ width: "200px", height: "200px", border: "2px solid green" }}
      id="local-themed-box"
      className={themer("bg")}
    >
      {/* Write code below this line */}
      <p id="local-themed-text-container" className={themer("txt")}>
        Hiiiii
      </p>
      <button
        onClick={toggleLocalTheme}
        className={"btn " + themerList(["btn", "txt"])}
        id="local-theme-toggler"
      >
        Toggle local theme to {localThemeC}
      </button>
    </div>
  );
};

export { LocalThemedBox };
