import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../server';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/authSlice';
import { Loader } from 'lucide-react';

const Verify = () => {

    const [code, setCode] = useState(["", "", "", ""])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    const handleKeyDown = (index, e) => {
        if(e.key == "Backspace" && !code[index] && index>0) {
            inputRef.current[index - 1].focus();
        }
    }

    const handleChange = (index, value) => {
        const newCode = [...code];

        // Handle posted content
        if(value.length > 1) {
            const postedCode = value.slice(0, 4).split("");
            for(let i = 0; i < 4; i++) {
                newCode[i] = postedCode[i] || "";
            }
            setCode(newCode);
            // Focus on the last non-empty input or the first empty one
            const lastFilledIndex = newCode.findLastIndex(digit => digit !== "");
            const focusIndex = lastFilledIndex < 3 ? lastFilledIndex + 1 : 3;
            inputRef.current[focusIndex].focus();
        } else {
            newCode[index] = value;
            setCode(newCode);

            // Move focus to the next input field if value is entered
            if(value && index < 3){
                inputRef.current[index + 1].focus();
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const verificationCode = code.join("");
        try {
            const res = await axios.post(`${API_URL}/users/verify`, {otp: verificationCode}, {withCredentials: true});
            const verifiedUser = res.data.data.user;
            dispatch(setUser(verifiedUser))
            toast.success("Email verified successfully");
            navigate('/'); // Redirect to home page when verification is successful
        } catch (error) {
            console.log(error);
            setError(error.response.data.error.statusCode);
            toast.error(error.response.data.error.statusCode);
        } finally {
            setLoading(false);
        }
    }

    const handleResendOTP = async () => {
        setLoading(true);
        try {
            const res = await axios.post(`${API_URL}/users/resend`, null, { withCredentials: true });
            toast.success("New OTP is sent to an email");
        } catch (error) {
            setError(error.response.data.error.statusCode);
            toast.error(error.response.data.error.statusCode);
        } finally {
            setLoading(false);
        }
    }

    // Auto submit when all fields are filled
    useEffect(() => {
        if(code.every(digit => digit !== '')) {
            handleSubmit(new Event('submit'));
        }
    }, [code])

    // Redirect to signup page if user is not logged in
    useEffect(() => {
        if(!user) {
          navigate('/signup', { replace: true });
        }
      },[user,navigate]);
 
  return (
    <>
    <div
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png')` }} // Add your image URL here
      >
        <div className='bg-white bg-opacity-90 rounded-lg shadow-lg p-8 max-w-md w-full' >
            <div className="mb-5">
                <h2
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
                >
                Verify Your Email
                </h2>
                <p className='text-center text-gray-800 mb-4'>Enter the 4-digit code sent to your email address.</p>
            </div>
            <form onSubmit={handleSubmit} className='space-y-6' >
                <div className='flex justify-between'>
                    {code.map((digit, index) => (
                        <input 
                            Key={index}
                            ref={(e) => (inputRef.current[index] = e)}
                            type="text" 
                            maxLength='4'
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className='w-12 h-12 text-center text-2xl font-bold bg-gray-300 border-2 border-gray-500
                            rounded-lg focus:border-blue-500 focus:outline-none'
                        />
                    ))}
                </div>
                {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
                <div className='flex items-center justify-between gap-4'>
                    {!loading && 
                        <>
                            <button
                                type='submit'
                                onClick={handleSubmit}
                                disabled={loading || code.some(digit => !digit)}
                                className='w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50'
                                >
                                {loading ? "Verifying..." : "Verify Email"}
                            </button>
                            <button
                                type='submit'
                                onClick={handleResendOTP}
                                className='w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50'
                                >
                                Resend OTP
                            </button>
                        </>
                    }
                    {loading && 
                        <button
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                            disabled={loading}
                        >
                            <Loader className='animate-spin mx-auto' size={24} />
                        </button>
                    }
                </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default Verify