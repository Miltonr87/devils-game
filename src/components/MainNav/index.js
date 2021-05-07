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
    backgroundColor: 'black',
    boxShadow: '0px, 1px, 5px, black',
    zIndex: 100,
  },
});

export default function MainNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) {
      history.push("/")
    } else {
      history.push("/developers")
    }  
  });

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
        icon={<RestoreIcon style={{ fontSize: "2.1rem" }}  />} />
      <BottomNavigationAction 
        style={{ color: "white" }}
        label="Developers" 
        icon={<GamesIcon style={{ fontSize: "2.1rem" }}  />} /> 
      <BottomNavigationAction 
        style={{ color: "white" }}
        label="Search Games" 
        icon={<SearchGames style={{ fontSize: "2.1rem" }} />} />   
      </BottomNavigation>
  );
}
