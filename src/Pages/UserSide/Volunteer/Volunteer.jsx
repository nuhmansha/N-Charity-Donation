import React from "react";
import StatusSection from "../../../Components/Common/StatusSection";

// import Navbar from '../../Components/Common/Navbar';

function Volunteer() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Meet Our Volunteer
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-1/3">
          <img
            src=""
            alt="Volunteer 1"
            className="w-80 h-80 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:scale-105 hover:border-white focus:border-white border-2"
          />
        </div>
        <div className="w-full md:w-1/3">
          <img
            src=""
            alt="Volunteer 2"
            className="w-80 h-80 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:scale-105 hover:border-white focus:border-white border-2"
          />
        </div>
        <div className="w-full md:w-1/3">
          <img
            src=""
            alt="Volunteer 3"
            className="w-80 h-80 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:scale-105 hover:border-white focus:border-white border-2"
          />
        </div>
        
      </div>
      <div className="mt-20 flex justify-center">
        <button className="text-2xl border-2 border-gray-100 rounded-lg px-4 py-2 bg-gray-200 hover:bg-gray-400 focus:outline-none focus:border-blue-500 focus:shadow-outline">
          View All
        </button>
      </div>

      
      <StatusSection/>
    </div>
  );
}
export default Volunteer;
