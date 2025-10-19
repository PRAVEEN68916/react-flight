import React, { useState } from "react";

const Signin = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sign In with email: ${form.email}`);
    // Add sign-in logic here
  };

  return (
    <section style={{ padding: "6rem",marginTop:"100px", color: "#fff", maxWidth: "500px", margin: "auto" }}>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ padding: "0.5rem", borderRadius: "5px", border: "none" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
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
          Sign In
        </button>
      </form>
      <p style={{ marginTop: "1rem" }}>
        Forgot Password? <a href="#!" style={{ color: "#00eaff" }}>Reset here</a>
      </p>
    </section>
  );
};

export default Signin;
