import React from 'react';
import '../components/App.css';
import Datetime from 'react-datetime';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setDate } from '../actions/fetchAction';

const mapStateToProps = state => {
  return {
    user: state.user.username,
    userId: state.user.id,
    doctors: state.doctors,
    doctorId: state.doctorId,
    date: state.date,
  };
};

const mapDispatchToProps = dispatch => ({
  setDate: date => dispatch(setDate(date)),
});

class BookingPage extends React.Component {
  state = {
    doctor: {},
    date: '',
  };

  componentDidMount() {
    const { doctors, doctorId } = this.props;
    const doctor = doctors.filter(doctor => doctor.id === doctorId)[0];
    this.setState({
      doctor,
    });
  }

  addApptToDB = async () => {
    const { user, userId, doctorId, date } = this.props;
    const { doctor } = this.state;

    await axios
      .post('api/appointments/', {
        date,
        user_id: userId,
        doctor_id: doctorId,
        doctor_name: doctor.name,
        user_name: user,
      })
      .catch(err => console.log(err));
  };

  handleDate = e => {
    this.setState({
      date: moment(e._d).format('MMMM Do YYYY, h:mm:ss a'),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addApptToDB();
    this.props.history.push('/bookedlist');
  };

  date() {
    return this.state.date;
  }

  setDate() {
    const { date } = this.state;
    const { setDate } = this.props;
    setDate(date);
  }

  render() {
    const { user } = this.props;
    const { doctor } = this.state;

    return (
      <div className="App">
        <header className="headTitle-booking">
          <span className="lessThan booking">
            <Link to="/doctorlist">&#60;</Link>
          </span>
          Making a Booking
          <Datetime onChange={this.handleDate} onClick={this.setDate()}/>
        </header>
        <button
          type="submit"
          className="btn-booking login-btn form-login"
          onClick={this.handleSubmit}
        >
          Book Appointment
        </button>
        <div className="doc-details">
          <div className="doc-name">{doctor.name}</div>
          <div className="spec">{doctor.speciality}</div>
          <div className="edu">{doctor.education}</div>
          <br />
          <div className="appt-time">
            Appointment Time:
            {this.date()}
          </div>
          <form className="booking-form">
            <label className="patient">
              Name of Patient:
            </label>
            <input value={user} className="doc-input" />
          </form>
        </div>
      </div>
    );
  }
}

BookingPage.propTypes = {
  setDate: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  doctors: PropTypes.object.isRequired,
  doctorId: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);
