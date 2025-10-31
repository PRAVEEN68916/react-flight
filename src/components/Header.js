import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ currentPage, setCurrentPage }) => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    setCurrentPage("home");
  };

  const NavLink = ({ page, label }) => (
    <li className="nav-item">
      <button
        className="nav-link btn"
        onClick={() => setCurrentPage(page)}
        style={{
          background:
            currentPage === page ? "rgba(0, 234, 255, 0.25)" : "transparent",
          color: currentPage === page ? "#00eaff" : "white",
          border: "none",
          borderRadius: "10px",
          padding: "0.6rem 1.2rem",
          transition: "all 0.3s ease",
          fontFamily: "Poppins, sans-serif",
          fontSize: "1rem",
          fontWeight: 500,
        }}
        onMouseEnter={(e) => {
          if (currentPage !== page) {
            e.target.style.background = "rgba(0, 234, 255, 0.25)";
            e.target.style.color = "#00eaff";
            e.target.style.transform = "translateY(-2px)";
          }
        }}
        onMouseLeave={(e) => {
          if (currentPage !== page) {
            e.target.style.background = "transparent";
            e.target.style.color = "white";
            e.target.style.transform = "translateY(0)";
          }
        }}
      >
        {label}
      </button>
    </li>
  );

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        background: "rgba(25, 25, 45, 0.5)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease-in-out",
        zIndex: 1000,
      }}
    >
      <div className="container-fluid">
        {/* ===== LOGO ===== */}
        <div
          className="navbar-brand d-flex align-items-center"
          style={{ cursor: "pointer" }}
          onClick={() => setCurrentPage("home")}
        >
          <span style={{ fontSize: "1.8rem" }}>✈️</span>
          <span
            style={{
              color: "aqua",
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginLeft: "0.4rem",
            }}
          >
            Sky
          </span>
          <span
            style={{
              color: "yellow",
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginLeft: "0.1rem",
            }}
          >
            Book
          </span>
        </div>

        {/* ===== TOGGLER ===== */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            border: "none",
            background: "transparent",
          }}
        >
          <span
            className="navbar-toggler-icon"
            style={{
              filter: "invert(1)",
            }}
          ></span>
        </button>

        {/* ===== COLLAPSIBLE MENU ===== */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <ul className="navbar-nav align-items-center" style={{ gap: "0.5rem" }}>
            <NavLink page="home" label="Home" />
            <NavLink page="about" label="About" />
            <NavLink page="flights" label="Flights" />
            <NavLink page="contact" label="Contact" />
            <NavLink page="bookingflight" label="Book Flight" />

            {user ? (
              <>
                <li
                  className="nav-item"
                  style={{
                    color: "#00eaff",
                    fontWeight: 500,
                    fontFamily: "Poppins, sans-serif",
                    padding: "0.6rem 1.2rem",
                  }}
                >
                  👋 Hi, {user.name}
                </li>
                <li className="nav-item">
                  <button
                    onClick={handleLogout}
                    className="btn"
                    style={{
                      background: "linear-gradient(90deg, #ff3c3c, #ff6b6b)",
                      border: "none",
                      color: "white",
                      padding: "0.6rem 1.2rem",
                      borderRadius: "10px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      fontSize: "1rem",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 500,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.05)";
                      e.target.style.boxShadow =
                        "0 4px 15px rgba(255, 100, 100, 0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button
                    onClick={() => setCurrentPage("login")}
                    className="btn"
                    style={{
                      background:
                        currentPage === "login"
                          ? "rgba(0, 234, 255, 0.25)"
                          : "transparent",
                      color: currentPage === "login" ? "#00eaff" : "white",
                      border: "none",
                      borderRadius: "10px",
                      padding: "0.6rem 1.2rem",
                      transition: "all 0.3s ease",
                      fontFamily: "Poppins, sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "rgba(0, 234, 255, 0.25)";
                      e.target.style.color = "#00eaff";
                    }}
                    onMouseLeave={(e) => {
                      if (currentPage !== "login") {
                        e.target.style.background = "transparent";
                        e.target.style.color = "white";
                      }
                    }}
                  >
                    Login
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => setCurrentPage("signup")}
                    className="btn"
                    style={{
                      background: "linear-gradient(90deg, #00eaff, #00ffc3)",
                      color: "#000",
                      border: "none",
                      padding: "0.6rem 1.2rem",
                      borderRadius: "10px",
                      fontWeight: "600",
                      transition: "all 0.3s ease",
                      fontFamily: "Poppins, sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.05)";
                      e.target.style.boxShadow =
                        "0 4px 15px rgba(0, 234, 255, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    Sign Up
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
