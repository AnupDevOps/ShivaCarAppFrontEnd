import React, { useState } from 'react';
import axios from 'axios';

function Booking() {
    const [formData, setFormData] = useState({ pickup: '', dropoff: '', date: '', time: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/bookings', formData);
            alert('Booking submitted!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Book a Ride</h1>
            <form onSubmit={handleSubmit}>
                <input name="pickup" placeholder="Pickup Location" onChange={handleChange} />
                <input name="dropoff" placeholder="Drop-off Location" onChange={handleChange} />
                <input name="date" type="date" onChange={handleChange} />
                <input name="time" type="time" onChange={handleChange} />
                <button type="submit">Book Now</button>
            </form>
        </div>
    );
}

export default Booking;