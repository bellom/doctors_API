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
  
  // need to get the username from input 
  // and post to the store using axios
  // for API post, dispatch to send to the store
  state = {
    username: ''
  }
  
  addUserToDB = async () => {
    axios.post('/api/users/', {username: this.state.username})
    .catch(err => console.log(err));
    this.props.history.push('/home')
  }
  
  checkUser = async (username) => {
    const user  = await fetch('/api/users/')
    .then(res => res.json())
    .then(json => json.find(user => user.username === this.state.username))
    .catch(err => console.log(err));
    if (user) return user && this.props.history.push('/home');
    return this.addUserToDB();
  }
  
  handleChange = e => {
    this.setState({
      username: e.target.value
    });
  }
  
  handleSubmit = e => {
    e.preventDefault()
    this.checkUser()
    const { username } = this.state;
    const { createUser } = this.props;

    createUser(username)

    this.setState({
      username: username
    })
  }
  
  render() {
    
    const { username } = this.state;

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
