import React from 'react';
import Button from '@material-ui/core/Button'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavBar from './components/navbar';

import Registro from './pages/registro';
import Inicio from './pages/inicio';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component = {Home}/>
          <Route path = "/registro" exact component = {Registro}/>
          <Route path = "/inicio" exact component = {Inicio}/>
        </Switch>
      </div>
    </Router>
  );

  /*return (
    <div className="App">
      <Registro/>
    </div>
  );*/
}

const Home = () => (
  <div>
    <NavBar/>
      <div className="App">
        <div>
          <h1 className="Text-Left">El espacio de trabajo para administrar 
              tu sistema de innovación</h1>
          <h3 className="Text-Left">Fácil, rápido y confiable</h3>
        </div>
        <Button className = "Button-Primary" variant="contained" color="primary" size="large">
          Ingresar
        </Button>
      </div>
  </div>
  );

export default App;
