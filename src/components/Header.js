import React from 'react'
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div>
       <nav className="navbar" style={{ position: 'fixed' }}>
      <div className="navbar-logo">✈️ SkyBook</div>

      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/flights">Flights</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/bookingflight">BookingFlight</Link></li>
      
      </ul>
    </nav>
    </div>
  )
  };

export default Header
