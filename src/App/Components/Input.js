import React, { Component } from 'react';
import './input.css';

class Input extends Component {
   constructor(props) {
    super(props);
    this.state = {
    };    
  }

  handleChange = event => {
    
    // this.updateState(id.target.id, event.target.value)
    this.props.sendKeyValueState(event.target.id, event.target.value);

    let { id } = event.target;
    let valid = event.target.checkValidity();
    // If the input is empty set dyanmic state as false
    if (event.target.value.length === 0){
      this.updateState(id, false)
    } else {
      this.updateState(id, valid)
    }
    // if input is ever valid set legacy state for future reference
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

  validtyClass(id){
    let stateName = `${id}Valid`;
    let stateNameLegacy = `${id}ValidLegacy`;

    if (this.state[stateNameLegacy] === true) {
      if (this.state[stateName] === true) {
        return "valid"
      } else {
        return "invalid"
      }
    }
    return;
  }

  render(){
    const inputWrapperClass = 'input-field';

    return (
      <div className={`${inputWrapperClass} ${this.validtyClass(this.props.id)}`}>
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
          required={this.props.required}
        />
        {(this.validtyClass(this.props.id) === 'invalid') ? <span className="input-feedback">{this.props.feedback}</span> : null}
      </div>
    )
  }
}

export default Input;

export const createKeyValueState = (field, value) => {
  console.log(field, value);
  // let stateName = `${field}Field`;
  // this.props.setState({[stateName]: `${value}` });
}