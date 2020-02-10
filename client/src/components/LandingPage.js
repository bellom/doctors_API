import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import logo from '../logo.svg';
import './App.css';

class LandingPage extends React.Component {
  goto = () => {
    this.props.history.push('/doctorlist');
  };

  render() {
    return (
      <div className="App">
        <header className="headTitle">
          <span className="lessThan">
            <Link to="/">&#60;</Link>
          </span>
          Doctors
        </header>
        <div className="App-body text">
          <form className="homepg-form" onSubmit={this.goto}>
            <input
              type="text" 
              className="homepg-input"
              placeholder="Search for doctors speciality"
            />
          </form>
          <br />
          <br />
          <img src={logo} className="App-logo2" alt="logo" />
          <br /> 
          <br />
          <h2 className="bodyTitle">search doctors</h2>
          <span>Search by directly clicking the doctors speciality below</span>
          <br />
          <span>Go ahead and book an appointment.</span>
        </div>
        <div className="doc-grid">
          <div className="flex">
            <Button className="cat" onClick={this.goto}>
              General Doctor
            </Button>
            <Button className="cat" onClick={this.goto}>
              Child Care
            </Button>
            <Button className="cat" onClick={this.goto}>
              Skin
            </Button>
          </div>
          <br />
          <div className="flex">
            <Button className="cat" onClick={this.goto}>
              Family Physician
            </Button>
            <Button className="cat" onClick={this.goto}>
              Mental Health
            </Button>
            <Button className="cat" onClick={this.goto}>
              Dentist
            </Button>
          </div>
          <br />
          <div className="flex">
            <Button className="cat" onClick={this.goto}>
              Cardiac
            </Button>
            <Button className="cat" onClick={this.goto}>
              Child Care
            </Button>
            <Button className="cat" onClick={this.goto}>
              Skin
            </Button>
          </div>
          <br />
          <div className="flex">
            <Button className="cat" onClick={this.goto}>
              Family Physician
            </Button>
            <Button className="cat" onClick={this.goto}>
              Vent Doctor
            </Button>
            <Button className="cat" onClick={this.goto}>
              Abecos
            </Button>
          </div>
          <br />
          <div className="flex">
            <Button className="cat" onClick={this.goto}>
              Cardiac
            </Button>
            <Button className="cat" onClick={this.goto}>
              Child Doctor
            </Button>
            <Button className="cat" onClick={this.goto}>
              Artery
            </Button>
          </div>
          <br />
          <div className="flex">
            <Button className="cat" onClick={this.goto}>
              Family Physician
            </Button>
            <Button className="cat" onClick={this.goto}>
              Vent Doctor
            </Button>
            <Button className="cat" onClick={this.goto}>
              Abecos
            </Button>
          </div>
          <br />
        </div>
        <footer className="footer">
          <ul>
            <li>
              <i className="material-icons home">
                <Link to="/home">home</Link>
              </i>
            </li>
            <li>
              <i className="material-icons desc">
                <Link to="/bookedlist">description</Link>
              </i>
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
