import React from 'react'

const Home = () => {
  return (
    <section style={{ padding: "3rem", color: "#fff", maxWidth: "900px", margin: "auto" }}>
      <h1>Welcome to SkyBook ✈️</h1>
      <p>
        SkyBook makes booking your next flight fast, easy, and affordable. Find the best deals from trusted airlines worldwide.
      </p>
      <button
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
  );
};

export default Home
