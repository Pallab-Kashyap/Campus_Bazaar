import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { createUser } from "../../utils/API/Auth.js";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { FcDepartment } from "react-icons/fc";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useUserContext } from '../../context/userContext.js'

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");
  const [department, setDepartment] = useState("");
  const { setUser } = useUserContext()



  const handleClick = async (e) => {
    e.preventDefault();

    const res = await createUser({
      name,
      email,
      password,
    });

    // setName("");
    // setEmail("");
    // setPass("");
    // setCollege("");
    // setYear("");
    // setDepartment("");

    
    if (res.status === 'success') {

      setUser(res.user)
      navigate("/login");
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
            placeholder="    username"
            value={name}
            onChange={(e) => setName(e.target.value)}
           
          />
           
         
        </div>

        <div className="InputBox">
        
          <label htmlFor="email" className="block mt-3 mb-1">
            Email
            
          </label>
          <input 
            type="email"
            id="email"
            placeholder="    email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           
        </div>

        
        {/* <div className="InputBox">
          <label htmlFor="college" className="block mt-4 mb-1">
           college
          </label>
          <FaUniversity className='icon'/>
          <input
            type="college"
            id="college"
            placeholder="    college"
            value={pass}
            onChange={(e) => setCollege(e.target.value)}
          />
          
        </div>

        <div className="InputBox">
          <label htmlFor="department" className="block mt-5 mb-1">
           Department
          </label>
          <FcDepartment className='icon' />
          <input
            type="department"
            id="department"
            placeholder="    department"
            value={pass}
            onChange={(e) => setYear(e.target.value)}
          />
          
        </div>


        <div className="InputBox">
          <label htmlFor="year" className="block mt-6 mb-1">
           year
          </label>
          <FaRegCalendarAlt className='icon'/>
          <input
            type="year"
            id="year"
            placeholder="     year"
            value={pass}
            onChange={(e) => setYear(e.target.value)}
          />
           
        </div> */}
        <div className="InputBox">
          <label htmlFor="password" className="block mt-2 mb-1">
            password
          </label>
          <input
            type="password"
            id="password"
            placeholder="    password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
