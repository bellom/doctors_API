import React from "react";
import "../components/App.css";
import DateTime from 'react-datetime';
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
      doctor: {},
      date: ''
    }
    
  componentDidMount() {
    const { doctors, doctorId } = this.props
    const doctor = doctors.filter(doctor => doctor.id === doctorId)[0]
    this.setState({
      doctor
    })
  }
  
  handleDate(e){
    this.setState({
      date: e.target.value
    })
    console.log(this.state.date)
 };

  render (){

    const { user } = this.props
    const { doctor } = this.state

    console.log(this.state.date)
    return (
      <div className="App">
        <div className="headTitle">
          <span>&#60;</span> Making a Booking
          <DateTime onChange={this.props.handleDate}/>
        </div>
        <header className="App-bdy">
          <div>doctor's info: </div>
          <div>{doctor.name}</div>
          <div>{doctor.speciality}</div>
          <div>{doctor.education}</div>
          <form>
            <input value={user}/>
          </form>
          <button className='input' onClick={this.handleDate}>Book Appointment</button>
        </header>
      </div>
    );
  }
};

// get the value of the date
// store to redux store
// 


export default connect(mapStateToProps, null)(BookingPage);