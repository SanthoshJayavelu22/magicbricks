import React from "react";
import prop1 from "../images/prop-1.webp";
import prop2 from "../images/prop-2.webp";
import prop3 from "../images/prop-3.webp";
import prop4 from "../images/prop-4.webp";

const Banner = () => {
  const categories = [
    {
      id: 1,
      title: "Owner Properties",
      count: "9937",
      image: prop1,
    },
    {
      id: 2,
      title: "Projects",
      count: "374",
      image: prop2,
    },
    {
      id: 3,
      title: "Ready to move-in",
      count: "8543",
      image: prop3,
    },
    {
      id: 4,
      title: "Budget Homes",
      count: "1741",
      image: prop4,
    },
  ];

  return (
    <div className="container mx-auto px-3 md:px-0 md:max-w-screen-xl">
      <div className="bg-white py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl  text-gray-800 mb-6">
            <span className="border-b-4 rounded-sm border-red">We</span>'ve got
            properties for everyone
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="relative bg-cover bg-center rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover rounded-lg"
                />

                <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-4">
                  <div className="text-white text-2xl font-semibold">
                    {category.count}
                  </div>
                  <div className="text-white font-semibold text-lg">
                    {category.title}
                  </div>
                  <a
                    href="/"
                    className="text-sm text-white font-semibold mt-1 flex items-center"
                  >
                    Explore <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
