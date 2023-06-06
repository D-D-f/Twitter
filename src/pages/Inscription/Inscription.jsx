import classes from "./Inscription.module.css";

const Inscription = () => {
  return (
    <form className={classes.form_inscription} action="">
      <h2>Créer votre compte</h2>
      <p className={classes.p_inscription}>
        <label className={classes.label_inscription} htmlFor="nameUser">
          Pseudo
        </label>
        <input
          className={classes.input_inscription}
          type="text"
          name="nameUser"
        />
      </p>
      <p className={classes.p_inscription}>
        <label className={classes.label_inscription} htmlFor="email">
          Email
        </label>
        <input className={classes.input_inscription} type="text" name="email" />
      </p>
      <p className={classes.p_inscription}>
        <label className={classes.label_inscription} htmlFor="password">
          Mot de passe
        </label>
        <input
          className={classes.input_inscription}
          type="password"
          name="password"
        />
      </p>
      <button className="button" type="submit">
        {"S'inscrire"}
      </button>
    </form>
  );
};

export default Inscription;
