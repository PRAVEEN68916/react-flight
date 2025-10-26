import React from 'react'
import { useNavigate } from 'react-router-dom';
import FlightCards from './FlightCards';
import "bootstrap/dist/css/bootstrap.min.css";
import SkyCard from './SkyCard';
import image from './ImageFolder/bg.jpeg';
import image1 from './ImageFolder/flight.jpg';
import image2 from './ImageFolder/flight1.jpg';
import image3 from './ImageFolder/flight2.jpg';
import Contact from './Contact';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section
        className="hero py-5"
        style={{
          backgroundImage: `url(${image3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          position: "relative",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 1,
          }}
        ></div>

        {/* Content container ensures all text/buttons sit above overlay and are aligned */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "100%",
            padding: "6rem 5% 6rem 8%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontWeight: 700,
              fontFamily: "'Times New Roman', serif",
              fontSize: "4rem",
              lineHeight: 1.05,
              textAlign: "left",
            }}
          >
            Welcome to SkyBook ✈️
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: "1.3rem",
              color: "#e0e0e0",
              textAlign: "left",
            }}
          >
            SkyBook makes booking your next flight fast, easy, and affordable.
            Find the best deals from trusted airlines worldwide.
          </p>

          <div>
            <button
              onClick={() => navigate("/flights")}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "25px",
                border: "none",
                backgroundColor: "#00eaff",
                color: "#000",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(0, 234, 255, 0.4)",
              }}
            >
              Search Flights
            </button>
          </div>

          <div style={{
            marginTop: "7rem", maxWidth: "100%", textAlign: "right", display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }} >
            <h2 style={{ fontSize: "3.5rem", margin: "0 0 0.5rem 0" }}>
              Why Choose SkyBook?
            </h2>
            <ul
              style={{
                listStyleType: "none",
                paddingLeft: 0,
                margin: 0,
                fontSize: "1.3rem",
                textAlign: "left",
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

      <section className="bg-whitepy-5 px-6 md:px-16 lg:px-32" style={{ padding: "10rem", color: "#f1eeeeff", maxWidth: "900px", margin: "auto" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-4 fs-1">
            ✈️ About Our Flight Service
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Welcome to <span className="font-semibold">SkyFly</span> — your
            one-stop solution for booking, managing, and tracking flights across
            the globe. Our platform helps travelers compare flight prices, view
            real-time schedules, and enjoy a smooth booking experience.
          </p>

          <p className="text-white-700 text-lg leading-relaxed mb-6">
            With user-friendly search options and live flight updates, SkyFly is
            designed to make air travel planning faster, smarter, and stress-free.
            Whether you’re a frequent flyer or planning your first trip, our goal
            is to make your journey as comfortable as possible.
          </p>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-white-600 mb-2">
              🌍 Why Choose Us?
            </h3>
            <ul className="text-left text-white-700 space-y-2 text-sm-start">
              <li>✅ Compare flights from multiple airlines instantly</li>
              <li>✅ Get real-time flight status and updates</li>
              <li>✅ Easy online booking and cancellation</li>
              <li>✅ 24/7 customer support and travel assistance</li>
            </ul>
          </div>
        </div>
      </section>

      <FlightCards />

      <SkyCard />

      <Contact />


    </>
  );
};

export default Home
