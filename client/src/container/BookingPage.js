import React from "react";
import "../components/App.css";
import Datetime from 'react-datetime';
import { connect } from 'react-redux';
import moment from 'moment'
import { setDate } from '../actions/fetchAction'


const mapStateToProps = state => {
  return {
    user: state.user,
    doctors: state.doctors,
    doctorId: state.doctorId
  }
};

const mapDispatchToProps = dispatch => ({
  setDate: (date) => dispatch(setDate(date))
});

class BookingPage extends React.Component {

    state = {
      doctor: {},
      date: ''
    };
    
  componentDidMount(e) {
    const { doctors, doctorId } = this.props
    const doctor = doctors.filter(doctor => doctor.id === doctorId)[0]
    this.setState({
      doctor
    })
  };
  
  handleDate = e => {
    this.setState({
      date: moment(e._d).format('MMMM Do YYYY, h:mm:ss a')
    })
 };

  handleSubmit = () => {
    const { date } = this.state
    const { setDate } = this.props

    setDate(date)
    
    this.props.history.push('/bookedlist');
  };

  date() {
    return this.state.date
  };

  render (){

    console.log(this.state.date)

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
            <label for="username">Username: </label>
            <input value={user} />
          </form>
          <button className='input' onClick={this.handleSubmit}>Book Appointment</button>
        </header>
      </div>
    );
  }
};

// get the value of the date
// store to redux store


export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);