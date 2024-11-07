import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserCircle2 } from 'lucide-react'; // Make sure to install lucide-react or import icon from your icon library
import { setUser } from '../store/authSlice'; // Adjust import path for your logout action
import axios from 'axios';
import { API_URL } from '../server';
import toast from 'react-hot-toast';

const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle dropdown visibility
  const user = useSelector((state) => state.auth.user); // Get user from Redux store
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login'); // Redirect to login page
    setIsOpen(false); // Close dropdown after navigation
  };

  const handleSignup = () => {
    navigate('/signup'); // Redirect to signup page
    setIsOpen(false);
  };

  const handleLogout = async () => {
    await axios.post(`${API_URL}/users/logout`);
    dispatch(setUser(null)); // Dispatch logout action to clear user state in Redux
    toast.success("Logout Successful")
    navigate('/'); // Redirect to home page after logout
    setIsOpen(false);
  };

  useEffect(() => {
    // Close dropdown when clicked outside of the menu
    const handleClickOutside = (event) => {
      if (dropdownRef.current &&!dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };

  }, [])

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center focus:outline-none"
      >
        <UserCircle2 className="text-blue-600 w-8 h-8" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {user ? (
                <>
                    <button
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                        {user.isVerified ? "Verified" : "Not Verified"}
                    </button>
                    <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Logout
                    </button>
                </>
            ) : (
              <>
                <button
                  onClick={handleLogin}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                >
                  Login
                </button>
                <button
                  onClick={handleSignup}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                >
                  Signup
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
