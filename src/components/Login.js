import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (typeof setCurrentPage === 'function') {
        setCurrentPage('home');
      } else {
        navigate('/');
      }
    }
  }, [user, setCurrentPage, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      setMessage('✅ Login Successful! Redirecting...');
      setTimeout(() => {
        if (typeof setCurrentPage === 'function') {
          setCurrentPage('home');
        } else {
          navigate('/');
        }
      }, 1000);
    } else {
      setMessage('❌ Invalid Email or Password!');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
        <h3 style={{ textAlign: 'center', color: '#667eea', marginBottom: '1.5rem', fontWeight: 'bold' }}>
          🔐 Login to Continue
        </h3>

        <form onSubmit={handleSubmit}>
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'linear-gradient(90deg, #667eea, #764ba2)',
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
            Login
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
            Don't have an account?{' '}
            <button
              onClick={() => {
                if (typeof setCurrentPage === 'function') setCurrentPage('signup');
                else navigate('/Signup');
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#667eea',
                fontWeight: 'bold',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Sign Up
            </button>
          </small>
        </div>

        <div style={{ 
          marginTop: '1.5rem', 
          padding: '0.75rem', 
          background: '#f0f4ff', 
          borderRadius: '8px',
          fontSize: '0.85rem',
          color: '#666'
        }}>
          <strong>Test Account:</strong><br />
          Email: test@example.com<br />
          Password: 123456
        </div>
      </div>
    </div>
  );
};

export default Login;