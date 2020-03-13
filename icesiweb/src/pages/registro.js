import React from 'react';

import NavBarSimple from '../components/navbarsimple';
import GoogleLogin from '../components/googleLogin';
import RegisterForm from '../components/regform';

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
        <NavBarSimple/>
        <div className="Registro-Fondo">
          <div className = "Columna-Registro">
            
            <h4 className = "Texto-Inicio">O crea una cuenta</h4>
            <RegisterForm/>
          </div>
        </div>
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