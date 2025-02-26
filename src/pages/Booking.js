import React, { useState } from "react";
import axios from "axios";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/bookings", formData);
      alert("Booking submitted!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Book Your Trip</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="w-full p-3 border rounded-md" required />
          <input type="text" name="pickup" placeholder="Pickup Location" value={formData.pickup} onChange={handleChange} className="w-full p-3 border rounded-md" required />
          <input type="text" name="dropoff" placeholder="Drop-off Location" value={formData.dropoff} onChange={handleChange} className="w-full p-3 border rounded-md" required />
          <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-3 border rounded-md" required />
          <input type="time" name="time" value={formData.time} onChange={handleChange} className="w-full p-3 border rounded-md" required />
          <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} className="w-full p-3 border rounded-md" required />
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
