import React from 'react';
import FormularioInicio from '../components/FormularioInicio';
import NavBarSimple from '../components/NavBarSimple';
import Login from '../login';

import '../App.css';
//
//import { UserForm } from '../../components/UserForm';
function Inicio() {
  return (
  <div>
    <NavBarSimple/>
      <div className="Inicio-Fondo">
        <div className = "Columna-Inicio">
          <div>
            <Login/>
              <h4 className = "Texto-Inicio">O inicia sesión con tu usuario</h4>
            <FormularioInicio/>
          </div>
        </div>
      </div>
  </div>
  );

}

export default Inicio;