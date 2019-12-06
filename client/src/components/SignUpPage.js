import React from "react";
import logo from "../logo.svg";
import "./App.css";
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div className="App">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>doctor's meetup</h3>
        <h4>Sign Up to continue</h4>
        <h5>Already a user ? <Link to='/signin'> SignIn</Link></h5>
      </div>
      <form>
        <input type="text" className="input" placeholder="username" />
        <button>
            <Link to='/home'>Create User</Link>            
        </button>      
      </form>
      <div>
        By continuing you agree to <a href="/">Terms & Conditions</a>
      </div>
    </div>
  );
};

export default SignUpPage;
