import React, { useState } from 'react';
import { Link } from "react-router-dom";
import DropDownMenu from './DropDownMenu';
import logo from '../Assets/logo.png'; // Adjust the path based on your project structure

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='fixed left-0 right-0 top-0 z-10 w-full bg-white shadow-md'>
      <div className="px-4 py-3 flex flex-wrap justify-between items-center relative">
        
        {/* Top Text - Visible on All Screens */}
        <div className="w-full text-center mb-2 md:mb-0 md:absolute md:right-16 md:top-4">
          <span className="text-gray-600 font-semibold text-sm md:text-base">
          VPM RZ SHAH COLLEGE
          </span>
        </div>

        {/* Logo */}
        <Link to="/" className="z-20">
          <img src={logo} alt="College Logo" className=" h-14 sm:h-16 object-contain mx-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:block'>
          <nav className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:underline underline-offset-8 decoration-2 decoration-blue-600">HOME</Link>
            <Link to="/News" className="text-gray-600 hover:underline underline-offset-8 decoration-2 decoration-blue-600">NEWS</Link>
            <Link to="/Events" className="text-gray-600 hover:underline underline-offset-8 decoration-2 decoration-blue-600">EVENTS</Link>
            <Link to="/Alumni" className="text-gray-600 hover:underline underline-offset-8 decoration-2 decoration-blue-600">MEMBERS</Link>
            <Link to="/Campus" className="text-gray-600 hover:underline underline-offset-8 decoration-2 decoration-blue-600">CAMPUS LIFE</Link>
            <Link to="/Job" className="text-gray-600 hover:underline underline-offset-8 decoration-2 decoration-blue-600">CAREERS@VPM</Link>
            <Link to="/alumnijob" className="text-gray-600 hover:underline underline-offset-8 decoration-2 decoration-blue-600">ALUMNI JOB PORTAL</Link>
            <Link to="/Gurudakshina" className="text-gray-600 hover:underline underline-offset-8 decoration-2 decoration-blue-600">GURUDAKSHINA</Link>
            <Link to="/Companieslist" className="text-gray-600 hover:underline underline-offset-8 decoration-2 decoration-blue-600">LIST OF COMPANIES</Link>
            <Link to="/Placement" className="text-gray-600 hover:underline underline-offset-8 decoration-2 decoration-blue-600">PLACEMENT NETWORK</Link>
          </nav>
        </div>

        {/* User Dropdown Menu */}
        <div className="z-20 ml-auto md:ml-0">
          <DropDownMenu />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black hover:bg-gray-200 p-2 rounded-md z-20 ml-4"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav className="flex flex-col p-4 space-y-3">
            <Link to="/" className="text-gray-600 py-2 px-3 hover:bg-blue-50 rounded-md hover:text-blue-700 transition-colors" onClick={() => setIsOpen(false)}>HOME</Link>
            <Link to="/News" className="text-gray-600 py-2 px-3 hover:bg-blue-50 rounded-md hover:text-blue-700 transition-colors" onClick={() => setIsOpen(false)}>NEWS</Link>
            <Link to="/Events" className="text-gray-600 py-2 px-3 hover:bg-blue-50 rounded-md hover:text-blue-700 transition-colors" onClick={() => setIsOpen(false)}>EVENTS</Link>
            <Link to="/Alumni" className="text-gray-600 py-2 px-3 hover:bg-blue-50 rounded-md hover:text-blue-700 transition-colors" onClick={() => setIsOpen(false)}>MEMBERS</Link>
            <Link to="/Campus" className="text-gray-600 py-2 px-3 hover:bg-blue-50 rounded-md hover:text-blue-700 transition-colors" onClick={() => setIsOpen(false)}>CAMPUS LIFE</Link>
            <Link to="/Job" className="text-gray-600 py-2 px-3 hover:bg-blue-50 rounded-md hover:text-blue-700 transition-colors" onClick={() => setIsOpen(false)}>CAREERS@VPM</Link>
            <Link to="/alumnijob" className="text-gray-600 py-2 px-3 hover:bg-blue-50 rounded-md hover:text-blue-700 transition-colors" onClick={() => setIsOpen(false)}>ALUMNI JOB PORTAL</Link>
            <Link to="/Gurudakshina" className="text-gray-600 py-2 px-3 hover:bg-blue-50 rounded-md hover:text-blue-700 transition-colors" onClick={() => setIsOpen(false)}>GURUDAKSHINA</Link>
            <Link to="/Companieslist" className="text-gray-600 py-2 px-3 hover:bg-blue-50 rounded-md hover:text-blue-700 transition-colors" onClick={() => setIsOpen(false)}>LIST OF COMPANIES</Link>
            <Link to="/Placement" className="text-gray-600 py-2 px-3 hover:bg-blue-50 rounded-md hover:text-blue-700 transition-colors" onClick={() => setIsOpen(false)}>PLACEMENT NETWORK</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
