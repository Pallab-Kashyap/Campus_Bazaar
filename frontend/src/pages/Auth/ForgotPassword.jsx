import React, { useState } from "react";
import { Link } from "react-router-dom";
import { findUser, forgotPassword } from "../../utils/API/Auth.js";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    const body = {email}

    const status = await forgotPassword(body)
    setEmail("");
    console.log('clicked');

    if (status) {
      console.log(status);
    }
  };

  return (
    <div className="md:ml-72 h-full w-full flex flex-col items-center pt-40 gap-16 bg-black">
      <div className="text-3xl font-semibold text-white">
        <h1>Forgot password?</h1>
      </div>
      <div>
        <form className="">
          <div>
            <label htmlFor="email" className="block mt-2 mb-2 text-lg text-zinc-200">
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="h-8 rounded-lg w-80 p-4 border-zinc-700 border-2 bg-transparent mb-7 text-zinc-300"
            />
          </div>

          <button 
          onClick={handleClick}
          className="p-2 w-full bg-blue-500 rounded-lg font-medium text-white">Reset password</button>
        </form>
      </div>
      <Link
      to="/login"
      className="flex text-zinc-300"
      >
        <FaArrowLeftLong className="mr-2 mt-1"/>
        <p>Back to login</p>
      </Link>
    </div>
  );
}

export default ForgotPassword;
