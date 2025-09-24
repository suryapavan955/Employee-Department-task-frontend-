import React, { useEffect, useState } from "react";
import { getEmployees } from "../api/employeeapi.js";
import Header from "../components/Header.jsx";
import SearchBar from "../components/Search.jsx";
import EmployeeList from "../components/Employeelist.jsx";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEmployees();
      setEmployees(data);
      setFiltered(data);
    };
    fetchData();
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFiltered(employees);
      setSearching(false);
      return;
    }
    const result = employees.filter((e) => e.id === Number(query));
    setFiltered(result);
    setSearching(true);
  };

  const handleDelete = (id) => {
    setFiltered(filtered.filter((e) => e.id !== id));
    setEmployees(employees.filter((e) => e.id !== id));
  };

  const handleBackToDashboard = () => {
    setFiltered(employees);
    setSearching(false);
  };

  return (

     <div className=" min-h-screen  bg-gray-100">
    <Header />
    <SearchBar onSearch={handleSearch} />

    {filtered.length === 0 && searching ? (
      <div className="text-center mt-10">
        <p className="text-gray-700">No employees found.</p>
        <button
          onClick={handleBackToDashboard}
          className="mt-4 px-5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
          Back to Dashboard
        </button>
      </div>
    ) : (
        <div  className="text-center pb-5 ">
      <EmployeeList employees={filtered} onDelete={handleDelete} />
        </div>
    )}
  </div>
  );
};

export default Dashboard;
