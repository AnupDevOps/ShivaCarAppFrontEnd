import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Packages from './pages/Packages';
import './App.css';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <a href="/">Home</a> | <a href="/booking">Booking</a> | <a href="/packages">Packages</a>
                </nav>
                <header className="text-center py-10 bg-blue-600 text-white text-3xl font-bold">
                    Explore Unexplored North India
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/packages" element={<Packages />} />
                </Routes>
                {/* Footer */}
                <footer className="bg-blue-600 text-white text-center p-6 mt-10">
                    <p className="text-lg">&copy; 2025 Tour & Travel. All rights reserved.</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                        <a href="Contact" className="hover:underline">Contact Us</a>
                    </div>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="#" className="text-white text-2xl hover:text-gray-300"><FaFacebook /></a>
                        <a href="#" className="text-white text-2xl hover:text-gray-300"><FaTwitter /></a>
                        <a href="#" className="text-white text-2xl hover:text-gray-300"><FaInstagram /></a>
                    </div>
                </footer>

            </div>
        </Router>
    );
}

export default App;