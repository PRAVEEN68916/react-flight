import React from 'react';

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
              {['Home', 'About Us', 'Flights', 'Contact'].map(link => (
                <li key={link} style={{ marginBottom: '0.5rem' }}>
                  <a 
                    href="#" 
                    style={{ 
                      color: '#ccc', 
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#00eaff'}
                    onMouseLeave={(e) => e.target.style.color = '#ccc'}
                  >
                    {link}
                  </a>
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
                {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map(social => (
                  <a
                    key={social}
                    style={{
                      color: '#ccc',
                      fontSize: '1.3rem',
                      transition: 'all 0.3s',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#00eaff';
                      e.target.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#ccc';
                      e.target.style.transform = 'translateY(0)';
                    }}
                    title={social}
                  >
                    {social === 'Facebook' && '📘'}
                    {social === 'Instagram' && '📷'}
                    {social === 'Twitter' && '🐦'}
                    {social === 'LinkedIn' && '💼'}
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
                style={{ color: '#aaa', textDecoration: 'none' }}
                onMouseEnter={(e) => e.target.style.color = '#00eaff'}
                onMouseLeave={(e) => e.target.style.color = '#aaa'}
              >
                Privacy Policy
              </a>
              <a 
                style={{ color: '#aaa', textDecoration: 'none' }}
                onMouseEnter={(e) => e.target.style.color = '#00eaff'}
                onMouseLeave={(e) => e.target.style.color = '#aaa'}
              >
                Terms of Service
              </a>
              <a 
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