import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      color: 'white',
      padding: '3rem 2rem 1.5rem',
      marginTop: 'auto',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem',
        }}>
          {/* Brand Section */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2rem' }}>✈️</span>
              <span style={{ color: 'aqua', fontSize: '1.5rem', fontWeight: 'bold' }}>Sky</span>
              <span style={{ color: 'yellow', fontSize: '1.5rem', fontWeight: 'bold' }}>Book</span>
            </div>
            <p style={{ 
              margin: '0 0 1rem 0', 
              color: '#aaa', 
              lineHeight: '1.6',
              fontSize: '0.95rem',
            }}>
              Your trusted partner for finding the best flight deals worldwide. 
              Making travel dreams come true, one flight at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ 
              color: '#00eaff', 
              marginBottom: '1rem',
              fontSize: '1.1rem',
            }}>
              Quick Links
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
            }}>
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Flights', to: '/flight' },
                { label: 'Contact', to: '/contact' },
              ].map(({ label, to }) => (
                <li key={label} style={{ marginBottom: '0.5rem' }}>
                  <Link
                    to={to}
                    style={{
                      color: '#ccc',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#00eaff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#ccc'}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ 
              color: '#00eaff', 
              marginBottom: '1rem',
              fontSize: '1.1rem',
            }}>
              Our Services
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
            }}>
              {['Flight Booking', 'Price Comparison', '24/7 Support', 'Travel Insurance'].map(service => (
                <li key={service} style={{ marginBottom: '0.5rem', color: '#ccc' }}>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ 
              color: '#00eaff', 
              marginBottom: '1rem',
              fontSize: '1.1rem',
            }}>
              Get in Touch
            </h4>
            <div style={{ color: '#ccc', lineHeight: '2' }}>
              <p style={{ margin: '0 0 0.5rem 0' }}>📞 +1 234 567 890</p>
              <p style={{ margin: '0 0 0.5rem 0' }}>✉️ support@skybook.com</p>
              <p style={{ margin: '0 0 1rem 0' }}>🏢 123 Flight St, SkyCity</p>
              
              {/* Social Media Icons */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                {[
                  { name: 'Facebook', url: 'https://www.facebook.com/' },
                  { name: 'Instagram', url: 'https://www.instagram.com/' },
                  { name: 'Twitter', url: 'https://twitter.com/' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/' },
                ].map(({ name, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#ccc',
                      fontSize: '1.3rem',
                      transition: 'all 0.3s',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#00eaff';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#ccc';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    title={name}
                  >
                    {name === 'Facebook' && '📘'}
                    {name === 'Instagram' && '📷'}
                    {name === 'Twitter' && '🐦'}
                    {name === 'LinkedIn' && '💼'}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          marginTop: '2rem',
          paddingTop: '1.5rem',
        }}>
          {/* Bottom Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.9rem',
            color: '#aaa',
          }}>
            <p style={{ margin: 0 }}>
              © {new Date().getFullYear()} SkyBook. All Rights Reserved.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a 
                href="https://www.facebook.com/" 
                style={{ color: '#aaa', textDecoration: 'none' }}
                onMouseEnter={(e) => e.target.style.color = '#00eaff'}
                onMouseLeave={(e) => e.target.style.color = '#aaa'}
              >
                Privacy Policy
              </a>
              <a 
                href="https://www.instagram.com/accounts/login/?hl=en" 
                style={{ color: '#aaa', textDecoration: 'none' }}
                onMouseEnter={(e) => e.target.style.color = '#00eaff'}
                onMouseLeave={(e) => e.target.style.color = '#aaa'}
              >
                Terms of Service
              </a>
              <a 
                href="https://x.com/?lang=en" 
                style={{ color: '#aaa', textDecoration: 'none' }}
                onMouseEnter={(e) => e.target.style.color = '#00eaff'}
                onMouseLeave={(e) => e.target.style.color = '#aaa'}
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;