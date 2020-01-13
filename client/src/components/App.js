import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import SignInPage from '../container/SignInPage';
import DoctorList from '../container/DoctorList';
import BookingPage from '../container/BookingPage';
import BookedList from '../container/BookedList';

function App () {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={SignInPage} />
          <Route path="/home" exact component={LandingPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/doctorlist" exact component={DoctorList} />
          <Route path="/bookingPage" component={BookingPage} />
          <Route path="/bookedList" component={BookedList} />
        </Switch>
      </Router>
    );
  };

export default App;
