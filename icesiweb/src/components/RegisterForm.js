import React from 'react';

import firebaseConfig from '../config/firebaseConfig';

import Button from '@material-ui/core/Button';

class RegisterForm extends React.Component{    
  signUp(){   
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;
    firebaseConfig.auth().createUserWithEmailAndPassword(email,password).then((u)=>{
      console.log("Creacion exitoso", email, password);
    })
    .catch((err)=>{
      console.log("El error "+ err.toString());
    })
  }

  render(){    
    return(
      <div style={{textAlign:'center'}}>
        <div>
          <div>
            <div className = "Form-Field-Text">Correo</div>
              <input className = "Form-Field" id="email" placeholder="Correo" type="text"/>
            </div>
            <div>
              <div className = "Form-Field-Text">Contraseña</div>
              <input className = "Form-Field"  id="password" placeholder= "Contraseña" type="text"/>  
            </div>
          <Button className = "Button-Primary-Form" style ={{margin:'10px'}} onClick={this.signUp}>Crear Cuenta</Button>
        </div>
      </div>
    );
  }
}

export default RegisterForm;