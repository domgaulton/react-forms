import React, { Component } from 'react';
import Input, { createKeyValueState } from './Components/Input';
// import { handleSubmit } from './Components/Form.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };    
  }

  componentDidUpdate(prevState, prevProps) {
    console.log(prevState, prevProps)
  }

  handleSubmit(event){
    event.preventDefault();
    let fields = event.currentTarget.querySelectorAll('.input-field input')
    console.log(fields);

    for(var input of fields.values()) { 
      let { id, value } = input;
      console.table(id, value); 
    }
  }

  createKeyValueState = (field, value) => {
    this.setState({[field]: value });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <Input 
          id="firstName"
          type="text" 
          label="First Name"
          placeholder="First Name"
          pattern="^[a-zA-Z]\w{3,14}$"
          value=""
          sendKeyValueState={this.createKeyValueState}
        />
        <Input 
          id="lastName"
          type="text" 
          label="Last Name"
          placeholder="Last Name"
          pattern="^[a-zA-Z]\w{3,14}$"
          value=""
          sendKeyValueState={createKeyValueState}
        />
        <Input 
          id="password"
          type="password" 
          label="Password"
          placeholder="Password Name"
          pattern="^[a-zA-Z]\w{3,14}$"
          value=""
          sendKeyValueState={createKeyValueState}
        />
        <input 
          id="submit"
          type="submit"
        />
      </form>
    )
  }
}

export default App;
