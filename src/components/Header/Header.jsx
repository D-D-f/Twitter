import { FormControlLabel, Switch } from "@mui/material";
import classes from "./Header.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeContext } from "../../Context/Theme/ThemeContext";
import { useContext } from "react";

const Header = () => {
  const { changeTheme, theme } = useContext(ThemeContext);

  const handleSwitchChange = () => {
    changeTheme(!theme);
  };

  return (
    <header className={classes.header}>
      <div>
        <TwitterIcon className={classes.iconTwitter} />
      </div>
      <div className={classes.theme}>
        <span>
          <LightModeIcon />
        </span>
        <FormControlLabel
          style={{
            marginLeft: "0",
            marginRight: "0",
          }}
          control={
            <Switch
              checked={theme}
              onChange={handleSwitchChange}
              sx={{ m: 1 }}
            />
          }
        />
        <span>
          <DarkModeIcon />
        </span>
      </div>
    </header>
  );
};

export default Header;
