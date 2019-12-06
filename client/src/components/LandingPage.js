import React from "react";
import logo from "../logo.svg";
import "./App.css";
import { Link } from 'react-router-dom';


class LandingPage extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="headTitle">
          {" "}
          <span>&#60;</span> Doctors
        </div>
        <header className="App-body">
          <div className="body">
            <input
              type="text"
              className="input"
              placeholder="Search for doctors"
            />cd 
            <br />
            <br />
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            <h2 className="bodyTitle">search doctors</h2>
            <span>Search by directly clicking the doctors category below</span>
            <br />
            <span>Go ahead and book an appointment.</span>
          </div>
        </header>
        <div>
          <div className='flex'>
            <button className='cat'><Link to='/doctorlist'>All</Link></button>
            <button className='cat'><Link to='/doctorlist'>Dermatologists</Link></button>
            <button className='cat'><Link to='/doctorlist'>Endocrinologits</Link></button>
          </div>
          <br />
          <div className='flex'>
            <button className='cat'><Link to='/doctorlist'>Family Physician</Link></button>
            <button className='cat'><Link to='/doctorlist'>Vent Doctor</Link></button>
            <button className='cat'><Link to='/doctorlist'>Abecos</Link></button>
          </div>
        </div>
        <ul>
          <li>
            <i className="material-icons">home</i>
          </li>
          <li>
            <i className="material-icons">description</i>
          </li>
          <li>
            <i className="material-icons">forum</i>
          </li>
          <li>
            <i className="material-icons">notifications</i>
          </li>
        </ul>
      </div>
    );
  }
}

export default LandingPage;
