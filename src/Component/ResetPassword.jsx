import { Loader } from 'lucide-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { setUser } from '../store/authSlice';
import { API_URL } from '../server';
import axios from 'axios';

const ResetPassword = () => {
  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams] = useSearchParams();
    const email = searchParams.get("email");

    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!email || !otp || !password || !passwordConfirm) return;
        if(password !== passwordConfirm) return setError("Passwords do not match");
        setLoading(true);
        try {
            const data = { email, otp, password, passwordConfirm };

            const res = await axios.post(`${API_URL}/users/reset-password`, data, { withCredentials: true });
            dispatch(setUser(res.data.data.user));
            toast.success("Password reset successful");
            navigate('/login'); // Redirect to login page when password reset is successful     
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
            <form className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 max-w-sm w-full">
                {error && <p className="text-red-500 font-semibold mb-2" >{error}</p>}
                <div className="mb-5">
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Enter OTP
                </label>
                <input
                    type="number"
                    id="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg no-spinner focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter Your Email"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                </div>
                <div className="mb-5">
                <label
                    htmlFor="passwordConfirm"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                >
                    Confirm Your password
                </label>
                <input
                    type="password"
                    name="passwordConfirm"
                    placeholder="Enter Your Password"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                </div>
                {!loading ? 
                    <div className='flex items-center justify-center gap-4 mt-6' >
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                        >
                            Change Password
                        </button> 
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                        >
                            <Link to="/forgetpassword" >Go Back</Link>
                        </button> 
                    </div>
                : <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                disabled={loading}
                >
                <Loader className="animate-spin mx-auto" size={24} />
                </button>}
            </form>
            </div>
        </>
    );
}

export default ResetPassword