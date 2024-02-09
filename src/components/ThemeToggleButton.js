import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeToggleButton = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);

  const themer = (className) => className + "-" + theme;
  const themerList = (classList) => classList.map(themer).join(" ");

  return (
    <>
      <button
        onClick={toggleTheme}
        className={"btn " + themerList(["btn", "txt"])}
        id="global-theme-toggler"
      >
        Toggle global theme
      </button>
    </>
  );
};
export { ThemeToggleButton };
