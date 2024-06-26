import React,{useEffect,useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const SignupOtp = () => {
    const navigate = useNavigate();
    const inputRef = useRef([]);

    useEffect(()=>{
        inputRef.current[0]?.focus();
    },[]);

    const handleChange = (e,index)=>{
        const {value} = e.target;
        if (value.length ===1 && index < inputRef.current.length - 1){
            inputRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e,index) =>{
        if (e.key === 'Backspace' && !inputRef.current[index].value && index > 0){
            inputRef.current[index -1].focus();
            inputRef.current[index -1].value = '';

        }else if(e.key === 'ArrowLeft' && index >0){
            inputRef.current[index -1].focus();

        }else if(e.key === 'ArrowRight' && index < inputRef.current.length - 1){
            inputRef.current[index + 1].focus();
        }
    };



    const handleSubmit = async(e)=>{
        e.preventDefault();
        const otp = inputRef.current.map(input => input.value).join('');
        try {
            const response = await axios.post('http://localhost:3001/verify-otp', { otp })
            console.log('Otp verification successful',response.data);
            navigate('/login')
        } catch (error) {
            console.error('There was an error verifying the OTP!', error)
            
        }

    };
  return (
   <div className="flex items-center justify-center min-h-screen bg-gray-200">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className='text-2xl font-bold mb-6 text-center'>Enter OTP</h2>
        <form onSubmit={handleSubmit} className='flex justify-center space-x-2'>
            {Array.from({length:6}).map((_,index) =>(
                <input type="text"
                key={index}
                maxLength="1"
                className='w-12 h-12 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                 onChange={(e) => handleChange(e,index)}
                 onKeyDown={(e) => handleKeyDown(e,index)}
                 ref={(el) =>(inputRef.current[index] = el)}
                 />
            ))}

        </form>
        <button onClick={handleSubmit} className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 mt-4">
            Verify OTP
        </button>
    </div>
   </div>
  )
}

export default SignupOtp