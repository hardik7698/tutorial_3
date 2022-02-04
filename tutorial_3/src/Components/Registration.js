import React from 'react';
import {useState} from 'react';


function Registration(props) {
  const userNameRegex= /^[a-zA-Z]+$/;
  const emailRegex=/.+@.+\.[A-Za-z]+$/;
  const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
  const [errorFirstNameMessage,setFirstNameErrorMessage] =useState("")
  const [errorLastNameMessage,setLastNameErrorMessage] =useState("")
  const [errorEmailMessage,setEmailErrorMessage] =useState("")
  const [errorPasswordMessage,setPasswordErrorMessage] =useState("")
  const [errorConfirmPasswordMessage,setConfirmPasswordMessage] =useState("")

  var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirmpassword");

  const handleFirstNameChange =(e) =>{
    if(!userNameRegex.test(e.target.value) && e.target.value){
      setFirstNameErrorMessage("Only alphabets are allowed")
    }
    else{
      setFirstNameErrorMessage("");
      props.setUserFirstName(e.target.value)
    }
     console.log(e.target.value)
     
  }
  const handleLasttNameChange =(e) =>{
    if(!userNameRegex.test(e.target.value) && e.target.value){
      setLastNameErrorMessage("Only alphabets are allowed")
    }
    else{
      setLastNameErrorMessage("");
      props.setUserLastName(e.target.value)
    }
     console.log(e.target.value)
     
  }

  const handleEmailChange =(e) =>{
    if(!emailRegex.test(e.target.value) && e.target.value){
      setEmailErrorMessage("Not Proper Email Format")
    }
    else{
      setEmailErrorMessage("");
      props.setUserEmail(e.target.value)
    }
     console.log(e.target.value)
     
  }

  const handlePasswordChange =(e) =>{
    if(!passwordRegex.test(e.target.value) && e.target.value){
      setPasswordErrorMessage("Password shoudld be of 8 or more characters,shoudl contain capital letter,small letter,one special character and one number!! ")
    }
    else{
      setPasswordErrorMessage("");
      props.setUserPassword(e.target.value)
    }
     console.log(e.target.value)
     
  }

  const handleConfirmPasswordChange =(e) =>{
    if(password.value != confirm_password.value) {
      setConfirmPasswordMessage("password doesnot match!")
    }
    else{
      setConfirmPasswordMessage("");
      props.setUserConfirmPassword(e.target.value)
    }
     console.log(e.target.value)
     
  }

  const handleSubmit =(e) =>{
    if (errorFirstNameMessage.length>0){
      alert(errorFirstNameMessage);
    }
    else{
      props.setShowProfile(true);
      alert("you have been registered successfully!!!" + props.userFirstName)
    }
  }
  return (<div>
    <h1>Registration</h1>
          <form>
          <div><label>First Name: </label>
          <input type="text" name="firstname" onChange={handleFirstNameChange}></input>
          {errorFirstNameMessage.length >0 ? <p style={{color:"red"}}>{errorFirstNameMessage}</p> : ""}
          </div>
          <br></br>
          <div>
          <label>Last Name: </label>
          <input type="text" name="lastname" onChange={handleLasttNameChange}></input>
          {errorLastNameMessage.length >0 ? <p style={{color:"red"}}>{errorLastNameMessage}</p> : ""}
          </div>
          <br></br>
          <div>
          <label>Email: </label>
          <input type="text" name="email" onChange={handleEmailChange}></input>
          {errorEmailMessage.length >0 ? <p style={{color:"red"}}>{errorEmailMessage}</p> : ""}
          </div>
          <br></br>
          <div>
          <label>Password: </label>
          <input type="password" id="password" name="password" onChange={handlePasswordChange}></input></div>
          {errorPasswordMessage.length >0 ? <p style={{color:"red"}}>{errorPasswordMessage}</p> : ""}
          <br></br>
          <div>
          <label>Confirm Password: </label>
          <input type="password" id="confirmpassword" name="confirmpassword" onChange={handleConfirmPasswordChange}></input></div>
          {errorConfirmPasswordMessage.length >0 ? <p style={{color:"red"}}>{errorConfirmPasswordMessage}</p> : ""}
          <br></br>
          <button type="submit" onClick={handleSubmit}>Submit</button>
          </form>
          </div>);
}

export default Registration;
