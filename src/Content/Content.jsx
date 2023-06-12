import { useContext } from "react";
import Header from "../components/Header/Header";
import { ThemeContext } from "../Context/Theme/ThemeContext";
import Navigation from "../components/Navigation/Navigation";
import Suggestion from "../components/Suggestion/Suggestion";
import Thread from "../components/Thread/Thread";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`container ${theme ? "dark" : "light"}`}>
      <Header />
      <main>
        <div style={{ height: "100%" }}>
          <Navigation />
        </div>
        <div>
          <Thread />
        </div>
        <aside>
          <Suggestion />
        </aside>
      </main>
    </div>
  );
};

export default Content;
