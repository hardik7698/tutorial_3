import logo from './logo.svg';
import './App.css';
import Registration from './Components/Registration';
import Profile from './Components/Profile';
import React,{useState} from 'react';

function App() {
  const [userFirstName,setUserFirstName]=useState("");
  const [userLastName,setUserLastName]=useState("");
  const [userEmail,setUserEmail]=useState("");
  const [userPassword,setUserPassword]=useState("");
  const [userConfirmPassword,setUserConfirmPassword]=useState("");
  const [showProfile,setShowProfile]=useState(false);
  return (
    <div className="App">
      
      
      {showProfile ?  (<Profile userFirstName={userFirstName} userEmail={userEmail} userLastName={userLastName} setUserEmail={setUserEmail} setShowProfile ={setShowProfile} ></Profile> ) 
      : ( <Registration userFirstName={userFirstName} userEmail={userEmail} userPassword={userPassword} userConfirmPassword={userConfirmPassword} setUserPassword={setUserPassword}  setUserConfirmPassword={setUserConfirmPassword} setUserLastName={setUserLastName} setUserEmail={setUserEmail} userLastName={userLastName} setShowProfile ={setShowProfile} setUserFirstName={setUserFirstName}></Registration>)}
     
     
    </div>
  );
}

export default App;
