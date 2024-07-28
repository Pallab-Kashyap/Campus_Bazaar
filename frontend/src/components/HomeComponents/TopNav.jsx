import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import {useHomeContext} from '../../context/homeConext'

function TopNav() {

  const {sideNavDisplay,setSideNavDisplay} = useHomeContext();

  const handleClick = (e) => {
    setSideNavDisplay((sideNavDisplay === 'hidden') ? 'block' : 'hidden')
  }

  return (
    <div className="bg-black opacity-90  rounded-xl h-[9%]  flex justify-between py-3 px-12 sticky top-2 z-10">
      <button onClick={handleClick} className="text-white text-3xl md:hidden"><IoMenuOutline /></button>
      <div className="websiteLogo text-yellow-300 text-5xl">cB</div>
      <div 
        className="userProfileLogo h-10 w-10 p-5 text-blue-500 text-2xl rounded-full flex justify-center items-center border-blue-500 border-solid border-4">
        P
      </div>
    </div>
  );
}

export default TopNav;
