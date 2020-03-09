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
          <div className = "Logo">
            <Button className = "Button-Logo"></Button>
          </div>
          <div className = "Toolbar-Header">
          <ul className="nav-links">
          <Link to="../registro">
          <li>Iniciar Sesion</li>
          </Link>
          <Link to="../login">
          <li>Registro</li>
          </Link>
        </ul>
          </div>
        </ToolBar>
      </AppBar>
    </div>
  );
} 

export default NavBar;