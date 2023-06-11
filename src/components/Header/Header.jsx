import { FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";
import classes from "./Header.module.css";

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <header className={classes.header}>
      <h1>header</h1>
      <FormControlLabel
        control={
          <Switch
            checked={isChecked}
            onChange={handleSwitchChange}
            sx={{ m: 1 }}
          />
        }
        label={isChecked ? "Mode actif" : "Mode inactif"}
      />
    </header>
  );
};

export default Header;
