import React from "react";
import LowestPrice from "../components/images/LowestPriceGuarantee.webp";
import CNGCabs from "../components/images/CNGPoweredCabs.webp";
import ExploreIndia from "../components/images/UnexploredNorthIndia.webp";

// FeatureCard component for reusability
const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          image={LowestPrice}
          title="Lowest Price"
          description="Get the best travel deals at unbeatable prices."
        />
        <FeatureCard
          image={CNGCabs}
          title="CNG Cabs"
          description="Eco-friendly and affordable CNG cab services."
        />
        <FeatureCard
          image={ExploreIndia}
          title="Explore North India"
          description="Discover the beauty and culture of North India."
        />
      </div>
    </div>
  );
};

export default Home;
