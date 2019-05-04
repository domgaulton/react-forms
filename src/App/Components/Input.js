import React, { Component } from 'react';
import './input.css';

class Input extends Component {

  handleValidState = event => {
    let { id } = event.target;
    let valid = event.target.checkValidity();
    // console.log(id, valid);
    event.target.value.length === 0 ? this.props.updateState(id, false) : this.props.updateState(id, valid);
    if (valid) this.props.updateStateLegacy(id);
  }

  render(){
    return(
      <input 
        id={this.props.id}
        type={this.props.type} 
        placeholder={this.props.placeholder}
        onChange={this.handleValidState}
        pattern={this.props.pattern}
      />
    )
  }
}

export default Input;
