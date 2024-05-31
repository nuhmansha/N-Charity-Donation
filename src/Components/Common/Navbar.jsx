import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/n-charity-high-resolution-logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 w-full shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={Logo} alt="Charity logo" className="h-10 md:rounded" />
          <div className="hidden md:flex items-center space-x-4 ml-10">
            <Link to="/" className="text-black px-4 py-2 hover:bg-blue-700 hover:text-white rounded">Home</Link>
            <Link to="/about" className="text-black px-4 py-2 hover:bg-blue-700 hover:text-white rounded">About</Link>
            <Link to="/causes" className="text-black px-4 py-2 hover:bg-blue-700 hover:text-white rounded">Causes</Link>
            <Link to="/blogs" className="text-black px-4 py-2 hover:bg-blue-700 hover:text-white rounded">Blog</Link>
            <Link to="/events" className="text-black px-4 py-2 hover:bg-blue-700 hover:text-white rounded">Event</Link>
            <Link to="/contact" className="text-black px-4 py-2 hover:bg-blue-700 hover:text-white rounded">Contact</Link>
          </div>
        </div>
        <Link to="/signup" className=" bg-blue-800 text-white hover:bg-black rounded border-2 border-blue-800 hover:border-black transition duration-300 ease-in-out transform hover:scale-105 px-4 py-2">
            Give Support</Link>
      </div>
    </nav>
  );
};

export default Navbar;
