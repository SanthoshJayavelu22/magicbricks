import React, { useState } from "react";

const PropOp = () => {
  const [activeTab] = useState("Bangalore");

  const tabs = [
    "Bangalore",
    "Mumbai",
    "Hyderabad",
    "Thane",
    "Pune",
    "New Delhi",
    "Chennai",
    "Ahmedabad",
    "Kolkata",
    "Gurgaon",
    "Noida",
    "Navi Mumbai",
  ];

  const data = {
    Bangalore: {
      Flats: [
        "Flats in Whitefield",
        "Flats in Sarjapur Road",
        "Flats in Electronic City",
        "Flats in Koramangala",
        "Flats in HSR Layout",
        "Flats in Marathahalli",
        "Flats in Hebbal",
        "Flats in Kanakapura Road",
        "Flats in Bellandur",
        "Flats in Varthur",
      ],
      Houses: [
        "House for Sale in Whitefield",
        "House for Sale in HSR Layout",
        "House for Sale in JP Nagar",
        "House for Sale in Koramangala",
        "House for Sale in Sarjapur Road",
        "House for Sale in Hebbal",
        "House for Sale in Yelahanka",
        "House for Sale in Electronic City",
        "House for Sale in Marathahalli",
        "House for Sale in Bellandur",
      ],
      Properties: [
        "Property in Whitefield",
        "Property in Sarjapur Road",
        "Property in Electronic City",
        "Property in Yelahanka",
        "Property in HSR Layout",
        "Property in Koramangala",
        "Property in Marathahalli",
        "Property in Hebbal",
        "Property in JP Nagar",
        "Property in Bellandur",
      ],
      Plots: [
        "Plots in Whitefield",
        "Plots in Sarjapur Road",
        "Plots in Yelahanka",
        "Plots in Electronic City",
        "Plots in HSR Layout",
        "Plots in Kanakapura Road",
        "Plots in Marathahalli",
        "Plots in JP Nagar",
        "Plots in Sarjapur",
        "Plots in Bellandur",
      ],
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl  mb-4">Property Options in Top Cities for Buy</h2>

      <div className="overflow-x-auto">
        <div className="flex border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 text-sm whitespace-nowrap ${
                activeTab === tab
                  ? "border-b-2 border-red-500 text-red-600 font-semibold"
                  : "text-gray-600 hover:text-red-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {["Flats", "Houses", "Properties", "Plots"].map((category) => (
          <div key={category}>
            <h3 className="text-lg font-semibold mb-4">
              {category} in {activeTab}
            </h3>
            <ul className="space-y-2">
              {data[activeTab][category].map((item, index) => (
                <li key={index}>
                  <a href="/" className="text-gray-800 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropOp;
