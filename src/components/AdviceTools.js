import React from "react";
import {
  FaChartLine,
  FaCalculator,
  FaRupeeSign,
  FaFileAlt,
} from "react-icons/fa"; // Importing icons

const AdviceTools = () => {
  const tools = [
    {
      title: "Rates & Trends",
      description: "Know all about Property Rates & Trends in your city",
      icon: <FaChartLine size={36} className="text-black" />,
      link: "#",
    },
    {
      title: "EMI Calculator",
      description: "Know how much you'll have to pay every month on your loan",
      icon: <FaCalculator size={36} className="text-black" />,
      link: "#",
    },
    {
      title: "Investment Hotspot",
      description: "Discover the top localities in your city for investment",
      icon: <FaRupeeSign size={36} className="text-black" />,
      link: "#",
    },
    {
      title: "Research Insights",
      description: "Get experts insights and research reports on real estate",
      icon: <FaFileAlt size={36} className="text-black" />,
      link: "#",
    },
  ];

  return (
    <div className="bg-white py-5 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-2xl  mb-2 text-gray-800">Advice & Tools</h2>
        <div className="w-12 h-1 bg-emerald-400 mb-8"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md p-6 "
            >
              <div className="mb-4">{tool.icon}</div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {tool.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">{tool.description}</p>

              <a
                href={tool.link}
                className="text-red-500 font-medium hover:underline inline-flex items-center"
              >
                View now <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdviceTools;
