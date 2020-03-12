import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

export class DetalleInicio extends Component{
  render(){
    return (
      <div>
        <div className = "Texto-Blanco">
          <TextField fullWidth ="true" color="secondary" required id="standard-required" label="Correo" />
        </div>
        <div className = "Texto-Blanco">
          <TextField fullWidth ="true" color="secondary" required id="standard-required" label="Clave" />
        </div>
        <Button className = "Button-Primary-Form Secundario"  variant="contained" color="primary" size="large">
          Iniciar Sesion
        </Button>
      </div>
    );
  };
}

export default DetalleInicio;