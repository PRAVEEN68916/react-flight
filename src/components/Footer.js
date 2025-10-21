import React from 'react';
import './Footer.css'; // We'll add styles next

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    ✈️ <span>Flight</span>
                </div>

                <div className="footer-links">
                    <a href="/">Home</a>
                    <a href="/flights">flights</a>
                    <a href="/bookings">BookingFlight</a>
                    <a href="/contact">Contact Us</a>
                </div>

                <div className="footer-social">
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
