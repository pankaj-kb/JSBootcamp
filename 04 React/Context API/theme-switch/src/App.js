import { ThemeProvider } from "./ThemeProvider";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Let's Switch</h1>
        <ThemeSwitcher />
        <button>Hello</button>
      </div>
    </ThemeProvider>
  );
}
