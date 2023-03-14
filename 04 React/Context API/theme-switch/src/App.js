import "./App.css";
import { ThemeProvider } from "./ThemeProvider";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

export default function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}
