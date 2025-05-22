import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo Placeholder */}
        <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800">
          LearningPlatform
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
          <Link to="/courses" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Courses</Link>
          <Link to="/resources" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Resources</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
        </nav>

        {/* Login/Register Buttons */}
        <div className="space-x-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
            Login
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-sm">
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 