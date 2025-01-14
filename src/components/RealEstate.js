import React from "react";
import zero from "../images/0.jpg";
import patta from "../images/patta-chitta-tamil-nadu-land-records.jpg";

const RealEstate = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl  mb-2 text-gray-800">Your Real Estate Guide</h2>
      <div className="w-12 h-1 bg-red mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6 bg-white shadow-md">
          <h3 className="text-xl font-semibold mb-4">Industry Insights</h3>
          <ul className="space-y-3">
            <li className="border-b pb-2">
              <a href="/" className="text-black ">
                15 Vastu Tips for Residential Building
              </a>
            </li>
            <li className="border-b pb-2">
              <a href="/" className="text-black ">
                Sale Deed: Meaning, Format, and Components of a Sale Deed
              </a>
            </li>
            <li className="border-b pb-2">
              <a href="/" className="text-black">
                What Does RERA Carpet Area Mean & How is it Calculated
              </a>
            </li>
            <li className="border-b pb-2">
              <a href="/" className="text-black">
                Patta Chitta Online 2025 - E-services of Tamil Nadu Land Records
              </a>
            </li>
            <li>
              <a href="/" className="text-black">
                Top 18 Most Posh Areas in Chennai (Best Residential Places &
                Localities)
              </a>
            </li>
          </ul>
          <div className="mt-4 ">
            <a href="/" className="text-red-600  font-semibold">
              See all →
            </a>
          </div>
        </div>

        <div className="border rounded-lg p-6 bg-white shadow-md">
          <h3 className="text-xl font-semibold mb-4">Legal Updates</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-4 border-b pb-2">
              <img
                src={zero}
                alt="Video thumbnail"
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <a href="/" className="text-black hover:underline">
                  Inheritance Laws in India - All You Need to Know
                </a>
                <p>
                  <a
                    href="/"
                    className="text-red-600 hover:underline font-semibold"
                  >
                    Watch video →
                  </a>
                </p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <img
                src={patta}
                alt="Article thumbnail"
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <a href="/" className="text-black hover:underline">
                  Patta Chitta Online 2025 - E-services of Tamil Nadu Land
                  Records
                </a>
                <p>
                  <a
                    href="/"
                    className="text-red-600 hover:underline font-semibold"
                  >
                    Read article →
                  </a>
                </p>
              </div>
            </li>
          </ul>
          <div className="mt-4 md:mt-16">
            <a href="/" className="text-red-600 hover:underline font-semibold">
              See all →
            </a>

            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 ml-5 md:ml-72">
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstate;
