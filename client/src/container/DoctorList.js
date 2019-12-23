import React from "react";
import "../components/App.css";
import { connect } from 'react-redux';
import { fetchDoctor } from '../actions/fetchAction'


const mapDispatchToProps = dispatch => ({
  fetchDoctor: (doctors) => dispatch(fetchDoctor(doctors)),
});


class DoctorList extends React.Component {
  
  state = {
    doctors: [],
    on: false
  };

  handleClick = e => {
    e.preventDefault()
    this.props.history.push('/bookingPage');
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({
      on: !this.state.on
    })
    
  }
  componentDidMount() {
    fetch('/api/doctors')
      .then(response => response.json())
      .then(json => this.setState({ doctors: json }))
      .catch(error => console.log(error));

    const { doctors } = this.state
    const { fetchDoctor } = this.props

    fetchDoctor(doctors) 
  }

  renderDoctors() {
    return this.state.doctors.map(doctor => (
      <div key={doctor.id} className='doctorlist'>
        <h2 onClick={this.handleChange}>{doctor.name}</h2>
        {this.state.on && <div>  
          <h3>{doctor.education}</h3>
          <h4>{doctor.speciality}</h4>
          <button onClick={this.handleClick}>Book Appointment</button>
        </div>}
        <br />
        <br />
      </div>
    )); 
  }
  
  render() {
  return (
    <div className="App">
      <div className="headTitle">
        <span>&#60;</span> Doctors <span>&#x25bc;</span>
      </div>
      <header className="App-bdy">
        <div className="body">
          <i className="material-icons input settings">settings_application</i>
        </div>
        <div>
          <h3>List of Doctors from search</h3>
          <h4>Filter By Name: <input type='text'/></h4>
          <div className="doctor">
            <div>{this.renderDoctors()}</div>
          </div>
        </div>
      </header>
    </div>
  );
  };
};

export default connect(null, mapDispatchToProps)(DoctorList);