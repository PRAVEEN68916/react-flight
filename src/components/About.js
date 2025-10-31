import React from 'react';

const About = () => {
  return (
    <div style={{ 
      marginTop: '100px', 
      padding: '2rem', 
      maxWidth: '900px', 
      margin: '100px auto',
      minHeight: '60vh',
    }}>
      <h2 style={{ 
        color: '#667eea', 
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
        marginBottom: '1.5rem',
        textAlign: 'center',
      }}>
        ✈️ About SkyBook
      </h2>
      
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '15px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      }}>
        <p style={{ 
          fontSize: 'clamp(1rem, 2vw, 1.2rem)', 
          lineHeight: '1.8', 
          color: '#333', 
          marginBottom: '1.5rem' 
        }}>
          Welcome to <strong>SkyBook</strong> – your one-stop solution for booking and managing 
          flights across the globe. Our platform helps travelers compare prices, view schedules, 
          and enjoy seamless booking experiences.
        </p>
        
        <p style={{ 
          fontSize: 'clamp(1rem, 2vw, 1.2rem)', 
          lineHeight: '1.8', 
          color: '#333', 
          marginBottom: '2rem' 
        }}>
          With user-friendly search options and live flight updates, SkyBook is designed to make 
          air travel planning faster, smarter, and stress-free. Whether you're a frequent flyer 
          or planning your first trip, our goal is to make your journey as comfortable as possible.
        </p>

        <div style={{
          background: '#f0f4ff',
          padding: '2rem',
          borderRadius: '15px',
          border: '2px solid #667eea',
        }}>
          <h3 style={{ 
            color: '#667eea', 
            marginBottom: '1.5rem',
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          }}>
            🌍 Why Choose Us?
          </h3>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            lineHeight: '2.2',
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              ✅ Compare flights from multiple airlines instantly
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              ✅ Get real-time flight status and updates
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              ✅ Easy online booking and cancellation
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              ✅ 24/7 customer support and travel assistance
            </li>
          </ul>
        </div>

        <div style={{
          marginTop: '2rem',
          padding: '1.5rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '15px',
          color: 'white',
          textAlign: 'center',
        }}>
          <h4 style={{ marginBottom: '0.5rem', fontSize: '1.3rem' }}>Our Mission</h4>
          <p style={{ margin: 0, lineHeight: '1.6' }}>
            To make air travel accessible, affordable, and hassle-free for everyone around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;