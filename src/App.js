
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Flights from './components/Flight';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signin from './components/Signin';
import Contact from './components/Contact';
import BookingFlight from './components/BookingFlight';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div style={{ paddingTop: "80px" }}></div>
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/flights' element={<Flights />} />
            <Route path='/login'element={<Login />} />
            <Route path='/Signin' element={<Signin />} /> 
            <Route path='/contact' element={<Contact />} />
            <Route path='/bookingflight'element={<BookingFlight/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
     
    </div>
  

  );
}

export default App;
