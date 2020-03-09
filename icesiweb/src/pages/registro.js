import React from 'react';


import UserForm from '../components/UserForm';
import Formulario from '../components/Formulario';
import NavBar from '../components/NavBar';
import Login from '../login';

import './App.css';
//
//import { UserForm } from '../../components/UserForm';
function Registro() {
  return (
  <div>
    <NavBar/>
      <div className="Registro-Fondo">
        <div className = "Columna-Registro">
          <div>
            <Login/>
            <h4 className = "Texto-Inicio">O crea una cuenta</h4>
            <Formulario/>
          </div>
        </div>
      </div>
  </div>
  );
}

export default Registro;