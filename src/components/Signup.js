import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GlobalCSS/Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "12345") {
      setMessage("✅ Signup Successful! Welcome back.");
    } else {
      setMessage("❌ Invalid Email or Password!");
    }
  };

  return (
    <div className="Signup-wrapper d-flex align-items-center justify-content-center">
      <div className="Signup-card shadow-lg p-4 border-0">
        <h3 className="text-center mb-3 text-primary fw-bold">
          Signup to Continue
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">
            Signup
          </button>
        </form>

        {message && (
          <div
            className={`alert mt-3 ${message.includes("Successful") ? "alert-success" : "alert-danger"
              } text-center`}
          >
            {message}
          </div>
        )}

        <div className="text-center mt-3">
          <small className="text-secondary">
            Don’t have an account?{" "}
            {/* <a href="#" className="text-primary text-decoration-none fw-semibold">
              Sign Up
            </a> */}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Signup;