import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Header = ({ currentPage, setCurrentPage }) => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    setCurrentPage("home");
  };

  const NavLink = ({ page, label }) => (
    <li>
      <button
        onClick={() => setCurrentPage(page)}
        style={{
          background:
            currentPage === page ? "rgba(0, 234, 255, 0.25)" : "transparent",
          color: currentPage === page ? "#00eaff" : "white",
          border: "none",
          padding: "0.6rem 1.2rem",
          borderRadius: "10px",
          transition: "all 0.3s ease",
          cursor: "pointer",
          fontSize: "1rem",
          fontFamily: "Poppins, sans-serif",
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
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        background: "rgba(25, 25, 45, 0.5)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "0.8rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        flexWrap: "wrap",
        transition: "all 0.3s ease-in-out",
      }}
    >
      {/* ===== LOGO SECTION ===== */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          cursor: "pointer",
        }}
        onClick={() => setCurrentPage("home")}
      >
        <span style={{ fontSize: '1.8rem' }}>✈️</span>

        <span style={{ color: 'aqua', fontSize: '1.5rem', fontWeight: 'bold' }}>Sky</span><span style={{ color: 'yellow', fontSize: '1.5rem', fontWeight: 'bold' }}>Book</span>
      </div>

      {/* ===== NAV LINKS ===== */}
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "1rem",
          margin: 0,
          padding: 0,
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
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
              style={{
                color: "#00eaff",
                display: "flex",
                alignItems: "center",
                fontWeight: "500",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              👋 Hi, {user.name}
            </li>
            <li>
              <button
                onClick={handleLogout}
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
            <li>
              <button
                onClick={() => setCurrentPage("login")}
                style={{
                  background:
                    currentPage === "login"
                      ? "rgba(0, 234, 255, 0.25)"
                      : "transparent",
                  color: currentPage === "login" ? "#00eaff" : "white",
                  border: "none",
                  padding: "0.6rem 1.2rem",
                  borderRadius: "10px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  fontSize: "1rem",
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
            <li>
              <button
                onClick={() => setCurrentPage("signup")}
                style={{
                  background: "linear-gradient(90deg, #00eaff, #00ffc3)",
                  color: "#000",
                  border: "none",
                  padding: "0.6rem 1.2rem",
                  borderRadius: "10px",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  fontSize: "1rem",
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
    </nav>
  );
};

export default Header;
