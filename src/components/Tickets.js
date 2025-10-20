import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BookingFlight = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [booking, setBooking] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooking({
      name,
      email,
      mobile,
      from,
      to,
      date,
      passengers,
      ticketId: "TKT-" + Math.floor(Math.random() * 1000000),
    });
  };

return (
  <>
  <div className="container mt-5 mb-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary">✈️ Flight Ticket Booking</h2>
        <p className="text-secondary">
          Affordable flight booking for every middle-class family
        </p>
      </div>

      <div className="card shadow-lg border-0 p-4">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label fw-semibold">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* <div className="col-md-6">
              <label className="form-label fw-semibold">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div> */}

            <div className="col-md-6">
              <label className="form-label fw-semibold">Mobile Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>

            <div className="col-md-3">
              <label className="form-label fw-semibold">From</label>
              <input
                type="text"
                className="form-control"
                placeholder="City of Departure"
                value={from}
                onChange={(e) => setFrom(e.target.value.toUpperCase())}
                required
              />
            </div>

            <div className="col-md-3">
              <label className="form-label fw-semibold">To</label>
              <input
                type="text"
                className="form-control"
                placeholder="Destination City"
                value={to}
                onChange={(e) => setTo(e.target.value.toUpperCase())}
                required
              />
            </div>

            <div className="col-md-3">
              <label className="form-label fw-semibold">Travel Date</label>
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div className="col-md-3">
              <label className="form-label fw-semibold">Passengers</label>
              <input
                type="number"
                className="form-control"
                min="1"
                max="6"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary px-5 py-2 shadow-sm">
              Book Ticket
            </button>
          </div>
        </form>
      </div>

      {booking && (
        <div className="card mt-5 border-success shadow-sm p-4">
          <h4 className="text-success fw-bold mb-3">Booking Confirmed ✅</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Ticket ID:</strong> {booking.ticketId}
            </li>
            <li className="list-group-item">
              <strong>Name:</strong> {booking.name}
            </li>
            <li className="list-group-item">
              <strong>From:</strong> {booking.from} → <strong>To:</strong>{" "}
              {booking.to}
            </li>
            <li className="list-group-item">
              <strong>Date:</strong> {booking.date}
            </li>
            <li className="list-group-item">
              <strong>Passengers:</strong> {booking.passengers}
            </li>
            <li className="list-group-item">
              <strong>Contact:</strong> {booking.mobile} | {booking.email}
            </li>
          </ul>
          <div className="mt-3 text-end">
            <button
              className="btn btn-outline-secondary"
              onClick={() => setBooking(null)}
            >
              Book Another Flight
            </button>
          </div>
        </div>
      )}
    </div>
  </>
  );
};

export default BookingFlight;