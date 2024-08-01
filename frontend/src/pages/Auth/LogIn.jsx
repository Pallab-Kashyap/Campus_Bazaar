import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findUser } from "../../utils/API/Auth.js";
import { useNavigate } from "react-router-dom";
import { useUserContext } from '../../context/userContext.js'
import { getUserDetails } from '../../utils/API/user.js'

function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useUserContext()

  useEffect(() => {
    const checkUser = async () => {
      if(user){
        console.log(user);
        navigate('/profile')
      }
      else{
        const res = await getUserDetails();
        console.log('no user', res);
        if(res){

          setUser(res)
        }
        else{
          return
        }
      }
  }
  checkUser();
  }, [])


  const handleClick = async (e) => {
    e.preventDefault();

    const res = await findUser({
      email,
      password,
    });

    setEmail("");
    setPassword("");

    console.log(res);

    if (res.status === "success") {
      setUser(res.user)
      navigate("/");
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleClick}
          className="px-4 py-2 my-4 ml-14 bg-orange-600 text-white rounded-lg"
        >
          LogIn
        </button>
        {/* <div className="text-center mb-2">
          <Link to="/forgotPassword" className=" text-orange-600">
            Forgot password
          </Link>
        </div> */}
        <div className="text-center">
          <Link to="/signin" className=" text-orange-600">
            SignUp
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LogIn;

