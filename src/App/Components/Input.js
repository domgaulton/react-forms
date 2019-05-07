import React, { Component } from 'react';
import './input.css';

class Input extends Component {
   constructor(props) {
    super(props);
    this.state = {
    };    
  }

  handleChange = event => {
    let { id } = event.target;
    let valid = event.target.checkValidity();
    if (event.target.value.length === 0){
      this.updateState(id, false)
    } else {
      this.updateState(id, valid)
    }
    if (valid) this.updateStateLegacy(id);
  }

  updateState = (target, validity) => {
    let stateName = `${target}Valid`;
    this.setState({ [stateName]: validity });
  }

  updateStateLegacy = (target) => {
    let stateName = `${target}ValidLegacy`;
    this.setState({ [stateName]: true });
  } 

  testFunction(id){
    let stateName = `${id}Valid`;
    let stateNameLegacy = `${id}ValidLegacy`;
    
    let inputWrapperClass = 'input-field';
    if (this.state[stateNameLegacy] === true) {
      if (this.state[stateName] === true) {
        return `${inputWrapperClass} valid`
      } else {
        return `${inputWrapperClass} invalid`
      }
    }
    return `${inputWrapperClass}`
  }

  render(){
    const inputWrapperClass = 'input-field';

    return (
      <div className={`${inputWrapperClass} ${this.testFunction(this.props.id)}`}>
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
