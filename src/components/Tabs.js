import React, { useState } from "react";

const Tabs = () => {
  const tabs = [
    "Buy",
    "Rent",
    "New Projects",
    "PG",
    "Plot",
    "Commercial",
    "Post Free Property Ad",
  ];

  const [activeTab, setActiveTab] = useState("Buy");
  const [hoveredTab, setHoveredTab] = useState(null);

  return (
    <ul className="flex space-x-1 md:space-x-8 justify-center mt-5 md:mt-10">
      {tabs.map((tab) => (
        <li
          key={tab}
          onClick={() => setActiveTab(tab)}
          onMouseEnter={() => setHoveredTab(tab)}
          onMouseLeave={() => setHoveredTab(null)}
          className={`font-semibold text-xs md:text-sm cursor-pointer pb-2 ${
            hoveredTab === tab || (hoveredTab === null && activeTab === tab)
              ? "border-b-4 border-red"
              : "hover:border-b-4 hover:border-red"
          }`}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
