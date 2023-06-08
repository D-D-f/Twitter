import classes from "./Inscription.module.css";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Button from "../../styledComponents/Button/Button";
import { useForm } from "react-hook-form";

const Inscription = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classes.form_inscription}
    >
      <CloseIcon className={classes.close} />
      <h2>Créer votre compte</h2>

      <TextField
        id="outlined-basic"
        label="Pseudo"
        {...register("Pseudo")}
        variant="outlined"
      />
      <TextField
        style={{ marginTop: "15px" }}
        id="outlined-basic"
        label="Email"
        {...register("Email")}
        variant="outlined"
      />
      <TextField
        style={{ marginTop: "15px", marginBottom: "15px" }}
        id="outlined-basic"
        label="Password"
        {...register("Password")}
        variant="outlined"
      />

      <Button className={classes.buttonInscription} type="submit">
        {"S'inscrire"}
      </Button>
    </form>
  );
};

export default Inscription;
