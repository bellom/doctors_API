import React from "react";
import "../components/App.css";

class DoctorList extends React.Component {
  
  state = {
    doctors: []
  };

  componentDidMount() {
    fetch('/api/doctors')
      .then(response => response.json())
      .then(json => this.setState({ doctors: json }))
      .catch(error => console.log(error));
  }

  renderDoctors() {
    return this.state.doctors.map(doctor => (
      <div key={doctor.id} className='doctorlist'>
        <h2>{doctor.name}</h2>
        <h3>{doctor.education}</h3>
        <h4>{doctor.speciality}</h4>
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

export default DoctorList;