import Button from "../../styledComponents/Button/Button";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ListAltIcon from "@mui/icons-material/ListAlt";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.ul_nav}>
        <li>
          <HomeIcon className={classes.icon} />
          Accueil
        </li>
        <li>
          <SearchIcon className={classes.icon} />
          Explorer
        </li>
        <li>
          <NotificationsIcon className={classes.icon} />
          Notifications
        </li>
        <li>
          <MessageIcon className={classes.icon} />
          Messages
        </li>
        <li>
          <ListAltIcon className={classes.icon} />
          Listes
        </li>
        <li>
          <TurnedInNotIcon className={classes.icon} />
          Signets
        </li>
        <li>
          <PersonOutlineIcon className={classes.icon} />
          Profil
        </li>

        <Button className={classes.btn_nav}>Tweeter</Button>
      </ul>
    </nav>
  );
};

export default Navigation;
