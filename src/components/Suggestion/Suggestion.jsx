import classes from "./Suggestion.module.css";
import Tendency from "../Tendency/Tendency";
import Footer from "../Footer/Footer";

const Suggestion = () => {
  return (
    <div className={classes.suggestion}>
      <h1>Suggestion</h1>
      <Tendency />
      <Footer />
    </div>
  );
};

export default Suggestion;
