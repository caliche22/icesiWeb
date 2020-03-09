import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router';

const NavBar = () => {
  return(
    <div className="NavBar">
      <AppBar position="static">
        <ToolBar>
          <div className = "Logo">
            <Button className = "Button-Logo"></Button>
          </div>
          <div className = "Toolbar-Header">
            <Button className = "Button-Primary-Outlined Button-Menu" variant="outlined" color="secondary">
              Regístrate
            </Button>
            <Button className = "Button-Default Button-Menu" color="default">Inicia Sesión</Button>
          </div>
        </ToolBar>
      </AppBar>
    </div>
  );
} 

export default NavBar;