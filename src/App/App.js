import React, { Component } from 'react';
import Input from './Components/Input';
// import { handleSubmit } from './Components/Form.js';

class App extends Component {

  handleSubmit(event){
    event.preventDefault();
    let fields = event.currentTarget.querySelectorAll('.input-field input')
    console.log(fields);

    for(var input of fields.values()) { 
      let { id, value } = input;
      console.table(id, value); 
    }
  }

  // anotherFunction(event){
  //   event.preventDefault();
  //   console.log(handleSubmit())
  // }

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
        />
        <Input 
          id="lastName"
          type="text" 
          label="Last Name"
          placeholder="Last Name"
          pattern="^[a-zA-Z]\w{3,14}$"
          value=""
        />
        <Input 
          id="password"
          type="password" 
          label="Password"
          placeholder="Password Name"
          pattern="^[a-zA-Z]\w{3,14}$"
          value=""
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
