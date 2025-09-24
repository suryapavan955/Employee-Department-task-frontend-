
import { useState } from "react";
import EmployeeCard from "./Employeecards.jsx";

const EmployeeList = ({ employees, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState([]);

  const itemsPerPage = 12;
  const totalPages = Math.ceil(employees.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEmployees = employees.slice(startIndex, startIndex + itemsPerPage);

  // Handle select
  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    const currentPageIds = currentEmployees.map((e) => e.id);
    const allSelected = currentPageIds.every((id) => selectedIds.includes(id));

    if (allSelected) {
      setSelectedIds((prev) => prev.filter((id) => !currentPageIds.includes(id)));
    } else {
      setSelectedIds((prev) => [...new Set([...prev, ...currentPageIds])]);
    }
  };

  const deleteSelected = () => {
    selectedIds.forEach((id) => onDelete(id));
    setSelectedIds([]);
  };

  return (
    <div className="max-w-full  mx-8 p-5 mt-8">
      {/* Top Actions */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-3 items-center">
          <button
            onClick={toggleSelectAll}
            className="flex items-center gap-2 px-4 py-2 border rounded-md bg-gray-50 hover:bg-gray-100">

            {currentEmployees.every((e) => selectedIds.includes(e.id))
              ? "Unselect All"
              : "Select All"}
          </button>
          <button
            onClick={deleteSelected}
            disabled={selectedIds.length === 0}
            className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white disabled:opacity-50"
          >
            Delete Selected
          </button>
        </div>
        <p className="text-sm text-gray-600">
          👥 {employees.length} employee(s)
        </p>
      </div>

      {/* Employee Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentEmployees.length > 0 ? (
          currentEmployees.map((emp) => (
            <EmployeeCard
              key={emp.id}
              employee={emp}
              onDelete={onDelete}
              onSelect={toggleSelect}
              selected={selectedIds.includes(emp.id)}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No employees found.
          </p>
        )}
      </div>

      {/* Pagination */}
      {employees.length > itemsPerPage && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-100 rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-100 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
