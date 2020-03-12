import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return(
    <div className="NavBar">
      <AppBar position="static">
        <ToolBar>
          <Link to="./"> 
            <div className = "Logo">
              <Button className = "Button-Logo"></Button>
            </div>
          </Link>
          <div className = "Toolbar-Header">
            <ul className="nav-links">
              <Link to="./registro">
                <Button className = "Button-Primary-Outlined Button-Menu" variant="outlined" color="secondary">
                    Regístrate
                </Button>
              </Link>
              <Link to="./inicio">
                <Button className = "Button-Default Button-Menu" color="default">
                  Inicia Sesión
                </Button>
              </Link>
            </ul>
          </div>
        </ToolBar>
      </AppBar>
    </div>
  );
} 

export default NavBar;