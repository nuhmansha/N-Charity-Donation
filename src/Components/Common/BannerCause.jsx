import React from "react";
import {
  BannerImage1,
  BannerImage2,
  BannerImage3,
} from "../../../Utils/images";

const BannerCause = () => {
  return (
    <div className="mt-20 container mx-auto p-6 animate-fadeIn">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
        {/* Images Section */}
        <div className="flex flex-col gap-2">
          <img
            src={BannerImage1}
            alt="Main cause"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <div className="grid grid-cols-2 gap-4">
            <img
              src={BannerImage2}
              alt="Secondary cause 1"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            <img
              src={BannerImage3}
              alt="Secondary cause 2"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-between bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            Spark Change, Spread Hope.
          </h2>
          <p className="text-gray-700 mb-4">
            Charity is the act of extending love and kindness to others
            unconditionally, which is a conscious act but the decision is made
            by the heart, without expecting a reward.
          </p>

          <div className="flex flex-wrap gap-4 mb-2">
            <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-lg">
              $20
            </button>
            <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-lg">
              $50
            </button>
            <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-lg">
              $200
            </button>
            <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-lg">
              Custom
            </button>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <h4 className="text-3xl md:text-2xl lg:text-3xl font-bold text-blue-600">
              When we give cheerfully and accept gratefully,{" "}
              <span className="text-yellow-500">everyone is blessed.</span>
            </h4>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Great Donors</h3>
            <p className="text-gray-600 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="flex items-center gap-2">
              <span className="bg-blue-500 text-white text-sm py-1 px-3 rounded-full">
                350+
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCause;
