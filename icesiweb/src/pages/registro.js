import React from 'react';

import NavBarSimple from '../components/NavBarSimple';
import RegisterForm from '../components/RegisterForm';
import GoogleLogin from '../components/GoogleLogin';

import RegistroDatos from './registrodatos';

import firebaseConfig from '../config/firebaseConfig.js';

import '../App.css';


class Registro extends React.Component{

  constructor(props){
    super(props);
        
    this.state = {
      user: null, 
    }

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    firebaseConfig.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user});
      } else {
        this.setState({user: null});
        }
      });
  }

  render() {
    /* Pagina de registro, toca cambiar esto luego */
    return(
      <div>
        {this.state.user ? 
        (<RegistroDatos/>) : (
          <div>
            <NavBarSimple/>
            <div className="Registro-Fondo">
              <div className = "Columna-Registro">
              <div>
                  <GoogleLogin/>
                  <h4 className = "Texto-Inicio">O regístrate con tu correo</h4>
                  <RegisterForm/>
                </div>
              </div>
            </div>
          </div>)
        }
      </div>
    );
    /* toca modificar esto para que vaya a pagina de registro o pagina inicio
    return (
      <div className="App">
        { this.state.user ? ( <Home/> ) : ( <Reg/> ) }
      </div>
    ); */
  }
}

export default Registro;