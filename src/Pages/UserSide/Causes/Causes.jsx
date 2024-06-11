import React, { useState } from "react";
import CauseCart from "./CauseCart";
import {  useLocation } from "react-router-dom";
import image from "../../../assets/images/childrens-charity-challanges.png"
import Pagination from "../../../Components/Common/Pagination";

const Causes = ({ limit }) => {
  const location = useLocation();

  // example cause details 
  const causeData = [
    {
      id: 1,
      image: image,
      title: "Cause 1",
      goal: "$5000",
      rise: "$3000",
      toGo: "$2000",
      description: "Description 1",
      author: "Adam",
    },
    {
      id: 2,
      image: image,
      title: "Cause 2",
      goal: "$7000",
      rise: "$5000",
      toGo: "$2000",
      description: "Description 2",
      author: "Eve",
    },
    {
      id: 3,
      image: image,
      title: "Cause 2",
      goal: "$7000",
      rise: "$5000",
      toGo: "$2000",
      description: "Description 2",
      author: "Even",
    },
    {
      id: 4,
      image: image,
      title: "Cause 2",
      goal: "$7000",
      rise: "$5000",
      toGo: "$2000",
      description: "Description 2",
      author: "Eve",
    },
    {
      id: 5,
      image: "image2.jpg",
      title: "Cause 2",
      goal: "$7000",
      rise: "$5000",
      toGo: "$2000",
      description: "Description 2",
      author: "Eve",
    },
    {
      id: 6,
      image: "image2.jpg",
      title: "Cause 2",
      goal: "$7000",
      rise: "$5000",
      toGo: "$2000",
      description: "Description 2",
      author: "Eve",
    },
    {
      id: 7,
      image: "image2.jpg",
      title: "Cause 2",
      goal: "$7000",
      rise: "$5000",
      toGo: "$2000",
      description: "Description 2",
      author: "Eve",
    },
    {
      id: 8,
      image: "image2.jpg",
      title: "Cause 2",
      goal: "$7000",
      rise: "$5000",
      toGo: "$2000",
      description: "Description 2",
      author: "Eve",
    },
    {
      id: 9,
      image: "image2.jpg",
      title: "Cause 2",
      goal: "$7000",
      rise: "$5000",
      toGo: "$2000",
      description: "Description 2",
      author: "Eve",
    },
    {
      id: 10,
      image: "image2.jpg",
      title: "Cause 2",
      goal: "$7000",
      rise: "$5000",
      toGo: "$2000",
      description: "Description 2",
      author: "jack",
    },

    // Add more causes as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const causesPerPage = 8;

  const indexOfLastCause = currentPage * causesPerPage;
  const indexOfFirstCause = indexOfLastCause - causesPerPage;

  const totalCauses =
    location.pathname === "/causes" ? causeData.length : limit;
  const displayedCauses =
    location.pathname === "/causes"
      ? causeData.slice(indexOfFirstCause, indexOfLastCause)
      : causeData.slice(0, limit);

  const totalPages = Math.ceil(totalCauses / causesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {displayedCauses.map((cause) => (
          <CauseCart key={cause.id} cause={cause} />
        ))}
      </div>
      {location.pathname === "/causes" && totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default Causes;
