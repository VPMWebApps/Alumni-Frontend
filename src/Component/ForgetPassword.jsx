import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../server';
import { Loader } from 'lucide-react';
import toast from 'react-hot-toast';

const ForgetPassword = () => {
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API_URL}/users/forget-password`, {email}, {withCredentials: true});
      toast.success("Resset OTP send to your email");
      navigate(`/resetpassword?email=${encodeURIComponent(email)}`); // Redirect to home page after successful login
    } catch (error) {
      setError(error.response.data.error.statusCode);
      toast.error(error.response.data.error.statusCode);
    } finally {
      setLoading(false);
      setError(null);
    }
  }
  
    return (
      <>
        <div
          className="w-full h-screen flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png')` }} // Add your image URL here
        >
          <form onSubmit={handleSubmit} className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 max-w-sm w-full">
            {error && <p className="text-red-500 font-semibold mb-2" >{error}</p>}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {!loading ? <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            >
              Submit
            </button> : <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
              disabled={loading}
            >
              <Loader className="animate-spin mx-auto" size={24} />
            </button>}
          </form>
        </div>
      </>
    );
};

export default ForgetPassword;