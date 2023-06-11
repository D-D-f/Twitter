import { FormControlLabel, Switch } from "@mui/material";
import classes from "./Header.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
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
      <div>
        <FormControlLabel
          control={
            <Switch
              checked={theme}
              onChange={handleSwitchChange}
              sx={{ m: 1 }}
            />
          }
        />
      </div>
    </header>
  );
};

export default Header;
