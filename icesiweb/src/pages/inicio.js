import React from 'react';

import NavBarSimple from '../components/navbarsimple';
import GoogleLogin from '../components/googleLogin';
import LoginForm from '../components/loginform';

import firebaseConfig from '../config/firebaseConfig.js';

import '../App.css';

class Inicio extends React.Component{

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
    return (
      <div>
        <NavBarSimple/>
        <div className="Inicio-Fondo">
          <div className = "Columna-Inicio">
            <div>
              <GoogleLogin/>
              <h4 className = "Texto-Inicio">O inicia sesión con tu usuario</h4>
              <LoginForm/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio;