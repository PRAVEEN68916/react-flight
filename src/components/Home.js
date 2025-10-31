import React from 'react';
import { useNavigate } from 'react-router-dom';
import FlightCards from './FlightCards';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkyCard from './SkyCard';
import image1 from './ImageFolder/flight.jpg';
import image3 from './ImageFolder/flight2.jpg';
import Contact from './Contact';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
        className="hero text-white d-flex align-items-center"
        style={{
          backgroundImage: `url(${image3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '90vh',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            // backgroundColor: 'rgba(0, 0, 0, 0.55)',
            zIndex: 0,
          }}
        ></div>

        <div
          className="container position-relative z-1 text-start"
          style={{
            maxWidth: '900px',
            padding: '4rem 1rem',
          }}
        >
          <h1
            className="fw-bold mb-3"
            style={{
              fontFamily: "'Times New Roman', serif",
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              textShadow: '0 5px 10px rgba(0,0,0,0.9)',
            }}
          >
            Welcome to SkyBook ✈️
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              color: '#e0e0e0',
              marginBottom: '1.5rem',
            }}
          >
            SkyBook makes booking your next flight fast, easy, and affordable.
            Find the best deals from trusted airlines worldwide.
          </p>

          <button
            onClick={() => navigate('/flights')}
            className="btn btn-info fw-bold text-dark px-4 py-2 shadow-sm"
            style={{ borderRadius: '25px' }}
          >
            Search Flights
          </button>

          <div
            className="mt-5 pt-4 text-md-end text-center"
            style={{
              color: 'white',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 5vw, 3rem)',
                textShadow: '0 5px 10px rgba(0,0,0,0.9)',
                 fontSize: 'clamp(2rem, 6vw, 4rem)',
              }}
            >
              Why Choose SkyBook?
            </h2>
            <ul
              className="list-unstyled mt-3"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                textAlign: 'left',
                margin: '0 auto',
                maxWidth: '400px',
              }}
            >
              <li>🛫 Best prices guaranteed</li>
              <li>⏰ 24/7 customer support</li>
              <li>📱 Easy mobile booking</li>
              <li>✅ Secure and reliable</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section
        className="text-white py-5"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.55)',
            zIndex: 0,
          }}
        ></div>

        <div className="container position-relative z-1 text-center text-md-start">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2
                className="fw-bold mb-4 text-info"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontFamily: "'Times New Roman', serif",
                }}
              >
                ✈️ About Our Flight Service
              </h2>

              <p
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  lineHeight: 1.6,
                }}
              >
                Welcome to <span className="fw-semibold">SkyFly</span> — your
                one-stop solution for booking, managing, and tracking flights
                across the globe. Compare flight prices, view real-time
                schedules, and enjoy a smooth booking experience.
              </p>

              <p
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  lineHeight: 1.6,
                }}
              >
                With user-friendly search options and live flight updates,
                SkyFly is designed to make air travel planning faster, smarter,
                and stress-free. Whether you’re a frequent flyer or planning
                your first trip, we make your journey as comfortable as
                possible.
              </p>

              <div
                className="p-4 mt-4"
                style={{
                  border: '2px solid #00eaff',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                }}
              >
                <h3
                  className="fw-bold text-info mb-3"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    textDecoration: 'underline',
                  }}
                >
                  🌍 Why Choose Us?
                </h3>
                <ul
                  className="list-unstyled"
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    textAlign: 'left',
                    margin: '0 auto',
                    maxWidth: '600px',
                  }}
                >
                  <li>✅ Compare flights from multiple airlines instantly</li>
                  <li>✅ Get real-time flight status and updates</li>
                  <li>✅ Easy online booking and cancellation</li>
                  <li>✅ 24/7 customer support and travel assistance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPONENTS SECTION ===== */}
      <FlightCards />
      <SkyCard />
      <Contact />
    </>
  );
};

export default Home;
