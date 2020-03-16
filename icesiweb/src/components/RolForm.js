import React, {Component} from 'react';

import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export class RolForm extends Component{

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }


  render(){
    /* <RadioGroup aria-label="gender" name="gender1" > value={value} onChange={handleChange}*/
    const { values, handleChange } = this.props;
    return(
      <div style={{width: '700px'}}>
        <h1 className="Text-Center">¿Qué rol desempeñas?</h1>

          <div className = "Radio-Container">
            <RadioGroup aria-label="enterprise" name="enterprise1" > 
              <div className = "Radio-Button-Div">
                <FormControlLabel 
                  style={{width: '28%'}}
                  value="director" 
                  control={<Radio/>} 
                  onChange={handleChange('role')}
                  label="Director de Innovación"
                  labelPlacement="top"
                  defaultValue = {values.role} />

                <FormControlLabel 
                  style={{width: '28%'}}
                  value="facilitador" 
                  control={<Radio/>} 
                  onChange={handleChange('role')}
                  label="Facilitador"
                  labelPlacement="top" 
                  defaultValue = {values.role}/>
            
                <FormControlLabel 
                  style={{width: '28%'}}
                  value="colaborador" 
                  control={<Radio/>} 
                  onChange={handleChange('role')}
                  label="Colaborador"
                  labelPlacement="top" 
                  defaultValue = {values.role}/>
              </div> 
            </RadioGroup>
          </div>

        <div className = "Button-Form-Div">
          <div style={{width : '375px'}}>
            <Button className = "Button-Primary-Outlined-Small" 
            style ={{margin:'10px'}} 
            onClick={this.back}>Atrás</Button>

            <Button className = "Button-Primary-Form-Small Right" 
            style ={{margin:'10px'}} 
            onClick={this.continue}>Siguiente</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default RolForm