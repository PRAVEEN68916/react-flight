import React, { useState } from "react";

const Flights = () => {
  const [form, setForm] = useState({
    from: "",
    to: "",
    departDate: "",
    returnDate: "",
    passengers: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Searching flights from ${form.from} to ${form.to}`);
    // Add real flight search logic here
  };

  return (
    <section style={{ padding: "6rem", color: "#fff", maxWidth: "600px", margin: "auto" }}>
      <h1>Search Flights</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          name="from"
          placeholder="From"
          value={form.from}
          onChange={handleChange}
          required
          style={{ padding: "0.5rem", borderRadius: "5px", border: "none" }}
        />
        <input
          type="text"
          name="to"
          placeholder="To"
          value={form.to}
          onChange={handleChange}
          required
          style={{ padding: "0.5rem", borderRadius: "5px", border: "none" }}
        />
        <input
          type="date"
          name="departDate"
          value={form.departDate}
          onChange={handleChange}
          required
          style={{ padding: "0.5rem", borderRadius: "5px", border: "none" }}
        />
        <input
          type="date"
          name="returnDate"
          value={form.returnDate}
          onChange={handleChange}
          style={{ padding: "0.5rem", borderRadius: "5px", border: "none" }}
        />
        <input
          type="number"
          name="passengers"
          min="1"
          max="10"
          value={form.passengers}
          onChange={handleChange}
          required
          style={{ padding: "0.5rem", borderRadius: "5px", border: "none" }}
        />
        <button
          type="submit"
          style={{
            padding: "0.75rem",
            borderRadius: "25px",
            border: "none",
            backgroundColor: "#00eaff",
            color: "#000",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(0, 234, 255, 0.4)",
          }}
        >
          Search
        </button>
      </form>
    </section>
  );
};
export default Flights;