import React from 'react';
import '../components/App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

const mapStateToProps = state => {
  return {
    data: state,
  };
};

class BookedList extends React.Component {
  state = {
    appointments: [],
  };

  componentDidMount() {
    setTimeout(() => {
      axios
        .get('/api/appointments')
        .then(res => {
          const appointments = res.data;
          this.setState({ appointments });
        })
        .catch(error => console.log(error));
    }, 1);
  }

  renderAppointments() {
    return this.state.appointments.map(appointment => (
      <div key={appointment.id} className="doctorlist">
        <h4>
          Doctor To Meet:
          {appointment.doctor_name}
        </h4>
        <h5>
          Name of Patient:
          {appointment.user_name}
        </h5>
        <h6>
          Time of Appointment:
          {appointment.date}
        </h6>
      </div>
    ));
  }

  render() {
    return (
      <div className="App">
        <header className="headTitle-booked">
          <span className="lessThan booked">
            <Link to="/bookingPage">&#60;</Link>
          </span>
          Booked Appointments
        </header>
        <main>
          <div className="doctorlist">{this.renderAppointments()}</div>
        </main>
        <footer className="footer">
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
        </footer>
      </div>
    );
  }
}

BookedList.propTypes = {
  data: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(BookedList);
