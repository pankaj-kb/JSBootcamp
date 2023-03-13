// ThemeSwitcher.js
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import "./ThemeSwitcher.css";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggle = (event) => {
    toggleTheme();
  };

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="toggle"
        className="toggle-input"
        checked={theme === "dark"}
        onChange={handleToggle}
      />
      <label htmlFor="toggle" className="toggle-label">
        <span className="toggle-text">
          {theme === "light" ? "Light" : "Dark"} Mode
        </span>
      </label>
    </div>
  );
};
