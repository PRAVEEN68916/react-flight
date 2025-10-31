import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div style={{
      marginTop: '100px',
      padding: '2rem',
      maxWidth: '800px',
      margin: '100px auto',
      minHeight: '70vh',
    }}>
      <h2 style={{ 
        color: '#667eea', 
        marginBottom: '1.5rem', 
        textAlign: 'center',
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
      }}>
        📧 Contact Us
      </h2>
      
      <p style={{
        textAlign: 'center',
        color: '#666',
        marginBottom: '2rem',
        fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
      }}>
        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1rem',
          background: 'white',
          padding: '2rem',
          borderRadius: '15px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',   
        }}>
          <div>
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
              placeholder="Enter your name"
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

          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              fontWeight: '600',
              color: '#333',
            }}>
              Email Address *
            </label>
            <input
              type="email"
              placeholder="your.email@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
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
              Subject *
            </label>
            <input
              type="text"
              placeholder="How can we help you?"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
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
              Message *
            </label>
            <textarea
              placeholder="Tell us more about your inquiry..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows="6"
              required
              style={{ 
                width: '100%',
                padding: '0.75rem', 
                borderRadius: '10px', 
                border: '1px solid #ddd', 
                fontSize: '1rem', 
                resize: 'vertical',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '1rem',
              background: 'linear-gradient(90deg, #667eea, #764ba2)',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'transform 0.2s',
              marginTop: '0.5rem',
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Send Message
          </button>
        </form>
      ) : (
        <div style={{
          background: 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)',
          color: '#155724',
          padding: '3rem 2rem',
          borderRadius: '15px',
          textAlign: 'center',
          fontSize: '1.2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
          <strong>Message sent successfully!</strong>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '1rem' }}>
            We'll get back to you as soon as possible.
          </p>
        </div>
      )}

      {/* Contact Information */}
      <div style={{
        marginTop: '2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
      }}>
        <div style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: '15px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📞</div>
          <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Phone</h3>
          <p style={{ margin: 0, color: '#666' }}>+1 234 567 890</p>
        </div>

        <div style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: '15px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✉️</div>
          <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Email</h3>
          <p style={{ margin: 0, color: '#666' }}>support@skybook.com</p>
        </div>

        <div style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: '15px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏢</div>
          <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Office</h3>
          <p style={{ margin: 0, color: '#666' }}>123 Flight St, SkyCity</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;