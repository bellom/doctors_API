import React from "react";
import "./App.css";
import Datetime from 'react-datetime';

class BookingPage extends React.Component {
  render (){
    return (
      <div className="App">
        <div className="headTitle">
          <span>&#60;</span> Making a Booking
          <Datetime />
        </div>
        <header className="App-bdy">
          <button className='input'>Book Appointment</button>
          <div>doctors info</div>
        </header>
      </div>
    );
  }
};

export default BookingPage;