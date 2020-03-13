import React from 'react';
import firebaseConfig from '../config/firebaseConfig';

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
    
  signUp(){   
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;
    firebaseConfig.auth().createUserWithEmailAndPassword(email,password).then((u)=>{
      console.log("Creacion exitoso");
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
            <div>Email</div>
              <input id="email" placeholder="Enter Email.." type="text"/>
            </div>
            <div>
              <div>PassWord</div>
              <input id="password" placeholder="Enter Password.." type="text"/>  
            </div>
            <button style ={{margin:'10px'}} onClick={this.login}>Login</button>
        </div>
      </div>
    );
  }
}

export default LoginForm;