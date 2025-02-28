import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Packages from './pages/Packages';
import BookingList from './pages/BookingList';
import Admin from './pages/Admin';
import './App.css';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="bg-blue-600 text-white shadow-md flex justify-center items-center py-7">
                    <img src="https://msrprojectimages.s3.eu-north-1.amazonaws.com/UttarakhandDarshan.webp" alt="Uttarakhand Darshan Logo" className="h-20 w-auto object-contain" />
                </header>
                <nav className="py-4 border-t border-blue-400">
                    <div className="container mx-auto flex justify-center space-x-6">
                        <a href="/" className="hover:text-gray-200 transition duration-300">Home</a>
                        <a href="/booking" className="hover:text-gray-200 transition duration-300">Booking</a>
                        <a href="/packages" className="hover:text-gray-200 transition duration-300">Packages</a>
                        <a href="/bookingList" className="hover:text-gray-200 transition duration-300">Booking List</a>
                        <a href="/admin" className="hover:text-gray-200 transition duration-300">Admin</a>
                    </div>
                </nav>


                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/packages" element={<Packages />} />
                    <Route path="/bookingList" element={<BookingList />} />
                    <Route path="/admin" element={<Admin />} /> {/* Add the Admin route */}
                </Routes>
                {/* Footer */}
                <footer className="bg-blue-600 text-white text-center p-6 mt-10">
                    <p className="text-lg">&copy; 2025 Uttarakhand Darshan. All rights reserved.</p>
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