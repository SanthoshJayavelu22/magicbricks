import React from "react";

const Header = () => {
  return (
    <div className="md:fixed md:top-0 md:w-full md:z-50">
      <nav className="  bg-red ">
        <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-1 ">
          <div className="flex">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse mr-8"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                MagicBricks
              </span>
            </a>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar1"
              className="flex items-center justify-between w-full py-2 px-3  rounded  md:border-0  md:p-0 md:w-auto hover:bg-white text-white hover:text-red hover:p-1"
            >
              Chennai{" "}
              <svg
                className="w-2.5 h-2.5 ms-2.5"
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

            <div
              id="dropdownNavbar1"
              className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
            >
              <ul
                className="py-2 text-sm text-black"
                aria-labelledby="dropdownLargeButton"
              >
                <li>
                  <a href="/" className="block px-4 py-2 ">
                    Nearby Cities
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2 ">
                    Popular Cities
                  </a>
                </li>
                <li>
                  <a href="/" className="block px-4 py-2">
                    Other Cities
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col  p-4 md:p-0 mt-4 items-center rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar2"
                  className="flex items-center justify-between w-full py-2 px-3  rounded  md:border-0  md:p-0 md:w-auto hover:bg-white text-white hover:text-red hover:p-1"
                >
                  MB Prime{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
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

                <div
                  id="dropdownNavbar2"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
                >
                  <ul
                    className="p-3 text-sm text-black"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="/"
                        className="block px-2 py-2 bg-red rounded-lg text-center text-white font-bold"
                      >
                        Join Now
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar3"
                  className="flex items-center justify-between w-full py-2 px-3  rounded  md:border-0  md:p-0 md:w-auto hover:bg-white text-white hover:text-red hover:p-1"
                >
                  Login{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
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

                <div
                  id="dropdownNavbar3"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
                >
                  <ul
                    className="p-3 text-sm text-black"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="/"
                        className="block px-2 py-2 bg-red rounded-lg text-center text-white font-bold"
                      >
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="/"
                  className="block p-1 px-3 bg-white rounded-full text-center text-black "
                >
                  Post Property{" "}
                  <span className="bg-yellow-400 text-xs rounded-3xl px-2 ">
                    FREE
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="  bg-white border-b  hidden md:block">
        <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-2 ">
          <div className=" w-full  md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col  p-4 md:p-0 mt-4 items-center rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 gap-7">
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar4"
                  className="flex items-center justify-between w-full py-2 px-3  rounded  md:border-0  md:p-0 md:w-auto hover:bg-white text-black hover:text-red "
                >
                  Buy{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="red"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar4"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
                >
                  <ul
                    className="py-2 text-sm text-black"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a href="/" className="block px-4 py-2 ">
                        Nearby Cities
                      </a>
                    </li>
                    <li>
                      <a href="/" className="block px-4 py-2 ">
                        Popular Cities
                      </a>
                    </li>
                    <li>
                      <a href="/" className="block px-4 py-2">
                        Other Cities
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar5"
                  className="flex items-center justify-between w-full py-2 px-3  rounded  md:border-0  md:p-0 md:w-auto hover:bg-white text-black hover:text-red"
                >
                  Rent{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="red"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar5"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
                >
                  <ul
                    className="py-2 text-sm text-black"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a href="/" className="block px-4 py-2 ">
                        Nearby Cities
                      </a>
                    </li>
                    <li>
                      <a href="/" className="block px-4 py-2 ">
                        Popular Cities
                      </a>
                    </li>
                    <li>
                      <a href="/" className="block px-4 py-2">
                        Other Cities
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar6"
                  className="flex items-center justify-between w-full py-2 px-3  rounded  md:border-0  md:p-0 md:w-auto hover:bg-white text-black hover:text-red "
                >
                  Sell{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="red"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar6"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
                >
                  <ul
                    className="py-2 text-sm text-black"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a href="/" className="block px-4 py-2 ">
                        Nearby Cities
                      </a>
                    </li>
                    <li>
                      <a href="/" className="block px-4 py-2 ">
                        Popular Cities
                      </a>
                    </li>
                    <li>
                      <a href="/" className="block px-4 py-2">
                        Other Cities
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar7"
                  className="flex items-center justify-between w-full py-2 px-3  rounded  md:border-0  md:p-0 md:w-auto hover:bg-white text-black hover:text-red "
                >
                  Home Loans{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="red"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar7"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
                >
                  <ul
                    className="py-2 text-sm text-black"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a href="/" className="block px-4 py-2 ">
                        Nearby Cities
                      </a>
                    </li>
                    <li>
                      <a href="/" className="block px-4 py-2 ">
                        Popular Cities
                      </a>
                    </li>
                    <li>
                      <a href="/" className="block px-4 py-2">
                        Other Cities
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar8"
                  className="flex items-center justify-between w-full py-2 px-3  rounded  md:border-0  md:p-0 md:w-auto hover:bg-white text-black hover:text-red"
                >
                  Home Interiors{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="red"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar8"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
                >
                  <ul
                    className="py-2 text-sm text-black"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a href="/" className="block px-4 py-2 ">
                        Nearby Cities
                      </a>
                    </li>
                    <li>
                      <a href="/" className="block px-4 py-2 ">
                        Popular Cities
                      </a>
                    </li>
                    <li>
                      <a href="/" className="block px-4 py-2">
                        Other Cities
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar9"
                  className="flex items-center justify-between w-full py-2 px-3  rounded  md:border-0  md:p-0 md:w-auto hover:bg-white text-black hover:text-red "
                >
                  MB Advice
                  <span className="bg-yellow-400 text-xs rounded-3xl px-2 ml-1">
                    NEW
                  </span>
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="red"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar9"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
                >
                  <ul
                    className="py-2 text-sm text-black"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a href="/" className="block px-4 py-2 ">
                        Nearby Cities
                      </a>
                    </li>
                    <li>
                      <a href="/" className="block px-4 py-2 ">
                        Popular Cities
                      </a>
                    </li>
                    <li>
                      <a href="/" className="block px-4 py-2">
                        Other Cities
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar10"
                  className="flex items-center justify-between w-full py-2 px-3  rounded  md:border-0  md:p-0 md:w-auto hover:bg-white text-black hover:text-red "
                >
                  Help{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="red"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar10"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
                >
                  <ul
                    className="py-2 text-sm text-black"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a href="/" className="block px-4 py-2 ">
                        Nearby Cities
                      </a>
                    </li>
                    <li>
                      <a href="/" className="block px-4 py-2 ">
                        Popular Cities
                      </a>
                    </li>
                    <li>
                      <a href="/" className="block px-4 py-2">
                        Other Cities
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
