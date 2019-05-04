import React, { Component } from 'react';
import Input from './Components/Input'

class App extends Component {
  render(){
    return (
      <div>
        
        <Input 
          id="firstName"
          type="text" 
          label="First Name"
          placeholder="First Name"
          pattern="^[a-zA-Z]\w{3,14}$"
        />

        <Input 
          id="lastName"
          type="text" 
          label="Last Name"
          placeholder="Last Name"
          pattern="^[a-zA-Z]\w{3,14}$"
        />

        <Input 
          id="password"
          type="password" 
          label="Password"
          placeholder="Password Name"
          pattern="^[a-zA-Z]\w{3,14}$"
        />

        <Input 
          id="submit"
          type="submit" 
        />

      </div>
      
    )
  }
}

  

export default App;
