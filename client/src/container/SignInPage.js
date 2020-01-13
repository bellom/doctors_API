import React from 'react';
import '../components/App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import logo from '../logo.svg';
import { createUser } from '../actions/fetchAction';

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(createUser(user)),
});

class SignInPage extends React.Component {
  state = {
    username: '',
  };

  addUserToDB = async () => {
    const { createUser } = this.props;
    const res = await axios
      .post('/api/users/', { username: this.state.username })
      .catch(err => console.log(err));
    const user = res.data;
    createUser(user);
  };

  checkUser = async () => {
    const { createUser } = this.props;
    const user = await fetch('/api/users/')
      .then(res => res.json())
      .then(json => json.find(user => user.username === this.state.username))
      .catch(err => console.log(err));
    if (user) {
      createUser(user);
      this.props.history.push('/home');
    } else {
      this.addUserToDB();
    }
  };

  handleChange = e => {
    this.setState({
      username: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.checkUser();
    this.props.history.push('/home');
  };

  render() {
    const { username } = this.state;

    return (
      <div className="App App-login">
        <div className="Div-one">
          <img src={logo} className="App-logo1" alt="logo" />
          <br />
          <span>
            Med
            <span className="med">Health</span>
          </span>
        </div>
        <div>
          <h2>WELCOME</h2>
          <span>Sign in to continue</span>
        </div>
        <div className="div-two">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="login-input form-login"
              placeholder="patient name"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <Button type="submit" className="login-btn form-login">
              SignIn
            </Button>
          </form>
        </div>

        <div className="div-three">
          By continuing you agree to 
          <a href="/">Terms & Conditions</a>
        </div>
      </div>
    );
  }
}

SignInPage.propTypes = {
  createUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SignInPage);
