
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Flights from './components/Flight';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';



function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/flights' element={<Flights />} />
            <Route path='/login'element={<Login />} />
              
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
