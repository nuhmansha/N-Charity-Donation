import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" mt-20 bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="flex flex-col">
            <h2 className="text-lg font-bold mb-4">N-Charity</h2>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the industry's since the
              unknown. Lorem Ipsum is simply dummy text of the industry.
            </p>
          </div>

          {/* Gallery Section */}
          <div className="flex flex-col">
            <h2 className="text-lg font-bold mb-4">Gallery</h2>
            <div className="grid grid-cols-3 gap-2">
              {[...Array(6)].map((_, index) => (
                <img
                  key={index}
                  src={`https://via.placeholder.com/60?text=Image${index + 1}`}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-20 h-20 rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col">
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              {[
                { text: "About Us", path: "/about" },
                // { text: "Career", path: "/career" },
                // { text: "Leadership", path: "/leadership" },
                // { text: "FAQ's", path: "/faq" },
                // { text: "Appointments", path: "/appointments" },
                { text: "Donors", path: "/donors" },
                { text: "Become Volunteer", path: "/volunteer" },
                { text: "Donation History", path: "/donation-history" },
                // { text: "Donation Failed", path: "/donation-failed" },
                { text: "404", path: "/404" },
                // { text: "Coming Soon", path: "/coming-soon" },
                { text: "Medical Facilities", path: "/medical-facilities" },
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="hover:text-gray-400">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-4">
          <p className="text-sm">
            &copy; All rights reserved 2024{" "}
            <a href="#" className="text-blue-500 hover:text-blue-400">
              N-Charity
            </a>
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {[...Array(4)].map((_, index) => (
              <a key={index} href="#" className="hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Add your SVG paths here */}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
