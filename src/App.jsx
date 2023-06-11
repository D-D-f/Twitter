import "./App.css";
import Content from "./Content/Content";
import ThemeContextProvider from "./Context/Theme/ThemeContext";

const App = () => {
  return (
    <ThemeContextProvider>
      <Content />
    </ThemeContextProvider>
  );
};

export default App;
