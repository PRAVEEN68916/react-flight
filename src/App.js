import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import BookingFlight from './components/BookingFlight';
import Footer from './components/Footer';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import FlightCards from './components/FlightCards';
import Flight from './components/Flight';
import Explore from './components/Explore';

function App() {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f5f5f5' }}>
      <Header />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/flights" element={<FlightCards setSelectedFlight={setSelectedFlight} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login navigate={navigate} />} />
          <Route path="/signup" element={<Signup navigate={navigate} />} />
          <Route path="/booking" element={<BookingFlight selectedFlight={selectedFlight} navigate={navigate} />} />
          {/* include the :id param so /explore/1, /explore/2 match */}
          <Route path="/explore/:id" element={<Explore />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
