import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 py-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-3">About Magicbricks</h3>
              <p className="text-sm text-gray-600 mb-3">
                As the largest platform connecting property buyers and sellers,
                ...
              </p>
              <a
                href="/"
                className="text-red-500 text-sm font-medium hover:underline"
              >
                Read more
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">
                More from our Network
              </h3>
              <p className="text-sm text-gray-600 mb-4">Times Now | ET Now</p>

              <div className="flex space-x-4 text-gray-500 text-2xl">
                <a href="/" className="hover:text-red-500">
                  <FaFacebookF />
                </a>
                <a href="/" className="hover:text-red-500">
                  <FaTwitter />
                </a>
                <a href="/" className="hover:text-red-500">
                  <FaLinkedinIn />
                </a>
                <a href="/" className="hover:text-red-500">
                  <FaYoutube />
                </a>
                <a href="/" className="hover:text-red-500">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-3">
                New Projects in India
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {[
                  "New Projects in New Delhi",
                  "New Projects in Mumbai",
                  "New Projects in Chennai",
                  "New Projects in Pune",
                  "New Projects in Noida",
                  "New Projects in Gurgaon",
                  "New Projects in Bangalore",
                  "New Projects in Ahmedabad",
                ].map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-3">
                Properties in India
              </h3>
              <ul className="text-sm text-gray-600 space-y-1 ">
                {[
                  "Property in New Delhi",
                  "Property in Mumbai",
                  "Property in Chennai",
                  "Property in Pune",
                  "Property in Noida",
                  "Property in Gurgaon",
                  "Property in Bangalore",
                  "Property in Ahmedabad",
                ].map((property, index) => (
                  <li key={index}>{property}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 pt-6">
          <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-600">
            <div className="flex flex-wrap justify-center sm:justify-start space-x-4 mb-4 sm:mb-0">
              {[
                "Sitemap",
                "Terms & Conditions",
                "Privacy Policy",
                "Whistle Blower Policy",
                "Blog",
                "Careers",
                "Testimonials",
                "Unsubscribe",
                "Help Center",
                "Sales Enquiry",
                "Buy Our Services",
              ].map((link, index) => (
                <a
                  key={index}
                  href="/"
                  className="hover:text-red-500 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
              Disclaimer: Magicbricks Realty Services Limited is only an
              intermediary offering its platform ...
            </p>
          </div>

          <p className="text-xs text-gray-500 mt-8 text-center">
            © 2025 Magicbricks Realty Services Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
