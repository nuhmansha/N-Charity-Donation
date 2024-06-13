import React from "react";
import { Link } from "react-router-dom";

const EventCart = ({ event }) => {
  console.log(event, "eeeeee");
  return (
    <div className="flex flex-col md:flex-row items-center md:items-center bg:white p-6 rounded-lg  shadow-lg shadow-scale-100 mb-4 transition duration-300 ease-in-out transform hover:scale-105">
      <img
        src={event.image}
        alt={event.title}
        className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg mr-4 mb-4 md:mb-0"
      />
      <div className="flex-1 lg:space-x-6">
        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
        <p className="text-sm text-gray-500 mb-1">{event.data}</p>
        <p className="text-sm text-gray-500">{event.location}</p>
        
      </div>
      <Link to={`/event/${event.id}`}>
          <button className=" mt-5 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out">
            Join Now
          </button>
        </Link>
    </div>
  );
};

export default EventCart;
