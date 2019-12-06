import React from "react";
import logo from "../logo.svg";
import "./App.css";
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom';


const LoginPage = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked')
    if(e.handleSubmit) {
      return <Redirect to="/home" />;
    }
  }
  

  return (
    <div className="App App-login">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>doctor's meetup</h3>
      </div>
      <div>
        <h2>WELCOME</h2>
        <span>Sign in to continue</span>
      </div>
      <div className="body">
        <form onSubmit={e => handleSubmit(e)}>
          <input type="text" className="input" placeholder="username" />
          <button>
            <Link to='/home'>SignIn</Link>            
          </button>
        </form>
        <div>
          <Link to='/signup'>
            Sign Up
          </Link>
        </div>
      </div>
      
      <div>By continuing you agree to <a href="/">Terms & Conditions</a></div>
    </div>
  );
};

export default LoginPage;
