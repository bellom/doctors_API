import React from "react";
import "./App.css";
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import SignUpPage from "./SignUpPage";
import DoctorList from './DoctorList';
import DoctorDetails from "./DoctorDetails";
import BookingPage from "./BookingPage";
import BookedList from "./BookedList";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/signup' component={SignUpPage} />
          <Route path='/doctorlist' exact component={DoctorList} />
          <Route path='/doctorDetails' component={DoctorDetails} />
          <Route path='/bookingPage' component={BookingPage} />
          <Route path='/bookedList' component={BookedList} />
        </Switch>
      </Router>
    );
  }
}

export default App;