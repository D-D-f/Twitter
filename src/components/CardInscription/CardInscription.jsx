import classes from "./CardInscription.module.css";
import ButtonSuggestion from "../../styledComponents/Button/ButtonSuggestion";

const CardInscription = () => {
  return (
    <div className={classes.card}>
      <h2>Nouveau sur Twitter ?</h2>
      <p className={classes.p}>
        Inscrivez-vous maintenant pour obtenir des suggestions personnalisée !
      </p>
      <ButtonSuggestion>Inscription via Google</ButtonSuggestion>
      <ButtonSuggestion>{"Voir l'onglet Inscription"}</ButtonSuggestion>
      <p className={classes.p}>
        {
          "En vous inscrivant, vous acceptez les conditions d'utilisation et la politique de confidentialité, y compris l'utilisation des cookies."
        }
      </p>
    </div>
  );
};

export default CardInscription;
