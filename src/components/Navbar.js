import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gray-900 px-6 md:px-10 lg:px-16 xl:px-20">
      <nav className="py-6 md:py-8 lg:py-10 flex justify-between items-center">
        <h1 className="text-3xl md:text-4xl font-burtons text-white">
          <Link to="/">SecurePass</Link>
        </h1>
        <ul className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
          <li>
            <Link
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
              to="/login"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
              to="/signup"
            >
              Signup
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
