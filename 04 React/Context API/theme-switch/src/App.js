import "./App.css";
import { ThemeProvider } from "./ThemeProvider";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

export default function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider>
      <div className={theme}>
        <h1>Let's Switch</h1>
        <ThemeSwitcher />
        <p>
          The Current Theme is <span>{theme}</span>
        </p>
      </div>
    </ThemeProvider>
  );
}
