import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
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
        label="Favorites" 
        icon={<FavoriteIcon />} />
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
