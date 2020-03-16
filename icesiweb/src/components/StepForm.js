import React, {Component} from 'react';

import UserForm from './UserForm';
import RolForm from './RolForm';
import Confirmar from './Confirmar';

export class StepForm extends Component{
  state = {
    step: 1,
    name: '',
    enterprise:  '',
    role: ''
  }

  //Proceder al siguiente paso
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  //Proceder al siguiente paso
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  //Manejo de estados
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  }

  render(){
    const { step } = this.state;
    const {name, enterprise, role} = this.state;
    const values = {name, enterprise, role};

    switch(step){
      case 1:
        return (
          <UserForm nextStep = {this.nextStep}
          handleChange = {this.handleChange}
          values = {values}/>
        );
      case 2:
        return (
          <RolForm nextStep={this.nextStep}
          prevStep = {this.prevStep}
          handleChange = {this.handleChange}
          values = { values }/>
        );
      case 3:
        return (
          <Confirmar nextStep={this.nextStep}
          prevStep = {this.prevStep}
          values = { values }/>
        )
    }
  }
}

export default StepForm