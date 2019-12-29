import React from "react";
import "../components/App.css";
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
      doctor: {},
      date: new Date()
    }
    
  componentDidMount(e) {
    const { doctors, doctorId } = this.props
    const doctor = doctors.filter(doctor => doctor.id === doctorId)[0]
    this.setState({
      doctor
    })
  }
  
  handleDate(e){
    this.setState({
      date: e.target.value
    });
 };

  render (){

    console.log(this.state.date)

    const { user } = this.props
    const { doctor } = this.state

    return (
      <div className="App">
        <div className="headTitle">
          <span>&#60;</span> Making a Booking
          <Datetime onChange={this.props.handleDate} />
        </div>
        <header className="App-bdy">
          <div>doctor's info: </div>
          <div>{doctor.name}</div>
          <div>{doctor.speciality}</div>
          <div>{doctor.education}</div>
          <form>
            <input value={user}/>
          </form>
          <button className='input' onSubmit={this.handleDate}>Book Appointment</button>
        </header>
      </div>
    );
  }
};

// get the value of the date
// store to redux store
// 


export default connect(mapStateToProps, null)(BookingPage);