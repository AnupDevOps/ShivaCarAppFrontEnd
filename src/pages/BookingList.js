import { useEffect, useState } from "react";
import React from "react";

export default function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://51.20.255.216:5050/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Booking List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Source</th>
            <th className="border p-2">Destination</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Time</th>
            <th className="border p-2">TaxiType</th>
            <th className="border p-2">Fare</th>
            <th className="border p-2">PhoneNumber</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id} >
              <td className="border p-2">{b.name}</td>
              <td className="border p-2">{b.pickup}</td>
              <td className="border p-2">{b.dropoff}</td>
              <td className="border p-2">{b.date}</td>
              <td className="border p-2">{b.time}</td>
              <td className="border p-2">{b.taxiType}</td>
              <td className="border p-2">{b.fare}</td>
              <td className="border p-2">{b.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
