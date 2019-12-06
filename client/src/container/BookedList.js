import React from "react";
import "../components/App.css";
import { connect } from "react-redux";
// import { thunk_action_creator } from "../actions/fetchAction";


class BookedList extends React.Component {

  state = {
    appointments: []
  }

// fetch the data from API and send to the store using mapdispatchtoprops
// fetch data from store using mapstatetoprops


  componentDidMount() {
    fetch('/api/appointments')
      .then(res => res.json())
      .then(json => this.setState({ appointments: json}))
      .catch(error => console.log(error));
  }

  renderAppointments() {
    return this.state.appointments.map(appointment => (
      <div className='setBorder'>
        <h2>Time:{appointment.date}</h2>
        <h4>Doctor To Meet:{appointment.doctor_name}</h4>
        <h4>Patient: {appointment.user_name}</h4>
      </div>
    ))
  }

  render() {
    return (
      <div className="App">
        <div className="headTitle">
          <span>&#60;</span> List Of Booked Appointments
        </div>
        <header className="App-bdy">
          <div>list of Appointments</div>
          <div className='setBorder'>{this.renderAppointments()}</div>
        </header>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    data: state
  };
};
export default connect(mapStateToProps, null)(BookedList);
