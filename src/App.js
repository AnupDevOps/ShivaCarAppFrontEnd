import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Packages from './pages/Packages';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <a href="/">Home</a> | <a href="/booking">Booking</a> | 
                    <a href="/contact">Contact Us</a> | <a href="/packages">Packages</a>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/packages" element={<Packages />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;