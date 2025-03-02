import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://51.20.255.216:5050/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert(data.message);
        // redirect to bookinglist page
         navigate("/BookingList");
        
      } else {
        alert(data.message);
        setError(data.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
      setError("An error occurred. Please try again.");
    }  
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login into Admin</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full p-3 border rounded-md" type="text" name="username" placeholder="UserName" onChange={handleChange} required />
        <input className="w-full p-3 border rounded-md" type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button className="bg-blue-500 text-white p-2 w-full rounded" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
