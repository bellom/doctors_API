import React from "react";
import logo from "../logo.svg";
import "./App.css";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class LandingPage extends React.Component {

  goto = () => {
    this.props.history.push('/doctorlist')
  }

  render() {
    return (
      <div className="App">
        <div className="headTitle">
          <span className='lessThan'><Link to='/'>&#60;</Link></span>Doctors
        </div>
        <div className="App-body">
          <input
            type="text"
            className="homepg-input"
            placeholder="Search for doctors"
          />
          <br />
          <br />
          <img src={logo} className="App-logo2" alt="logo" />
          <br /> <br />
          <h2 className="bodyTitle">search doctors</h2>
          <span>Search by directly clicking the doctors category below</span>
          <br />
          <span>Go ahead and book an appointment.</span>
        </div>
        <div>
          <div className='flex'>
            <Button className='cat' onClick={this.goto}>All</Button>
            <Button className='cat' onClick={this.goto}>Dermatologists</Button>
            <Button className='cat' onClick={this.goto}>Endocrinologits</Button>
          </div>
          <br />
          <div className='flex'>
            <Button className='cat' onClick={this.goto}>Family Physician</Button>
            <Button className='cat' onClick={this.goto}>Vent Doctor</Button>
            <Button className='cat' onClick={this.goto}>Abecos</Button>
          </div>
          <br />
          <div className='flex'>
            <Button className='cat' onClick={this.goto}>Cardiac</Button>
            <Button className='cat' onClick={this.goto}>Dermatologists</Button>
            <Button className='cat' onClick={this.goto}>Endocrinologits</Button>
          </div>
          <br />
          <div className='flex'>
            <Button className='cat' onClick={this.goto}>Family Physician</Button>
            <Button className='cat' onClick={this.goto}>Vent Doctor</Button>
            <Button className='cat' onClick={this.goto}>Abecos</Button>
          </div>
          <br />
          <div className='flex'>
            <Button className='cat' onClick={this.goto}>Cardiac</Button>
            <Button className='cat' onClick={this.goto}>Dermatologists</Button>
            <Button className='cat' onClick={this.goto}>Endocrinologits</Button>
          </div>
          <br />
          <div className='flex'>
            <Button className='cat' onClick={this.goto}>Family Physician</Button>
            <Button className='cat' onClick={this.goto}>Vent Doctor</Button>
            <Button className='cat' onClick={this.goto}>Abecos</Button>
          </div>
          <br />
          <span>copyright @bellom 2020</span>

        </div>
        <footer className='footer'>
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
        </footer>
      </div>
    );
  }
}

export default LandingPage;
