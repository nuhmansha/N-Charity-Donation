import React from 'react';
import { Link } from 'react-router-dom';

const CauseCard = ({ cause }) => {
  console.log(cause);
  return (
    <div className="mt-10 flex flex-col bg-white shadow-md rounded-lg overflow-hidden max-w-sm mx-auto transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <Link to={`/causes/${cause.id}`} className="flex-shrink-0">
        <img src={cause.image} alt={cause.title} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div className="flex justify-between mb-2 gap-1">
          <span className="text-blue-600 font-semibold">Goal: {cause.goal}</span>
          <span className="text-blue-600 font-semibold">Rise: {cause.rise}</span>
          <span className="text-blue-600 font-semibold">To Go: {cause.toGo}</span>
        </div>
        <h3 className="text-lg font-bold mb-2">{cause.title}</h3>
        <p className="text-gray-600 mb-4">{cause.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-gray-500">By {cause.author}</span>
          <Link to={`/causes/${cause.id}`} className="text-blue-500 hover:text-blue-700">Donate Now</Link>
        </div>
      </div>
    </div>
  );
};

export default CauseCard;
