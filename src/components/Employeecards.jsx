

import React from "react";
import { useNavigate } from "react-router-dom";

const EmployeeCard = ({ employee, onDelete, onSelect, selected }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col p-5  rounded-xl border bg-white shadow-sm hover:shadow-2xl transition relative"  >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={selected}
        onChange={() => onSelect(employee.id)}
        className="absolute top-3 left-3 w-4 h-4 accent-blue-600 cursor-pointer" />

      {/* Avatar */}
      
      <section className="flex flex-row items-center justify-start ml-5 gap-5">
      <div  className="w-12 h-12  bg-gray-200 rounded-full flex items-center justify-center  text-gray-600 text-lg font-bold "
        onClick={() => navigate(`/employee/${employee.id}`, { state: { employee } })} >

        {employee.employee_name[0]}
        
      </div>

      {/* Employee Info */}

      <section className="flex items-center gap-5 justify-start"> 
      <h2
        className="text-lg font-semibold text-gray-900 truncate text-center cursor-pointer"
        onClick={() =>
          navigate(`/employee/${employee.id}`, { state: { employee } })
        }
      >
        {employee.employee_name}
      </h2>

      <p className="text-sm text-gray-700">ID: {employee.id}</p>
      </section>
      </section>

        <section className="flex flex-col items-start justify-center pl-8  gap-2 mt-4">
                <p className="text-sm text-green-600 font-medium">
                    💲 Salary: ${employee.employee_salary}
                </p>
                <p className="text-sm text-gray-600">
                    📅 Age: {employee.employee_age} years
                </p>
         </section>

    
      <div className="flex justify-center gap-3 mt-4">
        <button
          className="px-3 py-1 rounded-md border-[2px] hover:bg-yellow-500 text-sm font-medium" >
          Edit
        </button>
        <button
          className="px-3 py-1 rounded-md bg-red-400 hover:bg-red-600 text-white text-sm font-medium"
          onClick={() => onDelete(employee.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
