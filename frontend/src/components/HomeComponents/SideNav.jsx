import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {useHomeContext} from '../../context/homeConext'
import './HomeComponents.css'

import { IoIosPricetag } from "react-icons/io";
import { RiShoppingCartFill } from "react-icons/ri";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { IoIosNotifications } from "react-icons/io";
import { RiUser3Fill } from "react-icons/ri";
import { ImUserTie } from "react-icons/im";
import { useUserContext } from "../../context/userContext";


function SideNav() {
  const {setUser} = useUserContext()
  const navigate = useNavigate()

  const {sideNavDisplay} = useHomeContext();
  const  handleLogout = () => {
    setUser(null)
    localStorage.removeItem('token');
    navigate('/')
  }


  return (
    <div className={`sideNave bg-black z-20 ${sideNavDisplay} h-3/5 fixed w-screen flex flex-col items-center pl-16 gap-y-4 text-white md:h-[88.5%]  left-1.5 rounded-xl py-10 md:pl-6  md:w-auto md:block `}>

      <div className="p-1 px-2 w-64 m-1 mb-3 hover:bg-zinc-800 rounded-lg flex">
        <div className=" text-xl mr-2 mt-1">
          <IoIosPricetag />
        </div>
        <Link to="/" className="text-xl font-medium grow">
          All Products
        </Link>
      </div>
      
      <div className="p-1 px-2 w-64 m-1 mb-3 hover:bg-zinc-800 rounded-lg flex">
        <div className=" text-xl mr-2 mt-1">
        <RiShoppingCartFill />
        </div>
        <Link to="/cart" className="text-xl font-semibold grow">
          Cart
        </Link>
      </div>

      <div className="p-1 px-2 w-64 m-1 mb-3 hover:bg-zinc-800 rounded-lg flex ">
        <div className=" text-xl mr-2 mt-1">
        <HiChatBubbleLeftRight />
        </div>
        <Link to="/chat" className="text-xl font-semibold grow">
          Messages
        </Link>
      </div>

      <div className="p-1 px-2 w-64 m-1 mb-3 hover:bg-zinc-800 rounded-lg flex">
        <div className=" text-xl mr-2 mt-1">
        <IoIosNotifications />
        </div>
        <Link to="/" className="text-xl font-semibold grow">
          Notification
        </Link>
      </div>

      <div className="p-1 px-2 w-64 m-1 mb-3 hover:bg-zinc-800 rounded-lg flex">
        <div className=" text-xl mr-2 mt-1">
        <RiUser3Fill />
        </div>
        {/* <Link to={(user) ? '/profile' : 'login'} className="text-xl font-semibold grow"> */}
        <Link to='/login' className="text-xl font-semibold grow">
          Profile
        </Link>
      </div>

      <div className="p-1 px-2 w-64 m-1 mb-3 hover:bg-zinc-800 rounded-lg flex">
        <div className=" text-xl mr-2 mt-1">
        <ImUserTie />
        </div>
        <Link to="/sell" className="text-xl font-semibold grow">
          Sell
        </Link>
      </div>


      <div className="p-1 px-2 w-64 m-1 mb-3 hover:bg-zinc-800 rounded-lg flex">
        <div className=" text-xl mr-2 mt-1">
        <ImUserTie />
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>

    </div>
  );
}

export default SideNav;
