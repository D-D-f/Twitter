import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const local = JSON.parse(localStorage.getItem("theme"));
  const [theme, setTheme] = useState(local === "null" ? false : local);

  const changeTheme = (value) => {
    setTheme(value);
    localStorage.setItem("theme", value);
  };

  return (
    <ThemeContext.Provider value={{ changeTheme, theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
