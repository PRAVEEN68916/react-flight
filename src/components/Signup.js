import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Signup = ({ setCurrentPage }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      signup(email, password, name);
      setMessage('✅ Signup Successful! Redirecting to login...');
      setTimeout(() => {
        if (typeof setCurrentPage === 'function') {
          setCurrentPage('login');
        } else {
          navigate('/login');
        }
      }, 1500);
    } catch (error) {
      setMessage('❌ ' + error.message);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(45deg,black, #1a1a2e, #16213e, #0f3460)',
      padding: '6rem 1rem 2rem',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        background: 'white',
        borderRadius: '20px',
        padding: '2rem',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      }}>
        <h3 style={{ textAlign: 'center', color: '#f5576c', marginBottom: '1.5rem', fontWeight: 'bold' }}>
          📝 Create Account
        </h3>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Password</label>
            <input
              type="password"
              placeholder="Create a password (min 6 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6"
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

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'linear-gradient(90deg, #f093fb, #f5576c)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Sign Up
          </button>
        </form>

        {message && (
          <div style={{
            marginTop: '1rem',
            padding: '0.75rem',
            borderRadius: '10px',
            textAlign: 'center',
            background: message.includes('Successful') ? '#d4edda' : '#f8d7da',
            color: message.includes('Successful') ? '#155724' : '#721c24',
          }}>
            {message}
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <small>
            Already have an account?{' '}
            <button
              onClick={() => {
                if (typeof setCurrentPage === 'function') setCurrentPage('login');
                else navigate('/login');
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#f5576c',
                fontWeight: 'bold',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Login
            </button>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Signup;