/*
For the Username and Email need Async Promise checkers in order to determine if
username and email are already in use.
*/

export function registrationValidation(values){

  const errors = { };

  /*Username error checks*/
  if (!values.username){
    errors.username = "Username is required";
  }
  else if(values.username.length < 5 || values.username.length > 32){
    errors.username = "Username can only be between 5 and 32 characters long";
  }

  /*Email error checks*/
  if(!values.email){
    errors.email = "Email is required";
  }
  else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = "Invalid email address";
  }

  /*Password check*/
  if(!values.password){
    
  }

  return errors;
}
