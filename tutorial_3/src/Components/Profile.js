import React from 'react';

function Profile(props) {
  return (<div>
    <div><h1>Profile</h1></div>
    <div><p>User First Name : {props.userFirstName}</p></div>
    <div><p>User Last Name" : {props.userLastName}</p></div>
    <div><p>User Email  : {props.userEmail}</p></div>
    </div>)
}

export default Profile;
