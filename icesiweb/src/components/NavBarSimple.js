import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const NavBarSimple = () => {
  return(
    <div className="NavBar">
      <AppBar position="static">
        <ToolBar>
          <Link to="./"> 
          <div className = "Logo">
            <Button className = "Button-Logo"></Button>
          </div>
          </Link>
        </ToolBar>
      </AppBar>
    </div>
  );
} 

export default NavBarSimple;