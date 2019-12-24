import React from "react";
import "./App.css";
import Datetime from 'react-datetime';
import { connect } from 'react-redux';



const mapStateToProps = state => {
  return {
    user: state.user,
    doctors: state.doctors,
    doctorId: state.doctorId
  }
};

class BookingPage extends React.Component {

    state = {
      doctor: {}
    }

  componentDidMount() {
    const { doctors, doctorId } = this.props
    const doctor = doctors.filter(doctor => doctor.id === doctorId)[0]
    this.setState({
      doctor
    })
  }
  
  render (){

    const { user } = this.props
    const { doctor } = this.state

    return (
      <div className="App">
        <div className="headTitle">
          <span>&#60;</span> Making a Booking
          <Datetime />
        </div>
        <header className="App-bdy">
          <div>doctor's info: {doctor.name}</div>
          <div></div>
          <form>
            <input value={user}/>
          </form>
          <button className='input'>Book Appointment</button>
        </header>
      </div>
    );
  }
};



export default connect(mapStateToProps, null)(BookingPage);
