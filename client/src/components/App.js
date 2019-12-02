import React from "react";
import "./App.css";
import LandingPage from './LandingPage'
import DoctorList from './DoctorList'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/doctorlist' exact component={DoctorList} />

        </Switch>
      </Router>
    );
  }
}

export default App;