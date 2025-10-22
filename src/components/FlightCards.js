import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FlightCards.css";

const FlightCards = () => {
  const flights = [
    {
      id: 1,
      airline: "Air India",
      from: "Delhi (DEL)",
      to: "Mumbai (BOM)",
      time: "08:00 AM - 10:15 AM",
      duration: "2h 15m",
      price: "₹4,999",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Air_India_Logo.svg/512px-Air_India_Logo.svg.png"
    },
    {
      id: 2,
      airline: "IndiGo",
      from: "Hyderabad (HYD)",
      to: "Bangalore (BLR)",
      time: "09:30 AM - 10:45 AM",
      duration: "1h 15m",
      price: "₹2,999",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/IndiGo_logo.svg"
    },
    {
      id: 3,
      airline: "Vistara",
      from: "Chennai (MAA)",
      to: "Delhi (DEL)",
      time: "11:00 AM - 01:30 PM",
      duration: "2h 30m",
      price: "₹5,499",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/7e/Vistara_logo.svg"
    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-start mb-4 fw-bold text-info">Available Flights</h2>
      <div className="row">
        {flights.map((flight) => (
          <div key={flight.id} className="col-md-4 mb-4">
            <div className="card flight-card shadow-lg">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <img src={flight.logo} alt="logo" className="airline-logo me-3" />
                  <h5 className="mb-0">{flight.airline}</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="fw-bold">{flight.from}</h6>
                    <small className="text-muted">Departure</small>
                  </div>
                  <div className="text-center">
                    <p className="mb-0 text-primary fw-semibold">{flight.time}</p>
                    <small>{flight.duration}</small>
                  </div>
                  <div>
                    <h6 className="fw-bold">{flight.to}</h6>
                    <small className="text-muted">Arrival</small>
                  </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-success fs-5">{flight.price}</span>
                  <button className="btn btn-primary rounded-pill">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightCards;