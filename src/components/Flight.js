import React, { useState } from "react";

// Simple mock search function. Replace with a real API call as needed.
function fetchMockFlights({ from, to, departDate, returnDate, passengers }) {
  return new Promise((resolve, reject) => {
    // basic validation to simulate server-side check
    if (!from || !to || !departDate) {
      return setTimeout(() => reject(new Error("Missing required fields")), 500);
    }

    setTimeout(() => {
      const flights = [];
      for (let i = 1; i <= 5; i++) {
        flights.push({
          id: `FL-${Date.now()}-${i}`,
          airline: ["SkyWay", "AeroFast", "Nimbus"][i % 3],
          price: (100 + i * 50) * passengers,
          depart: `${departDate}T0${7 + i}:00`,
          arrive: `${departDate}T1${0 + i}:30`,
          duration: `${2 + i}h ${15 + i}m`,
          from,
          to,
        });
      }
      resolve(flights);
    }, 900);
  });
}

const Flights = () => {
  const [form, setForm] = useState({
    from: "",
    to: "",
    departDate: "",
    returnDate: "",
    passengers: 1,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.type === "number" ? Number(e.target.value) : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResults([]);

    // basic validation
    if (!form.from || !form.to || !form.departDate) {
      setError("Please fill in From, To and Depart Date.");
      return;
    }

    setLoading(true);
    try {
      // Replace fetchMockFlights with a real fetch to a flights API if you have one
      const flights = await fetchMockFlights(form);
      setResults(flights);
    } catch (err) {
      setError(err.message || "Failed to fetch flights");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ padding: "3rem", color: "#222", maxWidth: "900px", margin: "2rem auto", background: "#fff", borderRadius: 8 }}>
      <h1 style={{ marginBottom: "1rem" }}>Search Flights</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
        <input
          type="text"
          name="from"
          placeholder="From"
          value={form.from}
          onChange={handleChange}
          required
          style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ddd", flex: "1 1 150px" }}
        />
        <input
          type="text"
          name="to"
          placeholder="To"
          value={form.to}
          onChange={handleChange}
          required
          style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ddd", flex: "1 1 150px" }}
        />
        <input
          type="date"
          name="departDate"
          value={form.departDate}
          onChange={handleChange}
          required
          style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ddd" }}
        />
        <input
          type="date"
          name="returnDate"
          value={form.returnDate}
          onChange={handleChange}
          style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ddd" }}
        />
        <input
          type="number"
          name="passengers"
          min="1"
          max="10"
          value={form.passengers}
          onChange={handleChange}
          required
          style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ddd", width: 120 }}
        />

        <button
          type="submit"
          style={{
            padding: "0.75rem 1.25rem",
            borderRadius: "25px",
            border: "none",
            backgroundColor: "#00eaff",
            color: "#000",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(0, 234, 255, 0.4)",
          }}
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && <div style={{ marginTop: "1rem", color: "#b00020" }}>{error}</div>}

      <div style={{ marginTop: "1.5rem" }}>
        {results.length > 0 ? (
          <div>
            <h2>Results ({results.length})</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {results.map((f) => (
                <li key={f.id} style={{ padding: "1rem", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontWeight: "600" }}>{f.airline} — {f.from} → {f.to}</div>
                    <div style={{ color: "#666", fontSize: 14 }}>{f.depart} • {f.arrive} • {f.duration}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontWeight: 700 }}>${f.price.toFixed(2)}</div>
                    <div style={{ fontSize: 12, color: "#666" }}>{form.passengers} passenger{form.passengers > 1 ? 's' : ''}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div style={{ marginTop: "1rem", color: "#666" }}>{!loading && "No results yet — fill the form and search."}</div>
        )}
      </div>
    </section>
  );
};

export default Flights;