import Tabs from "./Tabs";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import sliderOne from "../images/slider-1.png";
import sliderTwo from "../images/slider-2.png";
import sliderThree from "../images/slider-3.jpg";


const SearchBar = () => {
  return (
    <div className="container mx-auto px-3 md:px-0 md:max-w-screen-xl">
      <div className="mt-5 md:mt-40 grid grid-cols-12">
        <div className="col-span-12 md:col-span-9">
          <div className="text-center">
            <p className="text-2xl md:text-3xl">
              Find a home you'll{" "}
              <span className="text-6xl font-cursive">love</span>
            </p>
            <Tabs />
            <div>
              <form className=" mx-auto mt-4">
                <label
                  for="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only "
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <IoLocationSharp size={18} color="#d92329" />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full px-8 py-5 text-sm md:text-md shadow-md text-gray-900 border border-gray-400 rounded-full bg-white "
                    placeholder="Enter City Locality, Project"
                    required
                  />
                  <div className="absolute inset-x-96 inset-y-0  flex items-center ps-3 border-x my-3 border-gray-400  cursor-pointer">
                    <IoMdHome
                      size={18}
                      color="#d92329"
                      className="hidden md:block"
                    />
                    <button
                      id="dropdownNavbarLink"
                      data-dropdown-toggle="dropdownNavbar199"
                      className="hidden md:flex items-center justify-between w-full py-2 px-3  md:w-auto  text-gray-500 "
                    >
                      Flat +1{" "}
                      <svg
                        className="w-2.5 h-2.5 ms-16"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="absolute left inset-y-0  flex items-center ps-3  cursor-pointer">
                    <RiMoneyRupeeCircleFill
                      size={18}
                      color="#d92329"
                      className="hidden md:block"
                    />

                    <button
                      id="dropdownNavbarLink"
                      data-dropdown-toggle="dropdownNavbar199"
                      className="hidden md:flex items-center  justify-between w-full py-2 px-3  md:w-auto  text-gray-500 "
                    >
                      Budget{" "}
                      <svg
                        className="w-2.5 h-2.5 ms-16"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="text-white flex items-center justify-center absolute end-2 bottom-2.5 bg-red hover:bg-rose-500 w-32 md:w-44 rounded-3xl text-xl font-semibold p-2 "
                  >
                    <IoMdSearch
                      size={18}
                      color="fff"
                      className="hidden md:block"
                    />{" "}
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="md:col-span-3 hidden md:block">
          <div
            id="default-carousel"
            className="relative w-64 ml-12 mt-4"
            data-carousel="slide"
          >
            <div className="relative h-56 overflow-hidden rounded-lg md:h-56">
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src={sliderOne}
                  className="absolute block w-full rounded-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src={sliderTwo}
                  className="absolute block w-full rounded-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src={sliderThree}
                  className="absolute block w-full rounded-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
