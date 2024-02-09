import React, { useContext } from "react";
import { LocalThemedBox } from "./LocalThemedBox";
import { ThemeContext } from "./ThemeProvider";

const Page = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);

  const themer = (className) => className + "-" + theme;
  const themerList = (classList) => classList.map(themer).join(" ");
  return (
    <div className={"container " + themer("bg")} id="themed-page">
      <p className={themer("txt")} id="themed-text-container">
        current theme: {theme}
        <br />
        lorem ipsum dolor iterit n stuff
      </p>

      <button
        onClick={toggleTheme}
        className={"btn " + themerList(["btn", "txt"])}
        id="themed-button"
      >
        Themed Button
      </button>
      <LocalThemedBox />
    </div>
  );
};

export { Page };
