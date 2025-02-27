import React from "react";

const packagesDetails = [
  { destination: "Delhi to CharDham Yatra", type: "Round Trip", price: "₹4700", duration: "1 Days", image: "https://via.placeholder.com/300" },
  { destination: "Delhi to Dehradun", type: "One Way", price: "₹3500", duration: "1 Day", image: "https://via.placeholder.com/300" },
  { destination: "Delhi to Haridwar", type: "One Way", price: "₹3300", duration: "1 Day", image: "https://via.placeholder.com/300" },
  { destination: "Delhi to Ayodhya", type: "One Way", price: "₹8500", duration: "1 Day", image: "https://via.placeholder.com/300" },
  { destination: "Delhi to Lucknow", type: "One Way", price: "₹6500", duration: "1 Days", image: "https://via.placeholder.com/300" },
  { destination: "Delhi to Banarasi", type: "One Way", price: "₹9700", duration: "1 Day", image: "https://via.placeholder.com/300" },
  { destination: "Delhi to Haldwani", type: "One Way", price: "₹3800", duration: "1 Days", image: "https://via.placeholder.com/300" },
  { destination: "Delhi to Rudrapur", type: "One Way", price: "₹3300", duration: "1 Days", image: "https://via.placeholder.com/300" },
];

const Packages = () => {
  const handleBookNow = () => {
    window.location.href = `/booking`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {packagesDetails.map((pkg, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
            <img src={pkg.image} alt={pkg.destination} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">{pkg.destination}</h3>
            <p className="text-gray-600">{pkg.type}</p>
            <p className="text-gray-800 font-bold mt-2">{pkg.price}</p>
            <p className="text-gray-600">Duration: {pkg.duration}</p>
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              onClick={() => handleBookNow()}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
