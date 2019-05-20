import React, { Component } from 'react';
import Input, { createKeyValueState } from './Components/Input';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitBtnDisabled: true,
    };
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

  handleFormChange(event){
    event.preventDefault();
    let fields = event.currentTarget.querySelectorAll('.input-field input[required]')

    for(var input of fields.values()) { 
      let validity = input.validity.valid;
      if (validity === false) {
        this.setState({ submitBtnDisabled: true})
        return
      } else {
        this.setState({ submitBtnDisabled : false})
      }
    }
  }

  render(){
    return (
      <form 
        onSubmit={this.handleSubmit} 
        onChange={(event) => this.handleFormChange(event)}
      >
        <Input 
          id="firstName"
          type="text" 
          label="First Name"
          placeholder="First Name"
          pattern="^[a-zA-Z]\w{3,14}$"
          value=""
          sendKeyValueState={this.createKeyValueState}
          feedback="Must be a first name"
          required={true}
        />
        <Input 
          id="lastName"
          type="text" 
          label="Last Name"
          placeholder="Last Name"
          pattern="^[a-zA-Z]\w{3,14}$"
          value=""
          sendKeyValueState={createKeyValueState}
          feedback="LAST NAME!"
        />
        <Input 
          id="password"
          type="password" 
          label="Password"
          placeholder="Password"
          pattern="^[a-zA-Z]\w{3,14}$"
          value=""
          sendKeyValueState={createKeyValueState}
          feedback="PASSWORD wrong"
          required={true}
        />
        <input 
          id="submit"
          type="submit"
          // disabled={true}
          disabled={this.state.submitBtnDisabled}
          value={this.state.submitBtnDisabled}
        />
      </form>
    )
  }
}

export default App;
