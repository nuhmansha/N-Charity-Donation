import React from "react";

const DataTable = ({ data, columns, onEdit, onDelete }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index} className="py-2 px-4 border-b text-left">
              {col.header}
            </th>
          ))}
          <th className="py-2 px-4 border-b text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((col, colIndex) => (
              <td key={colIndex} className="py-2 px-4 border-b">
                {item[col.accessor]}
              </td>
            ))}
            <td className="py-2 px-4 border-b">
              <div className="flex space-x-2">
                <button
                  className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                  onClick={() => onEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                  onClick={() => onDelete(item)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DataTable;
