import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section style={{ padding: "3rem", color: "#fff", maxWidth: "900px", margin: "auto" }}>
        <h1 style={{ marginTop: "70px" }} >Welcome to SkyBook ✈️</h1>
        <p>
          SkyBook makes booking your next flight fast, easy, and affordable. Find the best deals from trusted airlines worldwide.
        </p>
        <button onClick={() => navigate('/flights')}
          style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "25px",
            border: "none",
            backgroundColor: "#00eaff",
            color: "#000",
            fontWeight: "bold",
            cursor: "pointer",
            marginTop: "1rem",
            boxShadow: "0 4px 15px rgba(0, 234, 255, 0.4)"
          }}
        >
          Search Flights
        </button>
        <div style={{ marginTop: "3rem" }}>
          <h2>Why Choose SkyBook?</h2>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            <li>🛫 Best prices guaranteed</li>
            <li>⏰ 24/7 customer support</li>
            <li>📱 Easy mobile booking</li>
            <li>✅ Secure and reliable</li>
          </ul>
        </div>
      </section>

      <section className="bg-whitepy-5 px-6 md:px-16 lg:px-32" style={{ padding: "10rem", color: "#f1eeeeff", maxWidth: "900px", margin: "auto" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
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
            <ul className="text-left text-white-700 space-y-2">
              <li>✅ Compare flights from multiple airlines instantly</li>
              <li>✅ Get real-time flight status and updates</li>
              <li>✅ Easy online booking and cancellation</li>
              <li>✅ 24/7 customer support and travel assistance</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home
