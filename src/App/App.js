import React, { Component } from 'react';
import Input from './Components/Input'

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      // textValid: false,
      // passwordValid: false,
    };    
  }

  inputValidity = (target, validity) => {
    // console.log(target, validity);
    let stateName = `${target}Valid`;
    // console.log(stateName);
    this.setState({ [stateName]: validity });
  }

  inputValidityLegacy = (target) => {
    let stateName = `${target}ValidLegacy`;
    // console.log('legacy', stateName);
    this.setState({ [stateName]: true });
  } 

  getStateValidityClass = (target) => {
    let stateName = `${target}Valid`;
    let stateNameLegacy = `${target}ValidLegacy`;
    if (this.state[stateNameLegacy] === true) {
      console.log(this.state[stateName]);
      if (this.state[stateName] === true) {
        return 'valid'
      } else {
        return 'invalid';
      }
    }
    return '';
  };

  render(){
    return (
      <div>
        <div 
          className={this.getStateValidityClass('firstName')}
        >
          <Input 
            id="firstName"
            type="text" 
            placeholder="First Name"
            updateState={this.inputValidity}
            updateStateLegacy={this.inputValidityLegacy}
            pattern="^[a-zA-Z]\w{3,14}$"
          />
        </div>

        <div 
          className={this.getStateValidityClass('lastName')}
        >
          <Input 
            id="lastName"
            type="text" 
            placeholder="Last Name"
            updateState={this.inputValidity}
            updateStateLegacy={this.inputValidityLegacy}
            pattern="^[a-zA-Z]\w{3,14}$"
          />
        </div>
        
        <div 
          className={this.getStateValidityClass('password')}
        >
          <Input 
            id="password"
            type="password" 
            placeholder="Password"
            updateState={this.inputValidity}
            updateStateLegacy={this.inputValidityLegacy}
            pattern="^[a-zA-Z]\w{3,14}$"
          />
        </div>

        
      </div>
      
    )
  }
}

  

export default App;
