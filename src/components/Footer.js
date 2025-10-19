import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // optional for custom styling

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Column 1: About */}
          <div className="col-md-4">
            <h5>Flight Concept Medha</h5>
            <p>Your trusted partner in innovative flight concepts and aerospace solutions.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About Us</a></li>
              <li><a href="/services" className="text-white">Services</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="col-md-4">
            <h5>Contact</h5>
            <p>Email: info@flightmedha.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Hyderabad, India</p>
          </div>
        </div>

        <hr className="border-light" />
        <p className="text-center mb-0">© {new Date().getFullYear()} Flight Concept Medha. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
