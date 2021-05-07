import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import GamesIcon from "@material-ui/icons/Games";
import SearchGames from "@material-ui/icons/Search";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "black",
    boxShadow: "5px, 1px, 0px, black",
    zIndex: 100,
  },
});

export default function MainNav() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Recents"
        style={{ color: "white" }}
        icon={
          <Link to="/">
            <RestoreIcon style={{ fontSize: "2.1rem", color: "white" }} />
          </Link>
        }
      />

      <BottomNavigationAction
        style={{ color: "white" }}
        label="Developers"
        icon={
          <Link to="/developers">
            <GamesIcon style={{ fontSize: "2.1rem", color: "white" }} />
          </Link>
        }
      />

      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search"
        icon={
          <Link to="#">
            <SearchGames style={{ fontSize: "2.1rem", color: "white" }} />
          </Link>
        }
      />
    </BottomNavigation>
  );
}
