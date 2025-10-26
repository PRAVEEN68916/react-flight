
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Flights from './components/Flight';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import BookingFlight from './components/BookingFlight';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app-layout d-flex flex-column min-vh-100">

      <Header />
      <div style={{ paddingTop: "80px" }} className='flex-grow-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/flights' element={<Flights />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/bookingflight' element={<BookingFlight />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </div>
      <Footer />
    </div>


  );
}

export default App;
