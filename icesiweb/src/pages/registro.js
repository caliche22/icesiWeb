import React from 'react';
import Formulario from '../components/FormularioRegistro';
import NavBarSimple from '../components/NavBarSimple';
import Login from '../login';

import '../App.css';
//
//import { UserForm } from '../../components/UserForm';
function Registro() {
  return (
  <div>
    <NavBarSimple/>
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