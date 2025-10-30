import React from 'react'
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div>
      <nav className="navbar" style={{ position: 'fixed' }}>
        <div className="navbar-logo 3  ">✈️ <span style={{ color:'aqua',fontSize:'30px'}} >Sky</span><span style={{ color:'yellow',fontSize:'30px'}}>Book</span></div>

        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/flights">Flights</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/bookingflight">BookingFlight</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign up</Link></li>
        </ul>
      </nav>
    </div>
  )
};

export default Header
