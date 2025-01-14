import React from "react";
import homedecor from "../images/graphic-home-decor.jpg";
import homeloan from "../images/graphic-home-loans.webp";
import propbg from "../images/propworth-bg.jpg";
import pop1 from "../images/pop-1.jpg";
import pop2 from "../images/pop-2.jpg";
import pop3 from "../images/pop-3.jpg";
import pop4 from "../images/pop-4.jpg";
import { CiImageOn } from "react-icons/ci";

const properties = [
  {
    id: 1,
    title: "3 BHK Flat",
    price: "₹65 Lac",
    size: "1340 sqft",
    location: "Oragadam, Chennai",
    status: "Ready to Move",
    image: pop1,
    imagesCount: 11,
  },
  {
    id: 2,
    title: "4 BHK Flat",
    price: "₹1.60 Cr",
    size: "1630 sqft",
    location: "Perambur, Chennai",
    status: "Ready to Move",
    image: pop2,
    imagesCount: 14,
  },
  {
    id: 3,
    title: "3 BHK Flat",
    price: "₹4 Cr",
    size: "1820 sqft",
    location: "Perungudi, Chennai",
    status: "Ready to Move",
    image: pop3,
    imagesCount: 17,
  },
  {
    id: 4,
    title: "3 BHK Flat",
    price: "₹1.18 Cr",
    size: "1857 sqft",
    location: "Medavakkam, Chennai",
    status: "Ready to Move",
    image: pop4,
    imagesCount: 2,
  },
];

const Services = () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl  text-gray-800">
        <span className="border-b-4 rounded-sm border-yellow-300">Pro</span>
        perty Services
      </h2>

      <div className="max-w-screen-sm grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg w-72 mt-5">
          <img
            src={homeloan}
            alt="Best Home Loan Deals"
            className="w-full h-32 mb-4 rounded-t-lg"
          />

          <h3 className="text-lg font-semibold mb-2 ml-2">
            Best Home Loan Deals
          </h3>
          <p className="text-gray-600 ml-2">
            Compare & choose from 34+ banks to get the best home loan deal
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg w-72 mt-5">
          <img
            src={homedecor}
            alt="Best Home Loan Deals"
            className="w-full h-32 mb-4 rounded-t-lg"
          />

          <h3 className="text-lg font-semibold mb-2 ml-2">Home Interiors</h3>
          <p className="text-gray-600 ml-2">
            Transform your space with our trusted Decor partners
          </p>
        </div>
      </div>

      <div
        className="bg-cover bg-center text-white p-4 md:px-16 md:py-10 rounded-xl mt-14"
        style={{ backgroundImage: `url(${propbg})` }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">PropWorth</h2>
            <p className="text-2xl mb-4 font-semibold">
              Check Estimated Transaction Price of any Property
            </p>
            <ul className="text-white mb-4 space-y-2">
              <li>✔ 98% accuracy backed by ML models</li>
              <li>✔ Insight from 1 Crore+ listings posted annually</li>
            </ul>
          </div>

          <div className="md:w-1/2 w-full flex flex-col items-center  bg-white bg-opacity-15 text-gray-900 p-2 md:p-8 rounded-md shadow-lg space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative w-full">
              <input
                type="search"
                id="default"
                className="block w-full py-1 md:py-3 text-sm md:text-lg shadow-md text-black border border-gray-400 rounded-full bg-white "
                placeholder="Enter Project/Locality"
                required
              />

              <button
                type="submit"
                className="text-white flex items-center justify-center absolute top-0 end-0 bottom-0 bg-red hover:bg-rose-500 w-32 md:w-44 rounded-3xl text-lg font-semibold py-3 "
              >
                Get Estimate
              </button>
            </div>

            <p className="text-white !mt-2">
              Most accurate estimate in just 30 seconds
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl  text-gray-800">
              <span className="border-b-4 rounded-sm border-yellow-300">
                Exc
              </span>
              lusive Owner Properties in Chennai
            </h2>
            <a
              href="#"
              className="text-red text-sm font-semibold hover:underline"
            >
              See all Properties →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
                    <span className="flex">
                      {" "}
                      <CiImageOn color="white" className="mt-0.5 mr-1" />{" "}
                      {property.imagesCount}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-md  text-gray-800">{property.title}</h3>
                  <p className="text-gray-600 text-lg mb-2">
                    <span className="font-semibold">{property.price}</span> |{" "}
                    <span className="font-semibold"> {property.size}</span>
                  </p>
                  <p className="text-gray-500 text-sm">{property.location}</p>
                  <p className="text-gray-500 text-sm">{property.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
