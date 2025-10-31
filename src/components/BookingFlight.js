import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const BookingFlight = ({ setCurrentPage }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ 
    name: '', 
    mobile: '', 
    from: '', 
    to: '', 
    date: '', 
    passengers: 1 
  });
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    if (!user) {
      // Prefer client-side navigation with react-router. If a parent passed
      // a setCurrentPage callback (legacy), call it as a fallback.
      alert('Please login to book a flight');
      if (typeof setCurrentPage === 'function') {
        setCurrentPage('login');
      } else {
        navigate('/login');
      }
    }
  }, [user, setCurrentPage, navigate]);

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
          <div style={{ gridColumn: 'span 1' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              fontWeight: '600',
              color: '#333',
            }}>
              Full Name *
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              style={{ 
                width: '100%',
                padding: '0.75rem', 
                borderRadius: '10px', 
                border: '1px solid #ddd',
                fontSize: '1rem',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div style={{ gridColumn: 'span 1' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              fontWeight: '600',
              color: '#333',
            }}>
              Mobile Number *
            </label>
            <input
              type="tel"
              placeholder="+1 234 567 8900"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              required
              style={{ 
                width: '100%',
                padding: '0.75rem', 
                borderRadius: '10px', 
                border: '1px solid #ddd',
                fontSize: '1rem',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              fontWeight: '600',
              color: '#333',
            }}>
              From *
            </label>
            <input
              type="text"
              placeholder="Departure City (e.g., NYC)"
              value={form.from}
              onChange={(e) => setForm({ ...form, from: e.target.value.toUpperCase() })}
              required
              style={{ 
                width: '100%',
                padding: '0.75rem', 
                borderRadius: '10px', 
                border: '1px solid #ddd',
                fontSize: '1rem',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              fontWeight: '600',
              color: '#333',
            }}>
              To *
            </label>
            <input
              type="text"
              placeholder="Destination City (e.g., LAX)"
              value={form.to}
              onChange={(e) => setForm({ ...form, to: e.target.value.toUpperCase() })}
              required
              style={{ 
                width: '100%',
                padding: '0.75rem', 
                borderRadius: '10px', 
                border: '1px solid #ddd',
                fontSize: '1rem',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              fontWeight: '600',
              color: '#333',
            }}>
              Travel Date *
            </label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
              min={new Date().toISOString().split('T')[0]}
              style={{ 
                width: '100%',
                padding: '0.75rem', 
                borderRadius: '10px', 
                border: '1px solid #ddd',
                fontSize: '1rem',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              fontWeight: '600',
              color: '#333',
            }}>
              Passengers *
            </label>
            <input
              type="number"
              placeholder="Number of passengers"
              min="1"
              max="15"
              value={form.passengers}
              onChange={(e) => setForm({ ...form, passengers: Number(e.target.value) })}
              required
              style={{ 
                width: '100%',
                padding: '0.75rem', 
                borderRadius: '10px', 
                border: '1px solid #ddd',
                fontSize: '1rem',
                boxSizing: 'border-box',
              }}
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
                transition: 'transform 0.2s',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              Confirm Booking
            </button>
          </div>
        </form>
      ) : (
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
            <h3 style={{ color: '#155724', margin: '0 0 0.5rem 0' }}>Booking Confirmed!</h3>
            <p style={{ color: '#155724', margin: 0 }}>Your ticket has been successfully booked</p>
          </div>

          <div style={{
            display: 'grid',
            gap: '1rem',
            padding: '1rem',
            background: '#f8f9fa',
            borderRadius: '10px',
          }}>
            <div style={{ 
              padding: '0.75rem',
              background: 'white',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <strong style={{ color: '#667eea' }}>Ticket ID:</strong>
              <span style={{ fontFamily: 'monospace', fontSize: '1.1rem' }}>{booking.ticketId}</span>
            </div>

            <div style={{ 
              padding: '0.75rem',
              background: 'white',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <strong style={{ color: '#667eea' }}>Passenger Name:</strong>
              <span>{booking.name}</span>
            </div>

            <div style={{ 
              padding: '0.75rem',
              background: 'white',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <strong style={{ color: '#667eea' }}>Route:</strong>
              <span>{booking.from} ✈️ {booking.to}</span>
            </div>

            <div style={{ 
              padding: '0.75rem',
              background: 'white',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <strong style={{ color: '#667eea' }}>Travel Date:</strong>
              <span>{booking.date}</span>
            </div>

            <div style={{ 
              padding: '0.75rem',
              background: 'white',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <strong style={{ color: '#667eea' }}>Passengers:</strong>
              <span>{booking.passengers} passenger{booking.passengers > 1 ? 's' : ''}</span>
            </div>

            <div style={{ 
              padding: '0.75rem',
              background: 'white',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <strong style={{ color: '#667eea' }}>Contact:</strong>
              <span>{booking.mobile}</span>
            </div>

            <div style={{ 
              padding: '0.75rem',
              background: 'white',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <strong style={{ color: '#667eea' }}>Booking Date:</strong>
              <span>{booking.bookingDate}</span>
            </div>
          </div>

          <div style={{ 
            marginTop: '2rem', 
            display: 'flex', 
            gap: '1rem',
            flexWrap: 'wrap',
          }}>
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
                fontSize: '1rem',
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
                fontSize: '1rem',
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