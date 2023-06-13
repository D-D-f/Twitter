import { useContext } from "react";
import Header from "../components/Header/Header";
import { ThemeContext } from "../Context/Theme/ThemeContext";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`container ${theme ? "dark" : "light"}`}>
      <Header />
      <main></main>
    </div>
  );
};

export default Content;
