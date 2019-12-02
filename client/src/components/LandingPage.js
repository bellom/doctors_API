import React from "react";
import logo from "../logo.svg";
import "./App.css";

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
            />
            <br />
            <br />
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            <h2 className="bodyTitle">search doctors</h2>
            <span>Search by directly typing the doctors name</span>
            <br />
            <span>you want to book an appointment with.</span>
          </div>
        </header>
        <div>{this.renderDoctors()}</div>
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