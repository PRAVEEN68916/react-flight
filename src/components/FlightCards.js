import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GlobalCSS/FlightCards.css";

const FlightCards = () => {
  const navigate = useNavigate();

  const flights = [
    { id: 1, airline: "Air India", from: "Delhi (DEL)", to: "Mumbai (BOM)", time: "08:00 AM - 10:15 AM", duration: "2h 15m", price: "₹4,999" },
    { id: 2, airline: "IndiGo", from: "Hyderabad (HYD)", to: "Bangalore (BLR)", time: "09:30 AM - 10:45 AM", duration: "1h 15m", price: "₹2,999" },
    { id: 3, airline: "Vistara", from: "Chennai (MAA)", to: "Delhi (DEL)", time: "11:00 AM - 01:30 PM", duration: "2h 30m", price: "₹5,499" },
  ];

  const handleBookNow = (flight) => {
    navigate("/book-flight", { state: { flight } });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-start mb-4 fw-bold text-info">Available Flights</h2>
      <div className="row">
        {flights.map((flight) => (
          <div key={flight.id} className="col-md-4 mb-4">
            <div className="card flight-card shadow-lg">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
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
                  <button
                    className="btn btn-primary rounded-pill"
                    onClick={() => handleBookNow(flight)}
                  >
                    Book Now
                  </button>
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
