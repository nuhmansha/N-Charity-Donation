// import React, { useState } from "react";

// const Pagination = ({ totalPages, onPageChange }) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//       onPageChange(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//       onPageChange(currentPage + 1);
//     }
//   };

//   return (
//     <div className="flex justify-between items-center">
//       <button
//         onClick={handlePreviousPage}
//         disabled={currentPage === 1}
//         className={`bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
//       >
//         Previous
//       </button>
//       <span>Page {currentPage} of {totalPages}</span>
//       <button
//         onClick={handleNextPage}
//         disabled={currentPage === totalPages}
//         className={`bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Pagination;



import React from "react";

const Pagination = ({ totalPages, onPageChange, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`mx-2 px-3 py-1 rounded-lg focus:outline-none ${
            currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

