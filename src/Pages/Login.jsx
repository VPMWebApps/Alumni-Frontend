import axios from "axios";
import { Loader } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../server";
import { useDispatch } from "react-redux";
import { setUser } from '../store/authSlice.js';
import { setToken } from "../store/tokenSlice.js";

function Login() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
     ...formData,
      [name]: value,
    });
  };

const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const res = await axios.post(`${API_URL}/users/login`, formData, {withCredentials: true});
    // console.log("Response>>>>>>>>>>>>.",res)
    const user = res.data.data.user;
    const token = res.data.token;
    // console.log(">>>>>>>>>>>token",token)
    dispatch(setUser(user)); // Dispatch login action to set user in Redux state
    dispatch(setToken(token));
    toast.success("Login Successful");
    navigate('/'); // Redirect to home page after successful login
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
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png')` }} // Add your image URL here
      >
        <form onSubmit={handleLogin} className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 max-w-sm w-full">
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
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Enter Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={formData.password}
              onChange={handleChange}
            />
            <Link 
              to="/forgetpassword" 
              className="text-red-500 text-right block text-sm font-medium mt-2" 
            >
              Forget Password ?
            </Link>
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
          <div className="flex items-start mt-5">

          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900"
          >
            If you Don't have account please <Link to='/signup'><span className="text-blue-600">create a Account</span> </Link>
          </label>
        </div>
        </form>
      </div>
    </>
  );
}

export default Login;
