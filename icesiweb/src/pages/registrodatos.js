import React from 'react';

import NavBarSimple from '../components/NavBarSimple';
import StepForm from '../components/StepForm';


class RegistroDatos extends React.Component{
  render() {
    return (
      <div>
        <NavBarSimple/>
        <div className="RegDatos-Fondo">
          <div className = "Caja-Texto">
            <StepForm/>
          </div>
        </div>
      </div>
    );
  }

}

export default RegistroDatos;