import React, { useState } from "react";
import { FaShare } from "react-icons/fa";
import ShareOptions from "../../../Components/Common/ShareOption";

const BlogCart = ({ blog }) => {
  console.log(blog, "blog");

  const [showShareOptions, setShowShareOptions] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
      {/* <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" /> */}
      <div className="relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 left-0 bg-purple-600 text-white p-2">
          <p className="text-xs">{blog.date}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="bg-purple-200 text-purple-600 text-xs font-semibold px-2 py-1 rounded"></span>
          <FaShare
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={() => setShowShareOptions(!showShareOptions)}
          />
          {showShareOptions && <ShareOptions type="blog" id={blog.id} />}
        </div>
        <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-800 hover:underline">
            {blog.author}
          </span>
          <button className="text-purple-600 border border-purple-600 rounded px-3 py-1 text-sm hover:bg-purple-600 hover:text-white transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
