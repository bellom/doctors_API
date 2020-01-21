import React from 'react';
import '../components/App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { fetchDoctor, setDoctorId } from '../actions/fetchAction';
import specialties from '../components/specialties';

const mapDispatchToProps = dispatch => ({
  fetchDoctor: doctors => dispatch(fetchDoctor(doctors)),
  setDoctorId: id => dispatch(setDoctorId(id)),
});

class DoctorList extends React.Component {
  state = {
    doctors: [],
    filter: 'All'
  };

  async componentDidMount() {
    await axios
      .get('/api/doctors')
      .then(res => {
        const doctors = res.data;
        this.setState({ doctors });
      })
      .catch(error => console.log(error));

    const { doctors } = this.state;
    const { fetchDoctor } = this.props;

    fetchDoctor(doctors);
  }

  handleSubmit = e => {
    e.preventDefault();
    const id = Number(e.target.id.slice(3));
    const { setDoctorId } = this.props;
    setDoctorId(id);
    this.props.history.push('/bookingPage');
  };

  handleClick = e => {
    e.preventDefault();
    const id = e.target.id;
    document.getElementById(`show${id}`).style.display =
      document.getElementById(`show${id}`).style.display === 'block'
        ? 'none'
        : 'block';
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ filter: value})
  }

  filteredDoctor = () => {
    const { doctors, filter } = this.state;
    return filter === 'All' ? doctors : doctors.filter(doctor => doctor.speciality === filter);
  }
  
  renderDoctors() {
    return this.filteredDoctor().map(doctor => (
      <div key={doctor.id} className="doctorlist">
        <div className="doc-div">
          <div className="doc-img">
            <img
              src="https://robohash.org/perspiciatisautemlaborum.png?size=300x300&amp;set=set1"
              alt="Avatar"
            />
          </div>
          <div className="doc-name" id={doctor.id} onClick={this.handleClick}>
            {doctor.name}
          </div>
        </div>
        <span className="filter">Click Doctor's Name for more info!</span>
        <div id={`show${doctor.id}`} style={{ display: 'none' }}>
          <h5>{doctor.education}</h5>
          <h6>{doctor.speciality}</h6>
          <div className="btn-appt">
            <button
              type="submit"
              className="btn-call form-login"
              onClick={this.handleSubmit}
              id={`btn${doctor.id}`}
            >
              Call
            </button>
            <button
              type="submit"
              className="btn-book login-btn form-login"
              onClick={this.handleSubmit}
              id={`btn${doctor.id}`}
            >
              Book
            </button>
          </div>
        </div>
        <br />
      </div>
    ));
  }

  render() {
    return (
      <div className="App">
        <header className="headTitle">
          <span className="lessThan">
            <Link to="/home">&#60;</Link>
          </span>
          General Doctor
          <span>&#x25bc;</span>
        </header>
        <main>
          <h6 className="list-doc">List of Doctors from search</h6>
          <div className="filter">
            Filter By Speciality: 
            <select className="doc-input" onChange={this.handleChange}>
              <option value="All">All</option>
              {specialties.map(e => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </div>
          <div className="doctor">
            <div>{this.renderDoctors()}</div>
          </div>
        </main>
        <footer className="footer">
          <ul>
            <li>
              <i className="material-icons home">
                <Link to="/home">home</Link>
              </i>
            </li>
            <li>
              <i className="material-icons desc">
                <Link to="/bookedlist">description</Link>
              </i>
            </li>
            <li>
              <i className="material-icons">forum</i>
            </li>
            <li>
              <i className="material-icons">notifications</i>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

DoctorList.propTypes = {
  setDoctorId: PropTypes.func.isRequired,
  fetchDoctor: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(DoctorList);
