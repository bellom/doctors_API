import React from "react";
import logo from "../logo.svg";
import "../components/App.css";
import { connect } from 'react-redux';
import axios from 'axios';
import { createUser } from '../actions/fetchAction'


const mapDispatchToProps = dispatch => ({
  createUser: (user) => dispatch(createUser(user)),
});

class SignInPage extends React.Component {
  
  state = {
    username: '',
  }

  addUserToDB = async () => {
    const { createUser } = this.props;
    const res = await axios.post('/api/users/', {username: this.state.username})
    .catch(err => console.log(err));
    const user = res.data
    createUser(user)
  }
  
  checkUser = async () => {
    const { createUser } = this.props;
    const user  = await fetch('/api/users/')
    .then(res => res.json())
    .then(json => json.find(user => user.username === this.state.username))
    .catch(err => console.log(err));
    if (user) {
      createUser(user)
      this.props.history.push('/home');
      return
    } else {
      this.addUserToDB();
    }
  }
  
  handleChange = e => {
    this.setState({
      username: e.target.value,
    });
  }

  handleSubmit = e => {
    e.preventDefault()
    this.checkUser()
    this.props.history.push('/home');
  }

  render() {
    
    const { username } = this.state;

    return (
      <div className="App App-login"> 
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Doctor's Meetup</h3>
        </div>
        <div>
          <h2>WELCOME</h2>
          <span>Sign in to continue</span>
        </div>
        <div className="body">
          <form onSubmit={this.handleSubmit}>
            <input type='text'
              className='input'
              placeholder='username'
              name='username'
              value={username}
              onChange={this.handleChange}
            />
            <button type='submit'>
              SignIn
            </button>
          </form>
        </div>
        
        <div>By continuing you agree to <a href="/">Terms & Conditions</a></div>
      </div>
    );
  };
};

export default connect(null, mapDispatchToProps)(SignInPage);
