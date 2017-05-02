import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link className="header-button" to="/login">Login</Link>
    <Link className="header-button" to="/signup">Sign up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => {
  let time = new Date();
  let day;
  if(time.getHours() < 12){
    day = "Good Morning";
  } else{
    if(time.getHours() < 18){
      day = "Good Afternoon";
    } else {
      day = "Good Evening";
    }
  }

	return(
    <hgroup className="header-group">
      <h2 className="header-name">{day}, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
  	</hgroup>);
};

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
