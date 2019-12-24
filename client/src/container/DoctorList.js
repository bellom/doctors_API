import React from "react";
import "../components/App.css";
import { connect } from 'react-redux';
import { fetchDoctor } from '../actions/fetchAction'
import { setDoctorId } from '../actions/fetchAction'



const mapDispatchToProps = dispatch => ({
  fetchDoctor: (doctors) => dispatch(fetchDoctor(doctors)),
  setDoctorId: (id) => dispatch(setDoctorId(id)),
});

class DoctorList extends React.Component {
  
  state = {
    doctors: []
  };

  handleSubmit = e => {
    e.preventDefault()
    const id = Number(e.target.id.slice(3))
    const { setDoctorId } = this.props
    setDoctorId(id)
    this.props.history.push('/bookingPage');
  }

  handleClick = e => {
    e.preventDefault()
    const id = e.target.id
    document.getElementById(`show${id}`).style.display = document.getElementById(`show${id}`).style.display === 'block' ? 'none' : 'block'
  }

  async componentDidMount() {
    await fetch('/api/doctors')
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
        <h2 id={doctor.id} onClick={this.handleClick} >{doctor.name}</h2>
        <div id={`show${doctor.id}`} style={{display: 'none'}}>  
          <h3>{doctor.education}</h3>
          <h4>{doctor.speciality}</h4>
          <button onClick={this.handleSubmit} id={`btn${doctor.id}`}>Book Appointment</button>
        </div>
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