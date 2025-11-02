import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';

const BookingFlight = ({ setCurrentPage }) => {
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({ 
    name: '', 
    mobile: '', 
    from: '', 
    to: '', 
    date: '', 
    passengers: 1 
  });
  const [booking, setBooking] = useState(null);

  // ✅ Redirect to login if user is not logged in
  useEffect(() => {
    if (!user) {
      alert('Please login to book a flight');
      setCurrentPage('login');
    }
  }, [user, setCurrentPage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = { 
      ...form, 
      ticketId: 'SKY-' + Math.floor(Math.random() * 1000000),
      bookingDate: new Date().toLocaleDateString(),
    };
    setBooking(newBooking);
  };

  if (!user) return null;

  return (
    <div style={{
      marginTop: '100px',
      padding: '2rem',
      maxWidth: '900px',
      margin: '100px auto',
      minHeight: '70vh',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ 
          color: '#667eea', 
          marginBottom: '0.5rem',
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
        }}>
          ✈️ Book Your Flight
        </h2>
        <p style={{ color: '#666', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)' }}>
          Complete the form below to book your ticket
        </p>
      </div>

      {!booking ? (
        <form onSubmit={handleSubmit} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          background: 'white',
          padding: '2rem',
          borderRadius: '15px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }}>
          {/* --- Input Fields --- */}
          {[
            { label: "Full Name *", name: "name", placeholder: "Enter your full name", type: "text" },
            { label: "Mobile Number *", name: "mobile", placeholder: "+91 98765 43210", type: "tel" },
            { label: "From *", name: "from", placeholder: "Departure City (e.g., DEL)", type: "text" },
            { label: "To *", name: "to", placeholder: "Destination City (e.g., BOM)", type: "text" },
          ].map((f) => (
            <div key={f.name}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#333' }}>
                {f.label}
              </label>
              <input
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.name]}
                onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                required
                style={{ width: '100%', padding: '0.75rem', borderRadius: '10px', border: '1px solid #ddd' }}
              />
            </div>
          ))}

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#333' }}>
              Travel Date *
            </label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
              min={new Date().toISOString().split('T')[0]}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '10px', border: '1px solid #ddd' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#333' }}>
              Passengers *
            </label>
            <input
              type="number"
              min="1"
              max="15"
              value={form.passengers}
              onChange={(e) => setForm({ ...form, passengers: Number(e.target.value) })}
              required
              style={{ width: '100%', padding: '0.75rem', borderRadius: '10px', border: '1px solid #ddd' }}
            />
          </div>

          <div style={{ gridColumn: '1 / -1' }}>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '1rem',
                background: 'linear-gradient(90deg, #667eea, #764ba2)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                cursor: 'pointer',
              }}
            >
              Confirm Booking
            </button>
          </div>
        </form>
      ) : (
        // ✅ Confirmation Card
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '15px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)',
            padding: '1.5rem',
            borderRadius: '10px',
            marginBottom: '2rem',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>✅</div>
            <h3 style={{ color: '#155724' }}>Booking Confirmed!</h3>
            <p style={{ color: '#155724' }}>Your ticket has been successfully booked</p>
          </div>

          <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '10px' }}>
            {Object.entries({
              "Ticket ID": booking.ticketId,
              "Passenger Name": booking.name,
              "Route": `${booking.from} ✈️ ${booking.to}`,
              "Travel Date": booking.date,
              "Passengers": booking.passengers,
              "Contact": booking.mobile,
              "Booking Date": booking.bookingDate,
            }).map(([label, value]) => (
              <div key={label} style={{
                background: 'white',
                marginBottom: '0.75rem',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <strong style={{ color: '#667eea' }}>{label}:</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setBooking(null)}
              style={{
                flex: 1,
                padding: '0.75rem 1.5rem',
                background: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 'bold',
                minWidth: '200px',
              }}
            >
              Book Another Flight
            </button>
            <button
              onClick={() => window.print()}
              style={{
                flex: 1,
                padding: '0.75rem 1.5rem',
                background: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 'bold',
                minWidth: '200px',
              }}
            >
              Print Ticket
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingFlight;
