import React from 'react'

function Header() {

  return (
    <div>
       <nav className="navbar">
      <div className="navbar-logo">✈️ SkyBook</div>

      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#flights">Flights</a></li>
        <li><a href="#signin">Sign In</a></li>
        <li><a href="#login">Login</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </div>
  )
  };

export default Header
