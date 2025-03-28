import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { 
  Menu, 
  Home, 
  User, 
  Settings, 
  LogOut, 
  PlusCircle, 
  LayoutGrid 
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual auth state

  const navItems = [
    { 
      icon: Home,
      color: 'text-blue-600',
      name: 'Dashboard', 
      link: '/dashboard',
      delay: 'delay-100'
    },
    { 
      icon: User,
      color: 'text-green-600', 
      name: 'Profile', 
      link: '/profile',
      delay: 'delay-200'
    },
    { 
      icon: PlusCircle,
      color: 'text-purple-600',
      name: 'Create', 
      link: '/create-portfolio',
      delay: 'delay-300'
    },
    { 
      icon: LayoutGrid,
      color: 'text-indigo-600',
      name: 'Templates', 
      link: '/templates',
      delay: 'delay-400'
    }
  ];

  const handleLogout = () => {
    // Implement logout logic
    setIsLoggedIn(false);
  };

  return (
    <nav className="w-full bg-white shadow-md py-4">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl font-bold text-indigo-600 flex items-center"
          >
            Portfolio AI
            <span className="ml-2 bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
              Beta
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white !bg-indigo-500 hover:text-gray-200 focus:outline-none"
            >
              <Menu size={18} />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <Link
                key={item.index}
                to={item.link}
                className={`relative group overflow-hidden rounded-lg 
                  bg-gray-50 hover:bg-white shadow-md hover:shadow-lg 
                  transition-all duration-300 transform hover:-translate-y-1 
                  px-3 py-2 flex items-center
                  ${item.delay}`}
              >
                <div className="flex items-center">
                  <item.icon 
                    className={`${item.color} transform group-hover:rotate-6 transition-transform mr-2`} 
                    size={20} 
                  />
                  <span className="text-gray-800 text-sm font-medium">
                    {item.name}
                  </span>
                </div>
              </Link>
            ))}

            {/* Authentication Actions */}
            {isLoggedIn ? (
              <div className="flex items-center ml-4 space-x-3">
                <Link 
                  to="/settings"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  <Settings size={20} />
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center bg-red-50 text-red-600 hover:bg-red-100 px-2 py-1 rounded-md text-sm transition-colors"
                >
                  <LogOut className="mr-1" size={16} />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center ml-4 space-x-3">
                <Link 
                  to="/login"
                  className="text-gray-700 hover:text-indigo-600 text-sm px-2 py-1 rounded-full"
                >
                  Login
                </Link>
                <Link 
                  to="/signup"
                  className="bg-indigo-500 !text-white text-sm px-3 py-1.5 rounded-full hover:bg-indigo-600 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute left-0 w-full bg-white z-10 shadow-lg md:hidden mt-2">
            <div className="flex flex-col">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="flex !text-gray-700 items-center px-4 py-3 hover:bg-gray-100 "
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon 
                    className={`${item.color} mr-2`} 
                    size={20} 
                  />
                  {item.name}
                </Link>
              ))}
              
              {isLoggedIn ? (
                <>
                  <Link 
                    to="/settings"
                    className="flex items-center px-4 py-3 hover:bg-gray-100 border-b"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Settings className="mr-2" />
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left flex items-center px-4 py-3 hover:bg-gray-100 border-b text-red-600"
                  >
                    <LogOut className="mr-2" />
                    Logout
                  </button>
                </>
              ) : (
                <div className="p-4 space-y-2">
                  <Link 
                    to="/login"
                    className="block text-center bg-gray-100 text-gray-800 px-4 py-2 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup"
                    className="block text-center bg-indigo-600 !text-white px-4 py-2 rounded-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;