import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { createUser } from "../../utils/API/Auth.js";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    const status = await createUser({
      name,
      email,
      pass,
    });

    setName("");
    setEmail("");
    setPass("");

    console.log(status);
    if (status) {

      navigate("/login");
      console.log('nev');
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <form className="signupForm bg-slate-700 h-fit w-fit p-8">
        <div className="InputBox">
          <label htmlFor="username" className="block mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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
          className="px-4 py-2 my-4 ml-6 bg-orange-600 text-white rounded-lg"
        >
          Create User
        </button>
        <p className="text-white">
          already have account?{" "}
          <Link to="/login" className=" text-orange-600">
            LogIn
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
