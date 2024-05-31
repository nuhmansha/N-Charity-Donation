import React from 'react'
import { Link } from 'react-router-dom';
import Causes from './Causes';

 function CauseCart() {
  return (
    <div className="mt-20 bg-white shadow-md rounded-lg overflow-hidden">
    <Link to={`/causes/${Causes.id}`}>
      <img src={Causes.image} alt={Causes.title} className="w-full h-48 object-cover" />
    </Link>
    <div className="p-4">
      <div className="flex justify-between mb-2">
        <span className="text-blue-600 font-semibold">Goal: {Causes.goal}</span>
        <span className="text-blue-600 font-semibold">Rise: {Causes.rise}</span>
        <span className="text-blue-600 font-semibold">To Go: {Causes.toGo}</span>
      </div>
      <h3 className="text-lg font-bold mb-2">{Causes.title}</h3>
      <p className="text-gray-600 mb-4">{Causes.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-gray-500">By {Causes.author}</span>
        <Link to={`/causes/${Causes.id}`} className="text-blue-500 hover:text-blue-700">Donate Now</Link>
      </div>
    </div>
  </div>
);
};

export default CauseCart;
