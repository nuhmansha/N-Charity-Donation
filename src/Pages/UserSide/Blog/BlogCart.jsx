import React, { useState } from "react";
import { FaShare } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
// import { useLocation } from "react-router-dom";

const BlogCart = ({ blog }) => {
  console.log(blog, "blog");

  const [showShareOptions, setShowShareOptions] = useState(false);

  const handleShareClick = () => {
    setShowShareOptions(!showShareOptions);
  };

  const shareViaWhatsApp = () => {
    const blogUrl = `${window.location.origin}/blog/${blog.id}`;

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      blog.id + " " + blogUrl
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const shareViaEmail = () => {
    const blogUrl = `${window.location.origin}/blog/${blog.id}`;

    const emailUrl = `mailto:?subject=${encodeURIComponent(
      blog.id
    )}&body=${encodeURIComponent(blogUrl)}`;
    window.open(emailUrl, "_blank");
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
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
        <div className="flex items-center justify-between mb-2">
          <span className="bg-purple-200 text-purple-600 text-xs font-semibold px-2 py-1 rounded"></span>
          <FaShare
            className="text-gray-500 hover:text-gray-700 cursor-point "
            onClick={handleShareClick}
          />
          {showShareOptions && (
            <div className="absolute top-6 right-0 bg-white border rounded shadow-md z-10">
              <button
                onClick={shareViaWhatsApp}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                <FiPhone className="inline mr-2" /> WhatsApp
              </button>
              <button
                onClick={shareViaEmail}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                <FiMail className="inline mr-2" /> Email
              </button>
            </div>
          )}
        </div>
        <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
        <div className="flex items-center justify-around">
          <span className="text-sm text-gray-800 hover:scale-105 ">
            {blog.author}
          </span>
          <button className="text-purple-600 border border-purple-600 rounded px-2 py-1 text-sm hover:bg-purple-600 hover:text-white transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
