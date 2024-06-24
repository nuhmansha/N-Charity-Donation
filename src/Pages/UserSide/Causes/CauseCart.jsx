import React from 'react';
import { Link } from 'react-router-dom';

const CauseCard = ({ cause }) => {
  console.log(cause,'123');
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Link to={`/causes/${cause.id}`} className="flex-shrink-0">
        <img src={cause.image} alt={cause.title} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4 ">
        <div className="flex justify-between text-blue-600 text-sm font-semibold mb-2">
          <span className="text-blue-600 ">Goal: {cause.goal}</span>
          <span className="text-blue-600 ">Rise: {cause.rise}</span>
          <span className="text-blue-600 ">To Go: {cause.toGo}</span>
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
