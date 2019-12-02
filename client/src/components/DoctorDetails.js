import React from "react";
import "./App.css";

const DoctorDetails = () => {
  return (
    <div className="App">
      <div className="headTitle">
        <span>&#60;</span> Doctors Information
      </div>
      <header className="App-body">
        <div className='doc-into'>
          <div>
            <h3>Education:</h3>
            <ul>
                <li></li>
                <li></li>
            </ul>
          </div>
          <div>
            <h3>Specialization:</h3>
            <ul>
                <li></li>
                <li></li>
            </ul>
          </div>
        </div>
        <button className='input'>Book Appointment</button>
      </header>
    </div>
  );
};

export default DoctorDetails