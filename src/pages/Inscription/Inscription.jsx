import classes from "./Inscription.module.css";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Button from "../../styledComponents/Button/Button";
import { useState } from "react";

const Inscription = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <form
      style={{ display: `${hidden ? "none" : "flex"}` }}
      className={classes.form_inscription}
      action=""
    >
      <CloseIcon
        onClick={() => {
          setHidden(!hidden);
        }}
        className={classes.close}
      />
      <h2>Créer votre compte</h2>

      <TextField id="outlined-basic" label="Pseudo" variant="outlined" />
      <TextField
        style={{ marginTop: "15px" }}
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
      <TextField
        style={{ marginTop: "15px", marginBottom: "15px" }}
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />

      <Button className={classes.buttonInscription} type="submit">
        {"S'inscrire"}
      </Button>
    </form>
  );
};

export default Inscription;
