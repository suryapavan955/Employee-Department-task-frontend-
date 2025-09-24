import { useLocation, useNavigate } from "react-router-dom";
 


import React from 'react';

const Header = () => {
 
    const navigate = useNavigate();

  return (
    <div className="w-full bg-white shadow-sm border-b border-gray-100">
      <header className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand Section */}
          <section className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Employee Dashboard</h1>
            </div>
          </section>

          {/* Navigation & User Section */}
          <section className="flex items-center space-x-8">
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <ul className="flex items-center space-x-8">
                <li>
                  <a 
                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/")}
                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                  >
                    Dashboard
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
                  </button>
                </li>
              </ul>
            </nav>

            {/* User Profile Section */}
            <div className="flex items-center space-x-3">
              <div className="relative group cursor-pointer">
                <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s" 
                    alt="User Profile" 
                    className="w-9 h-9 rounded-full border-2 border-gray-200 object-cover"
                  />
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </section>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden mt-4 pt-4 border-t border-gray-100">
          <nav className="flex flex-col space-y-3">
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium py-2 transition-colors duration-200">
              Home
            </a>
            <button
              onClick={() => navigate("/")}
              className="text-gray-600 hover:text-blue-600 font-medium py-2 text-left transition-colors duration-200"
            >
              Dashboard
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;