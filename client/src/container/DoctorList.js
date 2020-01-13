import React from "react";
import "../components/App.css";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDoctor } from '../actions/fetchAction'
import { setDoctorId } from '../actions/fetchAction'
import { Link } from 'react-router-dom';



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
        <div className='doc-div'>
          <div className ='doc-img'><img src="https://robohash.org/perspiciatisautemlaborum.png?size=300x300&amp;set=set1" alt="Avatar" /></div>
          <div className='doc-name' id={doctor.id} onClick={this.handleClick} >{doctor.name}</div>
        </div>
          <span className='filter'>Click Doctor's Name for more info!</span>
        <div id={`show${doctor.id}`} style={{display: 'none'}}>  
          <h5>{doctor.education}</h5>
          <h6>{doctor.speciality}</h6>
          <div className='btn-appt'>
            <button className='btn-call form-login' onClick={this.handleSubmit} id={`btn${doctor.id}`}>Call</button>
            <button className='btn-book login-btn form-login' onClick={this.handleSubmit} id={`btn${doctor.id}`}>Book</button>
          </div>
        </div>
        <br />
      </div>
    )); 
  }
  
  render() {
  return (
    <div className="App">
      <div className="headTitle">
        <span className='lessThan'><Link to='/home'>&#60;</Link></span>General Doctor <span>&#x25bc;</span>
      </div>
      <div>
        <h6 className='list-doc'>List of Doctors from search</h6>
        <h6 className='filter'>Filter By Category: <input type='text' className='doc-input'/></h6>
        <div className="doctor">
          <div>{this.renderDoctors()}</div>
        </div>
      </div>
      <div className='footer'>
        <ul>
          <li>
          <i className="material-icons home"><Link to='/home'>home</Link></i>
          </li>
          <li>
            <i className="material-icons desc"><Link to='/bookedlist'>description</Link></i>
          </li>
          <li>
            <i className="material-icons">forum</i>
          </li>
          <li>
            <i className="material-icons">notifications</i>
          </li>
        </ul>
      </div>

    </div>
  );
  };
};

DoctorList.propTypes = {
  setDoctorId: PropTypes.func.isRequired,
  fetchDoctor: PropTypes.func.isRequired,
  doctors: PropTypes.object.isRequired,
};


export default connect(null, mapDispatchToProps)(DoctorList);