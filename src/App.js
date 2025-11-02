
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Flights from './components/Flight';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import BookingFlight from './components/BookingFlight';
import Footer from './components/Footer';
import React, { useState } from 'react';
import { AuthProvider } from './components/AuthContext';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import FlightCards from './components/FlightCards';


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <AuthProvider>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f5f5f5' }}>
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div style={{ flex: 1 }}>
          {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
          {currentPage === 'about' && <About />}
          {currentPage === 'flights' && <Flights />}
          {currentPage === 'contact' && <Contact />}
          {currentPage === 'login' && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === 'signup' && <Signup setCurrentPage={setCurrentPage} />}
          {currentPage === 'bookingflight' && <BookingFlight setCurrentPage={setCurrentPage} />}

        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;