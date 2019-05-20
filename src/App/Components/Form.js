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

export const handleFormChange = event => {
  event.preventDefault();
  let fields = event.currentTarget.querySelectorAll('.input-field input[required]')

  for(var input of fields.values()) { 
    let validity = input.validity.valid;
    let submitBtnDisabled = true;
    if (validity === false) {
    } else {
      submitBtnDisabled = false;
      return false;
    }
    console.log('submit', submitBtnDisabled);

  }
}

// export const getValidity = () => {
//   let fields = document.querySelectorAll('.input-field input[required]')

//   for(var input of fields.values()) { 
//     let validity = input.validity.valid;
//     if (validity === false) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }