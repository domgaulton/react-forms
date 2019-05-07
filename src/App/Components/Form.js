// import React, { Component } from 'react';

// class Form extends Component {
//   handSubmit = event => {
//     event.preventDefault();
//     let fields = event.currentTarget.querySelectorAll('.input-field input')
//     console.log(fields);

//     for(var input of fields.values()) { 
//       let { id, value } = input;
//       console.table(id, value); 
//     }
//   }
//   render(){
//     return(
//       <form onSubmit={this.handleSubmit}>

//       </form>
//     )
//   }
// }

// export default Form;

export const handleSubmit = event => {
  event.preventDefault();
  let fields = event.currentTarget.querySelectorAll('.input-field input')
  // console.log(fields);
  let fieldInputs = [];

  for(var input of fields.values()) { 
    let { id, value } = input;
    // console.table(id, value); 
    fieldInputs.push({id, value});
  }
  return fieldInputs;
}