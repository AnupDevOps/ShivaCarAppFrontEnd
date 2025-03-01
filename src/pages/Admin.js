import React, { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [editingBooking, setEditingBooking] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    phone: "",
  });

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://51.20.255.216:5050/bookings");
      setBookings(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (booking) => {
    setEditingBooking(booking);
    setFormData(booking);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://51.20.255.216:5050/bookings/${id}`);
      fetchBookings();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingBooking) {
        await axios.put(`http://51.20.255.216:5050/bookings/${editingBooking.id}`, formData);
      } else {
        await axios.post("http://51.20.255.216:5050/bookings", formData);
      }
      setEditingBooking(null);
      setFormData({
        name: "",
        pickup: "",
        dropoff: "",
        date: "",
        time: "",
        phone: "",
      });
      fetchBookings();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          className="w-full p-2 mb-2 border"
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 mb-2 border"
          type="text"
          name="pickup"
          placeholder="Pickup Location"
          value={formData.pickup}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 mb-2 border"
          type="text"
          name="dropoff"
          placeholder="Drop-off Location"
          value={formData.dropoff}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 mb-2 border"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 mb-2 border"
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 mb-2 border"
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <button className="bg-blue-500 text-white p-2 w-full rounded" type="submit">
          {editingBooking ? "Update Booking" : "Add Booking"}
        </button>
      </form>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Pickup</th>
            <th className="border p-2">Dropoff</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Time</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td className="border p-2">{booking.name}</td>
              <td className="border p-2">{booking.pickup}</td>
              <td className="border p-2">{booking.dropoff}</td>
              <td className="border p-2">{booking.date}</td>
              <td className="border p-2">{booking.time}</td>
              <td className="border p-2">{booking.phone}</td>
              <td className="border p-2">
                <button
                  className="bg-yellow-500 text-white p-1 rounded mr-2"
                  onClick={() => handleEdit(booking)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white p-1 rounded"
                  onClick={() => handleDelete(booking.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;