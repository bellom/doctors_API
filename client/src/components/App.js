import React from "react";
import "./App.css";
import LandingPage from './LandingPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends React.Component {
  // state = {
  //   doctors: []
  // };

  // componentDidMount() {
  //   fetch("/api/doctors")
  //     .then(response => response.json())
  //     .then(json => this.setState({ doctors: json }))
  //     .catch(error => console.log(error));
  // }

  // renderDoctors() {
  //   return this.state.doctors.map(doctor => (
  //     <div key={doctor.id}>
  //       <h2>{doctor.name}</h2>
  //       <h3>{doctor.education}</h3>
  //       <h4>{doctor.speciality}</h4>
  //     </div>
  //   )); 
  // }

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={LandingPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
