import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import './style.css'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  list: {
    width: 300,
    textTransform: "uppercase"
  },
  root:{
    fontWeight: 'bold',
  },
  transparent:{
    boxShadow: '0px 0px 0px 0px',
    background: "transparent"
  },
  white:{
    boxShadow: '0px 0px 0px 0px',
    background: "#fff"
  },
  button: {
    padding: 15,
    '&:hover':{
      background: "#ec407a",
      color: "#fff"
    }
  },
  paperAnchorLeft:{
    opacity: '0.8',
    boxShadow: '0px 0px 0px 0px',
  },
  sizemenu: {
    height: 70,
  },
});

export default function Menu() {
  const classes = useStyles();
  const [color, setColor] = React.useState('handleChange');
  const [state, setState] = React.useState({
    left: false,
    
  });



   if(document.documentElement.scrollTop > 430)
    {
    document.getElementById('resolucao').className = 'dois';
    }


  
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
     
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <div className="logo" align="center">
          <div className="logo-nome">
            JJ Studio
          </div>
          <div className="logo-sub">
						MAKE UP
					</div>
        </div>
        {['Cursos', 'Sobre mim', 'Serviços', 'Contato'].map((text, index) => (
          <ListItem divider button key={text} classes={{
            button: classes.button 
          }} component="a" href="#about">
            <ListItemText primary={text}  />
          </ListItem>
        ))}
      </List>
     
    </div>
  );

  
  

  return (


    <div className="menu_cll">
      <AppBar  id="resolucao" color="default" position="fixed" classes={{
        colorDefault: classes.transparent
      }}>
        <Toolbar className={classes.sizemenu}>
            <IconButton edge="start" onClick={toggleDrawer('left', true)} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          
            <div className="logo-500">
              <div className="logo-nome">
                JJ Studio
              </div>
              <div className="logo-sub">
                MAKE UP
              </div>
            </div>

            <Drawer open={state.left} 
            classes={{ paperAnchorLeft: classes.paperAnchorLeft}} 
            anchor="left" 
            onClose={toggleDrawer('left', false)} >
              {sideList('left')}
            </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}
