import React from "react";
import "../components/App.css";
import Datetime from 'react-datetime';
import { connect } from 'react-redux';
import moment from 'moment'
import { setDate } from '../actions/fetchAction'
import axios from 'axios';

const mapStateToProps = state => {
  return {
    user: state.user.username,
    userId: state.user.id,
    doctors: state.doctors,
    doctorId: state.doctorId,
    date: state.date
  }
};

const mapDispatchToProps = dispatch => ({
  setDate: (date) => dispatch(setDate(date)),
});

class BookingPage extends React.Component {

    state = {
      doctor: {},
      date: '',
      appointment: {}
    };
    
  componentDidMount(e) {
    const { doctors, doctorId } = this.props
    const doctor = doctors.filter(doctor => doctor.id === doctorId)[0]
    this.setState({
      doctor
    })
  };

  addApptToDB = async () => {

    const { user, userId, doctorId, date } = this.props
    const { doctor } = this.state
    console.log(user, userId, doctorId, date, doctor)

    await axios.post('api/appointments/', {
      date: date,
      user_id: userId,
      doctor_id: doctorId,
      doctor_name: doctor.name,
      user_name: user
    })
    .catch(err => console.log(err));
  }
  
  handleDate = e => {
    this.setState({
      date: moment(e._d).format('MMMM Do YYYY, h:mm:ss a')
    })
    const { date } = this.state
    const { setDate } = this.props

    setDate(date)
 };

  handleSubmit = (e) => {
    e.preventDefault()
    this.addApptToDB();
    this.props.history.push('/bookedlist');
  };

  date() {
    return this.state.date
  };

  render (){
    
    const { user } = this.props
    const { doctor } = this.state

    return (
      <div className="App">
        <div className="headTitle">
          <span>&#60;</span> Making a Booking
          <Datetime onChange={this.handleDate} />
        </div>
        <header className="App-bdy">
          <div>Doctor's Info: </div>
          <div>Doctor's Name: {doctor.name}</div>
          <div>Doctor's speciality: {doctor.speciality}</div>
          <div>Doctor's Education: {doctor.education}</div>
          <br />
          <div>Appointment Time: {this.date()}</div>
          <form>
            <label for="username">Name of Patient: </label>
            <input value={user} />
          </form>
          <button className='input' onClick={this.handleSubmit}>Book Appointment</button>
        </header>
      </div>
    );
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);