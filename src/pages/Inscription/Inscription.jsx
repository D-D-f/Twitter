import classes from "./Inscription.module.css";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";

const Inscription = () => {
  return (
    <form className={classes.form_inscription} action="">
      <CloseIcon className={classes.close} />
      <h2>Créer votre compte</h2>

      <TextField id="outlined-basic" label="Pseudo" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
    </form>
  );
};

export default Inscription;
