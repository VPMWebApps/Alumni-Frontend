import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { UserCircle2 } from 'lucide-react';  // Ensure lucide-react is installed
import { useSelector } from 'react-redux';
import DropDownMenu from './DropDownMenu';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className='fixed left-0 right-0 top-0 z-10 w-full'>
        <div className="bg-white p-4 flex justify-between items-center">
          <Link to="/">
            <h1 className="text-xl sm:text-base font-bold text-blue-600">
              VPM R.Z SHAH COLLEGE MULUND (E), MUMBAI
            </h1>
          </Link>
          
          <div className='hidden md:block'>
            <nav className="flex space-x-4">
              <Link to='/News' className="text-gray-600 hover:underline underline-offset-8 decoration-2 decoration-blue-600">NEWS</Link>
              <Link to="/Events" className="text-gray-600 hover:underline underline-offset-8 decoration-2 decoration-blue-600">EVENTS</Link>
              <Link to="/Alumni" className="text-gray-600 hover:underline underline-offset-8 decoration-2 decoration-blue-600">ALUMNI MEMBER</Link>
              <Link to="/Campus" className="text-gray-600 hover:underline underline-offset-8 decoration-2 decoration-blue-600">CAMPUS LIFE</Link>
              <Link to="/Job" className="text-gray-600 hover:underline underline-offset-8 decoration-2 decoration-blue-600">CAREER</Link>
            </nav>
          </div>
          <div>
              <DropDownMenu />    
          </div>        

        {/* Mobile Menu Button */}
        <div className="md:hidden p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black hover:bg-gray-200 p-2 rounded-md"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Links */}
        {isOpen && (
          <div className="md:hidden bg-white p-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/News" className="text-gray-600 hover:underline underline-offset-8 decoration-2 decoration-blue-600">NEWS</Link>
              <Link to="/Events" className="text-gray-600 hover:underline underline-offset-8 decoration-2 decoration-blue-600">EVENTS</Link>
              <Link to="/Alumni" className="text-gray-600 hover:underline underline-offset-8 decoration-2 decoration-blue-600">ALUMNI MEMBER</Link>
              <Link to="/Campus" className="text-gray-600 hover:underline underline-offset-8 decoration-2 decoration-blue-600">CAMPUS LIFE</Link>
              <Link to="/Job" className="text-gray-600 hover:underline underline-offset-8 decoration-2 decoration-blue-600">CAREER</Link>
            </nav>
          </div>
        )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
