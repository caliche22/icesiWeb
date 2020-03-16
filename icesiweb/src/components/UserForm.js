import React, {Component} from 'react';

import Button from '@material-ui/core/Button'

export class UserForm extends Component{

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  return = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render(){
    const { values, handleChange } = this.props;
    return(
      <div>
        <h1 className="Text-Center">¡Hola! Déjanos conocerte</h1>
        <h4 className = "Texto-Blanco Text-Center" style={{marginBottom: '50px'}}>Cuéntanos sobre tí y tu trabajo.</h4>
        
        <div>
          <div className = "Form-Field-Text">Nombre</div>
          <input className = "Form-Field" 
           id="name" 
           onChange={handleChange ('name')} 
           defaultValue = {values.name}
           placeholder="¿Cómo te llamas?" 
           type="text"/>
        </div>

        <div>
          <div className = "Form-Field-Text">Compañía</div>
          <input className = "Form-Field"  
          id="enterprise" 
          onChange={handleChange ('enterprise')} 
          defaultValue = {values.enterprise }
          placeholder= "Nombre de la compañía" 
          type="text"/>  
        </div>

          <Button className = "Button-Primary-Outlined-Small" 
          style ={{margin:'10px'}} 
          onClick={this.back}>Cancelar</Button>

          <Button className = "Button-Primary-Form-Small Right" 
          style ={{margin:'10px'}} 
          onClick={this.continue}>Siguiente</Button>
      </div>
    );
  }
}


export default UserForm