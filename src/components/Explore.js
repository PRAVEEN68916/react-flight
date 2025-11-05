// src/components/Explore.js
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const flightDetails = {
  1: {
    state: "Andhra Pradesh",
    airports: ["Visakhapatnam (VTZ)", "Tirupati (TIR)", "Vijayawada (VGA)"],
    topRoutes: [
      { id: "AP-VTZ-DEL", from: "New Delhi (DEL)", duration: "2h 20m", price: "₹4,500", airline: "IndiGo" },
      { id: "AP-VTZ-BOM", from: "Mumbai (BOM)", duration: "1h 40m", price: "₹3,200", airline: "SpiceJet" },
      { id: "AP-TIR-CCU", from: "Kolkata (CCU)", duration: "1h 50m", price: "₹3,600", airline: "Akasa Air" },
    ],
    airlines: ["IndiGo", "SpiceJet", "Akasa Air", "Air India"],
    avgPriceRange: "₹3,000 – ₹6,000 (domestic, one-way)",
    bestTimeToFly: "October to March (pleasant weather; festival season may raise prices)",
    notes: "Visakhapatnam is the busiest airport with most daily connections; Tirupati has seasonal peaks during festivals.",
  },

  2: {
    state: "Telangana",
    airports: ["Hyderabad Rajiv Gandhi International (HYD)"],
    topRoutes: [
      { id: "TG-HYD-DEL", from: "New Delhi (DEL)", duration: "2h 25m", price: "₹4,200", airline: "Air India" },
      { id: "TG-HYD-BOM", from: "Mumbai (BOM)", duration: "1h 40m", price: "₹3,100", airline: "IndiGo" },
      { id: "TG-HYD-AMD", from: "Ahmedabad (AMD)", duration: "1h 45m", price: "₹3,000", airline: "SpiceJet" },
    ],
    airlines: ["IndiGo", "Air India", "SpiceJet", "Vistara"],
    avgPriceRange: "₹3,000 – ₹6,500",
    bestTimeToFly: "September to February",
    notes: "Hyderabad is a major hub; many IT-driven midweek flights with competitive fares.",
  },

  3: {
    state: "Karnataka",
    airports: ["Bengaluru Kempegowda (BLR)", "Mangalore (IXE)", "Mysuru (MYQ) - limited"],
    topRoutes: [
      { id: "KA-BLR-DEL", from: "New Delhi (DEL)", duration: "2h 40m", price: "₹5,000", airline: "Vistara" },
      { id: "KA-BLR-BOM", from: "Mumbai (BOM)", duration: "1h 30m", price: "₹2,900", airline: "IndiGo" },
      { id: "KA-IXE-CCU", from: "Kolkata (CCU)", duration: "2h 10m", price: "₹4,200", airline: "SpiceJet" },
    ],
    airlines: ["IndiGo", "Vistara", "Air India", "Akasa Air"],
    avgPriceRange: "₹3,000 – ₹7,000",
    bestTimeToFly: "October to March (festivals and pleasant weather)",
    notes: "BLR is a major hub — book early for best fares, especially on business routes.",
  },

  4: {
    state: "Tamil Nadu",
    airports: ["Chennai (MAA)", "Madurai (IXM)", "Coimbatore (CJB)"],
    topRoutes: [
      { id: "TN-MAA-DEL", from: "New Delhi (DEL)", duration: "2h 45m", price: "₹5,200", airline: "Air India" },
      { id: "TN-MAA-BOM", from: "Mumbai (BOM)", duration: "1h 45m", price: "₹3,400", airline: "IndiGo" },
      { id: "TN-IXM-CCU", from: "Kolkata (CCU)", duration: "2h 15m", price: "₹4,000", airline: "SpiceJet" },
    ],
    airlines: ["IndiGo", "Air India", "SpiceJet", "Akasa Air"],
    avgPriceRange: "₹3,200 – ₹6,500",
    bestTimeToFly: "November to February",
    notes: "Chennai offers many international connections too; regional airports have fewer daily flights.",
  },

  5: {
    state: "Kerala",
    airports: ["Kochi (COK)", "Thiruvananthapuram (TRV)", "Calicut (CCJ)"],
    topRoutes: [
      { id: "KL-COK-DEL", from: "New Delhi (DEL)", duration: "3h 0m", price: "₹5,500", airline: "IndiGo" },
      { id: "KL-TRV-BOM", from: "Mumbai (BOM)", duration: "2h 0m", price: "₹3,600", airline: "SpiceJet" },
      { id: "KL-COK-BOM", from: "Mumbai (BOM)", duration: "2h 0m", price: "₹3,700", airline: "Air India" },
    ],
    airlines: ["IndiGo", "SpiceJet", "Air India", "Vistara"],
    avgPriceRange: "₹3,500 – ₹7,500",
    bestTimeToFly: "September to March (post-monsoon is best to enjoy backwaters and hills)",
    notes: "Kochi has the busiest airport; expect temporary monsoon-related schedule changes during June–August.",
  },

  6: {
    state: "Maharashtra",
    airports: ["Mumbai Chhatrapati Shivaji (BOM)", "Pune (PNQ)"],
    topRoutes: [
      { id: "MH-BOM-DEL", from: "New Delhi (DEL)", duration: "2h 10m", price: "₹4,000", airline: "IndiGo" },
      { id: "MH-BOM-CCU", from: "Kolkata (CCU)", duration: "2h 10m", price: "₹4,200", airline: "SpiceJet" },
      { id: "MH-PNQ-BOM", from: "Mumbai (BOM)", duration: "0h 50m", price: "₹1,800", airline: "IndiGo" },
    ],
    airlines: ["IndiGo", "Vistara", "Air India", "SpiceJet"],
    avgPriceRange: "₹2,500 – ₹8,000 (depends on BOM hub effects)",
    bestTimeToFly: "September to February",
    notes: "Mumbai is the primary gateway (many domestic & international options). Pune has growing regional connectivity.",
  },

  7: {
    state: "Gujarat",
    airports: ["Ahmedabad (AMD)", "Vadodara (BDQ)", "Rajkot (RAJ)"],
    topRoutes: [
      { id: "GJ-AMD-DEL", from: "New Delhi (DEL)", duration: "1h 45m", price: "₹3,200", airline: "IndiGo" },
      { id: "GJ-AMD-BOM", from: "Mumbai (BOM)", duration: "1h 20m", price: "₹2,800", airline: "SpiceJet" },
      { id: "GJ-BDQ-AMD", from: "Vadodara (BDQ)", duration: "0h 40m", price: "₹1,200", airline: "IndiGo" },
    ],
    airlines: ["IndiGo", "SpiceJet", "Air India"],
    avgPriceRange: "₹2,000 – ₹5,000",
    bestTimeToFly: "October to March (Rann Utsav season increases demand)",
    notes: "Ahmedabad sees surges during festivals and the Rann Utsav — book early for those periods.",
  },

  8: {
    state: "Rajasthan",
    airports: ["Jaipur (JAI)", "Jodhpur (JDH)", "Udaipur (UDR)"],
    topRoutes: [
      { id: "RJ-JAI-DEL", from: "New Delhi (DEL)", duration: "1h 20m", price: "₹2,800", airline: "IndiGo" },
      { id: "RJ-JAI-BOM", from: "Mumbai (BOM)", duration: "1h 30m", price: "₹3,200", airline: "Vistara" },
      { id: "RJ-UDR-BOM", from: "Mumbai (BOM)", duration: "1h 25m", price: "₹3,300", airline: "SpiceJet" },
    ],
    airlines: ["IndiGo", "Vistara", "SpiceJet"],
    avgPriceRange: "₹2,500 – ₹6,000",
    bestTimeToFly: "October to March (peak tourist season)",
    notes: "Jaipur is best connected; smaller airports (Udaipur/Jodhpur) have fewer daily flights.",
  },

  9: {
    state: "Punjab",
    airports: ["Amritsar (ATQ)", "Chandigarh (IXC)"],
    topRoutes: [
      { id: "PB-ATQ-DEL", from: "New Delhi (DEL)", duration: "1h 10m", price: "₹2,400", airline: "IndiGo" },
      { id: "PB-ATQ-BOM", from: "Mumbai (BOM)", duration: "2h 10m", price: "₹4,100", airline: "SpiceJet" },
      { id: "PB-IXC-DEL", from: "New Delhi (DEL)", duration: "1h 0m", price: "₹2,200", airline: "IndiGo" },
    ],
    airlines: ["IndiGo", "SpiceJet", "Air India"],
    avgPriceRange: "₹2,000 – ₹5,000",
    bestTimeToFly: "September to March",
    notes: "Amritsar sees high pilgrimage traffic during certain festivals; book early during those dates.",
  },
};

const Explore = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const details = flightDetails[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleSelectRoute = (route) => {
    // Save selection to localStorage so BookingFlight can pick it up
    try {
      localStorage.setItem("selectedFlight", JSON.stringify({
        route,
        destination: details.state,
        airports: details.airports,
        airlines: details.airlines,
      }));
    } catch (e) {
      console.error("Could not save selected flight", e);
    }
    // Navigate to booking page
    navigate("/booking");
  };

  if (!details) {
    return (
      <div className="container py-5 text-center">
        <h3>No flight details available for this destination.</h3>
        <Link to="/" className="btn btn-info mt-3">← Back to Gallery</Link>
      </div>
    );
  }

  return (
    <div className="container py-5 mt-5">
      <h2 className="text-center fw-bold text-primary mb-3">Flights to {details.state}</h2>

      <div className="mt-4 p-4 shadow-lg rounded bg-light">
        <h5 className="fw-bold">Airports</h5>
        <ul>
          {details.airports.map((a, i) => <li key={i}>{a}</li>)}
        </ul>

        <h5 className="fw-bold mt-3">Top Routes (sample)</h5>
        <div className="table-responsive">
          <table className="table table-borderless align-middle">
            <thead>
              <tr>
                <th>From</th>
                <th>Duration</th>
                <th>Sample Price (one-way)</th>
                <th>Airline</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {details.topRoutes.map((route) => (
                <tr key={route.id}>
                  <td>{route.from}</td>
                  <td>{route.duration}</td>
                  <td>{route.price}</td>
                  <td>{route.airline}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => handleSelectRoute(route)}
                    >
                      Select
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h5 className="fw-bold mt-3">Airlines</h5>
        <p>{details.airlines.join(", ")}</p>

        <h5 className="fw-bold mt-3">Average Price Range</h5>
        <p>{details.avgPriceRange}</p>

        <h5 className="fw-bold mt-3">Best Time to Fly</h5>
        <p>{details.bestTimeToFly}</p>

        <h5 className="fw-bold mt-3">Notes & Tips</h5>
        <p style={{ whiteSpace: "pre-line" }}>{details.notes}</p>

        <div className="d-flex gap-2 mt-4">
          <Link to="/" className="btn btn-outline-secondary">← Back to Gallery</Link>
          <Link to="/flights" className="btn btn-outline-info">See All Flights</Link>
          <button
            className="btn btn-success"
            onClick={() => {
              // fallback: go to booking even if user didn't select a particular route
              try {
                localStorage.setItem("selectedFlight", JSON.stringify({
                  route: null,
                  destination: details.state,
                  airports: details.airports,
                  airlines: details.airlines,
                }));
              } catch (e) {}
              navigate("/booking");
            }}
          >
            Proceed to Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
