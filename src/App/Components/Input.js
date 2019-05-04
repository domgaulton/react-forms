import React, { Component } from 'react';
import './input.css';

class Input extends Component {
   constructor(props) {
    super(props);
    this.state = {
      // textValid: false,
      // passwordValid: false,
    };    
  }

  // handleChange = event => {
  //   let { id } = event.target;
  //   let valid = event.target.checkValidity();
  //   // console.log(id, valid);
  //   event.target.value.length === 0 ? this.props.updateState(id, false) : this.props.updateState(id, valid);
  //   if (valid) this.props.updateStateLegacy(id);
  //   this.props.testfunction('test')
  // }

  handleChange = event => {
    let { id } = event.target;
    let valid = event.target.checkValidity();
    // console.log(id, valid);
    if (event.target.value.length === 0){
      this.updateState(id, false)
    } else {
      this.updateState(id, valid)
    }
    if (valid) this.updateStateLegacy(id);
    // this.createClassName(id);
  }

  updateState = (target, validity) => {
    // console.log(target, validity);
    let stateName = `${target}Valid`;
    // console.log(stateName);
    this.setState({ [stateName]: validity });
  }

  updateStateLegacy = (target) => {
    let stateName = `${target}ValidLegacy`;
    // console.log('legacy', stateName);
    this.setState({ [stateName]: true });
  } 

  // fakeClass = () => {
  //   return this.createClassName();
  // }

  // createClassName = (target) => {
  //   let stateName = `${target}Valid`;
  //   let stateNameLegacy = `${target}ValidLegacy`;
  //   console.log(this.state[stateName]);
  //   console.log(this.state[stateNameLegacy]);
  //   if (this.state[stateNameLegacy] === true) {
  //     console.log(this.state[stateName]);
  //     if (this.state[stateName] === true) {
  //       return 'valid'
  //     } else {
  //       return 'invalid';
  //     }
  //   }
  //   return '';
  // };

  render(){
    let stateName = `${this.props.id}Valid`;
    let stateNameLegacy = `${this.props.id}ValidLegacy`;
    let inputWrapperClass = 'input-field';
    if (this.state[stateNameLegacy] === true) {
      if (this.state[stateName] === true) {
        inputWrapperClass = 'input-field valid'
      } else {
        inputWrapperClass = 'input-field invalid';
      }
    }
    return(
      <div className={inputWrapperClass}>
        <label 
          htmlFor={this.props.id}
        >
          {this.props.label}
        </label>
        <input 
          id={this.props.id}
          type={this.props.type} 
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          pattern={this.props.pattern}
        />
      </div>
    )
  }
}

export default Input;
