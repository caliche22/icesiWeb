import React from 'react';
import NavBar from '../../components/NavBar';
import Button from '@material-ui/core/Button'
import Login from '../../login';
import './App.css';
//
//import { UserForm } from '../../components/UserForm';
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="App"> 
        <div>
          <h1 className="Text-Left">El espacio de trabajo para administrar 
            tu sistema de innovación</h1>
          <h3 className="Text-Left">Fácil, rápido y confiable</h3>
        </div>
          <Button className = "Button-Primary" variant="contained" color="primary" size="large">
            Prueba gratis
          </Button>
      </div>
    </div>
  );
}

export default App;
