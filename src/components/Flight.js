import React, { useState } from 'react';

const Flights = () => {
  const [form, setForm] = useState({
    from: '',
    to: '',
    date: '',
    passengers: 1
  });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const mockFlights = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        airline: ['SkyWay Airlines', 'AeroFast', 'Nimbus Air', 'CloudJet', 'Horizon Airways'][i % 5],
        price: (100 + i * 50) * form.passengers,
        departTime: `${7 + i}:${i === 0 ? '00' : i * 15} AM`,
        arriveTime: `${9 + i}:${i === 0 ? '30' : (i * 15) + 30} AM`,
        duration: `${2 + Math.floor(i / 2)}h ${30 + (i % 2) * 15}m`,
        from: form.from,
        to: form.to,
        stops: i % 3 === 0 ? 'Non-stop' : `${i % 2} Stop${i % 2 > 1 ? 's' : ''}`,
      }));
      setResults(mockFlights);
      setLoading(false);
    }, 1000);
  };

  return (
     <div style={{background: 'linear-gradient(45deg,black, #1a1a2e, #16213e, #0f3460)'}}>
    <div style={{
      marginTop: '100px',
      padding: '2rem',
      marginTop:'7rem',
      maxWidth: '1100px',
      margin: 'auto',
      minHeight: '70vh',
    }}>
      <h2 style={{ 
        color: '#667eea', 
        marginBottom: '2rem', 
        marginTop:'7rem',
        textAlign: 'center',
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
      }}>
        ✈️ Search Flights
      </h2>
      
      {/* Search Form */}
      <form 
        onSubmit={handleSearch} 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
          gap: '1rem', 
          marginBottom: '2rem',
          background: 'white',
          padding: '2rem',
          borderRadius: '15px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }}
      >
        <input
          type="text"
          placeholder="From (e.g., NYC)"
          value={form.from}
          onChange={(e) => setForm({ ...form, from: e.target.value })}
          required
          style={{ 
            padding: '0.75rem', 
            borderRadius: '10px', 
            border: '1px solid #ddd',
            fontSize: '1rem',
          }}
        />
        <input
          type="text"
          placeholder="To (e.g., LAX)"
          value={form.to}
          onChange={(e) => setForm({ ...form, to: e.target.value })}
          required
          style={{ 
            padding: '0.75rem', 
            borderRadius: '10px', 
            border: '1px solid #ddd',
            fontSize: '1rem',
          }}
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
          min={new Date().toISOString().split('T')[0]}
          style={{ 
            padding: '0.75rem', 
            borderRadius: '10px', 
            border: '1px solid #ddd',
            fontSize: '1rem',
          }}
        />
        <input
          type="number"
          placeholder="Passengers"
          min="1"
          max="10"
          value={form.passengers}
          onChange={(e) => setForm({ ...form, passengers: Number(e.target.value) })}
          style={{ 
            padding: '0.75rem', 
            borderRadius: '10px', 
            border: '1px solid #ddd',
            fontSize: '1rem',
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '0.75rem',
            background: loading ? '#ccc' : 'linear-gradient(90deg, #667eea, #764ba2)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontWeight: 'bold',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize: '1rem',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => !loading && (e.target.style.transform = 'scale(1.02)')}
          onMouseLeave={(e) => !loading && (e.target.style.transform = 'scale(1)')}
        >
          {loading ? 'Searching...' : 'Search Flights'}
        </button>
      </form>

      {/* Loading State */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '2rem', color: '#667eea' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✈️</div>
          <p>Finding the best flights for you...</p>
        </div>
      )}

      {/* Search Results */}
      {!loading && results.length > 0 && (
        <div>
          <h3 style={{ 
            color: '#333', 
            marginBottom: '1.5rem',
            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
          }}>
            Available Flights ({results.length})
          </h3>
          {results.map(flight => (
            <div key={flight.id} style={{
              padding: '1.5rem',
              background: 'white',
              borderRadius: '15px',
              marginBottom: '1rem',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              alignItems: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
            }}
            >
              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>{flight.airline}</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>{flight.stops}</p>
              </div>
              <div>
                <p style={{ margin: '0 0 0.25rem 0', fontWeight: 'bold', color: '#667eea' }}>
                  {flight.from} → {flight.to}
                </p>
                <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                  {flight.departTime} - {flight.arriveTime}
                </p>
                <p style={{ margin: 0, color: '#999', fontSize: '0.85rem' }}>
                  Duration: {flight.duration}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#667eea', marginBottom: '0.5rem' }}>
                  ${flight.price}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>
                  {form.passengers} passenger{form.passengers > 1 ? 's' : ''}
                </div>
                <button style={{
                  padding: '0.5rem 1.5rem',
                  background: '#00eaff',
                  border: 'none',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {!loading && results.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          background: 'white',
          borderRadius: '15px',
          color: '#666',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
          <p>Enter your travel details and search for available flights</p>
        </div>
      )}
    </div>
    </div>
    
  );
};

export default Flights;