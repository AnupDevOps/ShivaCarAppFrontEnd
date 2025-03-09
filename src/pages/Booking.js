import React, { useState } from "react";

const places = [
  "New Delhi, Delhi",
  "Indra Gandhi International Airport, New Delhi",
  "Old Delhi Railway Station, New Delhi",
  "New Delhi Railway Station, New Delhi",
  "Hazrat Nizamuddin Railway Station, New Delhi",
  "Anand Vihar Railway Station, New Delhi",
  "Sarai Rohilla Railway Station, New Delhi",
  "Kashmere Gate, New Delhi",
  "Connaught Place, New Delhi",
  "India Gate, New Delhi",
  "Chandni Chowk, New Delhi",
  "Dehradun, Uttarakhand",
  "Mussoorie, Uttarakhand",
  "Rishikesh, Uttarakhand",
  "Haridwar, Uttarakhand",
  "Nainital, Uttarakhand",
  "Almora, Uttarakhand",
  "Kausani, Uttarakhand",
  "Ranikhet, Uttarakhand",
  "Champawat, Uttarakhand",
  "Pithoragarh, Uttarakhand",
  "Auli, Uttarakhand",
  "Joshimath, Uttarakhand",
  "Lansdowne, Uttarakhand",
  "Bhimtal, Uttarakhand",
  "Bageshwar, Uttarakhand",
  "Chamoli, Uttarakhand",
  "Chamba, Uttarakhand",
  "Chakrata, Uttarakhand",
  "Chopta, Uttarakhand",
  "Dhanaulti, Uttarakhand",
  "Dharchula, Uttarakhand",
  "Didihat, Uttarakhand",
  "Gopeshwar, Uttarakhand",
  "Haldwani, Uttarakhand",
  "Jageshwar, Uttarakhand",
  "Kanatal, Uttarakhand",
  "Kathgodam, Uttarakhand",
  "Kedarnath, Uttarakhand",
  "Mukteshwar, Uttarakhand",
  "Pauri, Uttarakhand",
  "Pithoragarh, Uttarakhand",
  "Rudraprayag, Uttarakhand",
  "Roorkee, Uttarakhand",
  "Srinagar, Uttarakhand",
  "Tehri, Uttarakhand",
  "Uttarkashi, Uttarakhand",
  "Yamunotri, Uttarakhand",
  "Kedarnath, Uttarakhand",
  "Gangotri, Uttarakhand",
  "Badrinath, Uttarakhand",
  "Lucknow, Uttar Pradesh",
  "Agra, Uttar Pradesh",
  "Varanasi, Uttar Pradesh",
  "Mathura, Uttar Pradesh",
  "Vrindavan, Uttar Pradesh",
  "Ayodhya, Uttar Pradesh",
  "Kanpur, Uttar Pradesh",
  "Allahabad, Uttar Pradesh",
  "Noida, Uttar Pradesh",
  "Greater Noida, Uttar Pradesh",
  "Ghaziabad, Uttar Pradesh",
  "Meerut, Uttar Pradesh",
  "Bareilly, Uttar Pradesh",
  "Aligarh, Uttar Pradesh",
  "Moradabad, Uttar Pradesh",
  "Saharanpur, Uttar Pradesh",
  "Gorakhpur, Uttar Pradesh",
  "Faizabad, Uttar Pradesh",
  "Firozabad, Uttar Pradesh",
];


const distanceData = {
  "New Delhi, Delhi-Dehradun, Uttarakhand": 2500,
  "New Delhi, Delhi-Mussoorie, Uttarakhand": 2800,
  "New Delhi, Delhi-Rishikesh, Uttarakhand": 2500,
  "New Delhi, Delhi-Haridwar, Uttarakhand": 2200,
  "New Delhi, Delhi-Nainital, Uttarakhand": 3000,
  "New Delhi, Delhi-Almora, Uttarakhand": 3200,
  "New Delhi, Delhi-Kausani, Uttarakhand": 3300,
  "New Delhi, Delhi-Ranikhet, Uttarakhand": 3200,
  "New Delhi, Delhi-Champawat, Uttarakhand": 3500,
  "New Delhi, Delhi-Pithoragarh, Uttarakhand": 3600,
  "New Delhi, Delhi-Auli, Uttarakhand": 3500,
  "New Delhi, Delhi-Joshimath, Uttarakhand": 3500,
  "New Delhi, Delhi-Lansdowne, Uttarakhand": 2800,
  "New Delhi, Delhi-Bhimtal, Uttarakhand": 3000,
  "New Delhi, Delhi-Bageshwar, Uttarakhand": 3300,
  "New Delhi, Delhi-Chamoli, Uttarakhand": 3200,
  "New Delhi, Delhi-Chamba, Uttarakhand": 3200,
  "New Delhi, Delhi-Chakrata, Uttarakhand": 2800,
  "New Delhi, Delhi-Chopta, Uttarakhand": 3200,
  "New Delhi, Delhi-Dhanaulti, Uttarakhand": 2800,
  "New Delhi, Delhi-Dharchula, Uttarakhand": 3600,
  "New Delhi, Delhi-Didihat, Uttarakhand": 3600,
  "New Delhi, Delhi-Gopeshwar, Uttarakhand": 3200,
  "New Delhi, Delhi-Haldwani, Uttarakhand": 3000,
  "New Delhi, Delhi-Jageshwar, Uttarakhand": 3300,
  "New Delhi, Delhi-Kanatal, Uttarakhand": 2800,
  "New Delhi, Delhi-Kathgodam, Uttarakhand": 3000,
  "New Delhi, Delhi-Kedarnath, Uttarakhand": 3500,
  "New Delhi, Delhi-Mukteshwar, Uttarakhand": 3000,
  "New Delhi, Delhi-Pauri, Uttarakhand": 3200,
  "New Delhi, Delhi-Rudraprayag, Uttarakhand": 3200,
  "New Delhi, Delhi-Roorkee, Uttarakhand": 2500,
  "New Delhi, Delhi-Srinagar, Uttarakhand": 3200,
  "New Delhi, Delhi-Tehri, Uttarakhand": 3000,
  "New Delhi, Delhi-Uttarkashi, Uttarakhand": 3000,
  "New Delhi, Delhi-Yamunotri, Uttarakhand": 3200,
  "New Delhi, Delhi-Gangotri, Uttarakhand": 3200,
  "New Delhi, Delhi-Badrinath, Uttarakhand": 3500,
  "New Delhi, Delhi-Valley of Flowers, Uttarakhand": 3500,
  "New Delhi, Delhi-Hemkund Sahib, Uttarakhand": 3500,
  "New Delhi, Delhi-Nanda Devi, Uttarakhand": 3500,
  "New Delhi, Delhi-Naini Lake, Uttarakhand": 3000,
  "New Delhi, Delhi-Naini Peak, Uttarakhand": 3000,
  "New Delhi, Delhi-Naina Devi Temple, Uttarakhand": 3000,
  "New Delhi, Delhi-Snow View, Uttarakhand": 3000,
  "New Delhi, Delhi-Tiffin Top, Uttarakhand": 3000,
  "New Delhi, Delhi-Lucknow, Uttar Pradesh": 500,
  "New Delhi, Delhi-Agra, Uttar Pradesh": 300,
  "New Delhi, Delhi-Varanasi, Uttar Pradesh": 800,
  "New Delhi, Delhi-Mathura, Uttar Pradesh": 300,
  "New Delhi, Delhi-Vrindavan, Uttar Pradesh": 300,
  "New Delhi, Delhi-Ayodhya, Uttar Pradesh": 500,
  "New Delhi, Delhi-Kanpur, Uttar Pradesh": 500,
  "New Delhi, Delhi-Allahabad, Uttar Pradesh": 600,
  "New Delhi, Delhi-Noida, Uttar Pradesh": 200,
  "New Delhi, Delhi-Greater Noida, Uttar Pradesh": 200,
  "New Delhi, Delhi-Ghaziabad, Uttar Pradesh": 200,
  "New Delhi, Delhi-Meerut, Uttar Pradesh": 300,
  "New Delhi, Delhi-Bareilly, Uttar Pradesh": 400,
  "New Delhi, Delhi-Aligarh, Uttar Pradesh": 300,
  "New Delhi, Delhi-Moradabad, Uttar Pradesh": 300,
  "New Delhi, Delhi-Saharanpur, Uttar Pradesh": 400,
  "New Delhi, Delhi-Gorakhpur, Uttar Pradesh": 700,
  "New Delhi, Delhi-Faizabad, Uttar Pradesh": 500,
  "New Delhi, Delhi-Firozabad, Uttar Pradesh": 300,
  "Dehradun, Uttarakhand-Mussoorie, Uttarakhand": 100,
  "Dehradun, Uttarakhand-Rishikesh, Uttarakhand": 50,
  "Dehradun, Uttarakhand-Haridwar, Uttarakhand": 50,
  "Dehradun, Uttarakhand-Nainital, Uttarakhand": 250,
  "Dehradun, Uttarakhand-Almora, Uttarakhand": 300,
  "Dehradun, Uttarakhand-Kausani, Uttarakhand": 300,
  "Dehradun, Uttarakhand-Ranikhet, Uttarakhand": 300,
  "Dehradun, Uttarakhand-Champawat, Uttarakhand": 350,
  "Dehradun, Uttarakhand-Pithoragarh, Uttarakhand": 350,
  "Dehradun, Uttarakhand-Auli, Uttarakhand": 350,
  "Dehradun, Uttarakhand-Joshimath, Uttarakhand": 350,
  "Dehradun, Uttarakhand-Lansdowne, Uttarakhand": 100,
  "Dehradun, Uttarakhand-Bhimtal, Uttarakhand": 250,
  "Dehradun, Uttarakhand-Bageshwar, Uttarakhand": 300,
  "Dehradun, Uttarakhand-Chamoli, Uttarakhand": 300,
  "Dehradun, Uttarakhand-Chamba, Uttarakhand": 300,
  "Dehradun, Uttarakhand-Chakrata, Uttarakhand": 100,
  "Dehradun, Uttarakhand-Chopta, Uttarakhand": 300,
  "Dehradun, Uttarakhand-Dhanaulti, Uttarakhand": 100,
  "Dehradun, Uttarakhand-Dharchula, Uttarakhand": 350,
  "Dehradun, Uttarakhand-Didihat, Uttarakhand": 350,
  "Dehradun, Uttarakhand-Gopeshwar, Uttarakhand": 300,
  "Dehradun, Uttarakhand-Haldwani, Uttarakhand": 250,
  "Dehradun, Uttarakhand-Jageshwar, Uttarakhand": 300,
  "Dehradun, Uttarakhand-Kanatal, Uttarakhand": 100,
  "Dehradun, Uttarakhand-Kathgodam, Uttarakhand": 250,
  "Dehradun, Uttarakhand-Kedarnath, Uttarakhand": 350,
  "Dehradun, Uttarakhand-Mukteshwar, Uttarakhand": 250,
  "Dehradun, Uttarakhand-Pauri, Uttarakhand": 300,
  "Dehradun, Uttarakhand-Rudraprayag, Uttarakhand": 300,
  "Dehradun, Uttarakhand-Roorkee, Uttarakhand": 50,
  "Dehradun, Uttarakhand-Srinagar, Uttarakhand": 300,
  "Dehradun, Uttarakhand-Tehri, Uttarakhand": 250,
  "Dehradun, Uttarakhand-Uttarkashi, Uttarakhand": 250,
  "Dehradun, Uttarakhand-Yamunotri, Uttarakhand": 300,
  "Dehradun, Uttarakhand-Gangotri, Uttarakhand": 300
};

const fareRates = {
  Sedan: 1, 
  Suv: 1.5,  
};

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    phone: "",
    taxiType: "Sedan",
    fare: 0,
  });
  const [filteredPickup, setFilteredPickup] = useState([]);
  const [filteredDropoff, setFilteredDropoff] = useState([]);

  const calculateFare = (pickup, dropoff, taxiType) => {
    const key1 = `${pickup}-${dropoff}`;
    const key2 = `${dropoff}-${pickup}`;
    const distance = distanceData[key1] || distanceData[key2] || 0;
    return distance * (fareRates[taxiType] || fareRates.Sedan);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: value };
      if (updatedData.pickup && updatedData.dropoff) {
        updatedData.fare = calculateFare(updatedData.pickup, updatedData.dropoff, updatedData.taxiType);
      }
      return updatedData;
    });

    if (name === "pickup") {
      setFilteredPickup(places.filter((place) => place.toLowerCase().includes(value.toLowerCase())));
    } else if (name === "dropoff") {
      setFilteredDropoff(places.filter((place) => place.toLowerCase().includes(value.toLowerCase())));
    }
  };

  const handleSelect = (name, value) => {
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: value };
      if (updatedData.pickup && updatedData.dropoff) {
        updatedData.fare = calculateFare(updatedData.pickup, updatedData.dropoff, updatedData.taxiType);
      }
      return updatedData;
    });

    if (name === "pickup") {
      setFilteredPickup([]);
    } else {
      setFilteredDropoff([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://51.20.255.216:5050/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      if (data.message) {
        alert(data.message);
      } else {
        alert("Booking successful, but no message received from the server.");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Error submitting booking:", error);
      alert("Failed to submit booking. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Book Your Trip</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full p-3 border rounded-md" type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
          <div className="relative z-10">
            <input className="w-full p-3 border rounded-md" type="text" name="pickup" placeholder="Pickup Location" value={formData.pickup} onChange={handleChange} required />
            {filteredPickup.length > 0 && (
              <ul className="absolute bg-white border w-full mt-1 max-h-40 overflow-auto rounded-md shadow-md z-10">
                {filteredPickup.map((place, index) => (
                  <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleSelect("pickup", place)}>
                    {place}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="relative z-0">
            <input className="w-full p-3 border rounded-md" type="text" name="dropoff" placeholder="Drop-off Location" value={formData.dropoff} onChange={handleChange} required />
            {filteredDropoff.length > 0 && (
              <ul className="absolute bg-white border w-full mt-1 max-h-40 overflow-auto rounded-md shadow-md z-10">
                {filteredDropoff.map((place, index) => (
                  <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleSelect("dropoff", place)}>
                    {place}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <input className="w-full p-3 border rounded-md" type="date" name="date" onChange={handleChange} required />
          <input className="w-full p-3 border rounded-md" type="time" name="time" onChange={handleChange} required />
          <input className="w-full p-3 border rounded-md" type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input type="radio" name="taxiType" value="Sedan" checked={formData.taxiType === "Sedan"} onChange={handleChange} />
              <span className="ml-2">Sedan</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="taxiType" value="Suv" checked={formData.taxiType === "Suv"} onChange={handleChange} />
              <span className="ml-2">SUV</span>
            </label>
          </div>
          <div className="w-full p-3 border rounded-md bg-gray-100 text-gray-700">Fare: {formData.fare}</div>
          <button className="bg-blue-500 text-white p-2 w-full rounded" type="submit">Submit Booking</button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;