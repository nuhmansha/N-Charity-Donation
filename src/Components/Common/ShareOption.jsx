import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";

const ShareOptions = ({ type, id }) => {
  const itemUrl = `${window.location.origin}/${type}/${id}`;

  const shareViaWhatsApp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      itemUrl
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const shareViaEmail = () => {
    const emailUrl = `mailto:?subject=${encodeURIComponent(
      `Check out this ${type}`
    )}&body=${encodeURIComponent(itemUrl)}`;
    window.open(emailUrl, "_blank");
  };

  return (
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
  );
};

export default ShareOptions;
