import React, { useState } from "react";
import { Link } from "react-router-dom";
import { findUser } from "../../utils/API/Auth.js";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    const status = await findUser({
      email,
      pass,
    });

    setEmail("");
    setPass("");

    if (status) {
      console.log(status);
      navigate("/home");
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <form className="signupForm bg-slate-700 h-fit w-fit p-8">
        <div className="InputBox">
          <label htmlFor="email" className="block mt-2 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="InputBox">
          <label htmlFor="password" className="block mt-2 mb-1">
            password
          </label>
          <input
            type="password"
            id="password"
            placeholder="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <button
          onClick={handleClick}
          className="px-4 py-2 my-4 ml-14 bg-orange-600 text-white rounded-lg"
        >
          LogIn
        </button>
        <div className="text-center">
          <Link to="/" className=" text-orange-600">
            SignUp
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
