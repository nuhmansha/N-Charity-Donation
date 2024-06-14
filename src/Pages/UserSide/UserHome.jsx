import React, { useState } from "react";
import Image_1 from "../../assets/images/childrens-charity-challanges.png";
import Causes from "./Causes/Causes";
import Collaboration from "../../Components/Common/Collaboration";
import { useNavigate } from "react-router-dom";
import BannerCause from "../../Components/Common/BannerCause";
import EventPage from "./CharityEvent/EventPage";
import { Link } from "react-router-dom";
import StatusSection from "../../Components/Common/StatusSection";
import BlogPage from "./Blog/BlogPage";

const UserHome = () => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/causes");
  };

  return (
    <div className="relative bg-white">
      <div className="mt-20 container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center">
        <div className="relative text-center md:text-left md:w-2/3">
          <div
            className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-500 animate-fadeIn"
            style={{ width: "200px", height: "200px" }}
          ></div>
          <h1 className="relative z-10 text-4xl md:text-6xl text-black font-bold leading-tight max-w-4xl mx-auto md:mx-0">
            We Need Your <span className="text-yellow-400">Powerful Hands</span>{" "}
            To <span className="text-blue-500">Change</span> The World.
          </h1>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600">
              All Causes
            </button>
            <button className="bg-transparent text-black border border-black px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white">
              Donate Now
            </button>
          </div>
        </div>
        <div className="mt-12 md:mt-0 md:ml-8 flex justify-center md:justify-end md:w-1/3 relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg z-0">
            <img
              src={Image_1}
              alt="Child"
              className="w-full h-full object-cover animate-fadeIn"
            />
          </div>
          <div
            className="absolute top-10 left-full transform -translate-x-3/4 -translate-y-1/3 rounded-full border-2 border-blue-500 bg-transparent z-10 animate-fadeIn"
            style={{ width: "200px", height: "200px" }}
          ></div>
          <div
            className="absolute top-1 left-full transform -translate-x-1/10 -translate-y-1/3 bg-blue-500 border-2 rounded-full z-20 animate-fadeIn"
            style={{ width: "50px", height: "50px" }}
          ></div>
        </div>
      </div>

      <h1 className="mt-10 text-4xl md:text-4xl text-black font-bold flex justify-center">
        How could you help?
      </h1>

      <div className="mt-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-60 h-60 border-2 border-green-500 flex flex-col justify-center items-center rounded hover:rounded-full transition-all duration-300">
          <div className="text-center p-4">
            <p className="font-bold">Become a Volunteer</p>
            <p className="mt-2">
              You can contribute your time, skills, and knowledge through
              volunteering with the UN.
            </p>
            <button className="mt-5 bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Read more
            </button>
          </div>
        </div>

        <div className="w-full md:w-60 h-60 border-2 border-green-500 flex flex-col justify-center items-center rounded-full hover:rounded transition-all duration-300">
          <div className="text-center p-4">
            <p className="font-bold">Call for donation</p>
            <p className="mt-2">
              You can contribute your time, skills, and knowledge through
              volunteering with the UN.
            </p>
            <button className="mt-5 bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Read more
            </button>
          </div>
        </div>

        <div className="w-full md:w-60 h-60 border-2 border-green-500 flex flex-col justify-center items-center rounded hover:rounded-full transition-all duration-300">
          <div className="text-center p-4">
            <p className="font-bold">Send donation</p>
            <p className="mt-2">
              You can contribute your time, skills, and knowledge through
              volunteering with the UN.
            </p>
            <button className="mt-5 bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Read more
            </button>
          </div>
        </div>
      </div>

      <Collaboration />

      <h2 className="mt-10 text-3xl text-black font-bold flex justify-center">
        Our <span className="text-yellow-400">Causes</span>
      </h2>
      <div className=" mt-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-around gap-4">
        <Causes limit={4} />
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={handleViewMore}
          className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600"
        >
          View More
        </button>
      </div>
      <BannerCause />
      {/* *******************************  */}
      {/* EVENTS PAGE  */}

      <div className="mt-20 container mx-auto p-6">
        <h2 className="mt-10 text-3xl text-yellow-400 font-bold flex justify-center">
          Our <span className="text-black">Events</span>
        </h2>
        <div className="flex flex-col md:flex-row lg:space-x-6 items-center">
          <div className="mb-4 text-center flex flex-col gap-3 ">
            <h2 className="text-3xl font-bold">
              <span className="text-yellow-400">Multiple Event </span>
              <span className="text-black"> &</span>{" "}
              <span className="text-blue-500">Conference</span>
            </h2>
            <p className="text-gray-600  font-semibold">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-black w-full">
              <Link to="/events">View All Events</Link>
            </button>
          </div>

          <div className="w-full md:w-2/3">
            <EventPage limit={2} />
          </div>
        </div>
      </div>

      <StatusSection />

      {/* BLOG PAGE  */}
      <BlogPage limit={3} />
      <div className="flex justify-center">
        <button className="mt-10 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-black w-2/1">
          <Link to="/blogs">View All blogs</Link>
        </button>
      </div>
    </div>
  );
};

export default UserHome;
