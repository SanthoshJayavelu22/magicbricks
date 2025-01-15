import React from "react";
import { useLocation } from "react-router-dom";
import { CiImageOn } from "react-icons/ci";
import pop1 from "../images/pop-1.jpg";
import pop2 from "../images/pop-2.jpg";
import pop3 from "../images/pop-3.jpg";
import pop4 from "../images/pop-4.jpg";
import Header from "./Header";
import Footer from "./Footer";


const properties = [
    { id: 1, title: "3 BHK Flat", price: "₹65 Lac", size: "1340 sqft", location: "Chennai", status: "Ready to Move", image: pop1, imagesCount: 11 },
    { id: 2, title: "2 BHK Flat", price: "₹45 Lac", size: "1000 sqft", location: "Coimbatore", status: "Under Construction", image: pop2, imagesCount: 8 },
    { id: 3, title: "4 BHK Villa", price: "₹2.5 Cr", size: "2500 sqft", location: "Madurai", status: "Ready to Move", image: pop3, imagesCount: 15 },
    { id: 4, title: "3 BHK Flat", price: "₹85 Lac", size: "1500 sqft", location: "Tiruchirappalli", status: "Ready to Move", image: pop4, imagesCount: 12 },
    { id: 5, title: "2 BHK Flat", price: "₹40 Lac", size: "900 sqft", location: "Salem", status: "Ready to Move", image: pop1, imagesCount: 6 },
    { id: 6, title: "3 BHK Flat", price: "₹1.2 Cr", size: "1800 sqft", location: "Tirunelveli", status: "Ready to Move", image: pop2, imagesCount: 10 },
    { id: 7, title: "1 BHK Flat", price: "₹25 Lac", size: "600 sqft", location: "Erode", status: "Under Construction", image: pop3, imagesCount: 3 },
    { id: 8, title: "4 BHK Villa", price: "₹3 Cr", size: "3000 sqft", location: "Thoothukudi", status: "Ready to Move", image: pop4, imagesCount: 18 },
    { id: 9, title: "3 BHK Flat", price: "₹75 Lac", size: "1400 sqft", location: "Dindigul", status: "Ready to Move", image: pop1, imagesCount: 9 },
    { id: 10, title: "2 BHK Flat", price: "₹55 Lac", size: "1200 sqft", location: "Vellore", status: "Ready to Move", image: pop2, imagesCount: 7 },
    { id: 11, title: "3 BHK Flat", price: "₹90 Lac", size: "1600 sqft", location: "Cuddalore", status: "Ready to Move", image: pop3, imagesCount: 14 },
    { id: 12, title: "4 BHK Villa", price: "₹4 Cr", size: "3200 sqft", location: "Tirupur", status: "Ready to Move", image: pop4, imagesCount: 20 },
    { id: 13, title: "2 BHK Flat", price: "₹50 Lac", size: "1100 sqft", location: "Nagapattinam", status: "Under Construction", image: pop1, imagesCount: 8 },
    { id: 14, title: "3 BHK Flat", price: "₹85 Lac", size: "1500 sqft", location: "Thanjavur", status: "Ready to Move", image: pop2, imagesCount: 11 },
    { id: 15, title: "2 BHK Flat", price: "₹35 Lac", size: "850 sqft", location: "Karur", status: "Under Construction", image: pop3, imagesCount: 5 },
    { id: 16, title: "3 BHK Flat", price: "₹1 Cr", size: "1750 sqft", location: "Sivaganga", status: "Ready to Move", image: pop4, imagesCount: 13 },
    { id: 17, title: "4 BHK Villa", price: "₹2.8 Cr", size: "2800 sqft", location: "Virudhunagar", status: "Ready to Move", image: pop1, imagesCount: 16 },
    { id: 18, title: "2 BHK Flat", price: "₹45 Lac", size: "1000 sqft", location: "Ramanathapuram", status: "Ready to Move", image: pop2, imagesCount: 7 },
    { id: 19, title: "3 BHK Flat", price: "₹70 Lac", size: "1300 sqft", location: "Namakkal", status: "Ready to Move", image: pop3, imagesCount: 10 },
    { id: 20, title: "2 BHK Flat", price: "₹30 Lac", size: "800 sqft", location: "Pudukkottai", status: "Under Construction", image: pop4, imagesCount: 4 },
    { id: 21, title: "3 BHK Flat", price: "₹95 Lac", size: "1600 sqft", location: "Ariyalur", status: "Ready to Move", image: pop1, imagesCount: 9 },
    { id: 22, title: "2 BHK Flat", price: "₹48 Lac", size: "1050 sqft", location: "Perambalur", status: "Ready to Move", image: pop2, imagesCount: 6 },
    { id: 23, title: "3 BHK Flat", price: "₹80 Lac", size: "1400 sqft", location: "Krishnagiri", status: "Ready to Move", image: pop3, imagesCount: 12 },
    { id: 24, title: "2 BHK Flat", price: "₹42 Lac", size: "950 sqft", location: "Dharmapuri", status: "Under Construction", image: pop4, imagesCount: 5 },
    { id: 25, title: "3 BHK Flat", price: "₹78 Lac", size: "1450 sqft", location: "Theni", status: "Ready to Move", image: pop1, imagesCount: 8 },
    { id: 26, title: "4 BHK Villa", price: "₹3.5 Cr", size: "3200 sqft", location: "Kanyakumari", status: "Ready to Move", image: pop2, imagesCount: 19 },
    { id: 27, title: "2 BHK Flat", price: "₹52 Lac", size: "1150 sqft", location: "The Nilgiris", status: "Under Construction", image: pop3, imagesCount: 9 },
    { id: 28, title: "3 BHK Flat", price: "₹88 Lac", size: "1500 sqft", location: "Tiruvannamalai", status: "Ready to Move", image: pop4, imagesCount: 14 },
    { id: 29, title: "3 BHK Flat", price: "₹92 Lac", size: "1650 sqft", location: "Villupuram", status: "Ready to Move", image: pop1, imagesCount: 10 },
    { id: 30, title: "2 BHK Flat", price: "₹38 Lac", size: "900 sqft", location: "Tenkasi", status: "Under Construction", image: pop2, imagesCount: 6 },
    { id: 31, title: "4 BHK Villa", price: "₹4.2 Cr", size: "3400 sqft", location: "Ranipet", status: "Ready to Move", image: pop3, imagesCount: 22 },
    { id: 32, title: "3 BHK Flat", price: "₹80 Lac", size: "1400 sqft", location: "Mayiladuthurai", status: "Ready to Move", image: pop4, imagesCount: 13 },
  ];
  

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("location") || "";

  
  const filteredProperties = properties.filter((property) =>
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
       <Header/>
       <div className="container mx-auto px-3 md:px-0 md:max-w-screen-xl">
    <div className="mt-24 mb-24 px-4 ">
      <h1 className="text-center text-2xl mt-5">Search Results for "{searchTerm}" Back to <a href="/" className="font-semibold">Home</a></h1>
      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
          {filteredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img src={property.image} alt={property.title} className="w-full h-40 object-cover" />
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
                  <span className="flex">
                    <CiImageOn color="white" className="mt-0.5 mr-1" />
                    {property.imagesCount}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-md text-gray-800">{property.location}</h3>
                <p className="text-gray-600 text-lg mb-2">
                  <span className="font-semibold">{property.price}</span> | {property.size}
                </p>
                <p className="text-gray-500 text-sm">{property.title}</p>
                <p className="text-gray-500 text-sm">{property.status}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-5">No properties found for the specified location.</p>
      )}
    </div></div>
    <Footer/></>
  );
};

export default SearchResults;
