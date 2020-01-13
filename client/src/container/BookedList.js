import React from 'react';
import '../components/App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    data: state
  };
};

class BookedList extends React.Component {
  state = {
    appointments: []
  };

  componentDidMount() {
    setTimeout(() => {
      fetch('/api/appointments')
        .then(res => res.json())
        .then(json => this.setState({ appointments: json }))
        .catch(error => console.log(error));
    }, 250);
  }

  renderAppointments() {
    return this.state.appointments.map(appointment => (
      <div className="doctorlist">
        <h4>Doctor To Meet: {appointment.doctor_name}</h4>
        <h4>Name of Patient: {appointment.user_name}</h4>
        <h5>Time of Appointment: {appointment.date}</h5>
      </div>
    ));
  }

  render() {
    return (
      <div className="App">
        <div className="headTitle-booked">
          <span className="lessThan booked">
            <Link to="/bookingPage">&#60;</Link>
          </span>
          Booked Appointments
        </div>
        <div>
          <div className="doctorlist">{this.renderAppointments()}</div>
        </div>
        <div className="footer">
          <ul>
            <li>
              <i className="material-icons home">
                <Link to="/home">home</Link>
              </i>
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
        </div>
      </div>
    );
  }
}

BookedList.propTypes = {
  data: PropTypes.object.isRequired
};

export default connect(mapStateToProps, null)(BookedList);
