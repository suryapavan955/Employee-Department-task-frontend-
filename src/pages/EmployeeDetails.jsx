

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const EmployeeDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const employee = location.state?.employee;

  if (!employee) return <p className="text-center mt-6">Employee not found!</p>;

  // Enhanced employee data with dummy values for missing fields
  const employeeData = {
    employee_name: employee.employee_name || "Garrett Winters",
    employee_id: employee.employee_id || "2",
    employee_age: employee.employee_age || "63 years",
    employee_salary: employee.employee_salary || "170,750",
    department: employee.department || "Senior Management",
    email: employee.email || "garrett.winters@company.com",
    phone: employee.phone || "+1 (555) 002-0063",
    hire_date: employee.hire_date || "10/4/1984",
    employment_status: employee.employment_status || "Active",
    manager: employee.manager || "CEO",
    level: employee.level || "Senior",
    role: employee.role || "Senior Professional"
  };

  return (
    <div className="bg-gray-50 min-h-screen gap-2 flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Employee Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl font-bold text-gray-900">
                    {employeeData.employee_name}
                  </h1>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>Employee ID: {employeeData.employee_id}</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {employeeData.level}
                  </span>
                  <span>{employeeData.role}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Professional Information */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-5 h-5 bg-gray-600 rounded"></div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Professional Information
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-600 rounded mt-1 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">$</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        Annual Salary
                      </p>
                      <p className="text-2xl font-bold text-green-600">
                        ${employeeData.employee_salary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gray-600 rounded mt-1 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">□</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        Department
                      </p>
                      <p className="font-semibold text-gray-900">
                        {employeeData.department}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-5 h-5 bg-gray-600 rounded"></div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Personal Information
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gray-600 rounded mt-1 flex items-center justify-center">
                      <span className="text-xs">📅</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        Age
                      </p>
                      <p className="font-semibold text-gray-900">
                        {employeeData.employee_age}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gray-600 rounded mt-1 flex items-center justify-center">
                      <span className="text-xs">✉</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        Email
                      </p>
                      <p className="font-semibold text-gray-900">
                        {employeeData.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gray-600 rounded mt-1 flex items-center justify-center">
                      <span className="text-xs">📞</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        Phone
                      </p>
                      <p className="font-semibold text-gray-900">
                        {employeeData.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="px-6 pb-6">
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-5 h-5 bg-gray-600 rounded"></div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Additional Details
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-2">
                    Employment Status
                  </p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {employeeData.employment_status}
                  </span>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">
                    Hire Date
                  </p>
                  <p className="font-semibold text-gray-900">
                    {employeeData.hire_date}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">
                    Manager
                  </p>
                  <p className="font-semibold text-gray-900">
                    {employeeData.manager}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="px-6 pb-6">
            <button
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              onClick={() => navigate("/")}
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;