import React, {Component} from 'react';
import Formulario from '../components/FormularioRegistro';
import NavBarSimple from '../components/NavBarSimple';
import Login from '../login';
import Firebase from '../firebase';

class Registro extends Component{

  constructor(props){
    super(props);
    this.state={
      user:null,
    }
    this.authListener=this.authListener.bind(this);

  }


  ComponentDiMount(){
    this.authListener();
  }


  authListener(){
    Firebase.auth().onAuthStateChanged((user)=>{
      if (user){
        this.setState({user});
      }else{
        this.setState({user:null });
      }
    })
  }

  render(){
  return (
  <div>
    <NavBarSimple/>
      <div className="Registro-Fondo">
        <div className = "Columna-Registro">
          <div>
            <Login/>
            <h4 className = "Texto-Inicio">O crea una cuenta</h4>
            <div>
           <Formulario/>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}
}

export default Registro;