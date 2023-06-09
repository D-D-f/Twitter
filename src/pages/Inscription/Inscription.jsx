import classes from "./Inscription.module.css";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Button from "../../styledComponents/Button/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Inscription = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [hidden, setHidden] = useState(false);
  console.log(errors);
  return (
    <form
      style={{ display: `${hidden ? "none" : "flex"}` }}
      onSubmit={handleSubmit(onSubmit)}
      className={classes.form_inscription}
    >
      <CloseIcon
        onClick={() => {
          setHidden(!hidden);
        }}
        className={classes.close}
      />
      <h2>Créer votre compte</h2>

      <TextField
        style={{ marginBottom: "5px" }}
        label="Pseudo"
        {...register("Pseudo", {
          required: "Le champ pseudo est requis.",
          minLength: {
            value: 4,
            message: "Il faut un minimum de 4 caractères",
          },
        })}
        variant="outlined"
      />
      <span
        style={{
          marginBottom: "15px",
          color: "var(--colorError)",
          fontWeight: "bold",
        }}
      >
        {errors.Pseudo?.message}
      </span>
      <TextField
        style={{ marginBottom: "5px" }}
        label="Email"
        {...register("email", { required: "Le champ email est requis." })}
        type="email"
        autoComplete="username"
        variant="outlined"
      />
      <span
        style={{
          marginBottom: "15px",
          color: "var(--colorError)",
          fontWeight: "bold",
        }}
      >
        {errors.email?.message}
      </span>
      <TextField
        style={{ marginBottom: "5px" }}
        label="Password"
        {...register("password", {
          required: "Le champ password est requis.",
          minLength: {
            value: 4,
            message: "Il faut un minimum de 4 caractères",
          },
        })}
        type="password"
        autoComplete="current-password"
        variant="outlined"
      />
      <span
        style={{
          marginBottom: "15px",
          color: "var(--colorError)",
          fontWeight: "bold",
        }}
      >
        {errors.password?.message}
      </span>

      <Button className={classes.buttonInscription} type="submit">
        {"S'inscrire"}
      </Button>
    </form>
  );
};

export default Inscription;
