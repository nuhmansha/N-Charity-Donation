import React, { useState, useEffect } from "react";

const colors = ["text-yellow-500", "text-red-800", "text-blue-800","text-red-300"];
const StatusSection = () => {
  const [hoveredIndex, setHoverIndex] = useState(null);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    if (hoveredIndex !== null) {
      const timer = setTimeout(() => {
        setColorIndex((PrevIndex) => (PrevIndex + 1) % colors.length);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [hoveredIndex, colorIndex]);

  const status = [
    { label: "Poor People", value: "520k" },
    { label: "Fund Rise", value: "842M" },
    { label: "Active Member", value: "24k" },
  ];
  return (
    <div className="flex flex-col md:flex-row justify-around items-center mt-24 space-y-6 md:space-y-0 md:space-x-6">
      {status.map((stat, index) => (
        <div
          key={index}
          className={`text-center transform transition duration-500 hover:scale-105 ${
            hoveredIndex === index ? colors[colorIndex] : ""
          }`}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <p className="text-3xl fond-bold">{stat.value}</p>
          <p className="text-gray-800 font-semibold">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatusSection;
