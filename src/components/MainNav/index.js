import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import GamesIcon from '@material-ui/icons/Games';
import SearchGames from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#2d313a',
    zIndex: 100,
  },
});

export default function MainNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) history.push("/");
    else if (value === 1) history.push("/games");
    else if (value === 2) history.push("/search");
  })

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
        style={{ color: "white" }} 
        label="Recents" 
        icon={<RestoreIcon />} />
      <BottomNavigationAction 
        style={{ color: "white" }}
        label="Consoles" 
        icon={<GamesIcon />} />
      <BottomNavigationAction 
        style={{ color: "white" }}
        label="Search Games" 
        icon={<SearchGames />} />  
      </BottomNavigation>
  );
}
