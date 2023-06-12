import Button from "../../styledComponents/Button/Button";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ListAltIcon from "@mui/icons-material/ListAlt";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import classes from "./Navigation.module.css";
import { ThemeContext } from "../../Context/Theme/ThemeContext";
import { useContext } from "react";

const Navigation = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={classes.nav}>
      <ul className={classes.ul_nav}>
        <li className={`${theme ? classes.li_dark : classes.li_light}`}>
          <HomeIcon className={classes.icon} />
          Accueil
        </li>
        <li className={`${theme ? classes.li_dark : classes.li_light}`}>
          <SearchIcon className={classes.icon} />
          Explorer
        </li>
        <li className={`${theme ? classes.li_dark : classes.li_light}`}>
          <NotificationsIcon className={classes.icon} />
          Notifications
        </li>
        <li className={`${theme ? classes.li_dark : classes.li_light}`}>
          <MessageIcon className={classes.icon} />
          Messages
        </li>
        <li className={`${theme ? classes.li_dark : classes.li_light}`}>
          <ListAltIcon className={classes.icon} />
          Listes
        </li>
        <li className={`${theme ? classes.li_dark : classes.li_light}`}>
          <TurnedInNotIcon className={classes.icon} />
          Signets
        </li>
        <li className={`${theme ? classes.li_dark : classes.li_light}`}>
          <PersonOutlineIcon className={classes.icon} />
          Profil
        </li>

        <Button className={classes.btn_nav}>Tweeter</Button>
      </ul>

      <div className={classes.account}>
        <img src="" alt="" />
        <span>Capitao</span>
        <span>@sou_portista</span>
      </div>
    </nav>
  );
};

export default Navigation;
