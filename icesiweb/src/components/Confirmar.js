import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import 'firebase/auth';
import firebaseConfig from '../config/firebaseConfig';

export class Confirmar extends Component{

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  return = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  submit(uid){
    const { values: {
      name, enterprise, role
    } } = this.props;
    console.log("ASDFG", uid, name, role);

    /*Escribir datos a la base de datos */
    /* ESTO ES LO QUE FALLA!!!!
    firebaseConfig.database().ref(`Users/${uid}`).set({
      nombre: name,
      compania: enterprise,
      rol: role
    });

    */
    
  }

  render(){
    const { values: {
      name, enterprise, role
    } } = this.props;
    var userId = firebaseConfig.auth().currentUser.uid;
    return(
      <div style={{width: '700px'}}>
        <React.Fragment>
            <h1 className="Text-Center">¡Confirma tus datos antes de empezar!</h1>
            <List>
              <ListItem 
                primary = "Nombre:"
                secondary = {name}/>
              <ListItem 
                primary = "Empresa:"
                secondary = {enterprise}/>
              <ListItem 
                primary = "Rol:"
                secondary = {role}/>
            </List>
            <div className = "Button-Form-Div">
              <div style={{width : '375px'}}>
                <Button className = "Button-Primary-Outlined-Small" 
                style ={{margin:'10px'}} 
                onClick={this.return}>Atrás</Button>

                <Button className = "Button-Primary-Form-Small Right" 
                style ={{margin:'10px'}} 
                onClick={this.submit(userId)}>Confirmar</Button>
              </div>
            </div>
        </React.Fragment>
      </div>
    );
  }
}


export default Confirmar