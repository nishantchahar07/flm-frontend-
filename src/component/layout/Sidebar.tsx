import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
      {/* Left side navigation links */}
      <div className="flex items-center space-x-6">
        <span className="font-medium text-gray-800 hover:text-blue-600 cursor-pointer">Products</span>
        <span className="font-medium text-gray-800 hover:text-blue-600 cursor-pointer">Courses</span>
        <span className="font-medium text-gray-800 hover:text-blue-600 cursor-pointer">Packages</span>
        <span className="font-medium text-gray-800 hover:text-blue-600 cursor-pointer">Manage</span>
        <span className="font-medium text-gray-800 hover:text-blue-600 cursor-pointer">Community</span>
        <span className="font-medium text-gray-800 hover:text-blue-600 cursor-pointer">Reports</span>
        <span className="font-medium text-gray-800 hover:text-blue-600 cursor-pointer">Marketing</span>
      </div>

      {/* Right side user profile */}
      <div className="flex items-center space-x-2">
        <span className="font-medium text-gray-800">Arjith</span>
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium text-gray-600">
          I
        </div>
        <span className="text-sm text-gray-500">Instructor</span>
      </div>
    </nav>
  );
};

export default Navbar;