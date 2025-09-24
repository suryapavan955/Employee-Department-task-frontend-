import './App.css'
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EmployeeDetail from "./pages/EmployeeDetails";
import React, { useState } from "react";


function App() {
  const [employees, setEmployees] = useState([]);

  const handleSave = (updatedEmployee) => {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === updatedEmployee.id ? updatedEmployee : emp))
    );
  };

  return (
     
    
    <Routes>
      <Route path="/" element={<Dashboard employees={employees} setEmployees={setEmployees} />} />
      <Route
        path="/employee/:id"
        element={<EmployeeDetail onSave={handleSave} />}
      />
    </Routes>

  );
}

export default App;
