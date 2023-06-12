import { useContext } from "react";
import Header from "../components/Header/Header";
import { ThemeContext } from "../Context/Theme/ThemeContext";
import Navigation from "../components/Navigation/Navigation";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`container ${theme ? "dark" : "light"}`}>
      <Header />
      <div style={{ height: "100%" }}>
        <Navigation />
      </div>
      <main></main>
    </div>
  );
};

export default Content;
