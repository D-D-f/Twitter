import "./Inscription.scss";

const Inscription = () => {
  return (
    <form action="">
      <p>
        <label className="label_inscription" htmlFor="nameUser">
          Pseudo
        </label>
        <input className="input_inscription" type="text" name="nameUser" />
      </p>
      <p>
        <label className="label_inscription" htmlFor="email">
          Email
        </label>
        <input className="input_inscription" type="text" name="email" />
      </p>
      <p>
        <label className="label_inscription" htmlFor="password">
          Mot de passe
        </label>
        <input className="input_inscription" type="password" name="password" />
      </p>
      <button className="button" type="submit">
        {"S'inscrire"}
      </button>
    </form>
  );
};

export default Inscription;
