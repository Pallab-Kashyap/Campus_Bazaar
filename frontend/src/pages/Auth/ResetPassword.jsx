import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { resetPassword } from "../../utils/API/Auth.js";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { userId, token } = useParams()

  const handleClick = async (e) => {
    e.preventDefault();
    if(password != confirmPassword) return

    setPassword("");
    setConfirmPassword("");
    
    const body = {
      userId,
      token,
      password
    }
    const status = await resetPassword(body)
    if(status){
      navigate('/login')
    }
    else{
      
    }
  };

  return (
    <div className="md:ml-72 h-full w-full flex flex-col items-center pt-40 gap-16 bg-black">
      <div className="text-3xl font-semibold text-white">
        <h1>Set new password</h1>
      </div>
      <div>
        <form className="">
          <div>
            <label htmlFor="email" className="block mt-2 mb-2 text-[19px] text-zinc-200">
              Password
            </label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="h-8 rounded-lg w-80 p-4 border-zinc-700 border-2 bg-transparent mb-7 text-zinc-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-lg text-[19px] text-zinc-200">
              Confirm password
            </label>
            <input
              type="text"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              className="h-8 rounded-lg w-80 p-4 border-zinc-700 border-2 bg-transparent mb-7 text-zinc-300"
            />
          </div>

          <button 
          onClick={handleClick}
          className="p-2 w-full bg-blue-500 rounded-lg font-medium text-white">
            Reset password
          </button>
        </form>
      </div>
      <Link to="/login" className="flex text-zinc-300">
        <FaArrowLeftLong className="mr-2 mt-1" />
        <p>Back to login</p>
      </Link>
    </div>
  );
}

export default ResetPassword;
