import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <ToolBar>
                    <Typography variant="title" color="inherit"> 
                        React & Material Sample Application
                    </Typography>
                    <Button Inicia Sesión></Button>
                    <Button Registrate></Button>
                </ToolBar>
            </AppBar>
        </div>
    );
} 

export default NavBar;