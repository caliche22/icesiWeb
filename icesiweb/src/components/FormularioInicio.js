import React, {Component} from 'react';

import DetalleInicio from './DetalleInicio';


export class FormularioInicio extends Component{
  state ={
    step:1,
    email: '',
    password: '',
    name: '',
    company: ''
  }


  nextStep = () =>{
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  previousStep = () =>{
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  handleChange = input => e =>{
    this.setState({ [input]: e.target.value });
  }

  render(){
    const {step} = this.state;
    const {email, password, name, company} = this.state;
    const values = {email, password, name, company};

    switch(step){
      case 1: 
        return(
          <DetalleInicio
            nextStep = {this.nextStep}
            handleChange = {this.handleChange}
            values = {values}
          />
        );

        case 2:
          return <h1>Form Personal Details</h1>
        case 3:
          return <h1>Confirm</h1>
        case 4:
          return <h1>Sucess</h1>
    }
  }
}


export default FormularioInicio;
