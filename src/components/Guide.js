import React from "react";
import AdviceTools from "./AdviceTools";
import RealEstate from "./RealEstate";
import { CiImageOn } from "react-icons/ci";
import pop1 from "../images/pop-1.jpg";
import pop2 from "../images/pop-2.jpg";
import pop3 from "../images/pop-3.jpg";
import pop4 from "../images/pop-4.jpg";
import PropOp from "./PropOp";

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

const Guide = () => {
  return (
    <div className="container mx-auto px-3 md:px-0 md:max-w-screen-xl">
      <AdviceTools />
      <RealEstate />

      <div className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl  text-gray-800">
              <span className="border-b-4 rounded-sm border-yellow-300">
                Fre
              </span>
              sh Properties in Chennai
            </h2>
            <a
              href="/"
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

      <PropOp />
    </div>
  );
};

export default Guide;
