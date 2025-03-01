import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://51.20.255.216:5050/contact', formData);
            alert('Message sent!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
             <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
             <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input className="w-full p-3 border rounded-md"  name="name" placeholder="Enter Your Name" onChange={handleChange} />
                <input className="w-full p-3 border rounded-md"  name="email" placeholder="Email" onChange={handleChange} />
                <textarea className="w-full p-3 border rounded-md"  name="message" placeholder="Message" onChange={handleChange}></textarea>
                <button className="bg-blue-500 text-white p-2 w-full rounded" type="submit">Send</button>
            </form>
            </div>
        </div>
    );
}

export default Contact;