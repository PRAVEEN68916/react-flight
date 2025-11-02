import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ currentPage, setCurrentPage }) => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false); // track toggler state

  const handleLogout = () => {
    logout();
    setCurrentPage("home");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const NavLink = ({ page, label }) => (
    <li className="nav-item">
      <button
        className="nav-link btn"
        onClick={() => {
          setCurrentPage(page);
          setMenuOpen(false); // close menu when clicking any link
        }}
        style={{
          background:
            currentPage === page ? "rgba(0, 234, 255, 0.25)" : "transparent",
          color: currentPage === page ? "#00eaff" : menuOpen ? "#000" : "white",
          border: "none",
          borderRadius: "10px",
          padding: "0.6rem 1.2rem",
          transition: "all 0.3s ease",
          fontFamily: "Poppins, sans-serif",
          fontSize: "1rem",
          fontWeight: 500,
        }}
      >
        {label}
      </button>
    </li>
  );

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        menuOpen ? "bg-white" : ""
      }`}
      style={{
        backdropFilter: menuOpen ? "none" : "blur(10px)",
        WebkitBackdropFilter: menuOpen ? "none" : "blur(15px)",
        background: menuOpen
          ? "white"
          : "rgba(25, 25, 45, 0.5)",
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
          onClick={() => {
            setCurrentPage("home");
            setMenuOpen(false);
          }}
        >
          <span style={{ fontSize: "1.8rem" }}>✈️</span>
          <span
            style={{
              color: menuOpen ? "#00bcd4" : "aqua",
              fontSize: "3rem",
              fontWeight: "bold",
              marginLeft: "0.4rem",
            }}
          >
            Sky
          </span>
          <span
            style={{
              color: menuOpen ? "#ffb300" : "yellow",
              fontSize: "3rem",
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
          onClick={toggleMenu}
          aria-controls="navbarContent"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          style={{
            border: "none",
            background: "transparent",
          }}
        >
          <span
            className="navbar-toggler-icon"
            style={{
              filter: menuOpen ? "invert(0)" : "invert(1)",
            }}
          ></span>
        </button>

        {/* ===== COLLAPSIBLE MENU ===== */}
        <div
          className={`collapse navbar-collapse justify-content-end ${
            menuOpen ? "show" : ""
          }`}
          id="navbarContent"
        >
          <ul
            className="navbar-nav align-items-center"
            style={{
              gap: "0.5rem",
              background: menuOpen ? "white" : "transparent",
              borderRadius: "10px",
              padding: menuOpen ? "1rem" : "0",
            }}
          >
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
                    color: menuOpen ? "#000" : "#00eaff",
                    fontWeight: 500,
                    fontFamily: "Poppins, sans-serif",
                    padding: "0.6rem 1.2rem",
                  }}
                >
                  👋 Hi, {user.name}
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
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
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button
                    onClick={() => {
                      setCurrentPage("login");
                      setMenuOpen(false);
                    }}
                    className="btn"
                    style={{
                      background:
                        currentPage === "login"
                          ? "rgba(0, 234, 255, 0.25)"
                          : "transparent",
                      color: currentPage === "login"
                        ? "#00eaff"
                        : menuOpen
                        ? "#000"
                        : "white",
                      border: "none",
                      borderRadius: "10px",
                      padding: "0.6rem 1.2rem",
                      transition: "all 0.3s ease",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    Login
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => {
                      setCurrentPage("signup");
                      setMenuOpen(false);
                    }}
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
