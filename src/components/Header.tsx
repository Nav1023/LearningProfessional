import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Courses', path: '/courses' },
  { name: 'Resources', path: '/resources' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeLinkStyle = "text-green-500 font-semibold";
  const inactiveLinkStyle = "text-gray-700 hover:text-green-600 transition-colors duration-300";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors">
              {/* Placeholder Logo - replace with an actual SVG or Image component */}
              LearningPortal
            </Link>
          </div>

          {/* Hamburger Menu Button - visible on md and smaller screens */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X className="block h-7 w-7" /> : <Menu className="block h-7 w-7" />}
            </button>
          </div>

          {/* Desktop Navigation & Auth Buttons */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                className={({ isActive }) => `${isActive ? activeLinkStyle : inactiveLinkStyle} text-sm font-medium`}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login" className="flex items-center text-sm font-medium text-gray-700 hover:text-green-600 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors duration-300">
                <LogIn size={16} className="mr-1.5"/> Login
            </Link>
            <Link to="/register" className="flex items-center text-sm font-medium text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md transition-colors duration-300 shadow-sm">
                <UserPlus size={16} className="mr-1.5"/> Register
            </Link>
          </div>

        </div>
      </div>

      {/* Mobile Menu - Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2 space-y-2 sm:px-3">
                <Link 
                    to="/login" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    <LogIn size={18} className="mr-2"/> Login
                </Link>
                <Link 
                    to="/register" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    <UserPlus size={18} className="mr-2"/> Register
                </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 