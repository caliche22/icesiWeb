import React from 'react';

import firebaseConfig from '../config/firebaseConfig';

import Button from '@material-ui/core/Button';

class LoginForm extends React.Component{
  
  login(){
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;
    firebaseConfig.auth().signInWithEmailAndPassword(email,password).then((u)=>{
    console.log("Inicio exitoso");
    })
    .catch((err)=>{
      console.log("El error "+ err.toString());
    })
  }

  render(){    
    return(
      <div style={{textAlign:'center'}}>
          <div>
            <div className = "Form-Field-Text">Correo</div>
              <input className = "Form-Field" id="email" placeholder="Correo" type="text"/>
            </div>

            <div>
              <div className = "Form-Field-Text" >Contraseña</div>
              <input className = "Form-Field" id="password" type = "password" placeholder="Contraseña"/>  
            </div>

            <Button className = "Button-Primary-Form Button-Blue" style ={{margin:'10px'}} onClick={this.login}>Iniciar Sesión</Button>    
      </div>
    );
  }
}

export default LoginForm;