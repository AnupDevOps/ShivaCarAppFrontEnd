import React, { useState } from "react";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://51.20.255.216:5050/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Book Your Trip</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full p-3 border rounded-md" type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input className="w-full p-3 border rounded-md" type="text" name="pickup" placeholder="Pickup Location" onChange={handleChange} required />
        <input className="w-full p-3 border rounded-md" type="text" name="dropoff" placeholder="Drop-off Location" onChange={handleChange} required />
        <input className="w-full p-3 border rounded-md" type="date" name="date" onChange={handleChange} required />
        <input className="w-full p-3 border rounded-md" type="time" name="time" onChange={handleChange} required />
        <input className="w-full p-3 border rounded-md" type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <button className="bg-blue-500 text-white p-2 w-full rounded" type="submit">Submit Booking</button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
