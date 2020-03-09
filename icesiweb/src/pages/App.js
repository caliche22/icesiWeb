import React from 'react';
import Button from '@material-ui/core/Button'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Registro from './registro';

import './App.css';
//
//import { UserForm } from '../../components/UserForm';
function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Route path="/" component = {Home}/>
        <Route path = "/registro" component = {Registro}/>
      </div>
    </Router>
  );
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
