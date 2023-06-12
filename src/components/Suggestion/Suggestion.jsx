import classes from "./Suggestion.module.css";
import Tendency from "../Tendency/Tendency";
const Suggestion = () => {
  return (
    <div className={classes.suggestion}>
      <h1>Suggestion</h1>
      <Tendency />
    </div>
  );
};

export default Suggestion;
