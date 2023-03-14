import "./App.css";
import ThemeProvider from "./ThemeProvider";
import ThemeButton from "./ThemeButton";

const App = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <ThemeButton />
        <p>Hello, world!</p>
      </ThemeProvider>
    </div>
  );
};

export default App;
