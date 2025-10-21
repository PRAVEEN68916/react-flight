import React from 'react';
import './Footer.css'; // We'll add styles next

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    ✈️ <span>Flight</span>
                </div>

                <div className="footer-links ">
                    <ul>
                        <li><a className="ms-md-3 mb-lg-5" href="/home">Home</a><br /></li>
                        <li><a className="ms-md-3 mb-lg-5" href="/flights">flights</a><br /></li>
                        <li><a className="ms-md-3 mb-lg-5" href="/about">About Us</a><br /></li>
                        <li><a className="ms-md-3 mb-lg-5" href="/bookingflight">BookingFlight</a><br /></li>
                        <li><a className="ms-md-3 mb-lg-5" href="/contact">Contact Us</a><br /></li>
                    </ul>
                </div>

                <div className="footer-social mb-4">
                    <a href="https://facebook.com">🌐</a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">📸</a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦</a>
                </div>

                <div className="footer-copy">
                    © {new Date().getFullYear()} FlightConcept. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;