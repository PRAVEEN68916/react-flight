import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent! Thanks, ${form.name}`);
    // Add real submission logic here
  };

  return (
    <section style={{ padding: "9rem", color: "#fff", maxWidth: "600px", margin: "auto" }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ padding: "0.5rem", borderRadius: "5px", border: "none" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ padding: "0.5rem", borderRadius: "5px", border: "none" }}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
          style={{ padding: "0.5rem", borderRadius: "5px", border: "none" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows="5"
          required
          style={{ padding: "0.5rem", borderRadius: "5px", border: "none", resize: "vertical" }}
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
          Send Message
        </button>
      </form>
      <div style={{ marginTop: "2rem" }}>
        <p>📞 Phone: +1 234 567 890</p>
        <p>✉️ Email: support@skybook.com</p>
        <p>🏢 Address: 123 Flight St, SkyCity, Earth</p>
      </div>
    </section>
  );
};

export default Contact;
